import React from 'react'
import '../css/compo4.css'
import Vectorimg from '../assetts/compo4/Vector01.png'

function Compo4() {
  return (
    <div className='main'>
      <div className='fade01'>
      </div>
      <div className='vector'>
      <img src={Vectorimg}  alt="vector"/>
      </div>
      <div className='mainText-01'>
        <text className='mainText-02'>Taste nature’s best in every bite</text>
      </div>
      <div className='shop-btn01'>
        <div className='shop-btn02'></div>
        <div>
          <button className='shop-btn04'>Shop now</button>
        </div>
      </div>
    </div>
  )
}

export default Compo4