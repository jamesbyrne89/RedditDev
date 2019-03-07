import * as React from 'react';
import Head from 'next/head';
import Home from '../components/Home';

type Props = { title?: string };

const Layout: React.FunctionComponent<Props> = (
  { children, title = 'This is the default title' },
) => (
  <div>
    {}
  </div>
);

export default Layout;
