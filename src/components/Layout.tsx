import * as React from 'react';
import Head from 'next/head';
import GlobalStyles from './styles/GlobalStyles';
import Header from './Header';
import Sidebar from './Sidebar';

type P = {
  title: string,
  onSearchSubmit: Function,
  onAddNewFavourite: Function,
};

const Layout = (props: P) => {
  const {
    children,
    title = 'redditDev',
    onSearchSubmit,
    onAddNewFavourite,
  } = props;
  return (
    <div>
      <GlobalStyles />
      <Head><title>{title}</title></Head>
      <Header
        onSearchSubmit={onSearchSubmit}
        onAddNewFavourite={onAddNewFavourite}
      />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
