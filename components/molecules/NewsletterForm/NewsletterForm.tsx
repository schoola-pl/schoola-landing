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
    return onValidated({ EMAIL: email || '' }), alert('Zapisano!'), (emailRef.current.value = '');
  };

  return (
    <div className="mb-10 flex flex-col">
      <h1 className="text-center font-semibold mb-3 text-xl">Zapisz się na nasz newsletter!</h1>
      <form onSubmit={handleFormSubmit} className="flex justify-center w-30 mx-2">
        <div className="w-30">
          <input
            ref={emailRef}
            type="email"
            placeholder="e-mail"
            className="font-medium max-w-full px-5 py-5 mr-2 rounded-md border-2 border-emerald-dark transition-all"
          />
        </div>
        <button className="font-medium px-10 py-5 rounded-md bg-blue-default transition-all text-coolGray-white hover:bg-blue-light" type="submit">
          Zapisz się!
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
