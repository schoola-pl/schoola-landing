import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface props {
  route: {
    path: string;
    name: string;
  };
}

const NavLink: React.FC<props> = ({ route }) => {
  const { asPath } = useRouter();

  return (
    <Link href={route.path}>
      <li
        key={route.name}
        className={`w-auto transition-opacity md:text-lg text-md cursor-pointer mx-2 lg:mx-4 py-7 px-4 md:px-10 text-amber-light hover:opacity-100 md:text-black-classic ${
          asPath === route.path ? 'opacity-100' : 'opacity-60'
        }`}
      >
        {route.name}
      </li>
    </Link>
  );
};

export default React.memo(NavLink);
