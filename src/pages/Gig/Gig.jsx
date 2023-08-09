import React,{useEffect} from 'react'
import './Gig.scss'
import { AiFillStar } from "react-icons/ai";
import Slider from 'infinite-react-carousel';
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";

import { FiDisc } from "react-icons/fi";
import { FiChrome } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";
import axios from 'axios'

const Gig = () => {

  // const getdata = async ()=>{
  //   let data = await axios.get("http://localhost:7500/api/gigs")
  //   console.log(data)
  // }
  
  // useEffect(()=>{
  //  getdata()
  // },[])
  return (

    <div className='gig' >
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">FIVERR GRAPHICS & DESIGN</span>
          <h1>I will create AI generated art for you</h1>
          <div className="user">
            <img className='pp' src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <span>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowsScroll={1} className="slider">
            <img src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?" alt="tech1" />
            <img src="https://img.freepik.com/free-photo/medium-shot-men-holding-smartphone_23-2150208243.jpg?" alt="tech2" />
            <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?" alt="tech3" />
          </Slider>
          <h2>About This Gig</h2>
          <p>
          AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms, allowing the 
          software to learn automatically from patterns or features in the data. AI is a broad field of study that includes many 
          theories, methods and technologies, as well as the following major subfields. In summary, the goal of AI is to provide 
          software that can reason on input and explain on output. AI will provide human-like interactions with software and offer 
          decision support for specific tasks, but it’s not a replacement for humans – and won’t be anytime soon.
          </p>
          {/* <button onClick={()=>gigData()}>click here</button> */}
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">August 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms,
                allowing the software to learn automatically from patterns or features in the data.</p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://img.freepik.com/free-photo/flag-united-states-america_1401-253.jpg?" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <span>5</span>
               </div>
              <p>AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms,
                allowing the software to learn automatically from patterns or features in the data.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <FiThumbsUp/>
                <span>Yes</span>
                <FiThumbsDown/>
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://img.freepik.com/free-photo/flag-united-states-america_1401-253.jpg?" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <span>5</span>
               </div>
              <p>AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms,
                allowing the software to learn automatically from patterns or features in the data.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <FiThumbsUp/>
                <span>Yes</span>
                <FiThumbsDown/>
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://img.freepik.com/free-photo/flag-united-states-america_1401-253.jpg?" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <span>5</span>
               </div>
              <p>AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms,
                allowing the software to learn automatically from patterns or features in the data.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <FiThumbsUp/>
                <span>Yes</span>
                <FiThumbsDown/>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms</p>
          <div className="details">
            <div className="item">
              <FiDisc/>
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <FiChrome/>
              <span>3 Revision</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <FcCheckmark/>
              <span>Prompt Writting</span>
            </div>
            <div className="item">
              <FcCheckmark/>
              <span>Prompt Writting</span>
            </div>
            <div className="item">
              <FcCheckmark/>
              <span>Prompt Writting</span>
            </div>
            <div className="item">
              <FcCheckmark/>
              <span>Prompt Writting</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig