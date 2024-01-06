import Link from 'next/link'
import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { Meals } from '@/components/Meals'
import { getMeals } from '@/lib/meals'

import styles from './page.module.css'

const MealsWrapper = async () => {
  const meals = await getMeals()

  if (!meals.length) notFound()

  return <Meals meals={meals} />
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Chose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <MealsWrapper />
        </Suspense>
      </main>
    </>
  )
}
