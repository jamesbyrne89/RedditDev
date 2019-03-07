import * as React from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';

const IndexPage: React.FunctionComponent = () => {
  return <Layout title="Home | My App"><Home /></Layout>;
};

export default IndexPage;
