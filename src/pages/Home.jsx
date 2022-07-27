import React from 'react'

import './home.css';
import { Footer, Header, Job} from '../containers';
import { Article, Case, Navbar, Sidebar, Breaker, CaseSecond, CaseThird, CaseReverse, CaseSecondReverse, MoreInfo, GoToTop } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()


const Home = () => {
  return (

    <div className="Home">
      <div className='nav'>
        <Navbar />
      </div>
      <div className='side'>
        <Sidebar />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Case />
      </div>
      <div>
        <Job />
      </div>
      <div>
        <CaseSecond />
      </div>
      <div>
        <Breaker />
      </div>
      <div>
        <CaseThird />
      </div>
      <div>
        <Article />
      </div>
      <div>
        <CaseReverse />
      </div>
      <div>
        <CaseSecondReverse />
      </div>
      <div>
        <MoreInfo />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <GoToTop />
      </div>
    </div>
  )
}

export default Home