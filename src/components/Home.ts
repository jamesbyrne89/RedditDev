import React, { Component } from 'react';
import axios from 'axios';
import Layout from './Layout';
import Card from './Card';
import { endpoints } from '../lib/subreddits';

class Home extends Component {
  state = { posts: [] };
  async componentDidMount() {
    const data = await axios.all(
      Object.keys(endpoints).map(url => axios.get(endpoints[url])),
    );
    const cleaned = data.reduce(
      (acc, curr) => {
        return [ ...curr.data.data.children, ...acc ];
      },
      [],
    );
    this.setState({ posts: cleaned });
  }
  render() {
    const { posts } = this.state;
    return (
    //   <Layout>
    //     {posts.map(post => <Card postData={post.data} />)}
    //   </Layout>
    );
  }
}

export default Home;
