import React from 'react';
import ErrorPage from '../components/organisms/ErrorPage/ErrorPage';

const reloadSite = () => {
  window.location.reload();
};

const Err500 = () => {
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

export default Err500;
