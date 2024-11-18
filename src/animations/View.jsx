import React, { useEffect, useRef } from 'react'
import {motion, useInView} from "framer-motion"
function View() {
    const ref = useRef(null)
    const isInview = useInView(ref,{
        once:true
    })
    useEffect(()=>{
        console.log(isInview);
        
    },[isInview])
  return (
    <div>
        <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1
        }}
        className='w-[70vw] h-[120vh] bg-white'></motion.div>
      <div className='h-[150vh]'></div>
      <motion.div
      ref={ref}
        
        
        transition={{
            duration:1
        }}className={`w-[70vw] h-[120vh] ${isInview?"bg-blue-300 scale-100":"bg-red-400 scale-80"} transition-all duration-1000 `}/>
    </div>
  )
}

export default View
