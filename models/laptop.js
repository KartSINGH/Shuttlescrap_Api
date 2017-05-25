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
    });

     hard_drives = connection.seq.define('hard_drives', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        drive_size: {
            type: sequelize.STRING,
            allowNull: false,
        },
        drive_price: {
            type: sequelize.STRING,
            allowNull: false,
        },

    }, {
        freezeTableName: true,
        timestamps: true
    });

    processor = connection.seq.define('processor', {
        processor_id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        processor_name: {
            type: sequelize.STRING,
            allowNull: false,
        },
        processor_price: {
            type: sequelize.STRING,
            allowNull: false,
        },

    }, {
        freezeTableName: true,
        timestamps: true
    });

ram.sync();
hard_drives.sync();
processor.sync();

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




/*****  Route for storing Hard Drive Information *****/

router.post('/submit_hard_drive',(request, response) =>{
    data_body = request.body;
    console.log("Entering Data");
    hard_drives.create({
        id:data_body.id,
        drive_size:data_body.drive_size,
        drive_price:data_body.drive_price,
    }).then(function(drive_size){
        if(drive_size){
        response.send("Data Stored")
        }else{
            response.send("Error");
        }
    })
});

/*****  Route for fetching all HDD info at once ******/

router.get('/all_hard_drives',(request, response)=>{
    hard_drives.findAll()
    .then((hard_drives)=>{
         console.log("ok");
        response.send(hard_drives);
       
    });
});
/***  Route for fetching price of a specific HDD ***/
router.post('/get_hard_drive',(request, response)=>{
    hard_drives.findAll({
        where:{
            drive_size:request.body.drive_size
        }
    }).then(function(hard_drives){
        response.send(hard_drives);
    });
});

/*** Route for updating price of one single HDD size ***/

router.post('/change_hard_drive_price', (request, response) => {
    data_body = request.body;
    hard_drives.find({
        where: {
            drive_size: data_body.drive_size
        }
    }).then((hard_drives) => {
        if (hard_drives) {
            hard_drives.updateAttributes({
                drive_price: data_body.drive_price
            })
            response.send("HARD DRIVE Price Changed");
        }
    })
})



/*****  Route for storing Processor Information *****/

router.post('/submit_processor',(request, response) =>{
    data_body = request.body;
    console.log("Entering Data");
    processor.create({
        processor_id:data_body.processor_id,
        processor_name:data_body.processor_name,
        processor_price:data_body.processor_price,
    }).then(function(processor_name){
        if(processor_name){
        response.send("Data Stored")
        }else{
            response.send("Error");
        }
    })
});

/*****  Route for fetching all Processor info at once ******/

router.get('/all_processor',(request, response)=>{
    processor.findAll()
    .then((processor)=>{
         console.log("ok");
        response.send(processor);
       
    });
});
/***  Route for fetching price of a specific Processor ***/
router.post('/get_processor',(request, response)=>{
    processor.findAll({
        where:{
            processor_name:request.body.processor_name
        }
    }).then(function(processor){
        response.send(processor);
    });
});

/*** Route for updating price of one single Processor ***/

router.post('/change_processor_price', (request, response) => {
    data_body = request.body;
    processor.find({
        where: {
            processor_name: data_body.processor_name
        }
    }).then((processor) => {
        if (processor) {
            processor.updateAttributes({
                processor_price: data_body.processor_price
            })
            response.send("Processor Price Changed");
        }
    })
})
module.exports = router;