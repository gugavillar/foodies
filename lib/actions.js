'use server'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { saveMeal } from './meals'

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

const mealSchema = z.object({
  creator: z.string().trim().min(1),
  creator_email: z.string().email(),
  title: z.string().trim().min(1),
  summary: z.string().trim().min(1),
  instructions: z.string().trim().min(1),
  image: z
    .any()
    .refine((file) => file?.size >= 0)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type)),
})

export const handleSubmitMeal = async (prevState, formData) => {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  }

  try {
    mealSchema.parse(meal)
    await saveMeal(meal)
  } catch (err) {
    if (err?.errors) {
      return { message: 'Some fields has error' }
    }
    return { message: 'Failed to create meal' }
  }

  revalidatePath('/meals')
  redirect('/meals')
}
