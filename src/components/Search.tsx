import React, { useState } from 'react';
import { debounce, mapSubsToColours } from '../lib/utils';
import SearchStyles, { SearchDropdownStyles } from './styles/SearchStyles';
import { SubRedditNameStyles } from './styles/CardStyles';

interface IProps { onSearchSubmit: Function }

interface State { input: string }

const subreddits = [
  'webdev',
  'web_design',
  'frontend',
  'css',
  'javascript',
  'reactjs',
  'graphql',
  'node',
  'typescript',
  'vue',
];

const Search = props => {
  const [ input, setInput ] = useState('');
  const [ isFocused, setFocus ] = useState(false);
  const [ selectedSubs, setSelectedSubs ] = useState(subreddits);
  const [ unSelectedSubs, setUnSelectedSubs ] = useState([]);

  const onUserEntry = (e: React.FormEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const onSubmit = (): void => {
    props.onSearchSubmit(input, selectedSubs);
  };

  const handleKeyup = debounce(
    (e: React.FormEvent<HTMLInputElement>): void => onSubmit(e),
    500,
  );

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {};

  const toggleSelectSubreddit = (subName: string) => {
    let newSelectedList;
    if (selectedSubs.includes(subName)) {
      newSelectedList = selectedSubs.filter(sub => sub !== subName);
    } else {
      newSelectedList = [ ...selectedSubs, subName ];
    }
    const newUnSelectedList = subreddits.filter(
      sub => !newSelectedList.includes(sub),
    );
    setSelectedSubs(newSelectedList);
    setUnSelectedSubs(newUnSelectedList);
    onSubmit();
  };

  return (
    <SearchStyles onSubmit={onSubmit}>
      <input
        className="search__input"
        type="search"
        placeholder="Search posts"
        value={input}
        onChange={onUserEntry}
        onKeyUp={handleKeyup}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
      {isFocused && (
            <SearchDropdownStyles>
              <div className="search__sub-list-title">Include subreddits:</div>
              <ul className="search__dropdown-list">
                {selectedSubs.map(
                    (subName, idx) => (
                      <li>
                        <SubRedditNameStyles
                          key={idx}
                          colour={mapSubsToColours(subName)}
                          onClick={() => toggleSelectSubreddit(subName)}
                        >
                          {subName}
                        </SubRedditNameStyles>
                      </li>
                    ),
                  )}
              </ul>
              <ul>
                {unSelectedSubs.map(
                    (subName, idx) => (
                      <li>
                        <SubRedditNameStyles
                          key={idx}
                          colour={mapSubsToColours(subName)}
                          onClick={() => toggleSelectSubreddit(subName)}
                        >
                          {subName}
                        </SubRedditNameStyles>
                      </li>
                    ),
                  )}
              </ul>
            </SearchDropdownStyles>
          )}
    </SearchStyles>
  );
};

export default Search;
