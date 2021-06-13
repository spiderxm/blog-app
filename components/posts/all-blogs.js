import { Fragment } from "react";
import BlogsGrid from "./blog-grid";
import classes from "./all-blogs.module.css";
import Head from "next/head";
function AllPosts(props) {
  return (
    <Fragment>
      <section className={classes.blogs}>
        <Head>
          <title>All Blogs</title>
        </Head>
        <h1>All Blogs</h1>
        <BlogsGrid blogs={props.blogs}></BlogsGrid>
      </section>
    </Fragment>
  );
}

export default AllPosts;
