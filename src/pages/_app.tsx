import App, { Container } from 'next/app';
import axios from 'axios';
import { endpoints } from '../lib/subreddits';
import { filterPostsCallback, sortByNewest } from '../lib/utils';

interface Props { loading: boolean, posts: Array }

class MyApp extends App<Props> {
  state = { loading: true, posts: [] };
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

    return { posts: postsToDisplay };
  }

  componentDidMount() {
    this.setState({ loading: false, posts: this.props.posts });

    localStorage.setItem('reddit-posts', JSON.stringify(this.props.posts));
  }

  filterPosts = (searchTerm = '') => {
    const filtered = this.state.posts.filter(filterPostsCallback(searchTerm));
    this.setState({ posts: filtered });
  };

  render() {
    const { Component, pageProps, posts } = this.props;
    return (
      <Container>
        <Component
          posts={this.state.posts}
          loading={this.state.loading}
          onSearchSubmit={this.filterPosts}
          {...pageProps}
        />
      </Container>
    );
  }
}

export default MyApp;
