import AllPosts from "../../components/posts/all-blogs";
import { getAllBlogs } from "../../helpers/posts-util";
function AllPostsPage(props) {
  const { blogs } = props;
  return <AllPosts blogs={blogs} />;
}

export default AllPostsPage;

export async function getStaticProps() {
  return {
    props: {
      blogs: getAllBlogs(),
    },
    revalidate: 1800,
  };
}
