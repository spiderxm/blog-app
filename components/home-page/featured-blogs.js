import BlogsGrid from "../posts/blog-grid";
import classes from "./featured-blogs.module.css";

function FeaturedBlogs(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Blogs</h2>
      <BlogsGrid blogs={props.blogs} />
    </section>
  );
}

export default FeaturedBlogs;
