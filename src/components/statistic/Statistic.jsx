import React from 'react';
import './statistic.css';

const Statistic = () => {
  return (
    <div className="zupa__statistic">
      <div className='zupa__statistic-content'>
        <div className='col zupa__views'>
            <p>
            Views
            </p>
            <h1>1,7<span>mio&nbsp;+</span></h1>
        </div>
        <div className='col zupa__unique'>
            <p>
            Unique views
            </p>
            <h1>1<span>mio&nbsp;+</span></h1>
        </div>
        <div className='col zupa__comments'>
            <p>
            Comments
            </p>
            <h1>1000<span>+</span></h1>
        </div>
        <div className='col zupa__brand'>
            <p>
            Brand knowledge
            </p>
            <h1>95%</h1>
        </div>
        <div className='col zupa__brand-index'>
            <p>
            YouGov Brand Index
            </p>
            <h1><span>No.&nbsp;</span>01</h1>
        </div>
       </div>
    </div>
  )
}

export default Statistic