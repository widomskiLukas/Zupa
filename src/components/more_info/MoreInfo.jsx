import React from 'react';
import './more_info.css';
import footer from  '../../assets/footer.png';
import { IoMdArrowForward } from "react-icons/io";

const MoreInfo = () => {
  return (
    <div className="zupa__moreInfo">
      <div className='zupa__moreInfo-content'>
            <p>
              More info
            </p>
            <h4>
            Mogens Kristensen, CEO<br></br>
            +45 55 54 32 10<br></br>
            mk@zupa.dk
            </h4>
       </div>
       <div className="zupa__moreInfo-work">
          <figure>
            <div className='zupa__moreInfo-overlay'>
                <div className='zupa__moreInfo-image'>
                    <img src={footer} alt="footer" />
                </div>
                <div className='zupa__moreInfo-service'>
                      <div className='zupa__moreInfo-gradient'>
                      <div className='zupa__moreInfo-icon' id='icon'>
                          <IoMdArrowForward size="34px" color='#fff' />
                      </div>
                        <p>
                          Services
                        </p>
                        <h4>
                        Check out our work magna exlibris lorem ipsum
                        </h4>
                    </div>
                </div>
            </div>
          </figure>
      </div>
    </div>
  )
}

export default MoreInfo