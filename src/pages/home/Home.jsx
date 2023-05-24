import React from 'react'
import Story from '../../component/home/Story'
import UserPicture from "../../component/home/user.jpg";

function Home() {
  return (
    <div className=''>
      <div className='flex'>

      <div className='flex  w-[100vh] ml-10 mt-12 gap-x-2'>
         {[1,1,1,1,11,1].map((i)=><Story />)}
      </div>
      <div className='mt-12 ml-11'>
      <div className=" md:flex items-center hidden  ">
        

        <img
          class="object-cover  h-[60px] rounded-full w-[60px] cursor-pointer  "
          src={UserPicture}
          /><div>
            
        <h6 className='pl-3'>UserName</h6>
          <p>Name</p>
          </div>
          <button className='text-blue-600 font-semibold ml-12 '> Switch</button>
          </div>
       
       
      </div>
      </div>
      <div>
      posts
      </div>
      
    </div>
  )
}

export default Home