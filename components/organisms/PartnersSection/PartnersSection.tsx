import React from 'react';
import BankIcon from 'public/icons/BankIcon.webp';
import FundIcon from 'public/icons/FundacjaBgk.png';
import Image from 'next/image';

const PartnersSection = () => (
  <div className="flex flex-col space-x-8  justify-center items-center mt-5">
    <h1 className="text-center font-semibold mb-2 text-2xl">Partnerzy:</h1>
    <div className="grid gap-x-10 md:gap-x-40 grid-cols-2 place-content-center">
      <div className="max-w-5 p-6">
        <Image src={BankIcon} alt="" />
      </div>
      <div className="max-w-5 p-6">
        <Image src={FundIcon} alt="" />
      </div>
    </div>
  </div>
);

export default PartnersSection;
