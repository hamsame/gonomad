import React, { useState, useEffect } from 'react'
import Preloader from './Preloader'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading && <Hero />}

      <Footer />
    </>
  )
}

const Hero = () => {
  return (
    <div className='hero'>
      <h1>
        See the World <br /> Become a Digital Nomad
      </h1>
      <Link to='/about'>Read More</Link>
    </div>
  )
}

export default Home
