import React, { useRef, useState } from 'react';
import { EmailFormFields } from 'react-mailchimp-subscribe';

interface props {
  onValidated: (fields: EmailFormFields) => void;
}

const NewsletterForm: React.FC<props> = ({ onValidated }) => {
  const [email, setEmail] = useState<string | undefined>('');
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmail(emailRef.current?.value);
    return onValidated({ EMAIL: email || '' }), alert('Zapisano!'), (emailRef.current!.value = '');
  };

  return (
    <div className="mb-10 flex flex-col md:my-20">
      <h1 className="text-center font-semibold mb-3 text-xl md:text-3xl md:mb-5">Zapisz się na nasz newsletter!</h1>
      <p className="text-center mb-3 sm:mb-5 text-md md:text-lg">OPIS NEWSLETTERA w trzech zdaniach, Lorem ipsum dolor sit, amet</p>
      <form onSubmit={handleFormSubmit} className="flex justify-center mx-3">
        <div className="md:w-3/6 max-w-xl">
          <input
            ref={emailRef}
            type="email"
            placeholder="e-mail"
            className="font-medium px-5 w-full py-5 mr-3 rounded-md border-2 border-emerald-dark transition-all"
          />
        </div>
        <button
          className="font-medium px-10 py-2 ml-3 md:px-12 rounded-md bg-blue-default transition-all text-coolGray-white hover:bg-blue-light"
          type="submit"
        >
          Zapisz się!
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
