const productos = [
    {
        title: 'manta',
        price: 231,
        id: `${Date.now()}`,
        thumbnail: 'https://curiosfera-historia.com/wp-content/uploads/historia-de-la-manta-1.jpg'
    },
    {
        title: 'colchon',
        price: 658,
        id: `${Date.now()}`,
        thumbnail: 'https://estelar.com.ar/wp-content/uploads/2020/03/Apolo140E.jpg'
    }
]

const databaseProductos = {
    obtenerTodos: () => {
        return [...productos]
    },
    obtenerSegunPrice: price => {
        return productos.filter(p => p.price === price)
    },
    obtenerSegunId: id => {
        return productos.filter(p => p.id === id)
    },
    agregarProducto: datos => {
        const producto = datos;
        producto.id = `${Date.now()}`
        productos.push(producto)
        return producto
    },
    borrarProductoSegunId: id => {
        const indiceBuscado = productos.findIndex(p => p.id === id)
        if (indiceBuscado === -1) {
            const error = new Error('no existe un producto con ese id')
            error.tipo = 'db not found'
            throw error
        }
        productos.splice(indiceBuscado, 1)
    },
    reemplazarProductoaSegunId: (id, datos) => {
        const indiceBuscado = productos.findIndex(p => p.id === id)
        if (indiceBuscado === -1) {
            const error = new Error('no existe una persona con ese id')
            error.tipo = 'db not found'
            throw error
        }
        const producto = datos
        producto.id = id
        productos[indiceBuscado] = producto;
        return producto
    }
}

module.exports = {databaseProductos};