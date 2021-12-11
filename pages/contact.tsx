import React, { useEffect, useState } from 'react';
import Support from 'public/icons/Support.svg';
import Image from 'next/image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Instagram from 'public/icons/Instagram.svg';
import Facebook from 'public/icons/Facebook.svg';

const items = [
  {
    id: 1,
    image:
      'https://scontent.fwaw7-1.fna.fbcdn.net/v/t1.6435-1/c0.18.200.200a/p200x200/186173524_1497571507248720_2353136923100118796_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9gEzuHg3gzwAX-78ve7&_nc_ht=scontent.fwaw7-1.fna&oh=dbfc4c293aa4e95849f35a84335df844&oe=61D1826D',
    text: 'Lorem ipsum'
  },
  {
    id: 2,
    image: 'https://avatars.githubusercontent.com/u/77537823?v=4',
    text: 'Jestem jednym z programistów budujących aplikację. Jeżeli masz pytania, problemy lub jakieś pomysły - pisz śmiało!'
  },
  {
    id: 3,
    image:
      'https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-1/p200x200/264673352_957377688189216_2443246515182621220_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=K54i-3fyLSAAX-FtgTk&_nc_ht=scontent.fwaw7-1.fna&oh=930506c2e7b02df069fbbbc71e5cdf02&oe=61B3FC5F',
    text: 'Lorem ipsum'
  },
  {
    id: 4,
    image: 'https://avatars.githubusercontent.com/u/77537823?v=4',
    text: 'Lorem ipsum'
  },
  {
    id: 5,
    image:
      'https://scontent.fwaw7-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=4MbBEWsUWU0AX8YCvUy&_nc_ht=scontent.fwaw7-1.fna&oh=5b207360ce8071f79890b403046e685c&oe=61D14C78',
    text: 'Lorem ipsum'
  }
];

const contact = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => (prev === items.length - 1 ? 0 : ++prev));
    }, 6300);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center p-0 md:p-12 relative" style={{ minHeight: 'calc(100vh - 78px)' }}>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 500"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-0 md:opacity-100 transition duration-300 ease-in-out delay-150 absolute bottom-0 left-0"
          style={{ zIndex: '-2' }}
        >
          <defs>
            <linearGradient id="gradient" x1="67%" y1="3%" x2="33%" y2="97%">
              <stop offset="5%" stop-color="#55ab6788"></stop>
              <stop offset="95%" stop-color="#f1efe588"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,500 C 0,500 0,166 0,166 C 65.55023923444975,179.2822966507177 131.1004784688995,192.56459330143542 238,201 C 344.8995215311005,209.43540669856458 493.1483253588517,213.02392344497608 610,205 C 726.8516746411483,196.97607655502392 812.3062200956938,177.33971291866027 898,157 C 983.6937799043062,136.66028708133973 1069.6267942583731,115.61722488038278 1160,117 C 1250.3732057416269,118.38277511961722 1345.1866028708134,142.19138755980862 1440,166 C 1440,166 1440,500 1440,500 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150 path-0 absolute bottom-0 left-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="67%" y1="3%" x2="33%" y2="97%">
              <stop offset="5%" stop-color="#55ab67ff"></stop>
              <stop offset="95%" stop-color="#f1efe5ff"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,500 C 0,500 0,333 0,333 C 75.34928229665073,361.88995215311 150.69856459330146,390.7799043062201 243,373 C 335.30143540669854,355.2200956937799 444.555023923445,290.77033492822966 553,281 C 661.444976076555,271.22966507177034 769.0813397129185,316.1387559808613 878,334 C 986.9186602870815,351.8612440191387 1097.1196172248806,342.6746411483254 1191,338 C 1284.8803827751194,333.3253588516746 1362.4401913875597,333.16267942583727 1440,333 C 1440,333 1440,500 1440,500 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150 path-1 absolute bottom-0 left-0"
          ></path>
        </svg>
        <div className="w-full h-96 absolute bottom-0 left-0 bg-amber-light opacity-0 md:opacity-100" style={{ zIndex: '-4' }}></div>
        <div className="flex flex-col md:flex-row md:w-full p-12 md:p-0 items-center justify-center">
          <div className="p-16 md:hidden">
            <Image src={Support} />
          </div>
          <div className="md:w-auto md:max-w-none flex flex-col justify-center mt-10 md:mt-0 md:px-32">
            <div className="md:text-5xl text-left lg:text-6xl uppercase font-black text-4xl ">
              <span className="text-emerald-dark">24/7</span> do twojej dyspozycji<span className="text-emerald-dark">.</span>
            </div>
            <div className="text-justify text-xl mt-4 lg:text-2xl  lg:w-4/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="w-full my-5 h-16 mb-20">
              <button
                className="w-full shadow-md font-medium py-4 px-6 md:py-2 md:px-4 text-white
               cursor-pointer hover:bg-blue-light bg-blue-default hover:bg-yellow-500 rounded text-lg text-center md:w-48 lg:w-60 lg:py-3"
              >
                Szybki kontakt
              </button>
            </div>
          </div>
          <TransitionGroup>
            <CSSTransition key={items[index].id} timeout={300} classNames="contact-quote">
              <div
                className="flex md:justify-end w-full mb-10 md:w-auto -mt-5 md:absolute md:right-20 md:opacity-80 hidden md:block lg:right-52 lg:opacity-90"
                style={{ zIndex: '-1', top: '10rem' }}
              >
                <div className=" bg-dots">
                  <div className=" shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                    <img alt="card img" style={{ width: '400px' }} className="rounded-t" src={items[index].image} />
                    <div className="text-2xl p-10 bg-white">
                      <img
                        alt="quote"
                        className="float-left mr-3"
                        src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                      />
                      {items[index].text}
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>

      <section className={'bg-amber-light'}>
        <div className="container mx-auto px-4 lg:px-20 py-32 lg:pb-52">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl mb-5">
                Skontaktuj się z nami<span className="text-emerald-dark">.</span>
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Imię*" />
              <input
                className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nazwisko*"
              />
              <input className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Email*" />
              <input
                className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Telefon"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Treść wiadomości*"
                className="w-full h-32 bg-coolGray-light mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-default transition-colors text-white text-gray-100 p-3 hover:bg-blue-light rounded-lg w-full
                      focus:outline-none focus:shadow-outline"
              >
                Wyślij
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-emerald-dark rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">Lorem ipsum</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur vitae
                nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Napisz mail'a</h2>
                  <p className="text-gray-400">email@email.com</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <h2 className="text-2xl">Zadzwoń do nas</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.linkedin.com/company/enlighteneering-inc-"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white w-10 h-10 flex items-center mx-1 justify-center"
                >
                  <div className="mx-2 mt-2">
                    <Image src={Facebook} />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/enlighteneering-inc-"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white w-10 h-10 flex items-center mx-1 justify-center"
                >
                  <div className="mx-2 mt-2">
                    <Image src={Instagram} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
