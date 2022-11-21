import { useState } from 'react';
import { Link } from 'react-router-dom';
import rain from './images/rain.png';
import black from './images/black.png'
import goji from './images/goji.png';
import indigo from './images/indigo.png'
import laguna from './images/laguna.png';
import olive from './images/olive.png'
import pacific from './images/pacific.png';
import seagrass from './images/seagrass.png'
import snapper from './images/snapper.png';
import starfish from './images/starfish.png'
import stone from './images/stone.png';




const dataFlasks = [
  {
    id: 1,
    name: 'Chose Your Style',
    colors: ['#A1E52C', '#01B8E5', '#C92C49', 'red','orange', '#888C8D', 'white','olive','black','#87acc7','#264e68','#0096b1'],
    checkImg: {
      '#A1E52C': false,
      '#01B8E5': true,
      '#C92C49': false,
      'red': false,
      'orange': false,
      '#888C8D': false,
      'white': false,
      'olive':false,
      'black':false,
      '#264e68': false,
      '#0096b1': false,
      '#87acc7': false,
    },

    linkImg: {
      '#A1E52C':
        `${seagrass}`,

      '#01B8E5':
        `${pacific}`,

      '#C92C49': `${snapper}`,

      'red' : `${goji}`,

      'orange' :`${starfish}`,

      'olive' : `${olive}`,

      'black' : `${black}`,
      
      'white' : 'https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/s/2/s24sx110-white-straighton.jpg',

      '#264e68' : `${indigo}`,

      '#0096b1' : `${laguna}`,

      '#888C8D' : `${stone}`,

      '#87acc7' :  `${rain}` 
    },
  }
  
];

const Home = (props) => {
  console.log(props)
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
      
        <div className="flex justify-center">
      
      <div className="content">
        <div className="d-flex">
          {bottle.map((bottles) => (
            <div key={bottles.id} className="flex">
              {/* Render ImG  */}
              {/* If Checkimg property true => render img with that property
               */}
              {Object.keys(bottles.checkImg).map((item) => {
                if (bottles.checkImg[item]) {
                  {props.setBottle(bottles.linkImg[item])}
                  return (
                    <img
                      key={item}
                      src={bottles.linkImg[item]}
                      alt={bottles.name}
                      className="img"
                      width="700px"
                    />
                  );
                } else {
                  return null;
                }
              })}
              
            
                <div className='container flex flex-wrap  justify-center items-center'>
                  <div>
                    <div className='grid grid-cols-3 gap-4'>
                      {bottles.colors.map((color) => (
                                        <p
                                          key={color}
                                          className={` ${bottles.checkImg[color] && 'active'}  hover:border-orange-50 border-solid border-2 border-stone-500 `}
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
                    </div >
                    <div className='flex justify-center'>
                      <Link to="/mission">
                      <button class="bg-transparent flex  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-7 border border-blue-500 hover:border-transparent rounded">
                         Done 
                      </button>
                      </Link>
                      </div>
                    
                  </div>
                 
                                    
                                  </div>
            
            </div>
          ))}
        </div>
      </div>


      </div>
      <div  />
      <div className='justify-center flex m-5'>
        
      </div>
      
    </div>
  )
}

export default Home