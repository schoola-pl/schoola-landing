import React from 'react';
import BankIcon from 'assets/icons/BankIcon.webp';
import FundIcon from 'assets/icons/FundacjaBgk.png';
import Image from 'next/image';

const PartnersSection = () => (
  <div className="flex flex-col mt-5">
    <h1 className="text-center font-semibold mb-2 text-xl">Partnerzy:</h1>
    <div className="grid gap-x-5 grid-cols-2">
      <div className="max-w-3 p-6">
        <Image src={BankIcon} alt="" />
      </div>
      <div className="max-w-3 p-6">
        <Image src={FundIcon} alt="" />
      </div>
    </div>
  </div>
);

export default PartnersSection;
