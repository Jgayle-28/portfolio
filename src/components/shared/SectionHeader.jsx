import React from 'react'
import RevealText from '../shared/RevealText'
import Divider from './Divider'

export default function SectionHeader({ extraStyles, text }) {
  return (
    <div className={`my-12 flex items-center ${extraStyles}`}>
      <RevealText>
        <h3 className='mr-4 py-2 uppercase header-tracking font-bold text-lg !whitespace-nowrap'>
          {text}
        </h3>
      </RevealText>
      {/* <Divider /> */}
    </div>
  )
}
