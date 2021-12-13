import Link from 'next/link';
import React from 'react';
import Instagram from 'public/icons/instagram.svg';
import Medium from 'public/icons/Medium.svg';
import Facebook from 'public/icons/Facebook.svg';
import Image from 'next/image';

const socials = [
  {
    link: 'https://www.instagram.com/schoola__/',
    description:
      'Instagram to podstawa naszej społeczności. Trzy razy w tygodniu możesz zobaczyć tam posty o tematyce około szkolnej oraz relacje dot. rozwoju.',
    icon: Instagram
  },
  {
    link: 'https://www.facebook.com/',
    description: "Wszystkie aktualności, a także ankiety i wiele więcej - znajdziesz właśnie na Facebook'u. Zapraszamy do obserwacji profilu!",
    icon: Facebook
  },
  {
    link: 'https://www.instagram.com/',
    description:
      'Jesteś ambitną osobą? Chcesz wiele osiągnąć w życiu? Zapraszamy na nasze medium, gdzie co dwa tygodnie poruszamy głębiej temat szkoły.',
    icon: Medium
  }
];

const SocialSection = () => {
  return (
    <article>
      <div className="bg-emerald-dark mb-20 py-14">
        <header>
          <div className="flex flex-col items-center justify-center pb-5 px-24">
            <h1 className="font-bold text-white text-3xl text-gray-900 sm:text-4xl lg:text-5xl mb-2 2xl:text-5xl">
              Śledź nas w internecie<span className="text-blue-light">!</span>
            </h1>
            <p className="text-white text-center md:text-lg md:w-3/4">Social media to nasze guru! Lorem ipsum solor sit amet dir compedentece</p>
          </div>
        </header>
        <div className="flex items-center  justify-center flex-col my-7 px-12 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-7 lg:px-20 xl:px-32">
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
                    <p className="px-3 md:px-6 py-4 md:text-lg">{description}</p>
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