import React, { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import ViewPortfolio from './ViewPortfolio'
import RevealText from '../shared/RevealText'
import { useWindowSize } from '@/hooks/use-window-size'

export default function Hero() {
  const heroContainer = useRef(null)
  const wrapperContainer = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const text3Ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: wrapperContainer,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '155%'])
  const NameY = useTransform(scrollYProgress, [0, 1], ['0%', '165%'])
  const NameOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '120%'])

  const text1Y = useTransform(scrollYProgress, [0, 1], ['0%', '360%'])
  const text1X = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const text2Y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const text2X = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  const spin = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    const handleScroll = () => {
      if (heroContainer.current && text1Ref.current) {
        const scrollY = window.scrollY || window.pageYOffset
        const opacity =
          1 -
          scrollY / 900 /* Adjust the divisor for scroll opacity sensitivity */
        heroContainer.current.style.opacity = opacity > 0 ? opacity : 0
        const textOpacity =
          1 -
          scrollY / 1600 /* Adjust the divisor for scroll opacity sensitivity */
        heroContainer.current.style.opacity = opacity > 0 ? opacity : 0
        text1Ref.current.style.opacity = textOpacity > 0 ? textOpacity : 0
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
        initial='hidden'
        animate='visible'
        ref={wrapperContainer}
        className='text-center md:text-justify bg-gradient-radial from-black from-10% to-neutral-900/75 to-70% h-screen w-full relative overflow-hidden text-center flex flex-col items-center justify-center -z-1'
      >
        <BGGrid />
        <motion.div
          style={{ y: NameY, opacity: NameOpacity, rotate: -90 }}
          className='-rotate-90 tracking-widest	uppercase fixed -left-12 top-[50%] rounded  text-md text-brandPrimary'
        >
          <h1>Jerehme Gayle // Full Stack Dev</h1>
        </motion.div>

        <motion.div
          ref={heroContainer}
          className='absolute bottom-0 h-full w-full '
          style={{ y: imageY }}
        >
          <img
            src='/assets/images/hero/hero.png'
            alt='hero'
            className='-left-32 md:left-0 opacity-80 w-full md:w-1/2 absolute bottom-0 mx-auto'
          />
        </motion.div>
        <motion.div
          ref={text1Ref}
          className={` max-w-7xl text-center font-black text-5xl md:text-[7rem] relative tracking-wide header-index uppercase `}
          style={{ x: text1X, y: text1Y }}
        >
          <RevealText>
            I like to <span className='text-brandPrimary'>play</span>
          </RevealText>
        </motion.div>
        <motion.div
          ref={text2Ref}
          className={`my-2  max-w-7xl text-center font-black text-5xl md:text-[7rem] relative tracking-wide header-index uppercase`}
          style={{ x: text2X, y: text1Y + 10 }}
        >
          <RevealText>
            Where <span className='text-brandPrimary'>Code</span>
          </RevealText>
        </motion.div>
        <motion.div
          ref={text3Ref}
          className={`md:mb-8  max-w-7xl text-center font-black text-5xl md:text-[7rem] relative tracking-wide header-index uppercase`}
          style={{ x: text2X, y: text2Y }}
        >
          <RevealText>
            Meets <span className='text-brandPrimary'>Design</span>
          </RevealText>
        </motion.div>
        <div className='mt-8 ml-auto w-full text-center'>
          <motion.div style={{ rotate: spin }} className='inline-block'>
            <ViewPortfolio />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

const GRID_BOX_SIZE = 32
const BEAM_WIDTH_OFFSET = 1

export const BGGrid = () => {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(13 13 13 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
      className='absolute bottom-0 left-0 right-0 top-0'
    >
      <div className='absolute bg-gradient-radial from-black from-10% to-neutral-900/75 to-70%' />
      {/* <div className='absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/0 to-slate-950/80' /> */}
      <Beams />
    </div>
  )
}

const Beams = () => {
  const { width } = useWindowSize()

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ]

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  )
}

const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className='absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-brandPrimary/0 to-brandPrimary'
    />
  )
}
