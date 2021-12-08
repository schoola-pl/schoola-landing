import type { NextPage } from 'next';
import SectionCTA from 'components/organisms/SectionCTA/SectionCTA';
import ProblemSection from '../components/organisms/AppIntroductionSection/AppIntroductionSection';
import NewsletterSection from 'components/organisms/NewsletterSection/NewsletterSection';

const Home: NextPage = () => (
  <>
    <SectionCTA />
    <ProblemSection />
    <NewsletterSection />
  </>
);

export default Home;
