// You can include shared interfaces in a separate file and then
// use them in any component by importing them. For example, to
// import the interface below do:
//
// import IDataObject from 'path/to/interfaces';

export default interface IDataObject {
  id: number
  name: string
}

export interface IRedditPost {
  data: {
    id: string,
    subreddit_name_prefixed: string,
    title: string,
    url: string,
    permalink: string,
    num_comments: number,
    created_utc: number
  }
}