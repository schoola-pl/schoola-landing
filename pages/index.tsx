import type { NextPage } from 'next';
import SectionCTA from 'components/organisms/SectionCTA/SectionCTA';
import ProblemSection from '../components/organisms/AppIntroductionSection/AppIntroductionSection';
import NewsletterSection from 'components/organisms/NewsletterSection/NewsletterSection';
import PartnersSection from 'components/organisms/PartnersSection/PartnersSection';
import SocialSection from '../components/organisms/SocialSection/SocialSection';

const Home: NextPage = () => (
  <>
    <SectionCTA />
    <PartnersSection />
    <ProblemSection />
    <SocialSection />
    <NewsletterSection />
  </>
);

export default Home;
