const express = require('express');
const { body } = require('express-validator');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

const productValidation = [
  body('nombre').notEmpty().withMessage('El nombre del producto es obligatorio.'),
  body('precio').isFloat({ min: 0 }).withMessage('El precio debe ser un número válido mayor o igual a 0.'),
  body('stock').optional().isInt({ min: 0 }).withMessage('El stock debe ser un número entero mayor o igual a 0.')
];

// Proteger todas las rutas de productos con JWT
router.use(authMiddleware);

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productValidation, productController.createProduct);
router.put('/:id', productValidation, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;