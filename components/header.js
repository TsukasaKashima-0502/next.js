import Link from "next/link";

export default function Header() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Aboutや</a>
        </Link>
      </li>
    </ul>
  );
}
