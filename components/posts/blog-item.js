import classes from "./blog-item.module.css";
import Link from "next/link";
import Image from "next/image";
function BlogItem(props) {
  const { title, coverImage, excerpt, date, slug, readTime } = props.blog;
  const readableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/blogs/${slug}/${coverImage}`;
  const link = "/blogs/" + slug;
  return (
    <li className={classes.post} key={slug}>
      <Link href={link}>
        <a>
          <div style={{ borderRadius: 20 }}>
            <Image
              className={"avatar"}
              src={imagePath}
              alt={title}
              width={300}
              height={180}
              layout="responsive"
            />
            <style jsx global>{`
              .avatar {
                border-radius: 20px 20px 0px 0px;
              }
            `}</style>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{readableDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default BlogItem;
