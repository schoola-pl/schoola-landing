import type { NextPage } from 'next';
import SectionCTA from 'components/organisms/SectionCTA/SectionCTA';
import ProblemSection from 'components/organisms/ProblemSection/ProblemSection';

const Home: NextPage = () => (
  <div>
    <SectionCTA />
    <ProblemSection />
  </div>
);

export default Home;
