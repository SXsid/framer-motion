import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Head from './App.jsx'
import Header from './App.jsx'
import LandingPage from './App.jsx'
import BOX from './animations/BOX.jsx'
import Gestures from './animations/Gestures.jsx'
import ControlAni from './animations/ControlAni.jsx'
import View from './animations/View.jsx'
import ScrollBased from './animations/ScrollBased.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    {/* <LandingPage/> */}
    {/* <BOX/>
     */}
     {/* <Gestures/> */}
     {/* <ControlAni/> */}
      {/* <View/> */}
      <ScrollBased/>
  </StrictMode>,
)
