import React from 'react'
import { motion } from 'framer-motion'
import { opacity } from './animations'

export default function NavMenuImage({ src, selectedLink }) {
  return (
    <motion.div
      variants={opacity}
      initial='initial'
      animate={selectedLink.isActive ? 'open' : 'closed'}
      className='imageContainer'
    >
      <img className='h-40' src={`${src}`} fill={true} alt='image' />
    </motion.div>
  )
}
