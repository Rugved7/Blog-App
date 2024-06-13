import React, { useEffect, useState } from "react";
import { container, PostCard } from "../components/index";
import databaseService from "../appwrite/config";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    databaseService.getAllPost().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>;
          })}
        </div>
      </container>
    </div>
  );
};

export default Home;
