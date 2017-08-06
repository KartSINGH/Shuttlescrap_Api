var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),
    microwave = connection.seq.define('microwave', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            type: sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: sequelize.STRING,
            allowNull: true,
        },
        image: {
            type: sequelize.STRING,
            allowNull: true,
        },
        product_name: {
            type: sequelize.STRING,
            allowNull: true,
        },
        brand_name: {
            type: sequelize.STRING,
            allowNull: true
        }
    }, {
        freezeTableName: true,
        timestamps: true
    });
microwave.sync();
/*****  Route for storing microwave Information *****/
router.get('/submit_microwave', (request, response) => {
    var data_body = [{
            "price": "\nRs 13,400\n",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MC2841/LG_MC2841_S_1.jpg",
            "product_name": "LG MC2841"
        },
        {
            "price": "\nRs 15,280\n",
            "desc": ["Microwave", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_CD674M/Panasonic_NN_CD674M_S_1.jpg",
            "product_name": "Panasonic NN-CD674M"
        },
        {
            "price": "\nRs 10,989\n - ",
            "desc": ["Microwave", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_CT364B/Panasonic_NN_CT364B_S_1.jpg",
            "product_name": "Panasonic NN-CT364B"
        },
        {
            "price": "\nRs 5,700\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Whirlpool_Magicook_Classic/Whirlpool_Magicook_Classic_S_1.jpg",
            "product_name": "Whirlpool Magicook Classic"
        },
        {
            "price": "\nRs 19,999\n",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_DF383B/Panasonic_NN_DF383B_S_1.jpg",
            "product_name": "Panasonic NN-DF383B"
        },
        {
            "price": "\nRs 6,415\n",
            "desc": ["Oven"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MS2025/LG_MS2025_S_1.jpg",
            "product_name": "LG MS2025"
        },
        {
            "price": "\nRs 11,490\n - ",
            "desc": ["Microwave", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_CT644M/Panasonic_NN_CT644M_S_1.jpg",
            "product_name": "Panasonic NN-CT644M"
        },
        {
            "price": "\nRs 5,395\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Morphy_Richards_MWO_20/Morphy_Richards_MWO_20_S_1.jpg",
            "product_name": "Morphy Richards MWO 20"
        },
        {
            "price": "\nRs 7,385\n - ",
            "desc": ["Grill", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_GT221/Panasonic_NN_GT221_S_1.jpg",
            "product_name": "Panasonic NN-GT221"
        },
        {
            "price": "\nRs 5,890\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MS2021/LG_MS2021_S_1.jpg",
            "product_name": "LG MS2021"
        },
        {
            "price": "\nRs 11,590\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MC2143/LG_MC2143_S_1.jpg",
            "product_name": "LG MC2143"
        },
        {
            "price": "\nRs 8,799\n - ",
            "desc": ["Microwave"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Godrej_InstaCook_GMX_20CA3_MKZ/Godrej_InstaCook_GMX_20CA3_MKZ_S_1.jpg",
            "product_name": "Godrej InstaCook GMX 20CA3 MKZ"
        },
        {
            "price": "\nRs 7,499\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MH2044/LG_MH2044_S_1.jpg",
            "product_name": "LG MH2044"
        },
        {
            "price": "\nRs 9,955\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Morphy_Richards_MWO_25/Morphy_Richards_MWO_25_S_1.jpg",
            "product_name": "Morphy Richards MWO 25"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Microwave"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Godrej_InstaCook_GMX_23CA1_MKM/Godrej_InstaCook_GMX_23CA1_MKM_S_1.jpg",
            "product_name": "Godrej InstaCook GMX 23CA1 MKM"
        },
        {
            "price": "\nRs 13,600\n - ",
            "desc": ["Microwave"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Godrej_InstaCook_GMX_30CA1_SIM/Godrej_InstaCook_GMX_30CA1_SIM_S_1.jpg",
            "product_name": "Godrej InstaCook GMX 30CA1 SIM"
        },
        {
            "price": "\nRs 15,999\n - ",
            "desc": ["Microwave", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Whirlpool_Jet_Crisp_Steamtech/Whirlpool_Jet_Crisp_Steamtech_S_1.jpg",
            "product_name": "Whirlpool Jet Crisp Steamtech"
        },
        {
            "price": "\nRs 9,600\n - ",
            "desc": ["Grill", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Whirlpool_Magicook_1_2_3_Grill/Whirlpool_Magicook_1_2_3_Grill_S_1.jpg",
            "product_name": "Whirlpool Magicook 1-2-3 Grill"
        },
        {
            "price": "\nRs 8,765\n",
            "desc": ["Grill", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_GT342M/Panasonic_NN_GT342M_S_1.jpg",
            "product_name": "Panasonic NN-GT342M"
        },
        {
            "price": "\nRs 8,600\n - ",
            "desc": ["Microwave"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Godrej_MultiCuisine_GME_20CM1_MJZ/Godrej_MultiCuisine_GME_20CM1_MJZ_S_1.jpg",
            "product_name": "Godrej MultiCuisine GME 20CM1 MJZ"
        },
        {
            "price": "\nRs 11,499\n - ",
            "desc": ["Microwave", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Whirlpool_Jet_Crisp/Whirlpool_Jet_Crisp_S_1.jpg",
            "product_name": "Whirlpool Jet Crisp"
        },
        {
            "price": "\nRs 14,290\n",
            "desc": ["Microwave"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_CT662M/Panasonic_NN_CT662M_S_1.jpg",
            "product_name": "Panasonic NN-CT662M"
        },
        {
            "price": "\nRs 15,400\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MC2881/LG_MC2881_S_1.jpg",
            "product_name": "LG MC2881"
        },
        {
            "price": "\nRs 9,385\n - ",
            "desc": ["Oven"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Morphy_Richards_MWO_23/Morphy_Richards_MWO_23_S_1.jpg",
            "product_name": "Morphy Richards MWO 23 MCG"
        },
        {
            "price": "\nRs 14,990\n",
            "desc": ["Microwave"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_CT654M/Panasonic_NN_CT654M_S_1.jpg",
            "product_name": "Panasonic NN-CT654M"
        },
        {
            "price": "\nRs 6,699\n",
            "desc": ["Grill", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_GT231/Panasonic_NN_GT231_S_1.jpg",
            "product_name": "Panasonic NN-GT231"
        },
        {
            "price": "\nRs 15,000\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MC2844/LG_MC2844_S_1.jpg",
            "product_name": "LG MC2844"
        },
        {
            "price": "\nRs 16,882\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MC3283/LG_MC3283_S_1.jpg",
            "product_name": "LG MC3283"
        },
        {
            "price": "\nRs 7,590\n - ",
            "desc": ["Microwave", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Godrej_InstaCook_GMX_20CA5_MLZ/Godrej_InstaCook_GMX_20CA5_MLZ_S_1.jpg",
            "product_name": "Godrej InstaCook GMX 20CA5 MLZ"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MS2043/LG_MS2043_S_1.jpg",
            "product_name": "LG MS2043"
        },
        {
            "price": "\n-\n",
            "desc": ["Oven"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Onida_Digital_Power_Solo/Onida_Digital_Power_Solo_S_1.jpg",
            "product_name": "Onida MO17SJP21W"
        },
        {
            "price": "\nRs 12,980\n",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MC2144/LG_MC2144_S_1.jpg",
            "product_name": "LG MC2144"
        },
        {
            "price": "\nRs 10,285\n - ",
            "desc": ["Microwave"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Godrej_InstaCook_GMX_25CA1_MIZ/Godrej_InstaCook_GMX_25CA1_MIZ_S_1.jpg",
            "product_name": "Godrej InstaCook GMX 25CA1 MIZ"
        },
        {
            "price": "\nRs 5,699\n",
            "desc": ["Oven"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Onida_MO20GMP12B/Onida_MO20GMP12B_S_1.jpg",
            "product_name": "Onida MO20GMP12B"
        },
        {
            "price": "\nRs 10,724\n - ",
            "desc": ["Microwave", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_CT353B/Panasonic_NN_CT353B_S_1.jpg",
            "product_name": "Panasonic NN-CT353B"
        },
        {
            "price": "\nRs 8,400\n",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MH2046/LG_MH2046_S_1.jpg",
            "product_name": "LG MH2046"
        },
        {
            "price": "\nRs 20,500\n",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MJ3294/LG_MJ3294_S_1.jpg",
            "product_name": "LG MJ3294"
        },
        {
            "price": "\nRs 21,300\n",
            "desc": ["Microwave"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Whirlpool_Jet_Chef/Whirlpool_Jet_Chef_S_1.jpg",
            "product_name": "Whirlpool Jet Chef"
        },
        {
            "price": "\nRs 12,900\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MC2145/LG_MC2145_S_1.jpg",
            "product_name": "LG MC2145"
        },
        {
            "price": "\nRs 4,950\n",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Whirlpool_Magicook_Solo/Whirlpool_Magicook_Solo_S_1.jpg",
            "product_name": "Whirlpool Magicook Solo"
        },
        {
            "price": "\nRs 10,959\n - ",
            "desc": ["Oven"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Onida_MO23CSS11S/Onida_MO23CSS11S_S_1.jpg",
            "product_name": "Onida MO23CSS11S"
        },
        {
            "price": "\nRs 18,090\n",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MC2883/LG_MC2883_S_1.jpg",
            "product_name": "LG MC2883"
        },
        {
            "price": "\nRs 8,800\n",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MH2045/LG_MH2045_S_1.jpg",
            "product_name": "LG MH2045"
        },
        {
            "price": "\nRs 9,988\n - ",
            "desc": ["Microwave", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Panasonic_NN_CT254B/Panasonic_NN_CT254B_S_1.jpg",
            "product_name": "Panasonic NN-CT254B"
        },
        {
            "price": "\nRs 17,550\n - ",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MJ3283/LG_MJ3283_S_1.jpg",
            "product_name": "LG MJ3283"
        },
        {
            "price": "\nRs 7,491\n - ",
            "desc": ["Grill", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Whirlpool_Magicook_Deluxe/Whirlpool_Magicook_Deluxe_S_1.jpg",
            "product_name": "Whirlpool Magicook Deluxe"
        },
        {
            "price": "\nRs 8,500\n - ",
            "desc": ["Oven"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Onida_MO23CWS11S/Onida_MO23CWS11S_S_1.jpg",
            "product_name": "Onida MO23CWS11S"
        },
        {
            "price": "\nRs 16,768\n",
            "desc": ["Oven", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/LG_MC2884/LG_MC2884_S_1.jpg",
            "product_name": "LG MC2884"
        },
        {
            "price": "\nRs 7,199\n - ",
            "desc": ["Oven"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Onida_MO20CJP27B/Onida_MO20CJP27B_S_1.jpg",
            "product_name": "Onida MO20CJP27B"
        },
        {
            "price": "\nRs 23,500\n",
            "desc": ["Microwave"],
            "image": "http://image.priceprice.k-img.com/global/images/product/microwaveovens/Whirlpool_Jet_Cuisine_Nutritech/Whirlpool_Jet_Cuisine_Nutritech_S_1.jpg",
            "product_name": "Whirlpool Jet Cuisine Nutritech"
        }
    ]
    console.log("Entering Data");
    var a = {
        product_name: '',
        image: '',
        description: '',
        price: '',
        brand_name: ''
    }
    var b = [];
    for (var i = 0; i < data_body.length; i++) {

        var price = data_body[i].price.split('\n');
        var product_name = data_body[i].product_name;
        var image = data_body[i].image;
        var brand_name = data_body[i].product_name.split(' ');
        console.log("brand is " + brand_name);
        var brand_name1 = brand_name[0];
        var description = data_body[i].desc[0];

        if (price[1] != "-" && product_name != "-" && image != "-") {
            a.price = price[1];
            a.product_name = product_name;
            a.image = image;
            a.description = description;
            a.brand_name = brand_name1;

            b[i] = {
                price: a.price,
                product_name: a.product_name,
                image: a.image,
                description: a.description,
                brand_name: a.brand_name
            };
            microwave.create({
                price: b[i].price,
                product_name: b[i].product_name,
                description: b[i].description,
                image: b[i].image,
                brand_name: b[i].brand_name
            }).then(function (microwave) {
                if (microwave) {
                    console.log("Data Stored")
                } else {
                    console.log("Error");
                }
            })
        }

    }
    response.send("microwave Submission Done")

});

/*****  Route for fetching all microwave info at once ******/

router.get('/all_microwave', (request, response) => {
    microwave.findAll()
        .then((mobil) => {
            console.log("ok");
            response.send(mobil);

        });
});
/*****  Route for fetching all microwave of one brand ******/

router.post('/get_microwave_from_brand', (request, response) => {
    microwave.findAll({
            where: {
                brand_name: request.body.brand_name
            }
        })
        .then((microwave_data) => {
            console.log("ok");
            response.send(microwave_data);

        });
});
/*** Route for fetching single microwave by id */
router.post('/get_single_microwave', (request, response) => {
    microwave.findAll({
        where: {
            id: request.body.id
        }
    }).then((microwave) => {
        console.log(microwave);
        response.send(microwave);
    }).catch((error) => {
        alert(error)
    })
})
/***  Route for getting all brands available ***/
router.get('/get_microwave_brands', (request, response) => {
    microwave.findAll()
        .then(function (microwave) {
            var brands = []
            for (var i = 0; i < microwave.length; i++) {
                var already_present = false;
                if (i == 0) {
                    brands[i] = microwave[i].brand_name
                }
                for (var j = 0; j < i; j++) {
                    if (brands[j] == microwave[i].brand_name) {
                        already_present = true;
                    } else {
                        if (j == i - 1 && already_present == false) {
                            brands[brands.length] = microwave[i].brand_name
                        } else {

                        }
                    }
                }
            }
            response.send(brands);
        });
});
//route for getting number of devices in emicrowaveh brand
router.get('/get_count', (request, response) => {
    var brands = [
    "LG",
    "Panasonic",
    "Whirlpool",
    "Morphy",
    "Godrej",
    "Onida"
]
    var a = []
    var k = 0
    var check = false;
    for (var i = 0; i < brands.length; i++) {
        microwave.findAll({
                where: {
                    brand_name: brands[i]
                }
            }).then((microwave) => {
                a[k] = microwave.length + "," + microwave[0].brand_name

                k = k + 1;
            })
            .then(() => {
                console.log("length of a " + a.length)
                if (a.length == 6 && check == false) {
                    response.send(a)
                    check = true
                } else {
                    console.log("not sending response")
                }
            })
            .catch((error) => {
                response.send(error)
            })
    }

})
module.exports = router;