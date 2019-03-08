import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from './Layout';
import Header from './Header';
import Sidebar from './Sidebar';
import Loader from './Loader';
import Card from './Card';
import { endpoints } from '../lib/subreddits';
import { constants, sizes } from '../styles/constants';

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

interface IState { posts: array, loading: boolean }

class Home extends React.Component<IProps, IState> {
  state = { posts: [], loading: true };
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
    const sortByNewest = (a: number, b: number) =>
      b.data.created - a.data.created;
    this.setState({ posts: cleaned.sort(sortByNewest), loading: false });
    console.log(cleaned.slice(0, 20));
  }
  render() {
    const { loading, posts } = this.state;
    return (
      <Layout title="redditDev - the best of frontend development on Reddit">
        <Header />
        <Sidebar />
        <CardsContainer>
          {
            loading
              ? <Loader />
              : posts.map(
                post => (
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
