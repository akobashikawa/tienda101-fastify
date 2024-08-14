const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

// const sequelize = require('./sequelize-config');
const productosRouter = require('./productos/productos-router');

// Configurar CORS
fastify.register(cors, {
    origin: '*', // Permitir todas las fuentes
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
});

fastify.register(productosRouter, { prefix: '/api' });

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: '0.0.0.0' });
        fastify.log.info(`Server corriendo en http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();