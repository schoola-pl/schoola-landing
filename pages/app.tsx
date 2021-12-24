import React from 'react';
import Image from 'next/image';
import AppointmentIcon from 'public/icons/AppointmentIcon.svg';
import LogIntegration from 'public/icons/LogIntegrationIcon.svg';
import SpottedIcon from 'public/icons/SpottedIcon.svg';
import FeedIcon from 'public/icons/FeedIcon.svg';
import MeetNewPeople from 'public/icons/MeetNewPeopleIcon.svg';
import NewsletterForm from 'components/molecules/NewsletterForm/NewsletterForm';
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';

const features = [
  {
    icon: AppointmentIcon,
    title: 'Umów się na spotkanie ze szkolnym psychologiem!',
    description:
      'Już teraz możesz w łatwy i szybki sposób zapisać się do Twojego psychologa szkolnego, aby mógł pomóc Ci rozwiązać Twój problem, gdy tylko pojawi się taka potrzeba.',
    inProgress: false
  },
  {
    icon: SpottedIcon,
    title: `Korzystaj z oficjalnego spotted szkoły.`,
    description:
      'Schoola umożliwia szybki i łatwy, a co najważniejsze anonimowy dostęp do szkolnego spotted dla uczniów w jednym miejscu. Uwaga! Informacje tam umieszczane nie będą dostępne dla nauczycieli!',
    inProgress: false
  },
  {
    icon: FeedIcon,
    title: 'Umieszczaj oraz czytaj ogłoszenia z całej szkoły.',
    description:
      'Nasza aplikacja umożliwia dodawanie ogłoszeń jak i różnego rodzaju pytań. Potrzebujesz ładowarki do telefonu? Chcesz pożyczyć od kogoś 5zł? Nie ma problemu napisz to na uczniowskiej tablicy ogłoszeń!',
    inProgress: false
  },
  {
    icon: MeetNewPeople,
    title: 'Poznaj nowych ludzi!',
    description:
      'Dzięki technologii Schoola, poznasz nowe osoby w szkole w oparciu o twoje zainteresowania. Nigdy wcześniej poznanie kolegi czy przyjaciela z podobnymi zainteresowaniami nie było łatwiejsze!',
    inProgress: false
  },
  {
    icon: LogIntegration,
    title: 'Integracje z twoim dziennikiem elektronicznym!',
    description:
      'Najbardziej potrzebne informacje w ramach Twojego dziennika elektronicznego już teraz dostępne w jednym miejscu! Jesteś w stanie sprawdzić to co potrzebujesz, szybko i bezproblemowo. Dodatkowo opcja automatycznego rozplanowania nauki pozwoli Ci jeszcze łatwiej nauczyć się na kartkówkę czy sprawdzian.',
    inProgress: true
  }
];

const app = () => {
  const MAILCHIMP_URL = 'https://gmail.us20.list-manage.com/subscribe/post?u=37d42ea39057bd19a6e145ae5&amp;id=fe551fe5a1';

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-5xl text-center font-bold lg:pt-10">
        Poznaj możliwości schoola<span className="text-emerald-dark">.</span>
      </h1>
      <p className="text-blue-default text-center px-20 mb-5 mt-3 md:text-lg md:w-3/4 lg:pb-10 lg:w-1/2">
        Schoola powstała z myślą o uczniach. Umożliwia zbudowanie zaangażowanej społeczności i zżycie się uczniów ze szkołą. To wszystko sprawia, że
        coraz chętniej będziesz chodził do szkoły!
      </p>
      <div className="grid place-content-center mb-10">
        {features.map(({ icon, title, description, inProgress }, index) => (
          <div
            className={`my-10 py-5 flex flex-col-reverse justify-center items-center md:py-8 md:px-16 md:my-8 lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center xl:py-16 2xl:py-20 ${
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
            <div className={`w-96 h-96 my-10 md:m-10 ${index % 2 === 0 ? 'lg:col-start-1 lg:row-start-1' : null}`}>
              <Image layout="responsive" src={icon} />
            </div>
          </div>
        ))}
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-center">
          Poznaj szkołę od <span className="text-emerald-dark">innej strony</span>!
        </h2>
        <p className="text-center mb-3 sm:mb-5 text-md md:text-lg p-5">Zapisz się na listę oczekujących naszej aplikacji!</p>
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={({ subscribe, status }) => {
            return <NewsletterForm withoutDescription onValidated={(formData: EmailFormFields) => subscribe(formData)} status={status} />;
          }}
        />
      </div>
    </div>
  );
};

export default app;
