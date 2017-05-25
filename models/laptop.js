var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),

    ram = connection.seq.define('ram', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ram_size: {
            type: sequelize.STRING,
            allowNull: false,
        },
        ram_price: {
            type: sequelize.STRING,
            allowNull: false,
        },

    }, {
        freezeTableName: true,
        timestamps: true
    })

ram.sync();

/*****  Route for storing Ram Information *****/

router.post('/submit_ram',(request, response) =>{
    data_body = request.body;
    console.log("Entering Data");
    ram.create({
        id:data_body.id,
        ram_size:data_body.ram_size,
        ram_price:data_body.ram_price,
    }).then(function(ram_size){
        if(ram_size){
        response.send("Data Stored")
        }else{
            response.send("Error");
        }
    })
});

/*****  Route for fetching all ram info at once ******/

router.get('/all_ram',(request, response)=>{
    ram.findAll()
    .then((ram)=>{
         console.log("ok");
        response.send(ram);
       
    });
});
/***  Route for fetching price of a specific ram ***/
router.post('/get_mobiles',(request, response)=>{
    ram.findAll({
        where:{
            ram_size:request.body.ram_size
        }
    }).then(function(ram){
        response.send(ram);
    });
});

/*** Route for updating price of one single ram size ***/

router.post('/change_ram_price', (request, response) => {
    data_body = request.body;
    ram.find({
        where: {
            ram_size: data_body.ram_size
        }
    }).then((ram) => {
        if (ram) {
            ram.updateAttributes({
                ram_price: data_body.ram_price
            })
            response.send("RAM Price Changed");
        }
    })
})

module.exports = router;