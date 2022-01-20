import { NextPage } from 'next';

export type NextPageWithTitle<T = {}> = NextPage<T> & {
  title?: string;
};
