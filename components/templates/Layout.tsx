import React from 'react';
import Navbar from '../organisms/Navbar/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/*<Footer/>*/}
    </>
  );
};

export default Layout;
