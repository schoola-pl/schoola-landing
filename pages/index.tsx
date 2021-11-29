import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import SectionCTA from '../components/SectionCTA/SectionCTA';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Schoola Landing page</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <div>
      <Navbar />
      {/* <SectionCTA /> */}
    </div>
  </div>
);

export default Home;
