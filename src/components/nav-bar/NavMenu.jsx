'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { height, navBar } from './animations'
import NavMenuBody from './NavMenuBody'
import NavMenuImage from './NavMenuImage'
import NavMenuFooter from './NavMenuFooter'
import { links } from '@/constants/routes'
import { useGlobalContext } from '@/context/store'

export default function NavMenu() {
  const { showMenu } = useGlobalContext()

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  })

  return (
    <motion.div
      variants={height}
      initial='initial'
      animate='enter'
      exit='exit'
      className={`nav`}
    >
      <div className='wrapper '>
        <div className='container'>
          <NavMenuBody
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <NavMenuFooter />
        </div>
        <NavMenuImage
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  )
}
