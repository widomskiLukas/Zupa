import React from 'react';
import './brands.css';
import sport1 from '../../assets/sport1.png'

const Brands = () => {
  return (
    <div className="zupa__brands">
        <div className="zupa__brands-content zupa__brands-content">
            <img src={sport1} alt="sport" />
            <h1>
            For more than a decade, energy company OK has celebrated the unsung heroes of local sports in their TV ads, building a strong brand position along the way.
              </h1>
              <p>
              The in-your-face comedy and likeable characters of the OK universe resonate broadly. Today, more than 95% of all Danes knows the brand, and OK is by far the most
              liked brand in in the “Energy” category, according to YouGov.
              </p>
        </div>
    </div>
  )
}

export default Brands