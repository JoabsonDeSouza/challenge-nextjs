import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  return (
    <Image
      src="/logo.png"
      alt="company logo"
      width={64}
      height={64}
      className={cn('object-cover w-12 h-12 md:w-16 md:h-16', className)}
    />
  );
}
