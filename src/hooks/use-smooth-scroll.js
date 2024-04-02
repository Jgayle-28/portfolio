import { useCallback } from 'react'

const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId, duration = 1000) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const start = window.pageYOffset
      const target = section.getBoundingClientRect().top + window.pageYOffset
      const startTime = performance.now()

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t + b
        t--
        return (-c / 2) * (t * (t - 2) - 1) + b
      }

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime
        const scrollPosition = easeInOutQuad(
          elapsedTime,
          start,
          target - start,
          duration
        )
        window.scrollTo(0, scrollPosition)
        if (elapsedTime < duration) {
          requestAnimationFrame(animateScroll)
        }
      }

      requestAnimationFrame(animateScroll)
    }
  }, [])

  return scrollToSection
}

export default useSmoothScroll
