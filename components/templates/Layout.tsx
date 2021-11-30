import React from 'react';
import Navbar from '../organisms/Navbar/Navbar';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/*<Footer/>*/}
    </>
  );
};
