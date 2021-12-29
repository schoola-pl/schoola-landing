import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const { push } = useRouter();
  const goToApplication = () => {
    push('https://app.schoola.pl/');
  };

  return (
    <footer className="bg-emerald-dark">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3">Pobierz naszą aplikację szkolną</h3>
          <p>Poznaj ludzi. Otwórz się, ucz się.</p>
        </div>
        <div className={'flex items-center h-36 justify-center mb-5 mt-1'}>
          <button
            onClick={goToApplication}
            className={'rounded-2xl py-4 px-9 border-2 hover:bg-amber-medium transition-colors hover:text-emerald-dark'}
          >
            Zacznijmy!
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; Schoola, 2021-2022</p>
          <div className="order-1 md:order-2">
            <nav>
              <Link href={'/about'}>
                <span className="px-2 cursor-pointer transition-opacity opacity-80  hover:opacity-100">O nas</span>
              </Link>
              <Link href={'/app'}>
                <span className="px-2 border-l cursor-pointer transition-opacity opacity-80  hover:opacity-100">Aplikacja</span>
              </Link>
              <Link href={'/contact'}>
                <span className="px-2 border-l cursor-pointer transition-opacity opacity-80  hover:opacity-100">Kontakt</span>
              </Link>
              <Link href="https://mcusercontent.com/37d42ea39057bd19a6e145ae5/files/8d8153e7-032e-2b1c-a38f-3e2550060d9f/PP.pdf">
                <span className="px-2 border-l cursor-pointer transition-opacity opacity-80  hover:opacity-100">Polityka prywatności</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
