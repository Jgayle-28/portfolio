import React from 'react'
import { motion } from 'framer-motion'

export default function NavButton({ showMenu, toggleMenu }) {
  return (
    <>
      <div className='menuBtnContainer header-item-index'>
        <div
          onClick={toggleMenu}
          className={`menuBtn ${showMenu ? `menuBtnClose` : ''}`}
        >
          <div className={`btnLine`} />
          <div className={`btnLine`} />
          <div className={`btnLine`} />
        </div>

        {!showMenu ? (
          <motion.div
            className={`menuBtnText`}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial='hidden'
            animate='visible'
            transition={{
              duration: 0.3,
              ease: 'easeIn',
            }}
          >
            MENU
          </motion.div>
        ) : (
          <div className='menuBtnText !text-brandBlack'>....</div>
        )}
      </div>
    </>
  )
}
