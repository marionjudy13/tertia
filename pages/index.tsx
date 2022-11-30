import { getClient } from "../utils/client";
import { NavItemProps } from "../types/NavItemProps";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";

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
    <Layout site={data.site} menu={data.menu}>
      <Hero />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(`{
    "menu": *[_type == "navMenu" && title == "Topnav"][0],
    "site": *[_type == "globalSettings"][0],
    "page": *[_type == "homePage"][0],
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
