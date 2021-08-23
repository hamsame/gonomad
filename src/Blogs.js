import React from 'react'
import './index.css'
import { data } from './data'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Blogs = () => {
  const [blogs] = useState(data)

  return (
    <>
      <div className='blogs' style={{ margin: '5rem auto 0' }}>
        {blogs.map((blog) => {
          const { id, heading, firstName, lastName, bannerImage } = blog
          return (
            <div className='blog' key={id}>
              <img src={bannerImage} alt={heading} />
              <h3>{heading}</h3>
              <h4>
                Author: {firstName}&nbsp;
                {lastName}
              </h4>
              <Link to={`/blog/${blog.id}`}>Read Blog</Link>
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default Blogs
