import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedBlogs from "../components/home-page/featured-blogs";
import { getFeaturedBlogs } from "../helpers/posts-util";
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Mrigank's Blog</title>
      </Head>
      <Hero />
      <FeaturedBlogs blogs={props.blogs} />
    </Fragment>
  );
}

export default HomePage;

export async function getStaticProps() {
  return {
    props: {
      blogs: getFeaturedBlogs(),
    },
    revalidate: 1800,
  };
}
