'use client'

import Link from 'next/link'
import Image from 'next/image'

import styles from './meal-item.module.css'
import { deleteMeal } from '@/lib/actions'

export default function MealItem({ title, mealId, image, summary, creator }) {
    const handleDeleteMeal = async () => {
        await deleteMeal(mealId)
    }

    return (
        <article className={styles.meal}>
            <header>
                <div className={styles.image}>
                    <Image
                        src={`https://foodies-app-alex-dev-prog
.s3.amazonaws.com/${image}`}
                        alt={title}
                        fill
                    />
                </div>
                <div className={styles.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={styles.content}>
                <p className={styles.summary}>{summary}</p>
                <div className={styles.actions}>
                    <Link href={`/meals/${mealId}`}>View Details</Link>
                    <p onClick={handleDeleteMeal}>Remove</p>
                </div>
            </div>
        </article>
    )
}
