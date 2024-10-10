const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const menuController = require('./controllers/menuController');

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Conectado a MongoDB');
  }).catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde las carpetas correspondientes
app.use('/css', express.static(path.join(__dirname, 'views/css')));
app.use('/js', express.static(path.join(__dirname, 'views/js')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/principal/index.html'));
});

// Ruta para la página admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/admin/index.html'));
});

// Ruta para editar producto en admin
app.get('/admin/editar-producto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/admin/editar-producto.html'));
});

// Ruta para nuevos productos en admin
app.get('/admin/nuevos-productos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/admin/nuevos-productos.html'));
});

// Usar las rutas del menú
app.use('/api/menu', menuController);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
