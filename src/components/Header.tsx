import { Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Search from '../components/Search';
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
}

const Header: React.FunctionComponent<Props> = props => (
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
          <ThemeToggler themeName={props.themeName} toggle={props.toggle} />
          {props.isAuthenticated ? (
            <Link href=".">
              <a onClick={props.onLogoutClick}>Logout</a>
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
          {props.isAuthenticated && (
            <NavItemStyles>
              <Link href="/favourites">
                <a>Favourites</a>
              </Link>
            </NavItemStyles>
          )}
          <NavItemStyles>
            <Search onSearchSubmit={props.onSearchSubmit} />
          </NavItemStyles>
        </ul>
      </div>
    </MastheadStyles>
  </HeaderStyles>
);

export default Header;
