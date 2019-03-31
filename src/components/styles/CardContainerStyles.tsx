import styled from 'styled-components';
import { constants, sizes } from './constants';

const CardContainerStyles = styled.main`
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
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(236, 238, 241, 0.001)), to(white));
        background: linear-gradient(rgba(236, 238, 241, 0.001), white);
        pointer-events: none;
        bottom: 0;
        left: 0;
    }

`;

export default CardContainerStyles;
