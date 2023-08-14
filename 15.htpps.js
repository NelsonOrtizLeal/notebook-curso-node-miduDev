const http = require('node:http')
const { findAvailablePort } = require('./16.free-port')

// Agregando variables de entorno
const desiredPort = process.env.PORT ?? 3000

// Creamos el servidor
const server = http.createServer((request, response) => {
  console.log('request received')
  response.end('hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`sever listening on port http://localhost:${port}`)
  })
})
