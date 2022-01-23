import Link from 'next/link';
import React from 'react';
import Instagram from 'public/icons/IGicon.svg';
import Medium from 'public/icons/Medium.svg';
import Facebook from 'public/icons/FBicon.svg';
import TikTok from 'public/icons/TikTok.svg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const socials = [
  {
    link: 'https://www.instagram.com/schoola__/',
    description: 'instagram',
    icon: Instagram
  },
  {
    link: 'https://www.medium.com/@schoolapl',
    description: 'medium',
    icon: Medium
  },
  {
    link: 'https://www.facebook.com/Schoooola',
    description: 'facebook',
    icon: Facebook
  },
  {
    link: 'https://www.tiktok.com/@schoola__',
    description: 'tiktok',
    icon: TikTok
  }
];

const SocialSection = () => {
  const { t } = useTranslation('home');

  return (
    <article>
      <div className="bg-emerald-dark mb-20 py-14">
        <header>
          <div className="flex flex-col items-center justify-center pb-5 px-24">
            <h1 className="font-bold text-white text-3xl text-gray-900 sm:text-4xl lg:text-5xl mb-2 2xl:text-5xl text-center">
              {t('socials.header')}
            </h1>
          </div>
        </header>
        <div className="flex items-center  justify-center flex-col my-7 px-12 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-14 lg:px-20 xl:px-32">
          {socials.map(({ link, icon, description }) => {
            return (
              <section className="w-full mb-6 lg:mb-4 shadow-md opacity-80 transition-opacity hover:opacity-100 cursor-pointer">
                <Link href={link}>
                  <div className="w-full md:py-3 flex items-center justify-items-center rounded bg-blue-default text-white">
                    <header>
                      <div className="w-24 md:w-28 flex items-center justify-center border-r-2 p-6 my-4 w-full">
                        <Image src={icon} alt="Instagram" />
                      </div>
                    </header>
                    <p className="px-3 md:px-6 py-4 md:text-lg">{t(`socials.${description}`)}</p>
                  </div>
                </Link>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default SocialSection;
