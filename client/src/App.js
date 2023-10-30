import React, {useState, useEffect } from "react"
import { Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";


function App() {
  const [user, setUser]= useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />

  return (
    <div className="App">
      {/* <Routes>
        <Route path= '/' element={<h1>Page Count: {count}</h1>}/>
        <Route path='/testing' element={<h1>Test Route</h1>}/>
      </Routes> */}
    </div>
  );
}


export default App;
