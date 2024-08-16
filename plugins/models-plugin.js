const fp = require('fastify-plugin');
const { Sequelize } = require('sequelize');

async function modelsPlugin(fastify, options) {

    const sequelize = new Sequelize(options.sequelizeOptions);

    fastify.decorate('sequelize', sequelize);

    // Conectar a la base de datos
    try {
        await sequelize.authenticate();
        fastify.log.info('sequelize OK');

        const models = options.modelsConfig(sequelize);
        fastify.decorate('models', models);
        fastify.log.info('models OK');
    } catch (error) {
        fastify.log.error('sequelize KO: ', error);
    }

}

module.exports = fp(modelsPlugin);