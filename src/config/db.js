const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Conecta usando la variable de entorno MONGO_URI
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión exitosa a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); // Detiene el servidor si falla la conexión
  }
};

module.exports = connectDB;