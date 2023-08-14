const http = require('node:http')
const fs = require('node:fs')

// Agregando variables de entorno
const desiredPort = process.env.PORT ?? 1234

// Creando una función de primer nivel
const processRequest = (request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (request.url === '/') {
    response.statusCode = 200 // OK
    response.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (request.url === '/contacto') {
    response.statusCode = 200
    response.end('<h1>Contactos</h1>')
  } else if (request.url === '/imagen.png') {
    fs.readFile('./super-calculadora.png', (err, data) => {
      if (err) {
        response.statusCode = 500
        response.end('<h1> 500 Internal Server Error </h1>')
      } else {
        response.setHeader('Content-Type', 'image/png')
        response.end(data)
      }
    })
  } else {
    response.statusCode = 404
    response.end('<h1> 404 </h1>')
  }
}

// Creamos el servidor
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`sever listening on port http://localhost:${desiredPort}`)
})
