import React from 'react';
import Navbar from 'components/organisms/Navbar/Navbar';
import Footer from '../organisms/Footer/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main aria-live={'polite'} aria-atomic={true}>
        <div style={{ minHeight: 'calc(100vh - 78px)' }}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
