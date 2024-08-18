import React, { lazy, Suspense } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { introParagraph, secondParagraph } from '@/constants/home'
import { skills } from '../constants/home'
import SectionHeader from '@/components/shared/SectionHeader'
import Diamond from '@/components/home/Diamond'
import TitleReveal from '../components/shared/title-reveal/TitleReveal'
import AboutIntro from '@/components/page-intro/AboutIntro'
import Testimonials from '../components/home/Testimonials'
import Hero from '../components/home/Hero'
import ParagraphReveal from '@/components/shared/ParagraphReveal'
import PortfolioSection from '../components/portfolio/PortfolioSection'
import WorkExperience from '../components/home/WorkExperience'
import ContentWrapper from '@/components/shared/ContentWrapper'
import Contact from '@/components/home/Contact'
import Skills from '../components/home/Skills'
import Socials from '@/components/shared/Socials'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [1, 0], [0, 100])

  return (
    <>
      <Hero />
      <ContentWrapper extraStyles='py-[300px] bg-gradient-to-b from-neutral-900/70 to-black'>
        <ParagraphReveal paragraph={introParagraph} />
      </ContentWrapper>
      <SectionHeader
        text='What I do'
        extraStyles='mt-0 md:mt-20 px-10 md:px-28 pb-32 md:pb-0'
      />
      <TitleReveal data={skills} />
      <Diamond scrollYProgress={scrollYProgress} />
      <ContentWrapper extraStyles='my-[200px]'>
        <ParagraphReveal paragraph={secondParagraph} />
      </ContentWrapper>
      <PortfolioSection />
      <AboutIntro />
      <div className='flex justify-center'>
        <SectionHeader text='A Little History' extraStyles='my-32' />
      </div>
      <WorkExperience />
      <Skills />
      <Testimonials />
      <Contact />
      <Socials />
    </>
  )
}
