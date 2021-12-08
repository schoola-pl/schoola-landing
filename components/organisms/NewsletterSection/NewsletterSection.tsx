import React, { useRef, useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState();
  const emailRef = useRef<HTMLDivElement>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInfo = emailRef.current.value;
    try {
      setEmail(emailInfo);
      console.log(email);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mb-10 flex flex-col">
      <h1 className="text-center font-semibold mb-2 text-lg">Zapisz się na nasz newsletter!</h1>
      <form onSubmit={handleSubmit} className="flex justify-center ">
        <input ref={emailRef} className="font-medium w-30 px-2 py-5 mr-2 rounded-md border-2 border-emerald-dark transition-all" type="email" />
        <button
          type="submit"
          className="font-medium px-10 py-5 rounded-md bg-blue-default transition-all text-coolGray-white hover:border-coolGray-white"
        >
          Click
        </button>
      </form>
    </div>
  );
};

export default NewsletterSection;
