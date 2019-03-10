import React, { Component } from 'react';
import { debounce } from '../lib/utils';

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
      <form className="search-wrapper" onSubmit={this.onSubmit}>
        <input
          id="search"
          className="search"
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
      </form>
    );
  }
}

export default Search;
