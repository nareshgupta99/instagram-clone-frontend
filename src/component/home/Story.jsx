import React from "react";
import UserPicture from "./user.jpg";
const Story = () => {
  return (
    <div className=" cursor-pointer ">
     <div className="hover:opacity-60">
        <img
          class="object-cover h-[60px] rounded-full w-[60px] cursor-pointer  "
          src="https://cdn.pixabay.com/photo/2023/03/05/23/46/girl-7832385_960_720.jpg"
        />
      </div>    
    </div>
  );
};

export default Story;
