import React from 'react';
import './carousele.css';
import carousele1 from '../../assets/carousele1.png'
import carousele2 from '../../assets/carousele2.png'


const Carousele = () => {
  return (
    <div className="zupa__carousele">
    <div className="zupa__left-carousele" id='zoom'>
          <img src={carousele1} alt="Bumper" />
          <p>Bumper 1</p>

    </div>
    <div className="zupa__right-carousele">
             <img src={carousele2} alt="Bumper" />
             <p>Bumper 2</p>
    </div>


  </div>

  )
}

export default Carousele