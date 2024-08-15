const app = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

const productosRouter = require('./productos/productos-router');

// Configurar CORS
app.register(cors, {
    origin: '*', // Permitir todas las fuentes
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
});

app.register(productosRouter, { prefix: '/api' });


module.exports = app;