import React from 'react'
import ReactStars from "react-rating-stars-component";

const Ratings = ({rat}) => {
  return (
    <ReactStars
                count={5}
                value={rat}
                onChange={() => {}}
                size={24}
                edit={false}
                activeColor="#ffd700"
                
                />
  )
}

export default Ratings