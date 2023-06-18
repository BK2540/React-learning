import React from 'react'
import Styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
import { items } from './data.js'
import { notFound } from 'next/navigation'


const getData = (cat) => {
   const data = items[cat];

   if (data) {
    return data;
   }

   return notFound()
};

const Category = ({params}) => {

  const data = getData(params.category);
  return (
    <div className={Styles.container}>
      <h1 className={Styles.catTitle}>{params.category}</h1>

       {data.map((item)=>(  

      <div className={Styles.item} key={item.id}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>{item.title}</h1>
        <p className={Styles.desc}>{item.desc}</p>
         <Button text="See More" url="#"/>
        </div>
      <div className={Styles.imgContainer}>
        <Image
        className={Styles.img} 
        fill={true} 
        src={item.image}
        alt='ceramic room'
        />
      </div>
      </div>
    ))}
      
    </div>
  )
}

export default Category