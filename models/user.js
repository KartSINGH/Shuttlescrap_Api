var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),

    user = connection.seq.define('user', {
        user_id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        phone_number: {
            type: sequelize.STRING,
            allowNull: false,
        },
        user_email: {
            type: sequelize.STRING,
            allowNull: false,
        },
        user_name: {
            type: sequelize.STRING,
            allowNull: false
        },
        user_password: {
            type: sequelize.STRING,
            allowNull: false
        },
        user_credits: {
            type: sequelize.STRING,
            allowNull: false
        },

    }, {
        freezeTableName: true,
        timestamps: true
    })
user_request = connection.seq.define('user_request', {
    user_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    res_address: {
        type: sequelize.STRING(1234),
        allowNull: false
    },
    scrap_amount: {
        type: sequelize.STRING,
        allowNull: false
    },
    time: {
        type: sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: true
})
user.sync();
user_request.sync();

module.exports = router;