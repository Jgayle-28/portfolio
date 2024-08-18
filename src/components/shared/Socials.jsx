import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Twitter from '@/icons/Twitter'
import LinkedIn from '@/icons/LinkedIn'
import GitHub from '@/icons/GitHub'
import Instagram from '@/icons/Instagram'

function MagneticLink({ children }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX + 2, y: middleY + 2 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position
  return (
    <motion.div
      className='cursor-pointer p-1 border border-transparent transition-border duration-500 ease hover:border-brandPrimary rounded-full'
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

function Socials() {
  return (
    <>
      <div className='sticky bottom-0 right-0 pb-12 z-50 w-24 ml-auto'>
        <div className='flex flex-col space-y-2 items-center py-4'>
          <MagneticLink>
            <a target='_blank' href='https://www.instagram.com/jag.elevates/'>
              <Instagram className='mr-4 h-1 w-1 !text-brandPrimary font-normal' />
            </a>
          </MagneticLink>

          <MagneticLink>
            <a target='_blank' href='https://github.com/Jgayle-28'>
              <GitHub className='mr-4 !text-brandPrimary' />
            </a>
          </MagneticLink>
        </div>
      </div>
    </>
  )
}

export default Socials
