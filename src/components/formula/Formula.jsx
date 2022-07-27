import React from 'react';
import './formula.css';
import formula from '../../assets/formula.png'

const Formula = () => {
  return (
    <div className='zupa__formula'>

        <div className='zupa__formula-content'>
          <div>
            <img src={formula} alt="sport" />
          </div>
          <div className='zupa__formula-text'>
                <p>
                While the OK formula is well-known, the universe is evolving. Our latest films are the first to follow a main character across multiple ads. In this case,
                a smalltown club manager willing to do whatever it takes to win.
                </p>
                <br />
                <p >
                For each TV ad, we develop series of bumpers for digital channels. With a concept this well-established,
                6 seconds is amble time to get the message across.
                </p>
          </div>
        </div>
    </div>
  )
}

export default Formula