import React from 'react';

const contact = () => {
  return (
    <>
      <div className="flex items-center justify-center p-12" style={{ minHeight: 'calc(100vh - 78px)' }}>
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="md:w-1/2 max-w-md flex flex-col justify-center">
            <div className="md:text-5xl text-2xl uppercase font-black">Awesome tool for your future team</div>
            <div className="text-xl mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="my-5 h-16">
              <div
                className="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48"
              >
                Join us now
              </div>
            </div>
          </div>
          <div className="flex md:justify-end w-full md:w-1/2 -mt-5">
            <div className="bg-dots">
              <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                <img alt="card img" className="rounded-t" src="https://avatars.githubusercontent.com/u/77537823?v=4" />
                <div className="text-2xl p-10 bg-white">
                  <img
                    alt="quote"
                    className="float-left mr-3"
                    src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                  />
                  W budowę tej aplikacji włożyłem całe swoje serce. Jeżeli tylko chesz się dowiedzieć czegoś na jej temat - jestem otwarty na rozmowy!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={'bg-amber-light'}>
        <div className="container mx-auto px-4 lg:px-20 py-32">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl mb-5">
                Skontaktuj się z nami<span className="text-emerald-dark">.</span>
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Email*" />
              <input className="w-full bg-coolGray-light p-2 rounded-lg focus:outline-none focus:shadow-outline" type="number" placeholder="Phone" />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-coolGray-light mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-default transition-colors text-white text-gray-100 p-3 hover:bg-blue-light rounded-lg w-full
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
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
                  <h2 className="text-2xl">Address</h2>
                  <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/ENLIGHTENEERING/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  FB
                </a>
                <a
                  href="https://www.linkedin.com/company/enlighteneering-inc-"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  FB
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
