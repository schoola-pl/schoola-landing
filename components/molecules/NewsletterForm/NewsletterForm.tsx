import { useState, useRef } from 'react';

const NewsletterForm = ({ onValidated }) => {
  const [email, setEmail] = useState(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    const formEmail = onValidated({ EMAIL: email });
    console.log(formEmail);
    return formEmail;
  };

  return (
    <div className="mb-10 flex flex-col">
      <h1 className="text-center font-semibold mb-2 text-lg">Zapisz się na nasz newsletter!</h1>
      <form onSubmit={handleFormSubmit} className="flex justify-center ">
        <input
          ref={emailRef}
          type="email"
          placeholder="email"
          className="font-medium w-30 px-2 py-5 mr-2 rounded-md border-2 border-emerald-dark transition-all"
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
