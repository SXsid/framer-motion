import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Head from './App.jsx'
import  App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    {/* <LandingPage/> */}
    {/* <BOX/>
     */}
     {/* <Gestures/> */}
     {/* <ControlAni/> */}
      {/* <View/> */}
      {/* <ScrollBased/> */}
      {/* <Label/> */}
      {/* <GoogleGeminiEffectDemo/> */}
     <App/> 
     {/* <ZigZag/> */}
  </StrictMode>,
)
