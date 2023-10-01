export type Post = {
  postDate: Date | undefined,
  postedBy: string,
  postContent?: string,
  postTitle: string,
  instaLink?: string,
  instaHtmlLink?: string
}

export type Posts = Array<Post>;
