import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { IconBrandGithub, IconBrandX, IconBrandLinkedin, IconHome, IconMail } from '@tabler/icons-react';


function FloatingDoc() {
  return (
    <div className="flex justify-center items-center w-full fixed bottom-20">
      <CoreDoc />
    </div>
  );
}

const CoreDoc = () => {
  const Links = [

    {
        text:"Mail",
        Element: <IconMail stroke={1.5} className='h-full w-full text-gray-800' />
    },
    {
        text:"Github",
        Element: <IconBrandGithub stroke={1.5} className='h-full w-full text-gray-800' />
    },
    {
        text:"Home",
        Element:     <IconHome stroke={1.5} className='h-full w-full text-gray-800' />,
    },
    {
        text:"Linkdin",
        Element: <IconBrandLinkedin stroke={1.5} className='h-full w-full text-gray-800' />
    },
    {
        text:"twitter/x",
        Element: <IconBrandX stroke={1.5} className='h-full w-full text-gray-800' />
    },
   
  ];
  const mouseX = useMotionValue(Infinity)
  return (
    <motion.div
        onMouseMove={(e)=>mouseX.set(e.pageX)}
        onMouseLeave={()=>mouseX.set(Infinity)}
    className="flex mx-auto bg-white gap-5 px-5 rounded-xl h-14 w-fit items-center ">
      {Links.map((link, index) => {
        return <Icons key={index} title={link.text} mouseX={mouseX}>{link.Element}</Icons>;
      })}
    </motion.div>
  );
};

const Icons = ({ children,mouseX ,title}) => {
    const ref = useRef(null);
    const [hover,setHover]=useState(false)
    const distance = useTransform(mouseX,(val)=>{
        if(!ref.current) return 0;
        let bound = ref.current.getBoundingClientRect()??{x:0,width:0}
        return val -(bound.x + (bound.width/2))
    })
    const widthLength = useTransform(distance,[-150,0,150],[40,80,40])
    const heightLenth = useTransform(distance,[-150,0,150],[40,80,40])
    const width = useSpring(widthLength,{
        mass:0.1,
        damping:12,
        stiffness:100
    })
    
    const height = useSpring(heightLenth,{
        mass:0.1,
        damping:12,
        stiffness:100
    })
    
  
  return (
    <div className='relative'>
        {hover&&<div className=' absolute  -top-8 text-white text-sm font-bold m-1 bg-gray-800 text-center rounded-lg  inset-x-0 flex items-center justify-center'>{title}</div>}
        <motion.div 
    onMouseEnter={()=>setHover
        (true)
    }
    onMouseLeave={()=>setHover(false)}
        style={{
            width,
            height,
            margin: 'auto'
        }}
    ref={ref} className=" rounded-full p-1 bg-neutral-200 cursor-pointer flex justify-center items-center ">
      {children}
    </motion.div>
    </div>
  );
};

export default FloatingDoc;
