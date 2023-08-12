const fs = require('node:fs')

const stats = fs.statSync("./archivo1.txt")

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)