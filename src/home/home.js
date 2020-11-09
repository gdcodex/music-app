import React from 'react'
import Bottom from '../elements/uielements/bottom'
import Top from '../elements/uielements/top'
import './home.css'
import Homebody from './homebody'

function Home() {
    return (
        <div>
         <Top/>
      <Homebody/>
         <Bottom/>   
        </div>
    )
}

export default Home
