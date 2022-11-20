import { useState } from 'react';


const dataFlasks = [
  {
    id: 1,
    name: 'Chose Your Style',
    colors: ['#A1E52C', '#01B8E5', '#C92C49', 'red','orange', '#888C8D'],
    checkImg: {
      '#A1E52C': false,
      '#01B8E5': true,
      '#C92C49': false,
      'red': false,
      'orange': false,
      '#888C8D': false,
    },

    linkImg: {
      '#A1E52C':
        'https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/s/2/s24sx321-seagrass-straighton.jpg',

      '#01B8E5':
        'https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/s/2/s24sx415-pacific-straighton.jpg',

      '#C92C49': 'https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/s/2/s24sx604-snapper-straighton.jpg',

      'red' : 'https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/s/2/s24sx612-goji-straighton.jpg',

      'orange' : 'https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/s/2/s24sx827-starfish-straighton.jpg',

      '#888C8D' : 'https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/s/2/s24sx010-stone-straighton.jpg'
    },
  }
  
];

const Home = () => {
  const [bottle, setBottles] = useState(dataFlasks);
  const handleChooseColor = (id, color) => {
    setBottles((prev) => {
      return prev.map((bottles) => {
        if (bottles.id === id) {
          let newCheckImg = {};

          Object.keys(bottles.checkImg).map((item) => {
            bottles.checkImg[item] = false;
            newCheckImg = { ...bottles.checkImg, [color]: true };
            return null;
          });

          return { ...bottles, checkImg: newCheckImg };
        } else {
          return bottles;
        }
      });
    });
  };
  return (
    <div>
        <div class="flex">
        <div className="App">
      <div className="fade" />
      <div className="content">
        <div className="d-flex">
          {bottle.map((bottles) => (
            <div key={bottles.id} className="cart">
              {/* Render ImG  */}
              {/* If Checkimg property true => render img with that property
               */}
              {Object.keys(bottles.checkImg).map((item) => {
                if (bottles.checkImg[item]) {
                  return (
                    <img
                      key={item}
                      src={bottles.linkImg[item]}
                      alt={bottles.name}
                      className="img"
                    />
                  );
                } else {
                  return null;
                }
              })}
              <div className="colors d-flex">
                {bottles.colors.map((color) => (
                  <p
                    key={color}
                    className={` ${bottles.checkImg[color] && 'active'}   `}
                    style={{
                      backgroundColor: color,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      marginRight: 10,
                      cursor: 'pointer',
                    }}
                    onClick={() => handleChooseColor(bottles.id, color)}
                  ></p>
                ))}
              </div>
              <p>{bottles.name}</p>
            </div>
          ))}
        </div>
      </div>


      </div>
        <div className="container">
          <p className="p-container">
          We all want to do our part to help our planet and sustainability.
           Understanding the cycle of water and how each of us can do a little every day to stay hydrated and keep the planet happy. 
           </p>
           <br/>
           
          <h1 className="">
            <strong>Water Facts - Worldwide Water Supply</strong>
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
            </ul>
            <br/>
            </div>
            
          <p>
          Read more at: <u><a href="https://www.usbr.gov/mp/arwec/water-facts-ww-water-sup.html" target="_blank" rel="noopener noreferrer">Water Facts - Worldwide Water Supply | (usbr.gov) </a></u>
          </p>
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