import React, { useEffect, useState } from 'react';
import Support from 'public/icons/Support.svg';
import Image from 'next/image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Instagram from 'public/icons/Instagram.svg';
import Facebook from 'public/icons/Facebook.svg';
import Medium from 'public/icons/Medium.svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const items = [
  {
    id: 1,
    image: 'https://ca.slack-edge.com/T02MFH6TXHN-U02LNT37JA1-ac5f6d272ad6-512',
    text: 'Feedback od naszych odbiorców i użytkowników jest najważniejszy, więc śmiało pisz co uważasz!'
  },
  {
    id: 2,
    image: 'https://avatars.githubusercontent.com/u/77537823?v=4',
    text: 'Jestem jednym z programistów budujących aplikację. Jeżeli masz pytania, problemy lub jakieś pomysły - pisz śmiało!'
  },
  {
    id: 3,
    image: 'https://ca.slack-edge.com/T02MFH6TXHN-U02LLK163M4-2aabbb6efe96-512',
    text: 'Lorem ipsum'
  },
  {
    id: 4,
    image:
      'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-1/p200x200/230432367_1249529202171525_6067988580644517225_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=8KRhEacjyEYAX-mvHOP&_nc_ht=scontent-frt3-1.xx&oh=add2d222bcd5d7e36ce44bc563addf59&oe=61BB1442',
    text: 'Lorem ipsum'
  },
  {
    id: 5,
    image: 'https://ca.slack-edge.com/T02MFH6TXHN-U02MXNH6V7S-ab868490a5ea-512',
    text: 'Lorem ipsum'
  }
];

interface userTypes {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

const contact = () => {
  const [index, setIndex] = useState(0);
  const [isLoading, setLoadingState] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => (prev === items.length - 1 ? 0 : ++prev));
    }, 6300);
  }, []);

  const handleContact = async ({ firstName, lastName, email, phone, message }: userTypes) => {
    try {
      setLoadingState(true);
      const preparedObject = {
        name: `${firstName} ${lastName}`,
        email,
        phone: phone || 'brak',
        content: message
      };
      await axios.post('https://hook.integromat.com/ktf2f3lyq7yt4y86yl5fl34t89f2k7p5', {
        ...preparedObject
      });
      setLoadingState(false);
      reset();
    } catch (e) {
      setError('Coś poszło nie tak...');
    }
  };

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
              <stop offset="5%" stopColor="#55ab6788"></stop>
              <stop offset="95%" stopColor="#f1efe588"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,500 C 0,500 0,166 0,166 C 65.55023923444975,179.2822966507177 131.1004784688995,192.56459330143542 238,201 C 344.8995215311005,209.43540669856458 493.1483253588517,213.02392344497608 610,205 C 726.8516746411483,196.97607655502392 812.3062200956938,177.33971291866027 898,157 C 983.6937799043062,136.66028708133973 1069.6267942583731,115.61722488038278 1160,117 C 1250.3732057416269,118.38277511961722 1345.1866028708134,142.19138755980862 1440,166 C 1440,166 1440,500 1440,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150 path-0 absolute bottom-0 left-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="67%" y1="3%" x2="33%" y2="97%">
              <stop offset="5%" stopColor="#55ab67ff"></stop>
              <stop offset="95%" stopColor="#f1efe5ff"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,500 C 0,500 0,333 0,333 C 75.34928229665073,361.88995215311 150.69856459330146,390.7799043062201 243,373 C 335.30143540669854,355.2200956937799 444.555023923445,290.77033492822966 553,281 C 661.444976076555,271.22966507177034 769.0813397129185,316.1387559808613 878,334 C 986.9186602870815,351.8612440191387 1097.1196172248806,342.6746411483254 1191,338 C 1284.8803827751194,333.3253588516746 1362.4401913875597,333.16267942583727 1440,333 C 1440,333 1440,500 1440,500 Z"
            stroke="none"
            strokeWidth="0"
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
            <form onSubmit={handleSubmit(handleContact)}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Imię*"
                  {...register('firstName', { required: true })}
                />
                <input
                  className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Nazwisko*"
                  {...register('lastName', { required: true })}
                />
                <input
                  className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                  {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}
                />
                <input
                  className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="tel"
                  placeholder="Telefon"
                  {...register('phone', {
                    required: false,
                    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                  })}
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Treść wiadomości*"
                  className="w-full h-32 bg-coolGray-light mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  {...register('message', { required: true })}
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-default transition-colors text-white text-gray-100 p-3 hover:bg-blue-light rounded-lg w-full
                      focus:outline-none focus:shadow-outline"
                >
                  {error ? error : isLoading ? 'Wysyłanie...' : 'Wyślij'}
                </button>
              </div>
            </form>
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
                  <p className="text-gray-400">
                    <a href="mailto:schoolacontact@gmail.com">schoolacontact@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a href="#" target="_blank" rel="noreferrer" className="rounded-full bg-blue-default w-10 h-10 flex items-center mx-1 justify-center">
                  <div className="mx-2 mt-2">
                    <Image src={Facebook} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/schoola__/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full  bg-blue-default w-10 h-10 flex items-center mx-1 justify-center"
                >
                  <div className="mx-2 mt-2">
                    <Image src={Instagram} />
                  </div>
                </a>
                <a
                  href="https://medium.com/@schoolapl"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full  bg-blue-default w-10 h-10 flex items-center mx-1 justify-center"
                >
                  <div className="mx-2 mt-2">
                    <Image src={Medium} />
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
