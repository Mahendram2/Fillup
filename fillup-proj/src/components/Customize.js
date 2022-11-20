import { useState } from 'react';
import './App.css';

//Data
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
function Customize() {
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
  );
}

export default Customize;
