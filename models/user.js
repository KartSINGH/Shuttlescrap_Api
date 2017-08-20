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
        user_totalcredits: {
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
    },
    booking_credits: {
        type: sequelize.STRING,
        allowNull: false
    },
    payment_method: {
        type: sequelize.STRING,
        allowNull: false
    },
    paytm_number: {
        type:sequelize.STRING,
        allowNull:true
    },
    device_details: {
        type:sequelize.STRING,
        allowNull:true
    },
    bankaccount_details: {
        type: sequelize.STRING,
        allowNull: true
    },
    ifsc_details: {
        type: sequelize.STRING,
        allowNull: true
    },
    product_id: {
        type: sequelize.STRING,
        allowNull: true
    },
    booking_status: {
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
    var check = false;

    user.find({
        where: {
            user_email: data_body.user_email
        }

    }).then((user) => {
        if (user) {
            check = false;
           
            response.send("Email id exists.Please login")
        } else {
            check = true;

        }
    }).then(() => {
        if (check) {
            
            user.create({
                user_id: data_body.user_id,
                phone_number: data_body.phone_number,
                user_email: data_body.user_email,
                user_name: data_body.user_name,
                user_password: data_body.user_password,
                user_totalcredits: data_body.user_totalcredits
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
        } else {

            response.send("user exists!")
        }
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
        time: data_body.time,
        booking_credits: data_body.booking_credits,
        payment_method: data_body.payment_method,
        bankaccount_details: data_body.bankaccount_details,
        ifsc_details: data_body.ifsc_details,
        booking_status: data_body.booking_status,
        paytm_number:data_body.paytm_number,
        device_details:data_body.device_details,
        product_id:data_body.product_id
    }).then(function (user_name) {
        var name = user_name;
        var text1 = "Order has been booked by " + name.user_name + " ! "+name.scrap_amount+"kg is to be picked up from " + name.res_address +" on "+name.time;
         var text = "Greetings " + name.user_name + " from ShuttleScrap team! " + "Your request has been booked.You can contact our customer care team for clarifications and modifcations in your request.Thank You for choosing us.#keeprecycling #shuttlescrap";
        var transporter = nodemailer.createTransport({

            service: 'Godaddy',
            auth: {
                user: 'info@scrapp.in',
                pass: 'Rohan#123'
            },
        });
       
        var mailOptions = {
            to: name.user_email,
            from: 'info@scrapp.in',
            subject: 'ScrApp || Srcap Pickup Response',
            text: text
        }
        
         var transporter1 = nodemailer.createTransport({

            service: 'Godaddy',
            auth: {
                user: 'info@scrapp.in',
                pass: 'Rohan#123'
            },
        });
         var mailOptions1 = {
            to: 'info@shuttlescrap.com',
            from: 'info@scrapp.in',
            subject: 'Shuttlescrap || Srcap Pickup ',
            text: text1
        }
     
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                response.send(error)
            } else {
                transporter1.sendMail(mailOptions1, function (error, info) {
            if (error) {
                response.send(error)
            } else {
                response.send(user_name);
            }
        });
            }
        });  
    })
})

//for booking history of a single user,append email id of the user at the end of the string
router.post('/booking_history', (request, response) => {
    user_request.findAll({
        where: {
            user_email: request.body.user_email
        }
    }).then((user_request) => {
        
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

//for updating total credits of the user
router.post('/change_credits', (request, response) => {
    data_body = request.body;
    user.find({
        where: {
            user_email: data_body.user_email
        }
    }).then((user) => {
        if (user) {
            user.updateAttributes({
                user_totalcredits: data_body.user_totalcredits
            })
            response.send("Credits Updated")
        }
    })
})
//setting status of booking
router.post('/change_status', (request, response) => {
    data_body = request.body;
    user_request.find({
        where: {
            booking_id: data_body.booking_id
        }
    }).then((user_request) => {
        if (user_request) {
            user_request.updateAttributes({
                booking_status: data_body.booking_status
            })
            response.send("status changed")
        }
    })
})
//fetching specific record through booking_id
router.post('/get_booking', (request, response) => {
    data_body = request.body;
    user_request.find({
        where: {
            booking_id: data_body.booking_id
        }
    }).then((user_request) => {
        if (user_request) {
            response.send(user_request);
        } else {
            response.send("booking id not found")
        }

    })

})
// getting all the users
router.get('/all_users', (request, response) => {
    data_body = request.body;
    user.findAll()
        .then((user) => {
            response.send(user);
        })
})

// getting all bookings
router.get('/all_bookings',(request, response) => {
    data_body = request.body;
    user_request.findAll()
    .then((user_request)=>{
        response.send(user_request)
    })
})


//getting user id for password
router.post('/user', (request, response) => {

    data_body = request.body


    user.find({
        where: {
            user_email: data_body.user_email
        }
    }).then((user) => {
        if (user) {
            response.send(user);
        } else {
            response.send("error")
        }
    })
})

//getting user id for password
router.post('/forgot_password', (request, response) => {
    data_body = request.body
    user.find({
        where: {
            user_email: data_body.user_email
        }
    }).then((user) => {
        if (user) {
             
                var transporter = nodemailer.createTransport({

                    service: 'Gmail',
                    auth: {
                        user: 'kart.singh15@gmail.com',
                        pass: 'dragonballzee'
                    },
                });
                var text = "Password: " + user.user_password ;
                var mailOptions = {
                    to: user.user_email,
                    from: 'info@scrapp.in',
                    subject: 'ShuttleScrap || Forget Password',
                    text: text
                }
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        response.send(error)
                    } else {
                        response.send('Kindly Check Your Email for further Process');
                    }
                });
        } else {
            response.send("Mentioned Email does not exist")
        }
    })
})
module.exports = router;