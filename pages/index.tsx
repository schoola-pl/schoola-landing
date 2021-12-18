import type { NextPage } from 'next';
import SectionCTA from 'components/organisms/SectionCTA/SectionCTA';
import AppIntroductionSection from '../components/organisms/AppIntroductionSection/AppIntroductionSection';
import NewsletterSection from 'components/organisms/NewsletterSection/NewsletterSection';
import SocialSection from '../components/organisms/SocialSection/SocialSection';

const Home: NextPage = () => (
  <>
    <SectionCTA />
    <AppIntroductionSection />
    <SocialSection />
    <NewsletterSection />
  </>
);


export default Home;
