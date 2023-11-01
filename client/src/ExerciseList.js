import React, {useContext} from 'react'
import {CurrentUserContext} from './App'


function ExerciseList() {
    const {currentUser} = useContext(CurrentUserContext)
  return (
    <div>
        <h2>Exercise List</h2>
        <h3>Hello! {currentUser.username}</h3>
    </div>
  )
}

export default ExerciseList