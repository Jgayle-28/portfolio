import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Divider(props = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, width: 0 },
        visible: { opacity: 1, width: '100%' },
      }}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.9,
        delay: 0.2,
        ease: 'easeInOut',
      }}
      className='flex items-center w-full'
    >
      <div className='w-6 bg-brandPrimary h-px mr-4' />
      <div className='w-full bg-neutral-400 h-px ' />
    </motion.div>
  )
}
