import Head from "next/head";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: MainLayoutProps) => (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <div>
      <div className="topnav" id="myTopnav">
        <Link href="/">Home</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
      <div>{children}</div>
    </div>
  </>
);

export default DefaultLayout;
