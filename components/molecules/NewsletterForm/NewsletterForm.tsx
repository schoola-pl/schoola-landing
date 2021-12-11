import React, { useEffect, useState } from 'react';
import { EmailFormFields } from 'react-mailchimp-subscribe';
import { useForm } from 'react-hook-form';

interface props {
  onValidated: (fields: EmailFormFields) => void;
  status: string | null;
  withoutDescription: boolean;
}

const NewsletterForm: React.FC<props> = ({ onValidated, status, withoutDescription }) => {
  const [isSubscribed, setSubscribeState] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    setSubscribeState(!!localStorage.getItem('newsletter'));
  }, []);

  const newsletterHandler = ({ email }: { email: string }) => {
    onValidated({
      EMAIL: email
    });
    reset();
  };

  useEffect(() => {
    if (status === 'success') {
      localStorage.setItem('newsletter', 'true');
    }
  }, [status]);

  return (
    <div className={`mb-10 flex flex-col md:my-20 ${!withoutDescription ? null : 'md:my-10 my-4'}`}>
      {!withoutDescription ? (
        <>
          <h1 className="text-center font-semibold mb-3 text-xl md:text-3xl md:mb-5">
            {!isSubscribed ? (
              'Zapisz się na nasz newsletter!'
            ) : (
              <span>
                <span className="text-emerald-dark">Zapisałeś się</span> już na nasz newsletter!
              </span>
            )}
          </h1>
          <p className="text-center mb-3 sm:mb-5 text-md md:text-lg">OPIS NEWSLETTERA w trzech zdaniach, Lorem ipsum dolor sit, amet</p>
        </>
      ) : null}
      <form onSubmit={handleSubmit(newsletterHandler)} className="flex justify-center mx-3">
        <div className="md:w-3/6 max-w-xl">
          <input
            type="email"
            placeholder="example@mail.com"
            className="font-medium px-5 w-full py-5 mr-3 rounded-md border-2 border-emerald-dark transition-all"
            disabled={isSubscribed}
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
          />
        </div>
        <button
          className={`font-medium px-10 py-2 ml-3 md:px-12 rounded-md bg-blue-default transition-all text-coolGray-white hover:bg-blue-light ${
            isSubscribed ? 'pointer-events-none opacity-60' : null
          }`}
          type="submit"
        >
          {status === 'sending'
            ? 'Wysyłanie...'
            : status === 'error' || errors.email
            ? 'Spróbuj ponownie!'
            : status === 'success' || isSubscribed
            ? 'Zapisano!'
            : 'Zapisz się'}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
