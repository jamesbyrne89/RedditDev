import styled from 'styled-components';
import { constants } from '../styles/constants';

const SearchStyles = styled.div`
  width: 300px;
  position: relative;

.search__input {
  display: block;
  font-size: 1rem;
  padding: 0.25em;
  border: none;
  height: 2.75em;
  background: ${constants.background_grey};
  border-radius: 6px;
  width: 100%;
  padding-left: 3em;
  font-family: ${constants.sansSerif}
  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
}

.search__icon {
  position: absolute;
  top: 0.575em;
  left: 0.65em;
  height: 2em;
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
`;

export default SearchStyles;