import { motion, useAnimation, useInView } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { useRouter } from '@/hooks/use-router'
import { projects } from '@/constants/projects'
import SectionHeader from '../shared/SectionHeader'
import { useEffect, useRef } from 'react'
import { useWindowSize } from '@/hooks/use-window-size'
import useSmoothScroll from '@/hooks/use-smooth-scroll'

export default function PortfolioSection() {
  return (
    <section className='p-8 mt-32' id='portfolio'>
      <span className='block text-center text-xl font-medium mb-4'>
        {/* Hover a card */}
      </span>
      <div className='max-w-7xl mx-auto'>
        <SectionHeader text={`Some Work I've done`} extraStyles='mt-20' />
      </div>
      <motion.div
        initial='initial'
        whileInView='animate'
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto'
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            imgSrc={`/assets/images/projects/${project.src}`}
            title={project.name}
            description={project.description}
            viewDelay={project.viewDelay}
          />
        ))}
      </motion.div>
    </section>
  )
}

const Card = ({ id, imgSrc, title, description, viewDelay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { width } = useWindowSize()
  const scrollToSection = useSmoothScroll()
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  const router = useRouter()

  const handleProjectClick = (id) => {
    scrollToSection(`top`, 50)
    router.push(`/project/${id}`)
  }
  return (
    <motion.div
      ref={ref}
      onClick={width < 640 ? () => handleProjectClick(id) : null}
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mainControls}
      transition={{ duration: 0.3, delay: viewDelay }}
      whileHover='hover'
      className='w-full h-[300px] relative cursor-pointer'
    >
      <div className='h-1/2 p-6 flex flex-col justify-center bg-black'>
        <h3 className='text-xl mb-2 font-semibold text-white'>{title}</h3>
        <p className='text-sm font-light text-slate-300'>{description}</p>
      </div>
      <motion.div
        variants={{
          hover: {
            top: '50%',
            right: '50%',
          },
        }}
        className='absolute inset-0 bg-slate-200 z-10'
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <a
        onClick={() => handleProjectClick(id)}
        rel='nofollow'
        className='cursor-pointer w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-brandPrimary transition-colors'
      >
        <div className='flex items-center'>
          <span className='text-xs'>MORE</span>
          <FiArrowUpRight className='text-lg' />
        </div>
      </a>
    </motion.div>
  )
}
