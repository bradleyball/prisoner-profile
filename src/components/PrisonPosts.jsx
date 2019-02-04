import React, { useContext } from "react";
import { PostsContext } from "../providers/PostProvider";
import PrisonPost from "./PrisonPost";

export const PrisonPosts = () => {
  const posts = useContext(PostsContext);
  return (
    <section className="Posts">
      {posts.map(post => (
        <PrisonPost {...post} key={post.id} />
      ))}
    </section>
  );
};
