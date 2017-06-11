var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),

    zones = connection.seq.define('zones', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        zone_name: {
            type: sequelize.STRING,
            allowNull: false,
        },
        sector_name: {
            type: sequelize.STRING,
            allowNull: false,
        },

    }, {
        freezeTableName: true,
        timestamps: true
    });


zones.sync();

/*****  Route for storing Zone Information *****/

router.post('/submit_zone', (request, response) => {
    data_body = request.body;
    console.log("Entering zone Data");
    zones.create({
        id: data_body.id,
        zone_name: data_body.zone_name,
        sector_name: data_body.sector_name,
    }).then(function (zone_name) {
        if (zone_name) {
            response.send("Zone Data Stored")
        } else {
            response.send("Error");
        }
    })
});

/*****  Route for fetching all zone info at once ******/

router.get('/all_zone_data', (request, response) => {
    zones.findAll()
        .then((zone) => {
            console.log("zone data fetched");
            response.send(zone);

        });
});
/***  Route for fetching zone name from sector ***/
router.post('/get_zone', (request, response) => {
    zones.findAll({
        where: {
            sector_name: request.body.sector_name
        }
    }).then(function (zone) {
        response.send(zone);
    });
});

router.post('/get_sector', (request, response) => {
    zones.findAll({
        where: {
            zone_name: request.body.zone_name
        }
    }).then(function (zone) {
        response.send(zone);
    });
});

/*** Route for zone of a sector ***/

router.post('/change_zone', (request, response) => {
    data_body = request.body;
    zones.find({
        where: {
            sector_name: data_body.sector_name
        }
    }).then((zones) => {
        if (zones) {
            zones.updateAttributes({
                zone_name: data_body.zone_name
            })
            response.send("Zone Changed");
        }
    })
})


module.exports = router;