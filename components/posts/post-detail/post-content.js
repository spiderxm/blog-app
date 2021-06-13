import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  title: "About Me",
  image: "image.jpg",
  slug: "1",
  readTime: 9,
  excerpt: "lorem epsum",
  date: "2021-06-13",
  content: ``,
};
function PostContent() {
  const imagePath = `/images/blogs/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
