import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { useAnimation, useInView, motion } from 'framer-motion'

const GRID_WIDTH = 15
const GRID_HEIGHT = 10

export default function DotGrid() {
  const handleDotClick = (e) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    })
  }

  const dots = []
  let index = 0

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className='group cursor-crosshair rounded-full p-5 transition-colors '
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point h-1.5 w-1.5 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-700 opacity-50 group-hover:from-neutral-600 group-hover:to-white'
            data-index={index}
          />
        </div>
      )
      index++
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className='absolute right-0 top-0 left-0 z-0 grid w-full h-screen'
    >
      {dots}
    </div>
  )
}
