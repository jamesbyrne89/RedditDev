import App, { Container } from 'next/app';
import axios from 'axios';
import { endpoints } from '../lib/subreddits';
import { filterPostsCallback, sortByNewest } from '../lib/utils';

interface Props { loading: boolean, posts: Array }

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    // getPosts = async (filterFunc?: Function) => {
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
    // if (filterFunc) {
    //   postsSortedByNewest.filter(filterFunc);
    // }
    const postsToDisplay = filterFunc
      ? postsSortedByNewest.filter(filterFunc)
      : postsSortedByNewest;

    return { posts: postsToDisplay, loading: false };
  }

  componentDidMount() {
    console.log(this.props.posts.slice(0, 10));
  }

  render() {
    const { Component, pageProps, loading = true, posts } = this.props;
    return (
      <Container>
        <Component posts={posts} loading={loading} {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
