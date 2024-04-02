'use-client'
import React, { useEffect } from 'react'
import {
  useMotionValue,
  motion,
  useSpring,
  useTransform,
  useInView,
  useAnimation,
  useScroll,
} from 'framer-motion'
import '@/styles/contact-styles.scss'
import SectionHeader from '../shared/SectionHeader'

export default function Contact() {
  const [state, setState] = React.useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = React.useState(null)

  const [isInProgress, setIsInProgress] = React.useState(false)
  const [emailText, setEmailText] = React.useState('jerehme.gayle@gmail.com')

  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const { scrollYProgress } = useScroll()

  const mainControls = useAnimation()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Prism 1 animations
  const x1 = useMotionValue(0)
  const y1 = useMotionValue(0)
  const springX1 = useSpring(x1, { damping: 15, stiffness: 300 })
  const springY1 = useSpring(y1, { damping: 15, stiffness: 300 })
  const prismX1 = useTransform(springX1, (value) => -value * 20)
  const prismY1 = useTransform(springY1, (value) => -value * 20)
  const prismRotation1 = useTransform(scrollYProgress, [0, 1], [0, 400])

  // Prism 2 animations
  const x2 = useMotionValue(0)
  const y2 = useMotionValue(0)
  const springX2 = useSpring(x2, { damping: 15, stiffness: 300 })
  const springY2 = useSpring(y2, { damping: 15, stiffness: 300 })
  const prismX2 = useTransform(springX2, (value) => -value * 20)
  const prismY2 = useTransform(springY2, (value) => -value * 20)
  const prismRotation2 = useTransform(scrollYProgress, [0, 1], [0, 360])

  // Prism 3 animations
  const x3 = useMotionValue(0)
  const y3 = useMotionValue(0)
  const springX3 = useSpring(x3, { damping: 15, stiffness: 300 })
  const springY3 = useSpring(y3, { damping: 15, stiffness: 300 })
  const prismX3 = useTransform(springX3, (value) => -value * 20)
  const prismY3 = useTransform(springY3, (value) => -value * 20)
  const prismRotation3 = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  const handleMouseMove = (e) => {
    // const rect = ref.current.getBoundingClientRect()

    // const width = rect.width
    // const height = rect.height

    // const mouseX = e.clientX - rect.left
    // const mouseY = e.clientY - rect.top

    // const xPct = mouseX / width - 0.5
    // const yPct = mouseY / height - 0.5

    // x.set(xPct)
    // y.set(yPct)
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x1.set(xPct)
    y1.set(yPct)
    x2.set(xPct)
    y2.set(yPct)
    x3.set(xPct)
    y3.set(yPct)
  }

  // 🔡 Characters to cycle trough
  let allowedCharacters = ['X', '$', 'Y', '#', '?', '*', '0', '1', '+']

  // 🎁 Function to return random character
  function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length)
    return allowedCharacters[randomIndex]
  }

  const getRandomEmail = () => {
    const text = emailText
    const randomizedText = text.split('').map(getRandomCharacter).join('')

    setIsInProgress(true)

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        const nextIndex = i + 1
        setEmailText(
          `${text.substring(0, nextIndex)}${randomizedText.substring(
            nextIndex
          )}`
        )

        if (nextIndex === text.length) {
          setIsInProgress(false)
          setEmailText('jerehme.gayle@gmail.com')
        }
      }, i * 15)
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (ev) => {
    setFormStatus('PENDING')
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setTimeout(() => {
          setFormStatus('SUCCESS')
          // Reset Form and Messages
          setState({ name: '', email: '', message: '' })
        }, 2500)
      } else {
        setTimeout(() => {
          setFormStatus('ERROR')
        }, 2500)
      }
    }
    xhr.send(data)
  }

  return (
    <>
      <section
        ref={ref}
        onMouseMove={handleMouseMove}
        className='w-full max-w-6xl mx-auto relative mx-auto px-10 h-screen'
      >
        <motion.div style={{ x: prismX1, y: prismY1 }}>
          <motion.img
            style={{ rotate: prismRotation1 }}
            className='h-16 opacity-50 absolute top-0 right-64'
            src='/assets/images/prism-3.svg'
            alt=''
          />
        </motion.div>
        <motion.div style={{ x: prismX2, y: prismY2 }}>
          <motion.img
            style={{ rotate: prismRotation2 }}
            className='h-24 opacity-50 absolute top-0 right-0'
            src='/assets/images/prism-2.svg'
            alt=''
          />
        </motion.div>
        <SectionHeader text='Lets Talk!' extraStyles='mt-20' />

        <motion.div style={{ x: prismX3, y: prismY3 }}>
          <motion.img
            style={{ rotate: prismRotation3 }}
            className='h-20 opacity-50 absolute top-20 right-40'
            src='/assets/images/prism.svg'
            alt=''
          />
        </motion.div>

        <div className='mt-10 flex justify-center items-center'>
          <div className='mt-12 flex w-full'>
            {formStatus === null || formStatus === 'PENDING' ? (
              <form
                action='https://formspree.io/mqkqodbk'
                method='POST'
                onSubmit={handleSubmit}
                className='py-6'
              >
                <div className='flex flex-wrap space-y-6 w-full items-center text-4xl md:text-6xl font-semibold'>
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 10,
                      },
                      visible: {
                        opacity: 1,

                        y: 0,
                        transition: {
                          delay: 0.6,
                          duration: 0.7,
                          ease: 'easeInOut',
                        },
                      },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    className='flex flex-wrap items center space-x-0 md:space-x-4'
                  >
                    <span className='self-end'>Hey, I'm</span>

                    <motion.input
                      type='text'
                      required={true}
                      onChange={(e) => handleChange(e)}
                      value={state.name}
                      placeholder='YOUR FULL NAME'
                      style={{
                        transition:
                          'background-color 0.5s ease, padding 0.5s ease',
                        transformOrigin: 'center',
                      }}
                      className='!z-50 text-2xl bg-transparent focus:bg-neutral-900/50 text-white/50 font-light !b-t-0 !b-r-0 !b-l-0 border-b border-b-white/50 active:border-transparent active:outline-none focus:border-transparent focus:outline-none py-2 focus:p-3 mt-2 px-1'
                      name='name'
                    />
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 10,
                      },
                      visible: {
                        opacity: 1,

                        y: 0,
                        transition: {
                          delay: 0.8,
                          duration: 0.7,
                          ease: 'easeInOut',
                        },
                      },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    className='flex flex-wrap items center space-x-0 md:space-x-4'
                  >
                    <span>You can reach me at</span>
                    <motion.input
                      type='text'
                      required={true}
                      onChange={(e) => handleChange(e)}
                      value={state.email}
                      placeholder='YOUR EMAIL ADDRESS'
                      style={{
                        transition:
                          'background-color 0.5s ease, padding 0.5s ease',
                        transformOrigin: 'center',
                      }}
                      className='!z-50 text-2xl bg-transparent focus:bg-neutral-900/50 text-white/50 font-light !b-t-0 !b-r-0 !b-l-0 border-b border-b-white/50 active:border-transparent active:outline-none focus:border-transparent focus:outline-none py-2 focus:p-3 mt-2 px-1'
                      name='email'
                    />
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 10,
                      },
                      visible: {
                        opacity: 1,

                        y: 0,
                        transition: {
                          delay: 0.9,
                          duration: 0.7,
                          ease: 'easeInOut',
                        },
                      },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    className='flex flex-wrap items center space-x-0 md:space-y-4'
                  >
                    <span className='w-full'>and I'm interested in...</span>
                    <motion.textarea
                      rows='2'
                      type='text'
                      required={true}
                      value={state.message}
                      onChange={(e) => handleChange(e)}
                      placeholder='WHATS ON YOUR MIND?'
                      style={{
                        transition:
                          'background-color 0.5s ease, padding 0.5s ease',
                        transformOrigin: 'center',
                      }}
                      className='!z-50 text-2xl w-full bg-transparent focus:bg-neutral-900/50 text-white/50 font-light !b-t-0 !b-r-0 !b-l-0 border-b border-b-white/50 active:border-transparent active:outline-none focus:border-transparent focus:outline-none py-2 focus:p-3 mt-2 px-1'
                      name='message'
                    ></motion.textarea>
                  </motion.div>
                </div>
                <motion.button
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,

                      y: 0,
                      transition: {
                        delay: 1.0,
                        duration: 0.7,
                        ease: 'easeInOut',
                      },
                    },
                  }}
                  title='- SEND IT'
                  initial='hidden'
                  animate={mainControls}
                  type='submit'
                  className={`${
                    formStatus === null && 'loading-glitch'
                  } cursor-point mt-8 py-2 text-white hover:text-brandPrimary/50 text-3xl font-bold transition-all duration-500 ease`}
                >
                  {formStatus === 'PENDING' ? (
                    <span className='animate-pulse'>Get'n Spicy...</span>
                  ) : (
                    '- SEND IT'
                  )}
                </motion.button>
              </form>
            ) : (
              <div className='rounded p-4 bg-brandPrimary/5 text-white text-xl mt-8'>
                {formStatus === 'SUCCESS'
                  ? 'Thank you for reaching out! I will be reaching out to you soon'
                  : ' OOps, something went wrong. Please refresh and try again.'}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
