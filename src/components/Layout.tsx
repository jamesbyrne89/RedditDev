import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import GlobalStyles from './styles/GlobalStyles';
import Header from './Header';
import Sidebar from './Sidebar';
import BackToTopButton from './BackToTopButton';
import { debounce } from '../lib/utils';

type P = {
  title: string,
  onSearchSubmit: Function,
  onAddNewFavourite: Function,
  children: React.ReactNode,
};

const Layout = (props: P) => {
  const {
    children,
    title = 'redditDev',
    onSearchSubmit,
    onAddNewFavourite,
  } = props;

  const [ showBackToTopBtn, setShowBackToTopBtn ] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 500 && !showBackToTopBtn) {
      return setShowBackToTopBtn(true);
    }
    return setShowBackToTopBtn(false);
  };

  useEffect(
    () => {
      window.addEventListener('scroll', debounce(onScroll));

      return () => {
        window.removeEventListener('scroll', debounce(onScroll));
      };
    },
    [],
  );

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
      <BackToTopButton show={showBackToTopBtn} />
    </div>
  );
};

export default Layout;
