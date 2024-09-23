const express = require('express');
const cors = require('cors'); // Importa el paquete CORS
const app = express();

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middleware CORS para permitir solicitudes de otros orígenes
app.use(cors());
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
  // Renderizar la plantilla 'index.ejs'
  res.render('index', { title: 'Página de Inicio' });
});

// Una ruta que podría ser llamada desde otro origen
app.get('/api/data', (req, res) => {
  res.json({ message: 'Este es el mensaje desde la API' });
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
