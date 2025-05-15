import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  return (
    <img
      src={'/logo.png'}
      alt={'company logo'}
      className={cn('object-cover w-12 h-12 md:w-16 md:h-16', className)}
    />
  );
}
