import Link from 'next/link';
import styled from 'styled-components';
import { constants } from '../styles/constants';

const StyledHeader = styled.header`
  z-index: 350;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  background: #fff;
  -webkit-box-shadow: 0 0 0 1px ${constants.text_grey_mid_two};
  box-shadow: 0 0 0 1px ${constants.text_grey_mid_two};
  grid-area: header;
  a:hover {
    text-transform: none;
    border-bottom: 0;
  }
`;

const StyledMasthead = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  padding: 0.25em 0;
  width: 85vw;
  height: auto;
  margin: 0 auto;
`;

const StyledHeaderTitle = styled.h1`
  font-family: 'Tiempos Headline Black';
  font-size: 3.75rem;
  font-weight: 700;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
  z-index: 100;
  color: $nearBlack;
  line-height: 1;
  text-align: left;
`;

const StyledHeaderDescription = styled.h2`
  font-family: ${constants.sansSerif};
  font-size: 1rem;
  padding-bottom: 0.25em;
  color: #495456;
  font-weight: 400;
  line-height: 1.2;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  padding-right: 1em;
`;

const Header = () => (
  <StyledHeader>
    <StyledMasthead>
      <div className="header__title-wrapper">
        <StyledHeaderTitle>
          <Link href="./">{`{redditDev}`}</Link>
        </StyledHeaderTitle>
        <StyledHeaderDescription>
          The best of frontend web development
          <span className="no-wrap">on Reddit</span>
        </StyledHeaderDescription>
      </div>
      {}
      <div className="search-wrapper">
        <input
          id="search"
          className="search"
          type="search"
          placeholder="What are you looking for?"
        />
        <button
          type="button"
          id="search-close-btn"
          className="search__close-btn"
        >
          <i className="fa fa-times fa-2x" aria-hidden="true"></i>
        </button>
      </div>
      <div className="header__btn-wrapper">
        {}
        {}
      </div>
    </StyledMasthead>
  </StyledHeader>
);

export default Header;
