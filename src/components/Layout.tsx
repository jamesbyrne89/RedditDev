import * as React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

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

type Props = { title: string };

const Layout: React.FunctionComponent<Props> = (
  { children, title = 'redditDev' },
) => (
  <div>
    <GlobalStyles />
    <Head><title>{title}</title></Head>
    {children}
  </div>
);

export default Layout;
