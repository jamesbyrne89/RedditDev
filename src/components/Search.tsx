import React, { Component } from 'react';
import styled from 'styled-components';
import { debounce } from '../lib/utils';
import { constants } from '../styles/constants';

const SearchWrapper = styled.form`

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
`;

const SearchInput = styled.input`
display: block;
font-size: 1rem;
padding: 0.25em;
`;

interface Props { onSearchSubmit: Function }

interface State { input: string }

class Search extends Component<Props, State> {
  state = { input: '' };

  onUserEntry = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ input: e.target.value });
  };

  onSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.input);
  };

  handleKeyup = debounce(
    (e: React.FormEvent<HTMLInputElement>): void => this.onSubmit(e),
    500,
  );

  render() {
    return (
      <SearchWrapper onSubmit={this.onSubmit}>
        <SearchInput
          type="search"
          placeholder="What are you looking for?"
          value={this.state.input}
          onChange={this.onUserEntry}
          onKeyUp={this.handleKeyup}
        />
        <button
          type="button"
          id="search-close-btn"
          className="search__close-btn"
        >
          <i className="fa fa-times fa-2x" aria-hidden="true"></i>
        </button>
      </SearchWrapper>
    );
  }
}

export default Search;
