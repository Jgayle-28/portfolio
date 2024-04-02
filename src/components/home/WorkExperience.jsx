import {
  useScroll,
  motion,
  useTransform,
  useInView,
  useAnimation,
} from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import { experience } from '@/constants/experience'

export const WorkExperience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  return (
    <>
      <div ref={ref} className='relative'>
        {experience.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
      <div className='h-[500px] bg-black' />
    </>
  )
}
export default WorkExperience

const Card = ({ position, card, scrollYProgress }) => {
  const scaleFromPct = (position - 1) / experience.length
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  const isOddCard = position % 2

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      style={{
        height: CARD_HEIGHT,
        y: position === experience.length ? undefined : y,
        background: isOddCard ? 'black' : 'white',
        color: isOddCard ? 'white' : 'black',
      }}
      className='sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4'
    >
      <motion.img
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        alt={card?.title}
        className='h-32 mb-4'
        src={card?.img}
      />
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 5 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='mb-6 text-center text-4xl font-black md:text-6xl'
      >
        {card?.title}
      </motion.p>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.75 }}
        className='mb-8 max-w-lg text-center text-sm md:text-base'
      >
        {card?.description}
      </motion.p>
    </motion.div>
  )
}

const CARD_HEIGHT = 500
