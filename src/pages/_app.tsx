import App, { Container } from 'next/app';
import axios from 'axios';
import { endpoints } from '../lib/subreddits';
import {
  filterPostsCallback,
  isAlreadyFavourite,
  sortByNewest,
} from '../lib/utils';
import firestore from '../db/firestore';

interface Props { loading: boolean, posts: Array }

interface IPostToRemove {
  data: {
    created_utc: number,
    id: string,
    num_comments: number,
    permalink: string,
    subreddit_name_prefixed: string,
    title: string,
    url: string,
  },
}

class MyApp extends App<Props> {
  state = {
    loading: true,
    posts: [],
    filteredPosts: [],
    isFiltered: false,
    favourites: [],
  };
  static async getInitialProps() {
    const data = await axios.all(
      Object.keys(endpoints).map(url => axios.get(endpoints[url])),
    );
    const cleaned: Array<{}> = data.reduce(
      (acc: any, curr: any): Array<{}> => {
        return [ ...curr.data.data.children, ...acc ];
      },
      [],
    );
    let filterFunc;
    const postsSortedByNewest: Array<object> = cleaned.sort(sortByNewest);
    const postsToDisplay = filterFunc
      ? postsSortedByNewest.filter(filterFunc)
      : postsSortedByNewest;
    console.log(firestore);
    return { posts: postsToDisplay };
  }

  getFavourites = () => {
    firestore.collection('favourites').get().then(querySnapshot => {
      const savedFavourites: object[] = [];
      querySnapshot.forEach(doc => {
        console.log({ doc_id: doc.id, ...doc.data() });
        savedFavourites.push({ doc_id: doc.id, ...doc.data() });
      });
      console.log(savedFavourites);
      this.setState({ favourites: savedFavourites });
    });
  };

  componentDidMount() {
    localStorage.setItem('reddit-posts', JSON.stringify(this.props.posts));
    const cachedFavourites: Array<{}> = JSON.parse(
      localStorage.getItem('favourite-reddit-posts'),
    ) ||
      [];

    this.setState({
      loading: false,
      posts: this.props.posts,
      favourites: cachedFavourites,
    });

    this.getFavourites();
  }

  filterPosts = (searchTerm = '') => {
    if (!searchTerm) {
      return this.setState({
        filteredPosts: this.state.posts,
        isFiltered: false,
      });
    }
    this.setState({ loading: true });
    const filtered = this.state.posts.filter(filterPostsCallback(searchTerm));
    this.setState({
      filteredPosts: filtered,
      loading: false,
      isFiltered: true,
    });
  };

  addToFavourites = postToAdd => {
    if (postToAdd.doc_id) {
      return this.removeFromFavourites(postToAdd);
    }
    console.log('post to add:', postToAdd);
    firestore
      .collection('favourites')
      .add(postToAdd)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
    const newFavouritesList = [ ...this.state.favourites, postToAdd ];
    this.setState({ favourites: newFavouritesList }, () => {});
  };

  removeFromFavourites = (postToRemove: IPostToRemove) => {
    firestore.collection('favourites').doc(postToRemove.doc_id).delete();
    console.log('remove');
    const newFavouritesList = this.state.favourites.filter(
      fav =>
        postToRemove.data.title !== fav.data.title &&
          postToRemove.data.created_utc !== fav.data.created_utc,
    );
    this.setState({ favourites: newFavouritesList }, () => {
      localStorage.setItem(
        'favourite-reddit-posts',
        JSON.stringify(this.state.favourites),
      );
    });
  };

  render() {
    const { posts, filteredPosts, isFiltered } = this.state;
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component
          posts={isFiltered ? filteredPosts : posts}
          loading={this.state.loading}
          onSearchSubmit={this.filterPosts}
          onAddToFavourites={this.addToFavourites}
          favourites={this.state.favourites}
          {...pageProps}
        />
      </Container>
    );
  }
}

export default MyApp;
