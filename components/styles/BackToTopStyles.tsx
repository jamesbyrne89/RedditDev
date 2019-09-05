import React from 'react';
import styled from 'styled-components';
import { constants } from './constants';

const BackToTopStyles = styled.button`
    font-weight: bold;
    padding: 0.75em;
    color: ${props => props.theme.button_colour};
    cursor: pointer;
    position: fixed;
    border: solid 2px currentColor;
    margin: 1px;
    bottom: 2em;
    right: 1.5vw;
    text-align: center;
    padding: 1em 0.5em;
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
    line-height: 1;
    ${props => props.show ? 'opacity: 1' : 'opacity: 0'};
    svg {
        position: relative;
        top: 0;
        left: 0;
        height: 1rem;
    }
}
&:hover, &:active {
    color: ${props => props.theme.button_hover_colour};
    background: ${props => props.theme.button_colour};
    border: solid 2px ${props => props.theme.button_colour};
    svg {
        fill: ${props => props.theme.button_hover_colour};
    }
}

&:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
}

`;

export default BackToTopStyles;
