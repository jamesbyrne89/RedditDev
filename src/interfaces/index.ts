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

export interface ILocalRedditPost {
  doc_id?: string,
  data: {
    subreddit_name_prefixed: string,
    title: string,
    url: string,
    permalink: string,
    num_comments: number,
    created_utc: number,
    id: string,
  },
}
