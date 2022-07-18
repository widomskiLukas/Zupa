import React from 'react';
import './header.css';
import wmbg from '../../assets/WMBG.svg'

const Header = () => {
  return (
    <div className="zupa__header">
        <div className="zupa__header-image" data-aos = "fade-right" data-aos-duration = "2000">
           <img src={wmbg} alt="brand" />
          </div>
        <div className="zupa__header-content" data-aos = "fade-left" data-aos-duration = "2000">
          <p className="header__text">
            You recognize it when it is here.  And when it is not.
            Often it is hard to tell what exactly it is.  Yet it sometimes makes you laugh, cry, wonder. Or maybe even share, talk,
             discuss, dream or finally take action. We simply call it the Glow of a brand.
            </p>
            <p className="header__text">
             The essence of what sets a brand apart. What makes it attractive, famous, and lively. And ultimately that clarity translates into brand growth.
             It takes strategic rigor, creative curiosity, and multidisciplinary teams to bring to life. And that’s what we do.
            </p>
        </div>
    </div>
  )
}

export default Header