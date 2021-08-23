import Link from "next/link";
import Image from "next/image";

export const Post = ({ post }) => {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt="" />

      <div className="post-date">Published: {post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read more</a>
      </Link>
    </div>
  );
};
