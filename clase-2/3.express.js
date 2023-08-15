const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

// Express ya tiene un middleware que te hace ese trabajo
// app.use(express.json())

// Creando un middleware
app.use((req, res, next) => {
  console.log('Mi primer middleware')
  // trackear la request a la base de datos
  // revisar si el usuario tiene cookies

  // Creamos condicionales para continuar si no es el caso a tratar
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // solo llegan request que son POST y que tienne el header Content-Type: application/json
  let body = ''

  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  // escuchar el evento fin o end de la request
  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la informacion en el req.body
    req.body = data
    next()
  })
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // req.body deberiamos guardar en bbdd
  // Se recibio toda la peticion
  res.status(201).json(req.body)
})

// La ultima ruta a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1> 404 </h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
