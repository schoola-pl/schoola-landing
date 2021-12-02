import Link from 'next/link';
import React from 'react';

const routes = [
  { name: 'O nas', path: '/about' },
  { name: 'Aplikacja', path: '/app' },
  { name: 'Kontakt', path: '/contact' }
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex">
        {routes.map((route) => (
          <li key={route.name} className="pr-10 pl-10 mr-10 pt-5 pb-5 transition-colors text-xl cursor-pointer hover:text-emerald-dark">
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
