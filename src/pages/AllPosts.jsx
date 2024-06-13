import React, { useEffect, useState } from "react";
import { PostCard, container } from "../components/index";
import databaseService from "../appwrite/config";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  databaseService.getAllPost([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard />
            </div>
          ))}
        </div>
      </container>
    </div>
  );
};

export default AllPosts;
{
  /* <PostCard post={post}/> */
}
