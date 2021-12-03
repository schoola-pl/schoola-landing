import { Logo } from './Navbar.styles';
import Navigation from '../../molecules/Navigation/Navigation';

const Navbar: React.FC = () => (
  <nav className="flex z-50 sticky inset-0 w-screen h-24 bg-amber-default items-center justify-between shadow-md">
    <Logo>schoola</Logo>
    <Navigation />
  </nav>
);

export default Navbar;
