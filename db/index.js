const { Sequelize } = require('sequelize');

//set up of sequelize. set to be sqlite.
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/mySite.sqlite',
});

//creation of exported database object.
const db = {
    sequelize,
    Sequelize,
    models: {},
};

//creation of a model.
db.models.Message = require("./models/message.js")(sequelize);

module.exports = db;