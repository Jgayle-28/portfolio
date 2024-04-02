import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import NavButton from './NavButton'
import { useGlobalContext } from '@/context/store'
import { Link } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import NavMenu from './NavMenu'
import { background, height, navBar } from './animations'
import '@/styles/nav-bar-styles.scss'
import useScrollBlock from '@/hooks/use-scroll-block'

export default function NavBar() {
  const [blockScroll, allowScroll] = useScrollBlock()
  const { showMenu, setShowMenu } = useGlobalContext()

  // useEffect(() => {
  //   if (showMenu) {
  //     blockScroll()
  //   } else {
  //     allowScroll()
  //   }
  // }, [showMenu, blockScroll, allowScroll])

  const toggleMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState)
  }, [showMenu, setShowMenu])

  const [navVisible, setNavVisible] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setNavVisible(false)
    } else {
      setNavVisible(true)
    }
  })

  return (
    <div className={`relative sticky top-0 header-index `}>
      <AnimatePresence mode='wait'>
        {/* Black menu background ----------------- */}
        <motion.div
          variants={navBar}
          initial='initial'
          animate={showMenu ? 'open' : 'exit'}
          exit='exit'
          className='absolute top-0 l-0 r-0 w-full h-0 !bg-brandBlack header-bg-index'
        />
      </AnimatePresence>

      {/* Nav Bar -------------------------- */}
      <motion.div className={`flex justify-between items-center uppercase p-4`}>
        <div className='nav-logo header-item-index'>
          <Link to='/'>
            <img
              className='h-16 w-16 header-item-index'
              src={`/assets/images/logo/logo.svg`}
              alt='logo'
            />
          </Link>
        </div>

        <NavButton showMenu={showMenu} toggleMenu={toggleMenu} />
      </motion.div>
      {/* Body of Menu -------------------------- */}
      <AnimatePresence mode='wait'>{showMenu && <NavMenu />}</AnimatePresence>
      {/* Bottom transparent layer -------------------- */}
      <AnimatePresence mode='wait'>
        <motion.div
          variants={background}
          initial='initial'
          animate={showMenu ? 'open' : 'exit'}
          className='background'
        ></motion.div>
      </AnimatePresence>
    </div>
  )
}
