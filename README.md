# API de Productos con Node.js, Express, MongoDB Atlas y JWT

Aplicación backend desarrollada con Node.js y Express.js, conectada a MongoDB Atlas mediante Mongoose. Incluye autenticación con JWT, encriptación de contraseñas con bcryptjs, validaciones con express-validator, vista estática de login, pruebas unitarias con Jest y pipeline de CI/CD con GitHub Actions.

## Requisitos previos
- Node.js (v18 o superior)
- Cuenta y clúster en MongoDB Atlas

## Instalación y ejecución local
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/vazquezaramis20-debug/api-productos-jwt.git](https://github.com/vazquezaramis20-debug/api-productos-jwt.git)
   cd api-productos-jwt
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   PORT=3000
   MONGO_URI=tu_cadena_de_conexion_mongodb_atlas
   JWT_SECRET=tu_clave_secreta
   ```
4. Iniciar el servidor:
   ```bash
   npm start
   ```
5. Abrir la vista de login en el navegador: `http://localhost:3000`

## Pruebas unitarias
Para ejecutar las pruebas automatizadas con Jest:
```bash
npm test
```

## Endpoints principales
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión (devuelve token JWT)
- `GET /api/productos` - Listar productos (Requiere JWT)
- `GET /api/productos/:id` - Obtener producto por ID (Requiere JWT)
- `POST /api/productos` - Crear producto (Requiere JWT)
- `PUT /api/productos/:id` - Actualizar producto (Requiere JWT)
- `DELETE /api/productos/:id` - Eliminar producto (Requiere JWT)