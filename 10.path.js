const path = require('node:path')

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Obtener el nombre del archivo
const base = path.basename('\\tmp\\nelson-secret-files\\password.txt')
console.log(base)

// Obtener el nombre del archivo sin extension
const filename = path.basename('\\tmp\\nelson-secret-files\\password.txt', '.txt')
console.log(filename)

// Obtener la extension de un archivo
const extension = path.extname('\\tmp\\nelson-secret-files\\password.my.super.power.jpg')
console.log(extension)