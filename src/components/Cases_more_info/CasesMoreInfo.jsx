import React from 'react';
import './casesMoreInfo.css';
import more_info from  '../../assets/more_info.png';
import { IoMdArrowForward } from "react-icons/io";

const CasesMoreInfo = () => {
  return (
    <div className="zupa__CasesmoreInfo" data-aos = "fade-up" data-aos-duration = "1000">
    <div className='zupa__CasesmoreInfo-content'>
            <p>
              More info
            </p>
            <h4>
            Mads Mikkelsen<br></br>
            +45 55 54 32 10  <br></br>
            sh@zupa.dk
            </h4>
     </div>
     <div className="zupa__CasesmoreInfo-work" id='zoom' >
        <figure>
          <div className='zupa__CasesmoreInfo-overlay'>
              <div className='zupa__CasesmoreInfo-image'>
                  <img src={more_info} alt="footer" />
              </div>
              <div className='zupa__CasesmoreInfo-service'>
                    <div className='zupa__CasesmoreInfo-gradient'>
                    <div className='zupa__CasesmoreInfo-icon' id='icon'>
                        <IoMdArrowForward size="34px" color='#fff' />
                    </div>
                      <p>
                      Silvan  /  Brand platform
                      </p>
                      <h4>
                      Why build when you can create?
                      </h4>
                  </div>
              </div>
          </div>
        </figure>
    </div>
  </div>

  )
}

export default CasesMoreInfo