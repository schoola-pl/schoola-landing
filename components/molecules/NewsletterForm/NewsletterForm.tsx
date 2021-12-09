import React, { useRef, useState } from 'react';
import { EmailFormFields } from 'react-mailchimp-subscribe';

interface props {
  onValidated: (fields: EmailFormFields) => void;
}

const NewsletterForm: React.FC<props> = ({ onValidated }) => {
  const [email, setEmail] = useState<string | undefined>('');
  const emailRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail(emailRef.current?.value);
    return onValidated({ EMAIL: email || '' });
  };

  return (
    <div className="mb-10 flex flex-col">
      <h1 className="text-center font-semibold mb-2 text-lg">Zapisz się na nasz newsletter!</h1>
      <form onSubmit={handleFormSubmit} className="flex justify-center w-30 mx-2">
        <input
          ref={emailRef}
          type="email"
          placeholder="email"
          className="font-medium max-w-full px-2 py-5 mr-2 rounded-md border-2 border-emerald-dark transition-all"
        />
        <button
          className="font-medium px-10 py-5 rounded-md bg-blue-default transition-all text-coolGray-white hover:border-coolGray-white"
          type="submit"
        >
          Zapisz się!
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
