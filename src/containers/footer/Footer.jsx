import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <div className="zupa__footer">
        <div className="zupa__footer-rights">
            <p>© 2022<br></br>
                All rights reserved
            </p>
        </div>
        <div className="zupa__footer-location">
            <p>Copenhagen</p>
            <p>Aarhus</p>
            <p>Odense</p>
        </div>
        <div className="zupa__footer-contact_container">
                <p>hello@zupa.dk
                  +45 55 51 23</p>
        </div>
    </div>
  )
}

export default Footer