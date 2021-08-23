import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const showUl = (e) => {
    document.querySelector('nav .container ul').classList.toggle('show')
    if (
      document.querySelector('nav .container ul').classList.contains('show')
    ) {
      document.querySelector('.hamburger').innerHTML = '&#10005;'
    } else {
      document.querySelector('.hamburger').innerHTML = '&#9776;'
    }
  }

  React.useEffect(() => {
    document.querySelector('main').addEventListener('click', (e) => {
      document.querySelector('nav .container ul').classList.remove('show')
      document.querySelector('.hamburger').innerHTML = '&#9776;'
    })
    return () => document.querySelector('main').removeEventListener('click')
  })

  return (
    <header>
      <nav>
        <div className='container'>
          <h2>
            <Link to='/'>GoNomad</Link>
          </h2>
          <div className='hamburger' onClick={() => showUl()}>
            &#9776;
          </div>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
