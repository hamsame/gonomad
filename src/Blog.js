import React from 'react'
import { data } from './data'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'

const defaultImg = 'https://i.stack.imgur.com/y9DpT.jpg'

function Blog() {
  const [blogItem, setBlogItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const blogClicked = data.find((blog) => blog.id === parseInt(id))
    setBlogItem(blogClicked)
  }, [id])

  return (
    <>
      <div
        className='blog'
        style={{ width: '94%', margin: '10vh auto 0', lineHeight: '2rem' }}
      >
        <img
          style={{ display: 'block', margin: '0 auto 3rem', width: '40%' }}
          src={blogItem.bannerImage || defaultImg}
          alt={blogItem.name || 'Blog Image'}
        />

        <h2 className='center'>{blogItem.heading || 'Blog Heading'}</h2>
        <p className='center'>
          <strong>
            Written By {blogItem.firstName} {blogItem.lastName}
          </strong>
          <br />
          <br />
        </p>

        <article>
          <p>{blogItem.p1}</p>
          <br />
          <p>{blogItem.p2}</p>
        </article>
        <br />
        <br />
        <Link to='/blogs'>Back to Blogs</Link>
        <br />
        <br />
      </div>
      <Footer />
    </>
  )
}

export default Blog
