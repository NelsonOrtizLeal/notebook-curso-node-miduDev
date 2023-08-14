const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls(folder){
    let files

    try{
        files = await fs.readdir(folder)
    }catch{
        console.log(`No se pudo leer el directorio ${folder}`)
        // Terminamos el proceso de forma correcta
        process.exit(1)
    }

    // Ahora hay que realizar algo cuando se terminen de leer todos los archivos -> Promises
    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file) // Generamos la ruta del archivo
        let stats
        try{
            stats = await fs.stat(filePath) // Status -> Información del archivo.
        }catch{
            console.error(`No se puede leer el archivo ${filePath}`)
            process.exit(1)
        }

        // Si no se presento error, ya podemos mostrar la información de los archivos
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        // Retornamos la información del archivo.
        return `${fileType} ${file.padEnd(20)} ${fileSize.padStart(10)} ${fileModified}`
    })

    // Mostramos la respuesta de las promesas
    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => {
        console.log(fileInfo)
    })
}

ls(folder)