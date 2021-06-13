import classes from "./blog-item.module.css";
import Link from "next/link";
import Image from "next/image";
function BlogItem(props) {
  const { title, image, excerpt, date, slug, readTime } = props.blog;
  const readableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/blogs/${slug}/${image}`;
  const link = "/blogs/" + slug;
  return (
    <li className={classes.post} key={slug}>
      <Link href={link}>
        <a>
          <div>
            <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{readableDate}</time>
            <p>{excerpt}</p>
            <p>{readTime} min read</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default BlogItem;
