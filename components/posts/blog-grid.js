import classes from "./blog-grid.module.css";
import BlogItem from "./blog-item";
function BlogsGrid(props) {
  const { blogs } = props;
  return (
    <ul className={classes.grid}>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.slug}/>
      ))}
    </ul>
  );
}

export default BlogsGrid;
