import React from 'react';
import Image from 'next/image';
import Team from 'public/icons/Team.svg';
import Sprint from 'public/icons/Sprint.svg';
import Email from 'public/icons/Email.svg';
import Facebook from 'public/icons/Facebook.svg';
import Instagram from 'public/icons/Instagram.svg';
import GitHub from 'public/icons/GitHub.svg';
import Twitter from 'public/icons/Twitter.svg';
import TeamImage from 'public/img/team.png';

const team = [
  {
    name: 'Teodor Wolski',
    role: 'Front-end developer & Leader',
    description: 'Piszę kod i gram na gitarze.',
    img: 'https://ca.slack-edge.com/T02MFH6TXHN-U02LNT37JA1-ac5f6d272ad6-512',
    socials: {
      github: 'https://github.com/TeodorWolski',
      twitter: null,
      facebook: null,
      instagram: null,
      mail: 'teodorwolski88@protonmail.com'
    }
  },
  {
    name: 'Jakub Michał Fedoszczak',
    role: 'Front-end developer',
    description:
      'Nastoletni pasjonata programowania, bezpieczeństwa w sieci i samorozwoju. Rozwijający się również w kierunku biznesu, zarządzania oraz automatyzacji.',
    img: 'https://avatars.githubusercontent.com/u/77537823?v=4',
    socials: {
      github: 'https://github.com/JakubLog',
      twitter: 'https://twitter.com/JFedoszczak',
      facebook: 'https://www.facebook.com/jakublogg',
      instagram: 'https://www.instagram.com/jakub_fedoszczak__/',
      mail: 'kontakt.jakubfedoszczak@gmail.com'
    }
  },
  {
    name: 'Kuba Junak',
    role: 'Marketing & SEO Manager',
    description:
      'Niesamowity, ambitny, zabawny, przystojny, i od lat zafascynowany rozwojem osobistym, biznesem, marketingiem, sprzedażą oraz szeroko pojętym high-performance. Codziennie pokonuje samego siebie, by zbliżać się do swoich wielkich celów, pragnień i ambicji.',
    img: 'https://ca.slack-edge.com/T02MFH6TXHN-U02LLK163M4-2aabbb6efe96-512',
    socials: {
      github: null,
      twitter: null,
      facebook: 'https://www.facebook.com/Kubajunak.JJ',
      instagram: 'https://www.instagram.com/kuba__junak/',
      mail: 'kubajunak@gmail.com'
    }
  },
  {
    name: 'Daniel Novyk',
    role: 'Marketing Manager',
    description:
      'Jestem osobą przedsiębiorczą i ambitną. Od dawna moim celem jest stworzenie dużego biznesu, która daje dużą wartość dla klienta. Codziennie do tego dążę aby to zrealizować.',
    img: 'https://ca.slack-edge.com/T02MFH6TXHN-U02M94PMPKL-b19d4cc02422-512',
    socials: {
      github: null,
      twitter: null,
      facebook: 'https://www.facebook.com/daniel.novyk.1',
      instagram: 'https://www.instagram.com/daniel_zz_/',
      mail: 'danielnovyk.schoola@gmail.com'
    }
  },
  {
    name: 'Weronika Latala',
    role: 'Marketing Manager',
    description: 'Hej! Mam na imię Weronika. Kocham podróżować, poznawać nowe osoby i kultury!',
    img: 'https://ca.slack-edge.com/T02MFH6TXHN-U02MXNH6V7S-ab868490a5ea-512',
    socials: {
      github: null,
      twitter: null,
      facebook: 'https://www.facebook.com/veronica.latala.1',
      instagram: null,
      mail: 'w.m.latala@gmail.com'
    }
  }
];

const about = () => {
  return (
    <>
      <section className="grid grid-cols-1 relative" style={{ minHeight: 'calc(100vh - 78px)' }}>
        <div className="bg-amber-dark pt-20 md:hidden relative">
          <Image layout="responsive" src={TeamImage} alt="Team Image" />
        </div>
        <div className="flex bg-gray-100 relative p-10 md:flex md:items-center md:justify-center md:px-20 lg:px-40 xl:px-56">
          <div className="mb-auto mt-auto ">
            <h1 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl uppercase relative z-10">
              Schoola<span className="text-emerald-dark">.</span> Team
            </h1>
            <p className="font-semibold mb-5 text-lg md:text-xl lg:text-2xl xl:text-3xl text-emerald-dark opacity-80 relative z-10">
              Pracujemy dla dobra naszych rówieśników
            </p>
            <p className="pr-10 text-justify md:text-left relative z-10 md:3/4 lg:w-3/4 xl:w-1/2 lg:text-lg md:pr-0">
              Młodzi i ambitni - to właśnie nasz zespół. Schoola powstała z myślą o uczniach. Dążymy do tego aby czas spędzony w szkole stawał się
              przyjemniejszy.
            </p>
          </div>
          <div className="opacity-0 absolute right-0 bottom-8 md:opacity-50 md:right-52 md:top-52 md:pl-60 xl:right-10">
            <Image src={Sprint} width={700} height={600} alt={'Team SVG'} />
          </div>
        </div>
      </section>
      <section className="w-screen px-4 md:grid md:grid-cols-2 sm:px-6 lg:px-4 py-12 2xl:h-screen bg-amber-light relative">
        <div className="text-center pb-12 md:pl-10">
          <h2 className="text-base font-bold text-indigo-600 md:text-left">
            Chcemy razem zmienić świat na lepsze, w tym szkoły<span className="text-emerald-dark">.</span>
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 md:text-left">
            {' '}
            Oto nasz niesamowity zespół<span className="text-emerald-dark">.</span>
          </h1>
          <article>
            <p className="px-5 my-3 md:py-8 md:px-8 md:mt-6 text-justify md:leading-relaxed md:bg-white md:mr-10 md:border-emerald-dark md:border-l-4 text-lg relative z-10">
              O dziwo nie jesteśmy z jednej szkoły, ani z jednego miasta! Mówiąc językiem buzzwordów jesteśmy międzynarodowym teamem, ale na szczęście
              go nie używamy (chyba 😅). Weronika studiuje w Tilburgu w Holandii, Kuba mieszka w jakimś zadupiu pod Wrocławiem, a Teodor, Kuba i
              Daniel mieszkają w Słupsku.
            </p>
          </article>
          <div className="opacity-0 absolute left-10 bottom-8  md:opacity-50">
            <Image src={Team} width={600} height={500} alt={'Team SVG'} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 px-10 md:gap-8 md:px-0 md:pr-10">
          {team.map((person) => (
            <div
              tabIndex={1}
              className="w-full bg-amber-dark rounded-lg z-20 overflow-hidden text-coolGray-light drop-shadow-lg md:opacity-90 md:transition-opacity hover:opacity-100 focus:opacity-100 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-2/5 h-full">
                <img className="object-center object-cover w-full h-full" src={person.img} alt={`${person.name}'s photo`} />
              </div>
              <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                <p className="text-xl text-gray-700 font-bold">{person.name}</p>
                <p className="text-base text-gray-400 font-normal">{person.role}</p>
                <p className="text-sm leading-relaxed text-gray-500 font-normal">{person.description}</p>
                <div className="flex justify-start space-x-2">
                  {person.socials.facebook && (
                    <span tabIndex={1} className="cursor-pointer text-gray-500 opacity-70 transition-opacity hover:opacity-100">
                      <a href={person.socials.facebook} target="_blank" rel="noopener noreferrer">
                        <Image src={Facebook} />
                      </a>
                    </span>
                  )}
                  {person.socials.instagram && (
                    <span tabIndex={1} className="cursor-pointer text-gray-500 opacity-70 transition-opacity hover:opacity-100">
                      <a href={person.socials.instagram} target="_blank" rel="noopener noreferrer">
                        <Image src={Instagram} />
                      </a>
                    </span>
                  )}
                  {person.socials.twitter && (
                    <span tabIndex={1} className="cursor-pointer text-gray-500 opacity-70 transition-opacity hover:opacity-100">
                      <a href={person.socials.twitter} target="_blank" rel="noopener noreferrer">
                        <Image src={Twitter} />
                      </a>
                    </span>
                  )}
                  {person.socials.mail && (
                    <span tabIndex={1} className="cursor-pointer text-gray-500 opacity-70 transition-opacity hover:opacity-100">
                      <a href={`mailto:${person.socials.mail}`} target="_blank" rel="noopener noreferrer">
                        <Image src={Email} />
                      </a>
                    </span>
                  )}
                  {person.socials.github && (
                    <span tabIndex={1} className="cursor-pointer text-gray-500 opacity-70 transition-opacity hover:opacity-100">
                      <a href={person.socials.github} target="_blank" rel="noopener noreferrer">
                        <Image src={GitHub} />
                      </a>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default about;
