'use client';

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import ChevronDown from '../icons/ChevronDown';

type Page = {
  title: string;
  url: string;
};

type Props = {
  title: string;
  pages: Page[];
};

function NavItemList({ title, pages }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="text-lg" variant="light">
          {title}
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {pages.map((page) => (
          <DropdownItem key={page.title}>
            <Link href={page.url}>
              <div>{page.title}</div>
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default NavItemList;

// should open
// onButtonHover

// onButtonHover
// set over button to true
// if !isOpen
// open and set is open

// onButtonLeav
// set over button to false
// if !overList
// closeList

// onMouseHover
// set over list true

// onMouseLeave
// set over list false
// if !overButton
// closeList

// should close
// if !overButton && !overList
