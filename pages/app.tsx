import React from 'react';
import Image from 'next/image';
import AppointmentIcon from 'public/icons/AppointmentIcon.svg';
import LogIntegration from 'public/icons/LogIntegrationIcon.svg';
import SpottedIcon from 'public/icons/SpottedIcon.svg';
import FeedIcon from 'public/icons/FeedIcon.svg';
import MeetNewPeople from 'public/icons/MeetNewPeopleIcon.svg';
import NewsletterSection from '../components/organisms/NewsletterSection/NewsletterSection';

const features = [
  {
    icon: AppointmentIcon,
    title: 'Umów się na spotkanie ze szkolnym psychologiem!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    inProgress: false
  },
  {
    icon: SpottedIcon,
    title: 'Korzystaj z oficjalnego spotted szkoły.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    inProgress: false
  },
  {
    icon: FeedIcon,
    title: 'Umieszczaj oraz czytaj ogłoszenia z całej szkoły.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    inProgress: false
  },
  {
    icon: MeetNewPeople,
    title: 'Poznaj nowych ludzi!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    inProgress: false
  },
  {
    icon: LogIntegration,
    title: 'Integracje z twoim dziennikiem elektronicznym!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    inProgress: true
  }
];

const app = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-5xl text-center font-bold lg:pt-10">
        Poznaj możliwości schoola<span className="text-emerald-dark">.</span>
      </h1>
      <p className="text-blue-default text-center px-20 mb-5 mt-3 md:text-lg md:w-3/4 lg:pb-10 lg:w-1/2">
        Lorem ipsum solor sit amet orem ipsum solor sit amet orem ipsum solor sit amet orem ipsum solor sit ametorem ipsum solor sit amet
      </p>
      <div className="grid place-content-center mb-10">
        {features.map(({ icon, title, description, inProgress }, index) => (
          <div
            className={`my-10 py-5 px-12 flex flex-col-reverse justify-center items-center md:py-8 md:px-16 md:my-8 lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center xl:py-16 2xl:py-20 ${
              index % 2 === 0 ? 'bg-coolGray-light' : null
            }`}
          >
            <div className={`${index % 2 === 0 ? 'lg:col-start-2' : null} px-20`}>
              <h1
                className={`text-center text-2xl font-semibold md:text-3xl xl:text-4xl 2xl:text-5xl xl:text-left lg:mb-2 xl:mb-3 ${
                  index % 2 === 0 ? 'xl:text-right' : null
                }`}
              >
                {title}
              </h1>
              <p
                className={`text-center mb-2 text-lg md:text-lg pt-3 pb-5 md:px-10 xl:text-left xl:px-0 xl:text-xl ${
                  index % 2 === 0 ? 'xl:text-right' : null
                }`}
              >
                {description}
              </p>
              {inProgress ? (
                <div className="flex justify-center mb-7 items-center border w-48 mx-auto py-2 px-5 border-emerald-dark rounded-full bg-emerald-dark text-center text-md text-semibold shadow-md text-coolGray-white xl:mx-0 xl:ml-auto">
                  <h2>Już wkrótce!</h2>
                </div>
              ) : null}
            </div>
            <div className={`w-96 h-96 m-10 ${index % 2 === 0 ? 'lg:col-start-1 lg:row-start-1' : null}`}>
              <Image width={500} height={500} src={icon} />
            </div>
          </div>
        ))}
      </div>
      <div className="mb-12">
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
