import React,{useState} from 'react'
import upload from '../../utils/upload'
import './Register.scss'
import axios from "axios"

import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
    img:"",
    country:"",
    isSeller:"false",
    desc:""
  })
  // console.log(user)
  
  const navigate = useNavigate()


  const handleChange = (e) =>{
    setUser(prev=>{
      return{...prev, [e.target.name] : e.target.value};
    })
  }

  const handleSeller = (e) =>{
    setUser(prev=>{
      return{...prev, isSeller : e.target.checked};
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const url = await upload(file)
    try {
      const res = await axios.post("http://localhost:7500/api/auth/register",{
        ...user, img:url
      })
      console.log(res.data)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  return (
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Create New Account</h1>
            <label htmlFor="">Username</label>
            <input name='username' type="text" placeholder='Enter Username' onChange={handleChange}/>

            <label htmlFor="">Email</label>
            <input name='email' type="email" placeholder='Enter your Email Id' onChange={handleChange}/>

            <label htmlFor="">Password</label>
            <input name='password' type="password"  onChange={handleChange}/>

            <label htmlFor="">Profile Picture</label>
            <input type="file" onChange={e=>setFile(e.target.files[0])}/>

            <label htmlFor="">Country</label>
            <input name='country' type="text" placeholder='America' onChange={handleChange}/>

            <button type='submit'>Register</button>
          </div>
          <div className="right">
            <h1>I want to become a seller</h1>
            <div className="toggle">
              <label htmlFor="">Activate the seller account</label>
              <label className='switch'>
                <input type="checkbox" onChange={handleSeller}/>
                <span className='slider round'></span>
              </label>
            </div>
            <label htmlFor="">Phone Number</label>
            <input name='phone' type="text" placeholder='+1 234 567 89' onChange={handleChange}/>

            <label htmlFor="">Description</label>
            <textarea name="desc" id="" cols="10" rows="30" placeholder='A short description of yourself' onChange={handleChange}></textarea>
          </div>
        </form>
      </div>
  )
}

export default Register