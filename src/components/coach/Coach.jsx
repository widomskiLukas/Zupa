import React from 'react';
import './coach.css';
import coach from '../../assets/coach.png'

const Coach = () => {
  return (
    <div className='zupa__coach'>


        <div className='zupa__coach-text'>
                <p>
                Everyone is in the joke. Even former head coach of FC Copenhagen,
                Ståle Solbakken. In 2020, he starred in a Facebook teaser ad,
                which generated more than a million unique views and +1000 comments.
                </p>
          </div>
          <div className='zupa__coach-content'>
          <div>
            <img src={coach} alt="coach" />
          </div>

        </div>
    </div>
  )
}

export default Coach