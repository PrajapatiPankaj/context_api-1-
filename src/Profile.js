import React from 'react'
import {useContext} from 'react'
import {userContext} from './UserProvider'
// import userDispatchContext from './userProvider'

const Profile = () => {

    
        const userDetails = useContext(userContext)
     //   const setUserDetails = useContext(userDispatchContext)

  return (
    <div>
      <h1> {userDetails.username} </h1>
     
    </div>
  );
}

export default Profile
