'use client';

import CartButton from '@/app/(pages)/(cart)';
import Logo from '@/components/assets/Logo';
import MobileNav from '@/components/Navbar/MobileNav';
import Nav from '@/components/Navbar/Nav';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className={'py-4 px-2 xl:px-0 text-white xl:py-8'}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="md:order-1 order-2">
          <Logo />
        </Link>

        <div className="flex md:hidden md:order-1 order-2">
          <CartButton />
        </div>

        <div className="order-1 md:order-2">
          <div className="hidden items-center gap-8 xl:flex">
            <Nav />
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
