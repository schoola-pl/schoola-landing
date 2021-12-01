import { Logo } from './Navbar.styles';
import Navigation from '../../molecules/Navigation/Navigation';
import React from 'react';

const Navbar: React.FC = () => (
  <div className="flex fixed inset-0 w-screen h-24 bg-amber-default items-center justify-between shadow-md">
    <header>
      <Logo>schoola</Logo>
    </header>
    <Navigation />
  </div>
);

export default Navbar;
