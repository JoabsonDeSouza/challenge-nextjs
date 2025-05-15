import CartButton from '@/app/(pages)/(cart)';
import { links } from '@/utils/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 whitespace-nowrap h-12">
      {links.map((link, index) => {
        const name = link.name;
        const path = link.path;

        return (
          <Link
            href={path}
            key={index}
            className={`${path === pathname && 'border-b-2 border-accent text-accent'} font-medium capitalize transition-all hover:text-accent`}
          >
            {name}
          </Link>
        );
      })}
      <CartButton />
    </nav>
  );
}
