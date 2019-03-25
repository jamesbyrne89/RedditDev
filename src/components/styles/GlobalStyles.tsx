import { createGlobalStyle } from 'styled-components';
import { constants } from './constants';

const GlobalStyles = createGlobalStyle`
html {
    background: ${constants.background_grey};
    color: ${constants.text_grey_dark};
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
`;

export default GlobalStyles;