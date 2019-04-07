import { constants, sizes } from './constants';
import styled from 'styled-components';

export const StyledHeader = styled.header`
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
  background: ${props => props.theme.header_background};
  -webkit-box-shadow: 0 0 0 1px ${constants.text_grey_mid_two};
  box-shadow: 0 0 0 1px ${constants.text_grey_mid_two};
  grid-area: header;
  .header__title-wrapper {
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    margin: 0.5rem 0;
    @media (max-width: ${sizes.desktop_sm}px) {
      justify-content: flex-start;
    }
    @media (max-width: ${sizes.tablet}px) {
      justify-content: flex-end;
    }
  }
`;

export const StyledMasthead = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 0;
  width: 85%;
  height: auto;
  margin: 0 auto 0 calc(7.5% + 2rem);
  @media (max-width: ${sizes.desktop_sm}px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media (max-width: ${sizes.tablet}px) {
      width: 95%;
      margin-left: auto;
    }
`;

export const StyledHeaderTitle = styled.h1`
  font-family: 'Tiempos Headline Black';
  font-size: 3.75rem;
  font-weight: 700;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
  z-index: 100;
  color: ${props => props.theme.font_colour_primary};
  line-height: 1;
  text-align: left;
  margin: 0.5rem 0;
  cursor: pointer;
  @media (max-width: ${sizes.tablet}px) {
    font-size: 2.5rem;
  }
`;

export const StyledHeaderDescription = styled.h2`
  font-family: ${constants.sansSerif};
  font-size: 1rem;
  padding-bottom: 0.25em;
  color: #495456;
  font-weight: 400;
  line-height: 1.2;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  padding-right: 1em;
  margin-left: 1rem;
  @media (max-width: ${sizes.tablet}px) {
    display: none;
  }
`;

export const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: -2px;
  padding-left: 1em;
  position: relative;
  font-weight: bold;
  li {
    cursor: pointer;
  }
  a,
  button {
    display: flex;
    align-items: center;
    position: relative;
    background: none;
    border: 0;
    cursor: pointer;
    transition: all 0.2s ease-out;
    padding: 0 1em;
    line-height: 2.4;
    border: solid 2px ${constants.nearBlack};
    &:hover {
 /* // text-decoration: underline; */
    color: white;
    background: ${constants.nearBlack};
    }

  }
`;
