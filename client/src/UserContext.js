import React, { createContext } from 'react'

const UserContext = () => {
    const currentUser = createContext(null)
  
   return (
    <div>{currentUser}</div>
  )
}

export default UserContext