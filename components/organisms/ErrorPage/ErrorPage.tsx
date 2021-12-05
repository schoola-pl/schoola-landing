import React from 'react';
import Image from 'next/image';
import Error from 'assets/icons/Error.svg';

interface props {
  title: string;
  description: string;
  btnContent: string;
  func: () => void;
  errNumber: number;
}

const ErrorPage: React.FC<props> = ({ title, description, btnContent, func, errNumber }) => {
  return (
    <div style={{ minHeight: 'calc(100vh - 78px)' }} className="pt-10 py-8 md:py-0 md:pt-0 w-screen bg-gray-100 flex items-center justify-center">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md mt-10 md:mt-0">
          <div className="text-7xl font-dark font-bold">{errNumber}</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">{title}</p>
          <p className="mb-5 opacity-90 mt-2 md:mb-8">{description}</p>

          <button
            className="px-10 inline py-6 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-emerald-dark
           active:bg-emerald-darker hover:bg-emerald-darker text-xl md:px-6 md:py-4"
            onClick={func}
          >
            {btnContent}
          </button>
        </div>
        <div className="max-w-lg ml-10">
          <Image src={Error} width={400} height={300} alt={'Messy doodle image'} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
