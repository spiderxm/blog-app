import { Fragment } from "react";
import BlogsGrid from "./blog-grid";
import classes from "./all-blogs.module.css"
function AllPosts(props) {
  return (
    <Fragment>
      <section className={classes.blogs}>
        <h1>All Posts</h1>
        <BlogsGrid blogs={props.blogs}></BlogsGrid>
      </section>
    </Fragment>
  );
}

export default AllPosts;
