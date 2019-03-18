import styled from 'styled-components';
import { constants } from '../styles/constants';

const SearchStyles = styled.form`
.search--opened {
  width: 50%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.search-wrapper {
  display: none;
  -webkit-transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.search__close-btn {
  display: none;
  font-size: 1rem;
  background: transparent;
  border: 0;
  margin-left: 1em;
  cursor: pointer;
}

::-webkit-input-placeholder {
  color: ${constants.background_grey};
  font-size: 1rem;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: ${constants.background_grey};
  font-size: 1rem;
  font-weight: 300;
}

::placeholder {
  color: ${constants.background_grey};
  font-size: 1rem;
  font-weight: 300;
}

.search-term {
  font-family: $serif;
  font-weight: bold;
  font-size: 1.5rem;
  margin: auto;
  position: relative;
}

.search-term .wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.clear-search {
  font-family: ${constants.sansSerif};
  font-size: 1rem;
  color: ${constants.text_grey_mid_two};
  margin-top: 2em;
  cursor: pointer;
  display: block;
  border-bottom: solid 2px transparent;
  -webkit-transition: all 0.15s;
  transition: all 0.15s;
}

input {
    display: block;
    font-size: 1rem;
    padding: 0.25em;
    border: none;
    height: 3em;
}`;

export default SearchStyles;
