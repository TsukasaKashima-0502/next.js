import Head from "next/head";
import Link from "next/link";

const products = [{ name: "bag" }, { name: "shoes" }, { name: "socks" }];

export default function Home() {
  return (
    <div>
      <Head>
        <title>{products[0].name}</title>
        <meta name="description" content={`${products[0].name}のページ`} />
        <meta property="og:title" content={products[0].name} />
        <meta
          property="og:description"
          content={`${products[0].name}のページ!!!`}
        />
      </Head>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
  );
}
