import { createGlobalStyle } from 'styled-components';
import { constants } from './constants';

const GlobalStyles = createGlobalStyle`
html {
    background: ${props => props.theme.main_background};
    color: ${props => props.theme.font_colour_primary};
    margin: 0;
    padding: 0;
}

body {
    font-family: ${constants.sansSerif};
    /* opacity: 0; */
    -webkit-transition: opacity 0.5s ease-in;
    transition: opacity 0.5s ease-in;
    margin: 0;
    padding: 0;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


a:link {
	text-decoration: none;
	color: inherit;
}

a:visited {
	color: inherit;
}

button {
	background: transparent;
	border: 0;
}

svg {
  fill: ${props => props.theme.button_colour};
}

.page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
`;

export default GlobalStyles;
