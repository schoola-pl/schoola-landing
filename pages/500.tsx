import React from 'react';
import ErrorPage from '../components/organisms/ErrorPage/ErrorPage';
import { NextPageWithTitle } from '../types/NextPageWithTitle';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const reloadSite = () => {
  window.location.reload();
};

const Err500: NextPageWithTitle = () => {
  const { t } = useTranslation('error');

  return (
    <ErrorPage
      title={t('errors.500.title')}
      description={t('errors.500.description')}
      btnContent={t('errors.500.button')}
      func={reloadSite}
      errNumber={500}
    />
  );
};
Err500.title = '500';

// eslint-disable-next-line
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['error']))
    }
  };
}

export default Err500;
