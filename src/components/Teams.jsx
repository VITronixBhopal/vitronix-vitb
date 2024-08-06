import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { members } from '../constants'
import { fadeIn } from '../utils/motion'

const MemberCard= ({children,key,photo,...props})=> (
  <motion.div {...props} variants={fadeIn("up","spring",key*0.2,0.75)} className='relative xxs:max-w-[180px] md:max-w-[250px] overflow-hidden rounded-2xl shadow-lg group'>
    <img src={photo} alt='key' className='transition-transform group-hover:scale-110 duration-200 w-auto xxs:h-[160px] xxs:w-[160px] md:h-[280px] md:w-[280px]'/>
    <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
    <div className='p-4 text-white'>{children}</div>
    </div>
  </motion.div>

)

const Teams = () => {
  return (
    <div>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>
        Members
      </p>
      <div className='inline-block'><h2 className={`${styles.sectionHeadText} bg-gradient-to-r bg-clip-text text-transparent`}>
        Our Team
      </h2></div>
    </motion.div>
    <div className='py-10 bg-[#1d1836] bg-opacity-90'>
      <div className='flex flex-row flex-wrap justify-center xxs:gap-2 md:gap-10'>
        {members.map((member,index)=>(
          <MemberCard key={index} photo={member.photo}>
            <h3 className='text-white font-montserrat text-[18px]'>{member.name}</h3>
            <p className='text-quad font-montserrat text-[15px]'>{member.role}</p>
            <p className='text-yellow font-montserrat text-[12px]'>{member.description}</p>
          </MemberCard>

        ))}
      </div>
    </div>
    </div>
  )
}

export default SectionWrapper(Teams,'teams')
