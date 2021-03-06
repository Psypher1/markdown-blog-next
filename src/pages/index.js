import fs from "fs";
import path from "path";
// to parse front matter from
import matter from "gray-matter";
import Head from "next/head";

import { Post } from "../components/Post";

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div>
      <Head>
        <title>Dante Decodes</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

// allows us to fetch data for a static site
export async function getStaticProps() {
  // get files from posts dir
  const files = fs.readdirSync(path.join("posts"));

  // get slug & frontmatter from posts dir
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    //  get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
