import React from 'react'
import { motion } from 'framer-motion'
function Gestures() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <motion.div 
      whileDrag={{scale:4}}
      whileHover={{scale:2}}
      whileTap={{rotate:200}}
      transition={{
        duration:2
      }}
      draggable={true}
      className='h-40 w-40 bg-slate-200 z-100 shadow-xl shadow-teal-100'></motion.div>
    </div>
  )
}

export default Gestures
