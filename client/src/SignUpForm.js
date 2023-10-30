import React, {useState} from 'react'

const SignUpForm = ({onLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword]= useState('')
    const [imageURL, setImageURL]= useState('')
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
                r.json().then((user)=> onLogin(user))
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
        id= "username"
        autoComplete='off'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        
        <h3>Password</h3>
        <input
        type="password"
        id="password"
        autoComplete='current-password'
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