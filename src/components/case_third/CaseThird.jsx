import React from 'react';
import './case_third.css';
import roof from  '../../assets/roof.png';
import restaurant from  '../../assets/restaurant.png';
import { IoMdArrowForward } from "react-icons/io";


const CaseThird = () => {
  return (
    <div className="zupa__caseThird">

      <div className="zupa__left-caseThird zupa__caseThird-padding" id='zoom' data-aos = "fade-up" data-aos-duration = "1000" >
          <figure>
            <img src={roof} alt="roof" />
            <div className='zupa__left-caseThird-overlay'>
                <button className="zupa__left-caseThird-button"><IoMdArrowForward size="24px" color='rgb(0 0 0 / 70%)' /></button>
                <div className='zupa__left-caseThird-overlay-text'>
                  <p>Concept & Design</p>
                  <h1>
                  Salling Roof Top
                  </h1>
                </div>
            </div>
          </figure>
      </div>


      <div className="zupa__right-caseThird" id='zoom' data-aos = "fade-up" data-aos-duration = "1000">
          <figure>
                 <img src={restaurant} alt="restaurant" />
                <div className='zupa__right-caseThird-overlay'>
                    <button className="zupa__right-caseThird-button"><IoMdArrowForward size="24px" color='rgb(0 0 0 / 70%)' /></button>
                    <div className='zupa__right-caseThird-overlay-text'>
                      <p>Arla Pro  /  Campaign</p>
                      <h1>
                      Passion for Pizza
                      </h1>
                    </div>
                </div>
            </figure>
      </div>



    </div>
  )
}

export default CaseThird