import * as React from 'react';
import Home from '../components/Home';
import Layout from '../components/Layout';

const IndexPage: React.FunctionComponent = props => {
  return <Layout title="RedditDev"><Home {...props} /></Layout>;
};

export default IndexPage;
