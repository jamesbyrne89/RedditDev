import * as React from 'react';
import { isAlreadyFavourite } from '../lib/utils';
import Card from './Card';
import Loader from './Loader';
import { CardContainerStyles } from './styles/CardContainerStyles';
import { IRedditPost } from '../interfaces/index';

type Props = {
  posts: IRedditPost[],
  favourites: [],
  loading: boolean,
  emptyState: React.FunctionComponent,
  onAddToFavourites: Function,
};

const CardContainer = (props: Props) => {
  const { posts, favourites, loading, emptyState, onAddToFavourites } = props;
  return (
    <CardContainerStyles>
      {
        loading
          ? <Loader />
          : posts.length === 0 && emptyState
            ? emptyState()
            : posts.map((post: IRedditPost): any => {
              const favouriteMatch: [] = favourites.filter(
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
                  onAddToFavourites={onAddToFavourites}
                />
              );
            })
      }
    </CardContainerStyles>
  );
};

export default CardContainer;
