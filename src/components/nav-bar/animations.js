export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
}

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] }
const navBarTransition = { duration: 1, ease: 'easeInOut' }

export const navBar = {
  initial: {
    height: 0,
    navBarTransition,
  },
  open: {
    height: '100%',
    transition: { ...navBarTransition, delay: 0.2 },
  },
  exit: {
    height: 0,
    transition: { duration: 0.7, ease: 'easeInOut', delay: 0.9 },
  },
}

export const background = {
  initial: {
    height: 0,
    navBarTransition,
  },
  open: {
    height: '100vh',
    transition: { ...navBarTransition, delay: 0.96 },
  },
  exit: {
    height: 0,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
}

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
    transition,
  },
  exit: {
    height: 0,
    transition: { duration: 0.9, ease: 'easeInOut' },
  },
}

export const blur = {
  initial: {
    filter: 'blur(0px)',
    opacity: 1,
  },
  open: {
    filter: 'blur(4px)',
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.3 },
  },
}

export const letterTranslate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: (i) => {
    return {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: i[0] },
    }
  },
  exit: (i) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
}

export const translate = {
  initial: {
    y: 100,
    opacity: 0,
  },
  enter: (i) => {
    return {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
    }
  },
  exit: (i) => ({
    y: 100,
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
}
