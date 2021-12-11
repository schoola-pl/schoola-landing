import React from 'react';
import Image from 'next/image';
import NewsletterSection from '../components/organisms/NewsletterSection/NewsletterSection';
import SchoolFriends from 'public/icons/SchoolFriends.svg';
import AppointmentIcon from ' public/icons/AppointmentIcon.svg';
import LogIntegration from 'public/icons/LogIntegration.svg';
import SpottedIcon from 'public/icons/SpottedIcon.svg';
import FeedIcon from 'public/icons/FeedIcon.svg';

const app = () => {
  return (
    <article>
      <article className="bg-coolGray-light py-10">
        <header>
          <div className="w-full flex flex-col items-center justify-center p-12">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Sprawdź nad czym <span className="text-emerald-dark"> pracujemy</span>!
            </h2>
            <p className="mt-3 text-center md:text-xl md:px-14 lg:px-20 xl:text-2xl xl:w-1/2">
              Poniżej znajdziesz planowane zmiany, które będą pojawiać się w aplikacji wraz z upływem czasu.
            </p>
          </div>
        </header>
        <div className="w-full flex flex-col items-center justify-center p-12" style={{ minHeight: 'calc(100vh - 78px)' }}>
          <div className="mb-3 p-6 md:px-12 lg:p-0 lg:pb-5 lg:max-w-3xl xl:max-w-4xl">
            <Image src={SchoolFriends} />
          </div>
          <header className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Poznaj szkołę od <span className="text-emerald-dark">innej strony</span>!
            </h2>
            <NewsletterSection withoutDescription />
          </header>
        </div>
      </article>
    </article>
  );
};

export default app;
