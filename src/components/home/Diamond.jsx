import { useTransform, motion } from 'framer-motion'
import { useWindowSize } from '@/hooks/use-window-size'

function Diamond({ scrollYProgress }) {
  const { width } = useWindowSize()
  const rotateMobile = useTransform(scrollYProgress, [0, 1], [0, -170])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -160])

  return (
    <div
      style={{ perspective: 800 }}
      className='w-1/3 absolute left-10  opacity-[.1] -z-1'
    >
      <motion.img
        src='/assets/images/eth-symbol.svg'
        alt=''
        style={{
          rotate: width < 640 ? rotateMobile : rotate,
        }}
      />
    </div>
  )
}

export default Diamond
