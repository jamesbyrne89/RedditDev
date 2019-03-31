import * as React from 'react';
import Card from './Card';
import Header from './Header';
import Loader from './Loader';
import Sidebar from './Sidebar';
import CardContainerStyles from './styles/CardContainerStyles';
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
