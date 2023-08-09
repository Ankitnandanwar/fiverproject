import React from 'react'
import './Slide.scss'
import Slider from 'infinite-react-carousel';
import {cards} from "../../data"
import CatCard from '../CatCard/CatCard';

const Slide = () => {
  // console.log(cards)
  return (
    <div className='slide'>
        <div className="container">
        <Slider slidesToShow={4} arrowsScroll={5}>
          {cards.map(card=>{
          return(<CatCard item={card} key={card.id}/>)
          })}
        </Slider>
        </div>
    </div>
  )
}

export default Slide