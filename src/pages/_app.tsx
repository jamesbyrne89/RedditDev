import App, { Container } from 'next/app';
import axios from 'axios';
import { endpoints } from '../lib/subreddits';
import { filterPostsCallback, sortByNewest } from '../lib/utils';
import db from '../db/firestore';
import { IRedditPost, IFavouritePost } from '../interfaces/index';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/styles/constants';

interface Props { loading: boolean, posts: IRedditPost[], favourites: [] }

const withTheme = Component => {
  return <Component />;
};
class MyApp extends App<Props> {
  state = {
    loading: true,
    posts: [],
    filteredPosts: [],
    isFiltered: false,
    favourites: [],
    theme: lightTheme,
    themeName: 'light',
  };
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = { favourites: [] };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  async componentDidMount() {
    const data = await axios.all(
      Object.keys(endpoints).map(url => axios.get(endpoints[url])),
    );
    const cleaned: IRedditPost[] = data.reduce(
      (acc: IRedditPost[], curr: any): IRedditPost[] => {
        return [ ...curr.data.data.children, ...acc ];
      },
      [],
    );
    const postsSortedByNewest: IRedditPost[] = cleaned.sort(sortByNewest);
    this.setState({ posts: postsSortedByNewest, loading: false });
    db.collection('favourites').onSnapshot(querySnapshot => {
      const favourites = querySnapshot.docs.map(
        doc => ({ doc_id: doc.id, data: doc.data().data }),
      );
      if (favourites.length !== this.state.favourites.length) {
        this.setState({ favourites });
      }
    });
  }

  filterPosts = (searchTerm = '', subreddits = []) => {
    if (!searchTerm && subreddits.length === 0) {
      return this.setState({
        filteredPosts: this.state.posts,
        isFiltered: false,
      });
    }
    this.setState({ loading: true });
    const filtered = this.state.posts.filter(
      filterPostsCallback(searchTerm, subreddits),
    );
    this.setState({
      filteredPosts: filtered,
      loading: false,
      isFiltered: true,
    });
  };

  addToFavourites = (postToAdd: IFavouritePost): void => {
    if (postToAdd.doc_id) {
      return this.removeFromFavourites(postToAdd);
    }
    db
      .collection('favourites')
      .add(postToAdd)
      .then(docRef => {
        console.log('added', { ...postToAdd, doc_id: docRef.id });
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  removeFromFavourites = (postToRemove: IFavouritePost): void => {
    db.collection('favourites').doc(postToRemove.doc_id).delete();
  };

  toggleTheme = () => {
    this.setState(
      currentState =>
        ({
          theme: currentState.theme == darkTheme ? lightTheme : darkTheme,
          themeName: currentState.themeName == 'light' ? 'dark' : 'light',
        }),
    );
  };

  render() {
    const { posts, filteredPosts, isFiltered, theme, themeName } = this.state;
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component
            posts={isFiltered ? filteredPosts : posts}
            loading={this.state.loading}
            onSearchSubmit={this.filterPosts}
            onAddToFavourites={this.addToFavourites}
            favourites={this.state.favourites}
            toggleTheme={this.toggleTheme}
            themeName={themeName}
            {...pageProps}
          />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
