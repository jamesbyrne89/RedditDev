export interface IRedditPost {
  data: {
    id: string,
    subreddit_name_prefixed: string,
    title: string,
    url: string,
    permalink: string,
    num_comments: number,
    created_utc: number,
  },
}

export interface IFavouritePost extends IRedditPost { doc_id?: string }

export interface ILayoutProps {
  title: string,
  onSearchSubmit: Function,
  onAddNewFavourite: Function,
}
