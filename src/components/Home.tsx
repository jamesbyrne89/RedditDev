import * as React from 'react';

import { constants, sizes } from './styles/constants';

import Card from './Card';
import Header from './Header';
import Loader from './Loader';
import Sidebar from './Sidebar';

import styled from 'styled-components';

import { isAlreadyFavourite } from '../lib/utils';

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

class Home extends React.Component<IProps, IState> {
  render() {
    const {
      loading,
      posts,
      favourites,
      onSearchSubmit,
      onAddNewFavourite,
    } = this.props;
    return (
      <React.Fragment>
        <Header
          onSearchSubmit={onSearchSubmit}
          onAddNewFavourite={onAddNewFavourite}
        />
        <Sidebar />
        <CardsContainer>
          {loading ? <Loader /> : posts.map((post: object): any => {
                console.log(post.doc_id);
                return (
                  <Card
                    key={post.data.id}
                    id={post.data.id}
                    doc_id={post.doc_id}
                    subName={post.data.subreddit_name_prefixed}
                    title={post.data.title}
                    url={post.data.url}
                    permalink={post.data.permalink}
                    num_comments={post.data.num_comments}
                    created_utc={post.data.created_utc}
                    isFavourite={
                      favourites.filter(
                        isAlreadyFavourite({
                          data: {
                            title: post.data.title,
                            created_utc: post.data.created_utc,
                          },
                        }),
                      ).length >
                        0
                    }
                    onAddToFavourites={this.props.onAddToFavourites}
                  />
                );
              })}
        </CardsContainer>
      </React.Fragment>
    );
  }
}

export default Home;
