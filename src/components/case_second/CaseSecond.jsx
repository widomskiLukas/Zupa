import React from 'react';
import './case_second.css';
import workshop from  '../../assets/workshop.png';
import friland from  '../../assets/friland.png';
import { IoMdArrowForward } from "react-icons/io";


const CaseSecond = () => {
  return (
    <div className="zupa__caseSecond zupa__caseSecond-padding">
      <div className="zupa__left-caseSecond"  data-aos = "fade-up" id='zoom' data-aos-duration = "1000">
          <figure>
            <img src={workshop} alt="Workshop" />
                <div className='zupa__left-caseSecond-overlay'>
                    <button className="zupa__caseSecond-button"><IoMdArrowForward size="24px" color='rgb(0 0 0 / 70%)' /></button>
                    <div className='zupa__left-caseSecond-overlay-text'>
                          <p>Brand platform</p>
                          <h1>
                          Superdæk Autoværksted
                          </h1>
                    </div>
                </div>
            </figure>
          </div>
      <div className="zupa__right-caseSecond" id='zoom' data-aos = "fade-up" data-aos-duration = "1000">
        <figure>
               <img src={friland} alt="Friland" />
                  <div className='zupa__right-caseSecond-overlay'>
                      <button className="zupa__caseSecond-button"><IoMdArrowForward size="24px" color='rgb(0 0 0 / 70%)' /></button>
                      <div className='zupa__right-caseSecond-overlay-text'>
                            <p>Branding campaign</p>
                            <h1>
                            Friland Økologi
                            </h1>
                      </div>
                  </div>
        </figure>
      </div>
    </div>
  )
}

export default CaseSecond