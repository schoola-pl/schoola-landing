import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <Head>
      <title>Schoola Landing page</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
    </Head>
    <h1 className="text-2xl">hello</h1>
  </div>
);

export default Home;
