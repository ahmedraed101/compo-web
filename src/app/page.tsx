// import Image from 'next/image';

'use client';

import Link from 'next/link';
import { Button } from '@nextui-org/button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-[20px] p-24 animate-slide-down">
      <h1>Hello from the other side</h1>
      <Button>Hello</Button>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
