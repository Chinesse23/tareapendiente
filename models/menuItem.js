const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: Number,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
