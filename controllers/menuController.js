const express = require('express');
const MenuItem = require('../models/menuItem');
const router = express.Router();

// Crear item del menú
router.post('/', async (req, res) => {
  const { id, nombre, categoria, precio } = req.body;
  const newItem = new MenuItem({ id, nombre, categoria, precio });
  await newItem.save();
  res.status(201).send('Item creado exitosamente');
});

// Obtener todos los items del menú
router.get('/', async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
});

// Editar item del menú
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, categoria, precio } = req.body;
  await MenuItem.findOneAndUpdate({ id }, { nombre, categoria, precio });
  res.send('Item actualizado exitosamente');
});

// Eliminar item del menú
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await MenuItem.findOneAndDelete({ id });
  res.send('Item eliminado exitosamente');
});

module.exports = router;
