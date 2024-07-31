import React from 'react'
import {motion, transform} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';
import { useEffect } from 'react';
import { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn, textVariant } from '../utils/motion';

const Hero = () => {
  const [isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:768px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange=(event) =>{setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  const handleButtonClick = () => {
    window.location.href='https://forms.gle/icKkFj7ATSNTJgqT7'
  };

  return (
    <section className={`relative w-full mx-auto h-screen`}>
      <div className={`absolute inset-0 top-[30px] max-w-7xl mx-auto flex flex-row items-start`}>
        <div className='flex flex-col space-y-4 w-auto'>
          <div className='relative z-10 h-screen xs:top-[40px] xs:inset-x-[50px] md:top-[150px]'><motion.h1 variants={fadeIn("right","",0.1,0.5)} className={`${styles.heroHeadText} font-brave text-yellow`}>VIT<span className='text-white font-brave'>ronix</span>
              </motion.h1>
              <br className='lg:block hidden'/> 
              <motion.p variants={fadeIn("left","",0.1,0.5)} className={`${styles.heroSubText} xs:justify-center`}>
                VIT BHOPAL
              </motion.p>
              <br className='lg:block hidden'/> 
              <br className='lg:block hidden'/> 
              <motion.h2 variants={fadeIn("right","",0.1,0.5)} className={`${styles.heroHeading} text-pink font-rollbox text-shadow`} >JOIN THE ROBOLUTION!</motion.h2>
              <br/>
              <motion.button variants={slideIn('down', 'tween', 0.1, 0.5)}
               className=' navbar-link border-[1px] hover:text-white font-montserrat cursor-pointer lg:text-[18px] md:text-[15px] sm:text-[15px] xs:text-[12px]' onClick={handleButtonClick}>
                 Register Now!
              </motion.button>
            </div>
          </div>
          <div className={`absolute items-center h-full bg-transparent bg-fixed object-contain w-[600px] inset-y-0 xl:right-0 lg:right-[-60px] md:right-[-90px] xs:right-[-40px] sm:top-[180px] xs:top-[180px] md:inset-y-0 `}>
            <ComputersCanvas/>
          </div>
      </div>
      
      
    </section>
  )
}

export default SectionWrapper(Hero,"home")