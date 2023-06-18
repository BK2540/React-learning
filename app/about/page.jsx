import React from 'react'
import Styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
        <Image src="/team.png" fill={true} alt="" className='img'/>

        <div className={Styles.imgText}>
          <h1 className={Styles.imgTitle}>Let's get to know us</h1>
          <h3 className={Styles.imgDesc}>We have vaireties of culture in one team</h3>
        </div>
      </div>

      <div className={Styles.textContainer}>
      <div className={Styles.item}>
        <h1 className={Styles.imgTitle}>Who are we?</h1>
        <p className={Styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        In quas rem accusamus, totam minima voluptatem laboriosam libero similique! 
        <br />
        <br />Nulla vel quo excepturi placeat itaque sint repellendus. Pariatur corporis aliquid eaque.</p>
      </div>

      <div className={Styles.item}>
      <h1 className={Styles.imgTitle}>What we do?</h1>
      <p className={Styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nostrum porro ut aspernatur sapiente fugiat. Aperiam voluptatibus, <br />
          <br />- Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <br />
          <br />- Similique aliquam minima laboriosam. 
          <br />
          <br />- Ipsum cum sapiente quaerat laboriosam sunt atque recusandae ea autem?
          </p>
          <Button url="/contact" text="Contact"/>
          </div>
      </div>
    </div>
  )
}

export default About