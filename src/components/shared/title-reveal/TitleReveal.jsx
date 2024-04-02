import React, { useState } from 'react'
import styles from '@/styles/what-i-do.module.scss'
import Titles from './Titles'
import Descriptions from './Descriptions'

export default function TitleReveal({ data }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className={`${styles.whatIDoMain} cursor-pointer`}>
      <div className={`${styles.whatIDoContainer} !cursor-pointer`}>
        <Titles data={data} setSelectedProject={setSelectedProject} />
        <Descriptions data={data} selectedProject={selectedProject} />
      </div>
    </section>
  )
}
