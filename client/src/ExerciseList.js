import React, {useContext} from 'react'
import UserContext from './UserContext'


function ExerciseList() {
    const user = useContext(UserContext)
  return (
    <div>
        <h2>ExerciseList</h2>
        {user}
    </div>
  )
}

export default ExerciseList