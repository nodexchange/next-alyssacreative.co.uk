import Link from 'next/link';

const NavLink = ({href, text}) => (
  <li className='pt-2 h-[24px]'>
    <Link href={href}>
      <a className="hover:text-sky-500 dark:hover:text-sky-400">{text}</a>
    </Link>
  </li>
);

const NavConfig = [
  {
    href: '/',
    text: 'HOME',
  },
  {
    href: '#about',
    text: 'ABOUT US',
  },
  {
    href: '#services',
    text: 'SERVICES',
  },
  {
    href: '#clients',
    text: 'CLIENTS',
  },
  {
    href: '#contact',
    text: 'CONTACT US',
  }
]

export function NavItems() {
  return (
    <>
      {NavConfig.map(({href, text}) => (
        <NavLink key={`key-${text}`} href={href} text={text} key={text} />
      ))}
    </>
  );
}
