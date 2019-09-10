import { Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Search from './Search';
import ThemeToggler from './ThemeToggler';
import {
  HeaderStyles,
  MastheadStyles,
  LogoStyles,
  NavItemStyles
} from './styles/HeaderStyles';

const onRouteChangeStart = () => {
  NProgress.start();
};

const onRouteChangeComplete = () => {
  NProgress.done();
};

const onRouteChangeError = () => {
  console.log('routeChangeError');
};

Router.events.on('routeChangeStart', onRouteChangeStart);
Router.events.on('routeChangeComplete', onRouteChangeComplete);
Router.events.on('routeChangeError', onRouteChangeError);

interface Props {
  onSearchSubmit: Function;
  themeName: 'light' | 'dark';
  toggle: () => void;
  onLogoutClick: () => void;
  isAuthenticated: boolean;
}

const Header: React.FunctionComponent<Props> = ({
  themeName,
  toggle,
  onLogoutClick,
  isAuthenticated,
  onSearchSubmit
}: Props) => (
  <HeaderStyles>
    <MastheadStyles>
      <div className="header__title-wrapper">
        <LogoStyles>
          <Link href="/">
            <a>redditDev.</a>
          </Link>
        </LogoStyles>
      </div>
      <div>
        <div className="header__nav-wrapper">
          <ThemeToggler themeName={themeName} toggle={toggle} />
          {isAuthenticated ? (
            <Link href=".">
              <a onClick={onLogoutClick}>Logout</a>
            </Link>
          ) : (
            <Fragment>
              <Link href="/login">
                <a>Login</a>
              </Link>
              <Link href="/register">
                <a>Sign Up</a>
              </Link>
            </Fragment>
          )}
        </div>
        <ul>
          {isAuthenticated && (
            <NavItemStyles>
              <Link href="/favourites">
                <a>Favourites</a>
              </Link>
            </NavItemStyles>
          )}
          <NavItemStyles>
            <Search onSearchSubmit={onSearchSubmit} />
          </NavItemStyles>
        </ul>
      </div>
    </MastheadStyles>
  </HeaderStyles>
);

export default Header;
