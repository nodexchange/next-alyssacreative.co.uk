import Link from "next/link";

export function NavItems() {
  return (
    <>
      <li>
        <Link href="/">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">About us</a>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Services</a>
        </Link>
      </li>
      <li>
        <Link href="/Clients">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Clients</a>
        </Link>
      </li>
      <li>
        <Link href="/docs/installation">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">
            Contact us
          </a>
        </Link>
      </li>
    </>
  );
}