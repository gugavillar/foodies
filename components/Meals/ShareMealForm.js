'use client'
import { useFormState } from 'react-dom'

import { handleSubmitMeal } from '@/lib/actions'

import { SubmitButtonForm } from './SubmitButtonForm'
import { ImagePicker } from './ImagePicker'
import styles from './ShareMealForm.module.css'

export const ShareMealForm = () => {
  const [state, actionForm] = useFormState(handleSubmitMeal, null)
  return (
    <form
      className={styles.form}
      action={actionForm}
    >
      <div className={styles.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
        />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input
          type="text"
          id="summary"
          name="summary"
          required
        />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
        />
      </p>
      <ImagePicker name="image" />
      <p>{state?.message}</p>
      <p className={styles.actions}>
        <SubmitButtonForm label="Share Meal" />
      </p>
    </form>
  )
}
