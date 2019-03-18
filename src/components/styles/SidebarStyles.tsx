import styled from 'styled-components';
import { sizes } from './constants';

const SidebarStyles = styled.aside`
    font-size: 0.75rem;
    border-bottom: 0;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    position: fixed;
    top: 50vh;
    left: 1.25rem;
    &::before {
    content: '';
    display: block;
    height: 1px;
    width: 3rem;
    right: 4rem;
    bottom: -0.8rem;
    background: currentColor;
    position: relative;
    }
    @media (max-width: ${sizes.mobile}px) {
      display: none;
    }
    .loc-icon {
        height: 1rem;
    }
`;

export default SidebarStyles;
