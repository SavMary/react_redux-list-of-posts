// eslint-disable-next-line
/// <reference types="react-scripts" />
export interface RootState {
  posts: Post[];
  users: User[];
  postComments: Comment[];
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface NewComment {
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface Options {
  method: string;
  headers?: {} | undefined;
  body?: string | undefined;
}

export interface User {
  id: number;
  name: string;
}
