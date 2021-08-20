import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="card">
      <Image src={post.frontmatter.cover_image} alt="" />
    </div>
  );
}
