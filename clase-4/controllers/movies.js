import { movieModel } from '../models/movie.js'
import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  static async getAll (req, res) {
    const { genre } = req.query
    const movies = await movieModel.getAll({ genre })
    res.json(movies)
  }

  static async getById (req, res) {
    const { id } = req.params

    // Buscamos la pelicula en nuestro json
    const movie = await movieModel.getById({ id })
    if (movie) return res.json(movie)

    // Si no encuentra la pelicula, responder un error
    res.status(404).json({ message: 'Movie not found' })
  }

  static async create (req, res) {
    const result = validateMovie(req.body)

    if (result.error) {
      // 402 -> indica que el cliente a hecho un error en la request
      // 422 -> Ha entendido la request pero la petición no era del todo correcto
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newMovie = await movieModel.create({ input: result.data })

    res.status(201).json(newMovie)
  }

  static async delete (req, res) {
    const { id } = req.params
    const result = await movieModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json({ message: 'Movie deleted' })
  }

  static async update (req, res) {
    const result = validatePartialMovie(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedMovie = await movieModel.update({ id, input: result.data })

    return res.json(updatedMovie)
  }
}
