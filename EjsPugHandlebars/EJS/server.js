const port = 8080;
const express = require('express');
const { databaseProductos } = require('./public/productos');

const productos = databaseProductos.obtenerTodos();

const app = express();

app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('inicio', { titulo: 'PRODUCTO', titulo2: 'PRECIO', titulo3: 'THUMBNAIL'});
});

app.get('/productos', (req, res) => {
    res.render('productosLista', { productos });
});

app.post('/productos', (req, res) => {
    productos.push(req.body)
    console.log(productos);
    res.redirect('/productos');
});


app.listen(port, () => console.log(`App listening to port ${port}`));