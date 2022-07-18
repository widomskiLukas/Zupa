import React from 'react';
import './article.css';
import link from  '../../assets/link.png';
import { IoMdArrowForward } from "react-icons/io";


const Article = () => {
  return (
    <div className='zupa__article'>
      <hr />
        <div className='zupa__article-title'   data-aos = "fade-up" data-aos-duration = "1000">
            <p>
            Lorem ipsum exlibris magna
            </p>
        </div>
        <div className='zupa__article-title-big'   data-aos = "fade-up" data-aos-duration = "1000">
            <p>
            Exlibris magna lix est consectetur hammock quality celcius
            </p>
        </div>
        <div className='zupa__article-content'>
          <div className='zupa__article-content-text'   data-aos = "fade-right" data-aos-duration = "1000">
            <p className='zupa__article-left'>
                Viral normcore roof party kinfolk banjo skateboard salvia gentrify deep v affogato
                vice beard stumptown retro aesthetic. Pitchfork selvage artisan, organic lyft
                single-origin coffee tattooed affogato echo park. Four dollar toast cold-pressed
                pitchfork craft beer pok pok tote bag tattooed raclette single-origin coffee hexagon.
                Meditation hot chicken raw denim, pour-over drinking vinegar
            </p>
          </div>
          <div className='zupa__article-content-text'   data-aos = "fade-left" data-aos-duration = "1000">
            <p className='zupa__article-right'>
            typewriter mustache taiyaki. Irony kombucha glossier, bushwick authentic everyday carry fixie
            chillwave vexillologist enamel pin tilde hot chicken green juice four dollar toast yuccie.
            Man braid slow-carb cloud bread, mixtape master cleanse swag biodiesel asymmetrical air plant
             copper mug chicharrones af bicycle rights macaroni exlit litterature paperbag stuff holiday swipe pool […]
            </p>
          </div>
        </div>
        <div className='zupa_article-link'   data-aos = "fade-right" data-aos-duration = "1000">
        <img src={link} alt="Link" />
        <IoMdArrowForward size="24px" color='#000' />
        <p className='zupa_article-link-text'>
        Read the article
        </p>
        </div>
    </div>
  )
}

export default Article