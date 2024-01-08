import { sql } from '@vercel/postgres'
import xss from 'xss'
import slugify from 'slugify'
import { imgbbUpload } from 'imgbb-image-uploader'

const saveMealImage = async (image, slug) => {
  const { data } = await imgbbUpload({
    key: process.env.IMGBB_APIKEY,
    image: image,
    name: slug,
    ...(process.env.NODE_ENV === 'production' && { expiration: 600 }),
  })

  return data.url
}

export const getMeals = async () => {
  const { rows } = await sql`SELECT * FROM meals`
  return rows
}

export const getMeal = async (slug) => {
  const { rows } = await sql`SELECT * FROM meals WHERE slug = ${slug}`
  return rows[0]
}

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)
  meal.image = await saveMealImage(meal.image, meal.slug)

  sql`INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (${meal.slug}, ${meal.title}, ${meal.image}, ${meal.summary}, ${meal.instructions}, ${meal.creator}, ${meal.creator_email})`
}
