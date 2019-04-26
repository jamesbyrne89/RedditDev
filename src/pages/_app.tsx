import App, { Container } from 'next/app';
import axios from 'axios';
import { endpoints } from '../lib/subreddits';
import { filterPostsCallback, sortByNewest } from '../lib/utils';
import db, { auth } from '../db/firestore';
import { IRedditPost, IFavouritePost } from '../interfaces/index';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/styles/constants';

interface Props {
  loading: boolean;
  posts: IRedditPost[];
  favourites: [];
  isAuthenticated: boolean;
}

const DISPLAY_PREFERENCE_KEY = 'redditdev-display-mode';

// const checkAuthAndRedirect = res => {
//   if (res) {
//     res.writeHead(302, {});
//     res.end();
//   } else {
//     Router.push('localhost:3000/login');
//   }
//   return {};
// };
class MyApp extends App<Props> {
  state = {
    loading: true,
    posts: [],
    filteredPosts: [],
    isFiltered: false,
    favourites: [],
    theme: lightTheme,
    themeName: 'light'
  };

  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = { favourites: [] };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    let authenticatedUser = null;
    // auth.onAuthStateChanged(user => {
    //   if (user) {
    //     console.info('*** User is signed in ***');
    //     var displayName = user.displayName;
    //     var email = user.email;
    //     var emailVerified = user.emailVerified;
    //     var photoURL = user.photoURL;
    //     var isAnonymous = user.isAnonymous;
    //     var uid = user.uid;
    //     var providerData = user.providerData;
    //     // ...
    //   } else {
    //     console.warn('*** User is signed out ***');
    //     // checkAuthAndRedirect(ctx.res);
    //   }
    // });

    pageProps.isAuthenticated = !!authenticatedUser;
    return { pageProps };
  }

  getFavourites = () => {
    db.collection('favourites').onSnapshot(querySnapshot => {
      const favourites = querySnapshot.docs.map(doc => ({
        doc_id: doc.id,
        data: doc.data().data
      }));
      this.setState({ favourites });
    });
  };

  getPosts = async () => {
    const data = await axios.all(
      Object.keys(endpoints).map(url => axios.get(endpoints[url]))
    );
    const cleaned: IRedditPost[] = data.reduce(
      (acc: IRedditPost[], curr: any): IRedditPost[] => {
        return [...curr.data.data.children, ...acc];
      },
      []
    );
    const postsSortedByNewest: IRedditPost[] = cleaned.sort(sortByNewest);
    this.setState({ posts: postsSortedByNewest, loading: false });
  };

  getDisplayPreference = () => {
    const mode = localStorage.getItem(DISPLAY_PREFERENCE_KEY);
    if (mode) {
      this.setState({
        themeName: mode,
        theme: mode === 'dark' ? darkTheme : lightTheme
      });
    }
  };

  setDisplayPreference = mode => {
    localStorage.setItem(DISPLAY_PREFERENCE_KEY, mode);
  };

  async componentDidMount() {
    this.getPosts();
    this.getFavourites();
    this.getDisplayPreference();
  }

  filterPosts = (searchTerm = '', subreddits = []) => {
    if (subreddits.length === 0) {
      return this.setState({
        filteredPosts: this.state.posts,
        isFiltered: false
      });
    }
    const filtered = this.state.posts.filter(
      filterPostsCallback(searchTerm, subreddits)
    );
    this.setState({
      filteredPosts: filtered,
      loading: false,
      isFiltered: true
    });
  };

  addToFavourites = (postToAdd: IFavouritePost): void => {
    if (postToAdd.doc_id) {
      return this.removeFromFavourites(postToAdd);
    }
    db.collection('favourites')
      .add(postToAdd)
      .then(docRef => {
        console.log('added', { ...postToAdd, doc_id: docRef.id });
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  removeFromFavourites = (postToRemove: IFavouritePost): void => {
    db.collection('favourites')
      .doc(postToRemove.doc_id)
      .delete();
  };

  toggleTheme = () => {
    this.setState(currentState => ({
      theme: currentState.theme == darkTheme ? lightTheme : darkTheme,
      themeName: currentState.themeName == 'light' ? 'dark' : 'light'
    }));
  };

  componentDidUpdate() {
    this.setDisplayPreference(this.state.themeName);
  }

  render() {
    const {
      posts,
      filteredPosts,
      isFiltered,
      theme,
      themeName,
      favourites
    } = this.state;
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component
            {...pageProps}
            posts={isFiltered ? filteredPosts : posts}
            loading={this.state.loading}
            onSearchSubmit={this.filterPosts}
            onAddToFavourites={this.addToFavourites}
            favourites={favourites}
            toggleTheme={this.toggleTheme}
            themeName={themeName}
          />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
