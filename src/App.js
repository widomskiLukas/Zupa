import React from 'react'

import './App.css';
import './pages/cases.css';
import './pages/home.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Cases from "./pages/Cases"


AOS.init()


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/home' element={<Home />}> </Route>
        <Route path='/cases' element={<Cases />}> </Route>
      </Routes>
    </Router>

  )
}

export default App