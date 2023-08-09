import React,{useState} from 'react'
import './Login.scss'
import {useNavigate} from "react-router-dom"

import axios from "axios"

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
   
    try {
      const res = await axios.post("http://localhost:7500/api/auth/login", {
        username, 
        password,
      },{withCredentials:true});
      console.log(res.data)
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      navigate("/")
    } catch (error) {
      setError(error)
      console.log(error)
    }

  }


  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor="">Username</label>
        <input type="text" name='username' placeholder='John Doe' onChange={e=>setUsername(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" name='password' onChange={e=>setPassword(e.target.value)}/>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login