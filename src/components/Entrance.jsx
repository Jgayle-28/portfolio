import React from 'react'
import StaticOverlay from './shared/StaticOverlay'
import { motion } from 'framer-motion'
// import { useTextEncrypt } from '@/hooks/use-text-encrypt'

function Entrance() {
  // const encryptedText = useTextEncrypt('Loading', 1.5)
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          },
          visible: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            transition: {
              duration: 1,
              ease: 'easeInOut',
            },
          },

          exit: {
            clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
            opacity: 0,
          },
        }}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='relative overflow-x-hidden overflow-y-hidden'
      >
        <div className='relative flex flex-col items-center justify-center h-screen space-y-6 bg-brandBlack overflow-y-hidden overflow-x-hidden'>
          <motion.img
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: 'easeInOut',
                  delay: 0.8,
                },
              },
            }}
            initial='hidden'
            animate='visible'
            className='h-80 w-80 animate-pulse'
            src={`/assets/images/logo/logo.svg`}
            alt='logo'
          />
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: 'easeInOut',
                  delay: 0.8,
                },
              },
            }}
            title='LOADING'
            className='loading-glitch animate-pulse text-6xl text-white uppercase'
            // className='loading-glitch animate-pulse text-center text-6xl text-brandPrimary uppercase !font-dosis loading-text'
          >
            LOADING
          </motion.p>
        </div>
        <StaticOverlay />
      </motion.div>
    </>
  )
}

export default Entrance
