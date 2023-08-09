import React from 'react'
import Featured from '../../components/Featured/Featured'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/TrustedBy/TrustedBy'
import './Home.scss'

import { BsPatchCheckFill } from "react-icons/bs";
import video from "../../images/videoplayback.mp4"
import Slide2 from '../../components/Slide2/Slide2'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide/>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <BsPatchCheckFill/>
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project based pricing.</p>
            <div className="title">
              <BsPatchCheckFill/>
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project based pricing.</p>
            <div className="title">
              <BsPatchCheckFill/>
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project based pricing.</p>
          </div>
          <div className="item">
            <video src={video} controls></video>
          </div>
        </div>
      </div>


      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benifits,
              dedicated to businesses.
            </p>
            <div className="title">
              <BsPatchCheckFill/>
              Connect to freelancers with proven business experience.
            </div>
            <div className="title">
              <BsPatchCheckFill/>
              Connect to freelancers with proven business experience.
            </div>
            <div className="title">
              <BsPatchCheckFill/>
              Connect to freelancers with proven business experience.
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="https://cloudinary-marketing-res.cloudinary.com/images/w_1541,h_919/c_scale,w_700,dpr_2.0/f_auto,q_auto/v1667567849/content_velocity_hero_new/content_velocity_hero_new-png?_i=AA" alt="" />
          </div>
        </div>
      </div>
      <Slide2/>
    </div>
  )
}

export default Home