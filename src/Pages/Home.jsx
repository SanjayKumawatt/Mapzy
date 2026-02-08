import React from 'react'
import Hero from '../Components/Hero'
import Solutions from '../Components/Solutions'
import Products from '../Components/Products'
import Industries from '../Components/Industries'
import About from '../Components/About'
import IndustryMarquee from '../Components/IndMar'

const Home = () => {
  return (
    <div>
        <Hero/>

        <Solutions/>
        <IndustryMarquee/>
        <About/>
        <Products/>
        <Industries/>
    </div>
  )
}

export default Home