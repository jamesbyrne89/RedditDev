import * as React from 'react';
import axios from 'axios';
import { endpoints } from '../lib/subreddits';
import styled, { createGlobalStyle } from 'styled-components';
import { filterPostsCallback, sortByNewest } from '../lib/utils';
import Head from 'next/head';
import { constants } from '../styles/constants';

const GlobalStyles = createGlobalStyle`
html {
    background: ${constants.background_grey};
    color: ${constants.text_grey_dark};
    margin: 0;
    padding: 0;
}

body {
    font-family: ${constants.sansSerif};
    /* opacity: 0; */
    -webkit-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
    margin: 0;
    padding: 0;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


a:link {
	text-decoration: none;
	color: inherit;
}

a:visited {
	color: inherit;
}

button {
	background: transparent;
	border: 0;
}
`;

interface IProps {}

interface IState { posts: Array<object>, loading: boolean }

const PostsProvider 

class Layout extends React.Component<Props> {
  // state = { posts: [], loading: true };

  // getPosts = async (filterFunc?: Function) => {
  //   const data = await axios.all(
  //     Object.keys(endpoints).map(url => axios.get(endpoints[url])),
  //   );
  //   const cleaned: Array<{}> = data.reduce(
  //     (acc: any, curr: any): Array<{}> => {
  //       return [ ...curr.data.data.children, ...acc ];
  //     },
  //     [],
  //   );

  //   const postsSortedByNewest: Array<object> = cleaned.sort(sortByNewest);

  //   if (filterFunc) {
  //     postsSortedByNewest.filter(filterFunc);
  //   }
  //   const postsToDisplay = filterFunc
  //     ? postsSortedByNewest.filter(filterFunc)
  //     : postsSortedByNewest;

  //   this.setState({ posts: postsToDisplay, loading: false });
  //   console.log(postsSortedByNewest.slice(0, 20));
  // };

  // componentDidMount() {
  //   this.getPosts();
  // }

  // onSearchSubmit = (searchTerm: string) => {
  //   this.getPosts(filterPostsCallback(searchTerm));
  // };

  render() {
    const { children, title = 'redditDev' } = this.props;
    return (
      <div>
        <GlobalStyles />
        <Head><title>{title}</title></Head>
        {children}
      </div>
    );
  }
}

export default Layout;
