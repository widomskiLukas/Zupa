import React from 'react';
import './job.css';
import diversity from  '../../assets/diversity.png';

const Job = () => {
  return (
    <div className="zupa__job">

      <div className="zupa__gradient-box">
            <div className='zupa__gradient-box-overlay'>
                <div className='zupa__gradient-box-overlay-text'>
                  <p>We are hiring</p>
                  <h1>
                  UX Designer<br></br>ZUPA<br></br>Copenhagen
                  </h1>
                </div>
            </div>
      </div>

      <div className="zupa__job-diversity" id='zoom'>
        <figure>
          <div className="zupa__job-bg">
                <img src={diversity} alt="Diversity" />
                <div className='zupa__job-overlay'>
          </div>
          </div>

        </figure>
          <div className='zupa__diversity-content'>
            <p className='zupa__diversity-big'>LGTB+ Ungdom Meaningful loveletters</p>
            <p className='zupa__diversity-small'>To celebrate diversity, we created an alphabet of love for LGBT+ Ungdom.
              Each letter was assigned its own meaningful word to spark conversations across the gender spectrum.</p>
          </div>
        </div>
    </div>
  )
}

export default Job