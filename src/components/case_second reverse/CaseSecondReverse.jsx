import React from 'react';
import './case_second_reverse.css';
import identity from  '../../assets/identity.png';
import invisio from  '../../assets/invisio.png';
import { IoMdArrowForward } from "react-icons/io";


const CaseSecondReverse = () => {
  return (
    <div className="zupa__caseSecondReverse zupa__caseSecondReverse-padding">
      <div className="zupa__left-caseSecondReverse" data-aos = "fade-up" data-aos-duration = "1000">
        <img src={identity} alt="Identity" />
        <div className='zupa__caseSecondReverse-content-big'>
            <p>
              Oles Gård Identity
            </p>
        </div>
        <div className='zupa__caseSecondReverse-content-small'>
            <p>
            Gentrify typewriter hammock thundercats snackwave asymmetrical sustainable pork belly poutine street art chia kinfolk. Try-hard meditation synth green juice live-edge kale.
            </p>
        </div>
      </div>

      <div className="zupa__right-caseSecondReverse" id='zoom' data-aos = "fade-up" data-aos-duration = "1000">
        <figure>
               <img src={invisio} alt="jysk" />
              <div className='zupa__right-caseSecondReverse-overlay'>
                  <button className="zupa__caseThird-button"><IoMdArrowForward size="24px" color='rgb(0 0 0 / 70%)' /></button>
                  <div className='zupa__right-caseSecondReverse-overlay-text'>
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

export default CaseSecondReverse