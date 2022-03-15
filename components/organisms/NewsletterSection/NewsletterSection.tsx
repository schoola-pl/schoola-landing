import React from 'react';
import { useTranslation } from 'next-i18next';

const NewsletterSubscribe = () => {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-col justify-center items-center my-10 px-6">
      <h1 className="text-center font-semibold mb-3 text-xl md:text-2xl">{t('ebook.header')}</h1>
      <p className="text-center mx-5 mb-3 sm:mb-5 text-md md:text-lg lg:text-xl lg:w-1/2">{t('ebook.text')}</p>
      <a target="_blank" rel="noopener noreferrer" href="https://eepurl.com/hPCZ4f">
        <button className="font-medium my-2 px-16 py-5 ml-3 md:px-12 rounded-md bg-blue-default transition-all text-coolGray-white hover:bg-blue-light">
          {t('buttons.ebook')}
        </button>
      </a>
    </div>
  );
};

export default NewsletterSubscribe;
