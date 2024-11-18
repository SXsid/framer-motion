import React from 'react'
import {motion, useAnimationControls} from "framer-motion"
function ControlAni() {
    const controls=useAnimationControls()
    function handleClick(){
        controls.start("flip")
    }
  return (
    <div className='flex flex-col gap-8 h-screen justify-center items-center'>
        <button 
        onClick={handleClick}
        className='text-white bg-slate-400'> translate &scale & flip </button>
        <motion.div 
        variants={{
            initial:{
                scale:1,
                rotate:"0deg",
                y:0
            },
            flip:{
                scale:1.5,
                rotate:'360deg',
                y:10
            }
        }}
        transition={{
            duration:1
        }}
        initial="initial"
       animate={controls}
        className="w-40 h-40 bg-white"></motion.div>
      
    </div>
  )
}

export default ControlAni
