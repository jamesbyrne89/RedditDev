import * as React from 'react';
import LoaderStyles from './styles/LoaderStyles';

const Loader = () => (
  <LoaderStyles>
    <span>{`{`}</span>
    <span>{`}`}</span>
  </LoaderStyles>
);

export default Loader;
