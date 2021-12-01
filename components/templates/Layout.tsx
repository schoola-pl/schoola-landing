import React from 'react';
import Navbar from '../organisms/Navbar/Navbar';
import SectionCTA from '../organisms/SectionCTA/SectionCTA';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <SectionCTA />
    </>
  );
};
