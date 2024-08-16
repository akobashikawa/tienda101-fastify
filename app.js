const fastify = require('fastify');
const app = fastify({
    logger: {
        level: 'info',
        transport: {
            target: 'pino-pretty',
            options: {
            },
        }
    }
});
const cors = require('@fastify/cors');

const modelsConfig = require('./models-config');
const sequelizePlugin = require('./plugins/sequelize');

const productosRouter = require('./productos/productos-router');


app.register(sequelizePlugin, {
    sequelizeOptions: {
        dialect: 'sqlite',
        storage: ':memory:',
    },
    modelsConfig
});

// Configurar CORS
app.register(cors, {
    origin: '*', // Permitir todas las fuentes
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
});

// app.decorate('models', {});

app.addHook('onReady', () => {
    const sequelize = app.sequelize;
    sequelize.sync();
});

app.register(productosRouter, { prefix: '/api/productos' });

app.ready()
    .then(() => {
        app.log.info('app ready');
    });

module.exports = app;