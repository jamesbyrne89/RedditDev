import * as React from 'react';
import axios from 'axios';
import Layout from './Layout';
import Card from './Card';
import { endpoints } from '../lib/subreddits';

interface IProps {}

interface IState {}

class Home extends React.Component<IProps, IState> {
  state = { posts: [] };
  async componentDidMount() {
    const data = await axios.all(
      Object.keys(endpoints).map(url => axios.get(endpoints[url])),
    );
    const cleaned: array = data.reduce(
      (acc, curr): array => {
        return [ ...curr.data.data.children, ...acc ];
      },
      [],
    );
    this.setState({ posts: cleaned });
    console.log(cleaned.slice(0, 20));
  }
  render() {
    const { posts } = this.state;
    return (
      <Layout>
        {
          posts.map(
            post => (
              <Card
                key={post.data.id}
                subName={post.data.subreddit_name_prefixed}
                postData={post.data}
                title={post.data.title}
              />
            ),
          )
        }
      </Layout>
    );
  }
}

export default Home;
