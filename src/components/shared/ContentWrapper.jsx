import React from 'react'

export default function ContentWrapper({ extraStyles, children }) {
  return (
    <section className={`px-10 md:px-28  ${extraStyles}`}>{children}</section>
  )
}
