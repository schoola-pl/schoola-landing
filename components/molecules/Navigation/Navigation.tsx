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
          <Link href={route.path}>
            <li
              key={route.name}
              className="w-full transition-opacity text-xl cursor-pointer mx-2 py-6 px-8 text-amber-light opacity-70 hover:opacity-100 md:text-black-classic md:opacity-60"
            >
              {route.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
