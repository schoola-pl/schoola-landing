import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/animations.css';
import Layout from '../components/templates/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '../helpers/ga';

const handlePageViewChange = (url: string) => {
  ga.pageView(url);
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', handlePageViewChange);
    return () => {
      router.events.off('routeChangeComplete', handlePageViewChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
