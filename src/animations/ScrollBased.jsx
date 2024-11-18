import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
function ScrollBased() {
    const {scrollYProgress} =useScroll()
    const sprigY= useSpring(scrollYProgress)
    const background = useTransform(scrollYProgress,[0,1],["rgba(255, 255, 10, 1","rgba(25, 255, 0, 1)"])
  return (
    <div>
        <motion.div 
        className={` top-0 h-3 rounded-lg w-auto sticky`}
        style={{scaleX:sprigY,
            transformOrigin:'left',
            background
        }}></motion.div>
        <div className='  relative flex flex-col gap-10 mx-80 mt-10 font-bold '>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolores ea itaque? Fugit minus ex omnis voluptatum et, exercitationem necessitatibus accusantium quo, nemo tenetur cum, unde cumque explicabo voluptatibus. Quisquam.loream Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dolorum eum quae corrupti at cum eligendi sapiente consectetur, officia debitis illo ducimus aliquid modi quam nobis totam nihil cupiditate dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime perspiciatis quas officiis laboriosam corrupti sapiente repellendus. Ipsa, incidunt, nostrum recusandae quas dicta neque facere voluptates, minima voluptatibus ratione ullam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolores ea itaque? Fugit minus ex omnis voluptatum et, exercitationem necessitatibus accusantium quo, nemo tenetur cum, unde cumque explicabo voluptatibus. Quisquam.loream Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dolorum eum quae corrupti at cum eligendi sapiente consectetur, officia debitis illo ducimus aliquid modi quam nobis totam nihil cupiditate dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime perspiciatis quas officiis laboriosam corrupti sapiente repellendus. Ipsa, incidunt, nostrum recusandae quas dicta neque facere voluptates, minima voluptatibus ratione ullam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolores ea itaque? Fugit minus ex omnis voluptatum et, exercitationem necessitatibus accusantium quo, nemo tenetur cum, unde cumque explicabo voluptatibus. Quisquam.loream Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dolorum eum quae corrupti at cum eligendi sapiente consectetur, officia debitis illo ducimus aliquid modi quam nobis totam nihil cupiditate dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime perspiciatis quas officiis laboriosam corrupti sapiente repellendus. Ipsa, incidunt, nostrum recusandae quas dicta neque facere voluptates, minima voluptatibus ratione ullam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita non accusantium voluptates, perspiciatis rerum, recusandae enim consequatur, culpa distinctio corporis aliquid? Tempore saepe explicabo exercitationem, nesciunt cupiditate illum inventore. lorem*20</p>
    </div>
    </div>
  )
}

export default ScrollBased
