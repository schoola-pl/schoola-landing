import React from 'react';
import NavLink from '../../atoms/NavLink/NavLink';

const routes = [
  { name: 'O nas', path: '/about' },
  { name: 'Aplikacja', path: '/app' },
  { name: 'Blog', path: 'https://medium.com/@schoolapl' },
  { name: 'Kontakt', path: '/contact' }
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex">
        {routes.map((route) => (
          <NavLink route={route} key={route.name} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
