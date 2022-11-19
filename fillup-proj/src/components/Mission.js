import React from 'react'
import './Mission.css'
const Mission = () => {
  return (
    <div className='mission-container'>
        <h1>Today's News</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6yCAPAqXodc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Your mission</h2>
        <h3 className='today-text'>Today, the village is low on clean water, please collect <span>20 liters of clean water</span> to save the village.</h3>
        <h3>We need your help!</h3>
    </div>
  )
}

export default Mission