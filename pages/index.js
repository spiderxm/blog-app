import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedBlogs from "../components/home-page/featured-blogs";
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
      blogs: [
        {
          title: "Blog 1",
          image: "image.jpg",
          slug: 1,
          readTime: 9,
          excerpt: "lorem epsum",
          date: "2021-06-13",
        },
        {
          title: "Blog 2",
          image: "image.jpg",
          slug: 2,
          readTime: 9,
          excerpt: "lorem epsum",
          date: "2021-06-13",
        },
      ],
    },
  };
}
