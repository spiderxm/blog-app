import classes from "./post-header.module.css";
import Image from "next/image";
function PostHeader(props) {
  const { date, title, image, readTime } = props;
  return (
    <div className={classes.outer}>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="details">
        <time>
          {new Date(date).toLocaleDateString("en-us", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <span>{readTime} min read</span>
      </div>
    </div>
  );
}

export default PostHeader;
