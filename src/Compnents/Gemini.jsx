import React, { useRef } from 'react'
import Test101 from '../animations/Test101'

function Gemini() {
  const ref = useRef()
  return (
    <div>
      <div
            className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative  " ref={ref}>
              
              <Test101 ref={ref}/>
             
            </div>
    </div>
  )
}

export default Gemini
