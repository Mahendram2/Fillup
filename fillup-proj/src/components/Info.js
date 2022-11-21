import React from 'react'

const Info = (props) => {
  return (
    <div>
        <div class="flex">
        <div className="container"><img src={props.bottle} width="800px"></img>
        
          </div>
        <div className="container">
          <p className="container">
          We all want to do our part to help our planet and sustainability.
           Understanding the cycle of water and how each of us can do a little every day to stay hydrated and keep the planet happy. 
           </p>
           <br/>

          <h1 className="">
          Water Facts - Worldwide Water Supply
          </h1>
            <div className="ml-5">
              <ul className="list-disc">
              <li>
                Water covers about 71% of the earth's surface.
              </li>
              <li>
                326 million cubic miles of water on the planet
              </li>
              <li>
              97% of the earth's water is found in the oceans (too salty for drinking, growing crops, and most industrial uses except cooling).
              </li>
              <li>
              320 million cubic miles of water in the oceans
              </li>
              <li>
              3% of the earth's water is fresh.
              </li>
              <li>
              2.5% of the earth's fresh water is unavailable: locked up in glaciers, polar ice caps, atmosphere, and soil; highly polluted; or lies too far under the earth's surface to be extracted at an affordable cost.
              </li>
              <li>
              0.5% of the earth's water is available fresh water.
              </li>
              <li>
              If the world's water supply were only 100 liters (26 gallons), our usable water supply of fresh water would be only about 0.003 liter (one-half teaspoon).
              </li>
              <li>
              In actuality, that amounts to an average of 8.4 million liters (2.2 million gallons) for each person on earth.
              </li>
              <li>
              This supply is continually collected, purified, and distributed in the natural hydrologic (water) cycle.
              </li>
            </ul>
            <br/>
            </div>

          <a href="https://www.usbr.gov/mp/arwec/water-facts-ww-water-sup.html">Read More Facts | Worldwide Water Supply</a>
        </div>
      </div>

    </div>
  )
}

export default Info