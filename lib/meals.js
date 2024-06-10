import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

const db = sql('meals.db')

export const getMeals = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    //   throw new Error("Loading meals failed");
    return db.prepare('SELECT * FROM meals').all()
}

export const getMeal = async mealId => {
    // SQLITE uses .get to protect against sql injections
    return db.prepare('SELECT * FROM meals WHERE mealId = ?').get(mealId)
}

export const uploadMeal = async meal => {
    // We should sanitize data since we dangerouslySetInnerHTML

    // creates an id from title in LOWER CASE
    meal.mealId = slugify(meal.title, { lower: true })

    // Sanitize instructions
    meal.instructions = xss(meal.instructions)

    // Now uploading image in public, but SHOULD NOT DO IT IN A REAL APP
    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.mealId}.${extension}`

    // Writing to public/images
    const stream = fs.createWriteStream(`public/images/${fileName}`)

    // Creates a buffer from a FILE
    const bufferedImg = await meal.image.arrayBuffer()

    // Writes to public
    stream.write(Buffer.from(bufferedImg), error => {
        if (error) {
            throw new Error('Saving Image failed..')
        }
    })

    // Sets the URL. Public is not included because it always go to public
    meal.image = `/images/${fileName}`

    db.prepare(
        `
        INSERT INTO meals (title,summary,instructions,creator,creator_email,image,mealId
        )
         VALUES (
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @mealId
        )
      `
    ).run(meal)
}

export const removeMeal = async mealId => {
    db.prepare('DELETE FROM meals WHERE mealId = ?').run(mealId)
}
