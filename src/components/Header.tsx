import Link from 'next/link';
import Search from '../components/Search';
import {
  StyledHeader,
  StyledMasthead,
  StyledHeaderTitle,
  StyledHeaderDescription,
  StyledNavItem,
} from './styles/HeaderStyles';

interface Props { onSearchSubmit?: Function }

const Header: React.FunctionComponent<Props> = props => (
  <StyledHeader>
    <StyledMasthead>
      <div className="header__title-wrapper">
        <StyledHeaderTitle>
          <Link href="./"><a>{`{redditDev}`}</a></Link>
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
