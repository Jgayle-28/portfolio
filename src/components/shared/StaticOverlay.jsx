import React from 'react'
import { motion } from 'framer-motion'

export default function StaticOverlay() {
  return (
    <motion.div
      initial={{ transform: 'translateX(-10%) translateY(-10%)' }}
      animate={{
        transform: 'translateX(10%) translateY(10%)',
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: 'linear',
        repeatType: 'mirror',
      }}
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("/assets/images/black-noise.png")',
        // backgroundImage: 'url("/assets/images/noise.png")',
      }}
      className='pointer-events-none absolute -inset-[100%] opacity-[15%] z-50 overflow-y-hidden'
    />
  )
}
