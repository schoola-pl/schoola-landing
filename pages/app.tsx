import React from 'react';
import Image from 'next/image';
import AppointmentIcon from 'public/icons/AppointmentIcon.svg';
import LogIntegration from 'public/icons/LogIntegrationIcon.svg';
import SpottedIcon from 'public/icons/SpottedIcon.svg';
import FeedIcon from 'public/icons/FeedIcon.svg';
import MeetNewPeople from 'public/icons/MeetNewPeopleIcon.svg';
import NewsletterForm from 'components/molecules/NewsletterForm/NewsletterForm';
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import { NextPageWithTitle } from '../types/NextPageWithTitle';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const features = [
  {
    icon: AppointmentIcon,
    title: 'appointment',
    inProgress: false
  },
  {
    icon: SpottedIcon,
    title: 'spotted',
    inProgress: false
  },
  {
    icon: FeedIcon,
    snippet: 'feed',
    inProgress: false
  },
  {
    icon: MeetNewPeople,
    snippet: 'meet',
    inProgress: false
  },
  {
    icon: LogIntegration,
    snippet: 'integrations',
    inProgress: true
  }
];

const app: NextPageWithTitle = () => {
  const MAILCHIMP_URL = 'https://gmail.us20.list-manage.com/subscribe/post?u=37d42ea39057bd19a6e145ae5&amp;id=fe551fe5a1';
  const { t } = useTranslation('application');

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-5xl text-center font-bold lg:pt-10">
          {t('main.header')}
          <span className="text-emerald-dark">.</span>
        </h1>
        <p className="text-blue-default text-center px-20 mb-5 mt-3 md:text-lg md:w-3/4 lg:pb-10 lg:w-1/2">{t('main.content')}</p>
        <div className="grid place-content-center mb-10">
          {features.map(({ icon, title, inProgress }, index) => (
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
                  {t(`features.${index + 1}.header`)}
                </h1>
                <p
                  className={`text-center mb-2 text-lg md:text-lg pt-3 pb-5 md:px-10 xl:text-left xl:px-0 xl:text-xl ${
                    index % 2 === 0 ? 'xl:text-right' : null
                  }`}
                >
                  {t(`features.${index + 1}.content`)}
                </p>
                {inProgress ? (
                  <div className="flex justify-center mb-7 items-center border w-48 mx-auto py-2 px-5 border-emerald-dark rounded-full bg-emerald-dark text-center text-md text-semibold shadow-md text-coolGray-white xl:mx-0 xl:ml-auto">
                    <h2>{t('wait')}</h2>
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
            {t('newsletter.header.1')} <span className="text-emerald-dark">{t('newsletter.header.2')}</span>!
          </h2>
          <p className="text-center mb-3 sm:mb-5 text-md md:text-lg p-5">{t('newsletter.content')}</p>
          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={({ subscribe, status }) => {
              return <NewsletterForm withoutDescription onValidated={(formData: EmailFormFields) => subscribe(formData)} status={status} />;
            }}
          />
        </div>
      </div>
    </>
  );
};
app.title = 'Aplikacja';

// eslint-disable-next-line
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['application']))
    }
  };
}

export default app;
