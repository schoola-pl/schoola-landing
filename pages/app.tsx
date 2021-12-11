import React from 'react';
import Image from 'next/image';
import Facebook from 'public/icons/facebook.svg';
import NewsletterSection from '../components/organisms/NewsletterSection/NewsletterSection';
import SchoolFriends from 'public/icons/SchoolFriends.svg';

interface versionsTypes {
  [key: string]: {
    id: number;
    title: string;
    description: string;
    svg: any;
  }[];
}

const versions: versionsTypes = {
  alpha: [
    {
      id: 1,
      title: 'Funkcja w Alphie',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Alphie',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Alphie',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Alphie',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Alphie',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Alphie',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    }
  ],
  beta: [
    {
      id: 1,
      title: 'Funkcja w Beta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Beta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Beta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Beta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Beta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Beta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    },
    {
      id: 1,
      title: 'Funkcja w Beta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    }
  ],
  stable: [
    {
      id: 1,
      title: 'Funkcja w Beta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni',
      svg: Facebook
    }
  ]
};

const app = () => {
  return (
    <article>
      <div className="w-full flex flex-col items-center justify-center p-12" style={{ minHeight: 'calc(100vh - 78px)' }}>
        <div className="mb-3 p-6 md:px-12 lg:p-0 lg:pb-5 lg:max-w-3xl xl:max-w-4xl">
          <Image src={SchoolFriends} />
        </div>
        <header className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Poznaj szkołę od <span className="text-emerald-dark">innej strony</span>!
          </h2>
          <p className="mt-2 mb-4 md:mt-3 md:mb-0 text-center md:text-xl md:px-14 lg:px-20 xl:text-2xl xl:w-3/4">
            Sprawdź co będzie potrafić nasza aplikacja i już dzisiaj zapisz się na listę oczekujących osób do wersji alpha!
          </p>
        </header>
      </div>

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
        <div className="w-full flex flex-col items-center justify-center md:w-3/4 xl:w-5/6 md:mx-auto">
          <section className="w-full px-10">
            <header>
              <h3 className="text-2xl text-center">
                Wersja <span className="text-emerald-dark">Alpha</span> - in progress
              </h3>
            </header>
            <div className="w-full my-4 px-6 py-5 border-t grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {versions.alpha.map((item) => (
                <div
                  key={item.id}
                  className="opacity-80 drop-shadow-lg hover:opacity-100 transition-opacity bg-emerald-dark w-full mb-5 py-4 px-7 rounded-xl"
                >
                  <div className="text-center mb-5">
                    <Image src={item.svg} width={45} height={45} />
                  </div>
                  <h4 className="pointer-events-none font-bold text-xl text-white text-center">{item.title}</h4>
                  <p className="pointer-events-none mt-2 text-center text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="w-full px-10">
            <header>
              <h3 className="text-2xl text-center">
                Wersja <span className="text-emerald-dark">Beta</span> - in progress
              </h3>
            </header>
            <div className="w-full my-4 px-6 py-5 border-t grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {versions.beta.map((item) => (
                <div key={item.id} className="bg-emerald-dark w-full mb-5 py-4 px-7 rounded-xl ">
                  <div className="text-center mb-5">
                    <Image src={item.svg} width={45} height={45} />
                  </div>
                  <h4 className="font-bold text-xl text-white text-center">{item.title}</h4>
                  <p className="mt-2 text-center text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="w-full px-10">
            <header>
              <h3 className="text-2xl text-center">
                Pierwsza <span className="text-emerald-dark">stabilna wersja</span> - in progress
              </h3>
            </header>
            <div className="w-full my-4 px-6 py-5 border-t grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {versions.beta.map((item) => (
                <div key={item.id} className="bg-emerald-dark w-full mb-5 py-4 px-7 rounded-xpointer-events-none l ">
                  <div className="text-center mb-5">
                    <Image src={item.svg} width={45} height={45} />
                  </div>
                  <h4 className="font-bold text-xl text-white text-center">{item.title}</h4>
                  <p className="mt-2 text-center text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <NewsletterSection withoutDescription />
      </article>
    </article>
  );
};

export default app;
