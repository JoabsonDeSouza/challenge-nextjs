'use client';

import Logo from '@/components/assets/Logo';
import Menu from '@/components/assets/Menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { links } from '@/utils/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild className="flex items-center justify-center">
        <Menu className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#d4bd8d]" side="left">
        <div className="mt-10 flex justify-center text-center text-2xl">
          <Link href="/">
            <Logo className="w-20 h-20" />
          </Link>
        </div>

        <nav className="flex flex-col justify-center  mt-5">
          {links.map((link, index) => {
            const name = link.name;
            const path = link.path;

            return (
              <SheetClose asChild key={index}>
                <Link
                  href={path}
                  className={`${path === pathname && 'bg-[#867759] border-accent text-accent border-1 rounded-[8px] font-extrabold'} m-3 p-3 font-medium capitalize transition-all hover:text-accent`}
                >
                  <span className={cn(path === pathname && 'font-bold')}>
                    {name}
                  </span>
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
