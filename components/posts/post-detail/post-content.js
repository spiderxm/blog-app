import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import Head from "next/head";
function PostContent(props) {
  const { blog } = props;
  if (!blog) {
    return <h1>Loading Blog</h1>;
  }
  const imagePath = `/images/blogs/${blog.slug}/${blog.image}`;
  const customImagePath = function (src, alt, title) {
    return `/images/blogs/${blog.slug}/${src}`;
  };
  const renderers = {
    code(code) {
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={code.className.replace("language-", "")}
          children={code.children}
        />
      );
    },
  };
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <PostHeader
        title={blog.title}
        image={imagePath}
        date={blog.date}
        readTime={blog.readTime}
      />
      <article className={classes.content}>
        <ReactMarkdown
          escapeHtml={false}
          transformImageUri={customImagePath}
          components={renderers}
        >
          {blog.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}

export default PostContent;
