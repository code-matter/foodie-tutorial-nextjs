// Creates server action. Dictates that it belongs ON the server. If you used this DIRECTLY in a 'use client' component this would throw an error.
// That's why we create an action file

'use server'

import { redirect } from 'next/navigation'
import { uploadMeal } from './meals'

export const handleSubmit = async formData => {
    const meal = {
        title: formData.get('title'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        summary: formData.get('summary'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),
    }
    await uploadMeal(meal)
    redirect(`/meals/${meal.title}`)
}
