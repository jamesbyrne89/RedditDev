import React, { useState } from 'react';
import { debounce } from '../lib/utils';
import SearchStyles from './styles/SearchStyles';

interface IProps { onSearchSubmit: Function }

interface State { input: string }

const Search = () => {
  const [ input, setInput ] = useState('');

  const onUserEntry = (e: React.FormEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    onSearchSubmit(input);
  };

  const handleKeyup = debounce(
    (e: React.FormEvent<HTMLInputElement>): void => onSubmit(e),
    500,
  );

  return (
    <SearchStyles onSubmit={onSubmit}>
      <input
        className="search__input"
        type="search"
        placeholder="Search posts"
        value={input}
        onChange={onUserEntry}
        onKeyUp={handleKeyup}
      />
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 125"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
        className="search__icon"
      >
        <path
          fill="#000"
          d="M78.129 78.325L65.121 61.063c8.65-8.773 9.834-22.812 2.203-32.938-4.822-6.396-12.186-10.064-20.203-10.064-5.52 0-10.775 1.762-15.195 5.092-11.131 8.393-13.361 24.271-4.975 35.396 4.822 6.396 12.186 10.066 20.205 10.066 4.74 0 9.25-1.373 13.242-3.848l12.938 17.17 4.793-3.612zM31.742 54.938c-6.395-8.484-4.693-20.594 3.793-26.992a19.114 19.114 0 0 1 11.586-3.885c6.117 0 11.734 2.799 15.41 7.676 6.398 8.49 4.697 20.6-3.793 26.996a19.092 19.092 0 0 1-11.582 3.883c-6.117 0-11.736-2.797-15.414-7.678z"
        />
      </svg>
      <button type="button" id="search-close-btn" className="search__close-btn">
      </button>
    </SearchStyles>
  );
};

export default Search;
