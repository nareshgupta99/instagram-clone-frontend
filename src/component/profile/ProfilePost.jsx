import React from "react";
import { FaUserTag } from "react-icons/fa";
import { CgBookmark } from "react-icons/cg";
import { AiOutlineTable } from "react-icons/ai";
import { useState } from "react";
import ProfilePostCard from "./ProfilePostCard";
import ProfileSavedCard from "./ProfileSavedCard";
import ProfileTaggedCard from "./ProfileTaggedCard";
function ProfilePost() {

  const tab = [
    { title: "POSTS", icon: <AiOutlineTable />, activeTab: "" },
    { title: "SAVED", icon: <CgBookmark />, activeTab: "" },
    { title: "TAGGED", icon: <FaUserTag />, activeTab: "" },
  ];
  const [activeTab,setActiveTab]=useState(tab[0].title)

  
  return (
    <div>
      <div className=" flex  space-x-14 border-t  my-8 justify-center">
        {tab.map((item) => (
          
            <div onClick={()=>{setActiveTab(item.title)}} className={`flex  cursor-pointer items-center opacity-60 ${(activeTab===item.title?"border-black border-t opacity-100":"")}`} >
              <i>{item.icon}</i>
              <p>{item.title}</p>
          
          </div>
        ))}
      </div>

      {activeTab==="POSTS"?
      <div className="flex gap-2 justify-center flex-wrap ">
      {[1,1,1,1,1,1].map(()=><ProfileTaggedCard />)}</div>:""}

      {activeTab==="SAVED"?
      <div className="flex gap-2 justify-center flex-wrap ">
      {[1,1,1,1,1,1].map(()=><ProfileTaggedCard />)}</div>:""}

      {activeTab==="TAGGED"?
      <div className="flex gap-2 justify-center flex-wrap ">
      {[1,1,1,1,1,1].map(()=><ProfileTaggedCard />)}</div>:""}
    
    </div>

    
  );
}

export default ProfilePost;
