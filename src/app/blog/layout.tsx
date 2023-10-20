import React from 'react';
import { Spline_Sans } from 'next/font/google';
import Link from 'next/link';

const spline = Spline_Sans({ weight: '400', subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => (
  <div className={`flex h-screen  ${spline.className} pt-16`}>
    <div className="h-full p-10 bg-green-800 animate-slide-in">
      Header with all files
      <ul className="pt-4">
        <li className="text-white">
          <Link href="/blog/23">Blog number 23</Link>
        </li>
        <li className="text-white">
          <Link href="/blog/2">Blog number 2</Link>
        </li>
        <li className="text-white">
          <Link href="/blog/3">Blog number 3</Link>
        </li>
        <li className="text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white">
          <Link href="/blog">Blog Page</Link>
        </li>
      </ul>
    </div>
    <div className="flex-1 h-full">{children}</div>
  </div>
);

export default layout;
