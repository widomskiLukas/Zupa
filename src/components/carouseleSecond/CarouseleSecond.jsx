import React from 'react';
import './carouseleSecond.css';
import carousele3 from '../../assets/carousele3.png'
import carousele4 from '../../assets/carousele4.png'


const CarouseleSecond = () => {
  return (
    <div className="zupa__carouseleSecond">
    <div className="zupa__left-carouseleSecond" id='zoom'>
          <img src={carousele3} alt="Bumper" />
          <p>Bumper 3</p>

    </div>
    <div className="zupa__right-carouseleSecond">
             <img src={carousele4} alt="Bumper" />
             <p>Bumper 4</p>
    </div>


  </div>

  )
}

export default CarouseleSecond