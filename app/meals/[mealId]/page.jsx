import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'

export const generateMetadata = async ({ params }) => {
    const meal = await getMeal(params.mealId)
    if (!meal) {
        notFound()
    }
    return {
        title: meal.title,
        description: meal.summary,
    }
}

const MealIDPage = async ({ params }) => {
    const meal = await getMeal(params.mealId)

    if (!meal) notFound()

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image
                        fill
                        src={`https://foodies-app-alex-dev-prog.s3.amazonaws.com/${meal.image}`}
                        alt={meal.title}
                    />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        By:{' '}
                        <a href={`mailto:${meal.creator_email}`}>
                            {meal.creator}
                        </a>
                    </p>
                    <p className={styles.summary}>{meal.summary}</p>
                </div>
            </header>
            <main className={styles.main}>
                <p
                    className={styles.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions.replace(/\n/g, '<br />'),
                    }}
                ></p>
            </main>
        </>
    )
}

export default MealIDPage
