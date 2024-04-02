import React from 'react'
import { motion } from 'framer-motion'

export default function FlipLink({ children, href = '', onClick = null }) {
  return (
    <>
      {onClick ? (
        <a className='block overflow-hidden' onClick={onClick}>
          <motion.div
            whileHover={{ y: -20 }}
            transition={{ ease: 'backInOut', duration: 0.5 }}
            className='h-[20px] uppercase tracking-widest cursor-pointer'
          >
            <span className='flex h-[20px] items-center'>{children}</span>
            <span className='flex h-[20px] items-center text-neutral-50'>
              {children}
            </span>
          </motion.div>
        </a>
      ) : (
        <a
          href={href}
          target='_blank'
          rel='nofollow'
          className='block overflow-hidden'
        >
          <motion.div
            whileHover={{ y: -20 }}
            transition={{ ease: 'backInOut', duration: 0.5 }}
            className='h-[20px] uppercase tracking-widest cursor-pointer'
          >
            <span className='flex h-[20px] items-center'>{children}</span>
            <span className='flex h-[20px] items-center text-neutral-50'>
              {children}
            </span>
          </motion.div>
        </a>
      )}
    </>
  )
}
