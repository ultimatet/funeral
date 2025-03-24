// models/index.js
const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const { database, username, password, host, dialect, port } = require('../config/config.json')['development'];

// Initialize Sequelize instance
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port,
  logging: false,
});

// Load models dynamically
const models = {};
fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    models[model.name] = model;
  });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
