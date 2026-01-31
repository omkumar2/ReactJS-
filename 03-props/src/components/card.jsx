import React from 'react'

const Card = (props) => {

    console.log(props);

  return (
    <div>
        <div className='card'>
        {/* <img src="https://i.pinimg.com/1200x/f3/17/1e/f3171e291c862bd7eed6a52386668494.jpg" alt="" /> */}
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
      </div>
    </div>  
  )
}

export default Card
