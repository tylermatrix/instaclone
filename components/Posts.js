import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "tyler",
    userImg: "https://links.papareact.com/ocw",
    img: "https://links.papareact.com/ocw",
    caption: "Test",
  },
  {
    id: "123",
    username: "tyler",
    userImg: "https://links.papareact.com/ocw",
    img: "https://links.papareact.com/ocw",
    caption: "Test",
  },
  {
    id: "123",
    username: "tyler",
    userImg: "https://links.papareact.com/ocw",
    img: "https://links.papareact.com/ocw",
    caption: "Test",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        ></Post>
      ))}
    </div>
  );
}

export default Posts;
