const mongoose = require('mongoose');
const MenuItem = require('./models/menuItem');
require('dotenv').config();

// Datos iniciales
const menuData = [
  {
    id: "1",
    nombre: "Pizza pequeña",
    categoria: 1,
    precio: 10
  },
  {
    id: "3",
    nombre: "Pizza grande",
    categoria: 1,
    precio: 20
  },
  {
    id: "4",
    nombre: "Pie de limon",
    categoria: 2,
    precio: 5
  },
  {
    id: "5",
    nombre: "Pizza de parchita",
    categoria: 2,
    precio: 6
  },
  {
    id: "6",
    nombre: "Torta de chocolate",
    categoria: 2,
    precio: 5
  },
  {
    id: "7",
    nombre: "Torta de fresa",
    categoria: 2,
    precio: 5
  },
  {
    id: "8",
    nombre: "Jugo de Naranja",
    categoria: 3,
    precio: 2
  },
  {
    id: "9",
    nombre: "Jugo de fresa",
    categoria: 3,
    precio: 2
  },
  {
    id: "10",
    nombre: "Jugo de parchita",
    categoria: 3,
    precio: 2
  },
  {
    id: "11",
    nombre: "Chuleta ahumada",
    categoria: 4,
    precio: 6
  },
  {
    id: "12",
    nombre: "Pollo brasa",
    categoria: 4,
    precio: 6
  },
  {
    id: "13",
    nombre: "Carne en vara",
    categoria: 4,
    precio: 6
  },
  {
    id: "14",
    nombre: "Cafe",
    categoria: 5,
    precio: 2
  },
  {
    id: "15",
    nombre: "Late vainilla",
    categoria: 5,
    precio: 2
  },
  {
    id: "16",
    nombre: "Capuchino",
    categoria: 5,
    precio: 2
  },
  {
    id: "17",
    nombre: "Helado de fresa",
    categoria: 2,
    precio: 2
  },
  {
    id: "18",
    nombre: "Helado de chocolate",
    categoria: 2,
    precio: 2
  },
  {
    id: "19",
    nombre: "Banana split",
    categoria: 2,
    precio: 4
  },
  {
    id: "20",
    nombre: "Helado de mantecado",
    categoria: 1,
    precio: 2
  },
  {
    id: "2d14",
    nombre: "cesar",
    precio: 10,
    categoria: 1
  }
];

// Conectar a MongoDB y agregar datos iniciales
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  console.log('Conectado a MongoDB');

  // Verificar si ya existen datos en la colección
  const existingData = await MenuItem.find();
  if (existingData.length === 0) {
    await MenuItem.insertMany(menuData);
    console.log('Datos iniciales insertados');
  } else {
    console.log('Datos ya existen en la colección');
  }

  mongoose.connection.close();
}).catch((err) => {
  console.error('Error al conectar a MongoDB:', err);
});
