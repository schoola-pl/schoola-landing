import React from 'react';
import Image from 'next/image';
import NewsletterSection from 'components/organisms/NewsletterSection/NewsletterSection';
import AppointmentIcon from 'public/icons/AppointmentIcon.svg';
import LogIntegration from 'public/icons/LogIntegrationIcon.svg';
import SpottedIcon from 'public/icons/SpottedIcon.svg';
import FeedIcon from 'public/icons/FeedIcon.svg';
import MeetNewPeople from 'public/icons/MeetNewPeopleIcon.svg';

const app = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-5xl text-center font-bold mb-10">
        Poznaj możliwości schoola<span className="text-emerald-dark">.</span>
      </h1>
      <div className="grid grid-rows-4 gap-5 place-content-center mb-10">
        <div className="m-5 flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-semibold">Umów się do szkolnego psychologa z poziomu aplikacji!</h1>
          <div className="w-96 h-96  m-10">
            <Image width={500} height={500} src={AppointmentIcon} />
          </div>
          <p className="text-center mb-3 sm:mb-5 text-lg md:text-lg p-5">lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="m-5 flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-semibold ">Poznawaj ludzi o podobnych zainteresowaniach!</h1>
          <div className="w-96 h-96 m-10">
            <Image width={500} height={500} src={MeetNewPeople} />
          </div>
          <p className="text-center mb-3 sm:mb-5 text-lg md:text-lg p-5">lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="m-5 flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-semibold ">Chcesz coś porzyczyć? Napisz to na szkolnej tablicy!</h1>
          <div className="w-96 h-96 m-10">
            <Image width={500} height={500} src={FeedIcon} />
          </div>
          <p className="text-center mb-3 sm:mb-5 text-lg md:text-lg p-5">lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="m-5 flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-semibold ">Szkolne spotted w jednej aplikacji!</h1>
          <div className="w-96 h-96 m-10">
            <Image width={500} height={500} src={SpottedIcon} />
          </div>
          <p className="text-center mb-3 sm:mb-5 text-lg md:text-lg p-5">lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="m-5 flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-semibold ">Automatycznie rozplanuj naukę dzięki integracji z e-dziennikiem!</h1>
          <div className="flex justify-center items-center border m-5 p-2 border-emerald-dark rounded-full bg-emerald-dark text-center text-md text-semibold text-coolGray-white">
            <h2>Wkrótce!</h2>
          </div>
          <div className="w-96 h-96 m-10">
            <Image width={500} height={500} src={LogIntegration} />
          </div>
          <p className="text-center mb-3 sm:mb-5 text-lg md:text-lg p-5">lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-center">
          Poznaj szkołę od <span className="text-emerald-dark">innej strony</span>!
        </h2>
        <p className="text-center mb-3 sm:mb-5 text-md md:text-lg p-5">Zapisz się na listę oczekujących naszej aplikacji!</p>
        <NewsletterSection withoutDescription />
      </div>
    </div>
  );
};

export default app;
