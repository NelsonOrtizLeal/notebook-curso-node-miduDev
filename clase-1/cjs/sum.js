// Tenemos nuestra funcion en un archivo independiente
function sum (a, b) {
  return a + b
}

// Ahora debemos exportar la funcion
// CommonJS Module Export
module.exports = {
  sum
}
