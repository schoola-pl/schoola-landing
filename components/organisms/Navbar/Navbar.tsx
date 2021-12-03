import Navigation from '../../molecules/Navigation/Navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setOpenState] = useState(false);
  const [isMobile, setMobileState] = useState(true);

  const setFlags = () => {
    if (window.innerWidth > 768) {
      setOpenState(true);
      setMobileState(false);
    } else setMobileState(true);
  };

  const toggleMenu = () => {
    setOpenState((r) => !r);
  };

  useEffect(() => {
    window.addEventListener('resize', setFlags);
    return () => window.removeEventListener('resize', setFlags);
  }, []);

  return (
    <>
      <div className="flex z-50 sticky inset-0 w-screen h-24 bg-amber-default items-center justify-between shadow-md">
        <header>
          <Link href="/">
            <h1 className="pl-10 md:pl-14 cursor:pointer logo">schoola</h1>
          </Link>
        </header>
        <button
          onClick={toggleMenu}
          className="bg-white rounded-xl p-5 mr-10 md:hidden drop-shadow-sm transition-colors hover:drop-shadow-md hover:text-white hover:bg-emerald-dark"
        >
          Menu
        </button>
        <div
          className="bg-emerald-dark transition-all absolute top-full w-screen flex align-center justify-center duration-400 md:static md:bg-amber-default md:w-auto md:mr-10"
          style={{
            boxShadow: isMobile ? 'inset 0 2px 10px -5px #000' : 'none',
            opacity: isOpen ? 1 : 0,
            transform: `translateY(${isOpen ? '0' : '100%'})`
          }}
          aria-expanded={isOpen}
        >
          <Navigation />
        </div>
      </div>
    </>
  );
};
export default Navbar;
