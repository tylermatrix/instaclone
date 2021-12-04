import React from "react";

function MiniProfile() {
  return (
    <div display="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://links.papareact.com/ocw"
        alt=""
      />
      <div className="flex-1 m-4">
        <h2 className="font-bold">Tyler</h2>
        <h3 className="text-sm">Welcome to instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
