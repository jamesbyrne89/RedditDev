import * as React from 'react';
import Head from 'next/head';
import GlobalStyles from './styles/GlobalStyles';

interface IProps { title: string }

class Layout extends React.Component<IProps> {
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
