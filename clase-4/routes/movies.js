// Importar la clase para las rutas
import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

// Creamos un objeto de la clase importado
export const moviesRouter = Router()

// Le asignamos los metodos o rutas al objeto

moviesRouter.get('/', MovieController.getAll)
moviesRouter.get('/:id', MovieController.getById)
moviesRouter.post('/', MovieController.create)
moviesRouter.delete('/:id', MovieController.delete)
moviesRouter.patch('/:id', MovieController.update)
