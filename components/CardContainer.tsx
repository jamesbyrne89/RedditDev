import React from 'react';
import { isAlreadyFavourite } from '../lib/utils';
import Card from './Card';
import CardLoadingState from './CardLoadingState';
import Loader from './Loader';
import { CardContainerStyles } from './styles/CardContainerStyles';
import { IRedditPost } from '../interfaces/index';

type Props = {
  posts: IRedditPost[];
  favourites: [];
  loading: boolean;
  EmptyState: React.FunctionComponent;
  onAddToFavourites?: () => void;
  isAuthenticated: any;
};

const CardContainer = (props: Props) => {
  const {
    posts,
    favourites,
    loading,
    EmptyState,
    onAddToFavourites,
    isAuthenticated
  } = props;

  return (
    <CardContainerStyles>
      {loading ? (
        Array(50).fill(<CardLoadingState isLoadingState={true} />)
      ) : posts.length === 0 && EmptyState ? (
        <EmptyState />
      ) : (
        isAuthenticated &&
        posts.map((post: IRedditPost): any => {
          const favouriteMatch: any = favourites.find(
            isAlreadyFavourite({
              data: { title: post.data.title, id: post.data.id }
            })
          );
          const docId = favouriteMatch ? favouriteMatch.doc_id : undefined;
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
              onAddToFavourites={onAddToFavourites}
            />
          );
        })
      )}
    </CardContainerStyles>
  );
};

export default CardContainer;
