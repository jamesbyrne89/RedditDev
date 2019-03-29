import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Search from '../components/Search';
import {
  StyledHeader,
  StyledMasthead,
  StyledHeaderTitle,
  StyledHeaderDescription,
  StyledNavItem,
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

interface Props { onSearchSubmit?: Function }

const Header: React.FunctionComponent<Props> = props => (
  <StyledHeader>
    <StyledMasthead>
      <div className="header__title-wrapper">
        <StyledHeaderTitle>
          <Link href="/"><a>{`{redditDev}`}</a></Link>
        </StyledHeaderTitle>
        <StyledHeaderDescription>
          The best of frontend web development on Reddit
        </StyledHeaderDescription>
      </div>
      <ul style={{ display: 'flex' }}>
        <StyledNavItem>
          <Link href="./favourites"><a>Favourites</a></Link>
        </StyledNavItem>
        <StyledNavItem>
          <Search onSearchSubmit={props.onSearchSubmit} />
        </StyledNavItem>
      </ul>
    </StyledMasthead>
  </StyledHeader>
);

export default Header;
