import fs from "fs";
import path from "path";
import matter from "gray-matter";
const blogsPath = path.join(process.cwd(), "content", "blogs");
export function getBlogData(filename) {
  const fileContent = fs.readFileSync(path.join(blogsPath, filename), "utf-8");
  const { data, content } = matter(fileContent);

  const blogData = {
    ...data,
    slug: filename.replace(/\.md$/, ""),
    content: content,
  };

  return blogData;
}

export function getAllBlogs() {
  const files = fs.readdirSync(blogsPath);
  let blogsData = [];
  for (const file of files) {
    blogsData.push(getBlogData(file));
  }

  blogsData = blogsData.sort((blogA, blogB) =>
    blogA.date > blogB.data ? -1 : 1
  );
  return blogsData;
}

export function getFeaturedBlogs() {
  return getAllBlogs().filter((blog) => blog.isFeatured);
}

export function getAllSlugs() {
  const files = fs.readdirSync(blogsPath);
  let slugList = [];
  for (const filename of files) {
    slugList.push({
      params: {
        slug: filename.replace(/\.md$/, ""),
      },
    });
  }

  return slugList;
}
