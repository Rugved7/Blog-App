import React, { useEffect, useState } from "react";
import { PostCard, Container } from "../components/index";
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
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
{
  /* <PostCard post={post}/> */
}
