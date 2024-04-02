import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiArrowDownLeft } from 'react-icons/fi'
import useSmoothScroll from '@/hooks/use-smooth-scroll'

export default function ViewPortfolio() {
  const ref = useRef(null)

  const scrollToSection = useSmoothScroll()

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const { height, width, left, top } = ref.current.getBoundingClientRect()

    setX(e.clientX - (left + width / 2))
    setY(e.clientY - (top + height / 2))
  }

  const handleMouseLeave = () => {
    setX(0)
    setY(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className='group relative grid h-[120px] w-[120px] place-content-center rounded-full border-2 border-brandPrimary/50 hover:border-brandPrimary/50 transition-colors duration-700 ease-out mt-8'
      onClick={() => scrollToSection(`portfolio`, 2000)}
    >
      <FiArrowDownLeft className='relative z-10 text-5xl text-brandPrimary hover:border-brandPrimary/50 transition-all duration-700 ease-out group-hover:-rotate-45 ' />

      <div className='absolute inset-0 z-0 scale-0 rounded-full bg-white/1 transition-transform duration-700 ease-out group-hover:scale-100' />

      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        style={{
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        width='200'
        height='200'
        className='absolute z-10'
      >
        <path
          id='circlePath'
          d='M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0'
          fill='none'
        />
        <text>
          <textPath
            href='#circlePath'
            fill='#00ded4'
            className='fill-brandPrimary text-xl font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100'
          >
            . View My Portfolio . View My Portfolio . View My Portfolio
          </textPath>
        </text>
      </motion.svg>
    </motion.button>
  )
}
