import React from 'react'
import { Link } from 'react-router-dom'

// import './Mission.css'
const Mission = () => {
  return (
    <div className='bg-[#c1d9fb] m-12 '>
      <div className=' mt-6 mb-6'>
        <div>
          <div className='flex justify-center mb-6 mt-6'>
        <br/>
        <div>
        <h1 className='font-Raleway'>Today's News</h1>
        </div>
        </div>
        <div className='flex justify-center mb-6 '>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6yCAPAqXodc" title="YouTube video player" frameBorder="0"  allowfullscreen></iframe>
          </div>
        </div>
        <div className='flex justify-center mb-6'> 
          <h2 className='font-Raleway'>Your mission</h2>
        </div>
        <h3 className='flex justify-center font-Raleway'>
          <div>
          </div></h3>
        <h3 className='flex justify-center font-Raleway'>We need your help!</h3>
        <div className='flex justify-center mb-8'>
        <Link to="/Game"> 
        <button class="bg-transparent flex  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-7 border border-blue-500 hover:border-transparent rounded">
          Next 
        </button>
        </Link>
        <br/>
        </div>
        </div>
      
        
        
        
      </div>
  
        
    </div>
  )
}

export default Mission
