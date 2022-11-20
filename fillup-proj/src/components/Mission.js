import React from 'react'

import './Mission.css'
const Mission = () => {
  return (
    <div className='mission-container'>
        <div className='flex justify-center mb-6'>
        <h1 >Today's News</h1>
        </div>
        <div className='flex justify-center mb-6'>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6yCAPAqXodc" title="YouTube video player" frameBorder="0"  allowfullscreen></iframe>
          </div>
        </div>
        <div className='flex justify-center mb-6'> 
          <h2>Your mission</h2>
        </div>
        <h3 className='flex justify-center'>Today, the village is low on clean water, please collect  20 liters of clean water to save the village.</h3>
        <h3 className='flex justify-center'>We need your help!</h3>
    </div>
  )
}

export default Mission
