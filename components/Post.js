import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border-rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5"></DotsHorizontalIcon>
      </div>

      <img src={img} className="object-cover w-full" alt="" />

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn"></HeartIcon>
          <ChatIcon className="btn"></ChatIcon>
          <PaperAirplaneIcon className="btn"></PaperAirplaneIcon>
        </div>
        <BookmarkIcon className="btn"></BookmarkIcon>
      </div>

      <div className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </div>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7"></EmojiHappyIcon>
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
