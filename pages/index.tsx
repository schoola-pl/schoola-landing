import SectionCTA from 'components/organisms/SectionCTA/SectionCTA';
import AppIntroductionSection from '../components/organisms/AppIntroductionSection/AppIntroductionSection';
import NewsletterSection from 'components/organisms/NewsletterSection/NewsletterSection';
import SocialSection from '../components/organisms/SocialSection/SocialSection';
import { NextPageWithTitle } from '../types/NextPageWithTitle';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPageWithTitle = () => (
  <>
    <SectionCTA />
    <AppIntroductionSection />
    <SocialSection />
    <NewsletterSection />
  </>
);
Home.title = 'Strona Główna';

// eslint-disable-next-line
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
      // Will be passed to the page component as props
    }
  };
}

export default Home;
