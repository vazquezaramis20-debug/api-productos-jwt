const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

const authValidation = [
  body('username').notEmpty().withMessage('El nombre de usuario es obligatorio.'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.')
];

router.post('/register', authValidation, authController.register);
router.post('/login', authValidation, authController.login);

module.exports = router;