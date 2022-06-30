import React from 'react'
import AboutHero from '../components/AboutComponent/AboutHero'
import Layout from '../components/Layout'
import WhatWeDo from '../components/AboutComponent/WhatWeDo'
import WhyChooseUs from '../components/AboutComponent/WhyChooseUs'

const About = () => {
  return (
    <Layout>
      <div>
        <AboutHero />
        <WhatWeDo />
        <WhyChooseUs />
      </div>
    </Layout>
  )
}

export default About
