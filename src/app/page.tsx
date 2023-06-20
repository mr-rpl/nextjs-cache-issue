import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/blog/one/foo">Goto one/foo</Link>
      </li>
      <li>
        <Link href="/blog/one/bar">Goto one/bar</Link>
      </li>
      <li>
        <Link href="/blog/two/foo">Goto two/foo</Link>
      </li>
      <li>
        <Link href="/blog/two/bar">Goto two/bar</Link>
      </li>
    </ul>
  );
}
