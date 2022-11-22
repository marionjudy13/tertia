import Head from "next/head";
import { getClient } from "../utils/client";
import { NavItemProps } from "../types/NavItemProps";
import Nav from "./Components/Nav";

interface Props {
  data: {
    menu: NavItemProps;
    site: {
      siteTitle: string;
      siteDescription: string;
    };
    page: {
      title: string;
    };
  };
}

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>{data.site.siteTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav props={data.menu} />
      <main>hi!</main>
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(`{
    "menu": *[_type == "navMenu" && title == "Topnav"][0],
    "site": *[_type == "globalSettings"][0],
    "page": *[_type == "page" && title == "Home"][0],
  }`);

  // Check for 404
  if (!data.page.title) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
