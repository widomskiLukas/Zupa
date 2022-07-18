import React from 'react'

import './cases.css';
import { Footer, HeaderCases } from '../containers';
import {   Navbar, Sidebar, CasesMoreInfo, Brands, Formula, Carousele, CarouseleSecond, Coach, Statistic } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()


const Cases = () => {
  return (

    <div className="Cases">
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <HeaderCases />
      </div>
      <div>
        <Brands />
      </div>
      <div>
        <Formula />
      </div>
      <div>
        <Carousele />
      </div>
      <div>
        <CarouseleSecond />
      </div>
      <div>
        <Coach />
      </div>
      <div>
        <Statistic />
      </div>
      <div>
        <CasesMoreInfo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Cases