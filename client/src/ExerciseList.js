import React, {useContext, useState, useEffect} from 'react'
import {CurrentUserContext} from './App'


function ExerciseList() {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

    const [exercises, setExercises] = useState([])
    const[selectedExercise, setSelectedExercise]= useState(null)

    useEffect(() =>{
      fetch('/exercises')
      .then((r)=> r.json()
      .then((exercises)=> setExercises(exercises)))
    },[])

    function handleExerciseSelect(e){
      setSelectedExercise(e.target.value)
    }

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
        <label htmlFor="exerciseDropdown">Select an exercise:</label>
      
      <select id="exerciseDropdown" onChange={handleExerciseSelect}>
        <option value="">-- Select an exercise --</option>
        {exercises.map((exercise) => (
          <option key={exercise.id} value={exercise.id}>
            {exercise.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ExerciseList