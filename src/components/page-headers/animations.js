export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
}
export const letter = {
  hidden: { opacity: 0, x: -2 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: 'easeInOut' },
  },
}
