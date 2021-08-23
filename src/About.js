import React from 'react'
import world from './assets/images/world.jpeg'
import remotework from './assets/images/remotework.jpeg'
import boringjob from './assets/images/boringjob.jpeg'
import underground from './assets/images/underground.jpeg'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <div style={{ marginTop: '20vh', textAlign: 'center' }}>
        <h1>We'll Help You See The World</h1>
        <article className='grid-2'>
          <div className='info'>
            <img src={boringjob} width='100%' alt='Person Bored Working' />
            <h4>Escape Your Boring Environment</h4>
          </div>
          <div className='info'>
            <img src={remotework} width='100%' alt='Person working remotely' />
            <h4>Work in Comfort</h4>
          </div>
          <div className='info'>
            <img
              src={underground}
              width='100%'
              alt='London Underground Train'
            />
            <h4>End Your Commute</h4>
          </div>
          <div className='info'>
            <img src={world} width='100%' alt='Tourist on Boat' />
            <h4>See the World</h4>
          </div>
        </article>

        <article className='plan'>
          <h1>Action Plan</h1>
          <ol className='numbered'>
            <li>
              <h2> 1) Identify & Polish Your Skills</h2>
            </li>
            <li>
              <h2> 2) Register and Market Yourself</h2>
            </li>
            <li>
              <h2> 3) Plan Your Nomad Lifestyle</h2>
            </li>
            <li>
              <h2> 4) Live Your New Life</h2>
            </li>
          </ol>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default About
