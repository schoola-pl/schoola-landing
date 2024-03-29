import React from 'react';
import ErrorPage from '../components/organisms/ErrorPage/ErrorPage';
import { useRouter } from 'next/router';
import { NextPageWithTitle } from '../types/NextPageWithTitle';

const Err404: NextPageWithTitle = () => {
  const router = useRouter();
  return (
    <ErrorPage
      title={'Nie możemy tego znaleźć...'}
      description={'Ale nie martw się, na naszej stronie jest masa innych rzeczy do zwiedzania. Śmiało!'}
      btnContent={'No i do domku!'}
      func={() => {
        router.push('/');
      }}
      errNumber={404}
    />
  );
};
Err404.title = '404';

export default Err404;