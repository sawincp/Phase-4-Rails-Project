import React, {useState, useEffect } from "react"
import { Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";
import UserContext from "./UserContext";
import ExerciseList from "./ExerciseList";


function App() {
  const [currentUser, setCurrentUser]= useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  if (!currentUser) return <Login onLogin={setCurrentUser} />

  return (
    <Routes>
      <UserContext.Provider value= "logged in user">
      <Route exact path="/" element={<ExerciseList />}></Route>
      </UserContext.Provider>
    </Routes>
  );
}


export default App;
