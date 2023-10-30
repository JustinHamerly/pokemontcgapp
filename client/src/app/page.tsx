'use client';
import styles from './page.module.css'
import CardDisplay from '@/components/CardDisplay/CardDisplay'
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <CardDisplay/>
      </main>
    </ThemeProvider>
  )
}
