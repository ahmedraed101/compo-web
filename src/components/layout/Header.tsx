import React from 'react';
import Link from 'next/link';
import ToggleButton from './ToggleButton';
import NavItemList from './NavItemList';

const navItems = [
  'Home',
  'About',
  'Products',
  'News',
  'Services',
  'Media',
  'Follow us',
];

function Header() {
  return (
    <header className="w-full fixed bg-inherit z-10">
      <div className="center p-5 flex justify-between">
        <Link href="/">
          <div className="bg-gradient-to-r from-primaryGreen-500 to-primaryBlue-500 w-fit font-bold text-4xl bg-clip-text text-transparent">
            HEALTHO
          </div>
        </Link>
        <div>
          <ul className="flex justify-between gap-10 items-center">
            <li>
              <Link href="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <NavItemList
                title="page"
                pages={[
                  { title: 'Blog', url: '/blog' },
                  { title: 'About', url: '/about' },
                ]}
              />
            </li>
            <li>
              <ToggleButton />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
