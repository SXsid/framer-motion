import React from 'react'
import {motion} from "framer-motion"
function Label() {
  return (
    <motion.div
    initial={{
        opacity:0,
        y:20,
        x:10
    }}
    animate={{
        opacity:1,
        y:0,
        x:0
    }}
    transition={{
        duration:2
    }}>
        <div className='flex flex-col justify-center items-center mt-24' >
      <label htmlFor='data'>image</label>
      <input id='image' type='file' className='hidden'/>
      <label htmlFor="image">
        <div id="data" className='w-[100px] h-24 bg-gray-300 cursor-pointer'>
            put you image here
        </div>
      </label>
    </div>
    </motion.div>
  )
}

export default Label
