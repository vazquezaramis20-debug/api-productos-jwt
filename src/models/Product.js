const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  descripcion: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);