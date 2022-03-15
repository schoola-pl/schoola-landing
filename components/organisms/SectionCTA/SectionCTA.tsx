import ConnectIcon from 'public/icons/ConnectIcon.svg';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const SectionCTA: React.FC = () => (
  <div className="h-full flex items-center justify-center flex-col-reverse md:flex-row px-5 md:px-3 xl:px-16 xl:py-0 2xl:mb-4 2xl:py-12">
    <div className="flex flex-col items-start py-10 px-4 md:py-20 lg:py-26">
      <h1 className="text-5xl md:text-6xl mb-8 font-extrabold tracking-tight xl:text-7xl 2xl:mb-20">Życie szkoły w jednym miejscu!</h1>
      <p className="text-lg md:text-xl 2xl:text-2xl max-w-3xl text-justify md:text-left">
        Najlepsza aplikacja szkolna dla uczniów do poznawania innych osób, komunikacji i dbania o siebie!
      </p>
      <div className="mt-8 md:mt-10 2xl:mt-20 flex flex-col md:flex-row content-start w-full md:w-auto">
        <div className="inline-flex rounded-md shadow">
          <Link href="https://app.schoola.pl/">
            <button className="inline-flex items-center w-full justify-center text-m px-10 py-5 sm:px-16 md:px-12 2xl:px-20 border border-transparent xl:text-xl font-medium rounded-md text-emerald-dark hover:bg-emerald-dark transition-all hover:text-coolGray-white hover:border-emerald-dark">
              Rozpocznijmy!
            </button>
          </Link>
        </div>
        <div className="mt-4 md:mt-0 md:ml-5 inline-flex rounded-md shadow">
          <Link href="/app">
            <button className="inline-flex text-coolGray-white relative w-full items-center justify-center text-m px-10 py-5 sm:px-16 md:px-12 2xl:px-20 xl:text-xl  font-medium rounded-md bg-blue-default hover:bg-blue-light  transition-all">
              Dowiedz się więcej!
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div className="md:ml-10">
      <Image src={ConnectIcon} width={600} height={600} alt={'Connect people icon'} />
    </div>
  </div>
);

export default SectionCTA;