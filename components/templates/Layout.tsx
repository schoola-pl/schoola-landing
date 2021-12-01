import React from 'react';
import Navbar from '../organisms/Navbar/Navbar';
import SectionCTA from '../organisms/SectionCTA/SectionCTA';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main aria-live={'polite'} aria-atomic={true}>
        {children}
      </main>
      {/*<Footer/>*/}
    </>
  );
};

export default Layout;
