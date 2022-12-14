import Head from "next/head";
import Nav from "./Nav";
import { NavItemProps } from "../../types/NavItemProps";

interface LayoutProps {
  menu: NavItemProps;
  site: {
    siteTitle: string;
    siteDescription: string;
    mainLogo: any;
  };
  children: any;
}

function Layout({ children, site, menu }: any) {
  return (
    <>
      <Head>
        <title>{site.siteTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav {...menu} logo={site.mainLogo} />
      {children}
    </>
  );
}

export default Layout;
