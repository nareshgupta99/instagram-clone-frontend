import React, { useState } from "react";
import {AiFillHeart,AiOutlineHeart,} from 'react-icons/ai'
import{FaRegComment,FaComment} from 'react-icons/fa'
import {BsBookmark,BsFillBookmarkFill,BsHeartFill,BsHeart} from 'react-icons/bs'
import {BsSend} from 'react-icons/bs'

function UserPosts() {
    const data=[{
        title:"LIKE",
        icon:<BsHeart />,
        activeIcon:<BsHeartFill/>
    },
    {
        title:"COMMENT",
        icon:<FaRegComment />,
        activeIcon:<FaComment/>
    },
    {
        title:"MESSAGE",
        icon:<BsSend/>,
        activeIcon:<BsSend/>
    },
    {
        title:"SAVE",
        icon:<BsBookmark />,
        activeIcon:<BsFillBookmarkFill/>
    }
]

const [active,setActive]=useState("")



  return (
    <div className="flex flex-col justify-start border-b border-black border-opacity-10 pb-3">
      <div className="flex items-center ml-[5em]">
        <div className=" cursor-pointer  items-center ">
          <img
            class="object-cover h-[34px] rounded-full w-[34px] cursor-pointer  "
            src="https://cdn.pixabay.com/photo/2023/03/05/23/46/girl-7832385_960_720.jpg"
          />
        </div>

        <div className="font-semibold p-3">UserName</div>
        <p className="time   text-gray-400 font-semibold ">.1d</p>
        <span className="">...</span>
      </div>

      <div className="hover:opacity-60 cursor-pointer flex flex-col items-center ">
        <img
          class="object-cover h-[468px] w-[485px] cursor-pointer  "
          src="https://cdn.pixabay.com/photo/2023/03/05/23/46/girl-7832385_960_720.jpg"
        />
      </div>
      <div className="flex ml-[5em] p-3 gap-x-2">
        {data.map((item)=>
        <div className=" cursor-pointer text-xl">
          
            {active===""? item.icon:item.activeIcon}
            </div>
        
        )}
      </div>
    </div>
  );
}

export default UserPosts;
