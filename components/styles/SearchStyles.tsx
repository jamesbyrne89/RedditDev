import styled from 'styled-components';
import { constants, sizes } from './constants';

const SearchStyles = styled.div`
  width: 300px;
  position: relative;
  @media (max-width: ${sizes.tablet}px) {
    width: auto;
  }

  .search__input {
    display: block;
    font-size: 1rem;
    padding: 0.25em;
    border: none;
    height: 2.75em;
    background: ${props => props.theme.main_background};
    border-radius: 6px;
    width: 100%;
    padding-left: 3em;
    font-family: ${constants.sansSerif};
    position: relative;
    color: inherit;
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
    fill: ${props => props.theme.button_colour};
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
    color: ${props => props.theme.button_colour};
    margin-top: 2em;
    cursor: pointer;
    display: block;
    border-bottom: solid 2px transparent;
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
  }
`;

export const SearchDropdownStyles = styled.div`
  padding: 0.5em;
  position: absolute;
  top: 3.5rem;
  width: 300px;
  background: ${props => props.theme.header_background};
  z-index: 2;
  box-shadow: 5px 6px 20px 0 rgba(46, 61, 73, 0.15);
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 1rem;
  }
  .search__sub-list-title {
    font-size: 0.75rem;
  }
  .search__dropdown-list {
    border-bottom: solid 1px ${constants.text_grey_mid_two};
  }
  li {
    margin: 0.25rem 0.5rem 0.25rem 0;
    list-style: none;
  }
`;

export default SearchStyles;
