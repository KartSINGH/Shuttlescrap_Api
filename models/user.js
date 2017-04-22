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
    booking_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_email: {
        type: sequelize.STRING,
        allowNull: false,
    },
    user_name: {
        type: sequelize.STRING,
        allowNull: false
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
//Route for submitting user deatils for registration
router.post('/submit_user', (request, response) => {
    data_body = request.body;
    user.create({
        user_id: data_body.user_id,
        phone_number: data_body.phone_number,
        user_email: data_body.user_email,
        user_name: data_body.user_name,
        user_password: data_body.user_password,
        user_credits: data_body.user_credits
    }).then(function (user_name) {
        var name = user_name;

        var transporter = nodemailer.createTransport({

            service: 'Gmail',
            auth: {
                user: 'kart.singh15@gmail.com',
                pass: 'dragonballzee'
            },
        });
        var text = "Greetings " + name.user_name + " from ScrApp team! " + "Your account has been succssfully opened with us.#keeprecycling #shuttlescrap";
        var mailOptions = {
            to: name.user_email,
            from: 'info@scrapp.in',
            subject: 'ScrApp || Srcap Pickup Response',
            text: text
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                response.send(error)
            } else {
                response.send('email sent');
            }
        });
    })
})
//Route for storing all the pickups initiated by all users
router.post('/submit_pickup', (request, response) => {
    data_body = request.body;
    user_request.create({
        booking_id: data_body.booking_id,
        user_email: data_body.user_email,
        user_name: data_body.user_name,
        res_address: data_body.res_address,
        scrap_amount: data_body.scrap_amount,
        time: data_body.time
    }).then(function (user_name) {
        var name = user_name;

        var transporter = nodemailer.createTransport({

            service: 'Gmail',
            auth: {
                user: 'kart.singh15@gmail.com',
                pass: 'dragonballzee'
            },
        });
        var text = "Greetings " + name.user_name + " from ScrApp team! " + "Your request has been booked.You can contact our customer care team for clarifications and modifcations in your request.Thank You for choosing us.#keeprecycling #shuttlescrap";
        var mailOptions = {
            to: name.user_email,
            from: 'info@scrapp.in',
            subject: 'ScrApp || Srcap Pickup Response',
            text: text
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                response.send(error)
            } else {
                response.send('booking email sent');
            }
        });
    })
})
module.exports = router;