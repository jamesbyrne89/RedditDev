import * as React from 'react';
import Home from '../components/Home';
import Layout from '../components/Layout';

const FavouritesPage: React.FunctionComponent = (props: any) => {
  return (
    <Layout title="RedditDev - favourites">
      <Home {...props} posts={props.favourites} />
    </Layout>
  );
};

export default FavouritesPage;
