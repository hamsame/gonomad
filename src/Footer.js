import React from 'react'

const Footer = () => {
  return (
    <footer>
      <h3
        style={{
          padding: '2rem',
          textAlign: 'center',
          verticalAlign: 'center',
        }}
      >
        GoNomad
      </h3>
      <div
        className='container'
        style={{
          textAlign: 'center',
          verticalAlign: 'center',
          padding: '1.5rem',
        }}
      >
        <a href='https://www.facebook.com'>
          <i className='lab la-facebook-square la-2x'></i>
        </a>
        <a style={{ margin: '0 5%' }} href='https://www.twitter.com'>
          <i className='lab la-twitter la-2x'></i>
        </a>
        <a href='https://www.instagram.com'>
          <i className='lab la-instagram la-2x'></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
