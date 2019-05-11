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
    themeName: 'light',
    uid: null
  };

  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = { favourites: [] };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  getFavourites = () => {
    db.collection('users')
      .doc(this.state.uid)
      .collection('favourites')
      .onSnapshot(querySnapshot => {
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
    this.getDisplayPreference();

    auth.onAuthStateChanged(user => {
      console.log('Auth state changed.');
      if (user) {
        console.info('*** User is signed in ***', user);
        this.setState({ isAuthenticated: user, uid: user.uid });
        db.collection('users')
          .doc(user.uid)
          .set({
            email: user.email
          });
        this.getFavourites();
      } else {
        console.warn('*** User is signed out ***');
        this.setState({ isAuthenticated: null, uid: null });
        // checkAuthAndRedirect(ctx.res);
      }
    });
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

  addToLocalFavourites = (postToAdd: IFavouritePost): void => {
    const favouritesString = JSON.stringify([postToAdd]);
    sessionStorage.setItem('favourites', favouritesString);
  };

  addToFavourites = (postToAdd: IFavouritePost): void => {
    if (!isAuthenticated) {
      this.addToLocalFavourites(postToAdd);
      return;
    }
    if (postToAdd.doc_id) {
      return this.removeFromFavourites(postToAdd);
    }
    db.collection('users')
      .doc(this.state.uid)
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
    db.collection('users')
      .doc(this.state.uid)
      .collection('favourites')
      .doc(postToRemove.doc_id)
      .delete();
  };

  toggleTheme = () => {
    this.setState(currentState => ({
      theme: currentState.theme == darkTheme ? lightTheme : darkTheme,
      themeName: currentState.themeName == 'light' ? 'dark' : 'light'
    }));
  };

  handleLogout = () => {
    auth.signOut().then(() => {
      console.log('Logged out.');
    });
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
      favourites,
      loading,
      isAuthenticated
    } = this.state;
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component
            {...pageProps}
            posts={isFiltered ? filteredPosts : posts}
            loading={loading}
            onSearchSubmit={this.filterPosts}
            onAddToFavourites={this.addToFavourites}
            favourites={favourites}
            toggleTheme={this.toggleTheme}
            themeName={themeName}
            isAuthenticated={isAuthenticated}
            onLogoutClick={this.handleLogout}
          />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
