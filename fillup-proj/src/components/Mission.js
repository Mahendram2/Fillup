import React from 'react'
<<<<<<< HEAD
import './Mission.css';

=======
import './Mission.css'
>>>>>>> origin/main
const Mission = () => {
    const src = 'https://youtu.be/EUn1on_8xL0';
  return (
    <div className='mission-container'>
<<<<<<< HEAD
        <h1>Today's news</h1>
        <video src={src}>

        </video>
        <p>your mission goes here</p>
=======
        <h1>Today's News</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6yCAPAqXodc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Your mission</h2>
        <h3 className='today-text'>Today, the village is low on clean water, please collect <span>20 liters of clean water</span> to save the village.</h3>
        <h3>We need your help!</h3>
>>>>>>> origin/main
    </div>
  )
}

export default Mission