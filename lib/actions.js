// Creates server action. Dictates that it belongs ON the server. If you used this DIRECTLY in a 'use client' component this would throw an error.
// That's why we create an action file
'use server'

import { redirect } from 'next/navigation'
import { removeMeal, uploadMeal } from './meals'
import { revalidatePath } from 'next/cache'

const isInvalidText = text => {
    return !text || text.trim() === ''
}

export const handleSubmit = async (previousState, formData) => {
    const meal = {
        title: formData.get('title'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        summary: formData.get('summary'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),
    }
    console.log('meal', meal)

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invalid Input(s)',
        }
    }

    await uploadMeal(meal)
    // default is 'page' but 'layout' allows the HOLE layout to revalidate for the SECOND param of revalidatePath()
    revalidatePath('/meals')
    redirect(`/meals/${meal.title}`)
}

export const deleteMeal = async mealId => {
    await removeMeal(mealId)
    revalidatePath('/meals')
}
