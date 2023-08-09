import React from 'react'
import './Slide2.scss'
import Slider from 'infinite-react-carousel';
import {projects} from "../../data"
import ProjCard from "../ProjCard/ProjCard"


const Slide2 = () => {
  return (
    <div className='slide2'>
        <div className="container">
        <Slider slidesToShow={3} arrowsScroll={3}>
          {projects.map(proj=>{
          return(<ProjCard item={proj} key={proj.id}/>)
          })}
        </Slider>
        </div>
    </div>
  )
}

export default Slide2