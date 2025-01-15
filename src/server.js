// Importa la aplicación desde app.js
const app = require('./app');

// Configuración del puerto
const PORT = process.env.PORT || 3003;  // Usa el puerto 3003 si no se especifica otro

// Inicia el servidor y escucha en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
