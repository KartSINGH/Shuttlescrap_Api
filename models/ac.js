var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),

    ac = connection.seq.define('ac', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            type: sequelize.STRING,
            allowNull: true,
        },
        type: {
            type: sequelize.STRING,
            allowNull: true,
        },
        power: {
            type: sequelize.STRING,
            allowNull: true,
        },
        product_name: {
            type: sequelize.STRING,
            allowNull: true,
            
        },
        image: {
            type: sequelize.STRING,
            allowNull: true,
        },

    }, {
        freezeTableName: true,
        timestamps: true
    });


ac.sync();
/*****  Route for storing AC Information *****/

router.post('/submit_ac', (request, response) => {
    var data_body = request.body;
    console.log("Entering Data");
    var a = {
        price: '',
        product_name: '',
        type:'',
        image:''
    }
    var b = [];
    for (var i = 0; i < data_body.length; i++) {
        console.log(data_body);
        var price = data_body[i].price.split('\n');
        var product_name = data_body[i].product_name;
        var type = data_body[i].desc[0];
        var image = data_body[i].image;
        var power = data_body[i].desc[1]
        if (price[1] != "-" && product_name!="-" && type!="-" &&image!="-" &&power!="-") {
            a.price = price[1];
            a.product_name = product_name;
            a.type = type;
            a.image=image;
            a.power=power
            b[i] = {
                price: a.price,
                product_name: a.product_name,
                type:a.type,
                image:a.image,
                power:a.power
            };
            console.log(b[i]);
            console.log('\n');
            ac.create({
                price: b[i].price,
                product_name: b[i].product_name,
                type:b[i].type,
                power:b[i].power,
                image:b[i].image
            }).then(function (ac) {
                if (ac) {
                    console.log("Data Stored")
                } else {
                    console.log("Error");
                }
            })
        }

    }
    response.send("Done")

});

/*****  Route for fetching all ac info at once ******/

router.get('/all_ac', (request, response) => {
    ac.findAll()
        .then((ac) => {
            console.log("ok");
            response.send(ac);

        });
});
/***  Route for fetching price of a specific ac based on type ***/
router.post('/get_ac', (request, response) => {
    ac.findAll({
        where: {
            type: request.body.type
        }
    }).then(function (ac) {
        response.send(ac);
    });
});

router.post('/get_ac_product_name', (request, response) => {
    ac.findAll({
        where: {
            product_name: request.body.product_name
        }
    }).then(function (ac) {
        response.send(ac);
    });
});

module.exports = router;