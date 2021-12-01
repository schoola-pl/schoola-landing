import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/organisms/Navbar/Navbar';
import SectionCTA from '../components/organisms/SectionCTA/SectionCTA';

const Home: NextPage = () => (
  <div>
    <Navbar />
    <SectionCTA />
  </div>
);

export default Home;
