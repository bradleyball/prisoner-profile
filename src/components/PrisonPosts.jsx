import React, { useContext, useState } from "react";
import { PostsContext } from "../providers/PostProvider";
import PrisonPost from "./PrisonPost";

export const PrisonPosts = () => {
  const posts = useContext(PostsContext);
  const [editing2, setEditing2] = useState(false);
  return (
    <section className="Posts">
      {posts.map(post => (
        <PrisonPost
          editing2={editing2}
          setEditing2={setEditing2}
          {...post}
          key={post.id}
        />
      ))}
    </section>
  );
};
