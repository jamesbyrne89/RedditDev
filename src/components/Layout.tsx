import * as React from 'react';
import Head from 'next/head';
import GlobalStyles from './styles/GlobalStyles';

interface IProps {}

interface IState { posts: Array<object>, loading: boolean }

class Layout extends React.Component<Props> {
  render() {
    const { children, title = 'redditDev' } = this.props;
    return (
      <div>
        <GlobalStyles />
        <Head><title>{title}</title></Head>
        {children}
      </div>
    );
  }
}

export default Layout;
