import React,{useState, useEffect} from 'react'
import './Navbar.scss'
import {Link, useLocation} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import axios from "axios"


const Navbar = () => {
    const data = ()=>{
        fetch("http://localhost:7500/api/gigs",{
            method:'Get',
            headers:{
                'Content-type':'application/json'
            }
           }).then(res=>console.log(res.json())).then(data=>console.log(data))
    }
      
      useEffect(()=>{
       data()
      },[])

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()
    const navigate = useNavigate()


    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
     window.addEventListener("scroll", isActive);

     return ()=>{
        window.removeEventListener("scroll", isActive);
     }
    }, [])


    const currentUser = JSON.parse(localStorage.getItem("currentUser"))


    // Logout function
    const handleLogout = async () =>{
        try {
          await axios.post("http://localhost:7500/api/auth/logout")
          localStorage.setItem("currentUser", null)
          navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to='/' className='link'><span className='text'>fiverr</span></Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                <Link to="/login" className='link'>Sign In</Link>
                {!currentUser && <Link to="/register"><button>Join</button></Link>}
                {currentUser && (
                    <div className='user' onClick={()=>setOpen(!open)}>
                        <img src={currentUser.img || "/img/profile-img.png"} alt="" />
                        <span>{currentUser?.username}</span>
                        {open && <div className='options'>
                            {
                                currentUser?.isSeller && (
                                    <>
                                        <Link className='link' to='/mygigs'>Gigs</Link>
                                        <Link className='link' to='/add'>Add new Gig</Link>
                                    </>
                                )
                            }
                            <Link className='link' to='/orders'>Orders</Link>
                            <Link className='link' to='/messages'>Messages</Link>
                            <Link className='link' onClick={handleLogout}>Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {(active || pathname !=="/") &&(
            <>
                <hr />
                <div className='menu'>
                <Link className='link' to='/'>Graphic & Design</Link>
                <Link className='link' to='/'>Video & Animation</Link>
                <Link className='link' to='/'>Writing & Translation</Link>
                <Link className='link' to='/'>AI Services</Link>
                <Link className='link' to='/'>Digital Marketing</Link>
                <Link className='link' to='/'>Music & Audio</Link>
                <Link className='link' to='/'>Programming & Tech</Link>
                <Link className='link' to='/'>Business</Link>
                <Link className='link' to='/'>Lifestyle</Link>
                </div>
                <hr />
            </>
        )}
        
    </div>
  )
}

export default Navbar