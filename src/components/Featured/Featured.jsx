import React from 'react'
import "./Featured.scss"
import { RiSearchLine } from "react-icons/ri";
import featuredImg from "../../images/Featured-Img.png"

const Featured = () => {
  return (
    <div className='featured'>
        <div className='container'>
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <RiSearchLine className='search-img'/>
                        <input type="text" placeholder='Try building mobile app'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src={featuredImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured