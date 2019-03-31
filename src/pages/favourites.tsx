import * as React from 'react';
import Home from '../components/Home';
import Layout from '../components/Layout';
import db from '../db/firestore';
import { ILocalRedditPost } from '../interfaces/index';

async function getFavourites(): ILocalRedditPost[] {
  const dbSnapshot = await db.collection('favourites').get();
  const favourites = dbSnapshot.docs.map(
    doc => ({ doc_id: doc.id, data: doc.data().data }),
  );

  return { favourites: [] };
}

type P = { favourites: [] };
class FavouritesPage extends React.Component<P> {
  static async getInitialProps() {
    return getFavourites();
  }

  render() {
    return (
      <Layout title="RedditDev - favourites">
        <Home {...this.props} posts={this.props.favourites} />
      </Layout>
    );
  }
}

export default FavouritesPage;
