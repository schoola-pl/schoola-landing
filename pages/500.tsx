import React from 'react';
import ErrorPage from '../components/organisms/ErrorPage/ErrorPage';
import { NextPageWithTitle } from '../types/NextPageWithTitle';

const reloadSite = () => {
  window.location.reload();
};

const Err500: NextPageWithTitle = () => {
  return (
    <ErrorPage
      title={'Coś popsuliśmy!'}
      description={'Każdemu zdarzają się błędy, ale prosimy o cierpliwość! Właśnie pracujemy nad naprawieniem usterki!'}
      btnContent={'Odśwież stronę'}
      func={reloadSite}
      errNumber={500}
    />
  );
};
Err500.title = '500';

export default Err500;
