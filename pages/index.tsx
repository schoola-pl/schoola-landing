import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>landing</title>
      <meta name="description" content="Gen" />
    </Head>
    <button className="text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400">
      click me
    </button>
  </>
);

export default Home;
