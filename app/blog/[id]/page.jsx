import React from 'react'
import Styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}` , {
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound()
  }
 
  return res.json()
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={Styles.container}>
      <div className={Styles.topContainer}>
        <div className={Styles.info} >
      <h1 className={Styles.title}> {data.title} </h1>
      <br/>
      <p className={Styles.desc}>
        {data.body}
      </p>
      </div>
      <div className={Styles.imgContainer}>
      <Image 
      src="/unsplash.jpg" 
      alt='landscape'
      width={300}
      height={450} 
      className={Styles.img} 
      />
      </div>
      </div>

      <div className={Styles.detailContainer}>
      <div className={Styles.content}>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolorum quidem ea nobis dolorem, totam quas culpa accusantium 
        voluptatem fugiat. Saepe, suscipit excepturi eveniet similique 
        dolor mollitia nostrum aperiam voluptate nam autem accusamus, 
        odit quo modi error perferendis! Aliquid deserunt perferendis 
        doloremque quia nemo impedit eos soluta voluptate praesentium 
        excepturi. 
        <br/>
        <br />
        Vel voluptates dolor nulla consequatur dolores. 
        Ipsa fugiat est deserunt facere, veniam rem non impedit dicta 
        quaerat mollitia eum eius id reiciendis esse consequuntur 
        repudiandae similique quidem et aspernatur omnis quis hic! 
        Id iure deleniti soluta eius quibusdam alias molestiae 
        voluptatem. 
        <br/>
        Quod pariatur cupiditate vero modi ullam. 
        Eligendi repellendus tenetur quisquam?
        </p>

      </div>
      </div>
    </div>
  )
}

export default BlogPost