import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.desc}>
        Let's collaborate and unleash the full potential of your ideas, bringing them to vibrant life.
          </p>
          <Button url="/portfolio" text="See our works"/>
        
      </div>

      <div className={styles.item}>
      <Image src={Hero} alt="Hero image" className={styles.img} />
      </div>
    </div>
  )
}
