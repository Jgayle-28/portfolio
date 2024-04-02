import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiDollarSign, FiEye, FiPlay, FiSearch } from 'react-icons/fi'

export default function ProjectDetails({ sections }) {
  const [featureInView, setFeatureInView] = useState(sections[0])

  return (
    <section className='relative mx-auto max-w-7xl'>
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className='-mt-[100vh] hidden md:block' />

      {sections.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  )
}

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === 'l' ? 'flex-end' : 'flex-start',
      }}
      className='pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex'
    >
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className='h-fit w-3/5 rounded-xl p-8'
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  )
}

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: '-350px',
  })

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView)
    }
  }, [isInView])

  return (
    <section
      ref={ref}
      className='relative z-0 flex h-fit md:h-screen'
      style={{
        justifyContent:
          featureInView.contentPosition === 'l' ? 'flex-start' : 'flex-end',
      }}
    >
      <div className='grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8'>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='flex items-center '>
            <span className='text-lg font-bold text-brandPrimary -rotate-90 tracking-[4px]'>
              0{featureInView.id}
            </span>
            <p className='my-3 text-5xl font-bold'>{featureInView.title}</p>
          </div>
          {featureInView.description.map((d, i) => (
            <p className='tracking-wide text-white text-lg md:text-base text mb-2 leading-loose'>
              {d}
            </p>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='mt-8 block md:hidden'
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  )
}

const ExampleFeature = ({ featureInView }) => {
  return (
    <div className='relative md:h-96 w-full rounded-lg overflow-hidden '>
      <img
        src={`/assets/images/projects/${featureInView.img}`}
        alt='Placeholder'
        className='w-full h-auto'
      />
    </div>
  )
}
