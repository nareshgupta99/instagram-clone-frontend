import React from "react";
import image from "./image.jpg";
import { TbRosette } from "react-icons/tb";
function ProfileUserDetails() {
  return (
    <div className="">
      <div className="flex justify-center mt-9 ">
        <img src={image} className="rounded-full w-32 h-32 cursor-pointer" alt="" />

        <div style={{ height: "fit-content" }} className="mx-[9.25rem] flex flex-col gap-y-3">
          <div className="flex gap-5">
            <p className="font-medium text-xl cursor-pointer"> username</p>
            <button className="bg-gray-200 font-medium px-2 py-1 rounded-lg hover:bg-gray-300">
              Edit profile
            </button>
            <TbRosette className="text-2xl cursor-pointer" />
          </div>
          <div className="flex gap-10">
            <p className="post"> <span className="font-medium">10</span> posts</p>
            <p className="followers cursor-pointer"> <span className="font-medium">10</span> followers</p>
            <p className="following cursor-pointer"> <span className="font-medium">10</span> following</p>
          </div>
          <p className="UserName font-medium text-start cursor-pointer">User Name</p>
          <p className="about"></p>
        </div>
      </div>
      <div>
  
      </div>
    </div>
  );
}

export default ProfileUserDetails;
