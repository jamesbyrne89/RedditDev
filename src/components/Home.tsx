import * as React from 'react';
import Card from './Card';
import Header from './Header';
import Loader from './Loader';
import Sidebar from './Sidebar';
import StatusMessage from './StatusMessage';
import { CardContainerStyles } from './styles/CardContainerStyles';
import { isAlreadyFavourite } from '../lib/utils';
import { IRedditPost } from '../interfaces/index';

class Home extends React.Component<IProps, IState> {
  render() {
    const {
      loading,
      posts,
      favourites,
      onSearchSubmit,
      onAddNewFavourite,
    } = this.props;

    if (posts.length === 0) {
      return (
        <React.Fragment>
          <Header
            onSearchSubmit={onSearchSubmit}
            onAddNewFavourite={onAddNewFavourite}
          />
          <Sidebar />
          <CardContainerStyles>
            <StatusMessage>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path
                  d="M43.241,40.677l3.315-7.292c-2.651-4.751-7.724-7.966-13.551-7.966c-8.567,0-15.513,6.945-15.513,15.513 c0,17.471,27.078,32.54,29,33.588l-3.25-13.814l6.676-9.537L43.241,40.677z"
                />
                <path
                  d="M66.996,25.418c-5.864,0-10.966,3.254-13.604,8.054c-0.016-0.03-0.035-0.058-0.052-0.088l-3.315,7.292l6.676,10.491 l-6.676,9.537l3.25,13.814c0.071,0.039,0.116,0.063,0.116,0.063s29.116-15.537,29.116-33.651 C82.509,32.364,75.563,25.418,66.996,25.418z"
                />
              </svg>
              <span>You have no favourites. Show some love and add one.</span>
            </StatusMessage>
          </CardContainerStyles>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Header
          onSearchSubmit={onSearchSubmit}
          onAddNewFavourite={onAddNewFavourite}
        />
        <Sidebar />
        <CardContainerStyles>
          {loading ? <Loader /> : posts.map((post: IRedditPost): any => {
                const favouriteMatch = favourites.filter(
                  isAlreadyFavourite({
                    data: { title: post.data.title, id: post.data.id },
                  }),
                );
                const docId = favouriteMatch[0]
                  ? favouriteMatch[0].doc_id
                  : undefined;
                const isInFavourites = !!(favouriteMatch.length > 0);
                return (
                  <Card
                    key={post.data.id}
                    id={post.data.id}
                    doc_id={docId}
                    subName={post.data.subreddit_name_prefixed}
                    title={post.data.title}
                    url={post.data.url}
                    permalink={post.data.permalink}
                    num_comments={post.data.num_comments}
                    created_utc={post.data.created_utc}
                    isFavourite={isInFavourites}
                    onAddToFavourites={this.props.onAddToFavourites}
                  />
                );
              })}
        </CardContainerStyles>
      </React.Fragment>
    );
  }
}

export default Home;
