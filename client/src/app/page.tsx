'use client';
import styles from './page.module.css'
import CardDisplay from '@/components/CardDisplay/CardDisplay'

export default function Home() {
  return (
    <main className={styles.main}>
      <CardDisplay/>
    </main>
  )
}
