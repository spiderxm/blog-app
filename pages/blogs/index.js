import { Fragment } from "react";
import BlogsGrid from "../../components/posts/blog-grid";

function AllPostsPage(props) {
  const { blogs } = props;
  return (
    <Fragment>
      <BlogsGrid blogs={blogs}></BlogsGrid>
    </Fragment>
  );
}

export default AllPostsPage;


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
  