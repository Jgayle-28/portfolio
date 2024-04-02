import { useAnimate } from 'framer-motion'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDownCircle, FiDollarSign } from 'react-icons/fi'
import { SiApple } from 'react-icons/si'

export default function Skills() {
  return (
    // <MouseImageTrail renderImageBuffer={50} rotationRange={25} images={[]}>
    <section className='h-[40vh] bg-brandBlack relative mt-32'>
      <Copy />
      <WatermarkWrapper />
    </section>
    // </MouseImageTrail>
  )
}

const Copy = () => {
  return (
    <div className='absolute bottom-10 left-0 right-0 z-[999999]'>
      <div className='mx-auto flex max-w-7xl items-end justify-between p-4 md:p-8'>
        <div>
          <p className='mb-6 max-w-4xl text-6xl font-black leading-[1.1] text-white md:text-8xl'>
            Every Ninja Has Their{' '}
            <span className='text-brandPrimary'>Weapons </span>Of Choice
          </p>
          {/* <p className='max-w-xl text-slate-700 md:text-lg'>Here are mine</p> */}
        </div>
        {/* <FiArrowDownCircle className='hidden text-8xl text-slate-500 md:block' /> */}
      </div>
    </div>
  )
}

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text='React' />
      <Watermark text='Next' reverse />
      <Watermark text='Tailwind' />
      <Watermark text='Node' reverse />
      <Watermark text='Mongo DB' />
      <Watermark text='Framer Motion' reverse />
      {/* <Watermark text='Find your passion' />
      <Watermark text='Build an empire' reverse /> */}
    </>
  )
}

const Watermark = ({ reverse, text }) => (
  <div className='flex -translate-y-12 select-none overflow-hidden'>
    <TranslateWrapper reverse={reverse}>
      <span className='w-fit whitespace-nowrap text-[10vmax] font-black uppercase leading-[0.75] text-brandGray/5'>
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className='ml-48 w-fit whitespace-nowrap text-[10vmax] font-black uppercase leading-[0.75] text-brandGray/5'>
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className='ml-48 w-fit whitespace-nowrap text-[10vmax] font-black uppercase leading-[0.75] text-brandGray/5'>
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className='ml-48 w-fit whitespace-nowrap text-[10vmax] font-black uppercase leading-[0.75] text-brandGray/5'>
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className='ml-48 w-fit whitespace-nowrap text-[10vmax] font-black uppercase leading-[0.75] text-brandGray/5'>
        {text}
      </span>
    </TranslateWrapper>
  </div>
)

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
      className='flex'
    >
      {children}
    </motion.div>
  )
}

// import React from 'react'
// import { motion } from 'framer-motion'

// export default function Skills() {
//   return (
//     <section className='h-[100px]'>
//       <Watermark text='Mongo DB' />
//       <Watermark text='Figma' reverse />
//       <Watermark text='React' />
//       <Watermark text='Build an empire' reverse />
//       <Watermark text='Get motivated' />
//       <Watermark text='Live inspired' reverse />
//       <Watermark text='Find your passion' />
//       <Watermark text='Build an empire' reverse />
//     </section>
//   )
// }

// const Watermark = ({ reverse, text }) => (
//   <div className='flex -translate-y-12 select-none overflow-hidden'>
//     <TranslateWrapper reverse={reverse}>
//       <span className='w-fit whitespace-nowrap text-[10vmax] font-black uppercase leading-[0.75] text-white'>
//         {text}
//       </span>
//     </TranslateWrapper>
//     <TranslateWrapper reverse={reverse}>
//       <span className='ml-48 w-fit whitespace-nowrap text-[10vmax] font-black uppercase leading-[0.75] text-white'>
//         {text}
//       </span>
//     </TranslateWrapper>
//   </div>
// )

// const TranslateWrapper = ({ children, reverse }) => {
//   return (
//     <motion.div
//       initial={{ translateX: reverse ? '-100%' : '0%' }}
//       animate={{ translateX: reverse ? '0%' : '-100%' }}
//       transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
//       className='flex'
//     >
//       {children}
//     </motion.div>
//   )
// }
