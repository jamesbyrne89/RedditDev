export interface RedditPost {
  data: {
    id: string;
    subreddit_name_prefixed: string;
    subreddit?: string;
    title: string;
    url: string;
    permalink: string;
    num_comments: number;
    created_utc: number;
  };
}

export interface IFavouritePost extends RedditPost {
  doc_id?: string;
}

export interface ILayoutProps {
  title: string;
  onSearchSubmit: Function;
  onAddNewFavourite: Function;
}

export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  validationFunc: Function;
  onChange: Function;
  value: string;
}
