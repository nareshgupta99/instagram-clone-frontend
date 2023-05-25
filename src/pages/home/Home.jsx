import React from "react";
import Story from "../../component/home/Story";
import UserPosts from "../../component/home/UserPosts";

function Home() {
  return <div className="home w-full flex ml-[3.75rem]">
    <div className="flex w-full">
      <div className="flex flex-col ">

        <div className="story-div flex  p-8 gap-x-2 ">
        {[1,1,1,1,11,11,1,1,11].map((i)=><Story />)}
        </div>
        <div className="flex flex-col  mt-4 p-2">
        {[1,1,1,11,1,1].map(()=> <UserPosts />)}
        </div>
      </div>
      <div className="ml-[1%]">
        Home
      </div>
    </div>
  </div>;
}

export default Home;
