import styled from 'styled-components';
import { constants, sizes } from './constants';

export const CardContainerStyles = styled.main`
    position: relative;
    -webkit-column-count: 4;
    column-count: 4;
    -webkit-column-gap: 2.5em;
    column-gap: 2.5em;
    border-top: solid 1px ${constants.text_grey_mid_two};
    padding-top: 1.25em;
    padding-bottom: 1em;
    width: 85%;
    margin: 2rem auto;
    margin-left: calc(7.5% + 2rem);
    @media (max-width: ${sizes.desktop_lg}px) {
      column-gap: 1.5rem;
    }
@media (max-width: ${sizes.desktop_md}px) {
      column-count: 3;
    }
    @media (max-width: ${sizes.desktop_sm}px) {
      column-count: 2;
    }
    @media (max-width: ${sizes.tablet}px) {
      column-gap: 1rem;
      width: 90%;
      margin-left: calc(5% + 2rem);
    }
    @media (max-width: ${sizes.mobile}px) {
      column-count: 1;
      width: 95%;
      margin-left: auto;
    }
    &::after {
        content: '';
        width: 100%;
        position: fixed;
        height: 40px;
        background: ${props => props.theme.fade};
        pointer-events: none;
        bottom: 0;
        left: 0;
    }

`;

export const StatusMessageStyles = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  margin-top: 200px;
  svg {
    height: 56px;
  }
  span {
    display: block;
  }
  @media (max-width: ${sizes.tablet}px) {
    margin-top: 120px;
  }
  @media (max-width: ${sizes.mobile}px) {
    margin-top: 80px;
  }
`;
