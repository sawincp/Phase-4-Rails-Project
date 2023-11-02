import React, {useContext} from 'react'
import {CurrentUserContext} from './App'


function ExerciseList() {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

    function handleLogOutClick (){
      fetch('/logout', { method: 'DELETE'}).then((r)=> {
        if (r.ok){
          setCurrentUser(null)
        }
      })
    }
  return (
    <div>
        <h2>Exercise List</h2>
        <h3>Hello! {currentUser.username}</h3>
        <button onClick={handleLogOutClick}>Logout</button>
    </div>
  )
}

export default ExerciseList