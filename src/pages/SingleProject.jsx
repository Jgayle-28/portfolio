'use-client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/constants/projects'
import { useRouter } from '@/hooks/use-router'
import FlipLink from '../components/shared/FlipLink'
import ProjectDetails from '../components/portfolio/ProjectDetails'

export default function SingleProject() {
  const [currentProject, setCurrentProject] = useState(null)
  const [containerHeight, setContainerHeight] = useState(0) // Default to 'auto'
  const contentRef = useRef(null) // Ref for the content div
  const router = useRouter()

  useEffect(() => {
    const path = window.location.pathname
    const id = path.split('/').pop()
    const project = projects.find((project) => project.id === Number(id))
    setCurrentProject(project)

    return () => {
      setCurrentProject(null)
    }
  }, [])

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContainerHeight(`${contentRef.current.offsetHeight}px`)
    }
  }, [])

  if (!currentProject) return null
  return (
    <>
      <section
        className={`mt-20 w-full max-w-6xl mx-auto px-4 md:px-8 relative `}
      >
        <div className='flex items-center justify-between uppercase tracking-wide cursor-pointer mb-4 text-lg md:text-sm'>
          <FlipLink onClick={() => router.back()}>Go Back</FlipLink>
          <FlipLink href={currentProject?.url}>Visit Site</FlipLink>
        </div>

        <div className='relative mb-24 w-full' ref={contentRef}>
          <motion.img
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: 'easeInOut',
                },
              },
            }}
            initial='hidden'
            animate='visible'
            src={`/assets/images/projects/${currentProject.src}`}
            alt={`${currentProject.name} header image`}
            className='block w-full'
          />
          <motion.div
            variants={{
              hidden: {
                width: 0,
              },
              visible: {
                width: 'auto',
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                  ease: 'easeInOut',
                },
              },
            }}
            initial='hidden'
            animate='visible'
            className='overflow-hidden absolute bottom-0 bg-white text-black w-3/4 -mt-8 z-50 -mb-8 md:-mb-10 ml-4 h-[64px] md:h-[88px] flex items-center '
          >
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1,
                    duration: 0.5,
                    ease: 'easeInOut',
                  },
                },
              }}
              initial='hidden'
              animate='visible'
              className='project-title uppercase text-4xl md:text-6xl px-4 md:px-8 overflow-hidden'
            >
              {currentProject?.name}
            </motion.p>
          </motion.div>
        </div>
        <section className=' flex justify-center'>
          <div class='hidden md:block animate-bounce p-2 w-10 h-10 shadow-lg rounded-full flex items-center justify-center'>
            <svg
              class='w-6 h-6 text-white/75'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
            </svg>
          </div>
        </section>
      </section>
      <ProjectDetails sections={currentProject.sections} />
      <div className='flex items-center justify-between uppercase tracking-wide cursor-pointer mb-4 text-lg md:text-sm w-full max-w-6xl mx-auto px-4 md:px-8'>
        <FlipLink onClick={() => router.back()}>Go Back</FlipLink>
        {/* <FlipLink href={currentProject?.url}>Visit Site</FlipLink> */}
      </div>
      <div className='flex h-48 items-center justify-center bg-black' />
    </>
  )
}
