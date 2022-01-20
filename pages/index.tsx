import SectionCTA from 'components/organisms/SectionCTA/SectionCTA';
import AppIntroductionSection from '../components/organisms/AppIntroductionSection/AppIntroductionSection';
import NewsletterSection from 'components/organisms/NewsletterSection/NewsletterSection';
import SocialSection from '../components/organisms/SocialSection/SocialSection';
import { NextPageWithTitle } from '../types/NextPageWithTitle';

const Home: NextPageWithTitle = () => (
  <>
    <SectionCTA />
    <AppIntroductionSection />
    <SocialSection />
    <NewsletterSection />
  </>
);
Home.title = 'Strona Główna';

export default Home;
