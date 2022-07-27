import React from 'react';
import './case.css';
import maersk from  '../../assets/maersk.png';
import silvan from  '../../assets/silvan.png';
import { IoMdArrowForward } from "react-icons/io";


const Case = () => {
  return (
    <div className="zupa__case zupa__case-padding" >
      <div className="zupa__left-case" id='zoom'>
          <figure>
            <img src={maersk} alt="Maersk" />
            <div className='zupa__left-case-overlay'>
                <button className="zupa__case-button"><IoMdArrowForward size="24px" color='rgb(0 0 0 / 70%)' /></button>
                <div className='zupa__left-case-overlay-text'>
                  <p>Search strategy</p>
                  <h1>
                  Mærsk Group
                  </h1>
                </div>
            </div>
          </figure>
      </div>
      <div className="zupa__right-case" id='zoom'>
          <figure>
                 <img src={silvan} alt="Silvan" />
                <div className='zupa__right-case-overlay'>
                    <button className="zupa__case-button"><IoMdArrowForward size="24px" color='rgb(0 0 0 / 70%)' /></button>
                    <div className='zupa__right-case-overlay-text'>
                      <p>Silvan / Brand platform</p>
                      <h1>
                      Why build when<br></br> you can create?
                      </h1>
                    </div>
                </div>
            </figure>
      </div>
    </div>

  )
}

export default Case