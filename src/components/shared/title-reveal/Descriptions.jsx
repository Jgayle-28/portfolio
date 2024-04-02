import React from 'react'
import styles from '@/styles/what-i-do.module.scss'

export default function Descriptions({ data, selectedProject }) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength)
  }

  return (
    <div className={`${styles.descriptions} `}>
      {data.map((project, i) => {
        const { title, description } = project
        return (
          <div
            key={i}
            className={`${`${styles.description}  px-10 md:px-28`} bg-brandPrimary font-extralight`}
            style={{
              clipPath:
                selectedProject == i ? 'inset(0 0 0)' : 'inset(50% 0 50%',
            }}
          >
            <p>{crop(title, 9)}</p>
            <p className='!font-light'>{description}</p>
          </div>
        )
      })}
    </div>
  )
}
