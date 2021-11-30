import Link from 'next/link';
import React from 'react';

const routes = [
  { name: 'O nas', path: '/about' },
  { name: 'Aplikacja', path: '/app' },
  { name: 'Kontakt', path: '/contact' }
];

const Navigation: React.FC = () => {
  return (
    <ul className="flex">
      {routes.map((route) => (
        <li key={route.name} className="pr-10 pl-10 mr-10 pt-5 pb-5 transition-colors text-2xl cursor-pointer hover:text-emerald-dark">
          <Link href={route.path}>
            <a className="text-white">{route.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
