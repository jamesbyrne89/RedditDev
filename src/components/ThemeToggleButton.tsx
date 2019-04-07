import React from 'react';

const ThemeToggleButton = props => {
  return (
    <div>
      <button onClick={props.toggle}>Mode</button>
    </div>
  );
};

export default ThemeToggleButton;
