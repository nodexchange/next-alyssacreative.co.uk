import Link from 'next/link';
import { Logo } from '@/components/Logo';
import Router from 'next/router';

export const NavLogo = ({ className, ...props }) => {
  return (
    <Link href="/">
      <a
        className="mr-3 flex-none w-[7%] overflow-hidden md:w-auto"
        onContextMenu={(e) => {
          e.preventDefault();
          Router.push('/');
        }}>
        <span className="sr-only">Alyssa Salazar creatives</span>
        <Logo className="w-auto h-5" />
      </a>
    </Link>
  );
};
