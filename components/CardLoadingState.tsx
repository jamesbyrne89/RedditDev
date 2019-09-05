import React from 'react';
import {
  CardStyles,
  CardFooterStyles,
  AddToFavouritesButtonStyles,
  SubRedditNameStyles,
  PostTitleStyles
} from './styles/CardStyles';

const CardLoadingState = () => {
  return <CardStyles isLoading>Loading</CardStyles>;
};

export default CardLoadingState;
