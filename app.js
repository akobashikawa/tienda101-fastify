const fastify = require('fastify');
const app = fastify({
    // logger: {
    //     level: 'info',
    //     transport: {
    //         target: 'pino-pretty',
    //         options: {
    //         },
    //     }
    // },
    logger: true,
});
const cors = require('@fastify/cors');

const modelsPlugin = require('./plugins/models-plugin');
const repositoriesPlugin = require('./plugins/repositories-plugin');
const servicesPlugin = require('./plugins/services-plugin');
const productosRouter = require('./productos/productos-router');


// Configurar CORS
app.register(cors, {
    origin: '*', // Permitir todas las fuentes
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
});


// set app.sequelize
// set app.models
app.register(modelsPlugin);

// uses app.models
// set app.repositories
app.register(repositoriesPlugin);

// uses app.repositories
// set app.services
app.register(servicesPlugin);

// uses app.services
app.register(productosRouter, { prefix: '/api/productos' });

app.addHook('onReady', () => {
    const sequelize = app.sequelize;
    sequelize.sync();
});


app.ready()
    .then(() => {
        app.log.info('app ready');
    });

module.exports = app;