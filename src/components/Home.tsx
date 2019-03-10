import * as React from 'react';

import { constants, sizes } from '../styles/constants';
import { filterPostsCallback, sortByNewest } from '../lib/utils';

import Card from './Card';
import Header from './Header';
import Layout from './Layout';
import Loader from './Loader';
import Sidebar from './Sidebar';
import axios from 'axios';
import { endpoints } from '../lib/subreddits';
import styled from 'styled-components';

const CardsContainer = styled.main`
    -webkit-column-count: 4;
    column-count: 4;
    -webkit-column-gap: 2.5em;
    column-gap: 2.5em;
    border-top: solid 1px ${constants.text_grey_mid_two};
    padding-top: 1.25em;
    padding-bottom: 1em;
    width: 85%;
    margin: 2rem auto;
    margin-left: calc(7.5% + 2rem);
    @media (max-width: ${sizes.desktop_lg}px) {
      column-gap: 1.5rem;
    }
@media (max-width: ${sizes.desktop_md}px) {
      column-count: 3;
    }
    @media (max-width: ${sizes.desktop_sm}px) {
      column-count: 2;
    }
    @media (max-width: ${sizes.tablet}px) {
      column-gap: 1rem;
      width: 90%;
      margin-left: calc(5% + 2rem);
    }
    @media (max-width: ${sizes.mobile}px) {
      column-count: 1;
      width: 95%;
      margin-left: auto;
    }
    &::after {
        content: '';
        width: 100%;
        position: fixed;
        height: 40px;
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(236, 238, 241, 0.001)), to(white));
        background: linear-gradient(rgba(236, 238, 241, 0.001), white);
        pointer-events: none;
        bottom: 0;
        left: 0;
    }

`;

interface IProps {}

interface IState { posts: Array<object>, loading: boolean }

class Home extends React.Component<IProps, IState> {
  state = { posts: [], loading: true };

  getPosts = async (filterFunc?: Function) => {
    const data = await axios.all(
      Object.keys(endpoints).map(url => axios.get(endpoints[url])),
    );
    const cleaned: Array<{}> = data.reduce(
      (acc: any, curr: any): Array<{}> => {
        return [ ...curr.data.data.children, ...acc ];
      },
      [],
    );

    const postsSortedByNewest: Array<object> = cleaned.sort(sortByNewest);

    if (filterFunc) {
      postsSortedByNewest.filter(filterFunc);
    }
    const postsToDisplay = filterFunc
      ? postsSortedByNewest.filter(filterFunc)
      : postsSortedByNewest;

    this.setState({ posts: postsToDisplay, loading: false });
    console.log(postsSortedByNewest.slice(0, 20));
  };

  componentDidMount() {
    this.getPosts();
  }

  onSearchSubmit = (searchTerm: string) => {
    this.getPosts(filterPostsCallback(searchTerm));
  };

  render() {
    const { loading, posts } = this.state;
    return (
      <Layout title="redditDev - the best of frontend development on Reddit">
        <Header onSearchSubmit={this.onSearchSubmit} />
        <Sidebar />
        <CardsContainer>
          {
            loading
              ? <Loader />
              : posts.map(
                (post: object): any => (
                  <Card
                    key={post.data.id}
                    subName={post.data.subreddit_name_prefixed}
                    postData={post.data}
                    title={post.data.title}
                    url={post.data.url}
                    permalink={post.data.permalink}
                    num_comments={post.data.num_comments}
                    created_utc={post.data.created_utc}
                  />
                ),
              )
          }
        </CardsContainer>
      </Layout>
    );
  }
}

export default Home;
