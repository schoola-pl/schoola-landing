import Link from 'next/link';
import { Logo } from './Navbar.styles';

const Navbar: React.FC = () => (
  <nav className="flex fixed inset-0 w-screen h-24 bg-amber-default items-center justify-between shadow-md">
    <Logo>schoola</Logo>
    <ul className="flex">
      <li>
        <a className="p-20 transition-all text-2xl hover:text-emerald-dark" href="#">
          O nas
        </a>
      </li>
      <li>
        <a className="p-20 transition-all text-2xl hover:text-emerald-dark" href="#">
          Aplikacja
        </a>
      </li>
      <li>
        <a className="p-20 transition-all text-2xl hover:text-emerald-dark" href="#">
          Kontakt
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
