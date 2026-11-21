const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../src/app');
const Product = require('../src/models/Product');

// Mockeamos el modelo de Mongoose para no depender de una conexión real en pruebas unitarias
jest.mock('../src/models/Product');

process.env.JWT_SECRET = 'clave_test_secret';

describe('Pruebas unitarias de rutas y controladores de Productos', () => {
  let validToken;

  beforeAll(() => {
    // Generamos un token JWT válido para las pruebas
    validToken = jwt.sign({ id: '123', username: 'admin' }, process.env.JWT_SECRET);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('GET /api/productos debe rechazar acceso sin token (401)', async () => {
    const res = await request(app).get('/api/productos');
    expect(res.statusCode).toBe(401);
  });

  test('GET /api/productos debe devolver lista de productos con token válido (200)', async () => {
    const mockProducts = [
      { _id: '1', nombre: 'Guitarra', precio: 5000, stock: 10 }
    ];
    Product.find.mockResolvedValue(mockProducts);

    const res = await request(app)
      .get('/api/productos')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockProducts);
  });

  test('POST /api/productos debe rechazar datos inválidos con código 400', async () => {
    const res = await request(app)
      .post('/api/productos')
      .set('Authorization', `Bearer ${validToken}`)
      .send({ nombre: '', precio: -10 }); // Datos inválidos

    expect(res.statusCode).toBe(400);
  });

  test('DELETE /api/productos/:id debe devolver 404 si el producto no existe', async () => {
    Product.findByIdAndDelete.mockResolvedValue(null);

    const res = await request(app)
      .delete('/api/productos/999')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.statusCode).toBe(404);
  });
});