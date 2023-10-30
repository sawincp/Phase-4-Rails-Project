import { useState } from 'react'
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (

    <div>
      {showLogin ? (
        <>
        <h1>Log In</h1>
        <LoginForm onLogin={onLogin} />
        <hr></hr>
        <p>
          Don't have an account?
          <button onClick ={()=> setShowLogin(false)}>
            Sign Up!
          </button>
        </p>
        </>
      ) : (
        <>
        <h1>Sign Up!</h1>
        <SignUpForm onLogin={onLogin}/>
        <hr></hr>
        <p>
          Already have an account?
          <button onClick={()=> setShowLogin(true)}>
            Log In!
          </button>
        </p>
        </>
      )}
    </div>
  )
}

export default Login
