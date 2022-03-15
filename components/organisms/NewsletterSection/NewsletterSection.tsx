import React from 'react';

const NewsletterSubscribe = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 px-6">
      <h1 className="text-center font-semibold mb-3 text-xl md:text-2xl">Odbierz darmowego e-booka o 10 metodach skutecznego uczenia się!</h1>
      <p className="text-center mx-5 mb-3 sm:mb-5 text-md md:text-lg lg:text-xl lg:w-1/2">
        Newsletter został stworzony z myślą o ambitnych uczniach. Dzięki niemu odbierzesz e-booka o 10 metodach uczenia się i zyskasz porady, które
        pomogą Ci ukształtować życie zawodowe.
      </p>
      <a target="_blank" rel="noopener noreferrer" href="https://eepurl.com/hPCZ4f">
        <button className="font-medium my-2 px-16 py-5 ml-3 md:px-12 rounded-md bg-blue-default transition-all text-coolGray-white hover:bg-blue-light">
          Odbierz e-booka!
        </button>
      </a>
    </div>
  );
};

export default NewsletterSubscribe;