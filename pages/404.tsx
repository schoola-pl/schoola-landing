import React from 'react';
import ErrorPage from '../components/organisms/ErrorPage/ErrorPage';
import { useRouter } from 'next/router';
import { NextPageWithTitle } from '../types/NextPageWithTitle';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Err404: NextPageWithTitle = () => {
  const router = useRouter();
  const { t } = useTranslation('error');

  return (
    <ErrorPage
      title={t('errors.404.title')}
      description={t('errors.404.description')}
      btnContent={t('errors.404.button')}
      func={() => {
        router.push('/');
      }}
      errNumber={404}
    />
  );
};
Err404.title = '404';

// eslint-disable-next-line
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['error']))
    }
  };
}

export default Err404;
