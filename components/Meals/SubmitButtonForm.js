'use client'
import { useFormStatus } from 'react-dom'

export const SubmitButtonForm = ({ label }) => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
    >
      {pending ? 'Submitting...' : label}
    </button>
  )
}
