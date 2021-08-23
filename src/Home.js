import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
document.title = 'GoNomad'
function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const Preloader = () => {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>... Loading</h1>
      </div>
    )
  }

  return (
    <>
      {!isLoading && <Preloader />}
      {/* {!isLoading && <Hero />} */}

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
