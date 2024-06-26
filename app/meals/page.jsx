import React, { Suspense } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/MealsGrid'
import { getMeals } from '@/lib/meals'
import MealsLoading from './MealsLoading'

export const metadata = {
    title: 'List of all the meals',
    description: 'Browse all the meals our community has shared!',
}

const Meals = async () => {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}

const MealsPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={styles.highlight}>by you!</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. Easy and
                    fun!
                </p>
                <p className={styles.cta}>
                    <Link href='/meals/share'>Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<MealsLoading />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}

export default MealsPage
