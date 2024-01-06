'use client'
export default function Error({ reset }) {
  return (
    <section className="error">
      <h1>An error ocurred!</h1>
      <p>Failed to save meal data. Please try again.</p>
      <button onClick={() => reset()}>Try again</button>
    </section>
  )
}
