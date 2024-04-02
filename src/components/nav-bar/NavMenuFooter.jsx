import { motion } from 'framer-motion'
import { translate } from './animations'

export default function NavMenuFooter() {
  return (
    <div className='footer'>
      <ul>
        <motion.li
          custom={[0.8, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <span>Made by: </span>Jerehme Gayle
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.85, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <span>Glitch: </span> #15365
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.9, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <span>Location: </span> Phoenix / Costa Rica
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.95, 0]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <span>Meatloaf: </span> On Point
        </motion.li>
      </ul>
    </div>
  )
}
