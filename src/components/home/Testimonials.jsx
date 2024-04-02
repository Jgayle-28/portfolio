import React, { useRef } from 'react'
import styles from '@/styles/testimonials.module.scss'
import { useScroll, useTransform, motion } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'
import { BGGrid } from './Hero'
import { testimonials } from '../../constants/testimonials'

export default function Testimonials() {
  const mainContainer = useRef(null)

  const { scrollYProgress } = useScroll({
    target: mainContainer,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={mainContainer} className={`${styles.cardScrollMain} px-8`}>
      <div className='max-w-5xl mx-auto'>
        <SectionHeader text='A few Nice Words' extraStyles='mt-20' />
      </div>
      {testimonials.map((testimonial, i) => {
        const targetScale = 1 - (testimonials.length - i) * 0.05
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...testimonial}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </section>
  )
}

const Card = ({
  i,
  name,
  title,
  description,
  src,
  url,
  progress,
  range,
  targetScale,
}) => {
  const cardContainer = useRef(null)

  const { scrollYProgress } = useScroll({
    target: cardContainer,

    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const opacity = useTransform(scrollYProgress, range, [0, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={cardContainer} className={`${styles.cardContainer}`}>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          opacity,
        }}
        className={`${styles.card} rounded-lg bg-[#0a0f15] bg-opacity-10 backdrop-blur-md border border-white/50 shadow-lg relative overflow-hidden`}
      >
        <div className='absolute bg-gradient-radial from-black from-10% to-neutral-900/75 to-70%' />
        <BGGrid />
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between !z-10'>
          {/* Name and title */}
          <div className='w-full mb-4 md:mb-0'>
            <div
              className='border border-white padding-8 w-20 h-20'
              style={{
                backgroundImage: `url('/assets/images/square-lines.svg')`,
              }}
            ></div>
            <p className='mt-2 text-xl tracking-widest text-brandPrimary'>
              {name}
            </p>
            <p className='text-base md:text-md tracking-widest font-light'>
              {title}
            </p>
          </div>
          {/* Desc */}
          <div className='w-full '>
            <p className='mt-2 text-base md:text-xl tracking-widest z-10 font-light'>
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
