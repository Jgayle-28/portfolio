import { useEffect, useRef } from 'react'
import {
  useAnimation,
  useInView,
  motion,
  useTransform,
  useScroll,
} from 'framer-motion'
// import ParticlesBackgroundTwo from '../shared/ParticlesTwo'
import ParticlesBackground from '../shared/Particles'

export default function ContactIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const mainControls = useAnimation()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '300%'])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <section
      ref={ref}
      className='w-full flex justify-center items-center py-[300px] mb-[200px] relative overflow-hidden'
      style={{ opacity }}
    >
      {/* <motion.div
        className='absolute top-0 left-0 w-full h-full bg-center z-0'
        style={{
          backgroundImage: `url('/assets/images/testimonials/line-grid.png')`,
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
          // opacity,
        }}
      />
      <div
        style={{
          zIndex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0, 0.5)',
          y: backgroundY,
        }}
      ></div> */}
      <div
        // className='absolute top-0 left-0 w-full h-full bg-center z-0'
        style={{
          y: backgroundY,
        }}
      >
        <ParticlesBackground />
      </div>
      <motion.div className='mt-12 z-10' style={{ y: textY }}>
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
          animate={mainControls}
          className='pb-0 !font-semibold uppercase !text-3xl'
        >
          Set in motion journey of innovation and execution
          <br /> where <span>ideas,</span>
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
          animate={mainControls}
          className='pb-0 !font-bold uppercase !text-3xl'
        >
          <span className='ml-20 text-brandPrimary'>transform</span> into
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
          animate={mainControls}
          className='pb-12 !font-bold uppercase !text-3xl'
        >
          <span className='text-5xl text-brandPrimary'>reality</span>
          at the speed of thought
        </motion.p>
      </motion.div>
    </section>
  )
}
