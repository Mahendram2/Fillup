import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
        <div class="flex">
        <div className="container"><img src="https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_333206885_99_a-Hydroflask-40-oz-Wide-Mouth-Bottle-W40BTS306?wid=288&hei=288&op_sharpen=1&resMode=sharp2&qlt=85,0" width="800px"></img>
        <div className="flex justify-center">
          <p>current Hydration</p>
        </div>
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
            
          <p>
          Read more at: Water Facts - <Link to="Worldwide Water Supply | ARWEC| CCAO | Area Offices | California-Great Basin | Bureau of Reclamation (usbr.gov)">Worldwide Water Supply | ARWEC| CCAO | Area Offices | California-Great Basin | Bureau of Reclamation (usbr.gov)
          </Link></p>
          <div className="flex justify-end">
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Start
          </button>
          </div>
          
        </div>
      </div>
       
    </div>
  )
}

export default Home
