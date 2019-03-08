import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from './Layout';
import Header from './Header';
import Card from './Card';
import { endpoints } from '../lib/subreddits';
import { constants } from '../styles/constants';

const CardsContainer = styled.section`
      -webkit-column-count: 4;
    column-count: 4;
    -webkit-column-gap: 2.5em;
    column-gap: 2.5em;
    border-top: solid 1px ${constants.text_grey_mid_two};
    padding-top: 1.25em;
    padding-bottom: 1em;
`;

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
    const sortByNewest = (a: number, b: number) =>
      b.data.created - a.data.created;
    this.setState({ posts: cleaned.sort(sortByNewest) });
    console.log(cleaned.slice(0, 20));
  }
  render() {
    const { posts } = this.state;
    return (
      <Layout>
        <Header />
        <CardsContainer>
          {
            posts.map(
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
