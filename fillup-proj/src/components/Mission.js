import React from 'react'
import './Mission.css';

const Mission = () => {
    const src = 'https://youtu.be/EUn1on_8xL0';
  return (
    <div className='mission-container'>
        <h1>Today's news</h1>
        <video src={src}>

        </video>
        <p>your mission goes here</p>
    </div>
  )
}

export default Mission