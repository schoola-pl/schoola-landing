import React from 'react';
import Image from 'next/image';
import MessyDoodle from '../assets/images/MessyDoodle.png';
import Link from 'next/link';

const Err404 = () => {
  return (
    <div className="h-auto pt-10 md:pt-0 w-screen bg-gray-100 flex items-center justify-center" style={{ height: 600 }}>
      <div className="container flex flex-col-reverse md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md mt-10 md:mt-0">
          <div className="text-7xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">Nie możemy tego znaleźć...</p>
          <p className="mb-5 opacity-90 mt-2 md:mb-8">Ale nie martw się, na naszej stronie jest masa innych rzeczy do zwiedzania. Śmiało!</p>

          <Link href={'/'}>
            <button
              className="px-10 inline py-6 font-medium leading-5 shadow text-white transition-colors duration-150 rounded-lg focus:outline-none focus:shadow-outline-blue bg-emerald-dark
           active:bg-emerald-darker hover:bg-emerald-darker text-xl md:px-6 md:py-4"
            >
              No i do domku!
            </button>
          </Link>
        </div>
        <div className="max-w-lg ml-10">
          <Image src={MessyDoodle} width={400} height={300} alt={'Messy doodle image'} />
        </div>
      </div>
    </div>
  );
};

export default Err404;
