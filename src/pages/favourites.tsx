import React from 'react';
import Layout from '../components/Layout';
import CardContainer from '../components/CardContainer';
import StatusMessage from '../components/StatusMessage';
import db from '../db/firestore';
import { IFavouritePost } from '../interfaces/index';
import Login from '../pages/login';
import { Centred } from '../components/styles/Helpers';

async function getFavourites(): Promise<any> {
  const dbSnapshot = await db.collection('favourites').get();
  const favourites = dbSnapshot.docs.map(doc => ({
    doc_id: doc.id,
    data: doc.data().data
  }));

  return { favourites };
}

type P = {
  favourites: IFavouritePost[];
  onSearchSubmit: Function;
  onAddNewFavourite: Function;
  toggleTheme: Function;
  themeName: string;
  loading: boolean;
};
class FavouritesPage extends React.Component<P> {
  static async getInitialProps() {
    return getFavourites();
  }
  render() {
    const {
      onAddNewFavourite,
      onSearchSubmit,
      favourites,
      toggleTheme,
      themeName,
      loading,
      isAuthenticated,
      onLogoutClick
    } = this.props;
    return (
      <Layout
        title="Favourites | RedditDev - the best of frontend web development on Reddit."
        onSearchSubmit={onSearchSubmit}
        onAddNewFavourite={onAddNewFavourite}
        toggleTheme={toggleTheme}
        themeName={themeName}
        onLogoutClick={onLogoutClick}
        isAuthenticated={isAuthenticated}
      >
        {/* {isAuthenticated && ( */}
        <CardContainer
          {...this.props}
          posts={favourites}
          EmptyState={() => (
            <StatusMessage>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M43.241,40.677l3.315-7.292c-2.651-4.751-7.724-7.966-13.551-7.966c-8.567,0-15.513,6.945-15.513,15.513 c0,17.471,27.078,32.54,29,33.588l-3.25-13.814l6.676-9.537L43.241,40.677z" />
                <path d="M66.996,25.418c-5.864,0-10.966,3.254-13.604,8.054c-0.016-0.03-0.035-0.058-0.052-0.088l-3.315,7.292l6.676,10.491 l-6.676,9.537l3.25,13.814c0.071,0.039,0.116,0.063,0.116,0.063s29.116-15.537,29.116-33.651 C82.509,32.364,75.563,25.418,66.996,25.418z" />
              </svg>
              <span>You have no favourites. Show some love and add one.</span>
            </StatusMessage>
          )}
        />
        {!isAuthenticated && !loading && (
          <Centred>
            <Login />
          </Centred>
        )}
        )}
      </Layout>
    );
  }
}

export default FavouritesPage;
