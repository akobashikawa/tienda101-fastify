const fp = require('fastify-plugin');
const sequelize = require('../sequelize-config');

async function sequelizePlugin(fastify, options) {
  fastify.decorate('sequelize', sequelize);

  // Conectar a la base de datos
  try {
    await sequelize.authenticate();
    fastify.log.info('sequelize OK');

    const models = require('../models')(sequelize);
    fastify.decorate('models', models);
    fastify.log.info('models OK');
  } catch (error) {
    fastify.log.error('sequelize KO: ', error);
  }

}

module.exports = fp(sequelizePlugin);