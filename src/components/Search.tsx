import React, { Component } from 'react';
import { debounce } from '../lib/utils';
import SearchStyles from './styles/SearchStyles';

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
      <SearchStyles onSubmit={this.onSubmit}>
        <input
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
      </SearchStyles>
    );
  }
}

export default Search;
