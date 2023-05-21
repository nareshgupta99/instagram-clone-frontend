import React from 'react'
import ProfileUserDetails from '../../component/profile/ProfileUserDetails'
import ProfilePost from '../../component/profile/ProfilePost'

function Profile() {
  return (
    <div className='w-full'>
      <div>
        <ProfileUserDetails />
      </div>
      <div>
      <ProfilePost />
      </div>
    </div>
  )
}

export default Profile