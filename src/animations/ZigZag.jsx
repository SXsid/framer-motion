import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

function ZigZag() {
    const ref = useRef(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const firstpathLength = useTransform(scrollYProgress,[0.2,1],[0.2,2.5])
  return (
   <div>
     <div className='h-[200vh] w-full relative bg-black' ref={ref}>
        <div className='sticky top-40 w-full flex justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="150" viewBox="0 0 200 150">
  <motion.path d="M0 50 L50 100 L100 50 L150 100 L200 50" stroke="#FF5733" stroke-width="2" fill="none"
  initial={{pathLength:1}}
  style={{pathLength:firstpathLength}}
  />
  <path d="M0 50 L50 100 L100 50 L150 100 L200 50" stroke="#FF5733" stroke-width="2" fill="none"
  filter='url(#blur)'/>
  <defs>
    <filter id='blur'>
        <feGaussianBlur in="" stdDeviation={5}></feGaussianBlur>
    </filter>
  </defs>
</svg>

        </div>
      </div>
      
    </div>
  )
}

export default ZigZag
