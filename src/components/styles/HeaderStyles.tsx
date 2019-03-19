import { constants } from './constants';
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
  height: 140px;
  background: #fff;
  -webkit-box-shadow: 0 0 0 1px ${constants.text_grey_mid_two};
  box-shadow: 0 0 0 1px ${constants.text_grey_mid_two};
  grid-area: header;
  a:hover {
    text-transform: none;
    border-bottom: 0;
  }
  .header__title-wrapper {
    display: flex;
    align-items: baseline;
  }
`;

export const StyledMasthead = styled.div`
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
  width: 85%;
  height: auto;
  margin: 0 auto;
`;

export const StyledHeaderTitle = styled.h1`
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
`;

export const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: -2px;
  padding: 0 1em;
  position: relative;
  font-weight: bold;
  a,
  button {
    display: flex;
    align-items: center;
    position: relative;
    background: none;
    border: 0;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
  text-decoration: underline;
    }

  }
  &:before, &:after {
      content: '';
      width: 2px;
      background: ${constants.text_grey_mid_two};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      left: auto;
      right: 0;
    }
`;
