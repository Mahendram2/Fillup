import React from 'react'
import { FaRegNewspaper } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// **MUST** - npm i react-icons

import './Mission.css'
const Mission = () => {
  return (
    <div className='mission-container'>
        <div className='flex justify-center mb-6'>
          
          

        <h1 className='flex items-center' > <FaRegNewspaper className='text-4xl mr-4' /> Today's News</h1>
        </div>
        <div className='flex justify-center mb-6'>
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/J5DrZ3kE4Co" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          </div>
        </div>
        <div className='flex justify-center mb-6'> 
          <h2>Your mission</h2>
        </div>
        <h3 className='flex justify-center'>Today, the village is low on clean water, please collect <strong> 20 liters of clean water </strong>   to save the village.</h3>
        <h3 className='flex justify-center'>We need your help!</h3>
        <div className='flex justify-center mb-8'>
        <Link to="/Game"> 
        <button class="bg-transparent flex  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-7 border border-blue-500 hover:border-transparent rounded">
          Next 
        </button>
        </Link>
        <br/>
        </div>
    </div>
  )
}

export default Mission