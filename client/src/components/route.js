import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main1 from './main1';
import Compo4 from './compo4';
import Compo7 from './compo7';


function Routee() {
  return (
    <Router>
        <div>
            <Routes>
                <Route path='main1' element={<Main1/>}/>
                <Route path='/compo4' element={<Compo4/>}/>
                <Route path='/compo7' element={<Compo7/>}/>
            </Routes>
        </div>
    </Router>
  )
}

export default Routee