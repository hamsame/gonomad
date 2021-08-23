import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <div style={{ margin: '5rem auto 0' }}>
        <div className='grid-2'>
          <div className='form'>
            <form>
              <h2 style={{ textAlign: 'ceter', marginTop: '2rem' }}>
                Contact Us
              </h2>
              <h4>Reach out to us and we'll get back to you!</h4>
              <div className='input-control'>
                <label htmlFor='name'>Name :</label>
                <input type='text' id='name' name='name' />
              </div>
              <div className='input-control'>
                <label htmlFor='email'>Email : </label>
                <input type='text' id='email' name='email' />
              </div>
              <div className='input-control'>
                <label htmlFor='message'>Message : </label>
                <textarea name='message' id='message'></textarea>
                <br />
                <input type='submit' value='SUBMIT' />
              </div>
            </form>
          </div>
          <div className='details'>
            <ol>
              <li>GoNomad</li>
              <li>Enquiries: 079 39 6920 05</li>
              <li>Email: hello@gonomad.com</li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
