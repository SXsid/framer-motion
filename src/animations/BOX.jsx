import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function BOX() {
    const[visble,setVisible]=useState(false)
  return (
    <div className="flex justify-center items-center h-screen">
        <motion.button 
        layout
        transition={{
            duration:1
        }}
         onClick={()=>setVisible(!visble)} className='text-white'>show/hide</motion.button>
     <AnimatePresence>
     {visble && <motion.div
        initial={{
          rotate: '0deg',
          scale: 0,
          y: 0
        }}
        animate={{
          rotate: '180deg',
          scale: 1,
          y: [0, 20]
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          times: [0, 1] 
        }}
        exit={{
            y:0,
            scale:0,
            rotate:'0deg'
        }}
        
        className="w-40 h-40 bg-white"
      ></motion.div>}
     </AnimatePresence>
    </div>
  );
}

export default BOX;
