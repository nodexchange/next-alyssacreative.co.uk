import Link from 'next/link';

export function NavItems() {
  return (
    <>
      <li>
        <Link href="/">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">HOME</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">ABOUT US</a>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">SERVICES</a>
        </Link>
      </li>
      <li>
        <Link href="/Clients">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">CLIENTS</a>
        </Link>
      </li>
      <li>
        <Link href="/docs/installation">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">
            CONTACT US
          </a>
        </Link>
      </li>
    </>
  );
}
