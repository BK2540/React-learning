import React from 'react'
import Styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Let's Keep in Touch!!</h1>
      <div className={Styles.content}>
        <div className={Styles.imgContainer}>
        <Image src="/alone.png" fill={true} alt="" className={Styles.image} />
        </div>
        <form className={Styles.form}>
          <input type="text" placeholder='name' className={Styles.input}/>
          <input type="text" placeholder='email' className={Styles.input}/>
          <textarea className={Styles.textArea}  placeholder='messenge' cols="30" rows="10"></textarea>
        <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact