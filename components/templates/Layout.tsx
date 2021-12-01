import React from 'react';
import Navbar from '../organisms/Navbar/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main aria-live={'polite'} aria-atomic={true}>
        {children}
      </main>
      {/*<Footer/>*/}
    </>
  );
};

export default Layout;
