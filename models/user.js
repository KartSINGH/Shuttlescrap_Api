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
    console.log("checkpoint1"+data_body.user_email);
    console.log(user);
    var check=false;
    user.find({
        where: {
            user_email: data_body.user_email
        }
       
    }).then((user) => {
        if (user) {
            check=false;
            console.log("check1"+check);
             console.log("checkpoint2"+data_body.user_email);
            response.send("Email id exists.Please login")
        } else {
            check=true;
         
        }
    })
    console.log("check2"+check);
    if(check){
       console.log("check3"+check);
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
    }else{
        
                response.send("user exists bro!")
    }
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

//for booking history of a single user,append email id of the user at the end of the string
router.get('/booking_history', (request, response) => {
    user_request.findAll({
        where: {
            user_email: request.query.user_email
        }
    }).then((user_request) => {
        console.log(user_request);
        response.send(user_request);

    })
})

//for changing the password of the user in the console panel
router.post('/change_password', (request, response) => {
    data_body = request.body;
    user.find({
        where: {
            user_email: data_body.user_email
        }
    }).then((user) => {
        if (user) {
            user.updateAttributes({
                user_password: data_body.user_password
            })
            response.send("password changed");
        }
    })
})
module.exports = router;