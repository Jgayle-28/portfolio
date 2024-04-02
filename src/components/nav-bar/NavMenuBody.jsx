import { motion, stagger, useAnimation, useInView } from 'framer-motion'
import { blur, letterTranslate, translate } from './animations'
import { useRouter } from '@/hooks/use-router'
import { useGlobalContext } from '@/context/store'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function NavMenuBody({ links, selectedLink, setSelectedLink }) {
  const { setShowMenu } = useGlobalContext()
  const router = useRouter()
  const { pathname } = useLocation()

  // const getChars = (word) => {
  //   let chars = []
  //   word.split('').forEach((char, i) => {
  //     chars.push(
  //       <motion.span
  //         // custom={[i * 0.09, (word.length - i) * 0.01]}
  //         // variants={letterTranslate}
  //         variants={{
  //           initial: {
  //             y: '100%',
  //             opacity: 0,
  //           },
  //           enter: (i) => {
  //             // console.log('i in ENTER:>> ', i)
  //             return {
  //               y: 0,
  //               opacity: 1,
  //               transition: {
  //                 duration: 1,
  //                 ease: [0.76, 0, 0.24, 1],
  //                 delay: i * 0.09,
  //               },
  //             }
  //           },
  //           exit: (i) => ({
  //             y: '100%',
  //             opacity: 0,
  //             transition: {
  //               duration: 0.7,
  //               ease: [0.76, 0, 0.24, 1],
  //               delay: i * -0.09,
  //             },
  //           }),
  //         }}
  //         initial='initial'
  //         animate='enter'
  //         exit='exit'
  //         key={char + i}
  //       >
  //         {char}
  //       </motion.span>
  //     )
  //   })
  //   console.log('chars :>> ', chars)
  //   return chars
  // }

  const handleLinkClick = (href) => {
    setShowMenu(false)

    setTimeout(() => {
      router.push(href)
    }, 1000)
  }

  // // TODO -> try staggerChildren on getChars
  // return (
  //   <motion.div
  //     className='body'
  //     // variants={{
  //     //   hidden: {
  //     //     opacity: 0,
  //     //     y: 30,
  //     //     delay: 0.5,
  //     //     ease: 'easeInOut',
  //     //     // staggerChildren: 0.05,
  //     //     // staggerDirection: -1,
  //     //   },
  //     //   visible: {
  //     //     opacity: 1,
  //     //     y: 0,
  //     //     transition: {
  //     //       // delay: 0.95,
  //     //       // staggerChildren: 0.07,
  //     //       // delayChildren: 95,
  //     //       delay: 0.5,
  //     //       ease: 'easeInOut',
  //     //       duration: 1,
  //     //       ease: 'easeInOut',
  //     //     },
  //     //   },
  //     // }}
  //     // initial='hidden'
  //     // animate='visible'
  //   >
  //     {links.map((link, index) => {
  //       const { title, href } = link
  //       return (
  //         // <motion.span
  //         //   key={`l_${index}`}
  //         //   onClick={() => handleLinkClick(href)}
  //         //   className='cursor-pointer uppercase'
  //         //   // variants={{
  //         //   //   hidden: {
  //         //   //     opacity: 0,
  //         //   //     y: 30,
  //         //   //     delay: 0.5,
  //         //   //     ease: 'easeInOut',
  //         //   //     // staggerChildren: 0.05,
  //         //   //     // staggerDirection: -1,
  //         //   //   },
  //         //   //   visible: {
  //         //   //     opacity: 1,
  //         //   //     y: 0,
  //         //   //     transition: {
  //         //   //       delay: 0.5,
  //         //   //       // delay: 0.95,
  //         //   //       // staggerChildren: 0.07,
  //         //   //       // delayChildren: 95,
  //         //   //       // duration: 1,
  //         //   //       ease: 'easeInOut',
  //         //   //     },
  //         //   //   },
  //         //   // }}
  //         //   // initial='hidden'
  //         //   // animate='visible'
  //         // >
  //         <motion.p
  //           onMouseOver={() => {
  //             setSelectedLink({ isActive: true, index })
  //           }}
  //           onMouseLeave={() => {
  //             setSelectedLink({ isActive: false, index })
  //           }}
  //           variants={blur}
  //           animate={
  //             selectedLink.isActive && selectedLink.index != index
  //               ? 'open'
  //               : 'closed'
  //           }
  //           className={`${
  //             pathname === href && 'text-brandPrimary'
  //           } uppercase cursor-pointer`}
  //         >
  //           <span
  //             title={title}
  //             // className={`${
  //             //   selectedLink.isActive &&
  //             //   selectedLink.index === index &&
  //             //   'loading-glitch'
  //             // }`}
  //           >
  //             {getChars(title)}
  //           </span>
  //         </motion.p>
  //         // </motion.span>
  //       )
  //     })}
  //   </motion.div>
  const getChars = (word) => {
    let chars = []
    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[0.6 + i * 0.06, (word.length - i) * 0.01]}
          variants={letterTranslate}
          initial='initial'
          animate='enter'
          exit='exit'
          key={char + i}
        >
          {char}
        </motion.span>
      )
    })
    return chars
  }

  const bodyRef = useRef(null)
  const isInView = useInView(bodyRef, { threshold: 0.5, once: true })
  const menuBodyControls = useAnimation()
  const isProject = pathname.includes('project')

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        menuBodyControls.start('enter')
      }, 1000)
    }
  }, [isInView])

  return (
    <div
      className='body'
      ref={bodyRef}
      variants={{
        initial: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
          transition: {
            delay: 1.9,
            ease: 'easeInOut',
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            delay: 0,
            ease: 'easeInOut',
            duration: 0.7,
          },
        },
      }}
      initial='initial'
      animate={menuBodyControls}
      exit='exit'
    >
      {links.map((link, index) => {
        const { title, href } = link
        const isActiveLink =
          pathname === href ||
          (href === '/portfolio' && pathname.includes('project'))
        return (
          <a
            key={`l_${index}`}
            onClick={() => handleLinkClick(href)}
            className='uppercase cursor-pointer'
          >
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index })
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index })
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? 'open'
                  : 'closed'
              }
              className={`${isActiveLink && 'text-brandPrimary'}`}
            >
              <span
                title={title}
                className={`${
                  selectedLink.isActive &&
                  selectedLink.index === index &&
                  'loading-glitch'
                } `}
              >
                {getChars(title)}
              </span>
            </motion.p>
          </a>
        )
      })}
    </div>
  )
}

//  ;<motion.p
//    onMouseOver={() => {
//      setSelectedLink({ isActive: true, index })
//    }}
//    onMouseLeave={() => {
//      setSelectedLink({ isActive: false, index })
//    }}
//    variants={blur}
//    animate={
//      selectedLink.isActive && selectedLink.index != index ? 'open' : 'closed'
//    }
//    className={`${
//      pathname === href && 'text-brandPrimary'
//    } uppercase cursor-pointer`}
//  >
//    {/* {selectedLink.isActive && selectedLink.index === index && (
//                 <motion.img
//                   variants={{
//                     hidden: {
//                       opacity: 0,
//                       y: 30,
//                     },
//                     visible: {
//                       opacity: 1,

//                       y: 0,
//                       transition: {
//                         // delay: 0.3,
//                         duration: 0.3,
//                         ease: 'easeInOut',
//                       },
//                     },
//                     exit: {
//                       opacity: 0,
//                       y: 30,
//                       transition: {
//                         delay: 0,
//                         duration: 0.3,
//                         ease: 'easeInOut',
//                       },
//                     },
//                   }}
//                   initial='hidden'
//                   animate='visible'
//                   src={`/assets/images/cyber/arrow-up-right.svg`}
//                   alt='Arrow Up Right'
//                   className='w-6 h-6 mr-2'
//                 />
//               )} */}
//    <span
//      title={title}
//      // className={`${
//      //   selectedLink.isActive &&
//      //   selectedLink.index === index &&
//      //   'loading-glitch'
//      // }`}
//    >
//      {getChars(title)}
//    </span>
//  </motion.p>
