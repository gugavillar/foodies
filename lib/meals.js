import sql from 'better-sqlite3'
import xss from 'xss'
import slugify from 'slugify'
import { imgbbUpload } from 'imgbb-image-uploader'

const db = sql('meals.db')

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
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return db.prepare('SELECT * FROM meals').all()
}

export const getMeal = async (slug) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)
  meal.image = await saveMealImage(meal.image, meal.slug)

  db.prepare(
    `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
      )`,
  ).run(meal)
}
