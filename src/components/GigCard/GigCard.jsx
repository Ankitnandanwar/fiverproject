import React from 'react'
import "./GigCard.scss"
import {Link} from 'react-router-dom'
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";


const GigCard = ({item}) => {
  return (
    <Link to='/gig/123' className='link'>
        <div className='gigCard'>
            <img src={item.img} alt="item-img" />
            <div className="info">
                <div className="user">
                    <img src={item.pp} alt="profile-pic" />
                    <span>{item.username}</span>
                </div>
                <p>{item.desc}</p>
                <div className="star">
                    <AiOutlineStar/>
                    <span>{item.star}</span>
                </div>
            </div>
            <hr />
            <div className="details">
                <AiOutlineHeart/>
                <div className="price">
                    <span>STARTING AT</span>
                    <h2>${item.price}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default GigCard