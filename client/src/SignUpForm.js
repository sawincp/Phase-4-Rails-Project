import React, {useContext, useState} from 'react'
import { CurrentUserContext } from './App'

const SignUpForm = ({onLogin}) => {
    const {setCurrentUser}= useContext(CurrentUserContext)
    const [username, setUsername] = useState('test')
    const [password, setPassword]= useState('test')
    const [imageURL, setImageURL]= useState('test')
    const [errors, setErrors]= useState([])
    const [isLoading, setIsLoading]= useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setErrors([])
        setIsLoading(true)

        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ username, password, image_url: imageURL })
        }).then((r)=>{
            setIsLoading(false)
            if(r.ok){
                r.json().then((user)=>{
                    setCurrentUser(user)
                })
            } else{
                r.json().then((err)=> setErrors(err.errors))
            }
        })
    }


  return (
    <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input
        type='text'
        id= 'username'
        autoComplete='off'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        
        <h3>Password</h3>
        <input
        type="password"
        id="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <h3>Profile Image</h3>
        <input
        type="text"
        id= "imageUrl"
        value={imageURL}
        onChange={(e)=>setImageURL(e.target.value)}
        />
        <button type='submit'>{isLoading ? "Loading..." : "Sign Up"}</button>
        {errors.map((err) => (
          <h1 key={err}>{err}</h1>
        ))}
    </form>
  )
}

export default SignUpForm