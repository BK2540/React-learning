import React from 'react'
import Styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={Styles.container}>
        <div>©copyright 2023</div>

        <div className={Styles.social}>
          <Image src="/github.png" alt="Social icon" width={18} height={18} className={Styles.icon}/>
          <Image src="/instagram.png" alt="Social icon" width={18} height={18} className={Styles.icon}/>
          <Image src="/linkedin.png" alt="Social icon" width={18} height={18} className={Styles.icon}/>
          <Image src="/twitter.png" alt="Social icon" width={18} height={18} className={Styles.icon}/>
          
        </div>
    </div>
  )
}

export default Footer