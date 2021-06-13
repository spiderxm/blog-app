import PostDetail from "../../components/posts/post-detail/post-content";
import { getAllSlugs, getBlogData } from "../../helpers/posts-util";
function BlogDetailPage(props) {
  return <PostDetail blog={props.blog} />;
}

export async function getStaticPaths() {
  return {
    paths: getAllSlugs(),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const blog = getBlogData(params.slug + ".md");
  return {
    props: {
      blog: blog,
    },
    revalidate: 600,
  };
}

export default BlogDetailPage;
