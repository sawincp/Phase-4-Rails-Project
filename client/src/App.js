import React, {useState, useEffect } from "react"
import { Routes, Route} from 'react-router-dom'

function App() {
  const [user, setUser]= useState(null)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  if(!user) return <Login onLogin ={setUser} />

  return (
    <div className="App">
      <Routes>
        <Route path= '/' element={<h1>Page Count: {count}</h1>}/>
        <Route path='/testing' element={<h1>Test Route</h1>}/>
      </Routes>
    </div>
  );
}


export default App;
