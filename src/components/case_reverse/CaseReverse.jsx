import React from 'react';
import './case_reverse.css';
import branding from  '../../assets/branding.png';
import jysk from  '../../assets/jysk.png';
import { IoMdArrowForward } from "react-icons/io";


const CaseReverse = () => {
  return (
    <div className="zupa__caseThird">

    <div className="zupa__left-caseReverse zupa__caseThird-padding" id='zoom'>
        <figure>
          <img src={branding} alt="Branding" />
          <div className='zupa__left-caseReverse-overlay'>
              <button className="zupa__left-caseReverse-button"><IoMdArrowForward size="24px" color='rgb(0 0 0 / 70%)' /></button>
              <div className='zupa__left-caseReverse-overlay-text'>
                <p>Branding  / Campaign</p>
                <h1>
                OK
                </h1>
              </div>
          </div>
        </figure>
    </div>

    <div className="zupa__right-caseReverse" id='zoom'>
        <figure>
               <img src={jysk} alt="jysk" />
              <div className='zupa__right-caseReverse-overlay'>
                  <button className="zupa__caseThird-button"><IoMdArrowForward size="24px" color='rgb(0 0 0 / 70%)' /></button>
                  <div className='zupa__right-caseReverse-overlay-text'>
                    <p>Campaign</p>
                    <h1>
                    The JYSK<br></br>
                      Apartment
                    </h1>
                  </div>
              </div>
          </figure>
    </div>
  </div>
  )
}

export default CaseReverse