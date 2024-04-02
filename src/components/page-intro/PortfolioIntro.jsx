import React from 'react'
import { motion } from 'framer-motion'

export default function PortfolioIntro() {
  return (
    <div className='w-full py-12 about-main'>
      <div className='w-[80%] mx-auto'>
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 0.4,
                ease: 'easeInOut',
              },
            },
          }}
          initial='hidden'
          animate='visible'
          className='pb-4 !font-bold uppercase !text-3xl'
        >
          In every line of code...
        </motion.p>
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.6,
                duration: 0.4,
                ease: 'easeInOut',
              },
            },
          }}
          initial='hidden'
          animate='visible'
          className='pb-4 !font-bold uppercase !text-3xl ml-10'
        >
          we not only define the function of a program, but also the essence of
          who we are.
        </motion.p>
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.8,
                duration: 0.4,
                ease: 'easeInOut',
              },
            },
          }}
          initial='hidden'
          animate='visible'
          className='pb-0 !font-bold uppercase !text-3xl'
        >
          For in our <span className='text-brandPrimary'> work</span>,our{' '}
          <span className='text-brandPrimary'> passion</span> and{' '}
          <span className='text-brandPrimary'> identity</span>
        </motion.p>
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: 'easeInOut',
              },
            },
          }}
          initial='hidden'
          animate='visible'
          className='pb-12 !font-bold uppercase !text-3xl'
        >
          <span className='text-5xl ml-20 text-brandPrimary'>intertwine</span>.
        </motion.p>
      </div>
    </div>
  )
}
