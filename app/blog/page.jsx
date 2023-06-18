import React from 'react'
import Styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch (`https://jsonplaceholder.typicode.com/posts`, {
  cache: 'no-store',
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {

  const data = await getData()
  return (
    <div className={Styles.mainContainer}>
      {data.map((item) => (
      <Link href="/blog/testId" className={Styles.container} key={item.id}>
        <div className={Styles.imgContainer}>
          <Image 
          src="/unsplash.jpg"
          alt='landscape'
          width={400}
          height={250}
          className={Styles.image}
          />
        </div>
        <div className={Styles.content}>
          <h1 className={Styles.title}>{item.title}</h1>
          <p className={Styles.desc}>{item.body}</p>
        </div>
      </Link>
      ))}

    </div>
  )
}

export default Blog;