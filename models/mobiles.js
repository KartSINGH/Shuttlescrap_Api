var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),

    mobiles = connection.seq.define('mobiles', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            type: sequelize.STRING,
            allowNull: true,
        },
        screen_size: {
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
        os: {
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


mobiles.sync();
/*****  Route for storing AC Information *****/

router.get('/submit_mobiles', (request, response) => {
    var data_body = [{
            "price": "\nRs 8,999\n - ",
            "desc": ["Smartphone, MIUI 8(Android OS v6.0 Mars...", "5.0 inches, 720 x 1280 pixels (~294 ppi...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_3S_Prime/Xiaomi_Redmi_3S_Prime_S_1.jpg",
            "product_name": "Xiaomi Redmi 3S Prime"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, MIUI 8 with Android OS, v6....", "5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_4a/Xiaomi_Redmi_4a_S_1.jpg",
            "product_name": "Xiaomi Redmi 4A"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 M...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 64GB, 32GB, 2GB, 3GB,...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Note_4/Xiaomi_Redmi_Note_4_S_1.jpg",
            "product_name": "Xiaomi Redmi Note 4"
        },
        {
            "price": "\nRs 8,939\n - ",
            "desc": ["Smartphone, ColorOS 3.0, based on Andro...", "5 inches, HD (1280 by 720 pixels)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_A37/OPPO_A37_S_1.jpg",
            "product_name": "OPPO A37"
        },
        {
            "price": "\nRs 7,799\n - ",
            "desc": ["Smartphone, ColorOS 2.1, Android 5.1", "5.00 inches, 960 x 540", "2G, 3G, 4G (LTE), 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_Neo_7/OPPO_Neo_7_S_1.jpg",
            "product_name": "OPPO Neo 7"
        },
        {
            "price": "\nRs 13,449\n - ",
            "desc": ["Smartphone, ColorOS 3.0, based on Andro...", "5.2 inches, HD (1280 by 720 pixels)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_A57/OPPO_A57_S_1.jpg",
            "product_name": "OPPO A57"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, MIUI 8(Android OS, v6.0.1 M...", "5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_3s/Xiaomi_Redmi_3s_S_1.jpg",
            "product_name": "Xiaomi Redmi 3S"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_2/Xiaomi_Redmi_2_S_1.jpg",
            "product_name": "Xiaomi Redmi 2 16GB"
        },
        {
            "price": "\nRs 8,999\n",
            "desc": ["Smartphone, MIUI 8 with Android OS, v6....", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_4/Xiaomi_Redmi_4_S_1.jpg",
            "product_name": "Xiaomi Redmi 4"
        },
        {
            "price": "\nRs 16,154\n - ",
            "desc": ["Smartphone, iOS 8", "4.7 inches, 1334 x 750", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone6/Apple_iPhone6_S_1.jpg",
            "product_name": "Apple iPhone 6 16GB"
        },
        {
            "price": "\nRs 15,899\n - ",
            "desc": ["Phablet, Smartphone, Color OS 3.0(Andro...", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_F1s/OPPO_F1s_S_1.jpg",
            "product_name": "OPPO F1s"
        },
        {
            "price": "\nRs 17,495\n - ",
            "desc": ["Smartphone, Phablet, ColorOS 3.0, based...", "5.5 inches, 1920 x 1080 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_F3/OPPO_F3_S_1.jpg",
            "product_name": "OPPO F3"
        },
        {
            "price": "\nRs 11,999\n",
            "desc": ["Phablet, Smartphone, MIUI 7.0, Android ...", "5.5 inches (~72.4% screen-to-body ratio)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Note_3/Xiaomi_Redmi_Note_3_S_1.jpg",
            "product_name": "Xiaomi Redmi Note 3 32GB"
        },
        {
            "price": "\nRs 9,490\n - ",
            "desc": ["Phablet, Smartphone, miui8 based on and...", "5.5 inches, 1920 x 1080 pixels", "2G, 3G, 4G (LTE), 64GB, 32GB, 4GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Note_4X/Xiaomi_Redmi_Note_4X_S_1.jpg",
            "product_name": "Xiaomi Redmi Note 4X"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, iOS 5", "3.5 inches, 960 x 640", "2G, 3G, 16GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_4s/Apple_iPhone_4s_S_1.jpg",
            "product_name": "Apple iPhone 4s 16GB"
        },
        {
            "price": "\nRs 6,299\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_2/Xiaomi_Redmi_2_S_1.jpg",
            "product_name": "Xiaomi Redmi 2 8GB"
        },
        {
            "price": "\nRs 12,440\n",
            "desc": ["Smartphone, Funtouch OS 2.6 Based on An...", "5.20 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y55/Vivo_Y55_S_1.jpg",
            "product_name": "Vivo Y55"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android v7.0 (Noug...", "5.70 inches, 2560x1140", "2G, 3G, 4G (LTE), 128GB, 64GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_honor_V9/Huawei_honor_V9_S_1.jpg",
            "product_name": "Honor 8 Pro"
        },
        {
            "price": "\nRs 29,077\n - ",
            "desc": ["Smartphone, iOS 10", "4.7 inches, 1334 x 750 pixel", "2G, 3G, 4G (LTE), 128GB, 256GB, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_7_/Apple_iPhone_7__S_1.jpg",
            "product_name": "Apple iPhone 7"
        },
        {
            "price": "\nRs 8,490\n",
            "desc": ["Smartphone, Color OS v1.4 Android OS, v...", "4.50 inches, 480 x 854 pixels (~218 ppi...", "2G, 3G, 4G (LTE), 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_Neo5/Oppo_Neo5_S_1.jpg",
            "product_name": "OPPO Neo 5"
        },
        {
            "price": "\nRs 12,923\n - ",
            "desc": ["Smartphone, iOS 7", "4 inches, 1136 x 640", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_5s/Apple_iPhone_5s_S_1.jpg",
            "product_name": "Apple iPhone 5s 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, MIUI 8 with Android OS, v6....", "5.0 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_4_and_4_Prime_PH/Xiaomi_Redmi_4_and_4_Prime_PH_S_1.jpg",
            "product_name": "Xiaomi Redmi 4 Prime"
        },
        {
            "price": "\nRs 26,395\n - ",
            "desc": ["Phablet, Smartphone, Color OS 3.0\r\nbase...", "6 inches, Full HD (1920 x 1080)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_F3_Plus/OPPO_F3_Plus_S_1.jpg",
            "product_name": "OPPO F3 Plus"
        },
        {
            "price": "\nRs 16,988\n - ",
            "desc": ["Smartphone, iOS 6", "4 inches, 1136 x 640", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_5/Apple_iPhone_5_S_1.jpg",
            "product_name": "Apple iPhone 5 16GB"
        },
        {
            "price": "\nRs 15,999\n - ",
            "desc": ["Smartphone, ColorOS 2.1, based on Andro...", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_F1/OPPO_F1_S_1.jpg",
            "product_name": "OPPO F1"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, MIUI 5.0 with Andr...", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Note_4G/Xiaomi_Redmi_Note_4G_S_1.jpg",
            "product_name": "Xiaomi Redmi Note 4G"
        },
        {
            "price": "\nRs 6,421\n - ",
            "desc": ["Smartphone, ColorOS 2.0.1, Android 4.4.2", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_Neo5_2015/Oppo_Neo5_2015_S_1.jpg",
            "product_name": "OPPO Neo 5 (2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.3 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_4/Xiaomi_Mi_4_S_1.jpg",
            "product_name": "Xiaomi Mi 4 64GB"
        },
        {
            "price": "\nRs 10,990\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v5.1 (...", "5.50 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_GalaxyJ7_2016/Samsung_GalaxyJ7_2016_S_1.jpg",
            "product_name": "Samsung Galaxy J7 (2016)"
        },
        {
            "price": "\nRs 7,120\n - ",
            "desc": ["Smartphone, Android 5.1.1 Lollipop", "4.7 inches, 540 x 960", "2G, 3G, 4G (LTE), 8GB, 1GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J2/Samsung_Galaxy_J2_S_1.jpg",
            "product_name": "Samsung Galaxy J2 (2015)"
        },
        {
            "price": "\nRs 13,999\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_MI3/Xiaomi_MI3_S_1.jpg",
            "product_name": "Xiaomi Mi 3 16GB"
        },
        {
            "price": "\nRs 9,799\n - ",
            "desc": ["Phablet, Smartphone, MIUI 7.0, Android ...", "5.5 inches (~72.4% screen-to-body ratio)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Note_3/Xiaomi_Redmi_Note_3_S_1.jpg",
            "product_name": "Xiaomi Redmi Note 3 16GB"
        },
        {
            "price": "\nRs 14,999\n",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "6.44 inches, 1080x1920 pixels", "2G, 3G, 4G (LTE), 128GB, 32GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_Max/Xiaomi_Mi_Max_S_1.jpg",
            "product_name": "Xiaomi Mi Max"
        },
        {
            "price": "\nRs 6,790\n - ",
            "desc": ["Smartphone, Funtouch OS 2.5 (Based on A...", "4.5 inches, 480\u00d7854 pixels", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y21L/Vivo_Y21L_S_1.jpg",
            "product_name": "Vivo Y21L"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, MIUI 7.0 Android OS, v5.1 (...", "5.00 inches, 720 x 1280", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_3/Xiaomi_Redmi_3_S_1.jpg",
            "product_name": "Xiaomi Redmi 3"
        },
        {
            "price": "\nRs 20,000\n",
            "desc": ["Phablet, Android 2.1 Eclair", "6.0inches, FHD (1920 by 1080 pixels)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_R7_Plus/OPPO_R7_Plus_S_1.jpg",
            "product_name": "OPPO R7 Plus"
        },
        {
            "price": "\nRs 6,990\n",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "4.5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_Neo/Oppo_Neo_S_1.jpg",
            "product_name": "OPPO Neo"
        },
        {
            "price": "\nRs 14,490\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0.1...", "5.5 inches, 1080 x 1920 pixels (~401 pp...", "2G, 3G, 4G (LTE), 32GB, 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J7_Prime/Samsung_Galaxy_J7_Prime_S_1.jpg",
            "product_name": "Samsung Galaxy J7 Prime"
        },
        {
            "price": "\nRs 16,154\n - ",
            "desc": ["Smartphone, iOS 7", "4 inches, 1136 x 640", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_5s/Apple_iPhone_5s_S_1.jpg",
            "product_name": "Apple iPhone 5s 32GB"
        },
        {
            "price": "\nRs 19,994\n - ",
            "desc": ["Phablet, Smartphone, v5.1 (Lollipop) Co...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_F1_Plus/OPPO_F1_Plus_S_1.jpg",
            "product_name": "OPPO F1 Plus"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.7 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Spark_Q380/Micromax_Canvas_Spark_Q380_S_1.jpg",
            "product_name": "Micromax Canvas Spark Q380"
        },
        {
            "price": "\nRs 43,790\n",
            "desc": ["Phablet, Smartphone, MIUI 8.0 Android O...", "6.4 inches, 1080 x 2040 pixels (~362 pp...", "2G, 3G, 4G (LTE), 128GB, 256GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_Mix/Xiaomi_Mi_Mix_S_1.jpg",
            "product_name": "Xiaomi Mi MIX"
        },
        {
            "price": "\nRs 17,999\n - ",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "5.7 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_3/Samsung_Galaxy_Note_3_S_1.jpg",
            "product_name": "Samsung Galaxy Note 3 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0", "5.5 inches, 1080 x 1920 pixel", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J7_2017/Samsung_Galaxy_J7_2017_S_1.jpg",
            "product_name": "Samsung Galaxy J7 (2017)"
        },
        {
            "price": "\nRs 8,469\n",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "4.7 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_R2001_Yoyo/Oppo_R2001_Yoyo_S_1.jpg",
            "product_name": "OPPO R2001 Yoyo"
        },
        {
            "price": "\nRs 6,300\n - ",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_R1001_Joy/Oppo_R1001_Joy_S_1.jpg",
            "product_name": "OPPO R1001 Joy"
        },
        {
            "price": "\nRs 4,740\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5 inches, 854 x 480 Screen Resolution", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Spark_2_Q334/Micromax_Canvas_Spark_2_Q334_S_1.jpg",
            "product_name": "Micromax Canvas Spark 2 Q334"
        },
        {
            "price": "\nRs 39,400\n",
            "desc": ["Smartphone", "5.15 inches, 1920\u00d71080", "2G, 3G, 4G (LTE), 128GB, 64GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi6/Xiaomi_Mi6_S_1.jpg",
            "product_name": "Xiaomi Mi 6"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, MIUI 8.0 (Android ...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 128GB, 32GB, 64GB, 3G...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Pro/Xiaomi_Redmi_Pro_S_1.jpg",
            "product_name": "Xiaomi Redmi Pro"
        },
        {
            "price": "\nRs 29,077\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0 (Marsh...", "5.50 inches, 2560\u00d71440 Super AMOLED", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S7_Edge/Samsung_Galaxy_S7_Edge_S_1.jpg",
            "product_name": "Samsung Galaxy S7 edge"
        },
        {
            "price": "\nRs 11,999\n",
            "desc": ["Smartphone, MIUI 6 Based on Android L", "5 inches, 1920 x 1080 resolution, 175 P...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_4i/Xiaomi_Mi_4i_S_1.jpg",
            "product_name": "Xiaomi Mi 4i 16GB"
        },
        {
            "price": "\nRs 10,650\n - ",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.5 inches, 720 x 1280 (HD)", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J7_1/Samsung_Galaxy_J7_1_S_1.jpg",
            "product_name": "Samsung Galaxy J7 (2015)"
        },
        {
            "price": "\nRs 14,490\n - ",
            "desc": ["Smartphone, Android 7.0+EMUI 5.0", "5.2 inches, FHD (1920 x 1080)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_8_Lite/Huawei_Honor_8_Lite_S_1.jpg",
            "product_name": "Honor 8 lite"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Google Android 7.0...", "6.00 inches, FHD (1920 x 1080)", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_XA1_Ultra/Sony_Xperia_XA1_Ultra_S_1.jpg",
            "product_name": "Sony Xperia XA1 Ultra"
        },
        {
            "price": "\nRs 14,640\n - ",
            "desc": ["Phablet, Smartphone, Funtouch OS 2.6 (b...", "5.50 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_V5/Vivo_V5_S_1.jpg",
            "product_name": "Vivo V5"
        },
        {
            "price": "\nRs 19,385\n - ",
            "desc": ["Smartphone, iOS 8", "4.7 inches, 1334 x 750", "2G, 3G, 4G (LTE), 64GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone6/Apple_iPhone6_S_1.jpg",
            "product_name": "Apple iPhone 6 64GB"
        },
        {
            "price": "\nRs 9,490\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0.1...", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_On7_2016/Samsung_Galaxy_On7_2016_S_1.jpg",
            "product_name": "Samsung Galaxy On7 Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, iOS11", "4.7 inches, 1,920 x 1,080 pixel", "2G, 3G, 4G (LTE), 128GB, 256GB, 32GB, 6...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_8/Apple_iPhone_8_S_1.jpg",
            "product_name": "Apple iPhone 8"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Nokia Series 30+", "2.40 inches, 240 x 320 pixels (~167 ppi...", "2G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_3310_2017/Nokia_3310_2017_S_1.jpg",
            "product_name": "Nokia 3310 (2017)"
        },
        {
            "price": "\nRs 6,499\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.00-inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 8GB, 16GB, 1GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/panasonic_eluga_i2/panasonic_eluga_i2_S_1.jpg",
            "product_name": "Panasonic Eluga I2"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android N", "5.50 inches, 720p HD", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_L1/Sony_Xperia_L1_S_1.jpg",
            "product_name": "Sony Xperia L1"
        },
        {
            "price": "\nRs 5,295\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "4.7 inches, 720 x 1280", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/YU_YU4711/YU_YU4711_S_1.jpg",
            "product_name": "YU YU4711"
        },
        {
            "price": "\nRs 8,999\n",
            "desc": ["Phablet, Android 4.4.4 KitKat", "1280 x 720", "2G, 3G, 4G (LTE)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/YU_Yureka_A05510/YU_Yureka_A05510_S_1.jpg",
            "product_name": "YU Yureka A05510"
        },
        {
            "price": "\nRs 37,650\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Note_2/Xiaomi_Redmi_Note_2_S_1.jpg",
            "product_name": "Xiaomi Redmi Note 2"
        },
        {
            "price": "\nRs 10,240\n - ",
            "desc": ["Smartphone, Android OS, v5.1 (Lollipop)", "5.20 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_GalaxyJ5_2016/Samsung_GalaxyJ5_2016_S_1.jpg",
            "product_name": "Samsung Galaxy J5 (2016)"
        },
        {
            "price": "\nRs 8,350\n",
            "desc": ["Phablet, Smartphone, MIUI 7, Android OS...", "5.5 inches, 1280x720 HD 720p", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Note_Prime/Xiaomi_Redmi_Note_Prime_S_1.jpg",
            "product_name": "Xiaomi Redmi Note Prime"
        },
        {
            "price": "\nRs 19,385\n - ",
            "desc": ["Smartphone, iOS 7 ", "4 inches, 1136 x 640", "2G, 3G, 4G (LTE), 64GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_5s/Apple_iPhone_5s_S_1.jpg",
            "product_name": "Apple iPhone 5s 64GB"
        },
        {
            "price": "\nRs 17,990\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "5.0 inches, HD (1280 by 720 pixels)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_R7_Lite/OPPO_R7_Lite_S_1.jpg",
            "product_name": "OPPO R7 Lite"
        },
        {
            "price": "\nRs 11,149\n - ",
            "desc": ["Smartphone, Funtouch OS 3.0 (based on A...", "5.2 inches, 1280 x 720 HD", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_y55s/Vivo_y55s_S_1.jpg",
            "product_name": "Vivo Y55s"
        },
        {
            "price": "\nRs 25,900\n",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "5.9 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_N1/OPPO_N1_S_1.jpg",
            "product_name": "OPPO N1 16GB"
        },
        {
            "price": "\nRs 13,990\n - ",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_R1_R829T/Oppo_R1_R829T_S_1.jpg",
            "product_name": "OPPO R1 R829T"
        },
        {
            "price": "\nRs 19,385\n - ",
            "desc": ["Phablet", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_6_Plus/Apple_iPhone_6_Plus_S_1.jpg",
            "product_name": "Apple iPhone 6 Plus 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 5.1.1 Loll...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_Play/Motorola_Moto_X_Play_S_1.jpg",
            "product_name": "Motorola Moto X Play (XT1562) 32GB"
        },
        {
            "price": "\nRs 8,790\n - ",
            "desc": ["Smartphone, Funtouch OS 2.5 Based on An...", "5 inches, 960 * 540 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y51L/Vivo_Y51L_S_1.jpg",
            "product_name": "Vivo Y51L"
        },
        {
            "price": "\nRs 19,990\n - ",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "6.4 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_Z_Ultra/Sony_Xperia_Z_Ultra_S_1.jpg",
            "product_name": "Sony Xperia Z Ultra"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, ColorOS, based on Android 4.3", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_N1_mini_2/Oppo_N1_mini_2_S_1.jpg",
            "product_name": "OPPO N1 mini"
        },
        {
            "price": "\nRs 8,999\n - ",
            "desc": ["Smartphone, Phablet, Android 5.1", "5.5 inches, 1080x1920 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_6/Micromax_Canvas_6_S_1.jpg",
            "product_name": "Micromax Canvas 6 E485"
        },
        {
            "price": "\nRs 32,308\n - ",
            "desc": ["Phablet, Smartphone, iOS 10", "5.5 inches, 1920 x 1080 pixel", "2G, 3G, 4G (LTE), 128GB, 256GB, 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_7_Plus_/Apple_iPhone_7_Plus__S_1.jpg",
            "product_name": "Apple iPhone 7 Plus"
        },
        {
            "price": "\nRs 15,158\n",
            "desc": ["Smartphone, Color OS 2.1 Android OS, v5...", "5.00 inches, 540 x 960 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_Mirror_5s/OPPO_Mirror_5s_S_1.jpg",
            "product_name": "OPPO Mirror 5"
        },
        {
            "price": "\nRs 7,699\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Grand_Prime/Samsung_Galaxy_Grand_Prime_S_1.jpg",
            "product_name": "Samsung Galaxy Grand Prime"
        },
        {
            "price": "\nRs 10,450\n - ",
            "desc": ["Smartphone, Funtouch OS 2.6 (based on A...", "5.2 inches, 1280 x 720 HD", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y55L/Vivo_Y55L_S_1.jpg",
            "product_name": "Vivo Y55L"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_Neo_3_R831K/Oppo_Neo_3_R831K_S_1.jpg",
            "product_name": "OPPO Neo 3"
        },
        {
            "price": "\nRs 12,199\n - ",
            "desc": ["Smartphone, Asus ZenUI(Android OS, v6.0...", "5.2 inches, 720 x 1280 pixels (~282 ppi...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_zenfone_3_Max_/ASUS_zenfone_3_Max__S_1.jpg",
            "product_name": "ASUS ZenFone 3 Max ZC520TL"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.3 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_4/Xiaomi_Mi_4_S_1.jpg",
            "product_name": "Xiaomi Mi 4 16GB"
        },
        {
            "price": "\nRs 8,380\n - ",
            "desc": ["Smartphone", "5.0 inches, 540 x 960 (qHD)", "4G (LTE), 2G, 3G, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J2_Ace/Samsung_Galaxy_J2_Ace_S_1.jpg",
            "product_name": "Samsung Galaxy J2 Ace"
        },
        {
            "price": "\nRs 9,349\n - ",
            "desc": ["Phablet, Smartphone, Android 5.1", "5.5 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Mega_4G_Q417/Micromax_Canvas_Mega_4G_Q417_S_1.jpg",
            "product_name": "Micromax Canvas Mega 4G Q417"
        },
        {
            "price": "\nRs 9,990\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches, 720 x 1280", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_GalaxyJ5/Samsung_GalaxyJ5_S_1.jpg",
            "product_name": "Samsung Galaxy J5 (2015)"
        },
        {
            "price": "\nRs 5,990\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.3 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J1_2015/Samsung_Galaxy_J1_2015_S_1.jpg",
            "product_name": "Samsung Galaxy J1 (2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Note_2/Xiaomi_Redmi_Note_2_S_1.jpg",
            "product_name": "Xiaomi Redmi Note 2 Prime"
        },
        {
            "price": "\nRs 53,475\n",
            "desc": ["Smartphone, iOS 5", "3.5 inches, 960 x 640", "2G, 3G, 64GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_4s/Apple_iPhone_4s_S_1.jpg",
            "product_name": "Apple iPhone 4s 64GB"
        },
        {
            "price": "\nRs 8,890\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_Z1/Sony_Xperia_Z1_S_1.jpg",
            "product_name": "Sony Xperia Z1"
        },
        {
            "price": "\nRs 16,699\n - ",
            "desc": ["Smartphone, Phablet, Funtouch OS 3.0 op...", "5.5 inches, HD Display (1280 x 720 pixels)", "2G, 3G, 4G (LTE)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_V5s/Vivo_V5s_S_1.jpg",
            "product_name": "Vivo V5s"
        },
        {
            "price": "\nRs 12,999\n - ",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_E7/Samsung_Galaxy_E7_S_1.jpg",
            "product_name": "Samsung Galaxy E7"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S4_i9505/Samsung_Galaxy_S4_i9505_S_1.jpg",
            "product_name": "Samsung Galaxy S4 I9505 16GB"
        },
        {
            "price": "\nRs 25,846\n - ",
            "desc": ["Smartphone, iOS 10", "4.7 inches, 1334 x 750-pixel resolution...", "2G, 3G, 4G (LTE), 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_6s/Apple_iPhone_6s_S_1.jpg",
            "product_name": "Apple iPhone 6s 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "6.0 inches, 2560 x 1440 pixels", "2G, 3G, 4G (LTE), 256GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Z2_Poseidon/ASUS_Z2_Poseidon_S_1.jpg",
            "product_name": "ASUS Z2 Poseidon"
        },
        {
            "price": "\nRs 21,999\n - ",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.7 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_4/Samsung_Galaxy_Note_4_S_1.jpg",
            "product_name": "Samsung Galaxy Note 4"
        },
        {
            "price": "\nRs 15,890\n - ",
            "desc": ["Phablet, Smartphone, Amigo OS 4.0 with ...", "5.50 inches (13.97cm), 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_A1a/Gionee_A1a_S_1.jpg",
            "product_name": "Gionee A1"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android OS v7.1.1 ...", "6.44 inches, 1080 x 1920 pixels\r\n(~342 ...", "2G, 3G, 4G (LTE), 128GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_Max_2/Xiaomi_Mi_Max_2_S_1.jpg",
            "product_name": "Xiaomi Mi Max 2"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, BlackBerry OS 6.0", "400 x 360", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Style_9670/BlackBerry_Style_9670_S_1.jpg",
            "product_name": "BlackBerry Style 9670"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone", "6 inches, 1920x1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_C6_Ultra/SONY_Xperia_C6_Ultra_S_1.jpg",
            "product_name": "Sony Xperia C6 Ultra"
        },
        {
            "price": "\nRs 4,199\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Selfie_Lens_Q345/Micromax_Canvas_Selfie_Lens_Q345_S_1.jpg",
            "product_name": "Micromax Canvas Selfie Lens Q345"
        },
        {
            "price": "\nRs 9,690\n",
            "desc": ["Smartphone, MIUI 8 with Android OS, v6....", "5 inches, 720 x 1280", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_4X/Xiaomi_Redmi_4X_S_1.jpg",
            "product_name": "Xiaomi Redmi 4X"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1", "4.7 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Fire_4G_plus/Micromax_Canvas_Fire_4G_plus_S_1.jpg",
            "product_name": "Micromax Canvas Fire 4G+ Q412"
        },
        {
            "price": "\nRs 18,729\n - ",
            "desc": ["Smartphone, Google Android N", "5.00 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_XA1/Sony_Xperia_XA1_S_1.jpg",
            "product_name": "Sony Xperia XA1"
        },
        {
            "price": "\nRs 22,615\n - ",
            "desc": ["Smartphone, iOS 10", "4.7 inches, 1334 x 750-pixel resolution...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_6s/Apple_iPhone_6s_S_1.jpg",
            "product_name": "Apple iPhone 6s 16GB"
        },
        {
            "price": "\nRs 18,990\n - ",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A7/Samsung_Galaxy_A7_S_1.jpg",
            "product_name": "Samsung Galaxy A7 (2015)"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.5 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Core_Prime/Samsung_Galaxy_Core_Prime_S_1.jpg",
            "product_name": "Samsung Galaxy Core Prime"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v6.0.1 (Marshma...", "5.2 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_C5/Samsung_Galaxy_C5_S_1.jpg",
            "product_name": "Samsung Galaxy C5"
        },
        {
            "price": "\nRs 7,149\n",
            "desc": ["Smartphone, Tizen OS 2.3", "5.0 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Z3/Samsung_Z3_S_1.jpg",
            "product_name": "Samsung Z3"
        },
        {
            "price": "\nRs 18,999\n - ",
            "desc": ["Phablet, Smartphone, Android Marshmallo...", "6.44 inches, Full HD (1920 x 1080)", "2G, 3G, 4G (LTE), 128GB, 32GB, 64GB, 4G...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_Max/Xiaomi_Mi_Max_S_1.jpg",
            "product_name": "Xiaomi Mi Max Prime"
        },
        {
            "price": "\nRs 6,499\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micoromax_Canvas_Nitro_4G_E455/Micoromax_Canvas_Nitro_4G_E455_S_1.jpg",
            "product_name": "Micromax Canvas Nitro 4G E455"
        },
        {
            "price": "\nRs 9,299\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5.5 inches (~70.8% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone2_Laser_ZE550KL/ASUS_Zenfone2_Laser_ZE550KL_S_1.jpg",
            "product_name": "ASUS ZenFone 2 Laser ZE550KL"
        },
        {
            "price": "\nRs 22,750\n - ",
            "desc": ["Phablet, Smartphone, Funtouch OS 3.0 (b...", "5.50 inches, FHD (1920 x 1080)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/vivo_V5_Plus/vivo_V5_Plus_S_1.jpg",
            "product_name": "Vivo V5Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, MIUI(Android OS, v6.0 Marsh...", "5.15 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 128GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_5s/Xiaomi_Mi_5s_S_1.jpg",
            "product_name": "Xiaomi Mi 5s"
        },
        {
            "price": "\nRs 3,499\n",
            "desc": ["Feature Phone, Proprietary OS", "2.4 inches, 240 x 320", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Metro_Duos_B360E/Samsung_Metro_Duos_B360E_S_1.jpg",
            "product_name": "Samsung Metro Duos B360E"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Phablet, Android OS, v7.1 (...", "5.5 inches, 4K HDR 3840 x 2160 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_XZ_Premium/Sony_Xperia_XZ_Premium_S_1.jpg",
            "product_name": "Sony Xperia XZ Premium"
        },
        {
            "price": "\nRs 11,499\n - ",
            "desc": ["Phablet, Smartphone, Android 5.1", "5.5 inches, Full HD (1920X1080)", "2G, 3G, 4G (LTE), 16GB, 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_K4_NOTE/Lenovo_K4_NOTE_S_1.jpg",
            "product_name": "Lenovo Vibe K4 Note"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, iOS 5", "3.5 inches, 960 x 640", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_4s/Apple_iPhone_4s_S_1.jpg",
            "product_name": "Apple iPhone 4s 8GB"
        },
        {
            "price": "\nRs 3,099\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_Q324/Micromax_Bolt_Q324_S_1.jpg",
            "product_name": "Micromax Bolt Q324"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, MIUI 7.0 Android OS, v6.0 (...", "5.00 inches, 1080 x 1920 pixels (~441 p...", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_4s/Xiaomi_Mi_4s_S_1.jpg",
            "product_name": "Xiaomi Mi 4s"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_1S/Xiaomi_Redmi_1S_S_1.jpg",
            "product_name": "Xiaomi Redmi 1S"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "5.5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Redmi_Note/Xiaomi_Redmi_Note_S_1.jpg",
            "product_name": "Xiaomi Redmi Note"
        },
        {
            "price": "\nRs 6,600\n - ",
            "desc": ["Smartphone, Funtouch OS 2.1 (based on A...", "4.5 inches, 854 x 480 pixels", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y21/Vivo_Y21_S_1.jpg",
            "product_name": "Vivo Y21"
        },
        {
            "price": "\nRs 22,000\n - ",
            "desc": ["Phablet, Smartphone, iOS 10", "5.5 inches, 1920x1080-pixel resolution ...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone6s_plus/Apple_iPhone6s_plus_S_1.jpg",
            "product_name": "Apple iPhone 6s Plus 16GB"
        },
        {
            "price": "\nRs 19,999\n",
            "desc": ["Phablet, Smartphone, Android 7.1.1 Nougat", "5.5 inches, Full-HD (1920 x 1080, 16:9)", "2G, 3G, 4G (LTE), 64GB, 32GB, 4GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_6/Nokia_6_S_1.jpg",
            "product_name": "Nokia 6"
        },
        {
            "price": "\nRs 5,669\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "5.0 inches, (1280 x 720 pixels) HD IPS ...", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_Water_10/LYF_Water_10_S_1.jpg",
            "product_name": "LYF WATER 10"
        },
        {
            "price": "\nRs 9,990\n",
            "desc": ["Smartphone, Funtouch OS 2.1 (based on A...", "4.7 inches, 960 x 540 pixels", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y31L/Vivo_Y31L_S_1.jpg",
            "product_name": "Vivo Y31L"
        },
        {
            "price": "\nRs 8,450\n - ",
            "desc": ["Smartphone, Phablet, Android 5.0", "5.5 inches, 1920x1080", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_Selfie_ZD551KL/ASUS_ZenFone_Selfie_ZD551KL_S_1.jpg",
            "product_name": "ASUS ZenFone Selfie ZD551KL"
        },
        {
            "price": "\nRs 10,640\n",
            "desc": ["Smartphone, Funtouch OS based on Androi...", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y28/Vivo_Y28_S_1.jpg",
            "product_name": "Vivo Y28"
        },
        {
            "price": "\nRs 9,499\n - ",
            "desc": ["Smartphone, Android 5.1.1 Lollipop", "5.00 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J3/Samsung_Galaxy_J3_S_1.jpg",
            "product_name": "Samsung Galaxy J3 (2016)"
        },
        {
            "price": "\nRs 1,599\n",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmall...", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Enjoy_6/Huawei_Enjoy_6_S_1.jpg",
            "product_name": "Huawei Enjoy 6"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.2 inches, 220 x 176", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_RAZR_V3i/Motorola_RAZR_V3i_S_1.jpg",
            "product_name": "Motorola Razr V3i"
        },
        {
            "price": "\nRs 5,799\n - ",
            "desc": ["Smartphone, Android OS, v5.1 (Lollipop)", "5.0 inches, 480 x 854 pixels", "2G, 3G, 4G (LTE), 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Pace_4G_Q416/Micromax_Canvas_Pace_4G_Q416_S_1.jpg",
            "product_name": "Micromax Canvas Pace 4G Q416"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android OS, v7.0 (...", "5.7 inches, 1440 x 2560 pixels (515 ppi...", "2G, 3G, 4G (LTE), 128GB, 64GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_8/Nokia_8_S_1.jpg",
            "product_name": "Nokia 8"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, ColorOS 3.0, based...", "5.5 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_R9s_2017/OPPO_R9s_2017_S_1.jpg",
            "product_name": "OPPO R9s"
        },
        {
            "price": "\nRs 2,960\n - ",
            "desc": ["Feature Phone", "2.2 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_C3322/Samsung_C3322_S_1.jpg",
            "product_name": "Samsung C3322"
        },
        {
            "price": "\nRs 6,999\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A6000/Lenovo_A6000_S_1.jpg",
            "product_name": "Lenovo A6000"
        },
        {
            "price": "\nRs 15,508\n - ",
            "desc": ["Smartphone, iOS 9.3", "4.00 inches, 640 x 1136 pixels", "2G, 3G, 4G (LTE), 16GB, 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_SE/Apple_iPhone_SE_S_1.jpg",
            "product_name": "Apple iPhone SE"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, MIUI 6 Based on Android L", "5 inches, 1920 x 1080 resolution, 175 P...", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_4i/Xiaomi_Mi_4i_S_1.jpg",
            "product_name": "Xiaomi Mi 4i 32GB"
        },
        {
            "price": "\nRs 4,599\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Juice_2_AQ5001/Micromax_Canvas_Juice_2_AQ5001_S_1.jpg",
            "product_name": "Micromax Canvas Juice 2 AQ5001"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Oxygen OS with And...", "5.5 inches, Full HD (1920 x 1080 pixels)", "2G, 3G, 4G (LTE), 64GB, 128GB, 8GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OnePlus_5_/OnePlus_5__S_1.jpg",
            "product_name": "OnePlus 5"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, MIUI 8.0(Android 6.0)", "5.7 inches, 1080 x 1920 pixels (~386 pp...", "2G, 3G, 4G (LTE), 64GB, 128GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_Note_2_/Xiaomi_Mi_Note_2__S_1.jpg",
            "product_name": "Xiaomi Mi Note 2"
        },
        {
            "price": "\nRs 6,398\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_620G/HTC_Desire_620G_S_1.jpg",
            "product_name": "HTC Desire 620G dual sim"
        },
        {
            "price": "\nRs 8,888\n - ",
            "desc": ["Smartphone, Phablet, Android 5.1", "5.5 inches, 1080x1920 pixels", "2G, 3G, 4G (LTE), 16GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Canvas_6_Pro_E484/Canvas_6_Pro_E484_S_1.jpg",
            "product_name": "Micromax Canvas 6 Pro E484"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.7 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_Note/Xiaomi_Mi_Note_S_1.jpg",
            "product_name": "Xiaomi Mi Note 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y27/Vivo_Y27_S_1.jpg",
            "product_name": "Vivo Y27"
        },
        {
            "price": "\nRs 6,790\n",
            "desc": ["Smartphone, Funtouch OS 2.1(Based on An...", "4.5 inches, 854 * 480 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y15S/Vivo_Y15S_S_1.jpg",
            "product_name": "Vivo Y15S"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, MIUI 8 ( based on Android O...", "5.15 inches, FHD (1920 x 1080)", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_5c/Xiaomi_Mi_5c_S_1.jpg",
            "product_name": "Xiaomi Mi 5c"
        },
        {
            "price": "\nRs 13,499\n - ",
            "desc": ["Smartphone, Android OS, v6.0.1 (Marshma...", "5 inches, HD (720 x 1280)", "2G, 3G, 4G (LTE), 16GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_XA/SONY_Xperia_XA_S_1.jpg",
            "product_name": "Sony Xperia XA"
        },
        {
            "price": "\nRs 7,999\n - ",
            "desc": ["Smartphone, Android 6.0, Marshmallow", "5.0 inches, HD (1280\u00d7720 pixels)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_E3_Power_PH/Motorola_Moto_E3_Power_PH_S_1.jpg",
            "product_name": "Motorola Moto E3 Power"
        },
        {
            "price": "\nRs 6,999\n - ",
            "desc": ["Smartphone, Android 5.1 (Lollipop)", "5 inches, HD (720 X 1280)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_K5/Lenovo_Vibe_K5_S_1.jpg",
            "product_name": "Lenovo Vibe K5"
        },
        {
            "price": "\nRs 7,499\n - ",
            "desc": ["Phablet, Smartphone, CoolUI 8.0(Android...", "5.5 inches, FHD 1920 x 1080 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Note_5_/Coolpad_Note_5__S_1.jpg",
            "product_name": "Coolpad Note 5"
        },
        {
            "price": "\nRs 13,799\n - ",
            "desc": ["Smartphone, iOS 5 ", "3.5 inches, 960 x 640", "2G, 3G, 32GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_4s/Apple_iPhone_4s_S_1.jpg",
            "product_name": "Apple iPhone 4s 32GB"
        },
        {
            "price": "\nRs 8,715\n",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "5.0 inches, 540 x 960 pixels", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J2_Prime_/Samsung_Galaxy_J2_Prime__S_1.jpg",
            "product_name": "Samsung Galaxy J2 Prime"
        },
        {
            "price": "\nRs 4,850\n - ",
            "desc": ["Smartphone, Android 5.1", "4.5 inches, 480 x 854", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_Go_ZB452KG_8GB/ASUS_Zenfone_Go_ZB452KG_8GB_S_1.jpg",
            "product_name": "ASUS ZenFone Go ZB452KG"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 7.0 Nougat", "5.0 inches, Full HD (1920 x 1080)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_XA_2017/Sony_Xperia_XA_2017_S_1.jpg",
            "product_name": "Sony Xperia XA (2017)"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Color OS with Andr...", "5.5 inches, 1080 x 1920", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_A77/OPPO_A77_S_1.jpg",
            "product_name": "OPPO A77"
        },
        {
            "price": "\nRs 17,800\n",
            "desc": ["Smartphone, Android 4.1.1 Jelly Bean", "4.8 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_III_I9305/Samsung_Galaxy_S_III_I9305_S_1.jpg",
            "product_name": "Samsung Galaxy S III I9305"
        },
        {
            "price": "\nRs 6,499\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Knight_2_E471/Micromax_Canvas_Knight_2_E471_S_1.jpg",
            "product_name": "Micromax Canvas Knight 2 E471"
        },
        {
            "price": "\nRs 32,308\n - ",
            "desc": ["Phablet, Smartphone, iOS 10", "5.5 inches, 1920x1080-pixel resolution ...", "2G, 3G, 4G (LTE), 128GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone6s_plus/Apple_iPhone6s_plus_S_1.jpg",
            "product_name": "Apple iPhone 6s Plus 128GB"
        },
        {
            "price": "\nRs 5,090\n - ",
            "desc": ["Smartphone, Android OS, V5.1 Lollipop (...", "5 inches, 720x1280 pixels", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Pioneer_P5W/Gionee_Pioneer_P5W_S_1.jpg",
            "product_name": "Gionee Pioneer P5W"
        },
        {
            "price": "\nRs 23,665\n - ",
            "desc": ["Smartphone, v5.1.1 (Lollipop)", "5.4 inches (~71.9% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Blackberry_Priv/Blackberry_Priv_S_1.jpg",
            "product_name": "BlackBerry PRIV"
        },
        {
            "price": "\nRs 18,499\n",
            "desc": ["Phablet, Smartphone, Android 5.1.1 Loll...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_Play/Motorola_Moto_X_Play_S_1.jpg",
            "product_name": "Motorola Moto X Play (XT1562) 16GB"
        },
        {
            "price": "\nRs 8,375\n - ",
            "desc": ["Smartphone, Android 6.0(Amigo 3.2)", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_P7/Gionee_P7_S_1.jpg",
            "product_name": "Gionee P7"
        },
        {
            "price": "\nRs 14,980\n - ",
            "desc": ["Smartphone, Funtouch OS2.5 based on And...", "5.0 inches, 1280\u00d7720", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_V3/Vivo_V3_S_1.jpg",
            "product_name": "Vivo V3"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Funtouch OS 3.0 ba...", "5.5 inches, 720 x 1280", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_V5_Lite/Vivo_V5_Lite_S_1.jpg",
            "product_name": "Vivo V5Lite"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Phablet, Android 7.0 with b...", "5.7 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 128GB, 256GB, 32GB, 6...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZenFone_AR_ZS571KL/ZenFone_AR_ZS571KL_S_1.jpg",
            "product_name": "ASUS ZenFone AR ZS571KL"
        },
        {
            "price": "\nRs 16,999\n",
            "desc": ["Phablet, Smartphone, Android OS, v7.0 (...", "5.50 inches, 1080 x 1920 pixels (~401 p...", "2G, 3G, 4G (LTE), 16GB, 32GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G5_p/Motorola_Moto_G5_p_S_1.jpg",
            "product_name": "Motorola Moto G5 Plus"
        },
        {
            "price": "\nRs 24,999\n",
            "desc": ["Smartphone, MIUI 7.0 Android OS, v6.0 (...", "5.15 inches, 1080x1920 pixels (~424 ppi...", "2G, 3G, 4G (LTE), 128GB, 32GB, 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_5/Xiaomi_Mi_5_S_1.jpg",
            "product_name": "Xiaomi Mi 5"
        },
        {
            "price": "\nRs 10,950\n - ",
            "desc": ["Phablet, Smartphone, v5.1 (Lollipop)", "5.50 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_K5_Note/Lenovo_K5_Note_S_1.jpg",
            "product_name": "Lenovo Vibe K5 Note"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Color OS UI Androi...", "5.50 inches, WQHD (2560 x 1440)", "2G, 3G, 4G (LTE), 128GB, 64GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_Find_9_Fixed/Oppo_Find_9_Fixed_S_1.jpg",
            "product_name": "OPPO Find 9"
        },
        {
            "price": "\nRs 10,950\n - ",
            "desc": ["Smartphone, Android OS, V5.1 Lollipop (...", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Marathon_M5_lite/Gionee_Marathon_M5_lite_S_1.jpg",
            "product_name": "Gionee Marathon M5 Lite"
        },
        {
            "price": "\nRs 9,190\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 4G (LTE), 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_E3/Sony_Xperia_E3_S_1.jpg",
            "product_name": "Sony Xperia E3"
        },
        {
            "price": "\nRs 7,999\n",
            "desc": ["Smartphone, Android\u2122 6.0.1, Marshmallow", "5 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G4_Play/Motorola_Moto_G4_Play_S_1.jpg",
            "product_name": "Motorola Moto G4 Play"
        },
        {
            "price": "\nRs 5,990\n",
            "desc": ["Smartphone, ColorOS, based on Android 4.4", "4.5 inches, 480 x 854 pixels", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_Joy_3_/OPPO_Joy_3__S_1.jpg",
            "product_name": "OPPO Joy 3"
        },
        {
            "price": "\nRs 4,199\n - ",
            "desc": ["Smartphone, BlackBerry OS 7", "2.8 inches, 640 x 480", "2G, 3G, 8GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Bold_Touch_9900/BlackBerry_Bold_Touch_9900_S_1.jpg",
            "product_name": "BlackBerry Bold Touch 9900"
        },
        {
            "price": "\nRs 7,149\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_M2/Gionee_M2_S_1.jpg",
            "product_name": "Gionee Marathon M2"
        },
        {
            "price": "\nRs 6,768\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Pulse_4G_E451/Micromax_Canvas_Pulse_4G_E451_S_1.jpg",
            "product_name": "Micromax Canvas Pulse 4G E451"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, MIUI 9 ( Android 7...", "6.4 inches, 2540 x 1440 AMOLED screen", "2G, 3G, 4G (LTE), 128GB, 256GB, 4GB, 8G...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_Mix_2/Xiaomi_Mi_Mix_2_S_1.jpg",
            "product_name": "Xiaomi Mi MIX 2"
        },
        {
            "price": "\nRs 3,750\n - ",
            "desc": ["Feature Phone, Series 30+", "2.8inches, 240 x 320 pixels", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Nokia_230/Microsoft_Nokia_230_S_1.jpg",
            "product_name": "Nokia 230 Dual SIM"
        },
        {
            "price": "\nRs 8,185\n - ",
            "desc": ["Smartphone, Phablet, Android 6.0", "5.5 inches, 1280\u00d7720", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_Max_2016/ASUS_Zenfone_Max_2016_S_1.jpg",
            "product_name": "ASUS ZenFone MAX ZC550KL (2016)"
        },
        {
            "price": "\nRs 7,777\n - ",
            "desc": ["Smartphone, Android 5.1 (Lollipop) with...", "5.00 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_Turbo/Panasonic_Eluga_Turbo_S_1.jpg",
            "product_name": "Panasonic Eluga Turbo"
        },
        {
            "price": "\nRs 30,000\n - ",
            "desc": ["Smartphone, iOS 7", "4 inches, 1136 x 640", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_5c/Apple_iPhone_5c_S_1.jpg",
            "product_name": "Apple iPhone 5c 16GB"
        },
        {
            "price": "\nRs 8,799\n - ",
            "desc": ["Smartphone, Android 6.0.1", "5.0 inches, 1280 x 720 (HD)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J2_Pro/Samsung_Galaxy_J2_Pro_S_1.jpg",
            "product_name": "Samsung Galaxy J2 Pro"
        },
        {
            "price": "\nRs 5,890\n - ",
            "desc": ["Feature Phone, BlackBerry OS 10", "4.2 inches, 1280 x 768", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Z10/BlackBerry_Z10_S_1.jpg",
            "product_name": "BlackBerry Z10"
        },
        {
            "price": "\nRs 11,999\n - ",
            "desc": ["Smartphone, Android\u2122 7.0, Nougat", "5.00 inches, 1080p Full HD (1920 x 1080)", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G5_3/Motorola_Moto_G5_3_S_1.jpg",
            "product_name": "Motorola Moto G5"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android Lollipop - 5.1", "5.0 inches, 854 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Atom_3/Lava_Iris_Atom_3_S_1.jpg",
            "product_name": "Lava Iris Atom 3"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.5 inches, 480 x 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Fire_4G/Micromax_Canvas_Fire_4G_S_1.jpg",
            "product_name": "Micromax Canvas Fire 4G"
        },
        {
            "price": "\nRs 15,237\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1920 x 1080", "2G, 3G, 24GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Gold_A300/Micromax_Canvas_Gold_A300_S_1.jpg",
            "product_name": "Micromax Canvas Gold A300"
        },
        {
            "price": "\nRs 6,650\n - ",
            "desc": ["Smartphone, Android OS, V5.1 Lollipop (...", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Pioneer_P5L/Gionee_Pioneer_P5L_S_1.jpg",
            "product_name": "Gionee Pioneer P5L"
        },
        {
            "price": "\nRs 13,999\n - ",
            "desc": ["Smartphone, Phablet, Asus ZenUI(Android...", "6.0 inches, 1920x1080", "2G, 3G, 4G (LTE), 16GB, 32GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone2_Laser_ZE601KL/ASUS_Zenfone2_Laser_ZE601KL_S_1.jpg",
            "product_name": "ASUS ZenFone 2 Laser ZE601KL"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android v6.0 (Marshmallow)", "5.2 inches, Full HD (1080 x 1920 pixels)", "2G, 3G, 4G (LTE), 16GB, 32GB, 3GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J5_2017/Samsung_Galaxy_J5_2017_S_1.jpg",
            "product_name": "Samsung Galaxy J5 (2017)"
        },
        {
            "price": "\nRs 4,990\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.5 inches, 480 x 854 pixels (~218 ppi ...", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A2010/Lenovo_A2010_S_1.jpg",
            "product_name": "Lenovo A2010"
        },
        {
            "price": "\nRs 7,290\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "3.5 inches, 480 x 320", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_E/SONY_Xperia_E_S_1.jpg",
            "product_name": "Sony Xperia E"
        },
        {
            "price": "\nRs 2,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 480 x 854", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_D320/Micromax_Bolt_D320_S_1.jpg",
            "product_name": "Micromax Bolt D320"
        },
        {
            "price": "\nRs 23,490\n - ",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "6 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_T2_Ultra/SONY_Xperia_T2_Ultra_S_1.jpg",
            "product_name": "Sony Xperia T2 Ultra"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_1S/Xiaomi_Mi_1S_S_1.jpg",
            "product_name": "Xiaomi Mi 1S"
        },
        {
            "price": "\nRs 10,999\n - ",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_820s/HTC_Desire_820s_S_1.jpg",
            "product_name": "HTC Desire 820s dual sim"
        },
        {
            "price": "\nRs 13,999\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0.1...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_M_IN/Motorola_Moto_M_IN_S_1.jpg",
            "product_name": "Motorola Moto M"
        },
        {
            "price": "\nRs 1,399\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_I6/Intex_Aqua_I6_S_1.jpg",
            "product_name": "Intex Aqua I6"
        },
        {
            "price": "\nRs 12,299\n",
            "desc": ["Phablet, Smartphone, Android OS, v5.1 (...", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_Mark/Panasonic_Eluga_Mark_S_1.jpg",
            "product_name": "Panasonic Eluga Mark"
        },
        {
            "price": "\nRs 8,994\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_820_Dual_SIM/HTC_Desire_820_Dual_SIM_S_1.jpg",
            "product_name": "HTC Desire 820G+ dual sim"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.00 inches, 480 x 960", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Ringing_Bells_Smart_101/Ringing_Bells_Smart_101_S_1.jpg",
            "product_name": "Ringing Bells Smart 101"
        },
        {
            "price": "\nRs 2,585\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.5 inches, 480 x 854", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_S301/Micromax_Bolt_S301_S_1.jpg",
            "product_name": "Micromax Bolt S301"
        },
        {
            "price": "\nRs 11,500\n - ",
            "desc": ["Smartphone, Android OS, v6.0.1 (Marshma...", "5.0 inches, 720 x 1280 (HD)", "2G, 3G, 4G (LTE), 32GB, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J5_Prime_PH/Samsung_Galaxy_J5_Prime_PH_S_1.jpg",
            "product_name": "Samsung Galaxy J5 Prime"
        },
        {
            "price": "\nRs 3,590\n - ",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_206/Nokia_206_S_1.jpg",
            "product_name": "Nokia Asha 206"
        },
        {
            "price": "\nRs 20,399\n - ",
            "desc": ["Phablet, Smartphone, Asus ZenUI3.0, And...", "5.50 inches, 1920\u00d71080", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_zenfone_3_1/ASUS_zenfone_3_1_S_1.jpg",
            "product_name": "ASUS ZenFone 3 ZE552KL"
        },
        {
            "price": "\nRs 7,999\n - ",
            "desc": ["Smartphone, Android 5.1 (Lollipop)", "5.0 inches, Full HD (1080 x 1920)", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_K5/Lenovo_Vibe_K5_S_1.jpg",
            "product_name": "Lenovo Vibe K5 Plus"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Kitkat 4.4.2", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Nitro_2_E311/Micromax_Canvas_Nitro_2_E311_S_1.jpg",
            "product_name": "Micromax Canvas Nitro 2 E311"
        },
        {
            "price": "\nRs 4,150\n - ",
            "desc": ["Smartphone, Tizen OS, v2.4", "4 inches, 480x 800 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Z2/Samsung_Z2_S_1.jpg",
            "product_name": "Samsung Z2"
        },
        {
            "price": "\nRs 8,000\n - ",
            "desc": ["Smartphone, Android OS, V5.0 Lollipop (...", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 3GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Fashion_F103/Gionee_Fashion_F103_S_1.jpg",
            "product_name": "Gionee F103"
        },
        {
            "price": "\nRs 12,499\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5inches, 1080 x 1920 pixels (~401 ppi...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_C4_Dual/Sony_Xperia_C4_Dual_S_1.jpg",
            "product_name": "Sony Xperia C4 Dual"
        },
        {
            "price": "\nRs 23,980\n",
            "desc": ["Phablet, Smartphone, Funtouch OS2.5 Bas...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_V3Max/Vivo_V3Max_S_1.jpg",
            "product_name": "Vivo V3Max"
        },
        {
            "price": "\nRs 13,100\n - ",
            "desc": ["Phablet, Smartphone, Android OS, V6.0 M...", "5.5 inches, FHD IPS(1920 x 1080)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_S6s/Gionee_S6s_S_1.jpg",
            "product_name": "Gionee S6s"
        },
        {
            "price": "\nRs 8,290\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "3.5 inches, 480 x 320", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_E_dual/Sony_Xperia_E_dual_S_1.jpg",
            "product_name": "Sony Xperia E dual"
        },
        {
            "price": "\nRs 3,399\n - ",
            "desc": ["Feature Phone, BlackBerry OS 7.0", "2.44 inches, 480 x 360", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_9360/BlackBerry_Curve_9360_S_1.jpg",
            "product_name": "BlackBerry Curve 9360"
        },
        {
            "price": "\nRs 38,769\n - ",
            "desc": ["Phablet, Smartphone, Android 7.0 (Nougat)", "6.2 inches, 2960 x 1440 pixels", "2G, 3G, 4G (LTE), 64GB, 128GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S8/Samsung_Galaxy_S8_S_1.jpg",
            "product_name": "Samsung Galaxy S8+"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_HD_plus_A190/Micromax_Canvas_HD_plus_A190_S_1.jpg",
            "product_name": "Micromax Canvas HD plus A190"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 7.1.1 Nougat", "5.20 inches, HD (1280 x 720, 16:9)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_5/Nokia_5_S_1.jpg",
            "product_name": "Nokia 5"
        },
        {
            "price": "\nRs 9,499\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop upgrad...", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Yu_Yunicorn/Yu_Yunicorn_S_1.jpg",
            "product_name": "YU Yunicorn"
        },
        {
            "price": "\nRs 4,990\n",
            "desc": ["Smartphone, iOS 4 ", "3.5 inches, 960 x 640", "2G, 3G, 16GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_4/Apple_iPhone_4_S_1.jpg",
            "product_name": "Apple iPhone 4 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Symbian OS 8.1a S60", "2.1 inches , 208 x 176", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_N70/Nokia_N70_S_1.jpg",
            "product_name": "Nokia N70"
        },
        {
            "price": "\nRs 9,499\n - ",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "5.0 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_K6_Power/Lenovo_K6_Power_S_1.jpg",
            "product_name": "Lenovo K6 Power"
        },
        {
            "price": "\nRs 4,800\n - ",
            "desc": ["Feature Phone, BlackBerry OS 7.1", "2.44 inches, 320 x 240", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_9320/BlackBerry_Curve_9320_S_1.jpg",
            "product_name": "BlackBerry Curve 9320"
        },
        {
            "price": "\nRs 20,994\n - ",
            "desc": ["Smartphone, Emotion UI 4.1 Android OS, ...", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_P9/Huawei_P9_S_1.jpg",
            "product_name": "Huawei P9"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 960 x 540", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Droid_4_XT894/Motorola_Droid_4_XT894_S_1.jpg",
            "product_name": "Motorola Droid 4 XT894"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Phablet, Android OS, v5.0.2...", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Play_4G/Micromax_Canvas_Play_4G_S_1.jpg",
            "product_name": "Micromax Canvas Play 4G"
        },
        {
            "price": "\nRs 15,999\n - ",
            "desc": ["Feature Phone, BlackBerry OS 10.3 ", "4.5 inches, 1440 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Blackberry_Passport/Blackberry_Passport_S_1.jpg",
            "product_name": "BlackBerry Passport"
        },
        {
            "price": "\nRs 16,043\n - ",
            "desc": ["Phablet, Smartphone, Amigo OS 3.2(Andro...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_S6_Pro/Gionee_S6_Pro_S_1.jpg",
            "product_name": "Gionee S6 Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat", "5.50 inches, WQHD (1440 x 2560)", "2G, 3G, 4G (LTE), 128GB, 64GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_P10_PH/Huawei_P10_PH_S_1.jpg",
            "product_name": "Huawei P10"
        },
        {
            "price": "\nRs 9,299\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.8 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_M2/SONY_Xperia_M2_S_1.jpg",
            "product_name": "Sony Xperia M2"
        },
        {
            "price": "\nRs 10,499\n - ",
            "desc": ["Phablet, Smartphone, Android\u2122 6.0.1, Ma...", "5.5 inches, Full HD (1920 x 1080)", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G4_Plus_/Motorola_Moto_G4_Plus__S_1.jpg",
            "product_name": "Motorola Moto G4 Plus"
        },
        {
            "price": "\nRs 7,990\n - ",
            "desc": ["Smartphone, Android OS, v6.0.1 (Marshma...", "5.00 inches, HD (720 x 1280)", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J2_2016/Samsung_Galaxy_J2_2016_S_1.jpg",
            "product_name": "Samsung Galaxy J2 (2016)"
        },
        {
            "price": "\nRs 7,999\n - ",
            "desc": ["Smartphone, Android 5.1", "5.50 inches, 720x1280 pixels", "3G, 4G (LTE), 2G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_I3/Panasonic_Eluga_I3_S_1.jpg",
            "product_name": "Panasonic Eluga I3"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Lollipop 5.0", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_M4_Aqua_Dual_E2333/Sony_Xperia_M4_Aqua_Dual_E2333_S_1.jpg",
            "product_name": "Sony Xperia M4 Aqua Dual E2333"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_4_A450CG/Asus_Zenfone_4_A450CG_S_1.jpg",
            "product_name": "ASUS ZenFone 4 A450CG"
        },
        {
            "price": "\nRs 24,549\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "6 inches, 1920\u00d71080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_C5_Ultra/SONY_Xperia_C5_Ultra_S_1.jpg",
            "product_name": "Sony Xperia C5 Ultra Dual"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.8 inches, 1280 x 720", "2G, 3G, 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S3_Neo_I9301I/Samsung_Galaxy_S3_Neo_I9301I_S_1.jpg",
            "product_name": "Samsung Galaxy S3 Neo I9301I"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 7.0 Nougat", "5 inches, HD (1280 x 720, 16:9)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_3/Nokia_3_S_1.jpg",
            "product_name": "Nokia 3"
        },
        {
            "price": "\nRs 1,799\n - ",
            "desc": ["Smartphone, Android v5.0 (Lollipop)", "5 inches, 480 x 854", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_Q381/Micromax_Bolt_Q381_S_1.jpg",
            "product_name": "Micromax Bolt Q381"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.3 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_E/Motorola_Moto_E_S_1.jpg",
            "product_name": "Motorola Moto E"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, ColorOS 3.0 based ...", "6.0 inches, Full HD (1920 X 1080 pixels...", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_R9s_Plus_IN/OPPO_R9s_Plus_IN_S_1.jpg",
            "product_name": "OPPO R9s Plus"
        },
        {
            "price": "\nRs 24,999\n",
            "desc": ["Phablet, Smartphone, Android 6.0.1 Mars...", "5.50 inches, Full HD (1080 x 1920)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_Z_Play/Motorola_Moto_Z_Play_S_1.jpg",
            "product_name": "Motorola Moto Z Play"
        },
        {
            "price": "\nRs 41,990\n - ",
            "desc": ["Smartphone, Phablet, LG UX 6.0 UI with ...", "5.7 inches, Quad HD+ (1440x1880)", "2G, 3G, 4G (LTE), 64GB, 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G6/LG_G6_S_1.jpg",
            "product_name": "LG G6"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 5.1 Lollip...", "5.5 inches, 720x1280 pixels", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_V5/Lava_V5_S_1.jpg",
            "product_name": "Lava V5 4G"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_2_ZE551ML/Asus_Zenfone_2_ZE551ML_S_1.jpg",
            "product_name": "ASUS ZenFone 2 ZE551ML 64GB"
        },
        {
            "price": "\nRs 30,900\n - ",
            "desc": ["Smart Watch, watchOS 3", "272 by 340 pixels (38mm)\r\n312 by 390 pi...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_Watch_Series_2/Apple_Watch_Series_2_S_1.jpg",
            "product_name": "Apple Watch Series 2"
        },
        {
            "price": "\nRs 3,990\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.0 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A1000/Lenovo_A1000_S_1.jpg",
            "product_name": "Lenovo A1000"
        },
        {
            "price": "\nRs 5,600\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_210/Nokia_Asha_210_S_1.jpg",
            "product_name": "Nokia Asha 210 Dual SIM"
        },
        {
            "price": "\nRs 8,000\n - ",
            "desc": ["Smartphone, Android OS, v5.1 (Lollipop)", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_A2/Panasonic_Eluga_A2_S_1.jpg",
            "product_name": "Panasonic Eluga A2"
        },
        {
            "price": "\nRs 13,800\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 960 x 540", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_P/Sony_Xperia_P_S_1.jpg",
            "product_name": "Sony Xperia P"
        },
        {
            "price": "\nRs 14,900\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches Full-HD, 1920 x 1080 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_M5/SONY_Xperia_M5_S_1.jpg",
            "product_name": "Sony Xperia M5 Dual"
        },
        {
            "price": "\nRs 4,045\n - ",
            "desc": ["Smartphone, Android OS, V5.1 Lollipop (...", "4.5 inches, FWVGA (480 x 854)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_P5_Mini/Gionee_P5_Mini_S_1.jpg",
            "product_name": "Gionee P5 Mini"
        },
        {
            "price": "\nRs 8,899\n - ",
            "desc": ["Smartphone, Phablet, Android 5.0 Lollipop", "5.5 inches, 1280\u00d7720", "2G, 3G, 4G (LTE), 16GB, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_Max/ASUS_Zenfone_Max_S_1.jpg",
            "product_name": "ASUS ZenFone MAX ZC550KL"
        },
        {
            "price": "\nRs 29,077\n - ",
            "desc": ["Phablet, Smartphone, iOS 10", "5.5 inches, 1920x1080-pixel resolution ...", "2G, 3G, 4G (LTE), 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone6s_plus/Apple_iPhone6s_plus_S_1.jpg",
            "product_name": "Apple iPhone 6s Plus 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, HTC Sense UI with ...", "5.5 inches, 1440 x 2560 pixels", "2G, 3G, 4G (LTE), 64GB, 128GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_U_11/HTC_U_11_S_1.jpg",
            "product_name": "HTC U11"
        },
        {
            "price": "\nRs 5,699\n - ",
            "desc": ["Smartphone, Android 6.0 (Marshmallow)", "5.3 inches, 1280x720 pixel", "2G, 3G, 4G (LTE), 16GB, 8GB, 1GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P55_Novo/Panasonic_P55_Novo_S_1.jpg",
            "product_name": "Panasonic P55 Novo"
        },
        {
            "price": "\nRs 7,669\n - ",
            "desc": ["Smartphone, Phablet, Android Marshmallo...", "5.5 inches, Full HD, 1080 x 1920 pixels", "4G (LTE), 2G, 3G, 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_F1/LYF_WATER_F1_S_1.jpg",
            "product_name": "LYF F1"
        },
        {
            "price": "\nRs 9,150\n - ",
            "desc": ["Feature Phone, BlackBerry OS 10.2.1 ", "5 inches, 960 x 540", "2G, 3G, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Z3/BlackBerry_Z3_S_1.jpg",
            "product_name": "BlackBerry Z3"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_Duos_2_S7582/Samsung_Galaxy_S_Duos_2_S7582_S_1.jpg",
            "product_name": "Samsung Galaxy S Duos 2 S7582"
        },
        {
            "price": "\nRs 7,330\n - ",
            "desc": ["Smartphone, Android with HTC Sense", "5 inches, 720 x 1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_626G_Plus/HTC_Desire_626G_Plus_S_1.jpg",
            "product_name": "HTC Desire 626G Plus Dual Sim"
        },
        {
            "price": "\nRs 3,824\n",
            "desc": ["Feature Phone, Series 30+", "2.8inches, 240 x 320 pixels", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Nokia_230/Microsoft_Nokia_230_S_1.jpg",
            "product_name": "Nokia 230"
        },
        {
            "price": "\nRs 11,388\n - ",
            "desc": ["Phablet, Android 4.1.1 Jelly Bean", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_II_N7100_16GB/Samsung_Galaxy_Note_II_N7100_16GB_S_1.jpg",
            "product_name": "Samsung Galaxy Note II N7100 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches (~68.1% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_P1m_/Lenovo_Vibe_P1m__S_1.jpg",
            "product_name": "Lenovo Vibe P1m"
        },
        {
            "price": "\nRs 7,999\n - ",
            "desc": ["Feature Phone, BlackBerry OS 10 ", "3.1 inches, 720 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Q10/BlackBerry_Q10_S_1.jpg",
            "product_name": "BlackBerry Q10"
        },
        {
            "price": "\nRs 19,400\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v5.1.1...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Galaxy_A7_2016/Samsung_Galaxy_Galaxy_A7_2016_S_1.jpg",
            "product_name": "Samsung Galaxy A7 (2016)"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.1.1 (Nou...", "6 inches, 1080 x 1920 pixels (~367 ppi ...", "2G, 3G, 4G (LTE), 64GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_R11_Plus_concept/OPPO_R11_Plus_concept_S_1.jpg",
            "product_name": "OPPO R11 Plus"
        },
        {
            "price": "\nRs 9,800\n - ",
            "desc": ["Phablet, Smartphone, HTC Sense 6.0 UI, ...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_828/HTC_Desire_828_S_1.jpg",
            "product_name": "HTC Desire 828"
        },
        {
            "price": "\nRs 7,990\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_M4_Aqua/SONY_Xperia_M4_Aqua_S_1.jpg",
            "product_name": "Sony Xperia M4 Aqua"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Funtouch OS 2.1 (Based on A...", "4.70 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/vivo_Y31/vivo_Y31_S_1.jpg",
            "product_name": "Vivo Y31"
        },
        {
            "price": "\nRs 15,000\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_816/HTC_Desire_816_S_1.jpg",
            "product_name": "HTC Desire 816"
        },
        {
            "price": "\nRs 6,950\n - ",
            "desc": ["Smartphone, Android 5.1 (Lollipop) with...", "4.7 inches, 720 x 1280", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_Arc/Panasonic_Eluga_Arc_S_1.jpg",
            "product_name": "Panasonic Eluga Arc"
        },
        {
            "price": "\nRs 16,990\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "5 inches, 1024 x 768", "2G, 3G, 4G (LTE), 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_Vu_II_F200/LG_Optimus_Vu_II_F200_S_1.jpg",
            "product_name": "LG Optimus Vu II F200"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v6.0.1 Marshmallow", "5.46 inches, 1440 x 2560", "2G, 3G, 4G (LTE), 128GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Xplay6/Vivo_Xplay6_S_1.jpg",
            "product_name": "Vivo Xplay6"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat", "5.5 inches, WQHD (1440 x 2560)", "2G, 3G, 4G (LTE), 128GB, 256GB, 6GB, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_P10_Plus_temp/Huawei_P10_Plus_temp_S_1.jpg",
            "product_name": "Huawei P10 Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0.1 Mars...", "5.50 inches, Full HD AMOLED (1920 x 1080)", "2G, 3G, 4G (LTE), 32GB, 64GB, 128GB, 4G...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_3_Zoom/ASUS_ZenFone_3_Zoom_S_1.jpg",
            "product_name": "ASUS ZenFone 3 Zoom ZE553KL"
        },
        {
            "price": "\nRs 7,599\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_K3_Note/Lenovo_K3_Note_S_1.jpg",
            "product_name": "Lenovo K3 Note"
        },
        {
            "price": "\nRs 1,970\n - ",
            "desc": ["Feature Phone", "5.08 cm (2.0)", "Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Metro_313/Samsung_Metro_313_S_1.jpg",
            "product_name": "Samsung Metro 313"
        },
        {
            "price": "\nRs 7,990\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_5/Asus_Zenfone_5_S_1.jpg",
            "product_name": "ASUS ZenFone 5 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android OS, v5.0 (...", "5.5 inches, 1920\u00d71080", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone2_Deluxe/ASUS_Zenfone2_Deluxe_S_1.jpg",
            "product_name": "ASUS ZenFone 2 Deluxe ZE551ML 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.1 Nougat...", "5.50 inches, HD (1080 x 1920)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OPPO_R11/OPPO_R11_S_1.jpg",
            "product_name": "OPPO R11"
        },
        {
            "price": "\nRs 6,300\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Pioneer_P6/Gionee_Pioneer_P6_S_1.jpg",
            "product_name": "Gionee Pioneer P6"
        },
        {
            "price": "\nRs 11,451\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_Switch/Panasonic_Eluga_Switch_S_1.jpg",
            "product_name": "Panasonic Eluga Switch"
        },
        {
            "price": "\nRs 15,780\n",
            "desc": ["Smartphone, Funtouch OS based on Androi...", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_X3S/Vivo_X3S_S_1.jpg",
            "product_name": "Vivo X3s"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Feature Phone, BlackBerry OS 10.3.1", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Blackberry_Leap/Blackberry_Leap_S_1.jpg",
            "product_name": "BlackBerry Leap"
        },
        {
            "price": "\nRs 6,490\n - ",
            "desc": ["Smartphone, BlackBerry OS 7", "3.2 inches, 640 x 480", "2G, 3G, 8GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Torch_9810/BlackBerry_Torch_9810_S_1.jpg",
            "product_name": "BlackBerry Torch 9810"
        },
        {
            "price": "\nRs 35,538\n - ",
            "desc": ["Smartphone, Phablet, Android 7.0 (Nougat)", "5.8 inches, 2960 x 1440 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S8/Samsung_Galaxy_S8_S_1.jpg",
            "product_name": "Samsung Galaxy S8"
        },
        {
            "price": "\nRs 1,200\n - ",
            "desc": ["Feature Phone", "3.86 cm (1.52), 128 x 128 (65K)", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Guru_1200/Samsung_Guru_1200_S_1.jpg",
            "product_name": "Samsung Guru 1200"
        },
        {
            "price": "\nRs 13,900\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4.3 inches, 800 x 480", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_II_I9100_16GB/Samsung_Galaxy_S_II_I9100_16GB_S_1.jpg",
            "product_name": "Samsung Galaxy S II I9100 16GB"
        },
        {
            "price": "\nRs 24,999\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0.1 Mars...", "5.7 inches, FHD (1080 x 1920)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_C7_Pro_IN/Samsung_Galaxy_C7_Pro_IN_S_1.jpg",
            "product_name": "Samsung Galaxy C7 Pro"
        },
        {
            "price": "\nRs 16,999\n - ",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Grand_I9082/Samsung_Galaxy_Grand_I9082_S_1.jpg",
            "product_name": "Samsung Galaxy Grand I9082"
        },
        {
            "price": "\nRs 11,199\n",
            "desc": ["Phablet, Smartphone, Android OS, V5.1 L...", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Marathon_M5/Gionee_Marathon_M5_S_1.jpg",
            "product_name": "Gionee Marathon M5"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android OS, v5.1 (...", "5.5 inches IPS LCD capacitive touchscre...", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_X3/Lenovo_Vibe_X3_S_1.jpg",
            "product_name": "Lenovo Vibe X3 64GB"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "4 inches, 480 x 800pixels", "2G, 3G, 4G (LTE), 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_FLAME_4/LYF_FLAME_4_S_1.jpg",
            "product_name": "LYF FLAME 4"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 720 x 1080 pixels", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_Z/Panasonic_Eluga_Z_S_1.jpg",
            "product_name": "Panasonic Eluga Z"
        },
        {
            "price": "\nRs 22,780\n",
            "desc": ["Phablet, Smartphone, Funtouch OS 2.0 ba...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_X5Max/Vivo_X5Max_S_1.jpg",
            "product_name": "Vivo X5Max"
        },
        {
            "price": "\nRs 41,495\n - ",
            "desc": ["Phablet, Smartphone, Android 7.0 with E...", "5.9 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 128GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Mate_9/Huawei_Mate_9_S_1.jpg",
            "product_name": "Huawei Mate 9"
        },
        {
            "price": "\nRs 7,399\n - ",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.50-inches, 540 x 960 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/panasonic_eluga_l2/panasonic_eluga_l2_S_1.jpg",
            "product_name": "Panasonic Eluga L2"
        },
        {
            "price": "\nRs 9,900\n - ",
            "desc": ["Phablet, Smartphone, HTC Sense UI Andro...", "5.5 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_728_Dual_SIM/HTC_Desire_728_Dual_SIM_S_1.jpg",
            "product_name": "HTC Desire 728 Dual SIM"
        },
        {
            "price": "\nRs 51,450\n",
            "desc": ["Smartphone, Android 7.1 (Nougat)", "4.5 inches, IPS LCD (1620 x 1080)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_KEYone_ph/BlackBerry_KEYone_ph_S_1.jpg",
            "product_name": "BlackBerry KEYone"
        },
        {
            "price": "\nRs 31,999\n - ",
            "desc": ["Phablet, Smartphone, Android Marshmallo...", "5.5 inches, 3840 x 2160", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_Z5_Premium/SONY_Xperia_Z5_Premium_S_1.jpg",
            "product_name": "Sony Xperia Z5 Premium"
        },
        {
            "price": "\nRs 12,990\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_2_ZE551ML/Asus_Zenfone_2_ZE551ML_S_1.jpg",
            "product_name": "ASUS ZenFone 2 ZE551ML 32GB"
        },
        {
            "price": "\nRs 17,144\n - ",
            "desc": ["Smartphone, Emotion UI 4.1, Android OS,...", "5.2 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_P9_Lite/Huawei_P9_Lite_S_1.jpg",
            "product_name": "Huawei P9 lite"
        },
        {
            "price": "\nRs 21,599\n",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_C4_Dual/Sony_Xperia_C4_Dual_S_1.jpg",
            "product_name": "Sony Xperia C4"
        },
        {
            "price": "\nRs 8,400\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720 Pixel", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_I/Panasonic_Eluga_I_S_1.jpg",
            "product_name": "Panasonic Eluga I"
        },
        {
            "price": "\nRs 12,999\n",
            "desc": ["Phablet, Android 5.0 Lollipop", "6.8inches (~70.7% screen-to-body ratio)...", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Phab_Plus/Lenovo_Phab_Plus_S_1.jpg",
            "product_name": "Lenovo Phab Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_200/Nokia_Asha_200_S_1.jpg",
            "product_name": "Nokia Asha 200"
        },
        {
            "price": "\nRs 13,490\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0.1...", "5.5 inches, 1080 x 1920 (FHD)", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_on8/Samsung_Galaxy_on8_S_1.jpg",
            "product_name": "Samsung Galaxy On8"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Phablet, nubia UI 4.0(Andro...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 128GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Nubia_M2/ZTE_Nubia_M2_S_1.jpg",
            "product_name": "nubia M2"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Phablet, Smartphone, Android\u2122 6.0.1, Ma...", "5.5 inches, Full HD (1920 x 1080)", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G4_/Motorola_Moto_G4__S_1.jpg",
            "product_name": "Motorola Moto G4"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_5/Asus_Zenfone_5_S_1.jpg",
            "product_name": "ASUS ZenFone 5 16GB"
        },
        {
            "price": "\nRs 4,869\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "4.5 inches, 480 x 854", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_Selfie_Q424/Micromax_Bolt_Selfie_Q424_S_1.jpg",
            "product_name": "Micromax Bolt Selfie Q424"
        },
        {
            "price": "\nRs 22,500\n - ",
            "desc": ["Smartphone, iOS 6 ", "4 inches, 1136 x 640", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_5/Apple_iPhone_5_S_1.jpg",
            "product_name": "Apple iPhone 5 32GB"
        },
        {
            "price": "\nRs 34,499\n - ",
            "desc": ["Smartphone, iOS 10", "4.7 inches, 1334 x 750-pixel resolution...", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_6s/Apple_iPhone_6s_S_1.jpg",
            "product_name": "Apple iPhone 6s 32GB"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "4.0 inches, 480 x 800", "2G, 3G, 4G (LTE), 4GB, 8GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_4G_Strong/Intex_Aqua_4G_Strong_S_1.jpg",
            "product_name": "Intex Aqua 4G Strong"
        },
        {
            "price": "\nRs 6,398\n - ",
            "desc": ["Smartphone, Android M 6.0", "5.0 inches, 720\u00d71280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_Water_11/LYF_Water_11_S_1.jpg",
            "product_name": "LYF WATER 11"
        },
        {
            "price": "\nRs 16,154\n - ",
            "desc": ["Smartphone, Android 5.0.2 Lollipop", "5.1 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S6_edge/Samsung_Galaxy_S6_edge_S_1.jpg",
            "product_name": "Samsung Galaxy S6 edge 32GB"
        },
        {
            "price": "\nRs 43,028\n",
            "desc": ["Phablet, Smartphone, Asus ZenUI3.0, And...", "5.7 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 128GB, 256GB, 64GB, 4...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_zenfone_3_Deluxe_1/ASUS_zenfone_3_Deluxe_1_S_1.jpg",
            "product_name": "ASUS ZenFone 3 Deluxe ZS570KL"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 8.1", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_640_Dual_Sim/Microsoft_Lumia_640_Dual_Sim_S_1.jpg",
            "product_name": "Microsoft Lumia 640 LTE Dual SIM"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Power/Intex_Aqua_Power_S_1.jpg",
            "product_name": "Intex Aqua Power"
        },
        {
            "price": "\nRs 11,891\n - ",
            "desc": ["Phablet, Android 5.0.1 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_826/HTC_Desire_826_S_1.jpg",
            "product_name": "HTC Desire 826"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Feature Phone, BlackBerry OS 10.2 ", "3.1 inches, 720 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Q5/BlackBerry_Q5_S_1.jpg",
            "product_name": "BlackBerry Q5"
        },
        {
            "price": "\nRs 1,949\n - ",
            "desc": ["Feature Phone, Nokia Series 30+", "2.40 inches, 240 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_150/Nokia_150_S_1.jpg",
            "product_name": "Nokia 150"
        },
        {
            "price": "\nRs 6,222\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.7 inches, 720 x 1280 pixels (~312 ppi...", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/YU_Yunique/YU_Yunique_S_1.jpg",
            "product_name": "YU Yunique"
        },
        {
            "price": "\nRs 25,969\n - ",
            "desc": ["Smartphone, iOS 8, upgradable to iOS 10.2", "4.7 inches, 1334 x 750", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_6/Apple_iPhone_6_S_1.jpg",
            "product_name": "Apple iPhone 6 32GB"
        },
        {
            "price": "\nRs 3,750\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "3.0 inches, 320 x 240", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Star/Samsung_Star_S_1.jpg",
            "product_name": "Samsung Galaxy Star S5282"
        },
        {
            "price": "\nRs 7,990\n",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "5.0 inches, 720 x 1280 (HD)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_On5_Pro/Samsung_Galaxy_On5_Pro_S_1.jpg",
            "product_name": "Samsung Galaxy On5 Pro"
        },
        {
            "price": "\nRs 11,000\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S90_Sisley/Lenovo_S90_Sisley_S_1.jpg",
            "product_name": "Lenovo S90 Sisley 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.7 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Oppo_Find_5_Mini/Oppo_Find_5_Mini_S_1.jpg",
            "product_name": "OPPO Find 5 Mini"
        },
        {
            "price": "\nRs 7,330\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_626/HTC_Desire_626_S_1.jpg",
            "product_name": "HTC Desire 626"
        },
        {
            "price": "\nRs 28,999\n - ",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.7 inches, 2560 x 1440 (518ppi)", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_5_/Samsung_Galaxy_Note_5__S_1.jpg",
            "product_name": "Samsung Galaxy Note5 32GB"
        },
        {
            "price": "\nRs 5,249\n - ",
            "desc": ["Smartphone, Android OS, v5.1 (Lollipop)", "4.5 inches, 480 x 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Blaze_4G_plus_Q414/Micromax_Canvas_Blaze_4G_plus_Q414_S_1.jpg",
            "product_name": "Micromax Canvas Blaze 4G+ Q414"
        },
        {
            "price": "\nRs 5,290\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5 inches, 1280 x 720 Pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Turbo_4G/Intex_Aqua_Turbo_4G_S_1.jpg",
            "product_name": "Intex Aqua Turbo 4G"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.8 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_2012/Alcatel_2012_S_1.jpg",
            "product_name": "Alcatel 2012"
        },
        {
            "price": "\nRs 19,990\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_Z3/Sony_Xperia_Z3_S_1.jpg",
            "product_name": "Sony Xperia Z3 16GB"
        },
        {
            "price": "\nRs 41,938\n - ",
            "desc": ["Phablet, Smartphone, Asus ZenUI3.0, And...", "6.8 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 128GB, 32GB, 64GB, 3G...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_3_Ultra/ASUS_Zenfone_3_Ultra_S_1.jpg",
            "product_name": "ASUS ZenFone 3 Ultra ZU680KL"
        },
        {
            "price": "\nRs 12,300\n - ",
            "desc": ["Smartphone, Android Nougat 7.0", "5.3 inches(13.46cm), HD (1280x720)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_K10_2017/LG_K10_2017_S_1.jpg",
            "product_name": "LG K10 (2017)"
        },
        {
            "price": "\nRs 16,490\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A5/Samsung_Galaxy_A5_S_1.jpg",
            "product_name": "Samsung Galaxy A5 (2014)"
        },
        {
            "price": "\nRs 5,780\n - ",
            "desc": ["Smartphone, Tizen 3.0", "4.5 inches, WVGA (480x800)", "4G (LTE), 2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Z4/Samsung_Z4_S_1.jpg",
            "product_name": "Samsung Z4"
        },
        {
            "price": "\nRs 29,077\n - ",
            "desc": ["Smartphone, iOS 10", "4.7 inches, 1334 x 750-pixel resolution...", "2G, 3G, 4G (LTE), 128GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_6s/Apple_iPhone_6s_S_1.jpg",
            "product_name": "Apple iPhone 6s 128GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_M8/HTC_One_M8_S_1.jpg",
            "product_name": "HTC One (M8) 32GB"
        },
        {
            "price": "\nRs 7,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_5_A500KL/ASUS_Zenfone_5_A500KL_S_1.jpg",
            "product_name": "ASUS ZenFone 5 A500KL 16GB"
        },
        {
            "price": "\nRs 7,569\n - ",
            "desc": ["Smartphone, Android M (6.0)", "5.2 inches, FHD, 1920 x 1080 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_F1S/LYF_WATER_F1S_S_1.jpg",
            "product_name": "LYF WATER F1S"
        },
        {
            "price": "\nRs 14,990\n - ",
            "desc": ["Smartphone, Android with HTC Sense", "5.2 inches, 1440 x 2560", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_ME/HTC_One_ME_S_1.jpg",
            "product_name": "HTC One ME dual sim"
        },
        {
            "price": "\nRs 19,590\n - ",
            "desc": ["Smartphone, Phablet, Android 6 with HTC...", "5.2 inches, Quad HD (2560 x 1440 pixels...", "3G, 4G (LTE), 2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_10_Pro/HTC_Desire_10_Pro_S_1.jpg",
            "product_name": "HTC Desire 10 Pro"
        },
        {
            "price": "\nRs 29,994\n",
            "desc": ["Smartphone, Android OS, v5.1.1 (Lollipo...", "5.4 inches, 1440 x 2560 pixels (~540 pp...", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_Force/Motorola_Moto_X_Force_S_1.jpg",
            "product_name": "Motorola Moto X Force 32GB"
        },
        {
            "price": "\nRs 3,440\n",
            "desc": ["Feature Phone, Nokia Asha software plat...", "2.8 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_230/Nokia_Asha_230_S_1.jpg",
            "product_name": "Nokia Asha 230"
        },
        {
            "price": "\nRs 14,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5.3 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_T3/Sony_Xperia_T3_S_1.jpg",
            "product_name": "Sony Xperia T3"
        },
        {
            "price": "\nRs 22,990\n",
            "desc": ["Smart Watch", "1.63 inches, 320 x 320", "4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Gear_SM_V700/Samsung_Galaxy_Gear_SM_V700_S_1.jpg",
            "product_name": "Samsung Galaxy Gear SM-V700"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Feature Phone, BlackBerry OS 7.1", "2.44 inches, 320 x 240", "2G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_9220/BlackBerry_Curve_9220_S_1.jpg",
            "product_name": "BlackBerry Curve 9220"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_Z3/Sony_Xperia_Z3_S_1.jpg",
            "product_name": "Sony Xperia Z3 32GB"
        },
        {
            "price": "\nRs 15,999\n",
            "desc": ["Phablet, Smartphone, Android 5.1 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_VIBE_P1/Lenovo_VIBE_P1_S_1.jpg",
            "product_name": "Lenovo Vibe P1"
        },
        {
            "price": "\nRs 7,990\n - ",
            "desc": ["Smartphone, Android OS, v5.1 (Lollipop)", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J3_Pro/Samsung_Galaxy_J3_Pro_S_1.jpg",
            "product_name": "Samsung Galaxy J3 Pro"
        },
        {
            "price": "\nRs 18,880\n - ",
            "desc": ["Smartphone, Android 5.1.1 Lollipop", "14.48 cm (5.7), 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A8/Samsung_Galaxy_A8_S_1.jpg",
            "product_name": "Samsung Galaxy A8 (2015)"
        },
        {
            "price": "\nRs 2,030\n - ",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_108/Nokia_108_S_1.jpg",
            "product_name": "Nokia 108 Dual SIM"
        },
        {
            "price": "\nRs 40,389\n - ",
            "desc": ["Smartphone, Android v7.1 Nougat", "5.0 inches, FHD AMOLED (1080 x 1920)", "2G, 3G, 4G (LTE), 128GB, 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Google_Pixel_/Google_Pixel__S_1.jpg",
            "product_name": "Google Pixel"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Windows 10 Mobile", "5.7 inches (~74.3% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_950_XL/Microsoft_Lumia_950_XL_S_1.jpg",
            "product_name": "Microsoft Lumia 950 XL"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "5.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Gpad_G3/Gionee_Gpad_G3_S_1.jpg",
            "product_name": "Gionee Gpad G3"
        },
        {
            "price": "\nRs 39,790\n - ",
            "desc": ["Smartphone, Android OS, v6.0.1 (Marshma...", "5.2 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_XZ/Sony_Xperia_XZ_S_1.jpg",
            "product_name": "Sony Xperia XZ"
        },
        {
            "price": "\nRs 4,695\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0", "5.5 inches, 720x1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K9_Viraat/Karbonn_K9_Viraat_S_1.jpg",
            "product_name": "Karbonn K9 Viraat"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, iOS ", "3.5 inches, 480 x 320", "2G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone/Apple_iPhone_S_1.jpg",
            "product_name": "Apple iPhone 4GB"
        },
        {
            "price": "\nRs 18,990\n - ",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "5.7 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_3/Samsung_Galaxy_Note_3_S_1.jpg",
            "product_name": "Samsung Galaxy Note 3 16GB"
        },
        {
            "price": "\nRs 8,499\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_2_ZE551ML/Asus_Zenfone_2_ZE551ML_S_1.jpg",
            "product_name": "ASUS ZenFone 2 ZE551ML 16GB"
        },
        {
            "price": "\nRs 9,900\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "4.3 inches, 960 x 540", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Droid_RAZR_XT912/Motorola_Droid_RAZR_XT912_S_1.jpg",
            "product_name": "Motorola Droid RAZR XT912"
        },
        {
            "price": "\nRs 12,499\n - ",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.68 inches, 1920 x 1080", "2G, 3G, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One/HTC_One_S_1.jpg",
            "product_name": "HTC One Dual Sim"
        },
        {
            "price": "\nRs 8,999\n",
            "desc": ["Smartphone, Android 6.0 (Marshmallow)", "5 inches (2.5D Glass), FHD (1920x1080pi...", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/YU_Yureka_Black/YU_Yureka_Black_S_1.jpg",
            "product_name": "YU Yureka Black"
        },
        {
            "price": "\nRs 28,499\n",
            "desc": ["Smartphone", "2.6 inches, 480 x 320", "2G, 3G, 1GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Bold_9000/BlackBerry_Bold_9000_S_1.jpg",
            "product_name": "BlackBerry Bold 9000"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, MiFavor UI 4.0(And...", "5.5 inches, WQHD (2560 x 1440)", "2G, 3G, 4G (LTE), 64GB, 128GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_AXON_7/ZTE_AXON_7_S_1.jpg",
            "product_name": "ZTE AXON 7"
        },
        {
            "price": "\nRs 8,199\n",
            "desc": ["Smartphone, Windows Phone 8.1", "5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_535/Microsoft_Lumia_535_S_1.jpg",
            "product_name": "Microsoft Lumia 535"
        },
        {
            "price": "\nRs 14,100\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.7 inches, 480 x 800 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Grand_Quattro_I8552/Samsung_Galaxy_Grand_Quattro_I8552_S_1.jpg",
            "product_name": "Samsung Galaxy Grand Quattro I8552"
        },
        {
            "price": "\nRs 3,499\n - ",
            "desc": ["Smartphone, Android Marshmallow 6.0", "5 inches, HD (1280*720)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_supreme_4_Q352/Micromax_Bolt_supreme_4_Q352_S_1.jpg",
            "product_name": "Micromax Bolt supreme 4 Q352"
        },
        {
            "price": "\nRs 32,994\n",
            "desc": ["Smartphone, Android OS, v5.1.1 (Lollipo...", "5.4 inches, 1440 x 2560 pixels (~540 pp...", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_Force/Motorola_Moto_X_Force_S_1.jpg",
            "product_name": "Motorola Moto X Force 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0 (Marsh...", "5.5 inches, HD(1280x720)", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_I3_Mega/Panasonic_Eluga_I3_Mega_S_1.jpg",
            "product_name": "Panasonic Eluga I3 Mega"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Android 5.0 + HUAWEI EMUI 3.1", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_P8_lite/Huawei_P8_lite_S_1.jpg",
            "product_name": "Huawei P8lite"
        },
        {
            "price": "\nRs 7,490\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/YU_YuPhoria/YU_YuPhoria_S_1.jpg",
            "product_name": "YU YuPhoria"
        },
        {
            "price": "\nRs 18,999\n",
            "desc": ["Smartphone, iOS 4 ", "3.5 inches, 960 x 640", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_4/Apple_iPhone_4_S_1.jpg",
            "product_name": "Apple iPhone 4 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lillipop", "4.00 inches, qHD 960 x 540 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Ringing_Bells_Freedom_251/Ringing_Bells_Freedom_251_S_1.jpg",
            "product_name": "Ringing Bells Freedom 251"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android M (6.0)", "5.0 inches, 2584 x 1938 pixels", "4G (LTE), 2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Spark_4G/Micromax_Spark_4G_S_1.jpg",
            "product_name": "Micromax Spark 4G"
        },
        {
            "price": "\nRs 1,259\n - ",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_KKT_Uno/Lava_KKT_Uno_S_1.jpg",
            "product_name": "Lava KKT Uno"
        },
        {
            "price": "\nRs 8,046\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720 pixel", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_L/Panasonic_Eluga_L_S_1.jpg",
            "product_name": "Panasonic Eluga L 4G"
        },
        {
            "price": "\nRs 4,927\n",
            "desc": ["Feature Phone", "220 x 176", "2G, 3G, Less than 0.5GB, 0.75GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Z130/Samsung_Z130_S_1.jpg",
            "product_name": "Samsung Z130"
        },
        {
            "price": "\nRs 25,846\n - ",
            "desc": ["Phablet", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 128GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_6_Plus/Apple_iPhone_6_Plus_S_1.jpg",
            "product_name": "Apple iPhone 6 Plus 128GB"
        },
        {
            "price": "\nRs 3,599\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_205/Nokia_Asha_205_S_1.jpg",
            "product_name": "Nokia Asha 205"
        },
        {
            "price": "\nRs 19,900\n - ",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_3_Neo/Samsung_Galaxy_Note_3_Neo_S_1.jpg",
            "product_name": "Samsung Galaxy Note 3 Neo"
        },
        {
            "price": "\nRs 1,049\n",
            "desc": ["Feature Phone", "1.36 inches, 96 x 68", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_1280/Nokia_1280_S_1.jpg",
            "product_name": "Nokia 1280"
        },
        {
            "price": "\nRs 7,783\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop (Emoti...", "5.00 inches, 1280\u00d7720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_Holly2_plus/Huawei_Honor_Holly2_plus_S_1.jpg",
            "product_name": "Honor holly 2 plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.8 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_III_I747/Samsung_Galaxy_S_III_I747_S_1.jpg",
            "product_name": "Samsung Galaxy S III I747"
        },
        {
            "price": "\nRs 25,846\n - ",
            "desc": ["Smartphone, Android 6.0 (Marshmallow)", "5.10 inches, 2560\u00d71440 Super AMOELD", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S7_new/Samsung_Galaxy_S7_new_S_1.jpg",
            "product_name": "Samsung Galaxy S7"
        },
        {
            "price": "\nRs 4,603\n - ",
            "desc": ["Smartphone, Android 5.1 (Lollipop) with...", "4.5 inches, 480x854 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_T50/Panasonic_T50_S_1.jpg",
            "product_name": "Panasonic T50"
        },
        {
            "price": "\nRs 10,768\n - ",
            "desc": ["Smartphone, iOS 7", "4 inches, 1136 x 640", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_5c/Apple_iPhone_5c_S_1.jpg",
            "product_name": "Apple iPhone 5c 8GB"
        },
        {
            "price": "\nRs 4,798\n - ",
            "desc": ["Smartphone, Phablet, Android 5.1", "5.5 inches, 720x1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_MEGA_E353/Micromax_Canvas_MEGA_E353_S_1.jpg",
            "product_name": "Micromax Canvas Mega E353"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "5.2 inches, 2048 x 1556 pixels", "32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/YU_YU5050/YU_YU5050_S_1.jpg",
            "product_name": "YU YU5050"
        },
        {
            "price": "\nRs 5,190\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "3 inches, 320 x 240", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Pocket_Neo_S5310/Samsung_Galaxy_Pocket_Neo_S5310_S_1.jpg",
            "product_name": "Samsung Galaxy Pocket Neo S5310"
        },
        {
            "price": "\nRs 27,699\n - ",
            "desc": ["Smartphone, Android 6.0.1 (Marshmallow)", "5.2 inches, 1920 x 1080 (FHD)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A5_2017_c/Samsung_Galaxy_A5_2017_c_S_1.jpg",
            "product_name": "Samsung Galaxy A5 (2017)"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 7.0 with EMUI 5.0", "5.2 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_P8_lite_2017/Huawei_P8_lite_2017_S_1.jpg",
            "product_name": "Huawei P8 lite (2017)"
        },
        {
            "price": "\nRs 7,999\n - ",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Note_3/Coolpad_Note_3_S_1.jpg",
            "product_name": "Coolpad Note 3"
        },
        {
            "price": "\nRs 14,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5.1 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S5/Samsung_Galaxy_S5_S_1.jpg",
            "product_name": "Samsung Galaxy S5 16GB"
        },
        {
            "price": "\nRs 17,999\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_Eye/HTC_Desire_Eye_S_1.jpg",
            "product_name": "HTC Desire Eye"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, v6.0 Android Marshmallow", "5.0 inches, 854 X 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_P7/Lava_P7_S_1.jpg",
            "product_name": "Lava P7"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Fly_Vogue_S220/Fly_Vogue_S220_S_1.jpg",
            "product_name": "Fly Vogue S220"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 5.1 Lollipop", "6 inches, 720 x 1280 Pixels", "2G, 3G, 32GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Predator_6/Acer_Predator_6_S_1.jpg",
            "product_name": "Acer Predator 6"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.7 inches, Full HD 1080p, 468 PPI", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One/HTC_One_S_1.jpg",
            "product_name": "HTC One 32GB"
        },
        {
            "price": "\nRs 5,925\n - ",
            "desc": ["Smartphone, Android 5.1 (Lollipop)", "5 inches, 1280x720", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_xp_4G/Micromax_Canvas_xp_4G_S_1.jpg",
            "product_name": "Micromax Canvas XP 4G Q413"
        },
        {
            "price": "\nRs 8,900\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_820/HTC_Desire_820_S_1.jpg",
            "product_name": "HTC Desire 820"
        },
        {
            "price": "\nRs 42,290\n - ",
            "desc": ["Phablet, Smartphone, Android 7.0 with H...", "5.7 inches, QHD (2560 x 1440 pixels)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_U_Ultra_ph/HTC_U_Ultra_ph_S_1.jpg",
            "product_name": "HTC U Ultra"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 5.1.1, Lol...", "5.7 inches, 1440x2560", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_Style/Motorola_Moto_X_Style_S_1.jpg",
            "product_name": "Motorola Moto X Style (XT1572) 32GB"
        },
        {
            "price": "\nRs 5,990\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_X8_16GB/Lava_Iris_X8_16GB_S_1.jpg",
            "product_name": "Lava Iris X8 16GB"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "5.5 inches, HD, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_nubia_N1_lite/ZTE_nubia_N1_lite_S_1.jpg",
            "product_name": "nubia N1 lite"
        },
        {
            "price": "\nRs 48,499\n - ",
            "desc": ["Smartphone, Google Android N", "5.2 inches, Full HD", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_xperia_XZs/Sony_xperia_XZs_S_1.jpg",
            "product_name": "Sony Xperia XZs"
        },
        {
            "price": "\nRs 10,999\n - ",
            "desc": ["Smartphone, Android 5.1.1 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G_3nd_Gen/Motorola_Moto_G_3nd_Gen_S_1.jpg",
            "product_name": "Motorola Moto G (3rd gen) 16GB"
        },
        {
            "price": "\nRs 17,599\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_S7/Gionee_Elife_S7_S_1.jpg",
            "product_name": "Gionee Elife S7"
        },
        {
            "price": "\nRs 5,700\n - ",
            "desc": ["Feature Phone", "3 inches, 400 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_311/Nokia_Asha_311_S_1.jpg",
            "product_name": "Nokia Asha 311"
        },
        {
            "price": "\nRs 15,250\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_G6/Huawei_Ascend_G6_S_1.jpg",
            "product_name": "Huawei Ascend G6"
        },
        {
            "price": "\nRs 5,550\n",
            "desc": ["Feature Phone, Nokia Asha software plat...", "3 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_502/Nokia_Asha_502_S_1.jpg",
            "product_name": "Nokia Asha 502 Dual SIM"
        },
        {
            "price": "\nRs 38,990\n - ",
            "desc": ["Phablet", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 64GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_6_Plus/Apple_iPhone_6_Plus_S_1.jpg",
            "product_name": "Apple iPhone 6 Plus 64GB"
        },
        {
            "price": "\nRs 29,999\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0.1 (Mar...", "5.70 inches, FHD (1080 x 1920)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A5_2017_c/Samsung_Galaxy_A5_2017_c_S_1.jpg",
            "product_name": "Samsung Galaxy A7 (2017)"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat", "6.40 inches, 2K (1080 x 2040)", "2G, 3G, 4G (LTE), 128GB, 256GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xiaomi_Mi_Mix/Xiaomi_Mi_Mix_S_1.jpg",
            "product_name": "Xiaomi MIX EVO"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Cyanogen OS 12.1 Android OS...", "5.2 inches, 1440 x 2560 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/YU_Yutopia/YU_Yutopia_S_1.jpg",
            "product_name": "YU Yutopia"
        },
        {
            "price": "\nRs 11,488\n - ",
            "desc": ["Smartphone, Android 4.1.1 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 64GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_X/HTC_One_X_S_1.jpg",
            "product_name": "HTC One X+ 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, iOS 3 ", "3.5 inches, 480 x 320", "2G, 3G, 16GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_3GS/Apple_iPhone_3GS_S_1.jpg",
            "product_name": "Apple iPhone 3GS 16GB"
        },
        {
            "price": "\nRs 2,199\n - ",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "2.8 inches, 320 x 240", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A24/Micromax_Bolt_A24_S_1.jpg",
            "product_name": "Micromax Bolt A24"
        },
        {
            "price": "\nRs 5,990\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "6 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Doodle_4_Q391/Micromax_Canvas_Doodle_4_Q391_S_1.jpg",
            "product_name": "Micromax Canvas Doodle 4 Q391"
        },
        {
            "price": "\nRs 28,999\n - ",
            "desc": ["Phablet, Smartphone, OxygenOS based on ...", "5.5 inches, 1080p Full HD (1920 x 1080 ...", "2G, 3G, 4G (LTE), 128GB, 64GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ONeplus_3T_IN/ONeplus_3T_IN_S_1.jpg",
            "product_name": "OnePlus 3T"
        },
        {
            "price": "\nRs 36,999\n",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "6.4 inches, 1440 x 2560 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Phab_2_Pro_/Lenovo_Phab_2_Pro__S_1.jpg",
            "product_name": "Lenovo Phab 2 Pro"
        },
        {
            "price": "\nRs 10,990\n - ",
            "desc": ["Phablet, Android 4.4 KitKat", "13.97cm(5.5), 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_Icon/Panasonic_Eluga_Icon_S_1.jpg",
            "product_name": "Panasonic Eluga Icon"
        },
        {
            "price": "\nRs 2,290\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 800 x 480", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Konnect_4E/Swipe_Konnect_4E_S_1.jpg",
            "product_name": "Swipe Konnect 4E"
        },
        {
            "price": "\nRs 7,400\n - ",
            "desc": ["Smartphone, HIVE UI Built on Android v5.1", "5 inches, FHD (1080 x 1920)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Black_X1/Xolo_Black_X1_S_1.jpg",
            "product_name": "Xolo BLACK 1X"
        },
        {
            "price": "\nRs 31,650\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "6 inches, 1920 x 1080 (FHD)", "2G, 3G, 4G (LTE), 64GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_C9_Pro_temp/Samsung_Galaxy_C9_Pro_temp_S_1.jpg",
            "product_name": "Samsung Galaxy C9 Pro"
        },
        {
            "price": "\nRs 6,499\n - ",
            "desc": ["Smartphone, Lollipop 5.1", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_5_E481/Micromax_Canvas_5_E481_S_1.jpg",
            "product_name": "Micromax Canvas 5 E481"
        },
        {
            "price": "\nRs 7,399\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "5.5 inches, 720 x 1080 pixels", "2G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Mega_3/Coolpad_Mega_3_S_1.jpg",
            "product_name": "Coolpad Mega 3"
        },
        {
            "price": "\nRs 15,990\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v7.0 (...", "5.70 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_stylo_3/LG_stylo_3_S_1.jpg",
            "product_name": "LG Stylus 3"
        },
        {
            "price": "\nRs 11,200\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.3 inches, 480 x 800pixel", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_GalaxyCore_i8262/Samsung_GalaxyCore_i8262_S_1.jpg",
            "product_name": "Samsung Galaxy Core i8262"
        },
        {
            "price": "\nRs 15,900\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0.1...", "5.5 inches, Full HD Display (1080 x 192...", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_On_Nxt/Samsung_Galaxy_On_Nxt_S_1.jpg",
            "product_name": "Samsung Galaxy On Nxt"
        },
        {
            "price": "\nRs 4,249\n - ",
            "desc": ["Feature Phone, Nokia Asha software plat...", "3 inches, 320 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_501/Nokia_Asha_501_S_1.jpg",
            "product_name": "Nokia Asha 501 Dual SIM"
        },
        {
            "price": "\nRs 10,799\n - ",
            "desc": ["Smartphone, Android Marshmellow, LG UI 5.0", "5.30 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Xpower/LG_Xpower_S_1.jpg",
            "product_name": "LG X Power"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Amigo 3.5 based on...", "5.70 inches, WQHD (1440x2560 )", "2G, 3G, 4G (LTE), 128GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_M2017_P/Gionee_M2017_P_S_1.jpg",
            "product_name": "Gionee M2017"
        },
        {
            "price": "\nRs 11,999\n - ",
            "desc": ["Phablet, Smartphone, EMUI 4.1 + Android...", "5.5 inches, FHD (1920 x 1080)", "2G, 3G, 4G (LTE)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_6X_PH/Huawei_Honor_6X_PH_S_1.jpg",
            "product_name": "Honor 6X"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Symbian 3 ", "3.5 inches, 640 x 360", "2G, 3G, 16GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_N8/Nokia_N8_S_1.jpg",
            "product_name": "Nokia N8"
        },
        {
            "price": "\nRs 17,446\n",
            "desc": ["Smartphone, Google Android, M", "4.6 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_X_Compact_in/Sony_Xperia_X_Compact_in_S_1.jpg",
            "product_name": "Sony Xperia X Compact"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.0.2 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G/Motorola_Moto_G_S_1.jpg",
            "product_name": "Motorola Moto G 4G (2nd gen)"
        },
        {
            "price": "\nRs 6,890\n - ",
            "desc": ["Smartphone, Android 5.1", "4.5 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J1_4G_2017/Samsung_Galaxy_J1_4G_2017_S_1.jpg",
            "product_name": "Samsung Galaxy J1 4G (2017)"
        },
        {
            "price": "\nRs 6,190\n - ",
            "desc": ["Smartphone, Android OS, v5.1.1 (Lollipop)", "4.5 inches, 480 x 800", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J1_2016_/Samsung_Galaxy_J1_2016__S_1.jpg",
            "product_name": "Samsung Galaxy J1 (2016)"
        },
        {
            "price": "\nRs 8,999\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A6000_Shot/Lenovo_A6000_Shot_S_1.jpg",
            "product_name": "Lenovo A6000 Shot"
        },
        {
            "price": "\nRs 9,199\n - ",
            "desc": ["Smartphone, Android OS, v5.1.1 (Lollipo...", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Moto_G_Turbo_Edition/Moto_G_Turbo_Edition_S_1.jpg",
            "product_name": "Motorola Moto G Turbo Edition"
        },
        {
            "price": "\nRs 3,699\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "4 inches, 480 x 800 pixels", "2G, 4G (LTE), 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_FLAME_7/LYF_FLAME_7_S_1.jpg",
            "product_name": "LYF FLAME 7"
        },
        {
            "price": "\nRs 6,890\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.3 inches, 800 x 480", "2G, 3G, 4G (LTE), 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J1_2015/Samsung_Galaxy_J1_2015_S_1.jpg",
            "product_name": "Samsung Galaxy J1 4G (2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 5.1 + Cool...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Note_3_Plus/Coolpad_Note_3_Plus_S_1.jpg",
            "product_name": "Coolpad Note 3 Plus"
        },
        {
            "price": "\nRs 10,500\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.3 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Droid_RAZR_M/Motorola_Droid_RAZR_M_S_1.jpg",
            "product_name": "Motorola Droid RAZR M"
        },
        {
            "price": "\nRs 24,999\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0.1, Mar...", "5.5 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_Z/Motorola_Moto_Z_S_1.jpg",
            "product_name": "Motorola Moto Z"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Fire OS 3.5", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Amazon_Fire_Phone/Amazon_Fire_Phone_S_1.jpg",
            "product_name": "Amazon Fire Phone 32GB"
        },
        {
            "price": "\nRs 32,419\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v7.0 (...", "5.7 inches, 1440 x 2560 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_V20_/LG_V20__S_1.jpg",
            "product_name": "LG V20"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 7", "4.1 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Dell_Venue_Pro/Dell_Venue_Pro_S_1.jpg",
            "product_name": "Dell Venue Pro 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_3G/Intex_Aqua_3G_S_1.jpg",
            "product_name": "Intex Aqua 3G"
        },
        {
            "price": "\nRs 6,078\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1.1", "5.0 inches, 1080x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_1/LYF_WATER_1_S_1.jpg",
            "product_name": "LYF WATER 1"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, BlackBerry OS 6.0", "3.2 inches, 480 x 360", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Torch_9800/BlackBerry_Torch_9800_S_1.jpg",
            "product_name": "BlackBerry Torch 9800"
        },
        {
            "price": "\nRs 5,956\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0inches, HD (1280*720)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_Q338/Micromax_Bolt_Q338_S_1.jpg",
            "product_name": "Micromax Bolt Q338"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Funtouch OS based on Androi...", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y15/Vivo_Y15_S_1.jpg",
            "product_name": "Vivo Y15"
        },
        {
            "price": "\nRs 11,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.8 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_S51/Gionee_Elife_S51_S_1.jpg",
            "product_name": "Gionee Elife S5.1"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_300/Nokia_Asha_300_S_1.jpg",
            "product_name": "Nokia Asha 300"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet", "5.50 inches, 1920*1080", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Mate_S/Huawei_Mate_S_S_1.jpg",
            "product_name": "Huawei Mate S 64GB"
        },
        {
            "price": "\nRs 6,300\n - ",
            "desc": ["Smartphone, Windows Phone 8.1", "5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_535/Microsoft_Lumia_535_S_1.jpg",
            "product_name": "Microsoft Lumia 535 Dual SIM"
        },
        {
            "price": "\nRs 4,995\n - ",
            "desc": ["Smartphone, Android 5.1", "5.00 inches, 720x1280 pixels", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P66_Mega/Panasonic_P66_Mega_S_1.jpg",
            "product_name": "Panasonic P66 Mega"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "800 x 480", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Champion_My_Phone_42/Champion_My_Phone_42_S_1.jpg",
            "product_name": "Champion My Phone 42"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 6.0 Marshmallow", "6inches, 1080 x 1920 pixels (~368 ppi p...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Mate_8/Huawei_Mate_8_S_1.jpg",
            "product_name": "Huawei Mate 8 32GB"
        },
        {
            "price": "\nRs 15,299\n - ",
            "desc": ["Phablet, Windows Phone 8.1", "5.7 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_640_XL/Microsoft_Lumia_640_XL_S_1.jpg",
            "product_name": "Microsoft Lumia 640 XL Dual SIM"
        },
        {
            "price": "\nRs 670\n - ",
            "desc": ["Feature Phone", "1.8 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Jivi_JV_12M/Jivi_JV_12M_S_1.jpg",
            "product_name": "JIVI JV 12M"
        },
        {
            "price": "\nRs 6,179\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A6000/Lenovo_A6000_S_1.jpg",
            "product_name": "Lenovo A6000 Plus"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_D321/Micromax_Bolt_D321_S_1.jpg",
            "product_name": "Micromax Bolt D321"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 8.1", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_640/Microsoft_Lumia_640_S_1.jpg",
            "product_name": "Microsoft Lumia 640 LTE"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G3_Stylus/LG_G3_Stylus_S_1.jpg",
            "product_name": "LG G3 Stylus"
        },
        {
            "price": "\nRs 50,099\n - ",
            "desc": ["Phablet, Smartphone, Android v7.1 Nougat", "5.5 inches, QHD (1440 x 2560) AMOLED at...", "2G, 3G, 4G (LTE), 128GB, 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Google_Pixel_XL_/Google_Pixel_XL__S_1.jpg",
            "product_name": "Google Pixel XL"
        },
        {
            "price": "\nRs 9,990\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1.1", "5.0 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_EARTH_2/LYF_EARTH_2_S_1.jpg",
            "product_name": "LYF EARTH 2"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_X2/Lenovo_Vibe_X2_S_1.jpg",
            "product_name": "Lenovo Vibe X2"
        },
        {
            "price": "\nRs 6,998\n - ",
            "desc": ["Smartphone, Phablet, Android Lollipop 5.1", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_7/LYF_WATER_7_S_1.jpg",
            "product_name": "LYF WATER 7"
        },
        {
            "price": "\nRs 6,134\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A536/Lenovo_A536_S_1.jpg",
            "product_name": "Lenovo A536"
        },
        {
            "price": "\nRs 2,779\n",
            "desc": ["Feature Phone", "6.09 cm (2.4), 320 x 240 (QVGA)", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Metro_360/Samsung_Metro_360_S_1.jpg",
            "product_name": "Samsung Metro 360"
        },
        {
            "price": "\nRs 7,599\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_4G_plus/Intex_Aqua_4G_plus_S_1.jpg",
            "product_name": "Intex Aqua 4G+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A319/Lenovo_A319_S_1.jpg",
            "product_name": "Lenovo A319"
        },
        {
            "price": "\nRs 21,990\n",
            "desc": ["Phablet, OxygenOS based on Android 5.1", "5.5 inches, 1080p Full HD (1920 x 1080 ...", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OnePlus_OnePlus_2/OnePlus_OnePlus_2_S_1.jpg",
            "product_name": "OnePlus 2 64GB"
        },
        {
            "price": "\nRs 5,000\n - ",
            "desc": ["Smartphone", "4.3 inches, 480 x 800 (WVGA)", "2G, 3G, 4GB, 8GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J1_Ace/Samsung_Galaxy_J1_Ace_S_1.jpg",
            "product_name": "Samsung Galaxy J1 Ace"
        },
        {
            "price": "\nRs 7,499\n",
            "desc": ["Smartphone, 5.0.2 Lollipop", "5 inches, HD( 1280*720)", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Amaze_2_E457/Micromax_Canvas_Amaze_2_E457_S_1.jpg",
            "product_name": "Micromax Canvas Amaze 2 E457"
        },
        {
            "price": "\nRs 16,499\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G3_32GB/LG_G3_32GB_S_1.jpg",
            "product_name": "LG G3 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v6.0.1 (Marshma...", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_E3/Motorola_Moto_E3_S_1.jpg",
            "product_name": "Motorola Moto E (3rd gen)"
        },
        {
            "price": "\nRs 5,799\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 480 x 854", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Selfie_2_Q340/Micromax_Canvas_Selfie_2_Q340_S_1.jpg",
            "product_name": "Micromax Canvas Selfie 2 Q340"
        },
        {
            "price": "\nRs 7,199\n - ",
            "desc": ["Feature Phone, BlackBerry OS 7.1", "2.8 inches, 480 x 360", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_9720/BlackBerry_9720_S_1.jpg",
            "product_name": "BlackBerry 9720"
        },
        {
            "price": "\nRs 9,500\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 720 x 1280", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_U/Panasonic_Eluga_U_S_1.jpg",
            "product_name": "Panasonic Eluga U"
        },
        {
            "price": "\nRs 10,490\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4.7 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_730_Dual_SIM/Nokia_Lumia_730_Dual_SIM_S_1.jpg",
            "product_name": "Nokia Lumia 730 Dual SIM"
        },
        {
            "price": "\nRs 5,164\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "5 inches, 480 x 854", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_A/Panasonic_Eluga_A_S_1.jpg",
            "product_name": "Panasonic Eluga A"
        },
        {
            "price": "\nRs 39,999\n - ",
            "desc": ["Phablet, Smartphone, iOS 10", "5.5 inches, 1920x1080-pixel resolution ...", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone6s_plus/Apple_iPhone6s_plus_S_1.jpg",
            "product_name": "Apple iPhone 6s Plus 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "5.3 inches, 1280 x 800", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_I717/Samsung_Galaxy_Note_I717_S_1.jpg",
            "product_name": "Samsung Galaxy Note I717"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 6.0.1 (Marshmallow)", "5.2 inches, FHD (1080 x 1920)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_C5_Pro/Samsung_Galaxy_C5_Pro_S_1.jpg",
            "product_name": "Samsung Galaxy C5 Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1", "4.5 inches, 480\u00d7854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Q7N_Pro/Intex_Aqua_Q7N_Pro_S_1.jpg",
            "product_name": "Intex Aqua Q7N Pro"
        },
        {
            "price": "\nRs 5,990\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720 pixel", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_S/Panasonic_Eluga_S_S_1.jpg",
            "product_name": "Panasonic Eluga S"
        },
        {
            "price": "\nRs 8,713\n - ",
            "desc": ["Smartphone, Funtouch OS 3.0 (based on A...", "5.00 inches, qHD (960 x 540)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y53/Vivo_Y53_S_1.jpg",
            "product_name": "Vivo Y53"
        },
        {
            "price": "\nRs 13,000\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.8 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_E5/Gionee_Elife_E5_S_1.jpg",
            "product_name": "Gionee Elife E5"
        },
        {
            "price": "\nRs 1,583\n - ",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_KKT_40_Power/Lava_KKT_40_Power_S_1.jpg",
            "product_name": "Lava KKT 40 Power"
        },
        {
            "price": "\nRs 11,900\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J/Samsung_Galaxy_J_S_1.jpg",
            "product_name": "Samsung Galaxy J"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Cool1/Coolpad_Cool1_S_1.jpg",
            "product_name": "Coolpad Cool1"
        },
        {
            "price": "\nRs 52,000\n",
            "desc": ["Smartphone, Android v6.0 (Marshmallow)", "4.70 inches, 720x1280 pixels (~312 ppi ...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/CAT_S60/CAT_S60_S_1.jpg",
            "product_name": "CAT Cat S60"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_430_Dual_Sim/Microsoft_Lumia_430_Dual_Sim_S_1.jpg",
            "product_name": "Microsoft Lumia 430 Dual SIM"
        },
        {
            "price": "\nRs 7,199\n - ",
            "desc": ["Smartphone, Android 4.3", "5.0 inches, 1280 x 720", "2G, 3G, 16GB, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_5_A501CG/ASUS_ZenFone_5_A501CG_S_1.jpg",
            "product_name": "ASUS ZenFone 5 A501CG"
        },
        {
            "price": "\nRs 3,799\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "4.7 inches, 1280 x 720", "2G, 3G, 16GB, 8GB, 2GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Speed_HD/Intex_Aqua_Speed_HD_S_1.jpg",
            "product_name": "Intex Aqua Speed HD"
        },
        {
            "price": "\nRs 4,006\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5 inches, 480x854 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_Krypton_V50DA/Videocon_Krypton_V50DA_S_1.jpg",
            "product_name": "Videocon Krypton V50DA"
        },
        {
            "price": "\nRs 5,390\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.50-inches, 480 x 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/panasonic_t45_4g1/panasonic_t45_4g1_S_1.jpg",
            "product_name": "Panasonic T45"
        },
        {
            "price": "\nRs 15,499\n - ",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A7/Samsung_Galaxy_A7_S_1.jpg",
            "product_name": "Samsung Galaxy A7 Duos"
        },
        {
            "price": "\nRs 29,790\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0 with H...", "5.5 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_10_Lifestyle_/HTC_Desire_10_Lifestyle__S_1.jpg",
            "product_name": "HTC Desire 10 Lifestyle"
        },
        {
            "price": "\nRs 3,666\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "4.0 inches, 480 x 800", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_3G_Pro/Intex_Aqua_3G_Pro_S_1.jpg",
            "product_name": "Intex Aqua 3G Pro"
        },
        {
            "price": "\nRs 5,799\n",
            "desc": ["Smartphone, Android 6.0, Marshmallow (6...", "5.0 inches, 480x854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_5G_Blink_4G/iBall_5G_Blink_4G_S_1.jpg",
            "product_name": "iBall 5G Blink 4G"
        },
        {
            "price": "\nRs 8,649\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A7000/Lenovo_A7000_S_1.jpg",
            "product_name": "Lenovo A7000"
        },
        {
            "price": "\nRs 14,170\n - ",
            "desc": ["Smartphone, Android 7.0 with brand-new ...", "5.2 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_3s_Max_ZC521TL_PH/ASUS_ZenFone_3s_Max_ZC521TL_PH_S_1.jpg",
            "product_name": "ASUS ZenFone 3s Max ZC521TL"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_302/Nokia_Asha_302_S_1.jpg",
            "product_name": "Nokia Asha 302"
        },
        {
            "price": "\nRs 1,649\n - ",
            "desc": ["Feature Phone", "2 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Guru_Music_2/Samsung_Guru_Music_2_S_1.jpg",
            "product_name": "Samsung Guru Music 2"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.1.1 Jelly Bean", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_II_N7100/Samsung_Galaxy_Note_II_N7100_S_1.jpg",
            "product_name": "Samsung Galaxy Note II N7100 32GB"
        },
        {
            "price": "\nRs 24,999\n",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "5.5 inches, 1080 x 1920 pixels (~401 pp...", "2G, 3G, 4G (LTE), 128GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Dual_5/Micromax_Dual_5_S_1.jpg",
            "product_name": "Micromax Dual 5"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 6.0, Marshmallow", "4.5 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_B/Lenovo_Vibe_B_S_1.jpg",
            "product_name": "Lenovo Vibe B"
        },
        {
            "price": "\nRs 22,615\n - ",
            "desc": ["Smartphone, iOS 8", "4.7 inches, 1334 x 750", "2G, 3G, 4G (LTE), 128GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone6/Apple_iPhone6_S_1.jpg",
            "product_name": "Apple iPhone 6 128GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "6 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_Mate7/Huawei_Ascend_Mate7_S_1.jpg",
            "product_name": "Huawei Ascend Mate7 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Pioneer_P2/Gionee_Pioneer_P2_S_1.jpg",
            "product_name": "Gionee Pioneer P2"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, BlackBerry OS 5 ", "2.25 inches, 400 x 360", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Pearl_3G_9105/BlackBerry_Pearl_3G_9105_S_1.jpg",
            "product_name": "BlackBerry Pearl 3G 9105"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sharp_Aquos_Crystal/Sharp_Aquos_Crystal_S_1.jpg",
            "product_name": "Sharp Aquos Crystal"
        },
        {
            "price": "\nRs 12,799\n - ",
            "desc": ["Smartphone, Phablet, Funtouch OS 3.0 (b...", "5.5 inches (13.97 cm), HD (1280 x 720)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y66/Vivo_Y66_S_1.jpg",
            "product_name": "Vivo Y66"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "5.50 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Nubia_N2/ZTE_Nubia_N2_S_1.jpg",
            "product_name": "nubia N2"
        },
        {
            "price": "\nRs 12,999\n - ",
            "desc": ["Smartphone, Android 6.0.1", "5.0 inches, Full HD 1920x1080", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_ZUK_Z2_Plus/Lenovo_ZUK_Z2_Plus_S_1.jpg",
            "product_name": "Lenovo Z2 Plus"
        },
        {
            "price": "\nRs 15,000\n",
            "desc": ["Smartphone, Windows Phone 7.5 Mango ", "3.7 inches, 800 x 480", "2G, 3G, 16GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_800/Nokia_Lumia_800_S_1.jpg",
            "product_name": "Nokia Lumia 800"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_E700/Acer_Liquid_E700_S_1.jpg",
            "product_name": "Acer Liquid E700 16GB"
        },
        {
            "price": "\nRs 3,445\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_45E/Intex_Aqua_45E_S_1.jpg",
            "product_name": "Intex Aqua 4.5E"
        },
        {
            "price": "\nRs 13,990\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.95 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Nexus_5_32GB/LG_Nexus_5_32GB_S_1.jpg",
            "product_name": "Google Nexus 5 32GB"
        },
        {
            "price": "\nRs 16,149\n - ",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_E7/Gionee_Elife_E7_S_1.jpg",
            "product_name": "Gionee Elife E7 16GB"
        },
        {
            "price": "\nRs 4,199\n - ",
            "desc": ["Feature Phone", "3 inches, 400 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_305/Nokia_Asha_305_S_1.jpg",
            "product_name": "Nokia Asha 305"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Funtouch OS with A...", "5.85 inches, FHD 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_X9s_Plus/Vivo_X9s_Plus_S_1.jpg",
            "product_name": "Vivo X9s Plus"
        },
        {
            "price": "\nRs 21,649\n - ",
            "desc": ["Smartphone, iOS 6", "4 inches, 1136 x 640", "2G, 3G, 4G (LTE), 64GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_5/Apple_iPhone_5_S_1.jpg",
            "product_name": "Apple iPhone 5 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_P7/Huawei_Ascend_P7_S_1.jpg",
            "product_name": "Huawei Ascend P7"
        },
        {
            "price": "\nRs 3,750\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "3 inches, 320 x 240", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Star_S5280/Samsung_Galaxy_Star_S5280_S_1.jpg",
            "product_name": "Samsung Galaxy Star S5280"
        },
        {
            "price": "\nRs 6,690\n - ",
            "desc": ["Smartphone, Android 6.0", "5 inches, 1280 X 720", "4G (LTE), 2G, 3G, 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_Cube_3/Videocon_Cube_3_S_1.jpg",
            "product_name": "Videocon Cube 3"
        },
        {
            "price": "\nRs 12,999\n - ",
            "desc": ["Phablet, Windows Phone 8", "6 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_1320/Nokia_Lumia_1320_S_1.jpg",
            "product_name": "Nokia Lumia 1320"
        },
        {
            "price": "\nRs 14,349\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Gpad_G5/Gionee_Gpad_G5_S_1.jpg",
            "product_name": "Gionee Gpad G5"
        },
        {
            "price": "\nRs 6,666\n - ",
            "desc": ["Feature Phone, BlackBerry OS 7.0", "2.45 inches, 480 x 360", "2G, 3G, 8GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Bold_9790/BlackBerry_Bold_9790_S_1.jpg",
            "product_name": "BlackBerry Bold 9790"
        },
        {
            "price": "\nRs 15,999\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_C3/Sony_Xperia_C3_S_1.jpg",
            "product_name": "Sony Xperia C3"
        },
        {
            "price": "\nRs 27,999\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_Z5/SONY_Xperia_Z5_S_1.jpg",
            "product_name": "Sony Xperia Z5"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, BlackBerry OS 6.0", "2.44 inches, 480 x 360", "2G, 3G, Less than 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Bold_9780/BlackBerry_Bold_9780_S_1.jpg",
            "product_name": "BlackBerry Bold 9780"
        },
        {
            "price": "\nRs 1,470\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "854 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A7_Star/Karbonn_A7_Star_S_1.jpg",
            "product_name": "Karbonn A7 Star"
        },
        {
            "price": "\nRs 9,977\n - ",
            "desc": ["Smartphone, BlackBerry OS 10.2\r\nupgrada...", "5.0 inches, 720 x 1280 Pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Z30/BlackBerry_Z30_S_1.jpg",
            "product_name": "BlackBerry Z30"
        },
        {
            "price": "\nRs 12,990\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5.2 inches (~70.2% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Nexus_5X/LG_Nexus_5X_S_1.jpg",
            "product_name": "Google Nexus 5X 16GB (LG)"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, iOS 4 ", "3.5 inches, 960 x 640", "2G, 3G, 32GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_4/Apple_iPhone_4_S_1.jpg",
            "product_name": "Apple iPhone 4 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Flyme 6 with Android 6.0 Ma...", "5.2 inches, FHD (1080 x 1920)", "2G, 3G, 4G (LTE), 128GB, 64GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Meizu_Pro_7/Meizu_Pro_7_S_1.jpg",
            "product_name": "Meizu PRO 7"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, nubia UI 4.0 with Android O...", "5.20 inches, Full HD (1920 x 1080)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nubia_Z11_mini_S_/Nubia_Z11_mini_S__S_1.jpg",
            "product_name": "nubia Z11 miniS"
        },
        {
            "price": "\nRs 32,779\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S4_I9506/Samsung_Galaxy_S4_I9506_S_1.jpg",
            "product_name": "Samsung Galaxy S4 I9506 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows 10", "4.7 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_550/Microsoft_Lumia_550_S_1.jpg",
            "product_name": "Microsoft Lumia 550"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Windows 10 Mobile", "5.7inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_950_XL/Microsoft_Lumia_950_XL_S_1.jpg",
            "product_name": "Microsoft Lumia 950 XL Dual SIM"
        },
        {
            "price": "\nRs 5,299\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "5 inches, 480 x 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WIND_6/LYF_WIND_6_S_1.jpg",
            "product_name": "LYF WIND 6"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Phablet, Smartphone, EUI base on Androi...", "5.5 inches, 1920*1080 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LeEco_Le_2/LeEco_Le_2_S_1.jpg",
            "product_name": "LeEco Le 2"
        },
        {
            "price": "\nRs 26,549\n - ",
            "desc": ["Phablet, Smartphone, OxygenOS based on ...", "5.5 inches Optic AMOLED, Full HD (1920 ...", "2G, 3G, 4G (LTE), 64GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OnePlus_3/OnePlus_3_S_1.jpg",
            "product_name": "OnePlus 3"
        },
        {
            "price": "\nRs 5,768\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.7 inches, 960 x 540", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_526G/HTC_Desire_526G_S_1.jpg",
            "product_name": "HTC Desire 526G+ dual sim 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smart Watch, Android 4.4.2 KitKat", "1.56 inches, 240 x 240 pixels", "2G, 3G, 4G (LTE), 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_iRist/Intex_iRist_S_1.jpg",
            "product_name": "Intex Intex iRist"
        },
        {
            "price": "\nRs 4,571\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4.5 inches, 854 x 480", "2G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A40/Micromax_Bolt_A40_S_1.jpg",
            "product_name": "Micromax Bolt A40"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_470/Lava_Iris_470_S_1.jpg",
            "product_name": "Lava Iris 470"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Windows Phone 8", "6 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_1520/Nokia_Lumia_1520_S_1.jpg",
            "product_name": "Nokia Lumia 1520"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "4.5 inches, 854 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_ZenFone_Go_ZB450KL/Asus_ZenFone_Go_ZB450KL_S_1.jpg",
            "product_name": "ASUS ZenFone Go ZB450KL"
        },
        {
            "price": "\nRs 8,450\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 800 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_L70_Dual_D325/LG_L70_Dual_D325_S_1.jpg",
            "product_name": "LG L70 Dual D325"
        },
        {
            "price": "\nRs 27,999\n",
            "desc": ["Phablet, Smartphone, Android 7.1.1 (Nou...", "5.5 inches, 1080p (1920 \u00d7 1080) Super A...", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_Z2_Play/Motorola_Moto_Z2_Play_S_1.jpg",
            "product_name": "Motorola Moto Z2 Play"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Nokia Asha software plat...", "2.8 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_500/Nokia_Asha_500_S_1.jpg",
            "product_name": "Nokia Asha 500 Dual SIM"
        },
        {
            "price": "\nRs 6,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_X5/Lava_Iris_X5_S_1.jpg",
            "product_name": "Lava Iris X5"
        },
        {
            "price": "\nRs 11,299\n - ",
            "desc": ["Smartphone, Phablet, Android 5.1 + Cool...", "5.5 inches, 1920X1080", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Max/Coolpad_Max_S_1.jpg",
            "product_name": "Coolpad Max"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows 10 Mobile", "5.2 inches (~70.5% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_950/Microsoft_Lumia_950_S_1.jpg",
            "product_name": "Microsoft Lumia 950"
        },
        {
            "price": "\n-\n",
            "desc": ["Smart Watch", "0.96 inches OLED touchscreen", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_Band_A2/Huawei_Honor_Band_A2_S_1.jpg",
            "product_name": "Honor Band A2"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Smartphone, lollipop 5.1", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Xpress_4G_Q413/Micromax_Canvas_Xpress_4G_Q413_S_1.jpg",
            "product_name": "Micromax Canvas Xpress 4G Q413"
        },
        {
            "price": "\nRs 8,999\n - ",
            "desc": ["Phablet, Smartphone, v5.1 (Lollipop)", "5.50 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_Z630S/Acer_Liquid_Z630S_S_1.jpg",
            "product_name": "Acer Liquid Z630S"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/One_Touch_Idol_3/One_Touch_Idol_3_S_1.jpg",
            "product_name": "Alcatel One Touch Idol 3 16GB"
        },
        {
            "price": "\nRs 12,994\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G3_16GB/LG_G3_16GB_S_1.jpg",
            "product_name": "LG G3 16GB"
        },
        {
            "price": "\nRs 14,690\n - ",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "6 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_T2_Ultra_dual/Sony_Xperia_T2_Ultra_dual_S_1.jpg",
            "product_name": "Sony Xperia T2 Ultra dual"
        },
        {
            "price": "\nRs 14,998\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S4_I9500_16GB/Samsung_Galaxy_S4_I9500_16GB_S_1.jpg",
            "product_name": "Samsung Galaxy S4 I9500 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 6.0 + EMUI 4.1", "5.0 inches, 720 x 1280 pixels (~294 ppi...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Y5_2017/Huawei_Y5_2017_S_1.jpg",
            "product_name": "Huawei Y5 (2017)"
        },
        {
            "price": "\nRs 8,189\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.5 inches, 960 x 540", "2G, 3G, 4G (LTE), 16GB, 1GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A3_/Samsung_Galaxy_A3__S_1.jpg",
            "product_name": "Samsung Galaxy A3 (2014)"
        },
        {
            "price": "\nRs 4,350\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_NXT/Samsung_Galaxy_Ace_NXT_S_1.jpg",
            "product_name": "Samsung Galaxy Ace NXT"
        },
        {
            "price": "\nRs 19,990\n - ",
            "desc": ["Smartphone, Android v6.0.1 Marshmallow", "6 inches, 1080 x 1920 pixels (~367 ppi ...", "3G, 4G (LTE), 2G, 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_XA_Ultra/SONY_Xperia_XA_Ultra_S_1.jpg",
            "product_name": "Sony XA Ultra"
        },
        {
            "price": "\nRs 9,499\n",
            "desc": ["Smartphone, Windows Phone 8.1 with Lumi...", "5 inches, 1280 x 720 (HD720)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_540/Microsoft_Lumia_540_S_1.jpg",
            "product_name": "Microsoft Lumia 540 Dual SIM"
        },
        {
            "price": "\nRs 7,800\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_2_ZE550ML/Asus_Zenfone_2_ZE550ML_S_1.jpg",
            "product_name": "ASUS ZenFone 2 ZE550ML"
        },
        {
            "price": "\nRs 8,490\n - ",
            "desc": ["Smartphone, Phablet, Android OS, v5.1 (...", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_On7/Samsung_Galaxy_On7_S_1.jpg",
            "product_name": "Samsung Galaxy On7"
        },
        {
            "price": "\nRs 27,990\n",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "5.7 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_3/Samsung_Galaxy_Note_3_S_1.jpg",
            "product_name": "Samsung Galaxy Note 3 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 6.0 (Marshmallow)", "5.2 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Axon_7_Mini_Indonesia/ZTE_Axon_7_Mini_Indonesia_S_1.jpg",
            "product_name": "ZTE AXON 7 mini"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 6.0.1 (Marshmallow)", "4.70 inches, HD (720 x 1280)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A3_2017/Samsung_Galaxy_A3_2017_S_1.jpg",
            "product_name": "Samsung Galaxy A3 (2017)"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, nubia UI 4.0 (base...", "5.50 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nubia_M2_Lite/Nubia_M2_Lite_S_1.jpg",
            "product_name": "nubia M2 lite"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.7 inches, 2560 x 1440 (518ppi)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S6_Edge_plus/Samsung_Galaxy_S6_Edge_plus_S_1.jpg",
            "product_name": "Samsung Galaxy S6 edge+ 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4.3 inches, 800 x 480", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_II_I9100G/Samsung_Galaxy_S_II_I9100G_S_1.jpg",
            "product_name": "Samsung Galaxy S II I9100G"
        },
        {
            "price": "\nRs 1,410\n - ",
            "desc": ["Feature Phone", "1.52 inches, 128 x 128", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_B110/Samsung_B110_S_1.jpg",
            "product_name": "Samsung B110"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.3 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_L/Sony_Xperia_L_S_1.jpg",
            "product_name": "Sony Xperia L"
        },
        {
            "price": "\n-\n",
            "desc": ["Smart Watch, Tizen-based wearable platf...", "1.3 inches, 360 x 360 pixels (~278 ppi ...", "4G (LTE), 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Gear_S3_classic/Samsung_Gear_S3_classic_S_1.jpg",
            "product_name": "Samsung Gear S3 classic"
        },
        {
            "price": "\nRs 8,699\n - ",
            "desc": ["Smartphone, New Star OS Based on Androi...", "5.0inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Pixel_V2/Lava_Pixel_V2_S_1.jpg",
            "product_name": "Lava Pixel V2"
        },
        {
            "price": "\nRs 19,990\n - ",
            "desc": ["Phablet, Smartphone, Android 5.1.1, Lol...", "5.7 inches, 1440x2560", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_Style/Motorola_Moto_X_Style_S_1.jpg",
            "product_name": "Motorola Moto X Style (XT1572) 16GB"
        },
        {
            "price": "\nRs 3,299\n - ",
            "desc": ["Smartphone, Android v5.1", "4.5 inches, FWVGA (854 x 480)", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Atom_2/Lava_Iris_Atom_2_S_1.jpg",
            "product_name": "Lava Iris Atom 2"
        },
        {
            "price": "\nRs 5,692\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.7 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Selfie_A255/Micromax_Canvas_Selfie_A255_S_1.jpg",
            "product_name": "Micromax Canvas Selfie A255"
        },
        {
            "price": "\nRs 3,969\n - ",
            "desc": ["Phablet, Smartphone, Android Marshmallo...", "5.5 inches, HD (1280*720)", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_fire_5_Q386/Micromax_Canvas_fire_5_Q386_S_1.jpg",
            "product_name": "Micromax Canvas fire 5 Q386"
        },
        {
            "price": "\nRs 6,399\n",
            "desc": ["Smartphone, Android 5.1, Lollipop", "5 inches, 720 x 1280 Resolution", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Star_4G/Intex_Aqua_Star_4G_S_1.jpg",
            "product_name": "Intex Aqua Star 4G"
        },
        {
            "price": "\nRs 14,199\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_i7/Intex_Aqua_i7_S_1.jpg",
            "product_name": "Intex Aqua i7"
        },
        {
            "price": "\nRs 15,990\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5.1 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S5/Samsung_Galaxy_S5_S_1.jpg",
            "product_name": "Samsung Galaxy S5 32GB"
        },
        {
            "price": "\nRs 28,213\n - ",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmall...", "5.30 inches, 1440 x 2560 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G5/LG_G5_S_1.jpg",
            "product_name": "LG G5"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.7 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_4_Duos/Samsung_Galaxy_Note_4_Duos_S_1.jpg",
            "product_name": "Samsung Galaxy Note 4 Duos"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_S300/Micromax_Bolt_S300_S_1.jpg",
            "product_name": "Micromax Bolt S300"
        },
        {
            "price": "\nRs 10,990\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_Octane/Karbonn_Titanium_Octane_S_1.jpg",
            "product_name": "Karbonn Titanium Octane"
        },
        {
            "price": "\nRs 24,990\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.7 inches, 1280 x 768", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Nexus_4_E960/LG_Nexus_4_E960_S_1.jpg",
            "product_name": "LG Nexus 4 E960 16GB"
        },
        {
            "price": "\nRs 18,490\n - ",
            "desc": ["Phablet, Android OS, V5.1 Lollipop (Ami...", "6 inches, 2K Resolution 1440 x 2560", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_E8/Gionee_Elife_E8_S_1.jpg",
            "product_name": "Gionee ELIFE E8"
        },
        {
            "price": "\nRs 1,199\n - ",
            "desc": ["Feature Phone", "1.45 inches, 128 x 128", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_105_/Nokia_105__S_1.jpg",
            "product_name": "Nokia 105"
        },
        {
            "price": "\nRs 3,699\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "4 inches, WVGA, 480 x 800 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_FLAME_7S/LYF_FLAME_7S_S_1.jpg",
            "product_name": "LYF FLAME 7S"
        },
        {
            "price": "\nRs 4,599\n - ",
            "desc": ["Feature Phone", "3 inches, 400 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_310/Nokia_Asha_310_S_1.jpg",
            "product_name": "Nokia Asha 310"
        },
        {
            "price": "\nRs 5,780\n - ",
            "desc": ["Smartphone, Android 5.1.1", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_AMAZE_4G_Q491/Micromax_Canvas_AMAZE_4G_Q491_S_1.jpg",
            "product_name": "Micromax Canvas amaze 4G Q491"
        },
        {
            "price": "\nRs 9,499\n - ",
            "desc": ["Phablet, Smartphone, Android OS,v6.0 Ma...", "5.5 inches, 1280 X 720 Pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_P7_Max_PH/Gionee_P7_Max_PH_S_1.jpg",
            "product_name": "Gionee P7 Max"
        },
        {
            "price": "\nRs 11,000\n - ",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.3 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L7_II_Dual_P715/LG_Optimus_L7_II_Dual_P715_S_1.jpg",
            "product_name": "LG Optimus L7 II Dual P715"
        },
        {
            "price": "\nRs 13,890\n",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P81/Panasonic_P81_S_1.jpg",
            "product_name": "Panasonic P81"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_E4_Dual/Sony_Xperia_E4_Dual_S_1.jpg",
            "product_name": "Sony Xperia E4 Dual"
        },
        {
            "price": "\nRs 8,999\n",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.5inches, 720 x 1280 (HD)", "2G, 3G, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Pixel_V1/Lava_Pixel_V1_S_1.jpg",
            "product_name": "Lava Pixel V1 (Android One)"
        },
        {
            "price": "\nRs 4,299\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_X1_Mini/Lava_Iris_X1_Mini_S_1.jpg",
            "product_name": "Lava Iris X1 Mini"
        },
        {
            "price": "\nRs 6,919\n - ",
            "desc": ["Smartphone, Phablet, Android Marshmallo...", "5.5 inches, Full HD, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_Water_7S/LYF_Water_7S_S_1.jpg",
            "product_name": "LYF WATER 7S"
        },
        {
            "price": "\nRs 7,099\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 4GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Juice_4G_Q461/Micromax_Canvas_Juice_4G_Q461_S_1.jpg",
            "product_name": "Micromax Canvas Juice 4G Q461"
        },
        {
            "price": "\nRs 8,000\n - ",
            "desc": ["Smartphone, Windows Phone 8.1", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_630/Nokia_Lumia_630_S_1.jpg",
            "product_name": "Microsoft Lumia 630"
        },
        {
            "price": "\nRs 19,999\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A5/Samsung_Galaxy_A5_S_1.jpg",
            "product_name": "Samsung Galaxy A5 Duos"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v5.0 (Lollipop)", "5.00 inches, 720 x 1280 pixels", "2G, 3G, 8GB, 2GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/XOLO_Cube_5/XOLO_Cube_5_S_1.jpg",
            "product_name": "Xolo Cube 5.0"
        },
        {
            "price": "\nRs 4,700\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 720 x 1280 pixels", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_MachFive/Karbonn_Titanium_MachFive_S_1.jpg",
            "product_name": "Karbonn Titanium MachFive"
        },
        {
            "price": "\n-\n",
            "desc": ["Smart Watch", "1.3 inches, 320 x 320", "4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G_watch/LG_G_watch_S_1.jpg",
            "product_name": "LG G watch"
        },
        {
            "price": "\nRs 22,490\n",
            "desc": ["Phablet, Android 5.0.2 Lollipop", "1920 x 1080", "2G, 3G, 4G (LTE)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ONEPLUS_ONE/ONEPLUS_ONE_S_1.jpg",
            "product_name": "OnePlus One"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G_2nd_Gen/Motorola_Moto_G_2nd_Gen_S_1.jpg",
            "product_name": "Motorola Moto G Dual SIM 2nd gen 16GB"
        },
        {
            "price": "\nRs 1,599\n - ",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_KKT_34i/Lava_KKT_34i_S_1.jpg",
            "product_name": "Lava KKT 34i"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_620/HTC_Desire_620_S_1.jpg",
            "product_name": "HTC Desire 620 dual sim"
        },
        {
            "price": "\nRs 6,085\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Core_II/Samsung_Galaxy_Core_II_S_1.jpg",
            "product_name": "Samsung Galaxy Core 2"
        },
        {
            "price": "\nRs 18,900\n - ",
            "desc": ["Smartphone, Android OS, v5.1.1 (Lollipo...", "5.20 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Galaxy_A5_2016/Samsung_Galaxy_Galaxy_A5_2016_S_1.jpg",
            "product_name": "Samsung Galaxy A5 (2016)"
        },
        {
            "price": "\nRs 1,399\n",
            "desc": ["Feature Phone", "2.4 inches, QVGA(240 x 320)", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_KKT_Uno_Plus/Lava_KKT_Uno_Plus_S_1.jpg",
            "product_name": "Lava KKT Uno Plus"
        },
        {
            "price": "\nRs 6,500\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1.1", "5 inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Reliance_LYF_Wind_4/Reliance_LYF_Wind_4_S_1.jpg",
            "product_name": "LYF WIND 4"
        },
        {
            "price": "\nRs 7,450\n - ",
            "desc": ["Smartphone, Android OS, v5.1 (Lollipop)...", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_On5/Samsung_Galaxy_On5_S_1.jpg",
            "product_name": "Samsung Galaxy On5"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "5.2 inches, 1080x1920", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_5c/Huawei_Honor_5c_S_1.jpg",
            "product_name": "Honor 5C"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 + CoolUI 6.0", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Note_3_lite/Coolpad_Note_3_lite_S_1.jpg",
            "product_name": "Coolpad Note 3 Lite"
        },
        {
            "price": "\nRs 7,350\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "5.5 inches, 1280 x 720 pixels", "3G, 4G (LTE), 2G, 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Mega_2_5D/Coolpad_Mega_2_5D_S_1.jpg",
            "product_name": "Coolpad Mega 2.5D"
        },
        {
            "price": "\nRs 13,099\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_504Q/Lava_Iris_504Q_S_1.jpg",
            "product_name": "Lava Iris 504Q"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet", "5.50 inches, 1920*1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Mate_S/Huawei_Mate_S_S_1.jpg",
            "product_name": "Huawei Mate S 32GB"
        },
        {
            "price": "\nRs 3,090\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A27/Micromax_Bolt_A27_S_1.jpg",
            "product_name": "Micromax Bolt A27"
        },
        {
            "price": "\nRs 4,299\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 480x854 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Juice_4_Q382/Micromax_Canvas_Juice_4_Q382_S_1.jpg",
            "product_name": "Micromax Canvas Juice 4 Q382"
        },
        {
            "price": "\nRs 17,980\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "5.7 inches, 1080 x 1920", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Stylus_2_Plus/LG_Stylus_2_Plus_S_1.jpg",
            "product_name": "LG Stylus 2 Plus"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_202/Nokia_Asha_202_S_1.jpg",
            "product_name": "Nokia Asha 202"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Smartphone, Android 7.0 Nougat", "5.0 inches, HD (1280\u00d7720)", "4G (LTE), 3G, 2G, 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motolora_Moto_C_Plus/Motolora_Moto_C_Plus_S_1.jpg",
            "product_name": "Motorola Moto C Plus"
        },
        {
            "price": "\nRs 9,000\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Trend/Intex_Aqua_Trend_S_1.jpg",
            "product_name": "Intex Aqua Trend"
        },
        {
            "price": "\nRs 9,990\n - ",
            "desc": ["Smartphone, Android with HTC Sense", "5 inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_628_Dual_SIM/HTC_Desire_628_Dual_SIM_S_1.jpg",
            "product_name": "HTC Desire 628 dual sim"
        },
        {
            "price": "\nRs 699\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_C329/Celkon_C329_S_1.jpg",
            "product_name": "Celkon C329"
        },
        {
            "price": "\nRs 5,799\n",
            "desc": ["Feature Phone", "3 inches, 400 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/nokia_asha_308/nokia_asha_308_S_1.jpg",
            "product_name": "Nokia Asha 308"
        },
        {
            "price": "\nRs 18,200\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G2_32GB/LG_G2_32GB_S_1.jpg",
            "product_name": "LG G2 32GB"
        },
        {
            "price": "\nRs 110,900\n - ",
            "desc": ["Smart Watch, watchOS 3", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_Watch_Edition_Series_2/Apple_Watch_Edition_Series_2_S_1.jpg",
            "product_name": "Apple Watch Edition Series 2"
        },
        {
            "price": "\nRs 8,390\n",
            "desc": ["Phablet, Smartphone, EUI base on Androi...", "5.5 inches, 1920 x 1080 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LeEco_Le_1S/LeEco_Le_1S_S_1.jpg",
            "product_name": "LeEco Le 1S"
        },
        {
            "price": "\nRs 13,634\n - ",
            "desc": ["Smartphone, Android Lollipop 5.0.2", "5 inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_2/LYF_WATER_2_S_1.jpg",
            "product_name": "LYF WATER 2"
        },
        {
            "price": "\nRs 17,499\n - ",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.5 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G4_In/LG_G4_In_S_1.jpg",
            "product_name": "LG G4 Dual"
        },
        {
            "price": "\nRs 4,990\n - ",
            "desc": ["Smartphone, lollipop 5.1", "5.0 inches, 720 x 1280", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Nitro_3_E352/Micromax_Canvas_Nitro_3_E352_S_1.jpg",
            "product_name": "Micromax Canvas Nitro 3 E352"
        },
        {
            "price": "\nRs 7,599\n - ",
            "desc": ["Smartphone, Android OS, v4.4.2 (KitKat)...", "5 inches, 720 x 1280", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A5000/Lenovo_A5000_S_1.jpg",
            "product_name": "Lenovo A5000"
        },
        {
            "price": "\nRs 8,900\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_M/Sony_Xperia_M_S_1.jpg",
            "product_name": "Sony Xperia M"
        },
        {
            "price": "\nRs 17,206\n",
            "desc": ["Smartphone", "3.25 inches, 480 x 360", "2G, 3G, 1GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Storm_9530/BlackBerry_Storm_9530_S_1.jpg",
            "product_name": "BlackBerry Storm 9530"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "5.5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_3_Neo_Duos/Samsung_Galaxy_Note_3_Neo_Duos_S_1.jpg",
            "product_name": "Samsung Galaxy Note 3 Neo Duos"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android Wear 2.0", "1.20 inches, 390 x 390 pixels with a PP...", "2G, 3G, 4G (LTE), 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Watch_2/Huawei_Watch_2_S_1.jpg",
            "product_name": "Huawei WATCH 2"
        },
        {
            "price": "\nRs 4,949\n - ",
            "desc": ["Smartphone, Android: 6.0", "4.5 inches, FWVGA 480*854", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Pro_4G/Intex_Aqua_Pro_4G_S_1.jpg",
            "product_name": "Intex Aqua Pro 4G"
        },
        {
            "price": "\nRs 6,699\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_X1_Grand/Lava_Iris_X1_Grand_S_1.jpg",
            "product_name": "Lava Iris X1 Grand"
        },
        {
            "price": "\nRs 18,990\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_Z2/SONY_Xperia_Z2_S_1.jpg",
            "product_name": "Sony Xperia Z2"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, OxygenOS 2.2.0(Android 5.1....", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OnePlus_X/OnePlus_X_S_1.jpg",
            "product_name": "OnePlus X"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Asha_201/Nokia_Asha_201_S_1.jpg",
            "product_name": "Nokia Asha 201"
        },
        {
            "price": "\nRs 725\n",
            "desc": ["Feature Phone", "1.8 inches, 169 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Jivi_JFP_R21/Jivi_JFP_R21_S_1.jpg",
            "product_name": "JIVI JFP R21"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Phablet, Android 5.1 Lollipop", "5.5 inches, HD(1280*720)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_spark_3_Q385/Micromax_Canvas_spark_3_Q385_S_1.jpg",
            "product_name": "Micromax Canvas spark 3 Q385"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Windows Phone 8.1", "5.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_640_XL/Microsoft_Lumia_640_XL_S_1.jpg",
            "product_name": "Microsoft Lumia 640 XL LTE"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0  inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Cobalt_Solus_4G/iBall_Cobalt_Solus_4G_S_1.jpg",
            "product_name": "iBall Cobalt Solus 4G"
        },
        {
            "price": "\nRs 3,799\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 480 x 800", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Star_Pro_S7262/Samsung_Galaxy_Star_Pro_S7262_S_1.jpg",
            "product_name": "Samsung Galaxy Star Pro S7262"
        },
        {
            "price": "\nRs 5,149\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5 inches, 720x1280 pixels\r\nPixel Densit...", "2G, 3G, 4G (LTE), 16GB, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WIND_1/LYF_WIND_1_S_1.jpg",
            "product_name": "LYF WIND 1"
        },
        {
            "price": "\nRs 5,699\n - ",
            "desc": ["Smartphone, Android 7.0 Nougat", "5.0 inches, 480x854", "3G, 4G (LTE), 2G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motolora_Moto_C/Motolora_Moto_C_S_1.jpg",
            "product_name": "Motorola Moto C"
        },
        {
            "price": "\nRs 7,299\n",
            "desc": ["Smartphone, Android 5.0.2 (Lollipop)", "5.00 inches, 1280\u00d7720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Blade_V6/ZTE_Blade_V6_S_1.jpg",
            "product_name": "ZTE Blade V6"
        },
        {
            "price": "\nRs 10,022\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "4.93inch + 1.76inch, 4.93inch(1280\u00d7720)...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_X_screen/LG_X_screen_S_1.jpg",
            "product_name": "LG X Screen"
        },
        {
            "price": "\nRs 12,951\n - ",
            "desc": ["Smartphone, Lollipop 5.0", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_Shot/Lenovo_Vibe_Shot_S_1.jpg",
            "product_name": "Lenovo Vibe Shot"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 5.0 (Lolli...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_Zoom_zx551ml/ASUS_ZenFone_Zoom_zx551ml_S_1.jpg",
            "product_name": "ASUS ZenFone Zoom ZX551ML 32GB"
        },
        {
            "price": "\nRs 8,199\n - ",
            "desc": ["Smartphone, Android 6.0 (Marshmallow)", "5.0 inches, 720 x 1280", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_ELUGA_ARC_2/Panasonic_ELUGA_ARC_2_S_1.jpg",
            "product_name": "Panasonic Eluga Arc 2"
        },
        {
            "price": "\nRs 15,798\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0 with A...", "5.5 inches, 1920x1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_3_Max_ZC553KL_IN/ASUS_ZenFone_3_Max_ZC553KL_IN_S_1.jpg",
            "product_name": "ASUS ZenFone 3 Max ZC553KL"
        },
        {
            "price": "\nRs 29,990\n - ",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.6 inches, 2560 x 1600", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_Edge_32GB/Samsung_Galaxy_Note_Edge_32GB_S_1.jpg",
            "product_name": "Samsung Galaxy Note Edge 32GB"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.3 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_L60/LG_L60_S_1.jpg",
            "product_name": "LG L60"
        },
        {
            "price": "\nRs 17,446\n - ",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.7 inches, 2560 x 1440 (518ppi)", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S6_Edge_plus/Samsung_Galaxy_S6_Edge_plus_S_1.jpg",
            "product_name": "Samsung Galaxy S6 edge+ 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android lollipop 5.1", "5.0 inches, 854 x 480 FWVGA Display Res...", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_4G_Smart/Intex_Cloud_4G_Smart_S_1.jpg",
            "product_name": "Intex Cloud 4G Smart"
        },
        {
            "price": "\nRs 2,699\n - ",
            "desc": ["Smartphone, Android 5.1-Lollipop", "4.0 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Atom/Lava_Iris_Atom_S_1.jpg",
            "product_name": "Lava Iris Atom"
        },
        {
            "price": "\nRs 3,239\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "4.5 inches, 480 x 854 pixels", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Cube/Intex_Cloud_Cube_S_1.jpg",
            "product_name": "Intex Cloud Cube"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.8 inches, 720 x 1280", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Selfie_Q348/Micromax_Canvas_Selfie_Q348_S_1.jpg",
            "product_name": "Micromax Canvas Selfie 3 Q348"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "6 inches, HD 1280 x 720 pixels", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HP_Slate_6_VoiceTab/HP_Slate_6_VoiceTab_S_1.jpg",
            "product_name": "HP Slate 6 VoiceTab"
        },
        {
            "price": "\nRs 11,500\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4.3 inches, 960 x 540", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Amaze/HTC_Amaze_S_1.jpg",
            "product_name": "HTC Amaze 4G"
        },
        {
            "price": "\nRs 13,999\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0, Marsh...", "6.4 inches, Full HD (1920 x 1080)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Phab_2_Plus/Lenovo_Phab_2_Plus_S_1.jpg",
            "product_name": "Lenovo Phab 2 Plus"
        },
        {
            "price": "\nRs 3,499\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 480 x 800", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_D303/Micromax_Bolt_D303_S_1.jpg",
            "product_name": "Micromax Bolt D303"
        },
        {
            "price": "\nRs 17,599\n - ",
            "desc": ["Smartphone, Phablet, Android Lollipop 5...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_EARTH_1/LYF_EARTH_1_S_1.jpg",
            "product_name": "LYF EARTH 1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "640 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Hi_Tech_Amaze_S3/Hi_Tech_Amaze_S3_S_1.jpg",
            "product_name": "Hi-Tech Amaze S3"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Phablet, Android OS, v7.0 (...", "5.5 inches, 720 x 1280 pixels (~267 ppi...", "2G, 3G, 4G (LTE), 16GB, 1.5GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_X_power2/LG_X_power2_S_1.jpg",
            "product_name": "LG X power2"
        },
        {
            "price": "\nRs 805\n - ",
            "desc": ["Feature Phone", "1.8 inches, 128 x 160", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Eco_105/Intex_Eco_105_S_1.jpg",
            "product_name": "Intex ECO 105"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_516/HTC_Desire_516_S_1.jpg",
            "product_name": "HTC Desire 516 dual sim"
        },
        {
            "price": "\nRs 9,900\n - ",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_Duos_S7562/Samsung_Galaxy_S_Duos_S7562_S_1.jpg",
            "product_name": "Samsung Galaxy S Duos S7562"
        },
        {
            "price": "\nRs 13,490\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.3 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S4_mini_I9190/Samsung_Galaxy_S4_mini_I9190_S_1.jpg",
            "product_name": "Samsung Galaxy S4 mini I9190"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor6/Huawei_Honor6_S_1.jpg",
            "product_name": "Honor 6 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 6.0", "5.00 inches", "2G, 3G, 4G (LTE), 16GB, 2GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_P8_lite/Huawei_P8_lite_S_1.jpg",
            "product_name": "Huawei Maya"
        },
        {
            "price": "\nRs 9,990\n - ",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "6 inches, 1280 x 720", "2G, 3G, 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_6/ASUS_Zenfone_6_S_1.jpg",
            "product_name": "ASUS ZenFone 6 16GB"
        },
        {
            "price": "\nRs 28,390\n - ",
            "desc": ["Feature Phone, BlackBerry OS 10.2 ", "4.2 inches, 1280 x 768", "2G, 3G, 4G (LTE), 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Porsche_Design_P'9982/BlackBerry_Porsche_Design_P'9982_S_1.jpg",
            "product_name": "BlackBerry Porsche Design P'9982"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, TouchWiz UI with A...", "5.7 inches, 3840 x 2160 pixels", "2G, 3G, 4G (LTE), 128GB, 64GB, 6GB, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_note8/Samsung_Galaxy_note8_S_1.jpg",
            "product_name": "Samsung Galaxy Note8"
        },
        {
            "price": "\nRs 6,500\n - ",
            "desc": ["Smartphone, Windows Phone 8", "4 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_520/Nokia_Lumia_520_S_1.jpg",
            "product_name": "Nokia Lumia 520"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows 10 Mobile", "5.2 inches (~70.5% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_950_XL/Microsoft_Lumia_950_XL_S_1.jpg",
            "product_name": "Microsoft Lumia 950 Dual SIM"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.5 inches, 540 x 960", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_E_2nd_Gen/Motorola_Moto_E_2nd_Gen_S_1.jpg",
            "product_name": "Motorola Moto E (2nd Gen) LTE"
        },
        {
            "price": "\nRs 8,499\n - ",
            "desc": ["Smartphone, Phablet, Android 6.0 (Marsh...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_ELUGA_NOTE/Panasonic_ELUGA_NOTE_S_1.jpg",
            "product_name": "Panasonic Eluga Note"
        },
        {
            "price": "\nRs 12,923\n - ",
            "desc": ["Smartphone, Android 5.0.2 Lollipop", "5.1 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S6/Samsung_Galaxy_S6_S_1.jpg",
            "product_name": "Samsung Galaxy S6 32GB"
        },
        {
            "price": "\nRs 13,290\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor6/Huawei_Honor6_S_1.jpg",
            "product_name": "Honor 6 16GB"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.7 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Win_I8550/Samsung_Galaxy_Win_I8550_S_1.jpg",
            "product_name": "Samsung Galaxy Win I8550"
        },
        {
            "price": "\nRs 9,970\n - ",
            "desc": ["Smartphone, Android 6.0 (ZenUI 3.5)", "5 inches, 1280 x 720\r\n75% screen-to-bod...", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_Live_ZB501KL/ASUS_ZenFone_Live_ZB501KL_S_1.jpg",
            "product_name": "ASUS ZenFone Live ZB501KL"
        },
        {
            "price": "\nRs 24,999\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.6 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_Z5_Compact/SONY_Xperia_Z5_Compact_S_1.jpg",
            "product_name": "Sony Xperia Z5 Compact"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Xtreme_2/Intex_Aqua_Xtreme_2_S_1.jpg",
            "product_name": "Intex Aqua Xtreme II"
        },
        {
            "price": "\nRs 6,999\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5.25 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Grand_Max/Samsung_Galaxy_Grand_Max_S_1.jpg",
            "product_name": "Samsung Galaxy Grand Max"
        },
        {
            "price": "\nRs 8,990\n - ",
            "desc": ["Smartphone, Phablet, Android 6.0\r\nSkin:...", "5.5 inches, 720 x 1080 pixels", "2G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Note_3S/Coolpad_Note_3S_S_1.jpg",
            "product_name": "Coolpad Note 3S"
        },
        {
            "price": "\nRs 11,649\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_K6_Note/Lenovo_K6_Note_S_1.jpg",
            "product_name": "Lenovo K6 Note"
        },
        {
            "price": "\nRs 17,900\n",
            "desc": ["Phablet, Smartphone, Android Nougat", "5.70 inches, 1080x1920 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J7_Max/Samsung_Galaxy_J7_Max_S_1.jpg",
            "product_name": "Samsung Galaxy J7 Max"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android OS, v5.1.1...", "6.00 inches, 1080 x 1920 pixels (~367 p...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A9/Samsung_Galaxy_A9_S_1.jpg",
            "product_name": "Samsung Galaxy A9"
        },
        {
            "price": "\nRs 4,499\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "4.5 inches, 480 x 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_FLAME_1/LYF_FLAME_1_S_1.jpg",
            "product_name": "LYF FLAME 1"
        },
        {
            "price": "\nRs 8,500\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "3.27 inches, 480 x 320", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Young_S6310/Samsung_Galaxy_Young_S6310_S_1.jpg",
            "product_name": "Samsung Galaxy Young S6310"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, OxygenOS based on Android 5.1", "5.5 inches, 1080p Full HD (1920 x 1080 ...", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OnePlus_OnePlus_2/OnePlus_OnePlus_2_S_1.jpg",
            "product_name": "OnePlus 2 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Emotion UI 4.1, An...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_P9_Plus/Huawei_P9_Plus_S_1.jpg",
            "product_name": "Huawei P9 Plus"
        },
        {
            "price": "\nRs 1,981\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_C1_01/Nokia_C1_01_S_1.jpg",
            "product_name": "Nokia C1-01"
        },
        {
            "price": "\nRs 3,499\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_X1_Atom/Lava_Iris_X1_Atom_S_1.jpg",
            "product_name": "Lava Iris X1 Atom"
        },
        {
            "price": "\nRs 5,990\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_XPERIA_E1/SONY_XPERIA_E1_S_1.jpg",
            "product_name": "Sony Xperia E1"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.1.2 Nougat", "5.50 inches, Quad HD 2560 x 1440", "2G, 3G, 4G (LTE), 128GB, 64GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_9/Nokia_9_S_1.jpg",
            "product_name": "Nokia 9"
        },
        {
            "price": "\nRs 9,490\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.8 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_M2_dual/Sony_Xperia_M2_dual_S_1.jpg",
            "product_name": "Sony Xperia M2 dual"
        },
        {
            "price": "\nRs 10,999\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0, Marsh...", "6.4 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Phab_2/Lenovo_Phab_2_S_1.jpg",
            "product_name": "Lenovo Phab 2"
        },
        {
            "price": "\nRs 12,990\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.95 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Nexus_5_16GB/LG_Nexus_5_16GB_S_1.jpg",
            "product_name": "Google Nexus 5 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android Lollipop 5.1 with g...", "5.00 inches, HD(720 X 1280) 294 PPI", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Era_4G/Xolo_Era_4G_S_1.jpg",
            "product_name": "Xolo Era 4G"
        },
        {
            "price": "\nRs 829\n - ",
            "desc": ["Feature Phone", "160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K105_S/Karbonn_K105_S_S_1.jpg",
            "product_name": "Karbonn K105 S"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 (Nouga...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 64GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_S10/Gionee_S10_S_1.jpg",
            "product_name": "Gionee S10"
        },
        {
            "price": "\nRs 2,200\n - ",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Champ_Neo_Duos_C3262/Samsung_Champ_Neo_Duos_C3262_S_1.jpg",
            "product_name": "Samsung Champ Neo Duos C3262"
        },
        {
            "price": "\nRs 16,229\n - ",
            "desc": ["Smartphone, Android 6.0 with brand-new ...", "5.2 inches, FHD (1920 x 1080)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_zenfone_3_ZE520KL/ASUS_zenfone_3_ZE520KL_S_1.jpg",
            "product_name": "ASUS ZenFone 3 ZE520KL"
        },
        {
            "price": "\nRs 16,500\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S4_I9500/Samsung_Galaxy_S4_I9500_S_1.jpg",
            "product_name": "Samsung Galaxy S4 I9500 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 7.0 (Nougat)", "5.15 inches, (1920 x 1080 pixels)Full H...", "2G, 3G, 4G (LTE), 64GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Honor_9/Honor_9_S_1.jpg",
            "product_name": "Honor 9"
        },
        {
            "price": "\nRs 835\n - ",
            "desc": ["Feature Phone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_V1393/Videocon_V1393_S_1.jpg",
            "product_name": "Videocon V1393"
        },
        {
            "price": "\nRs 9,990\n",
            "desc": ["Smartphone, Windows Phone 8.1", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_640/Microsoft_Lumia_640_S_1.jpg",
            "product_name": "Microsoft Lumia 640 Dual SIM"
        },
        {
            "price": "\nRs 11,990\n - ",
            "desc": ["Phablet, Windows Phone 8.1", "5.7 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_640_XL/Microsoft_Lumia_640_XL_S_1.jpg",
            "product_name": "Microsoft Lumia 640 XL"
        },
        {
            "price": "\n-\n",
            "desc": ["Smart Watch, Android Wear 2.0", "1.20 inches, AMOLED display\r\n390 x 390 ...", "4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Watch_2_Classic/Huawei_Watch_2_Classic_S_1.jpg",
            "product_name": "Huawei WATCH 2 Classic"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches, HD IPS (1280*720) Display R...", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Super/Intex_Aqua_Super_S_1.jpg",
            "product_name": "Intex Aqua Super"
        },
        {
            "price": "\nRs 7,599\n",
            "desc": ["Smartphone, Android Lollipop 5.1.1", "5 inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_5/LYF_WATER_5_S_1.jpg",
            "product_name": "LYF WATER 5"
        },
        {
            "price": "\nRs 18,900\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.2 inches, 540 x 960 pixels", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S4_I9190_Mini/Samsung_Galaxy_S4_I9190_Mini_S_1.jpg",
            "product_name": "Samsung Galaxy S4 Mini I9192"
        },
        {
            "price": "\nRs 29,990\n",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.7 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_4/Samsung_Galaxy_Note_4_S_1.jpg",
            "product_name": "Samsung Galaxy Note 4 (CDMA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 6.0 (Marshmallow) w...", "5.00 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Nova_/Huawei_Nova__S_1.jpg",
            "product_name": "Huawei nova"
        },
        {
            "price": "\nRs 3,450\n - ",
            "desc": ["Smartphone, Android 6.0", "5.0 inches, 1080 x 1920", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_Vista_FHD/Karbonn_Titanium_Vista_FHD_S_1.jpg",
            "product_name": "Karbonn Titanium Vista FHD"
        },
        {
            "price": "\nRs 8,499\n - ",
            "desc": ["Smartphone, Flyme 5.5 with Android OS, ...", "5.2 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Meizu_M5/Meizu_M5_S_1.jpg",
            "product_name": "Meizu M5"
        },
        {
            "price": "\nRs 32,000\n - ",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.7 inches, 2560 x 1440 (518ppi)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_5_/Samsung_Galaxy_Note_5__S_1.jpg",
            "product_name": "Samsung Galaxy Note5 64GB"
        },
        {
            "price": "\nRs 11,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_E8/HTC_One_E8_S_1.jpg",
            "product_name": "HTC One (E8)"
        },
        {
            "price": "\nRs 22,990\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.6 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_Z3_Compact/SONY_Xperia_Z3_Compact_S_1.jpg",
            "product_name": "Sony Xperia Z3 Compact"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Symbian OS 9.2 S60", "2.8 inches, 320 x 240", "2G, 3G, 8GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_N95/Nokia_N95_S_1.jpg",
            "product_name": "Nokia N95 8GB"
        },
        {
            "price": "\nRs 8,499\n - ",
            "desc": ["Smartphone, Android Lollipop, v5.1 (Gua...", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X10/Lava_X10_S_1.jpg",
            "product_name": "Lava X10"
        },
        {
            "price": "\nRs 9,399\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_820q/HTC_Desire_820q_S_1.jpg",
            "product_name": "HTC Desire 820q dual sim"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone2_Laser_ZE500KL/ASUS_Zenfone2_Laser_ZE500KL_S_1.jpg",
            "product_name": "ASUS ZenFone 2 Laser ZE500KL 16GB"
        },
        {
            "price": "\nRs 12,990\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_M4_Aqua_Dual/Sony_Xperia_M4_Aqua_Dual_S_1.jpg",
            "product_name": "Sony Xperia M4 Aqua Dual"
        },
        {
            "price": "\nRs 59,900\n - ",
            "desc": ["Phablet, Smartphone, Nougat 7.0", "5.7 inches, 1440 x 2560 pixels", "2G, 3G, 4G (LTE), 128GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_7_1/Samsung_Galaxy_Note_7_1_S_1.jpg",
            "product_name": "Samsung Galaxy Note7"
        },
        {
            "price": "\nRs 8,000\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_4X/Huawei_Honor_4X_S_1.jpg",
            "product_name": "Honor 4X"
        },
        {
            "price": "\nRs 8,999\n - ",
            "desc": ["Phablet, Smartphone, EMUI4.1 \r\nBased on...", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_Holly_3/Huawei_Honor_Holly_3_S_1.jpg",
            "product_name": "Honor Holly 3"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v6.0.1 (Marshma...", "5.2 inches, 1080 x 1920 pixels (~424 pp...", "2G, 3G, 4G (LTE), 64GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_nubia_Z17_mini/ZTE_nubia_Z17_mini_S_1.jpg",
            "product_name": "nubia Z17mini"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_NITRO_A311/Micromax_Canvas_NITRO_A311_S_1.jpg",
            "product_name": "Micromax Canvas Nitro A311"
        },
        {
            "price": "\nRs 7,678\n - ",
            "desc": ["Smartphone, Windows Phone 8", "4.7 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_625/Nokia_Lumia_625_S_1.jpg",
            "product_name": "Nokia Lumia 625"
        },
        {
            "price": "\nRs 10,400\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_E9s/HTC_One_E9s_S_1.jpg",
            "product_name": "HTC One E9s dual sim"
        },
        {
            "price": "\nRs 13,999\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_816/HTC_Desire_816_S_1.jpg",
            "product_name": "HTC Desire 816 dual sim"
        },
        {
            "price": "\nRs 6,949\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "5.0 inches, 720 x 1280 pixels (~294 ppi...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Unite_4_Pro/Micromax_Canvas_Unite_4_Pro_S_1.jpg",
            "product_name": "Micromax Canvas Unite 4 Pro"
        },
        {
            "price": "\nRs 3,499\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Turbo_mini_A200/Micromax_Canvas_Turbo_mini_A200_S_1.jpg",
            "product_name": "Micromax Canvas Turbo mini A200"
        },
        {
            "price": "\nRs 5,490\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A069/Micromax_Bolt_A069_S_1.jpg",
            "product_name": "Micromax Bolt A069"
        },
        {
            "price": "\nRs 5,940\n - ",
            "desc": ["Smartphone, Android 6.0, Marshmallow", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A6600_Plus_/Lenovo_A6600_Plus__S_1.jpg",
            "product_name": "Lenovo A6600 Plus"
        },
        {
            "price": "\nRs 6,399\n - ",
            "desc": ["Smartphone, Freedom OS with Android Lol...", "5.0 inches, 1920 x 1080 Pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Elite_Plus/Swipe_Elite_Plus_S_1.jpg",
            "product_name": "Swipe Elite Plus"
        },
        {
            "price": "\nRs 8,808\n - ",
            "desc": ["Smartphone, Windows Phone 8.1", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_630/Nokia_Lumia_630_S_1.jpg",
            "product_name": "Microsoft Lumia 630 Dual SIM"
        },
        {
            "price": "\nRs 14,899\n - ",
            "desc": ["Smartphone, Phablet, eUI 5.6(Android v6...", "5.7 inches, 2560 x 1440 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 128GB, 4G...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LeEco_Le_Max_2/LeEco_Le_Max_2_S_1.jpg",
            "product_name": "LeEco Le Max2"
        },
        {
            "price": "\nRs 2,398\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "3.5 inches, HVGA (480 * 320)", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_supreme_Q300/Micromax_Bolt_supreme_Q300_S_1.jpg",
            "product_name": "Micromax Bolt Q300"
        },
        {
            "price": "\nRs 4,750\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop, Guara...", "5.00 inches, HD", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A71_4G/Lava_A71_4G_S_1.jpg",
            "product_name": "Lava A71"
        },
        {
            "price": "\nRs 7,994\n - ",
            "desc": ["Phablet, Smartphone, Android 6 with HTC...", "5.5 inches, 1280x 720 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_825/HTC_Desire_825_S_1.jpg",
            "product_name": "HTC Desire 825"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, iOS ", "3.5 inches, 480 x 320", "2G, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone/Apple_iPhone_S_1.jpg",
            "product_name": "Apple iPhone 8GB"
        },
        {
            "price": "\nRs 1,510\n - ",
            "desc": ["Feature Phone", "2.8 inches, QVGA(240 x 320)", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Spark_Icon/Lava_Spark_Icon_S_1.jpg",
            "product_name": "Lava Spark Icon"
        },
        {
            "price": "\nRs 2,069\n - ",
            "desc": ["Feature Phone", "2.6 inches, QVGA, 240 x 320", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_L800/Gionee_L800_S_1.jpg",
            "product_name": "Gionee L800"
        },
        {
            "price": "\nRs 5,200\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "4 inches, 480 x 800 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Reliance_LYF_Flame_2/Reliance_LYF_Flame_2_S_1.jpg",
            "product_name": "LYF FLAME 2"
        },
        {
            "price": "\nRs 7,500\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Xpress2_E313/Micromax_Canvas_Xpress2_E313_S_1.jpg",
            "product_name": "Micromax Canvas Xpress2 E313"
        },
        {
            "price": "\nRs 7,888\n - ",
            "desc": ["Feature Phone, BlackBerry OS 5.0 ", "2.46 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_3G_9300/BlackBerry_Curve_3G_9300_S_1.jpg",
            "product_name": "BlackBerry Curve 3G 9300"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_45M_Enigma/iBall_Andi_45M_Enigma_S_1.jpg",
            "product_name": "iBall Andi 4.5M Enigma"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Desire_HD/Intex_Aqua_Desire_HD_S_1.jpg",
            "product_name": "Intex Aqua Desire HD"
        },
        {
            "price": "\nRs 48,000\n",
            "desc": ["Smartphone, iOS 7 ", "4 inches, 1136 x 640", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_5c/Apple_iPhone_5c_S_1.jpg",
            "product_name": "Apple iPhone 5c 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, iOS ", "3.5 inches, 480 x 320", "2G, 3G, 16GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_3G/Apple_iPhone_3G_S_1.jpg",
            "product_name": "Apple iPhone 3G 16GB"
        },
        {
            "price": "\nRs 5,190\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.7 inches, 720 x 1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_S_Mini/Panasonic_Eluga_S_Mini_S_1.jpg",
            "product_name": "Panasonic Eluga S Mini"
        },
        {
            "price": "\nRs 5,300\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_A1010/Xolo_A1010_S_1.jpg",
            "product_name": "Xolo A1010"
        },
        {
            "price": "\nRs 15,800\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_C/Sony_Xperia_C_S_1.jpg",
            "product_name": "Sony Xperia C"
        },
        {
            "price": "\nRs 49,900\n",
            "desc": ["Feature Phone, BlackBerry OS 7.0", "2.8 inches, 640 x 480", "2G, 3G, 8GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Porsche_Design_P'9981/BlackBerry_Porsche_Design_P'9981_S_1.jpg",
            "product_name": "BlackBerry Porsche Design P'9981"
        },
        {
            "price": "\nRs 14,100\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.55 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_T/Sony_Xperia_T_S_1.jpg",
            "product_name": "Sony Xperia T"
        },
        {
            "price": "\nRs 3,499\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "2.6 inches, 320 x 240", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_beTouch_E210/Acer_beTouch_E210_S_1.jpg",
            "product_name": "Acer beTouch E210"
        },
        {
            "price": "\nRs 3,759\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A065/Micromax_Bolt_A065_S_1.jpg",
            "product_name": "Micromax Bolt A065"
        },
        {
            "price": "\nRs 4,790\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4 inches, 800 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Star_Pro_S7260/Samsung_Galaxy_Star_Pro_S7260_S_1.jpg",
            "product_name": "Samsung Galaxy Star Pro S7260"
        },
        {
            "price": "\nRs 6,873\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Power_HD/Intex_Aqua_Power_HD_S_1.jpg",
            "product_name": "Intex Aqua Power HD"
        },
        {
            "price": "\nRs 11,999\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_E5/Samsung_Galaxy_E5_S_1.jpg",
            "product_name": "Samsung Galaxy E5"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, iOS 3 ", "3.5 inches, 480 x 320", "2G, 3G, 32GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_3GS/Apple_iPhone_3GS_S_1.jpg",
            "product_name": "Apple iPhone 3GS 32GB"
        },
        {
            "price": "\nRs 4,299\n",
            "desc": ["Phablet, Smartphone, Android OS : 5.1 L...", "5.5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5_5H_Weber/iBall_Andi_5_5H_Weber_S_1.jpg",
            "product_name": "iBall Andi 5.5H Weber"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.3 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Pioneer_P3/Gionee_Pioneer_P3_S_1.jpg",
            "product_name": "Gionee Pioneer P3"
        },
        {
            "price": "\nRs 4,300\n",
            "desc": ["Smartphone, Android OS : 5.1 Lollipop 6...", "5 inches, 480 x 854", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Sprinter_4G/iBall_Sprinter_4G_S_1.jpg",
            "product_name": "iBall Sprinter 4G"
        },
        {
            "price": "\nRs 7,990\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_816G/HTC_Desire_816G_S_1.jpg",
            "product_name": "HTC Desire 816G dual sim"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Symbian OS 9.1 S60", "2.4 inches , 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_N73/Nokia_N73_S_1.jpg",
            "product_name": "Nokia N73"
        },
        {
            "price": "\nRs 1,910\n - ",
            "desc": ["Feature Phone", "2 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Metro_312/Samsung_Metro_312_S_1.jpg",
            "product_name": "Samsung Metro 312"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_C_ZC451CG_/ASUS_Zenfone_C_ZC451CG__S_1.jpg",
            "product_name": "ASUS ZenFone C ZC451CG"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Phablet, EMUI 3.1,  Android...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_5X/Huawei_Honor_5X_S_1.jpg",
            "product_name": "Honor 5X"
        },
        {
            "price": "\nRs 23,990\n - ",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_Z/SONY_Xperia_Z_S_1.jpg",
            "product_name": "Sony Xperia Z"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_M8/HTC_One_M8_S_1.jpg",
            "product_name": "HTC One (M8) dual sim"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_3G_402/Lava_3G_402_S_1.jpg",
            "product_name": "Lava 3G 402+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 8", "4.5 inches, 1280 x 768", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_1020/Nokia_Lumia_1020_S_1.jpg",
            "product_name": "Nokia Lumia 1020 32GB"
        },
        {
            "price": "\nRs 5,589\n",
            "desc": ["Smartphone, Android 5.1", "5 inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WIND_5/LYF_WIND_5_S_1.jpg",
            "product_name": "LYF WIND 5"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Hive_8X_1000/Xolo_Hive_8X_1000_S_1.jpg",
            "product_name": "Xolo Hive 8X-1000"
        },
        {
            "price": "\nRs 1,409\n - ",
            "desc": ["Feature Phone", "1.5 inches, 128 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Guru_FM_Plus/Samsung_Guru_FM_Plus_S_1.jpg",
            "product_name": "Samsung Guru FM Plus"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Fire_3_A096/Micromax_Canvas_Fire_3_A096_S_1.jpg",
            "product_name": "Micromax Canvas Fire 3 A096"
        },
        {
            "price": "\nRs 20,152\n - ",
            "desc": ["Smartphone, Android 6.0 with HTC Sense", "5.0 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 16GB, 3GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_A9/HTC_One_A9_S_1.jpg",
            "product_name": "HTC One A9"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S4_Active_LTE_A/Samsung_Galaxy_S4_Active_LTE_A_S_1.jpg",
            "product_name": "Samsung Galaxy S4 Active LTE-A 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 6.0 Marshmallow", "5.7 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Nexus_6P/Huawei_Nexus_6P_S_1.jpg",
            "product_name": "Google Nexus 6P 32GB (Huawei)"
        },
        {
            "price": "\nRs 3,209\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_A600/Xolo_A600_S_1.jpg",
            "product_name": "Xolo A600"
        },
        {
            "price": "\nRs 3,990\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 480 x 854", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5N_Dude/iBall_Andi_5N_Dude_S_1.jpg",
            "product_name": "iBall Andi 5N Dude"
        },
        {
            "price": "\nRs 6,750\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S850/Lenovo_S850_S_1.jpg",
            "product_name": "Lenovo S850"
        },
        {
            "price": "\nRs 19,999\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.3 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_Z1_Compact/SONY_Xperia_Z1_Compact_S_1.jpg",
            "product_name": "Sony Xperia Z1 Compact"
        },
        {
            "price": "\nRs 31,590\n",
            "desc": ["Phablet, Smartphone, Android 5.0 (Lolli...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_Zoom_zx551ml/ASUS_ZenFone_Zoom_zx551ml_S_1.jpg",
            "product_name": "ASUS ZenFone Zoom ZX551ML 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_KKT_45/Lava_KKT_45_S_1.jpg",
            "product_name": "Lava KKT 45"
        },
        {
            "price": "\nRs 2,749\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "1.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A6_Turbo/Karbonn_A6_Turbo_S_1.jpg",
            "product_name": "Karbonn A6 Turbo"
        },
        {
            "price": "\nRs 5,199\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_435/Microsoft_Lumia_435_S_1.jpg",
            "product_name": "Microsoft Lumia 435"
        },
        {
            "price": "\nRs 8,999\n - ",
            "desc": ["Smartphone, Amigo 3.2 (Android 6.0)", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_F103_Pro/Gionee_F103_Pro_S_1.jpg",
            "product_name": "Gionee F103 Pro"
        },
        {
            "price": "\nRs 11,999\n",
            "desc": ["Phablet, Smartphone, Flyme 6.0 with And...", "5.5 inches, Full HD (1080 x 1920)", "2G, 3G, 4G (LTE), 16GB, 32GB, 64GB, 3GB...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Meizu_m5_Note_PH/Meizu_m5_Note_PH_S_1.jpg",
            "product_name": "Meizu M5 Note"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 320 x 480 pixels", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Hi_Tech_Air_A1/Hi_Tech_Air_A1_S_1.jpg",
            "product_name": "Hi-Tech Air A1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, 4.4 KitKat (Upgradeable to ...", "5 inches, IPS qHD (960X540)", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5M_Xotic/iBall_Andi_5M_Xotic_S_1.jpg",
            "product_name": "iBall Andi 5M Xotic 2GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7 Nougat", "5.50 inches, 720x1280 pixels (268 ppi p...", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Blackberry_Aurora/Blackberry_Aurora_S_1.jpg",
            "product_name": "BlackBerry Aurora"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Pioneer_P4/Gionee_Pioneer_P4_S_1.jpg",
            "product_name": "Gionee Pioneer P4"
        },
        {
            "price": "\nRs 770\n - ",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/M_Tech_G7/M_Tech_G7_S_1.jpg",
            "product_name": "M-Tech G7"
        },
        {
            "price": "\nRs 937\n - ",
            "desc": ["Feature Phone", "1.8 inches, 128 x 160", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_ECO_205/Intex_ECO_205_S_1.jpg",
            "product_name": "Intex ECO 205"
        },
        {
            "price": "\nRs 1,190\n - ",
            "desc": ["Feature Phone", "1.52 inches, 128 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_E1200_Pusha/Samsung_E1200_Pusha_S_1.jpg",
            "product_name": "Samsung E1200 Pusha"
        },
        {
            "price": "\nRs 2,799\n - ",
            "desc": ["Smartphone, Android 5.1", "4.5 inches, 480 x 854", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_45_Pro/Intex_Aqua_45_Pro_S_1.jpg",
            "product_name": "Intex Aqua 4.5 Pro"
        },
        {
            "price": "\nRs 4,790\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.5 inches, HFWVGA (480 x 854)", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Blaze_4G/Micromax_Canvas_Blaze_4G_S_1.jpg",
            "product_name": "Micromax Canvas Blaze 4G"
        },
        {
            "price": "\nRs 12,629\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_X_S960/Lenovo_Vibe_X_S960_S_1.jpg",
            "product_name": "Lenovo Vibe X S960 16GB"
        },
        {
            "price": "\nRs 33,900\n - ",
            "desc": ["Smartphone, Android 5.0.2 Lollipop", "5.1 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S6_edge/Samsung_Galaxy_S6_edge_S_1.jpg",
            "product_name": "Samsung Galaxy S6 edge 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_2700_Classic/Nokia_2700_Classic_S_1.jpg",
            "product_name": "Nokia 2700 Classic"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_Relay_T699/Samsung_Galaxy_S_Relay_T699_S_1.jpg",
            "product_name": "Samsung Galaxy S Relay 4G T699"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 6.0 Marshmallow", "5.7 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 128GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Nexus_6P/Huawei_Nexus_6P_S_1.jpg",
            "product_name": "Google Nexus 6P 128GB (Huawei)"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.3 Ice Cream San...", "960 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/DataWind_PocketSurfer_2G4/DataWind_PocketSurfer_2G4_S_1.jpg",
            "product_name": "DataWind PocketSurfer 2G4"
        },
        {
            "price": "\nRs 1,534\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_E1225_Shift/Samsung_E1225_Shift_S_1.jpg",
            "product_name": "Samsung E1225 Dual Sim Shift"
        },
        {
            "price": "\nRs 5,990\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Fire_A104/Micromax_Canvas_Fire_A104_S_1.jpg",
            "product_name": "Micromax Canvas Fire 2 A104"
        },
        {
            "price": "\nRs 5,990\n",
            "desc": ["Smartphone, Android 6.0", "5 inches, 720 x 1280 Display Resolution", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Style_4G/Intex_Cloud_Style_4G_S_1.jpg",
            "product_name": "Intex Cloud Style 4G"
        },
        {
            "price": "\nRs 10,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_S55/Gionee_Elife_S55_S_1.jpg",
            "product_name": "Gionee Elife S5.5"
        },
        {
            "price": "\nRs 16,999\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5.2 inches (~70.2% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Nexus_5X/LG_Nexus_5X_S_1.jpg",
            "product_name": "Google Nexus 5X 32GB (LG)"
        },
        {
            "price": "\nRs 18,289\n - ",
            "desc": ["Smartphone, Emotion UI 5.0\r\nAndroid OS,...", "5.20 inches, Full HD (1080 x 1920)", "2G, 3G, 4G (LTE), 32GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_8/Huawei_Honor_8_S_1.jpg",
            "product_name": "Honor 8"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "126.3 mm (5.0)", "2G, 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_E500/Samsung_Galaxy_E500_S_1.jpg",
            "product_name": "Samsung Galaxy E500"
        },
        {
            "price": "\nRs 875\n",
            "desc": ["Feature Phone", "160 x 128", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X1850/Micromax_X1850_S_1.jpg",
            "product_name": "Micromax JOY X1850"
        },
        {
            "price": "\nRs 5,190\n",
            "desc": ["Smartphone, Android 6.0 marshmallow Inl...", "4.5 inches, 854\u00d7480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_Bingo_10/InFocus_Bingo_10_S_1.jpg",
            "product_name": "InFocus Bingo 10"
        },
        {
            "price": "\nRs 15,200\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_16GB/Motorola_Moto_X_16GB_S_1.jpg",
            "product_name": "Motorola Moto X 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Symbian OS 9.3, Series 6...", "2.36 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_E5/Nokia_E5_S_1.jpg",
            "product_name": "Nokia E5"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 2.1 Eclair", "3.5 inches, 800 x 480", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Blade/ZTE_Blade_S_1.jpg",
            "product_name": "ZTE Blade"
        },
        {
            "price": "\nRs 5,990\n - ",
            "desc": ["Smartphone, Android 6.0, Marshmallow", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A6600/Lenovo_A6600_S_1.jpg",
            "product_name": "Lenovo A6600"
        },
        {
            "price": "\nRs 17,999\n - ",
            "desc": ["Smartphone, Phablet, Android 6.0 with b...", "5.5 inches, FHD(1920 x 1080)", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_3_Laser_ZC551KL/ASUS_ZenFone_3_Laser_ZC551KL_S_1.jpg",
            "product_name": "ASUS ZenFone 3 Laser ZC551KL"
        },
        {
            "price": "\nRs 18,500\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4.2 inches, 480 x 854 pixels (~233 ppi ...", "2G, 3G, 1GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Ericsson_Xperia_arc_S/Sony_Ericsson_Xperia_arc_S_S_1.jpg",
            "product_name": "Sony Xperia Arc S"
        },
        {
            "price": "\nRs 3,929\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_Holly/Huawei_Honor_Holly_S_1.jpg",
            "product_name": "Honor Holly"
        },
        {
            "price": "\nRs 17,778\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.65 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_One_Touch_Idol_Ultra/Alcatel_One_Touch_Idol_Ultra_S_1.jpg",
            "product_name": "Alcatel One Touch Idol Ultra"
        },
        {
            "price": "\nRs 33,551\n - ",
            "desc": ["Smartphone, Android 6 with HTC Sense", "5.2 inches, Quad HD (2560 x 1440 pixels)", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_10/HTC_10_S_1.jpg",
            "product_name": "HTC 10"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 6.0 Marshmallow", "5.7 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Nexus_6P/Huawei_Nexus_6P_S_1.jpg",
            "product_name": "Google Nexus 6P 64GB (Huawei)"
        },
        {
            "price": "\nRs 2,415\n - ",
            "desc": ["Feature Phone, Series 30+", "2.40 inches, QVGA (320 x 240)", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_216/Nokia_216_S_1.jpg",
            "product_name": "Microsoft Nokia 216"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_X1_Beats/Lava_Iris_X1_Beats_S_1.jpg",
            "product_name": "Lava Iris X1 Beats"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.7 inches, 800 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_A106_UniteR/Micromax_A106_UniteR_S_1.jpg",
            "product_name": "Micromax Canvas Unite 2 A106"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q2500/Xolo_Q2500_S_1.jpg",
            "product_name": "Xolo Q2500"
        },
        {
            "price": "\nRs 6,129\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 854 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A068/Micromax_Bolt_A068_S_1.jpg",
            "product_name": "Micromax Bolt A068"
        },
        {
            "price": "\nRs 12,499\n",
            "desc": ["Phablet, Smartphone, nubia UI 4.0 with ...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_nubia_N1_IN_/ZTE_nubia_N1_IN__S_1.jpg",
            "product_name": "nubia N1"
        },
        {
            "price": "\nRs 13,999\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_2_ZE500CL/Asus_Zenfone_2_ZE500CL_S_1.jpg",
            "product_name": "ASUS ZenFone 2 ZE500CL"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.00 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 8GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_Z530/Acer_Liquid_Z530_S_1.jpg",
            "product_name": "Acer Liquid Z530"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 6.0 (Marshmallow), ...", "5.1 inches, 1440 x 2560 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S7_Active/Samsung_Galaxy_S7_Active_S_1.jpg",
            "product_name": "Samsung Galaxy S7 active"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone", "5.71 inches, QHD (2560 x 1312)", "2G, 3G, 4G (LTE), 128GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Essential_PH_1/Essential_PH_1_S_1.jpg",
            "product_name": "Essential PH-1"
        },
        {
            "price": "\nRs 4,076\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.5 inches, 480 x 320", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Star_2/Samsung_Galaxy_Star_2_S_1.jpg",
            "product_name": "Samsung Galaxy Star 2"
        },
        {
            "price": "\nRs 4,199\n - ",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_4_A210/Micromax_Canvas_4_A210_S_1.jpg",
            "product_name": "Micromax Canvas 4 A210"
        },
        {
            "price": "\nRs 4,299\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280*800", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Elite/Swipe_Elite_S_1.jpg",
            "product_name": "Swipe Elite"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Prime/Xolo_Prime_S_1.jpg",
            "product_name": "Xolo Prime"
        },
        {
            "price": "\nRs 5,750\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.5 inches, 480 x 320", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A066/Micromax_Bolt_A066_S_1.jpg",
            "product_name": "Micromax Bolt A066"
        },
        {
            "price": "\nRs 21,999\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Alpha/Samsung_Galaxy_Alpha_S_1.jpg",
            "product_name": "Samsung Galaxy Alpha"
        },
        {
            "price": "\nRs 26,499\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_6_Plus/Huawei_Honor_6_Plus_S_1.jpg",
            "product_name": "Honor 6 Plus LTE 16GB"
        },
        {
            "price": "\nRs 27,500\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "5.3 inches, 1280 x 800", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_N7000/Samsung_Galaxy_Note_N7000_S_1.jpg",
            "product_name": "Samsung Galaxy Note N7000 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.6 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Pearl_Flip_8220/BlackBerry_Pearl_Flip_8220_S_1.jpg",
            "product_name": "BlackBerry Pearl Flip 8220"
        },
        {
            "price": "\nRs 3,470\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A35/Micromax_Bolt_A35_S_1.jpg",
            "product_name": "Micromax Bolt A35"
        },
        {
            "price": "\nRs 5,290\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_AD4500/Micromax_Bolt_AD4500_S_1.jpg",
            "product_name": "Micromax Bolt AD4500"
        },
        {
            "price": "\nRs 6,099\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5 inches, HD(1280 x 720 pixels)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZOPO_Color_F5/ZOPO_Color_F5_S_1.jpg",
            "product_name": "ZOPO Color F5"
        },
        {
            "price": "\nRs 8,199\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.0 inches, 480 x 800", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_GalaxyTrendLite/Samsung_GalaxyTrendLite_S_1.jpg",
            "product_name": "Samsung Galaxy Trend Lite S7392"
        },
        {
            "price": "\nRs 8,599\n",
            "desc": ["Smartphone, Phablet, Android 5.1 Lollipop", "6 inches, 720x1280 pixels", "3G, 4G (LTE), 2G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WIND_2/LYF_WIND_2_S_1.jpg",
            "product_name": "LYF WIND 2"
        },
        {
            "price": "\nRs 15,499\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0, Marsh...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_P2/Lenovo_P2_S_1.jpg",
            "product_name": "Lenovo P2"
        },
        {
            "price": "\nRs 16,499\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_6_Plus/Huawei_Honor_6_Plus_S_1.jpg",
            "product_name": "Honor 6 Plus LTE 32GB"
        },
        {
            "price": "\nRs 19,960\n - ",
            "desc": ["Smartphone, Android v6.0.1 (Marshmallow)", "5 inches, 1080x1920pixels (~441 ppi pix...", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_X/SONY_Xperia_X_S_1.jpg",
            "product_name": "Sony Xperia X"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_Ultrafone_105/Zen_Ultrafone_105_S_1.jpg",
            "product_name": "Zen Ultrafone 105 3G"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Funtouch OS based on Androi...", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_Y22/Vivo_Y22_S_1.jpg",
            "product_name": "Vivo Y22"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, EMUI 4.1(Android OS, v6.0.1...", "5.5 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_5A/Huawei_Honor_5A_S_1.jpg",
            "product_name": "Honor 5A"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, amigo3.5(Android6.0)", "5.0 inches, HD(1280x720)", "2G, 3G, 4G (LTE), 16GB, 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Steel_2_ID/Gionee_Steel_2_ID_S_1.jpg",
            "product_name": "Gionee Steel 2"
        },
        {
            "price": "\nRs 3,699\n",
            "desc": ["Smartphone, Android 5.0.2,Lolipop", "5.0 inches, 1280 X 720 pixel resolution", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_4G/Intex_Aqua_4G_S_1.jpg",
            "product_name": "Intex Aqua 4G"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 5.0.2 Lolipop UI Li...", "4.5 inches, 480 x 854", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_M260/InFocus_M260_S_1.jpg",
            "product_name": "InFocus M260"
        },
        {
            "price": "\nRs 4,299\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 480 x 800", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Star_2GB/Celkon_Star_2GB_S_1.jpg",
            "product_name": "Celkon 2GB Star"
        },
        {
            "price": "\nRs 9,450\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone2_Laser_ZE500KL/ASUS_Zenfone2_Laser_ZE500KL_S_1.jpg",
            "product_name": "ASUS ZenFone 2 Laser ZE500KL 8GB"
        },
        {
            "price": "\nRs 29,999\n",
            "desc": ["Phablet, Smartphone, Android OS, v5.0 (...", "5.50inches, 1920\u00d71080", "2G, 3G, 4G (LTE), 128GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone2_Deluxe/ASUS_Zenfone2_Deluxe_S_1.jpg",
            "product_name": "ASUS ZenFone 2 Deluxe ZE551ML 128GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Phablet, Android 6.0 Marshm...", "5.5 inches, 1080x1920 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBerry_Axus_4X/iBerry_Axus_4X_S_1.jpg",
            "product_name": "iberry Auxus 4X"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/MEIZU_MX6/MEIZU_MX6_S_1.jpg",
            "product_name": "Meizu MX6"
        },
        {
            "price": "\nRs 3,599\n - ",
            "desc": ["Smartphone, Android 5.1-Lollipop", "5 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A82/Lava_A82_S_1.jpg",
            "product_name": "Lava A82"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_435/Microsoft_Lumia_435_S_1.jpg",
            "product_name": "Microsoft Lumia 435 Dual SIM"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 5.0", "5 inches, 720x1280 pixels", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_TITANIUM_MACH_5/Karbonn_TITANIUM_MACH_5_S_1.jpg",
            "product_name": "Karbonn Titanium Mach Five"
        },
        {
            "price": "\nRs 7,099\n - ",
            "desc": ["Phablet, Smartphone, Android Lollipop 5.1", "6 inches, qHD (960*540)", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_mega_2/Micromax_Canvas_mega_2_S_1.jpg",
            "product_name": "Micromax Canvas Mega 2"
        },
        {
            "price": "\nRs 13,900\n - ",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "4.5 inches, 800 x 480", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_II_Skyrocket_i727/Samsung_Galaxy_S_II_Skyrocket_i727_S_1.jpg",
            "product_name": "Samsung Galaxy S II Skyrocket i727"
        },
        {
            "price": "\nRs 16,884\n",
            "desc": ["Smartphone, Android OS, v6.0.1 (Marshma...", "5.1 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A8_2016/Samsung_Galaxy_A8_2016_S_1.jpg",
            "product_name": "Samsung Galaxy A8 (2016)"
        },
        {
            "price": "\nRs 37,999\n",
            "desc": ["Phablet, Smartphone, Android 5.0 (Lolli...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 128GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_Zoom_zx551ml/ASUS_ZenFone_Zoom_zx551ml_S_1.jpg",
            "product_name": "ASUS ZenFone Zoom ZX551ML 128GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_III_mini_VE_I8200/Samsung_Galaxy_S_III_mini_VE_I8200_S_1.jpg",
            "product_name": "Samsung Galaxy S III mini VE I8200 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 (Nougat)", "5.50 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_4/Motorola_Moto_X_4_S_1.jpg",
            "product_name": "Motorola Moto X4"
        },
        {
            "price": "\nRs 7,199\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_5_A500KL/ASUS_Zenfone_5_A500KL_S_1.jpg",
            "product_name": "ASUS ZenFone 5 A500KL 8GB"
        },
        {
            "price": "\nRs 12,000\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 854 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_U/Sony_Xperia_U_S_1.jpg",
            "product_name": "Sony Xperia U"
        },
        {
            "price": "\nRs 51,330\n",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "5.9 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_ONE_Max/HTC_ONE_Max_S_1.jpg",
            "product_name": "HTC One Max 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.40 inches, 176 x 240 Pixels", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Ringing_Bells_4u/Ringing_Bells_4u_S_1.jpg",
            "product_name": "Ringing Bells 4u"
        },
        {
            "price": "\nRs 927\n - ",
            "desc": ["Feature Phone", "160 x 120", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X090/Micromax_X090_S_1.jpg",
            "product_name": "Micromax X090"
        },
        {
            "price": "\nRs 1,149\n - ",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_ARC_12/Lava_ARC_12_S_1.jpg",
            "product_name": "Lava ARC 12"
        },
        {
            "price": "\nRs 7,779\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_E3/Gionee_Elife_E3_S_1.jpg",
            "product_name": "Gionee Elife E3"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Icon/Lava_Icon_S_1.jpg",
            "product_name": "Lava Icon"
        },
        {
            "price": "\nRs 15,900\n",
            "desc": ["Smartphone, Bada OS 2.0", "4 inches, 800 x 480", "2G, 3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Wave_3_S8600/Samsung_Wave_3_S8600_S_1.jpg",
            "product_name": "Samsung Wave 3 S8600"
        },
        {
            "price": "\nRs 19,999\n - ",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "5.5 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_K900/Lenovo_K900_S_1.jpg",
            "product_name": "Lenovo K900"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Star/Intex_Aqua_Star_S_1.jpg",
            "product_name": "Intex Aqua Star"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.8 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_2_I8160/Samsung_Galaxy_Ace_2_I8160_S_1.jpg",
            "product_name": "Samsung Galaxy Ace 2 I8160"
        },
        {
            "price": "\nRs 4,150\n - ",
            "desc": ["Smartphone, Android 6.0", "4.5 inches, 480 x 854", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Fame_4G/Intex_Cloud_Fame_4G_S_1.jpg",
            "product_name": "Intex Cloud Fame 4G"
        },
        {
            "price": "\nRs 6,149\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_532/Microsoft_Lumia_532_S_1.jpg",
            "product_name": "Microsoft Lumia 532 Dual SIM"
        },
        {
            "price": "\nRs 7,200\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5.0 inches, 720 x 1280 pixels (~294 ppi...", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Ctrl_V6_L/Gionee_Ctrl_V6_L_S_1.jpg",
            "product_name": "Gionee CTRL V6L"
        },
        {
            "price": "\nRs 20,031\n - ",
            "desc": ["Smartphone, Android v6.0.1 (Marshmallow)", "5 inches, 1080x1920 pixels (~441 ppi pi...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_X_Performance/SONY_Xperia_X_Performance_S_1.jpg",
            "product_name": "Sony Xperia X Performance"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches (~66.2% screen-to-body ratio...", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_626s/HTC_Desire_626s_S_1.jpg",
            "product_name": "HTC Desire 626s"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 (Nougat)", "6.45 inches, 1440 x 2880 pixels (~499 p...", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_X_Ultra/Sony_Xperia_X_Ultra_S_1.jpg",
            "product_name": "Sony Xperia X Ultra"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Phablet, Smartphone, Android OS, v5.0 (...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/MEIZU_m2_note/MEIZU_m2_note_S_1.jpg",
            "product_name": "Meizu m2 note"
        },
        {
            "price": "\nRs 13,350\n - ",
            "desc": ["Phablet, Smartphone, Star OS 3.3 with A...", "5.5 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Z25/Lava_Z25_S_1.jpg",
            "product_name": "Lava Z25"
        },
        {
            "price": "\nRs 29,999\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "6 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_Z2_Pro/Lenovo_Vibe_Z2_Pro_S_1.jpg",
            "product_name": "Lenovo Vibe Z2 Pro"
        },
        {
            "price": "\nRs 3,499\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "4 inches, 480x800", "2G, 3G, 4G (LTE), 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/micromax_bharat_2/micromax_bharat_2_S_1.jpg",
            "product_name": "Micromax Bharat 2"
        },
        {
            "price": "\nRs 16,979\n",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "5.7 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Gpad_G4/Gionee_Gpad_G4_S_1.jpg",
            "product_name": "Gionee Gpad G4"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "3 inches, 400 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Akai_6611/Akai_6611_S_1.jpg",
            "product_name": "Akai 6611"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Smartphone, Flyme UI(And...", "5.5 inches, Full HD (1920 x 1080)", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/MEIZU_M3_Note_2/MEIZU_M3_Note_2_S_1.jpg",
            "product_name": "Meizu m3 note"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "3.14 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Mini_S5570/Samsung_Galaxy_Mini_S5570_S_1.jpg",
            "product_name": "Samsung Galaxy Mini S5570"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "6.0 inches, 1080 x 1920 pixels (Full HD)", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/MEIZU_M3_Max/MEIZU_M3_Max_S_1.jpg",
            "product_name": "Meizu M3 Max"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 6.0.1 (Marshmallow)", "5.0 inches, 720 x 1280 pixels (~294 ppi...", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_J3_2017/Samsung_Galaxy_J3_2017_S_1.jpg",
            "product_name": "Samsung Galaxy J3 (2017)"
        },
        {
            "price": "\nRs 6,640\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.8 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Sliver5/Micromax_Canvas_Sliver5_S_1.jpg",
            "product_name": "Micromax Canvas Sliver 5"
        },
        {
            "price": "\nRs 8,500\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1920 x 1080 Pixels (401ppi)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_K3_Note_Music/Lenovo_K3_Note_Music_S_1.jpg",
            "product_name": "Lenovo K3 Note Music"
        },
        {
            "price": "\nRs 20,900\n - ",
            "desc": ["Smart Watch", "38 mm, 272 x 340", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_Watch_Sport/Apple_Watch_Sport_S_1.jpg",
            "product_name": "Apple Watch Sport 38mm"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.0.2 Lollipop", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Nubia_Z9_Mini/ZTE_Nubia_Z9_Mini_S_1.jpg",
            "product_name": "nubia Z9 mini"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0.1 (Mar...", "5.5 inches, FHD (1920x1080)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Blade_V8_Pro/ZTE_Blade_V8_Pro_S_1.jpg",
            "product_name": "ZTE Blade V8 Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0", "5.5 inches, 1080x1920 (FHD)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Blade_A610_Plus/ZTE_Blade_A610_Plus_S_1.jpg",
            "product_name": "ZTE Blade A610 plus"
        },
        {
            "price": "\nRs 2,990\n",
            "desc": ["Feature Phone", "2 inches, 220 x 176", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_Key_Mini_EX109/Motorola_Moto_Key_Mini_EX109_S_1.jpg",
            "product_name": "Motorola Moto Key Mini EX109"
        },
        {
            "price": "\nRs 19,499\n - ",
            "desc": ["Smartphone, Google Android 6.0 (Marshma...", "5.2 inches (13.2 cm), FHD (1920 x 1080)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_Z3_plus/Sony_Xperia_Z3_plus_S_1.jpg",
            "product_name": "Sony Xperia Z3+"
        },
        {
            "price": "\nRs 23,999\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_X_S960/Lenovo_Vibe_X_S960_S_1.jpg",
            "product_name": "Lenovo Vibe X S960 32GB"
        },
        {
            "price": "\nRs 29,990\n",
            "desc": ["Smartphone, Android with HTC Sense", "5.2 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_U_Play_TH/HTC_U_Play_TH_S_1.jpg",
            "product_name": "HTC U Play"
        },
        {
            "price": "\nRs 34,984\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.7 inches, 1920 x 1080 Pixels", "2G, 3G, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_802D/HTC_One_802D_S_1.jpg",
            "product_name": "HTC One 802D"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Symbian OS 9.4 S60 rel. 5", "3.2 inches, 640 x 360", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_5233/Nokia_5233_S_1.jpg",
            "product_name": "Nokia 5233"
        },
        {
            "price": "\nRs 1,499\n",
            "desc": ["Feature Phone", "2.8 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_KKT_27/Lava_KKT_27_S_1.jpg",
            "product_name": "Lava KKT 27"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Q58_Xplore/Celkon_Q58_Xplore_S_1.jpg",
            "product_name": "Celkon Q58 Xplore"
        },
        {
            "price": "\nRs 6,650\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_X1/Lava_Iris_X1_S_1.jpg",
            "product_name": "Lava Iris X1"
        },
        {
            "price": "\nRs 10,399\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_P70/Lenovo_P70_S_1.jpg",
            "product_name": "Lenovo P70"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "4.3 inches, 960 x 540", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Razr_XT910/Motorola_Razr_XT910_S_1.jpg",
            "product_name": "Motorola Razr XT910"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Flyme UI based on Android 6...", "5.2 inches, HD (720 x 1280)", "2G, 3G, 4G (LTE), 16GB, 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Meizu_Meizu_M5s/Meizu_Meizu_M5s_S_1.jpg",
            "product_name": "Meizu M5s"
        },
        {
            "price": "\nRs 2,951\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.5 inches, 480 x 320", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A064/Micromax_Bolt_A064_S_1.jpg",
            "product_name": "Micromax Bolt A064"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0", "5.5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Q11/Intex_Cloud_Q11_S_1.jpg",
            "product_name": "Intex Cloud Q11"
        },
        {
            "price": "\nRs 4,987\n - ",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_530/Nokia_Lumia_530_S_1.jpg",
            "product_name": "Nokia Lumia 530 Dual SIM"
        },
        {
            "price": "\nRs 6,399\n",
            "desc": ["Smartphone, Android Lollipop 5.1 with g...", "5.0 inches, 720 X 1280", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_era_X/Xolo_era_X_S_1.jpg",
            "product_name": "Xolo Era X"
        },
        {
            "price": "\nRs 9,750\n - ",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "6 inches, 1280 x 720", "2G, 3G, 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_6_A601CG/Asus_Zenfone_6_A601CG_S_1.jpg",
            "product_name": "ASUS ZenFone 6 A601CG 16GB"
        },
        {
            "price": "\nRs 28,890\n - ",
            "desc": ["Feature Phone, BlackBerry OS 10.3.1", "3.5 inches, 720 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Classic/BlackBerry_Classic_S_1.jpg",
            "product_name": "BlackBerry Classic"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "96 x 60", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_6310i/Nokia_6310i_S_1.jpg",
            "product_name": "Nokia 6310i"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 8.1", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_830/Nokia_Lumia_830_S_1.jpg",
            "product_name": "Nokia Lumia 830"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_PIXI_4_PLUS_POWER/Alcatel_PIXI_4_PLUS_POWER_S_1.jpg",
            "product_name": "Alcatel Pixi 4 Plus Power"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0.1 Mars...", "5.5 inches, WQHD (2560 x 1440)", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LeEco_X10/LeEco_X10_S_1.jpg",
            "product_name": "LeEco X10"
        },
        {
            "price": "\nRs 5,300\n - ",
            "desc": ["Smartphone, Tizen OS 2.3", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Z1/Samsung_Z1_S_1.jpg",
            "product_name": "Samsung Z1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "1280 x 720", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_MachTwo_S360/Karbonn_Titanium_MachTwo_S360_S_1.jpg",
            "product_name": "Karbonn Titanium MachTwo S360"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android Marshmallow", "5 inches, 480 x 854", "3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Scan_FP/Intex_Cloud_Scan_FP_S_1.jpg",
            "product_name": "Intex Cloud Scan FP"
        },
        {
            "price": "\nRs 999\n - ",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K_Phone_1/Karbonn_K_Phone_1_S_1.jpg",
            "product_name": "Karbonn K-Phone 1"
        },
        {
            "price": "\nRs 1,600\n",
            "desc": ["Feature Phone", "2.4 inches, 240 x 320 pixels", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Arc_One/Lava_Arc_One_S_1.jpg",
            "product_name": "Lava ARC One"
        },
        {
            "price": "\nRs 4,580\n - ",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "4.5 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A76_Plus/Lava_A76_Plus_S_1.jpg",
            "product_name": "Lava A76+"
        },
        {
            "price": "\nRs 6,349\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_X8_8GB/Lava_Iris_X8_8GB_S_1.jpg",
            "product_name": "Lava Iris X8 8GB"
        },
        {
            "price": "\nRs 11,500\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.3 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_acro_S/Sony_Xperia_acro_S_S_1.jpg",
            "product_name": "Sony Xperia acro S"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, nubia UI 3.9.6(Based on And...", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nubia_Z11_mini_new/Nubia_Z11_mini_new_S_1.jpg",
            "product_name": "nubia Z11 mini"
        },
        {
            "price": "\nRs 5,000\n - ",
            "desc": ["Smartphone, Android KitKat 4.4", "5.0 inches, 1280 x 720 Pixels", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S10/Karbonn_Titanium_S10_S_1.jpg",
            "product_name": "Karbonn Titanium S10"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Indus OS with Android v6.0 ...", "5 inches, HD (720 x 1280 pixels)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Elite_3/Swipe_Elite_3_S_1.jpg",
            "product_name": "Swipe ELITE 3"
        },
        {
            "price": "\nRs 9,499\n",
            "desc": ["Phablet, Smartphone, Android 6.0", "5.5 inches, 1920x1080", "4G (LTE), 2G, 3G, 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Evok_Note/Micromax_Evok_Note_S_1.jpg",
            "product_name": "Micromax Evok Note"
        },
        {
            "price": "\nRs 14,499\n",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "5.5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_55_N2_Quadro/iBall_Andi_55_N2_Quadro_S_1.jpg",
            "product_name": "iBall Andi 5.5 N2 Quadro"
        },
        {
            "price": "\nRs 14,990\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Knight_A350/Micromax_Canvas_Knight_A350_S_1.jpg",
            "product_name": "Micromax Canvas Knight A350"
        },
        {
            "price": "\nRs 14,999\n",
            "desc": ["Phablet, Android 5.0.1 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G_Flex2/LG_G_Flex2_S_1.jpg",
            "product_name": "LG G Flex2 32GB"
        },
        {
            "price": "\nRs 15,890\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_M8_Eye/HTC_One_M8_Eye_S_1.jpg",
            "product_name": "HTC One (M8 Eye)"
        },
        {
            "price": "\nRs 57,999\n - ",
            "desc": ["Phablet, Smartphone, Android 7.0", "5.5 inches, 1440 x 2560 pixels", "2G, 3G, 4G (LTE), 128GB, 64GB, 4GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Mate9Pro/Huawei_Mate9Pro_S_1.jpg",
            "product_name": "Huawei Mate 9 Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 2GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_3G/Intex_Aqua_3G_S_1.jpg",
            "product_name": "Intex Aqua 3G+"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Symbian Belle OS, upgrad...", "3.2 inches (~50.6% screen-to-body ratio...", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_700/Nokia_700_S_1.jpg",
            "product_name": "Nokia 700"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.66 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_One_Touch_Idol/Alcatel_One_Touch_Idol_S_1.jpg",
            "product_name": "Alcatel One Touch Idol"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android OS, v6.0.1...", "6.60 inches, WQHD (1440 x 2560)", "2G, 3G, 4G (LTE), 128GB, 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_Note_8/Huawei_Honor_Note_8_S_1.jpg",
            "product_name": "Honor Note 8"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat", "5.70 inches, WQHD (1440 x 2560)\r\n~515 p...", "2G, 3G, 4G (LTE), 32GB, 64GB, 2GB, 3GB,...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_Idol_5s/Alcatel_Idol_5s_S_1.jpg",
            "product_name": "Alcatel IDOL 5S"
        },
        {
            "price": "\nRs 947\n - ",
            "desc": ["Feature Phone", "1.8 inches, 128 x 160", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Neo_V_Plus/Intex_Neo_V_Plus_S_1.jpg",
            "product_name": "Intex Neo V+"
        },
        {
            "price": "\nRs 8,900\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4 inches, 960 x 540", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_EVO_Design/HTC_EVO_Design_S_1.jpg",
            "product_name": "HTC EVO Design 4G"
        },
        {
            "price": "\nRs 11,665\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0.x Mars...", "5.70 inches, 720x1280", "2G, 3G, 4G (LTE), 16GB, 1.5GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Stylus_2/LG_Stylus_2_S_1.jpg",
            "product_name": "LG Stylus 2"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.8 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_225_/Nokia_225__S_1.jpg",
            "product_name": "Nokia 225 Dual SIM"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android v5.0 (Lollipop)", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_S1_1/Lenovo_Vibe_S1_1_S_1.jpg",
            "product_name": "Lenovo VIBE S1"
        },
        {
            "price": "\nRs 1,549\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.3 inches, 800 x 480", "2G, 3G, 1.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Flash/Intex_Aqua_Flash_S_1.jpg",
            "product_name": "Intex Aqua Flash"
        },
        {
            "price": "\nRs 1,649\n - ",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_130/Nokia_130_S_1.jpg",
            "product_name": "Nokia 130 Dual SIM"
        },
        {
            "price": "\nRs 5,399\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5.0 inches, FWVGA (480*854)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Flair_Z1/Lava_Flair_Z1_S_1.jpg",
            "product_name": "Lava Flair Z1"
        },
        {
            "price": "\nRs 6,599\n - ",
            "desc": ["Phablet, Smartphone, Freedom OS based o...", "5.5 inches, 1280 x 720 Pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Elite_Note/Swipe_Elite_Note_S_1.jpg",
            "product_name": "Swipe Elite Note"
        },
        {
            "price": "\nRs 7,779\n - ",
            "desc": ["Smartphone, Phablet, Android Lollipop 5.1", "5.5 inches, Full HD, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_9/LYF_WATER_9_S_1.jpg",
            "product_name": "LYF WATER 9"
        },
        {
            "price": "\nRs 10,000\n - ",
            "desc": ["Smartphone, Windows Phone 8", "3.8 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_620/Nokia_Lumia_620_S_1.jpg",
            "product_name": "Nokia Lumia 620"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.2 inches, 320 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_X2_02/Nokia_X2_02_S_1.jpg",
            "product_name": "Nokia X2-02"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Flyme 6.0 with And...", "5.5 inches, FHD 1920 x 1080  pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 64GB, 2GB...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Meizu_E2/Meizu_E2_S_1.jpg",
            "product_name": "Meizu E2"
        },
        {
            "price": "\nRs 1,599\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_101/Nokia_101_S_1.jpg",
            "product_name": "Nokia 101"
        },
        {
            "price": "\nRs 4,499\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 2GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_404e/Lava_Iris_404e_S_1.jpg",
            "product_name": "Lava Iris 404e"
        },
        {
            "price": "\nRs 5,149\n - ",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/nokia_301/nokia_301_S_1.jpg",
            "product_name": "Nokia 301"
        },
        {
            "price": "\nRs 10,999\n - ",
            "desc": ["Smartphone, Android 5.1, Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Vibe_P1_Turbo/Lenovo_Vibe_P1_Turbo_S_1.jpg",
            "product_name": "Lenovo Vibe P1 Turbo"
        },
        {
            "price": "\nRs 15,300\n - ",
            "desc": ["Phablet, Smartphone, Android with HTC S...", "5.5 inches, 1920x 1080 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_830_dual_sim/HTC_Desire_830_dual_sim_S_1.jpg",
            "product_name": "HTC Desire 830 dual sim"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_520/Spice_Stellar_Mi_520_S_1.jpg",
            "product_name": "Spice Stellar Mi-520"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, BlackBerry OS 7.0", "2.44 inches, 480 x 360", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_9350/BlackBerry_Curve_9350_S_1.jpg",
            "product_name": "BlackBerry Curve 9350"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 480 x 854 pixels (~218 ppi ...", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_Bee/Huawei_Honor_Bee_S_1.jpg",
            "product_name": "Honor Bee"
        },
        {
            "price": "\nRs 4,888\n - ",
            "desc": ["Smartphone, Android 6.0, Marshmallow", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_era_1X/Xolo_era_1X_S_1.jpg",
            "product_name": "Xolo Era 1X"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_MachOne_S310/Karbonn_Titanium_MachOne_S310_S_1.jpg",
            "product_name": "Karbonn Titanium MachOne S310"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Android 5.1", "5 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Diamond_4G_Plus/Celkon_Diamond_4G_Plus_S_1.jpg",
            "product_name": "Celkon Diamond 4G Plus"
        },
        {
            "price": "\nRs 6,000\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mettle_Icon_Mi_506/Spice_Stellar_Mettle_Icon_Mi_506_S_1.jpg",
            "product_name": "Spice Stellar Mettle Icon Mi-506"
        },
        {
            "price": "\nRs 7,344\n - ",
            "desc": ["Smartphone, Android lollipop 5.1", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Swift/Intex_Cloud_Swift_S_1.jpg",
            "product_name": "Intex Cloud Swift"
        },
        {
            "price": "\nRs 8,399\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Gpad_G1/Gionee_Gpad_G1_S_1.jpg",
            "product_name": "Gionee Gpad G1"
        },
        {
            "price": "\nRs 13,890\n",
            "desc": ["Smartphone, Android OS, v5.1.1 (Lollipop)", "4.7 inches, 720 x 1280", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A3_2016/Samsung_Galaxy_A3_2016_S_1.jpg",
            "product_name": "Samsung Galaxy A3 (2016)"
        },
        {
            "price": "\nRs 14,000\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Droid_RAZR_HD/Motorola_Droid_RAZR_HD_S_1.jpg",
            "product_name": "Motorola Droid RAZR HD"
        },
        {
            "price": "\nRs 18,500\n - ",
            "desc": ["Feature Phone, BlackBerry OS 7", "3.7 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Torch_9860/BlackBerry_Torch_9860_S_1.jpg",
            "product_name": "BlackBerry Torch 9860"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, iOS ", "3.5 inches, 480 x 320", "2G, 16GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone/Apple_iPhone_S_1.jpg",
            "product_name": "Apple iPhone 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "2.2 inches, 260 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Pearl_8100/BlackBerry_Pearl_8100_S_1.jpg",
            "product_name": "BlackBerry Pearl 8100"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, KitKat 4.4.2", "6.95 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HP_7_VoiceTab/HP_7_VoiceTab_S_1.jpg",
            "product_name": "HP 7 VoiceTab"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches, 1280\u00d7720 pixels", "4G (LTE), 2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ChampOne_C1/ChampOne_C1_S_1.jpg",
            "product_name": "ChampOne C1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 7.1.1 (Nougat) with...", "5 inches, 1080 x 1920 pixels (~424 ppi ...", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_nova_2/Huawei_nova_2_S_1.jpg",
            "product_name": "Huawei nova 2"
        },
        {
            "price": "\nRs 2,739\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A269i/Lenovo_A269i_S_1.jpg",
            "product_name": "Lenovo A269i"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.7 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Knight_cameo_A290/Micromax_Canvas_Knight_cameo_A290_S_1.jpg",
            "product_name": "Micromax Canvas Knight cameo A290"
        },
        {
            "price": "\nRs 6,110\n",
            "desc": ["Smartphone, v5.1.1 (Lollipop)", "4.5 inches, 480 x 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_K4/LG_K4_S_1.jpg",
            "product_name": "LG K4"
        },
        {
            "price": "\nRs 6,499\n - ",
            "desc": ["Smartphone, Android 5.0.1 Lollipop", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Spirit/LG_Spirit_S_1.jpg",
            "product_name": "LG Spirit"
        },
        {
            "price": "\nRs 7,549\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_M370/InFocus_M370_S_1.jpg",
            "product_name": "InFocus M370"
        },
        {
            "price": "\nRs 27,699\n",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_E7/Gionee_Elife_E7_S_1.jpg",
            "product_name": "Gionee Elife E7 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, iOS ", "3.5 inches, 480 x 320", "2G, 3G, 8GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_3G/Apple_iPhone_3G_S_1.jpg",
            "product_name": "Apple iPhone 3G 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "3.25 inches, 480 x 360", "2G, 3G, 1GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Storm_9500/BlackBerry_Storm_9500_S_1.jpg",
            "product_name": "BlackBerry Storm 9500"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 120", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/NOKIA_2720_Fold/NOKIA_2720_Fold_S_1.jpg",
            "product_name": "Nokia 2720 fold"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "2.4 inches, 480 x 360", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_8900/BlackBerry_Curve_8900_S_1.jpg",
            "product_name": "BlackBerry Curve 8900"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2 inches, 220 x 176", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Akai_Trio/Akai_Trio_S_1.jpg",
            "product_name": "Akai Trio"
        },
        {
            "price": "\n-\n",
            "desc": ["Smart Watch, Android Wear 2.0", "1.40 inches, AMOLED, 400 x 400 resoluti...", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Quartz/ZTE_Quartz_S_1.jpg",
            "product_name": "ZTE Quartz"
        },
        {
            "price": "\nRs 5,000\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Pep_Q371/Micromax_Canvas_Pep_Q371_S_1.jpg",
            "product_name": "Micromax Canvas Pep"
        },
        {
            "price": "\nRs 7,000\n - ",
            "desc": ["Smartphone, Windows Phone 8", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_525/Nokia_Lumia_525_S_1.jpg",
            "product_name": "Nokia Lumia 525"
        },
        {
            "price": "\nRs 7,035\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1.1", "5.0 inches, HD, 1280x720 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_8/LYF_WATER_8_S_1.jpg",
            "product_name": "LYF WATER 8"
        },
        {
            "price": "\nRs 7,108\n - ",
            "desc": ["Smartphone, Phablet, Android Lollipop 5...", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_M535/InFocus_M535_S_1.jpg",
            "product_name": "InFocus M535"
        },
        {
            "price": "\nRs 8,600\n",
            "desc": ["Feature Phone, BlackBerry OS 5.0", "2.46 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_8520/BlackBerry_Curve_8520_S_1.jpg",
            "product_name": "BlackBerry Curve 8520"
        },
        {
            "price": "\nRs 13,999\n - ",
            "desc": ["Phablet, Android 5.0.1 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G_Flex2/LG_G_Flex2_S_1.jpg",
            "product_name": "LG G Flex2 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet", "5.50 inches, 1920*1080", "2G, 3G, 4G (LTE), 128GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Mate_S/Huawei_Mate_S_S_1.jpg",
            "product_name": "Huawei Mate S 128GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android OS v6.0 (M...", "5.50 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_X10/HTC_One_X10_S_1.jpg",
            "product_name": "HTC One X10"
        },
        {
            "price": "\nRs 1,340\n",
            "desc": ["Feature Phone", "1.52 inches, 128 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_E1207T/Samsung_E1207T_S_1.jpg",
            "product_name": "Samsung E1207T"
        },
        {
            "price": "\nRs 2,698\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_4_IPS_Tiger/iBall_Andi_4_IPS_Tiger_S_1.jpg",
            "product_name": "iBall Andi 4 IPS Tiger"
        },
        {
            "price": "\nRs 6,200\n - ",
            "desc": ["Smartphone, Android Marshmallow 6.0", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Unite_4/Micromax_Canvas_Unite_4_S_1.jpg",
            "product_name": "Micromax Canvas Unite 4"
        },
        {
            "price": "\nRs 7,000\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q1200/Xolo_Q1200_S_1.jpg",
            "product_name": "Xolo Q1200"
        },
        {
            "price": "\nRs 7,299\n",
            "desc": ["Smartphone, Android Lollipop 5.1.1", "5 inches, 720x1280 pixels", "2G, 4G (LTE), 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_4/LYF_WATER_4_S_1.jpg",
            "product_name": "LYF WATER 4"
        },
        {
            "price": "\nRs 11,499\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "3.7 inches, 800 x 480", "2G, 3G, 1GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A/Samsung_Galaxy_A_S_1.jpg",
            "product_name": "Samsung Galaxy A"
        },
        {
            "price": "\nRs 11,500\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_C3_Dual/Sony_Xperia_C3_Dual_S_1.jpg",
            "product_name": "Sony Xperia C3 Dual"
        },
        {
            "price": "\nRs 16,999\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_2014/Motorola_Moto_X_2014_S_1.jpg",
            "product_name": "Motorola Moto X (2014) 16GB"
        },
        {
            "price": "\nRs 19,500\n - ",
            "desc": ["Smartphone, Phablet, Android 6.0 Marshm...", "6.0 inches, 1080x1920", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Marathon_M5_Plus/Gionee_Marathon_M5_Plus_S_1.jpg",
            "product_name": "Gionee Marathon M5 Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "3.25 inches, 480 x 360", "2G, 3G, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Storm2_9520/BlackBerry_Storm2_9520_S_1.jpg",
            "product_name": "BlackBerry Storm2 9520"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_P6/Huawei_Ascend_P6_S_1.jpg",
            "product_name": "Huawei Ascend P6 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.8 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_M2_Aqua/SONY_Xperia_M2_Aqua_S_1.jpg",
            "product_name": "Sony Xperia M2 Aqua"
        },
        {
            "price": "\nRs 2,899\n",
            "desc": ["Smartphone, Android OS, Lollipop 5.0", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_Z220/Acer_Liquid_Z220_S_1.jpg",
            "product_name": "Acer Liquid Z220"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 5.1 Lollipop.", "5.0 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5U_Platino/iBall_Andi_5U_Platino_S_1.jpg",
            "product_name": "iBall Andi 5U Platino"
        },
        {
            "price": "\nRs 8,290\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_E1_dual/Sony_Xperia_E1_dual_S_1.jpg",
            "product_name": "Sony Xperia E1 dual"
        },
        {
            "price": "\nRs 29,000\n",
            "desc": ["Phablet, Android 4.1.2 Jelly Bean", "5.5 inches, 1920 x 1080 pixels", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_G_Pro_E988/LG_Optimus_G_Pro_E988_S_1.jpg",
            "product_name": "LG Optimus G Pro E988"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_E8/HTC_One_E8_S_1.jpg",
            "product_name": "HTC One (E8) CDMA"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.14 inches, 320 x 240", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Y_Duos_S6102/Samsung_Galaxy_Y_Duos_S6102_S_1.jpg",
            "product_name": "Samsung Galaxy Y Duos S6102"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Fuel_50/Lava_Iris_Fuel_50_S_1.jpg",
            "product_name": "Lava Iris Fuel 50"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Asus ZenUI(Android OS, v6.0...", "5.20 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_Pegasus_3_/ASUS_ZenFone_Pegasus_3__S_1.jpg",
            "product_name": "ASUS ZenFone Pegasus 3"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Amigo 3.5 OS based...", "6-inch Super AMOLED display,, Full-HD (...", "4G (LTE), 2G, 3G, 256GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_M6S_Plus/Gionee_M6S_Plus_S_1.jpg",
            "product_name": "Gionee M6S Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, nubia UI 5.0\r\nAndr...", "5.5 inches, 1920x1080", "2G, 3G, 4G (LTE), 128GB, 64GB, 6GB, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/nubia_Z17/nubia_Z17_S_1.jpg",
            "product_name": "nubia Z17"
        },
        {
            "price": "\nRs 1,819\n - ",
            "desc": ["Smartphone, Android 4.2.2", "2.8 inches, 240x320 Display Resolution", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_G2/Intex_Aqua_G2_S_1.jpg",
            "product_name": "Intex Aqua G2"
        },
        {
            "price": "\nRs 2,299\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Champion_My_Phone_43/Champion_My_Phone_43_S_1.jpg",
            "product_name": "Champion My Phone 43"
        },
        {
            "price": "\nRs 3,405\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A369i/Lenovo_A369i_S_1.jpg",
            "product_name": "Lenovo A369i"
        },
        {
            "price": "\nRs 3,940\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_Infinium_Z45_Nova/Videocon_Infinium_Z45_Nova_S_1.jpg",
            "product_name": "Videocon Infinium Z45 Nova"
        },
        {
            "price": "\nRs 5,400\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_4_A315/Micromax_Canvas_4_A315_S_1.jpg",
            "product_name": "Micromax Canvas 4+ A315"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S5_Plus/Karbonn_Titanium_S5_Plus_S_1.jpg",
            "product_name": "Karbonn Titanium S5 Plus"
        },
        {
            "price": "\nRs 7,100\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v5.1 (...", "6.0 inches, 540 x 960 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_mega_2/Micromax_Canvas_mega_2_S_1.jpg",
            "product_name": "Micromax Canvas Mega 2 Q426"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 800 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_L80_Dual/LG_L80_Dual_S_1.jpg",
            "product_name": "LG L80 Dual"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, BlackBerry OS 7.0", "3.2 inches, 480 x 360", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_9380/BlackBerry_Curve_9380_S_1.jpg",
            "product_name": "BlackBerry Curve 9380"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 4G (LTE), 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_4/Samsung_Galaxy_Ace_4_S_1.jpg",
            "product_name": "Samsung Galaxy Ace 4 LTE"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_735/Nokia_Lumia_735_S_1.jpg",
            "product_name": "Nokia Lumia 735"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Power/Intex_Aqua_Power_S_1.jpg",
            "product_name": "Intex Aqua Power+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "2.44 inches, 480 x 360", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Bold_9650/BlackBerry_Bold_9650_S_1.jpg",
            "product_name": "BlackBerry Bold 9650"
        },
        {
            "price": "\nRs 15,990\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5.1 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S5_octa_core/Samsung_Galaxy_S5_octa_core_S_1.jpg",
            "product_name": "Samsung Galaxy S5 (octa-core) 16GB"
        },
        {
            "price": "\nRs 21,999\n",
            "desc": ["Smartphone, BlackBerry OS 10.3 ", "3.1 inches, 720 x 720", "2G, 3G, 4G (LTE), 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Porsche_Design_P_9983/BlackBerry_Porsche_Design_P_9983_S_1.jpg",
            "product_name": "BlackBerry Porsche Design P'9983"
        },
        {
            "price": "\nRs 31,489\n - ",
            "desc": ["Phablet, Smartphone, Android v6.0 Marsh...", "5.50 inches, WQHD (1440 x 2560)", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_DTEK60_ph/BlackBerry_DTEK60_ph_S_1.jpg",
            "product_name": "BlackBerry DTEK60"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_X3_02/Nokia_X3_02_S_1.jpg",
            "product_name": "Nokia X3-02 Touch and Type RM-639"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Selfie_50/Lava_Iris_Selfie_50_S_1.jpg",
            "product_name": "Lava Iris Selfie 50"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1.1 Lollipop / An...", "5.20 inches, 1920\u00d71080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nextbit_Robin/Nextbit_Robin_S_1.jpg",
            "product_name": "Nextbit Robin"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat", "5.5 inches, FHD (1080 x 1920)", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Hawkeye_PH/ZTE_Hawkeye_PH_S_1.jpg",
            "product_name": "ZTE Hawkeye"
        },
        {
            "price": "\nRs 3,599\n - ",
            "desc": ["Smartphone, Android 5.1-Lollipop", "5. inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A67/Lava_A67_S_1.jpg",
            "product_name": "Lava A67"
        },
        {
            "price": "\nRs 3,947\n - ",
            "desc": ["Smartphone, Android 5.1", "4.50 inches, 480x854", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Raze/Intex_Aqua_Raze_S_1.jpg",
            "product_name": "Intex Aqua Raze"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Fire_A107/Micromax_Canvas_Fire_A107_S_1.jpg",
            "product_name": "Micromax Canvas Fire 4 A107"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Lite_A92/Micromax_Canvas_Lite_A92_S_1.jpg",
            "product_name": "Micromax Canvas Lite A92"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_45P_IPS_Glitter/iBall_Andi_45P_IPS_Glitter_S_1.jpg",
            "product_name": "iBall Andi 4.5P IPS Glitter"
        },
        {
            "price": "\nRs 4,200\n - ",
            "desc": ["Smartphone, Android Marshmallow 6.0", "5.0 inches, HD (1280*720)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_selfie_4_IN/Micromax_Canvas_selfie_4_IN_S_1.jpg",
            "product_name": "Micromax Canvas Selfie 4"
        },
        {
            "price": "\nRs 4,650\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_CTRL_V4s/Gionee_CTRL_V4s_S_1.jpg",
            "product_name": "Gionee CTRL V4s"
        },
        {
            "price": "\nRs 4,888\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "5.5 inches, HD (1280 x 720 pixels)", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZOPO_Color_F1/ZOPO_Color_F1_S_1.jpg",
            "product_name": "ZOPO Color F1"
        },
        {
            "price": "\nRs 8,299\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZOPO_Speed_7/ZOPO_Speed_7_S_1.jpg",
            "product_name": "ZOPO Speed 7"
        },
        {
            "price": "\nRs 8,399\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Obi_Crane_S550/Obi_Crane_S550_S_1.jpg",
            "product_name": "Obi Crane S550"
        },
        {
            "price": "\nRs 9,499\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 16GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_E7_Mini/Gionee_Elife_E7_Mini_S_1.jpg",
            "product_name": "Gionee Elife E7 Mini"
        },
        {
            "price": "\nRs 20,800\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Droid_Ultra/Motorola_Droid_Ultra_S_1.jpg",
            "product_name": "Motorola Droid Ultra"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "3 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Y_S5360/Samsung_Galaxy_Y_S5360_S_1.jpg",
            "product_name": "Samsung Galaxy Y S5360"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_250/Lava_Iris_250_S_1.jpg",
            "product_name": "Lava Iris 250"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_360/Spice_Stellar_Mi_360_S_1.jpg",
            "product_name": "Spice Stellar Mi-360"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.1", "5.5 inches, QHD resolution (960\u00d7540 pix...", "2G, 3G, 4G (LTE)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_AXON_7/ZTE_AXON_7_S_1.jpg",
            "product_name": "ZTE Axon 7s"
        },
        {
            "price": "\nRs 3,212\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 480 x 800 pixels", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_T33/Panasonic_T33_S_1.jpg",
            "product_name": "Panasonic T33"
        },
        {
            "price": "\nRs 4,470\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_Infinium_Graphite/Videocon_Infinium_Graphite_S_1.jpg",
            "product_name": "Videocon Infinium Graphite"
        },
        {
            "price": "\nRs 6,460\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Xpress_A99/Micromax_Canvas_Xpress_A99_S_1.jpg",
            "product_name": "Micromax Canvas Xpress A99"
        },
        {
            "price": "\nRs 7,199\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1 Inlife...", "4.5 inches, 854\u00d7480", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_Bingo_21/InFocus_Bingo_21_S_1.jpg",
            "product_name": "InFocus Bingo 21"
        },
        {
            "price": "\nRs 8,379\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.3 inches, 800 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_X2_Dual_SIM/Nokia_X2_Dual_SIM_S_1.jpg",
            "product_name": "Nokia X2 Dual SIM"
        },
        {
            "price": "\nRs 13,250\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_magnus_A117/Micromax_Canvas_magnus_A117_S_1.jpg",
            "product_name": "Micromax Canvas magnus A117"
        },
        {
            "price": "\nRs 13,300\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5.3 inches, 960 x 540", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Pinnacle_Pro_Mi_535/Spice_Stellar_Pinnacle_Pro_Mi_535_S_1.jpg",
            "product_name": "Spice Stellar Pinnacle Pro Mi-535"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Symbian OS 9.4 S60 rel. 5", "3.2 inches, 640 x 360", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_C6/Nokia_C6_S_1.jpg",
            "product_name": "Nokia C6"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_3G_354/Lava_3G_354_S_1.jpg",
            "product_name": "Lava 3G 354"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Bada OS 1.2", "3.7 inches, 800 x 480", "2G, 3G, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Wave_II_S8530/Samsung_Wave_II_S8530_S_1.jpg",
            "product_name": "Samsung Wave II S8530"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "2.25 inches, 400 x 360", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Pearl_3G_9100/BlackBerry_Pearl_3G_9100_S_1.jpg",
            "product_name": "BlackBerry Pearl 3G 9100"
        },
        {
            "price": "\nRs 1,222\n",
            "desc": ["Feature Phone", "2.4 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Jivi_JFP_N6600/Jivi_JFP_N6600_S_1.jpg",
            "product_name": "JIVI JFP N6600"
        },
        {
            "price": "\nRs 5,290\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Juice_3_Q392/Micromax_Canvas_Juice_3_Q392_S_1.jpg",
            "product_name": "Micromax Juice 3 Q392"
        },
        {
            "price": "\nRs 9,500\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4.3 inches, 960 x 540", "2G, 3G, 1GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Sensation/HTC_Sensation_S_1.jpg",
            "product_name": "HTC Sensation 4G"
        },
        {
            "price": "\nRs 17,500\n - ",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "5.8 inches, 540 x 960", "2G, 3G, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Mega_58/Samsung_Galaxy_Mega_58_S_1.jpg",
            "product_name": "Samsung Galaxy Mega 5.8 I9152"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 720 x 1280", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Infocus_M330/Infocus_M330_S_1.jpg",
            "product_name": "InFocus M330"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, BlackBerry OS 5.0 ", "2.46 inches, 320 x 240", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_3G_9330/BlackBerry_Curve_3G_9330_S_1.jpg",
            "product_name": "BlackBerry Curve 3G 9330"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_Y300/Huawei_Ascend_Y300_S_1.jpg",
            "product_name": "Huawei Ascend Y300"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 7.0 (Nougat) with E...", "5.0 inches, 720 x 1280 pixels (~294 ppi...", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_6A/Huawei_Honor_6A_S_1.jpg",
            "product_name": "Honor 6A"
        },
        {
            "price": "\nRs 2,790\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_220_/Nokia_220__S_1.jpg",
            "product_name": "Nokia 220"
        },
        {
            "price": "\nRs 3,299\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_X5/Intex_Cloud_X5_S_1.jpg",
            "product_name": "Intex Cloud X5"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Onida_Smart_i406/Onida_Smart_i406_S_1.jpg",
            "product_name": "Onida Smart i406"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4G (LTE), 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_3_3G/Samsung_Galaxy_Ace_3_3G_S_1.jpg",
            "product_name": "Samsung Galaxy Ace 3 3G"
        },
        {
            "price": "\nRs 5,490\n - ",
            "desc": ["Smartphone, Android Lollipop v5.1", "5.0 inches, 854 x 480", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Fuel_F1/Lava_Iris_Fuel_F1_S_1.jpg",
            "product_name": "Lava Iris Fuel F1"
        },
        {
            "price": "\nRs 5,500\n - ",
            "desc": ["Smartphone, Android 5.1 OS", "5.0 inches, 1080 x 720 Display", "2G, 3G, 8GB, 1GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Slice_II/Intex_Aqua_Slice_II_S_1.jpg",
            "product_name": "Intex Aqua Slice II"
        },
        {
            "price": "\nRs 6,200\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_Infinium_Z40Q_Star/Videocon_Infinium_Z40Q_Star_S_1.jpg",
            "product_name": "Videocon Infinium Z40Q Star"
        },
        {
            "price": "\nRs 8,599\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_E6/Gionee_Elife_E6_S_1.jpg",
            "product_name": "Gionee Elife E6"
        },
        {
            "price": "\nRs 14,000\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.65 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Nexus_i515/Samsung_Galaxy_Nexus_i515_S_1.jpg",
            "product_name": "Samsung Galaxy Nexus i515"
        },
        {
            "price": "\nRs 14,200\n - ",
            "desc": ["Smartphone, Phablet, Android OS, V5.1Lo...", "5.5 inches, 720 x 1280", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_S_Plus/Gionee_S_Plus_S_1.jpg",
            "product_name": "Gionee S Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Mobile 6.5", "3 inches, 400 x 240", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_beTouch_E200/Acer_beTouch_E200_S_1.jpg",
            "product_name": "Acer beTouch E200"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_Octane_Plus/Karbonn_Titanium_Octane_Plus_S_1.jpg",
            "product_name": "Karbonn Titanium Octane Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L5_II_Dual_E455/LG_Optimus_L5_II_Dual_E455_S_1.jpg",
            "product_name": "LG Optimus L5II Dual E455"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_III_mini_i8190/Samsung_Galaxy_S_III_mini_i8190_S_1.jpg",
            "product_name": "Samsung Galaxy S III mini I8190 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, nubia UI 3.9.9(bas...", "6.0 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Nubia_Z11_Max_a/ZTE_Nubia_Z11_Max_a_S_1.jpg",
            "product_name": "nubia Z11 Max"
        },
        {
            "price": "\nRs 919\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/M_Tech_L22/M_Tech_L22_S_1.jpg",
            "product_name": "M-Tech L22"
        },
        {
            "price": "\nRs 1,249\n",
            "desc": ["Feature Phone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_V1572/Videocon_V1572_S_1.jpg",
            "product_name": "Videocon V1572"
        },
        {
            "price": "\nRs 1,999\n",
            "desc": ["Smartphone, Android OS v4.4.2 (Kitkat)", "3.5 inches, 320 X 480", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_A359/Celkon_Campus_A359_S_1.jpg",
            "product_name": "Celkon Campus A359"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Jelly Bean 4.3 ", "4.5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Idol_2_Mini_Dual_SIM/Idol_2_Mini_Dual_SIM_S_1.jpg",
            "product_name": "Alcatel Idol 2 Mini Dual SIM"
        },
        {
            "price": "\nRs 5,199\n - ",
            "desc": ["Phablet, Android 4.2.1 Jelly Bean", "5.7 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Doodle2_A240/Micromax_Canvas_Doodle2_A240_S_1.jpg",
            "product_name": "Micromax Canvas Doodle2 A240"
        },
        {
            "price": "\nRs 5,990\n - ",
            "desc": ["Smartphone, Windows Phone 8", "4.3 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_720/Nokia_Lumia_720_S_1.jpg",
            "product_name": "Nokia Lumia 720"
        },
        {
            "price": "\nRs 7,400\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.5 inches, 960 x 540", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A3_Duos/Samsung_Galaxy_A3_Duos_S_1.jpg",
            "product_name": "Samsung Galaxy A3 Duos"
        },
        {
            "price": "\nRs 8,290\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q1010i/Xolo_Q1010i_S_1.jpg",
            "product_name": "Xolo Q1010i"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "5.25 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_GRAND_2/Samsung_Galaxy_GRAND_2_S_1.jpg",
            "product_name": "Samsung Galaxy Grand 2"
        },
        {
            "price": "\nRs 12,500\n - ",
            "desc": ["Smartphone, Windows Phone 8", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Windows_Phone_8S/HTC_Windows_Phone_8S_S_1.jpg",
            "product_name": "HTC Windows Phone 8S"
        },
        {
            "price": "\nRs 18,200\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_M8/HTC_One_M8_S_1.jpg",
            "product_name": "HTC One (M8) 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_PadFone_E/Asus_PadFone_E_S_1.jpg",
            "product_name": "ASUS PadFone E"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_4/Samsung_Galaxy_Ace_4_S_1.jpg",
            "product_name": "Samsung Galaxy Ace 4"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4.5 inches, 854 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_635/Nokia_Lumia_635_S_1.jpg",
            "product_name": "Nokia Lumia 635"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.3 inches, 960 x 540", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_PadFone_mini/Asus_PadFone_mini_S_1.jpg",
            "product_name": "ASUS PadFone mini"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5.0 inches, 480 x 854 pixels resolution", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_TITANIUM_S203/Karbonn_TITANIUM_S203_S_1.jpg",
            "product_name": "Karbonn Titanium S203"
        },
        {
            "price": "\nRs 1,168\n - ",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K9/Karbonn_K9_S_1.jpg",
            "product_name": "Karbonn K9"
        },
        {
            "price": "\nRs 4,280\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Play_Q355/Micromax_Canvas_Play_Q355_S_1.jpg",
            "product_name": "Micromax Canvas Play Q355"
        },
        {
            "price": "\nRs 10,200\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_go/Sony_Xperia_go_S_1.jpg",
            "product_name": "Sony Xperia go"
        },
        {
            "price": "\nRs 10,399\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_E4/SONY_Xperia_E4_S_1.jpg",
            "product_name": "Sony Xperia E4"
        },
        {
            "price": "\nRs 12,479\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5.0 inches, 1280*720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Marathon_M4/Gionee_Marathon_M4_S_1.jpg",
            "product_name": "Gionee Marathon M4"
        },
        {
            "price": "\nRs 14,199\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_820/HTC_Desire_820_S_1.jpg",
            "product_name": "HTC Desire 820 dual sim"
        },
        {
            "price": "\nRs 25,999\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.96 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Nexus_6/Motorola_Nexus_6_S_1.jpg",
            "product_name": "Motorola Nexus 6 32GB"
        },
        {
            "price": "\nRs 27,550\n",
            "desc": ["Smartphone, Windows Phone 8", "4.5 inches, 1280 x 768", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_925/Nokia_Lumia_925_S_1.jpg",
            "product_name": "Nokia Lumia 925 16GB"
        },
        {
            "price": "\nRs 29,390\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_Jade_Z/Acer_Liquid_Jade_Z_S_1.jpg",
            "product_name": "Acer Liquid Jade Z"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_C3300K_Champ/Samsung_C3300K_Champ_S_1.jpg",
            "product_name": "Samsung C3300K Champ"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.5 inches, 540 x 960", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_E_2nd_Gen/Motorola_Moto_E_2nd_Gen_S_1.jpg",
            "product_name": "Motorola Moto E (2nd Gen) 3G"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Era_4K/Xolo_Era_4K_S_1.jpg",
            "product_name": "Xolo Era 4K"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, 5.0 Android Lollipop", "5.0 inches, 1280 X 720 pixel resolution", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_4G_Star/Intex_Cloud_4G_Star_S_1.jpg",
            "product_name": "Intex Cloud 4G Star"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 Kitkat", "5 inches, 1280 x 720 pixels resolution", "2G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S200_HD/Karbonn_Titanium_S200_HD_S_1.jpg",
            "product_name": "Karbonn Titanium S200 HD"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_Flash_Plus_2/Alcatel_Flash_Plus_2_S_1.jpg",
            "product_name": "Alcatel Flash Plus 2"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_E5/SONY_Xperia_E5_S_1.jpg",
            "product_name": "Sony Xperia E5"
        },
        {
            "price": "\nRs 1,059\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Spark_245e/Lava_Spark_245e_S_1.jpg",
            "product_name": "Lava Spark 245e"
        },
        {
            "price": "\nRs 1,199\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_V1530/Videocon_V1530_S_1.jpg",
            "product_name": "Videocon V1530"
        },
        {
            "price": "\nRs 2,784\n - ",
            "desc": ["Smartphone, Android 5.1,Lollipop", "4.0 inches, 800 x 480 Display Resolution", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Play/Intex_Aqua_Play_S_1.jpg",
            "product_name": "Intex Aqua Play"
        },
        {
            "price": "\nRs 2,999\n - ",
            "desc": ["Smartphone, Android 5.1", "4 inches, 800 x 480 Display Resolution", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_LITE/Intex_Aqua_LITE_S_1.jpg",
            "product_name": "Intex Aqua Lite"
        },
        {
            "price": "\nRs 4,420\n - ",
            "desc": ["Smartphone, Android 6.0 (Marshmallow)", "4.5 inches (11.43cm), 854x480 (FWVGA)", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Spark_Vdeo_Q415/Micromax_Spark_Vdeo_Q415_S_1.jpg",
            "product_name": "Micromax Spark Vdeo"
        },
        {
            "price": "\nRs 5,299\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_Duos_3/Samsung_Galaxy_S_Duos_3_S_1.jpg",
            "product_name": "Samsung Galaxy S Duos 3"
        },
        {
            "price": "\nRs 9,299\n - ",
            "desc": ["Smartphone, Phablet, Android 5.1 Lollipop", "5.5 inches, Full-HD (1920 x 1080)", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zopo_Speed_7_plus_1/Zopo_Speed_7_plus_1_S_1.jpg",
            "product_name": "ZOPO Speed 7 Plus"
        },
        {
            "price": "\nRs 9,600\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.3 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Electrify_M_XT905/Motorola_Electrify_M_XT905_S_1.jpg",
            "product_name": "Motorola Electrify M XT905"
        },
        {
            "price": "\nRs 14,590\n",
            "desc": ["Smartphone, Windows Phone 7.5 Mango", "4.3 inches, 800 x 480", "2G, 3G, 16GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_900/Nokia_Lumia_900_S_1.jpg",
            "product_name": "Nokia Lumia 900"
        },
        {
            "price": "\nRs 23,999\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0.1...", "6.0 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_A9_Pro_2016/Samsung_Galaxy_A9_Pro_2016_S_1.jpg",
            "product_name": "Samsung Galaxy A9 Pro (2016)"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iberry_Auxus_Note_55/iberry_Auxus_Note_55_S_1.jpg",
            "product_name": "iberry Auxus Note 5.5"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Fuel_60/Lava_Iris_Fuel_60_S_1.jpg",
            "product_name": "Lava Iris Fuel 60"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_Z1s/Sony_Xperia_Z1s_S_1.jpg",
            "product_name": "Sony Xperia Z1s"
        },
        {
            "price": "\nRs 909\n - ",
            "desc": ["Feature Phone", "1.8 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Jivi_JFP_75/Jivi_JFP_75_S_1.jpg",
            "product_name": "JIVI JFP 75"
        },
        {
            "price": "\nRs 3,499\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_MAd_A94/Micromax_Canvas_MAd_A94_S_1.jpg",
            "product_name": "Micromax Canvas MAd A94"
        },
        {
            "price": "\nRs 4,795\n - ",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Blade_G2/ZTE_Blade_G2_S_1.jpg",
            "product_name": "ZTE Blade G2"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.7 inches, 720 x 1280 Pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Glam/Intex_Aqua_Glam_S_1.jpg",
            "product_name": "Intex Aqua Glam"
        },
        {
            "price": "\nRs 5,939\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_T40/Panasonic_T40_S_1.jpg",
            "product_name": "Panasonic T40"
        },
        {
            "price": "\nRs 7,490\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 960 x 540", "2G, 3G, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_5_Lite_A502CG/Asus_Zenfone_5_Lite_A502CG_S_1.jpg",
            "product_name": "ASUS ZenFone 5 Lite A502CG"
        },
        {
            "price": "\nRs 18,990\n",
            "desc": ["Smartphone, Funtouch OS 2.0 (based on A...", "5.00 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Vivo_X5/Vivo_X5_S_1.jpg",
            "product_name": "Vivo X5"
        },
        {
            "price": "\nRs 19,999\n - ",
            "desc": ["Phablet, Smartphone, HTC Sense UI 7.0, ...", "5.5 inches (~69.7% screen-to-body ratio)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_E9_plus/HTC_One_E9_plus_S_1.jpg",
            "product_name": "HTC One E9+ dual sim"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.4 KitKat", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/MEIZU_m1_note/MEIZU_m1_note_S_1.jpg",
            "product_name": "Meizu m1 note 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1", "4.5 inches, FWVGA 854x480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_Go_ZC451TG_/Asus_Zenfone_Go_ZC451TG__S_1.jpg",
            "product_name": "ASUS ZenFone Go ZC451TG"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_Infinium_Z40_Lite/Videocon_Infinium_Z40_Lite_S_1.jpg",
            "product_name": "Videocon Infinium Z40 Lite"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.40 inches TFT, 176x240 Pixels", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Ringing_Bells_master/Ringing_Bells_master_S_1.jpg",
            "product_name": "Ringing Bells Master"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat", "6.00 inches, HD (720 x 1280)", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_A3_XL_PH/Alcatel_A3_XL_PH_S_1.jpg",
            "product_name": "Alcatel A3 XL"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "5.3 inches, 720 x 1280 pixels (~277 ppi...", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_F5/Gionee_F5_S_1.jpg",
            "product_name": "Gionee F5"
        },
        {
            "price": "\nRs 949\n",
            "desc": ["Feature Phone", "160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X088/Micromax_X088_S_1.jpg",
            "product_name": "Micromax X088"
        },
        {
            "price": "\nRs 1,599\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_C35_Jumbo/Celkon_C35_Jumbo_S_1.jpg",
            "product_name": "Celkon C35 Jumbo"
        },
        {
            "price": "\nRs 1,849\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "2.8 inches, 240 x 320 pixels resolution", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Alfa_A104/Karbonn_Alfa_A104_S_1.jpg",
            "product_name": "Karbonn Alfa A104"
        },
        {
            "price": "\nRs 2,232\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/M_Tech_Bravo/M_Tech_Bravo_S_1.jpg",
            "product_name": "M-Tech Bravo"
        },
        {
            "price": "\nRs 4,990\n - ",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_208/Nokia_208_S_1.jpg",
            "product_name": "Nokia 208 Dual SIM"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 6.0-Marshmallow", "4.5 inches (11.43cm), FWVGA (800x480)", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A77/Lava_A77_S_1.jpg",
            "product_name": "Lava A77"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_2colours_A120/Micromax_Canvas_2colours_A120_S_1.jpg",
            "product_name": "Micromax Canvas 2 colours A120"
        },
        {
            "price": "\nRs 6,499\n",
            "desc": ["Smartphone, Phablet, Android 5.0", "5.5 inches (13.97cm), HD, 1280 x 720 pi...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WATER_3/LYF_WATER_3_S_1.jpg",
            "product_name": "LYF WATER 3"
        },
        {
            "price": "\nRs 7,500\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "3.27 inches, 320 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_GalaxyYoung/Samsung_GalaxyYoung_S_1.jpg",
            "product_name": "Samsung Galaxy Young Duos S6312"
        },
        {
            "price": "\nRs 15,532\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.7 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_L90_Dual_D410/LG_L90_Dual_D410_S_1.jpg",
            "product_name": "LG L90 Dual D410"
        },
        {
            "price": "\nRs 17,990\n - ",
            "desc": ["Smartphone", "5.0 inches (~441 ppi pixel density), 10...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_M8/HTC_One_M8_S_1.jpg",
            "product_name": "HTC One M8 16GB"
        },
        {
            "price": "\nRs 19,533\n",
            "desc": ["Smartphone, iOS 3 ", "3.5 inches, 480 x 320", "2G, 3G, 8GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_iPhone_3GS/Apple_iPhone_3GS_S_1.jpg",
            "product_name": "Apple iPhone 3GS 8GB"
        },
        {
            "price": "\nRs 24,000\n - ",
            "desc": ["Smartphone, Windows Phone 8", "4.5 inches, 1280 x 768", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_920/Nokia_Lumia_920_S_1.jpg",
            "product_name": "Nokia Lumia 920"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.5 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Express_I8730/Samsung_Galaxy_Express_I8730_S_1.jpg",
            "product_name": "Samsung Galaxy Express I8730"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.3 inches, 854 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_Idol_Mini/Alcatel_Idol_Mini_S_1.jpg",
            "product_name": "Alcatel Idol Mini Dual SIM"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Symbian OS 9.4 S60 rel. 5", "3.2 inches, 640 x 360", "2G, 3G, 8GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_N97_Mini/Nokia_N97_Mini_S_1.jpg",
            "product_name": "Nokia N97 Mini"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 with E...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 128GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_nova_2/Huawei_nova_2_S_1.jpg",
            "product_name": "Huawei nova 2 Plus"
        },
        {
            "price": "\nRs 860\n - ",
            "desc": ["Feature Phone", "1.8 inches, 128 x 160", "2G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Eco_102/Intex_Eco_102_S_1.jpg",
            "product_name": "Intex ECO 102"
        },
        {
            "price": "\nRs 2,049\n - ",
            "desc": ["Feature Phone", "2.6 inches, QVGA, 240 x 320", "Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_L700/Gionee_L700_S_1.jpg",
            "product_name": "Gionee L700"
        },
        {
            "price": "\nRs 2,199\n - ",
            "desc": ["Smartphone, Android 4.2 (Jelly Bean)", "4 inches, 480 x 800 pixels resolution", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_ALFA_A112/Karbonn_ALFA_A112_S_1.jpg",
            "product_name": "Karbonn Alfa A112"
        },
        {
            "price": "\nRs 4,249\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 960 x 540", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Speed/Intex_Aqua_Speed_S_1.jpg",
            "product_name": "Intex Aqua Speed"
        },
        {
            "price": "\nRs 4,890\n - ",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "5.0 inches, 480 x 800", "2G, 3G, 4G (LTE), 8GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A97/Lava_A97_S_1.jpg",
            "product_name": "Lava A97"
        },
        {
            "price": "\nRs 7,299\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 1280 X 720", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Ace_II/Intex_Aqua_Ace_II_S_1.jpg",
            "product_name": "Intex Aqua Ace II"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.7 inches, 854 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_510/HTC_Desire_510_S_1.jpg",
            "product_name": "HTC Desire 510"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "5.5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S9/Karbonn_Titanium_S9_S_1.jpg",
            "product_name": "Karbonn Titanium S9"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.3 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Core_I8260/Samsung_Galaxy_Core_I8260_S_1.jpg",
            "product_name": "Samsung Galaxy Core I8260"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Bada OS 2.0", "3.2 inches, 480 x 320", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Wave_Y_S5380/Samsung_Wave_Y_S5380_S_1.jpg",
            "product_name": "Samsung Wave Y S5380"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.1.1 Jelly Bean", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_II_N7100/Samsung_Galaxy_Note_II_N7100_S_1.jpg",
            "product_name": "Samsung Galaxy Note II N7100 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, EUI 5.9 (based on ...", "5.50 inches, 1920 x 1080 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LeEco_Le_Pro_3_AI_Edition/LeEco_Le_Pro_3_AI_Edition_S_1.jpg",
            "product_name": "LeEco Le Pro3 AI Edition"
        },
        {
            "price": "\nRs 949\n - ",
            "desc": ["Feature Phone", "160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K101_Star/Karbonn_K101_Star_S_1.jpg",
            "product_name": "Karbonn K101 Star"
        },
        {
            "price": "\nRs 1,199\n",
            "desc": ["Feature Phone", "2.4 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Shaan_Fab_24C/iBall_Shaan_Fab_24C_S_1.jpg",
            "product_name": "iBall Shaan Fab 2.4C"
        },
        {
            "price": "\nRs 1,999\n",
            "desc": ["Smartphone, Android 4.0", "3.5 inches, 320\u00d7480", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_A333/Celkon_A333_S_1.jpg",
            "product_name": "Celkon A333"
        },
        {
            "price": "\nRs 2,349\n - ",
            "desc": ["Smartphone, Android 5.1", "4 inches, 480 x 800", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Joy/Intex_Aqua_Joy_S_1.jpg",
            "product_name": "Intex Aqua Joy"
        },
        {
            "price": "\nRs 3,775\n - ",
            "desc": ["Smartphone, Android 4.4.2", "4.5 inches, 480x854 pixels", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_Q335/Micromax_Bolt_Q335_S_1.jpg",
            "product_name": "Micromax Bolt Q335"
        },
        {
            "price": "\nRs 4,189\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.7 inches, WVGA (480 x 800)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Unite_3_Q372/Micromax_Unite_3_Q372_S_1.jpg",
            "product_name": "Micromax Canvas Unite 3 Q372"
        },
        {
            "price": "\nRs 4,299\n",
            "desc": ["Smartphone, Android OS : 4.4 KitKat", "4.0 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_4P_Class_X/iBall_Andi_4P_Class_X_S_1.jpg",
            "product_name": "iBall Andi 4P Class-X"
        },
        {
            "price": "\nRs 4,949\n - ",
            "desc": ["Smartphone, Android v5.1 Lollipop", "4.5 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A76/Lava_A76_S_1.jpg",
            "product_name": "Lava A76"
        },
        {
            "price": "\nRs 6,599\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/lenovo_A706/lenovo_A706_S_1.jpg",
            "product_name": "Lenovo A706"
        },
        {
            "price": "\nRs 7,750\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.2inches, 1080 x 1920", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_M808/InFocus_M808_S_1.jpg",
            "product_name": "InFocus M808"
        },
        {
            "price": "\nRs 11,490\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G_2nd_Gen/Motorola_Moto_G_2nd_Gen_S_1.jpg",
            "product_name": "Motorola Moto G (2nd gen)"
        },
        {
            "price": "\nRs 12,999\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.5 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G/Motorola_Moto_G_S_1.jpg",
            "product_name": "Motorola Moto G 16GB"
        },
        {
            "price": "\nRs 15,499\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_Jade/Acer_Liquid_Jade_S_1.jpg",
            "product_name": "Acer Liquid Jade"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1", "5.00 inches, 480x854 pixels", "2G, 3G, 4G (LTE), 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A88/Lava_A88_S_1.jpg",
            "product_name": "Lava A88"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S4_Active_I9295/Samsung_Galaxy_S4_Active_I9295_S_1.jpg",
            "product_name": "Samsung Galaxy S4 Active I9295"
        },
        {
            "price": "\n-\n",
            "desc": ["Smart Watch, Android 4.2 Jelly Bean", "240 x 240", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iberry_Auxus_Rist/iberry_Auxus_Rist_S_1.jpg",
            "product_name": "iberry Auxus Rist"
        },
        {
            "price": "\nRs 949\n",
            "desc": ["Feature Phone", "160 x 128", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X091/Micromax_X091_S_1.jpg",
            "product_name": "Micromax X091"
        },
        {
            "price": "\nRs 999\n - ",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xccess_X201/Xccess_X201_S_1.jpg",
            "product_name": "Xccess X201"
        },
        {
            "price": "\nRs 2,999\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "5.0 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Q599/Celkon_Q599_S_1.jpg",
            "product_name": "Celkon Q599"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 4.4", "5.0 inches, 480 x 854 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Breeze/Intex_Cloud_Breeze_S_1.jpg",
            "product_name": "Intex Cloud Breeze"
        },
        {
            "price": "\nRs 5,768\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.7 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_526G/HTC_Desire_526G_S_1.jpg",
            "product_name": "HTC Desire 526G+ dual sim 8GB"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.5 inches, FWVGA IPS (854 x 480)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_X1_Selfie/Lava_Iris_X1_Selfie_S_1.jpg",
            "product_name": "Lava Iris X1 Selfie"
        },
        {
            "price": "\nRs 6,689\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 1280X720 Display Resolution", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Crystal_25D/Intex_Cloud_Crystal_25D_S_1.jpg",
            "product_name": "Intex Cloud Crystal 2.5D"
        },
        {
            "price": "\nRs 6,990\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.8 inches, 1280 x 720", "2G, 3G, 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S3_Neo_I9300I/Samsung_Galaxy_S3_Neo_I9300I_S_1.jpg",
            "product_name": "Samsung Galaxy S3 Neo I9300I"
        },
        {
            "price": "\nRs 9,745\n - ",
            "desc": ["Smartphone, Star OS 3.3 on Android 6.0 ...", "5.0 inches, HD\r\nIPS with 2.5D Curved Di...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Z10/Lava_Z10_S_1.jpg",
            "product_name": "Lava Z10"
        },
        {
            "price": "\nRs 10,600\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5Li/iBall_Andi_5Li_S_1.jpg",
            "product_name": "iBall Andi 5Li"
        },
        {
            "price": "\nRs 13,469\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4.5 inches, 960 x 540", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Vivid/HTC_Vivid_S_1.jpg",
            "product_name": "HTC Vivid"
        },
        {
            "price": "\nRs 13,990\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "6 inches, 720 x 1280 pixels", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P61/Panasonic_P61_S_1.jpg",
            "product_name": "Panasonic P61"
        },
        {
            "price": "\nRs 18,315\n",
            "desc": ["Phablet, Jelly Bean 4.2.2", "5.5 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor3X/Huawei_Honor3X_S_1.jpg",
            "product_name": "Honor 3X G750 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_3/Huawei_Honor_3_S_1.jpg",
            "product_name": "Honor 3"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, Symbian OS 9.4 S60 rel. 5", "3.2 inches, 640 x 360", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_5230/Nokia_5230_S_1.jpg",
            "product_name": "Nokia 5230"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Grand_Prime_Duos_TV/Samsung_Galaxy_Grand_Prime_Duos_TV_S_1.jpg",
            "product_name": "Samsung Galaxy Grand Prime Duos TV"
        },
        {
            "price": "\nRs 949\n - ",
            "desc": ["Feature Phone", "160 x 128", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X071/Micromax_X071_S_1.jpg",
            "product_name": "Micromax X071"
        },
        {
            "price": "\nRs 1,650\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_107/Nokia_107_S_1.jpg",
            "product_name": "Nokia 107 Dual SIM"
        },
        {
            "price": "\nRs 3,000\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A58/Micromax_Bolt_A58_S_1.jpg",
            "product_name": "Micromax Bolt A58"
        },
        {
            "price": "\nRs 4,748\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Craze/Intex_Aqua_Craze_S_1.jpg",
            "product_name": "Intex Aqua Craze"
        },
        {
            "price": "\nRs 6,499\n - ",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_530/Nokia_Lumia_530_S_1.jpg",
            "product_name": "Nokia Lumia 530"
        },
        {
            "price": "\nRs 6,650\n - ",
            "desc": ["Smartphone, Android 2.1 Eclair", "3.7 inches, 800 x 480", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire/HTC_Desire_S_1.jpg",
            "product_name": "HTC Desire"
        },
        {
            "price": "\nRs 8,800\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_524/Spice_Stellar_Mi_524_S_1.jpg",
            "product_name": "Spice Stellar Mi-524"
        },
        {
            "price": "\nRs 9,790\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q900s/Xolo_Q900s_S_1.jpg",
            "product_name": "Xolo Q900s"
        },
        {
            "price": "\nRs 10,999\n",
            "desc": ["Smartphone, Android 5.1.1 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G_3nd_Gen/Motorola_Moto_G_3nd_Gen_S_1.jpg",
            "product_name": "Motorola Moto G (3rd gen) 8 GB"
        },
        {
            "price": "\nRs 24,217\n - ",
            "desc": ["Smart Watch", "42 mm, 312 x 390", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_Watch_Sport/Apple_Watch_Sport_S_1.jpg",
            "product_name": "Apple Watch Sport 42mm"
        },
        {
            "price": "\nRs 29,000\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.3 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_galaxy_S4_Zoom/Samsung_galaxy_S4_Zoom_S_1.jpg",
            "product_name": "Samsung Galaxy S4 zoom"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "13.97 cm(5.5)", "16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_E700/Samsung_Galaxy_E700_S_1.jpg",
            "product_name": "Samsung Galaxy E700"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_Flash_2/Alcatel_Flash_2_S_1.jpg",
            "product_name": "Alcatel Flash 2"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_Dazzle_S201/Karbonn_Titanium_Dazzle_S201_S_1.jpg",
            "product_name": "Karbonn Titanium Dazzle S201"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_8X_1000/Xolo_8X_1000_S_1.jpg",
            "product_name": "Xolo 8X 1000"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.7 inches, 1080 x 1920 pixels (~386 pp...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G_Vista_2/LG_G_Vista_2_S_1.jpg",
            "product_name": "LG G Vista 2"
        },
        {
            "price": "\nRs 1,099\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_Dura_M_5030/Spice_Boss_Dura_M_5030_S_1.jpg",
            "product_name": "Spice Boss Dura M-5030"
        },
        {
            "price": "\nRs 6,149\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "3.2 inches, 320 x 240", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L3_E425/LG_Optimus_L3_E425_S_1.jpg",
            "product_name": "LG Optimus L3 II E425"
        },
        {
            "price": "\nRs 6,749\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "3.8 inches, 480 x 320", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L4_II_Dual_E445/LG_Optimus_L4_II_Dual_E445_S_1.jpg",
            "product_name": "LG Optimus L4 II Dual E445"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Phablet, Android 4.4 KitKat", "5.5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Sense/Swipe_Sense_S_1.jpg",
            "product_name": "Swipe Sense"
        },
        {
            "price": "\nRs 14,700\n",
            "desc": ["Smartphone", "2.4 inches, 480 x 360", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Tour_9630/BlackBerry_Tour_9630_S_1.jpg",
            "product_name": "BlackBerry Tour 9630"
        },
        {
            "price": "\nRs 17,490\n",
            "desc": ["Phablet, Android 4.1.2 Jelly Bean", "5.5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G_Pro_Lite/LG_G_Pro_Lite_S_1.jpg",
            "product_name": "LG G Pro Lite"
        },
        {
            "price": "\nRs 18,500\n",
            "desc": ["Smartphone, Windows Phone 8", "4.3 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_820/Nokia_Lumia_820_S_1.jpg",
            "product_name": "Nokia Lumia 820"
        },
        {
            "price": "\nRs 29,999\n",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "5.5 inches, FHD(1920 x 1080)", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zopo_Speed_8/Zopo_Speed_8_S_1.jpg",
            "product_name": "ZOPO Speed 8"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, BlackBerry OS 7", "3.7 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Torch_9850/BlackBerry_Torch_9850_S_1.jpg",
            "product_name": "BlackBerry Torch 9850"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S4/Samsung_Galaxy_S4_S_1.jpg",
            "product_name": "Samsung Galaxy S4 CDMA"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 854 x 480", "2G, 3G, 8GB, 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Star_II/Intex_Aqua_Star_II_S_1.jpg",
            "product_name": "Intex Aqua Star II"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, MEIOS 3.6(Android M)", "5.2 / 5.15 inches, 1920 x 1080 FHD", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Meitu_M8/Meitu_M8_S_1.jpg",
            "product_name": "Meitu M8"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 (Nouga...", "5.5 inches, FHD (1080 x 1920 pixels)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_S10B/Gionee_S10B_S_1.jpg",
            "product_name": "Gionee S10B"
        },
        {
            "price": "\nRs 1,299\n - ",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X2411/Micromax_X2411_S_1.jpg",
            "product_name": "Micromax X2411"
        },
        {
            "price": "\nRs 1,849\n",
            "desc": ["Feature Phone", "2.8 inches, 320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Spark_285/Lava_Spark_285_S_1.jpg",
            "product_name": "Lava Spark 285"
        },
        {
            "price": "\nRs 4,308\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, WVGA (800 x 480)", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Pioneer_P2_S/Pioneer_P2_S_S_1.jpg",
            "product_name": "Gionee Pioneer P2S"
        },
        {
            "price": "\nRs 4,590\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Wynncom_G51/Wynncom_G51_S_1.jpg",
            "product_name": "Wynncom G51"
        },
        {
            "price": "\nRs 4,700\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Y2/Intex_Aqua_Y2_S_1.jpg",
            "product_name": "Intex Aqua Y2"
        },
        {
            "price": "\nRs 7,999\n",
            "desc": ["Smartphone, Lollipop (Android 5.1)", "5 inches, 720x1280", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Shine_4G/Intex_Aqua_Shine_4G_S_1.jpg",
            "product_name": "Intex Aqua Shine 4G"
        },
        {
            "price": "\nRs 14,500\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_3C/Huawei_Honor_3C_S_1.jpg",
            "product_name": "Honor 3C"
        },
        {
            "price": "\nRs 15,700\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.6 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_SP/Sony_Xperia_SP_S_1.jpg",
            "product_name": "Sony Xperia SP"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone, BlackBerry OS 6.1", "3.25 inches, 480 x 360", "2G, 3G, 1GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BlackBerry_Curve_Touch/BlackBerry_Curve_Touch_S_1.jpg",
            "product_name": "BlackBerry Curve Touch"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Maxx_MX1/Maxx_MX1_S_1.jpg",
            "product_name": "Maxx MX1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_E3_Dual/SONY_Xperia_E3_Dual_S_1.jpg",
            "product_name": "Sony Xperia E3 Dual"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_alfa_L/Lava_Iris_alfa_L_S_1.jpg",
            "product_name": "Lava Iris alfa L"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Trend_II_Duos_S7572/Samsung_Galaxy_Trend_II_Duos_S7572_S_1.jpg",
            "product_name": "Samsung Galaxy Trend II Duos S7572"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Spark_7/Lava_Spark_7_S_1.jpg",
            "product_name": "Lava Spark 7"
        },
        {
            "price": "\nRs 799\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_C349_Star/Celkon_C349_Star_S_1.jpg",
            "product_name": "Celkon C349 Star"
        },
        {
            "price": "\nRs 2,679\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Smart_Flo_Mi_359/Spice_Smart_Flo_Mi_359_S_1.jpg",
            "product_name": "Spice Smart Flo Mi-359"
        },
        {
            "price": "\nRs 3,599\n",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 480 x 854 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Twist/Intex_Aqua_Twist_S_1.jpg",
            "product_name": "Intex Aqua Twist"
        },
        {
            "price": "\nRs 4,369\n - ",
            "desc": ["Smartphone, Android 6.0-Marshmallow", "5.0 inches, HD (1280 x 720)", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X19/Lava_X19_S_1.jpg",
            "product_name": "Lava X19"
        },
        {
            "price": "\nRs 5,199\n",
            "desc": ["Smartphone, Android Jelly Bean 4.3", "5.0 inches, 480 x 854 Pixels", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Sonic_EG5/Swipe_Sonic_EG5_S_1.jpg",
            "product_name": "Swipe Sonic EG5"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Smartphone, Android Marshmallow 6.0.1", "5 inches (12.7cm), HD, 720\u00d71280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WIND_7S/LYF_WIND_7S_S_1.jpg",
            "product_name": "LYF WIND 7S"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Millennia_Ultra_Q500/Celkon_Millennia_Ultra_Q500_S_1.jpg",
            "product_name": "Celkon Millennia Ultra Q500"
        },
        {
            "price": "\nRs 5,999\n - ",
            "desc": ["Phablet, Android 5.1 Lollipop", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P65_Flash/Panasonic_P65_Flash_S_1.jpg",
            "product_name": "Panasonic P65 Flash"
        },
        {
            "price": "\nRs 6,499\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "5.5 inches, HD (720 x 1280 pixels)", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X28_Plus/Lava_X28_Plus_S_1.jpg",
            "product_name": "Lava X28+"
        },
        {
            "price": "\nRs 7,399\n - ",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X41_Plus/Lava_X41_Plus_S_1.jpg",
            "product_name": "Lava X41 Plus"
        },
        {
            "price": "\nRs 7,500\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_CTRL_V4/Gionee_CTRL_V4_S_1.jpg",
            "product_name": "Gionee CTRL V4"
        },
        {
            "price": "\nRs 9,799\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P55/Panasonic_P55_S_1.jpg",
            "product_name": "Panasonic P55"
        },
        {
            "price": "\nRs 11,949\n - ",
            "desc": ["Smartphone, Android 6 with HTC Sense", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_630/HTC_Desire_630_S_1.jpg",
            "product_name": "HTC Desire 630 dual sim"
        },
        {
            "price": "\nRs 13,999\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "3.7 inches, 854 x 480", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Milestone/Motorola_Milestone_S_1.jpg",
            "product_name": "Motorola Milestone"
        },
        {
            "price": "\nRs 17,999\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X_2014/Motorola_Moto_X_2014_S_1.jpg",
            "product_name": "Motorola Moto X (2014) 32GB"
        },
        {
            "price": "\nRs 18,400\n - ",
            "desc": ["Smartphone, HTC Sense UI 7.0(Android OS...", "5.2 inches, WQHD (1440 x 2560)", "2G, 3G, 4G (LTE)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_M9_plus/HTC_One_M9_plus_S_1.jpg",
            "product_name": "HTC One M9+"
        },
        {
            "price": "\nRs 26,500\n - ",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "6.3 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Mega_63/Samsung_Galaxy_Mega_63_S_1.jpg",
            "product_name": "Samsung Galaxy Mega 6.3 I9200 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_M350/InFocus_M350_S_1.jpg",
            "product_name": "InFocus M350"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_50/Intex_Aqua_50_S_1.jpg",
            "product_name": "Intex Aqua 5.0"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "5.5 inches, 1920 x 1080", "2G, 3G, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Honor_3X_Pro/Huawei_Honor_3X_Pro_S_1.jpg",
            "product_name": "Honor 3X Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android M", "5.5 inches, FHD IPS 1920 x 1080 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_Flash/Alcatel_Flash_S_1.jpg",
            "product_name": "Alcatel Flash"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, ZenUI 3.0 with And...", "5.5 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_ZenFone_Go_ZB552KL/ASUS_ZenFone_Go_ZB552KL_S_1.jpg",
            "product_name": "ASUS ZenFone Go \u200fZB552KL"
        },
        {
            "price": "\nRs 2,502\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_325_Style/Lava_Iris_325_Style_S_1.jpg",
            "product_name": "Lava Iris 325 Style"
        },
        {
            "price": "\nRs 3,149\n",
            "desc": ["Smartphone, Android 4.4.2", "4.0 inches, 480 x 800 pixels", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_3G_Candy/Intex_Cloud_3G_Candy_S_1.jpg",
            "product_name": "Intex Cloud 3G Candy"
        },
        {
            "price": "\nRs 3,535\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "3.5 inches, 854 x 480", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A37B/Micromax_Bolt_A37B_S_1.jpg",
            "product_name": "Micromax Bolt A37B"
        },
        {
            "price": "\nRs 3,899\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5.0 inches (12.7cm), FWVGA (800 x 480)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A73/Lava_A73_S_1.jpg",
            "product_name": "Lava A73"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 480 x 854 pixels", "2G, 3G, 4GB, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_T41/Panasonic_T41_S_1.jpg",
            "product_name": "Panasonic T41"
        },
        {
            "price": "\nRs 5,649\n - ",
            "desc": ["Smartphone, Phablet, Android Lollipop 5...", "5.5 inches, HD, 1280 x 720 pixels", "4G (LTE), 2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WIND_3/LYF_WIND_3_S_1.jpg",
            "product_name": "LYF WIND 3"
        },
        {
            "price": "\nRs 5,875\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "5 inches, HD, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WIND_4S/LYF_WIND_4S_S_1.jpg",
            "product_name": "LYF WIND 4S"
        },
        {
            "price": "\nRs 6,199\n - ",
            "desc": ["Smartphone, Android 5.1", "5 inches, 1280 x 720 Display Resolution", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Jewel/Intex_Cloud_Jewel_S_1.jpg",
            "product_name": "Intex Cloud Jewel"
        },
        {
            "price": "\nRs 7,490\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Obi_Leopard_S502/Obi_Leopard_S502_S_1.jpg",
            "product_name": "Obi Leopard S502"
        },
        {
            "price": "\nRs 9,199\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "3.5 inches, 480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_Duos_I589/Samsung_Galaxy_Ace_Duos_I589_S_1.jpg",
            "product_name": "Samsung Galaxy Ace Duos I589"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.7 inches, 1280 x 768", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_G_E970/LG_Optimus_G_E970_S_1.jpg",
            "product_name": "LG Optimus G E970"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1", "4.0 inches, 480x800 pixels", "2G, 3G, 4G (LTE), 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_FLAME_5/LYF_FLAME_5_S_1.jpg",
            "product_name": "LYF FLAME 5"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "128 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_A300/Samsung_A300_S_1.jpg",
            "product_name": "Samsung A300"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "6 inches, 1280 x 720", "2G, 3G, 8GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_6/ASUS_Zenfone_6_S_1.jpg",
            "product_name": "ASUS ZenFone 6 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "4 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_I9000_8GB/Samsung_Galaxy_S_I9000_8GB_S_1.jpg",
            "product_name": "Samsung Galaxy S I9000 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Flyme 6 with Android 7.0 (N...", "5 inches, HD 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Meizu_M5c/Meizu_M5c_S_1.jpg",
            "product_name": "Meizu M5c"
        },
        {
            "price": "\nRs 963\n - ",
            "desc": ["Feature Phone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Champion_Y1_Star/Champion_Y1_Star_S_1.jpg",
            "product_name": "Champion Y1 Star"
        },
        {
            "price": "\nRs 2,050\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/NOKIA_109/NOKIA_109_S_1.jpg",
            "product_name": "Nokia 109"
        },
        {
            "price": "\nRs 2,169\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_C1_02/Nokia_C1_02_S_1.jpg",
            "product_name": "Nokia C1-02"
        },
        {
            "price": "\nRs 2,799\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "5.0 inches, FWVGA", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Q567/Celkon_Q567_S_1.jpg",
            "product_name": "Celkon Q567"
        },
        {
            "price": "\nRs 2,999\n - ",
            "desc": ["Smartphone, Android 4.4", "5 inches, 480x854 pixels", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K9_SMART/Karbonn_K9_SMART_S_1.jpg",
            "product_name": "Karbonn K9 Smart"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Sonic/Swipe_Sonic_S_1.jpg",
            "product_name": "Swipe Sonic"
        },
        {
            "price": "\nRs 4,530\n - ",
            "desc": ["Smartphone, Android Marshmallow 6.0.1", "4.5 inches, 480 x 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_F8/LYF_F8_S_1.jpg",
            "product_name": "LYF F8"
        },
        {
            "price": "\nRs 4,859\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.7 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Ctrl_V5/Gionee_Ctrl_V5_S_1.jpg",
            "product_name": "Gionee CTRL V5"
        },
        {
            "price": "\nRs 4,990\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_Y200/Huawei_Ascend_Y200_S_1.jpg",
            "product_name": "Huawei Ascend Y200"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 854 * 480 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Aura_Power/Karbonn_Aura_Power_S_1.jpg",
            "product_name": "Karbonn Aura Power"
        },
        {
            "price": "\nRs 5,299\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "5 inches, 720x1280 pixels", "4G (LTE), 3G, 2G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WIND_7/LYF_WIND_7_S_1.jpg",
            "product_name": "LYF WIND 7"
        },
        {
            "price": "\nRs 5,459\n",
            "desc": ["Smartphone, Android 5.1", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_X_Life_520_HD/Spice_X_Life_520_HD_S_1.jpg",
            "product_name": "Spice X-Life 520 HD"
        },
        {
            "price": "\nRs 6,319\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, HD 1280x720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_CANVAS_5_Lite_Q462/Micromax_CANVAS_5_Lite_Q462_S_1.jpg",
            "product_name": "Micromax Canvas 5 Lite Q462"
        },
        {
            "price": "\nRs 6,359\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S580/Lenovo_S580_S_1.jpg",
            "product_name": "Lenovo S580"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Smartphone, Android 6.0", "5 inches, 720x1280", "4G (LTE), 2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Evok_Power/Micromax_Evok_Power_S_1.jpg",
            "product_name": "Micromax Evok Power"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "4 inches, 800 x 480", "2G, 3G, 2GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_Black_White_version/LG_Optimus_Black_White_version_S_1.jpg",
            "product_name": "LG Optimus Black (White version)"
        },
        {
            "price": "\nRs 15,990\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_X9/HTC_One_X9_S_1.jpg",
            "product_name": "HTC One X9"
        },
        {
            "price": "\nRs 16,900\n - ",
            "desc": ["Smart Watch, Tizen", "1.2 inches, 360 x 360", "4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Gear_S_2/Samsung_Gear_S_2_S_1.jpg",
            "product_name": "Samsung Gear S2 SM-R720"
        },
        {
            "price": "\nRs 19,100\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4.55 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_ion_HSPA/Sony_Xperia_ion_HSPA_S_1.jpg",
            "product_name": "Sony Xperia ion HSPA"
        },
        {
            "price": "\nRs 32,350\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.9 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G_Pro_2/LG_G_Pro_2_S_1.jpg",
            "product_name": "LG G Pro 2 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Videocon_Vphone_Metal/Videocon_Vphone_Metal_S_1.jpg",
            "product_name": "Videocon Vphone Metal"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.7 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_E4g_Dual/Sony_Xperia_E4g_Dual_S_1.jpg",
            "product_name": "Sony Xperia E4g Dual"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Bada OS 2.0", "3.65 inches, 480 x 320", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Wave_M_S7250/Samsung_Wave_M_S7250_S_1.jpg",
            "product_name": "Samsung Wave M S7250"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 720 x 1280 pixels (~294 ppi p...", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S60/Lenovo_S60_S_1.jpg",
            "product_name": "Lenovo S60"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_2690/Nokia_2690_S_1.jpg",
            "product_name": "Nokia 2690"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "4 inches, 800 x 480", "2G, 3G, 1GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_T959/Samsung_Galaxy_S_T959_S_1.jpg",
            "product_name": "Samsung Galaxy S 4G"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "6.5 inches, 1280 x 720", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/BSNL_Champion_DM6513/BSNL_Champion_DM6513_S_1.jpg",
            "product_name": "BSNL Champion DM6513"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_X_500/LG_X_500_S_1.jpg",
            "product_name": "LG X500"
        },
        {
            "price": "\nRs 1,198\n - ",
            "desc": ["Feature Phone", "220 x 176", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X2050/Micromax_X2050_S_1.jpg",
            "product_name": "Micromax X2050"
        },
        {
            "price": "\nRs 3,600\n - ",
            "desc": ["Smartphone, Android OS : 4.4 KitKat\r\nAn...", "4.5 inches, 854 X 480", "2G, 3G, 8GB, 0.5GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_4_5C_Magnifico/iBall_Andi_4_5C_Magnifico_S_1.jpg",
            "product_name": "iBall Andi 4.5C Magnifico"
        },
        {
            "price": "\nRs 3,899\n",
            "desc": ["Feature Phone", "2.8 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_C3312_Duos/Samsung_C3312_Duos_S_1.jpg",
            "product_name": "Samsung C3312 Duos"
        },
        {
            "price": "\nRs 4,199\n",
            "desc": ["Smartphone, Android 5.1", "4.5 inches, 480 x 854 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Q7_Pro/Intex_Aqua_Q7_Pro_S_1.jpg",
            "product_name": "Intex Aqua Q7 Pro"
        },
        {
            "price": "\nRs 4,319\n - ",
            "desc": ["Phablet, Android 4.4 KitKat", "6 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Magnum_X604/Lava_Magnum_X604_S_1.jpg",
            "product_name": "Lava Magnum X604"
        },
        {
            "price": "\nRs 4,599\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_G300/Huawei_Ascend_G300_S_1.jpg",
            "product_name": "Huawei Ascend G300"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android Marshmallow 6.0.1", "5 inches, HD, 1280x720 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_WIND_7i/LYF_WIND_7i_S_1.jpg",
            "product_name": "LYF WIND 7i"
        },
        {
            "price": "\nRs 5,500\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Idea_Aurus_III/Idea_Aurus_III_S_1.jpg",
            "product_name": "Idea Aurus III"
        },
        {
            "price": "\nRs 6,999\n - ",
            "desc": ["Smartphone, Android Marshmallow 6.0", "5.0 inches, HD (1280*720)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_unite_4_plus/Micromax_Canvas_unite_4_plus_S_1.jpg",
            "product_name": "Micromax Canvas Unite 4 Plus"
        },
        {
            "price": "\nRs 9,699\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S7/Karbonn_Titanium_S7_S_1.jpg",
            "product_name": "Karbonn Titanium S7"
        },
        {
            "price": "\nRs 10,000\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4 inches, 854 x 480", "2G, 3G, 1GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_Neo_L/SONY_Xperia_Neo_L_S_1.jpg",
            "product_name": "Sony Xperia neo L"
        },
        {
            "price": "\nRs 12,600\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.7 inches, 854 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_sola/Sony_Xperia_sola_S_1.jpg",
            "product_name": "Sony Xperia sola"
        },
        {
            "price": "\nRs 22,900\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5.2 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G2_16GB/LG_G2_16GB_S_1.jpg",
            "product_name": "LG G2 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Mobile 6.1", "2.8 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Touch/HTC_Touch_S_1.jpg",
            "product_name": "HTC Touch 3G"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5.01 inches, 800 x 480", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Grand_Neo/Samsung_Galaxy_Grand_Neo_S_1.jpg",
            "product_name": "Samsung Galaxy Grand Neo 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_7230/Nokia_7230_S_1.jpg",
            "product_name": "Nokia 7230"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_A092_Unite/Micromax_A092_Unite_S_1.jpg",
            "product_name": "Micromax Canvas Unite A092"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "4 inches, 800 x 480", "2G, 3G, 16GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_Advance_I9070/Samsung_Galaxy_S_Advance_I9070_S_1.jpg",
            "product_name": "Samsung Galaxy S Advance I9070 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android Marshmallo...", "5.5 inches, 1280\u00d7720 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_Bingo_50_Plus/InFocus_Bingo_50_Plus_S_1.jpg",
            "product_name": "InFocus Bingo 50+"
        },
        {
            "price": "\nRs 1,379\n - ",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Turbo_S5/Intex_Turbo_S5_S_1.jpg",
            "product_name": "Intex Turbo S5"
        },
        {
            "price": "\nRs 2,399\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/M_Tech_Opal_Quest/M_Tech_Opal_Quest_S_1.jpg",
            "product_name": "M-Tech Opal Quest"
        },
        {
            "price": "\nRs 2,799\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_Ultrafone_102/Zen_Ultrafone_102_S_1.jpg",
            "product_name": "Zen Ultrafone 102"
        },
        {
            "price": "\nRs 3,539\n - ",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "4 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A62/Micromax_Bolt_A62_S_1.jpg",
            "product_name": "Micromax Bolt A62"
        },
        {
            "price": "\nRs 3,649\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, Less than 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_40/Intex_Aqua_40_S_1.jpg",
            "product_name": "Intex Aqua 4.0"
        },
        {
            "price": "\nRs 3,799\n - ",
            "desc": ["Smartphone, Android 5.1", "5 inches, 720 x 1280", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Lions_3G/Intex_Aqua_Lions_3G_S_1.jpg",
            "product_name": "Intex Aqua Lions 3G"
        },
        {
            "price": "\nRs 4,330\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A47/Micromax_Bolt_A47_S_1.jpg",
            "product_name": "Micromax Bolt A47"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 4.4.2 (KitKat)", "4.5 inches, 854 x 480 pixels", "2G, 3G, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Q5/Intex_Aqua_Q5_S_1.jpg",
            "product_name": "Intex Aqua Q5"
        },
        {
            "price": "\nRs 9,099\n - ",
            "desc": ["Smartphone, Star OS 3.0 (Based on Andro...", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X81/Lava_X81_S_1.jpg",
            "product_name": "Lava X81"
        },
        {
            "price": "\nRs 10,840\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5.20 inches In-cell Touch, 1920 \u00d7 1080 ...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_X_cam/LG_X_cam_S_1.jpg",
            "product_name": "LG X cam"
        },
        {
            "price": "\nRs 38,500\n",
            "desc": ["Smart Watch, watchOS 3", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Apple_Watch_Nike_plus/Apple_Watch_Nike_plus_S_1.jpg",
            "product_name": "Apple Watch Nike+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.2 inches, 480 x 320", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Appeal_I827/Samsung_Galaxy_Appeal_I827_S_1.jpg",
            "product_name": "Samsung Galaxy Appeal I827"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Fly_F45Q/Fly_F45Q_S_1.jpg",
            "product_name": "Fly F45Q"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "2.8 inches, 320 x 240", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_beTouch_E140/Acer_beTouch_E140_S_1.jpg",
            "product_name": "Acer beTouch E140"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.3 Ice Cream San...", "4.3 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L7_P700/LG_Optimus_L7_P700_S_1.jpg",
            "product_name": "LG Optimus L7 P700"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 8GB, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_M6/Intex_Cloud_M6_S_1.jpg",
            "product_name": "Intex Cloud M6"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_Zenfone_4/Asus_Zenfone_4_S_1.jpg",
            "product_name": "ASUS ZenFone 4 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5.1 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S5_LTE_A_G901F/Samsung_Galaxy_S5_LTE_A_G901F_S_1.jpg",
            "product_name": "Samsung Galaxy S5 LTE-A G901F 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 7.0 Nougat", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_X300/LG_X300_S_1.jpg",
            "product_name": "LG X300"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat", "5.7 inches, 5.7\" Full HD IPS (1920 x 10...", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Stylo_3_Plus/LG_Stylo_3_Plus_S_1.jpg",
            "product_name": "LG Stylo 3 PLUS"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Onida_Smart_i405/Onida_Smart_i405_S_1.jpg",
            "product_name": "Onida Smart i405"
        },
        {
            "price": "\nRs 3,185\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.0 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A48_8GB_1/Lava_A48_8GB_1_S_1.jpg",
            "product_name": "Lava A48 8GB"
        },
        {
            "price": "\nRs 3,777\n - ",
            "desc": ["Smartphone, Android 4.4", "5.0 inches, 480 * 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Aura/Karbonn_Aura_S_1.jpg",
            "product_name": "Karbonn Karbonn Aura"
        },
        {
            "price": "\nRs 5,290\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_A550s_IPS/Xolo_A550s_IPS_S_1.jpg",
            "product_name": "Xolo A550s IPS"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5 inches, 720 x 1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P50_Idol/Panasonic_P50_Idol_S_1.jpg",
            "product_name": "Panasonic P50 Idol"
        },
        {
            "price": "\nRs 6,099\n",
            "desc": ["Smartphone, Android 5.0 Lollipop", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_One/Xolo_One_S_1.jpg",
            "product_name": "Xolo One"
        },
        {
            "price": "\nRs 6,100\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A680/Lenovo_A680_S_1.jpg",
            "product_name": "Lenovo A680"
        },
        {
            "price": "\nRs 6,345\n",
            "desc": ["Smartphone, Android 5.0 (Lollipop)\r\nOS ...", "5 inches (12.7cm), HD 1280x720\r\nScreen ...", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_5_Lite_Special_Edition/Micromax_Canvas_5_Lite_Special_Edition_S_1.jpg",
            "product_name": "Micromax Canvas 5 Lite Special Edition"
        },
        {
            "price": "\nRs 6,990\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "2.8 inches, 320 x 240", "2G, 3G, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Pocket_S5300/Samsung_Galaxy_Pocket_S5300_S_1.jpg",
            "product_name": "Samsung Galaxy Pocket S5300"
        },
        {
            "price": "\nRs 8,490\n - ",
            "desc": ["Smartphone, Android Lollipop", "5.0 inches, FWVGA (854X480)", "2G, 3G, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_K7_IN/LG_K7_IN_S_1.jpg",
            "product_name": "LG K7"
        },
        {
            "price": "\nRs 8,990\n - ",
            "desc": ["Smartphone, Windows Phone 7.5 Mango", "3.7 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_710/Nokia_Lumia_710_S_1.jpg",
            "product_name": "Nokia Lumia 710"
        },
        {
            "price": "\nRs 8,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_NITRO_A310/Micromax_Canvas_NITRO_A310_S_1.jpg",
            "product_name": "Micromax Canvas Nitro A310"
        },
        {
            "price": "\nRs 10,500\n - ",
            "desc": ["Phablet, Android 5.0 Lollipop", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_M812/InFocus_M812_S_1.jpg",
            "product_name": "InFocus M812"
        },
        {
            "price": "\nRs 12,890\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 720 x 1280", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P51/Panasonic_P51_S_1.jpg",
            "product_name": "Panasonic P51"
        },
        {
            "price": "\nRs 17,000\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4.3 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Atrix_2_MB865/Motorola_Atrix_2_MB865_S_1.jpg",
            "product_name": "Motorola Atrix 2 MB865"
        },
        {
            "price": "\nRs 34,990\n - ",
            "desc": ["Smartphone, Phablet, Android 5.1.1", "5.7 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Glaxy_Note_5_Dual_Sim/Glaxy_Note_5_Dual_Sim_S_1.jpg",
            "product_name": "Samsung Galaxy Note5 Dual Sim 32 GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "3.2 inches, 320 x 240", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L3_II_Dual_E435/LG_Optimus_L3_II_Dual_E435_S_1.jpg",
            "product_name": "LG Optimus L3 II Dual E435"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_K3/Lenovo_K3_S_1.jpg",
            "product_name": "Lenovo K3"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, AndroidTM 6.0 Marshmallow", "5 inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_Shine_Lite/Alcatel_Shine_Lite_S_1.jpg",
            "product_name": "Alcatel Shine Lite"
        },
        {
            "price": "\nRs 1,284\n",
            "desc": ["Feature Phone", "2.4 inches, 240 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Turbo_S1/Intex_Turbo_S1_S_1.jpg",
            "product_name": "Intex Turbo S1"
        },
        {
            "price": "\nRs 1,299\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X249/Micromax_X249_S_1.jpg",
            "product_name": "Micromax X249"
        },
        {
            "price": "\nRs 2,399\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/M_Tech_Opal_S2/M_Tech_Opal_S2_S_1.jpg",
            "product_name": "M-Tech Opal S2"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android OS v4.4.2 (Kitkat)", "4 inches, 800\u00d7480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Q3K_Power/Celkon_Q3K_Power_S_1.jpg",
            "product_name": "Celkon Q3K Power"
        },
        {
            "price": "\nRs 3,650\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_440/Spice_Stellar_Mi_440_S_1.jpg",
            "product_name": "Spice Stellar Mi-440"
        },
        {
            "price": "\nRs 4,404\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Blade_C_V807/ZTE_Blade_C_V807_S_1.jpg",
            "product_name": "ZTE Blade C V807"
        },
        {
            "price": "\nRs 4,499\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q600s/Xolo_Q600s_S_1.jpg",
            "product_name": "Xolo Q600s"
        },
        {
            "price": "\nRs 5,549\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "10.92 cm (4.3)", "4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Star_Advance/Samsung_Galaxy_Star_Advance_S_1.jpg",
            "product_name": "Samsung Galaxy Star Advance"
        },
        {
            "price": "\nRs 5,699\n",
            "desc": ["Smartphone, Android Lollipop 5.1 Inlife...", "4.5 inches, 854\u00d7480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_Bingo_20/InFocus_Bingo_20_S_1.jpg",
            "product_name": "InFocus Bingo 20"
        },
        {
            "price": "\nRs 7,499\n - ",
            "desc": ["Phablet, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q2100/Xolo_Q2100_S_1.jpg",
            "product_name": "Xolo Q2100"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_M530/InFocus_M530_S_1.jpg",
            "product_name": "InFocus M530"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "3.5 inches, 480 x 320", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_miro/Sony_Xperia_miro_S_1.jpg",
            "product_name": "Sony Xperia miro"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_HD_A116/Micromax_Canvas_HD_A116_S_1.jpg",
            "product_name": "Micromax Canvas HD A116"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 480 x 854", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Desire_326_G/Desire_326_G_S_1.jpg",
            "product_name": "HTC Desire 326G Dual Sim 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.8 inches", "2G"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lemon_Duo_305/Lemon_Duo_305_S_1.jpg",
            "product_name": "Lemon Duo 305"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v5.1.1 (Lollipop)", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Zero/LG_Zero_S_1.jpg",
            "product_name": "LG Zero F620S"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1.1", "5.5 inches, 1440x2560px", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Creo_Mark_1/Creo_Mark_1_S_1.jpg",
            "product_name": "CREO Mark 1"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat", "5.5 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ARCHOS_55_Graphite/ARCHOS_55_Graphite_S_1.jpg",
            "product_name": "ARCHOS 55 Graphite"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat...", "5.5 inches, 1080x1920, \r\n16M colors \r\nm...", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_V870_concept/ZTE_V870_concept_S_1.jpg",
            "product_name": "ZTE V870"
        },
        {
            "price": "\nRs 849\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_C344/Celkon_C344_S_1.jpg",
            "product_name": "Celkon C344"
        },
        {
            "price": "\nRs 3,499\n",
            "desc": ["Smartphone, Windows Phone 8.1", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_4L_Pulse/iBall_Andi_4L_Pulse_S_1.jpg",
            "product_name": "iBall Andi 4L Pulse"
        },
        {
            "price": "\nRs 3,599\n - ",
            "desc": ["Smartphone, Android 4.4.2 (KitKat)", "4.5 inches, 480 x 854 pixels", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Y4/Intex_Aqua_Y4_S_1.jpg",
            "product_name": "Intex Aqua Y4"
        },
        {
            "price": "\nRs 3,740\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 800 x 480", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A36/Micromax_Bolt_A36_S_1.jpg",
            "product_name": "Micromax Bolt A36"
        },
        {
            "price": "\nRs 3,990\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_Y210D/Huawei_Ascend_Y210D_S_1.jpg",
            "product_name": "Huawei Ascend Y210D"
        },
        {
            "price": "\nRs 5,299\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches, 1280 x 720 Display Resolution", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Life_III/Intex_Aqua_Life_III_S_1.jpg",
            "product_name": "Intex Aqua Life III"
        },
        {
            "price": "\nRs 5,499\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_A500s_Lite/Xolo_A500s_Lite_S_1.jpg",
            "product_name": "Xolo A500s Lite"
        },
        {
            "price": "\nRs 6,199\n - ",
            "desc": ["Smartphone, Android 5.1 Lolipop", "5 inches, 1280 * 720 pixels resolution", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Quattro_L51_HD/Karbonn_Quattro_L51_HD_S_1.jpg",
            "product_name": "Karbonn Quattro L51 HD"
        },
        {
            "price": "\nRs 6,999\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zopo_Color_E/Zopo_Color_E_S_1.jpg",
            "product_name": "ZOPO Color E"
        },
        {
            "price": "\nRs 8,590\n - ",
            "desc": ["Smartphone, Windows Phone 7.5 Mango", "3.7 inches, 800 x 480", "2G, 3G, 8GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_610/Nokia_Lumia_610_S_1.jpg",
            "product_name": "Nokia Lumia 610"
        },
        {
            "price": "\nRs 9,799\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_V887/ZTE_V887_S_1.jpg",
            "product_name": "ZTE V887"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_P780/Lenovo_P780_S_1.jpg",
            "product_name": "Lenovo P780 4GB"
        },
        {
            "price": "\nRs 14,724\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_P780/Lenovo_P780_S_1.jpg",
            "product_name": "Lenovo P780 8GB"
        },
        {
            "price": "\nRs 15,900\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.9 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G_Pro_2/LG_G_Pro_2_S_1.jpg",
            "product_name": "LG G Pro 2 32GB"
        },
        {
            "price": "\nRs 16,800\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.3 inches, 1280 x 720", "2G, 3G, 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_SL/Sony_Xperia_SL_S_1.jpg",
            "product_name": "Sony Xperia SL"
        },
        {
            "price": "\nRs 17,990\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_J/SONY_Xperia_J_S_1.jpg",
            "product_name": "Sony Xperia J"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "5.3 inches, 1280 x 800", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note_N7000/Samsung_Galaxy_Note_N7000_S_1.jpg",
            "product_name": "Samsung Galaxy Note N7000 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.2 inches, 768 x 1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_M2_4G/InFocus_M2_4G_S_1.jpg",
            "product_name": "InFocus M2 4G"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Philips_E122/Philips_E122_S_1.jpg",
            "product_name": "Philips E122"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "6 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Golden_Warrior_Note_8/Lenovo_Golden_Warrior_Note_8_S_1.jpg",
            "product_name": "Lenovo Golden Warrior Note 8"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 6.0 Marshm...", "5.50 inches, FHD (1920 x 1080)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ARCHOS_55_Diamond_Selfie/ARCHOS_55_Diamond_Selfie_S_1.jpg",
            "product_name": "ARCHOS 55 Diamond Selfie"
        },
        {
            "price": "\nRs 1,129\n",
            "desc": ["Feature Phone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_X3/Zen_X3_S_1.jpg",
            "product_name": "Zen X3"
        },
        {
            "price": "\nRs 1,599\n - ",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X2400/Micromax_X2400_S_1.jpg",
            "product_name": "Micromax X2400"
        },
        {
            "price": "\nRs 2,549\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "3.5 inches, 480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Smart_Flo_Space_Mi_354/Spice_Smart_Flo_Space_Mi_354_S_1.jpg",
            "product_name": "Spice Smart Flo Space Mi-354"
        },
        {
            "price": "\nRs 3,100\n - ",
            "desc": ["Smartphone, Android 5.1-Lollipop", "4.5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A59/Lava_A59_S_1.jpg",
            "product_name": "Lava A59"
        },
        {
            "price": "\nRs 3,490\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.5 inches, FWVGA, 854 x 480 pixels, 32...", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Q7/Intex_Aqua_Q7_S_1.jpg",
            "product_name": "Intex Aqua Q7"
        },
        {
            "price": "\nRs 4,599\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Millennia_Q450/Celkon_Millennia_Q450_S_1.jpg",
            "product_name": "Celkon Millennia Q450"
        },
        {
            "price": "\nRs 4,900\n",
            "desc": ["Feature Phone", "3.2 inches, 320 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_T375_Cookie_Smart/LG_T375_Cookie_Smart_S_1.jpg",
            "product_name": "LG T375 Cookie Smart"
        },
        {
            "price": "\nRs 5,190\n",
            "desc": ["Smartphone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_A500_Club/Xolo_A500_Club_S_1.jpg",
            "product_name": "Xolo A500 Club"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "4 inches, 800 x 480", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Superfone_Ninja_40_A87/Micromax_Superfone_Ninja_40_A87_S_1.jpg",
            "product_name": "Micromax Superfone Ninja 4.0 A87"
        },
        {
            "price": "\nRs 6,207\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Ace_Mini/Intex_Aqua_Ace_Mini_S_1.jpg",
            "product_name": "Intex Aqua Ace Mini"
        },
        {
            "price": "\nRs 8,299\n",
            "desc": ["Smartphone, Android 6.0 Marshmallow Ope...", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_Bingo_50/InFocus_Bingo_50_S_1.jpg",
            "product_name": "InFocus Bingo 50"
        },
        {
            "price": "\nRs 8,990\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0\r\nInlif...", "5.5 inches, FHD 1080x1920 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_M535_plus/InFocus_M535_plus_S_1.jpg",
            "product_name": "InFocus M535+"
        },
        {
            "price": "\nRs 24,500\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Droid_DNA/HTC_Droid_DNA_S_1.jpg",
            "product_name": "HTC Droid DNA"
        },
        {
            "price": "\nRs 29,990\n - ",
            "desc": ["Smartphone, Android 5.0.2 Lollipop", "5.1 inches, 2560 x 1440", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S6/Samsung_Galaxy_S6_S_1.jpg",
            "product_name": "Samsung Galaxy S6 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.3 Ice Cream San...", "3.2 inches, 480 x 320", "2G, 3G, 3GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_tipo_dual/Sony_Xperia_tipo_dual_S_1.jpg",
            "product_name": "Sony Xperia tipo dual"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 1.6 Donut", "2.6 inches, 320 x 240", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_beTouch_E130/Acer_beTouch_E130_S_1.jpg",
            "product_name": "Acer beTouch E130"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Grand_I9080/Samsung_Galaxy_Grand_I9080_S_1.jpg",
            "product_name": "Samsung Galaxy Grand I9080"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 1.5 Cupcake", "2.8 inches, 320 x 240", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_beTouch_E110/Acer_beTouch_E110_S_1.jpg",
            "product_name": "Acer beTouch E110"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Mobile 6.5", "2.62 inches, 320 x 320", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Omnia_PRO_4_B7350/Samsung_Omnia_PRO_4_B7350_S_1.jpg",
            "product_name": "Samsung Omnia PRO 4 B7350"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_PadFone_2/Asus_PadFone_2_S_1.jpg",
            "product_name": "ASUS PadFone 2 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_431/Spice_Stellar_Mi_431_S_1.jpg",
            "product_name": "Spice Stellar Mi-431"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.3 inches, 800 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Star_2_Plus/Samsung_Galaxy_Star_2_Plus_S_1.jpg",
            "product_name": "Samsung Galaxy Star 2 Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.45 inches, 128 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_OT_208/Alcatel_OT_208_S_1.jpg",
            "product_name": "Alcatel OT-208"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android OS, v6.0.1...", "5.5 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_S9/Gionee_S9_S_1.jpg",
            "product_name": "Gionee S9"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0(Nougat...", "5.5 inches, 1,280 x 720", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Y7_Prime/Huawei_Y7_Prime_S_1.jpg",
            "product_name": "Huawei Y7 Prime"
        },
        {
            "price": "\nRs 1,049\n - ",
            "desc": ["Feature Phone", "160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X097/Micromax_X097_S_1.jpg",
            "product_name": "Micromax X097"
        },
        {
            "price": "\nRs 1,169\n - ",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K9_Jumbo/Karbonn_K9_Jumbo_S_1.jpg",
            "product_name": "Karbonn K9 Jumbo"
        },
        {
            "price": "\nRs 1,299\n",
            "desc": ["Feature Phone", "2.4 inches (6.1 cm ), QVGA, 320 x 240 P...", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X264/Micromax_X264_S_1.jpg",
            "product_name": "Micromax X264"
        },
        {
            "price": "\nRs 1,380\n - ",
            "desc": ["Feature Phone", "2.4 inches, 240 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_TURBO_i6/Intex_TURBO_i6_S_1.jpg",
            "product_name": "Intex TURBO i6"
        },
        {
            "price": "\nRs 2,500\n",
            "desc": ["Feature Phone", "2.8 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Shaan_Fab_28H/iBall_Shaan_Fab_28H_S_1.jpg",
            "product_name": "iBall Shaan Fab 2.8H"
        },
        {
            "price": "\nRs 2,690\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_114/Nokia_114_S_1.jpg",
            "product_name": "Nokia 114"
        },
        {
            "price": "\nRs 3,499\n",
            "desc": ["Smartphone, Emotion Lite UI 2.0 with An...", "5.0 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_G630/Huawei_Ascend_G630_S_1.jpg",
            "product_name": "Huawei Ascend G630"
        },
        {
            "price": "\nRs 3,499\n",
            "desc": ["Smartphone, Android Kitkat 4.4.2", "4.5 inches, 854 \u00d7 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Millennia_Spark/Celkon_Millennia_Spark_S_1.jpg",
            "product_name": "Celkon Millennia SPARK"
        },
        {
            "price": "\nRs 3,580\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Fire_A093/Micromax_Canvas_Fire_A093_S_1.jpg",
            "product_name": "Micromax Canvas Fire A093"
        },
        {
            "price": "\nRs 4,249\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Obi_Racoon_S401/Obi_Racoon_S401_S_1.jpg",
            "product_name": "Obi Racoon S401"
        },
        {
            "price": "\nRs 4,490\n - ",
            "desc": ["Smartphone, Android 5.1", "5 inches, 1280 * 720 pixels", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S205/Karbonn_Titanium_S205_S_1.jpg",
            "product_name": "Karbonn Titanium S205"
        },
        {
            "price": "\nRs 4,499\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "5.0 inches, 854 x 480 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Force/Intex_Cloud_Force_S_1.jpg",
            "product_name": "Intex Cloud Force"
        },
        {
            "price": "\nRs 4,949\n - ",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A71/Micromax_Bolt_A71_S_1.jpg",
            "product_name": "Micromax Bolt A71"
        },
        {
            "price": "\nRs 5,400\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LENOVO_A526/LENOVO_A526_S_1.jpg",
            "product_name": "Lenovo A526"
        },
        {
            "price": "\nRs 5,990\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5 inches", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Fablet_F1/Swipe_Fablet_F1_S_1.jpg",
            "product_name": "Swipe Fablet F1"
        },
        {
            "price": "\nRs 7,999\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 854 x 480", "4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5_M8/iBall_Andi_5_M8_S_1.jpg",
            "product_name": "iBall Andi 5-M8"
        },
        {
            "price": "\nRs 8,206\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5.3 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/OptimaSmart_OPS_80/OptimaSmart_OPS_80_S_1.jpg",
            "product_name": "OptimaSmart OPS-80"
        },
        {
            "price": "\nRs 11,990\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_U8860_Honor/Huawei_U8860_Honor_S_1.jpg",
            "product_name": "Honor U8860"
        },
        {
            "price": "\nRs 15,200\n - ",
            "desc": ["Smartphone, Android 4.1.1 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Butterfly/HTC_Butterfly_S_1.jpg",
            "product_name": "HTC Butterfly"
        },
        {
            "price": "\nRs 17,999\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.55 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_ZR/Sony_Xperia_ZR_S_1.jpg",
            "product_name": "Sony Xperia ZR"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_X1_01/Nokia_X1_01_S_1.jpg",
            "product_name": "Nokia X1-01"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.3 inches, 96 x 68", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_1202/Nokia_1202_S_1.jpg",
            "product_name": "Nokia 1202"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 800 x 480", "2G, 3G, 16GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_Plus_i9001/Samsung_Galaxy_S_Plus_i9001_S_1.jpg",
            "product_name": "Samsung Galaxy S Plus I9001 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Y2/Intex_Aqua_Y2_S_1.jpg",
            "product_name": "Intex Aqua Y2 1GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.5 inches, 480 x 320", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_AD3520/Micromax_Bolt_AD3520_S_1.jpg",
            "product_name": "Micromax Bolt AD3520"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0", "5.50 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 64GB, 6GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_Zuk_Edge/Lenovo_Zuk_Edge_S_1.jpg",
            "product_name": "Lenovo ZUK EDGE"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 7.0 Nougat", "5.00 inches, HD (1280 x 720)", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ARCHOS_50_Graphite/ARCHOS_50_Graphite_S_1.jpg",
            "product_name": "ARCHOS 50 Graphite"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.1.1 (Nou...", "6.0 inches, 1920 x 1080 IPS FHD with Go...", "3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Max_XL/ZTE_Max_XL_S_1.jpg",
            "product_name": "ZTE Max XL"
        },
        {
            "price": "\nRs 1,170\n - ",
            "desc": ["Feature Phone", "2.4 inches, 240 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_KILLER_3/Intex_KILLER_3_S_1.jpg",
            "product_name": "Intex Killer 3"
        },
        {
            "price": "\nRs 1,397\n - ",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/M_Tech_L3/M_Tech_L3_S_1.jpg",
            "product_name": "M-Tech L3"
        },
        {
            "price": "\nRs 3,099\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Onida_Smart_i407/Onida_Smart_i407_S_1.jpg",
            "product_name": "Onida Smart i407"
        },
        {
            "price": "\nRs 3,199\n - ",
            "desc": ["Smartphone, Android 5.1", "4.0 inches, 800 x 480 Display Resolution", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Cloud_Gem_Plus/Cloud_Gem_Plus_S_1.jpg",
            "product_name": "Intex Cloud Gem+"
        },
        {
            "price": "\nRs 3,618\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_X12/Intex_Cloud_X12_S_1.jpg",
            "product_name": "Intex Cloud X12"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Windows Phone 8.1", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Win_W121/Micromax_Canvas_Win_W121_S_1.jpg",
            "product_name": "Micromax Canvas Win W121"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5 inches, 854 x 480", "4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Z6/Intex_Cloud_Z6_S_1.jpg",
            "product_name": "Intex Cloud Z6"
        },
        {
            "price": "\nRs 4,499\n - ",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_A1_AQ4501/Micromax_Canvas_A1_AQ4501_S_1.jpg",
            "product_name": "Micromax Canvas A1 AQ4501"
        },
        {
            "price": "\nRs 4,499\n - ",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A390/Lenovo_A390_S_1.jpg",
            "product_name": "Lenovo A390"
        },
        {
            "price": "\nRs 4,690\n",
            "desc": ["Feature Phone", "3 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Star_3_Duos_S5222/Samsung_Star_3_Duos_S5222_S_1.jpg",
            "product_name": "Samsung Star 3 Duos S5222"
        },
        {
            "price": "\nRs 4,700\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 540 x 960 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P41/Panasonic_P41_S_1.jpg",
            "product_name": "Panasonic P41"
        },
        {
            "price": "\nRs 4,900\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A328/Lenovo_A328_S_1.jpg",
            "product_name": "Lenovo A328"
        },
        {
            "price": "\nRs 5,500\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A800/Lenovo_A800_S_1.jpg",
            "product_name": "Lenovo A800"
        },
        {
            "price": "\nRs 5,650\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_XL/Nokia_XL_S_1.jpg",
            "product_name": "Nokia XL Dual SIM"
        },
        {
            "price": "\nRs 7,949\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Omega_50/Xolo_Omega_50_S_1.jpg",
            "product_name": "Xolo Omega 5.0"
        },
        {
            "price": "\nRs 8,500\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "4 inches, 800 x 480", "2G, 3G, 2GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_Black_P970/LG_Optimus_Black_P970_S_1.jpg",
            "product_name": "LG Optimus Black P970"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Android Kitkat 4.4", "5.0 inches, 480 x 854 Resolution", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Air_II/Intex_Aqua_Air_II_S_1.jpg",
            "product_name": "Intex Aqua Air II"
        },
        {
            "price": "\nRs 10,299\n - ",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.8 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_III_I9300_16GB/Samsung_Galaxy_S_III_I9300_16GB_S_1.jpg",
            "product_name": "Samsung Galaxy S III I9300 16GB"
        },
        {
            "price": "\nRs 11,900\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.3 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_SV/HTC_One_SV_S_1.jpg",
            "product_name": "HTC One SV"
        },
        {
            "price": "\nRs 19,399\n - ",
            "desc": ["Smartphone, Phablet, Android OS, V5.1 L...", "5.5 inches, 720 x 1280", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Elife_S6/Gionee_Elife_S6_S_1.jpg",
            "product_name": "Gionee Elife S6"
        },
        {
            "price": "\nRs 23,849\n",
            "desc": ["Smartphone, Windows Phone 8", "4.3 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Windows_Phone_8X/HTC_Windows_Phone_8X_S_1.jpg",
            "product_name": "HTC Windows Phone 8X"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Infocus_M810/Infocus_M810_S_1.jpg",
            "product_name": "InFocus M810"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "3.5 inches, 480 x 320", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Discover_S730M/Samsung_Galaxy_Discover_S730M_S_1.jpg",
            "product_name": "Samsung Galaxy Discover S730M"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4.5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_G/Motorola_Moto_G_S_1.jpg",
            "product_name": "Motorola Moto G 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Y2/Intex_Cloud_Y2_S_1.jpg",
            "product_name": "Intex Cloud Y2"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android v5.1 (Lollipop)", "5.0 inches, 720x1280 Pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Reach_Mobile_Opulent/Reach_Mobile_Opulent_S_1.jpg",
            "product_name": "Reach Mobile Opulent"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Ascend_Y220/Huawei_Ascend_Y220_S_1.jpg",
            "product_name": "Huawei Ascend Y220"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "2.8 inches, 320 x 240", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_A60_Andro/Micromax_A60_Andro_S_1.jpg",
            "product_name": "Micromax A60 Andro"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android v5.1 (Lollipop)", "4.0 inches, 480x800 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Reach_Mobile_COGENT/Reach_Mobile_COGENT_S_1.jpg",
            "product_name": "Reach Mobile Cogent"
        },
        {
            "price": "\nRs 1,146\n",
            "desc": ["Feature Phone", "1.77 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X099/Micromax_X099_S_1.jpg",
            "product_name": "Micromax X099"
        },
        {
            "price": "\nRs 1,289\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X245/Micromax_X245_S_1.jpg",
            "product_name": "Micromax X245"
        },
        {
            "price": "\nRs 4,199\n - ",
            "desc": ["Smartphone, Android KitKat 4.4", "5 inches, 854 x 480 Display Resolution", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Air/Intex_Aqua_Air_S_1.jpg",
            "product_name": "Intex Aqua Air"
        },
        {
            "price": "\nRs 4,449\n - ",
            "desc": ["Smartphone, Android OS v4.4.2 (Kitkat)", "4.5 inches, 480 x 800", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_2GB_XPRESS/Celkon_2GB_XPRESS_S_1.jpg",
            "product_name": "Celkon 2GB Xpress"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S1_Plus/Karbonn_Titanium_S1_Plus_S_1.jpg",
            "product_name": "Karbonn Titanium S1 Plus"
        },
        {
            "price": "\nRs 5,800\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Star_II_HD/Intex_Aqua_Star_II_HD_S_1.jpg",
            "product_name": "Intex Aqua Star II HD"
        },
        {
            "price": "\nRs 7,185\n - ",
            "desc": ["Smartphone, Android OS, v4.4 kitkat", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Pioneer_P4S/Gionee_Pioneer_P4S_S_1.jpg",
            "product_name": "Gionee Pioneer P4S"
        },
        {
            "price": "\nRs 7,742\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Marathon_M3/Gionee_Marathon_M3_S_1.jpg",
            "product_name": "Gionee Marathon M3"
        },
        {
            "price": "\nRs 7,919\n",
            "desc": ["Smartphone, Phablet, Android 6.0, Marsh...", "5.5 inches, HD", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X50_Plus/Lava_X50_Plus_S_1.jpg",
            "product_name": "Lava X50+"
        },
        {
            "price": "\nRs 7,999\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.5 inches, 854 x 480", "2G, 3G, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Superfone_Ninja_A91/Micromax_Superfone_Ninja_A91_S_1.jpg",
            "product_name": "Micromax Superfone Ninja A91"
        },
        {
            "price": "\nRs 8,990\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_616/HTC_Desire_616_S_1.jpg",
            "product_name": "HTC Desire 616 dual sim"
        },
        {
            "price": "\nRs 9,309\n - ",
            "desc": ["Smartphone, Android 5.1 ,Lollipop", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Ace/Intex_Aqua_Ace_S_1.jpg",
            "product_name": "Intex Aqua Ace"
        },
        {
            "price": "\nRs 17,999\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Motorola_Moto_X/Motorola_Moto_X_S_1.jpg",
            "product_name": "Motorola Moto X 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "854 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Smart_Flo_Mettle_5X_Mi_504/Spice_Smart_Flo_Mettle_5X_Mi_504_S_1.jpg",
            "product_name": "Spice Smart Flo Mettle 5X Mi-504"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "3.5 inches, 480 x 320", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_X_PLUS/Intex_Cloud_X_PLUS_S_1.jpg",
            "product_name": "Intex Cloud X+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S1/Karbonn_Titanium_S1_S_1.jpg",
            "product_name": "Karbonn Titanium S1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.65 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Premier_I9260/Samsung_Galaxy_Premier_I9260_S_1.jpg",
            "product_name": "Samsung Galaxy Premier I9260 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Mobile 6", "2.6 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Touch_Dual/HTC_Touch_Dual_S_1.jpg",
            "product_name": "HTC Touch Dual"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 800 x 480", "2G, 3G, 16GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Google_Nexus_S/Samsung_Google_Nexus_S_S_1.jpg",
            "product_name": "Samsung Google Nexus S"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Migold_Mi6/Migold_Mi6_S_1.jpg",
            "product_name": "Migold Mi6"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4.3 inches, 800 x 480", "2G, 3G, 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_II_I9100_32GB/Samsung_Galaxy_S_II_I9100_32GB_S_1.jpg",
            "product_name": "Samsung Galaxy S II I9100 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "3 inches, 320 x 240", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Music_Duos_S6012/Samsung_Galaxy_Music_Duos_S6012_S_1.jpg",
            "product_name": "Samsung Galaxy Music Duos S6012"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_470/Spice_Stellar_Mi_470_S_1.jpg",
            "product_name": "Spice Stellar Mi-470"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "2.8 inches, 320 x 240", "2G, 3G, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Pocket_Duos_S5302/Samsung_Galaxy_Pocket_Duos_S5302_S_1.jpg",
            "product_name": "Samsung Galaxy Pocket Duos S5302"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.5 inches, 480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_35/iBall_Andi_35_S_1.jpg",
            "product_name": "iBall Andi 3.5"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_Z330/Acer_Liquid_Z330_S_1.jpg",
            "product_name": "Acer Liquid Z330"
        },
        {
            "price": "\nRs 1,030\n",
            "desc": ["Feature Phone", "160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X085/Micromax_X085_S_1.jpg",
            "product_name": "Micromax X085"
        },
        {
            "price": "\nRs 1,199\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Salora_SM507/Salora_SM507_S_1.jpg",
            "product_name": "Salora SM507"
        },
        {
            "price": "\nRs 1,599\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Shaan_Fab_18I/iBall_Shaan_Fab_18I_S_1.jpg",
            "product_name": "iBall Shaan Fab 18I"
        },
        {
            "price": "\nRs 1,989\n",
            "desc": ["Feature Phone", "2.2 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Q7/Micromax_Q7_S_1.jpg",
            "product_name": "Micromax Q7"
        },
        {
            "price": "\nRs 3,190\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A28/Micromax_Bolt_A28_S_1.jpg",
            "product_name": "Micromax Bolt A28"
        },
        {
            "price": "\nRs 3,390\n - ",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "3.95 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A34/Micromax_Bolt_A34_S_1.jpg",
            "product_name": "Micromax Bolt A34"
        },
        {
            "price": "\nRs 4,594\n - ",
            "desc": ["Smartphone, Android 5.1 lolipop", "4.5 inches, 480 x 854", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Secure/Intex_Aqua_Secure_S_1.jpg",
            "product_name": "Intex Aqua Secure"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.0 inches, 480 x 800 pixels (~233 ppi ...", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/panasonic_T11/panasonic_T11_S_1.jpg",
            "product_name": "Panasonic T11"
        },
        {
            "price": "\nRs 5,505\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "4.5 inches, FWVGA, 480 x 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LYF_FLAME_8/LYF_FLAME_8_S_1.jpg",
            "product_name": "LYF FLAME 8"
        },
        {
            "price": "\nRs 6,775\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "12.7 cm (5.0\u7ab6_xDC9D_), 800 x 480 (WVGA)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Grand_Neo_Plus/Samsung_Galaxy_Grand_Neo_Plus_S_1.jpg",
            "product_name": "Samsung Galaxy Grand Neo Plus"
        },
        {
            "price": "\nRs 7,000\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.2 inches, 480 x 320", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Explorer/HTC_Explorer_S_1.jpg",
            "product_name": "HTC Explorer"
        },
        {
            "price": "\nRs 7,390\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, FWVGA 480 x 854 pixels", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P31/Panasonic_P31_S_1.jpg",
            "product_name": "Panasonic P31"
        },
        {
            "price": "\nRs 8,500\n - ",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Turbo_A250/Micromax_Canvas_Turbo_A250_S_1.jpg",
            "product_name": "Micromax Canvas Turbo A250"
        },
        {
            "price": "\nRs 10,399\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5.3 inches, HD (1280x720)", "4G (LTE), 2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_K10_LTE/LG_K10_LTE_S_1.jpg",
            "product_name": "LG K10 LTE"
        },
        {
            "price": "\nRs 12,200\n - ",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.7 inches, 1280 x 720", "2G, 3G, 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_X/HTC_One_X_S_1.jpg",
            "product_name": "HTC One X 32GB"
        },
        {
            "price": "\nRs 12,999\n - ",
            "desc": ["Smartphone, Android 5.0 (Lollipop), upg...", "5.7 inches, HD(1280 x 720P)", "3G, 4G (LTE), 2G, 16GB, 8GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G4_Stylus/LG_G4_Stylus_S_1.jpg",
            "product_name": "LG G4 Stylus"
        },
        {
            "price": "\nRs 16,900\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4.3 inches, 1280 x 720", "2G, 3G, 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_S/Sony_Xperia_S_S_1.jpg",
            "product_name": "Sony Xperia S"
        },
        {
            "price": "\nRs 29,990\n - ",
            "desc": ["Smartphone, Android 5.0 Lollipop", "5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_M9/HTC_One_M9_S_1.jpg",
            "product_name": "HTC One M9"
        },
        {
            "price": "\nRs 42,881\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "3.7 inches, 800 x 480", "2G, 3G, 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Golden_I9230/Samsung_Galaxy_Golden_I9230_S_1.jpg",
            "product_name": "Samsung Galaxy Golden I9230"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 7.8", "4 inches, 800 x 480", "2G, 3G, 4GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_Lumia_510/Nokia_Lumia_510_S_1.jpg",
            "product_name": "Nokia Lumia 510"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "4.5 inches, 960 x 540", "2G, 3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Style_X/Intex_Aqua_Style_X_S_1.jpg",
            "product_name": "Intex Aqua Style X"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Xcover_2_S7710/Samsung_Galaxy_Xcover_2_S7710_S_1.jpg",
            "product_name": "Samsung Galaxy Xcover 2 S7710"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "3.5 inches, 320 x 480 pixels", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_GalaxyFame_S6812/Samsung_GalaxyFame_S6812_S_1.jpg",
            "product_name": "Samsung Galaxy Fame S6812"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.3 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_II_Plus_i9105/Samsung_Galaxy_S_II_Plus_i9105_S_1.jpg",
            "product_name": "Samsung Galaxy S II Plus I9105"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Power_II/Intex_Aqua_Power_II_S_1.jpg",
            "product_name": "Intex Aqua Power II"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_A500s/Xolo_A500s_S_1.jpg",
            "product_name": "Xolo A500s"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_HD_A116i/Micromax_Canvas_HD_A116i_S_1.jpg",
            "product_name": "Micromax Canvas HD A116i"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_A518/Celkon_Campus_A518_S_1.jpg",
            "product_name": "Celkon Campus A518"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "3.2 inches, 480 x 320", "2G, 3G, 3GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Sony_Xperia_Tipo/Sony_Xperia_Tipo_S_1.jpg",
            "product_name": "Sony Xperia tipo"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "4.3 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_3D_P920/LG_Optimus_3D_P920_S_1.jpg",
            "product_name": "LG Optimus 3D P920"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "2.8 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Pro_B7510/Samsung_Galaxy_Pro_B7510_S_1.jpg",
            "product_name": "Samsung Galaxy Pro B7510"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.8 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_III_CDMA/Samsung_Galaxy_S_III_CDMA_S_1.jpg",
            "product_name": "Samsung Galaxy S III CDMA 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "160 x 128", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Champion_X2_Sleek/Champion_X2_Sleek_S_1.jpg",
            "product_name": "Champion X2 Sleek"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 5.1", "5.5 inches, 1080x1920 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/hyve_buzz/hyve_buzz_S_1.jpg",
            "product_name": "Hyve Buzz"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0 Nougat", "5.5 inches, 720 x 1280 pixels\r\n(~267 pp...", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Huawei_Enjoy_7_Plus_Cncpt/Huawei_Enjoy_7_Plus_Cncpt_S_1.jpg",
            "product_name": "Huawei Enjoy 7 Plus"
        },
        {
            "price": "\nRs 1,509\n - ",
            "desc": ["Feature Phone", "1.46 inches, 128 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X1i/Micromax_X1i_S_1.jpg",
            "product_name": "Micromax X1i"
        },
        {
            "price": "\nRs 1,599\n",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X242/Micromax_X242_S_1.jpg",
            "product_name": "Micromax X242"
        },
        {
            "price": "\nRs 2,799\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_Ultrafone_304/Zen_Ultrafone_304_S_1.jpg",
            "product_name": "Zen Ultrafone 304"
        },
        {
            "price": "\nRs 2,990\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/nokia_112/nokia_112_S_1.jpg",
            "product_name": "Nokia 112"
        },
        {
            "price": "\nRs 3,699\n - ",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Blaze_MT500/Micromax_Canvas_Blaze_MT500_S_1.jpg",
            "product_name": "Micromax Canvas Blaze MT500"
        },
        {
            "price": "\nRs 4,444\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Y2_pro/Intex_Aqua_Y2_pro_S_1.jpg",
            "product_name": "Intex Aqua Y2 pro"
        },
        {
            "price": "\nRs 5,180\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A067/Micromax_Bolt_A067_S_1.jpg",
            "product_name": "Micromax Bolt A067"
        },
        {
            "price": "\nRs 5,350\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/hyve_storm/hyve_storm_S_1.jpg",
            "product_name": "Hyve Storm"
        },
        {
            "price": "\nRs 6,380\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A516/Lenovo_A516_S_1.jpg",
            "product_name": "Lenovo A516"
        },
        {
            "price": "\nRs 6,819\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "6 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Doodle3_A102/Micromax_Canvas_Doodle3_A102_S_1.jpg",
            "product_name": "Micromax Canvas Doodle3 A102"
        },
        {
            "price": "\nRs 7,500\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.5 inches, 480 x 320", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Young_2/Samsung_Galaxy_Young_2_S_1.jpg",
            "product_name": "Samsung Galaxy Young 2"
        },
        {
            "price": "\nRs 7,599\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.2 inches, 320 x 240", "2G, 3G, 1GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L3_E405/LG_Optimus_L3_E405_S_1.jpg",
            "product_name": "LG Optimus L3 E405"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S820/Lenovo_S820_S_1.jpg",
            "product_name": "Lenovo S820 4GB"
        },
        {
            "price": "\nRs 10,500\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_310/HTC_Desire_310_S_1.jpg",
            "product_name": "HTC Desire 310 dual sim"
        },
        {
            "price": "\nRs 11,900\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.3 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_First/HTC_First_S_1.jpg",
            "product_name": "HTC First"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_601/HTC_Desire_601_S_1.jpg",
            "product_name": "HTC Desire 601 dual sim"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "3.5 inches, 480 x 360", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Superfone_Ninja_2_A56/Micromax_Superfone_Ninja_2_A56_S_1.jpg",
            "product_name": "Micromax Superfone Ninja 2 A56"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Mobile 6.5.3", "3.5 inches, 800 x 480", "2G, 3G, 0.5GB, 0.5GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Asus_M10/Asus_M10_S_1.jpg",
            "product_name": "ASUS M10"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.77 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_C355/Celkon_C355_S_1.jpg",
            "product_name": "Celkon C355"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_504Q/Lava_Iris_504Q_S_1.jpg",
            "product_name": "Lava Iris 504Q+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v5.1.1 (Lollipop)", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Zero/LG_Zero_S_1.jpg",
            "product_name": "LG Zero H650E"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmall...", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_A9s/HTC_One_A9s_S_1.jpg",
            "product_name": "HTC One A9s"
        },
        {
            "price": "\nRs 1,330\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X287/Micromax_X287_S_1.jpg",
            "product_name": "Micromax X287"
        },
        {
            "price": "\nRs 1,333\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Shaan_Majestic_24D/iBall_Shaan_Majestic_24D_S_1.jpg",
            "product_name": "iBall Shaan Majestic 2.4D"
        },
        {
            "price": "\nRs 1,625\n - ",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_130/Nokia_130_S_1.jpg",
            "product_name": "Nokia 130"
        },
        {
            "price": "\nRs 1,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A108/Karbonn_A108_S_1.jpg",
            "product_name": "Karbonn A108"
        },
        {
            "price": "\nRs 2,399\n",
            "desc": ["Feature Phone", "3.2 inches, 400 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Discover_132/Lava_Discover_132_S_1.jpg",
            "product_name": "Lava Discover 132"
        },
        {
            "price": "\nRs 3,399\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "4.5 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A68/Lava_A68_S_1.jpg",
            "product_name": "Lava A68"
        },
        {
            "price": "\nRs 3,850\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A59/Micromax_Bolt_A59_S_1.jpg",
            "product_name": "Micromax Bolt A59"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Phablet, Android 5.1-Lollipop", "5.5 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A79/Lava_A79_S_1.jpg",
            "product_name": "Lava A79"
        },
        {
            "price": "\nRs 4,249\n - ",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "5 inches, 720 x 1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_P7_Plus/Lava_P7_Plus_S_1.jpg",
            "product_name": "Lava P7+"
        },
        {
            "price": "\nRs 4,558\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SWINGTEL_SX3/SWINGTEL_SX3_S_1.jpg",
            "product_name": "SWINGTEL SX3"
        },
        {
            "price": "\nRs 5,849\n",
            "desc": ["Smartphone, Andorid 6.0", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_5_VR/Intex_Aqua_5_VR_S_1.jpg",
            "product_name": "Intex Aqua 5.5 VR"
        },
        {
            "price": "\nRs 6,990\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1920 x 1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_Ultrafone_701FHD/Zen_Ultrafone_701FHD_S_1.jpg",
            "product_name": "Zen Ultrafone 701FHD"
        },
        {
            "price": "\nRs 7,000\n",
            "desc": ["Smartphone, Android v5.0 (Lollipop)", "5.0 inches, 1280 * 720 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_Dazzle_3/Karbonn_Titanium_Dazzle_3_S_1.jpg",
            "product_name": "Karbonn Titanium Dazzle 3"
        },
        {
            "price": "\nRs 7,999\n",
            "desc": ["Phablet, Smartphone, Android 5.1 Lollipop", "5.5 inches, HD(1280 x 720)", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zopo_Color_S5_5/Zopo_Color_S5_5_S_1.jpg",
            "product_name": "ZOPO Color S5.5"
        },
        {
            "price": "\nRs 10,017\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.5 inches, 800 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/MTS_Blaze_40/MTS_Blaze_40_S_1.jpg",
            "product_name": "MTS Blaze 4.0"
        },
        {
            "price": "\nRs 10,499\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Konnect_50/Swipe_Konnect_50_S_1.jpg",
            "product_name": "Swipe Konnect 5.0"
        },
        {
            "price": "\nRs 14,100\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.7 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_XL/HTC_One_XL_S_1.jpg",
            "product_name": "HTC One XL"
        },
        {
            "price": "\nRs 18,990\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.3 inches, 800 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_500/HTC_Desire_500_S_1.jpg",
            "product_name": "HTC Desire 500"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_1662/Nokia_1662_S_1.jpg",
            "product_name": "Nokia 1662"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_5030_XpressRadio/Nokia_5030_XpressRadio_S_1.jpg",
            "product_name": "Nokia 5030 XpressRadio"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/M_Tech_Opal_Smart/M_Tech_Opal_Smart_S_1.jpg",
            "product_name": "M-Tech Opal Smart"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Millennia_Power_Q3000/Celkon_Millennia_Power_Q3000_S_1.jpg",
            "product_name": "Celkon Millennia Power Q3000"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Dream_UNO_Mi_498/Spice_Dream_UNO_Mi_498_S_1.jpg",
            "product_name": "Spice Dream UNO Mi-498"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "2.8 inches, 320 x 240", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_Me_P350/LG_Optimus_Me_P350_S_1.jpg",
            "product_name": "LG Optimus Me P350"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_400_Colour/Lava_Iris_400_Colour_S_1.jpg",
            "product_name": "Lava Iris 400 Colour"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Grand_X_Quad_V987/ZTE_Grand_X_Quad_V987_S_1.jpg",
            "product_name": "ZTE Grand X Quad V987"
        },
        {
            "price": "\nRs 989\n - ",
            "desc": ["Feature Phone", "1.8 inches, 128 x 160 Pixels", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X084/Micromax_X084_S_1.jpg",
            "product_name": "Micromax X084"
        },
        {
            "price": "\nRs 999\n - ",
            "desc": ["Feature Phone", "160 x 128", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xccess_Gem_X100/Xccess_Gem_X100_S_1.jpg",
            "product_name": "Xccess Gem+ X100"
        },
        {
            "price": "\nRs 1,262\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Fly_Primo_DS240/Fly_Primo_DS240_S_1.jpg",
            "product_name": "Fly Primo DS240"
        },
        {
            "price": "\nRs 1,420\n",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X344/Micromax_X344_S_1.jpg",
            "product_name": "Micromax X344"
        },
        {
            "price": "\nRs 1,649\n",
            "desc": ["Feature Phone", "2.6 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_Trendy_M_5385/Spice_Boss_Trendy_M_5385_S_1.jpg",
            "product_name": "Spice Boss Trendy M-5385"
        },
        {
            "price": "\nRs 1,669\n",
            "desc": ["Feature Phone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_M72i/Zen_M72i_S_1.jpg",
            "product_name": "Zen M72i"
        },
        {
            "price": "\nRs 1,706\n",
            "desc": ["Feature Phone", "400 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Fly_Vogue_SX260/Fly_Vogue_SX260_S_1.jpg",
            "product_name": "Fly Vogue SX260"
        },
        {
            "price": "\nRs 2,849\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Smart_Flo_Edge_Mi_349/Spice_Smart_Flo_Edge_Mi_349_S_1.jpg",
            "product_name": "Spice Smart Flo Edge Mi-349"
        },
        {
            "price": "\nRs 3,199\n",
            "desc": ["Smartphone, Android OS, v6.0 (Marshmallow)", "4.5 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A51/Lava_A51_S_1.jpg",
            "product_name": "Lava A51"
        },
        {
            "price": "\nRs 3,829\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_356/Lava_Iris_356_S_1.jpg",
            "product_name": "Lava Iris 356"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S560/Lenovo_S560_S_1.jpg",
            "product_name": "Lenovo S560"
        },
        {
            "price": "\nRs 6,604\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5.3 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Doodle_A111/Micromax_Canvas_Doodle_A111_S_1.jpg",
            "product_name": "Micromax Canvas Doodle A111"
        },
        {
            "price": "\nRs 6,949\n",
            "desc": ["Phablet, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Omega_55/Xolo_Omega_55_S_1.jpg",
            "product_name": "Xolo Omega 5.5"
        },
        {
            "price": "\nRs 8,200\n - ",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "5.5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A850/Lenovo_A850_S_1.jpg",
            "product_name": "Lenovo A850"
        },
        {
            "price": "\nRs 8,900\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "4.3 inches, 800 x 480", "2G, 3G, 1.5GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_HD/HTC_Desire_HD_S_1.jpg",
            "product_name": "HTC Desire HD"
        },
        {
            "price": "\nRs 9,449\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_i5_Octa/Intex_Aqua_i5_Octa_S_1.jpg",
            "product_name": "Intex Aqua i5 Octa"
        },
        {
            "price": "\nRs 16,999\n - ",
            "desc": ["Phablet, Smartphone, Android 5.1 Lollip...", "5.5 inches, QHD (2560 x 1440) 538PPI", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G4_H818P_PH/LG_G4_H818P_PH_S_1.jpg",
            "product_name": "LG G4 H818"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_X2_01/Nokia_X2_01_S_1.jpg",
            "product_name": "Nokia X2-01"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.65 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Dream_D1/Gionee_Dream_D1_S_1.jpg",
            "product_name": "Gionee Dream D1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Microsoft_Lumia_532/Microsoft_Lumia_532_S_1.jpg",
            "product_name": "Microsoft Lumia 532"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_45H/iBall_Andi_45H_S_1.jpg",
            "product_name": "iBall Andi 4.5H"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "1280 x 720", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Wiio_WI5/Wiio_WI5_S_1.jpg",
            "product_name": "Wiio WI5"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_Idol_2/Alcatel_Idol_2_S_1.jpg",
            "product_name": "Alcatel Idol 2 Dual SIM"
        },
        {
            "price": "\nRs 1,090\n",
            "desc": ["Feature Phone", "160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K1_Rock/Karbonn_K1_Rock_S_1.jpg",
            "product_name": "Karbonn K1 Rock"
        },
        {
            "price": "\nRs 2,949\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A61/Micromax_Bolt_A61_S_1.jpg",
            "product_name": "Micromax Bolt A61"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_A35K/Celkon_Campus_A35K_S_1.jpg",
            "product_name": "Celkon Campus A35K"
        },
        {
            "price": "\nRs 3,299\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A37/Micromax_Bolt_A37_S_1.jpg",
            "product_name": "Micromax Bolt A37"
        },
        {
            "price": "\nRs 3,499\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Jazz_Mi_353/Spice_Stellar_Jazz_Mi_353_S_1.jpg",
            "product_name": "Spice Stellar Jazz Mi-353"
        },
        {
            "price": "\nRs 3,949\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_350M/Lava_Iris_350M_S_1.jpg",
            "product_name": "Lava Iris 350M"
        },
        {
            "price": "\nRs 4,259\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Life/Intex_Aqua_Life_S_1.jpg",
            "product_name": "Intex Aqua Life"
        },
        {
            "price": "\nRs 4,400\n - ",
            "desc": ["Smartphone, Android lollipop 5.1", "4.00 inches, 800x480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Wing/Intex_Aqua_Wing_S_1.jpg",
            "product_name": "Intex Aqua Wing"
        },
        {
            "price": "\nRs 4,949\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_405/Lava_Iris_405_S_1.jpg",
            "product_name": "Lava Iris 405+"
        },
        {
            "price": "\nRs 5,390\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Freedom/Intex_Aqua_Freedom_S_1.jpg",
            "product_name": "Intex Aqua Freedom"
        },
        {
            "price": "\nRs 6,299\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Dream_UNO_Mi_498H/Spice_Dream_UNO_Mi_498H_S_1.jpg",
            "product_name": "Spice Dream UNO Mi-498H"
        },
        {
            "price": "\nRs 7,049\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_210/HTC_Desire_210_S_1.jpg",
            "product_name": "HTC Desire 210 dual sim"
        },
        {
            "price": "\nRs 7,159\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A21/Karbonn_A21_S_1.jpg",
            "product_name": "Karbonn A21"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "6 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Octa/Intex_Aqua_Octa_S_1.jpg",
            "product_name": "Intex Aqua Octa"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5.01 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Grand_Neo/Samsung_Galaxy_Grand_Neo_S_1.jpg",
            "product_name": "Samsung Galaxy Grand Neo 8GB"
        },
        {
            "price": "\nRs 11,200\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4.3 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Evo/HTC_Evo_S_1.jpg",
            "product_name": "HTC Evo 4G+"
        },
        {
            "price": "\nRs 11,250\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_U/HTC_Desire_U_S_1.jpg",
            "product_name": "HTC Desire U"
        },
        {
            "price": "\nRs 14,000\n - ",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "5 inches, 1024 x 768", "2G, 3G, 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_VU_P895/LG_Optimus_VU_P895_S_1.jpg",
            "product_name": "LG Optimus Vu P895"
        },
        {
            "price": "\nRs 14,199\n",
            "desc": ["Smartphone", "5.0 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Meizu_U10_IN/Meizu_U10_IN_S_1.jpg",
            "product_name": "Meizu U10"
        },
        {
            "price": "\nRs 21,690\n",
            "desc": ["Phablet, Smartphone, Android OS, v6.0.1...", "5.7 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 32GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_C7/Samsung_Galaxy_C7_S_1.jpg",
            "product_name": "Samsung Galaxy C7"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_454/Lava_Iris_454_S_1.jpg",
            "product_name": "Lava Iris 454"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 Kitkat", "5.5 inches, 854 x 480 pixels", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S29_Elite/Karbonn_Titanium_S29_Elite_S_1.jpg",
            "product_name": "Karbonn Titanium S29 elite"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_A500s_IPS/Xolo_A500s_IPS_S_1.jpg",
            "product_name": "Xolo A500s IPS"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A820/Lenovo_A820_S_1.jpg",
            "product_name": "Lenovo A820"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_alfa/Lava_Iris_alfa_S_1.jpg",
            "product_name": "Lava Iris alfa"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, 3GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_Duos_S6802/Samsung_Galaxy_Ace_Duos_S6802_S_1.jpg",
            "product_name": "Samsung Galaxy Ace Duos S6802"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 800 x 480", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_5X/Intex_Aqua_5X_S_1.jpg",
            "product_name": "Intex Aqua 5X"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Pro_30/Lava_Iris_Pro_30_S_1.jpg",
            "product_name": "Lava Iris Pro 30+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android Kitkat 4.4.2", "4.0 inches, WVGA,800x480 Display Resolu...", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Swing/Intex_Cloud_Swing_S_1.jpg",
            "product_name": "Intex Cloud Swing"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Smart_Flo_Mettle_4X_Mi_426/Spice_Smart_Flo_Mettle_4X_Mi_426_S_1.jpg",
            "product_name": "Spice Smart Flo Mettle 4X Mi-426"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_A15K/Celkon_Campus_A15K_S_1.jpg",
            "product_name": "Celkon Campus A15K"
        },
        {
            "price": "\nRs 1,250\n",
            "desc": ["Feature Phone", "2.4 inches, 240 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Turbo_Ego/Intex_Turbo_Ego_S_1.jpg",
            "product_name": "Intex Turbo Ego"
        },
        {
            "price": "\nRs 1,598\n",
            "desc": ["Feature Phone", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Shaan_Bliss_35U/iBall_Shaan_Bliss_35U_S_1.jpg",
            "product_name": "iBall Shaan Bliss 3.5U"
        },
        {
            "price": "\nRs 3,699\n",
            "desc": ["Feature Phone", "2.2 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_A390/LG_A390_S_1.jpg",
            "product_name": "LG A390"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Phablet, Android 4.0 Ice Cream Sandwich", "5.9 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Style/Intex_Aqua_Style_S_1.jpg",
            "product_name": "Intex Aqua Style"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_Ultrafone_402/Zen_Ultrafone_402_S_1.jpg",
            "product_name": "Zen Ultrafone 402"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 OS", "5.0 inches, QHD (960 x 540) Display Res...", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Sense_5_0/Intex_Aqua_Sense_5_0_S_1.jpg",
            "product_name": "Intex Aqua Sense 5.0"
        },
        {
            "price": "\nRs 4,060\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A46/Micromax_Bolt_A46_S_1.jpg",
            "product_name": "Micromax Bolt A46"
        },
        {
            "price": "\nRs 4,199\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_404_Flair/Lava_Iris_404_Flair_S_1.jpg",
            "product_name": "Lava Iris 404 Flair"
        },
        {
            "price": "\nRs 4,399\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 480 X 854 Display Resolution", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Classic/Intex_Aqua_Classic_S_1.jpg",
            "product_name": "Intex Aqua Classic"
        },
        {
            "price": "\nRs 4,499\n - ",
            "desc": ["Smartphone, Android 5.1, lollipop", "5.0 inches, FWVGA (854x480)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Young/Intex_Aqua_Young_S_1.jpg",
            "product_name": "Intex Aqua Young"
        },
        {
            "price": "\nRs 4,550\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A089/Micromax_Bolt_A089_S_1.jpg",
            "product_name": "Micromax Bolt A089"
        },
        {
            "price": "\nRs 4,750\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_406Q/Lava_Iris_406Q_S_1.jpg",
            "product_name": "Lava Iris 406Q"
        },
        {
            "price": "\nRs 5,000\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q1000/Xolo_Q1000_S_1.jpg",
            "product_name": "Xolo Q1000"
        },
        {
            "price": "\nRs 5,212\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "3.9 inches, 800 x 480", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A10/Karbonn_A10_S_1.jpg",
            "product_name": "Karbonn A10"
        },
        {
            "price": "\nRs 5,295\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Fun_A63/Micromax_Canvas_Fun_A63_S_1.jpg",
            "product_name": "Micromax Canvas Fun A63"
        },
        {
            "price": "\nRs 5,599\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Power_A96/Micromax_Canvas_Power_A96_S_1.jpg",
            "product_name": "Micromax Canvas Power A96"
        },
        {
            "price": "\nRs 5,649\n - ",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "6.5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Halo_Fone/Swipe_Halo_Fone_S_1.jpg",
            "product_name": "Swipe Halo Fone"
        },
        {
            "price": "\nRs 5,649\n - ",
            "desc": ["Smartphone, Android 6.0", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Craze_2/Intex_Aqua_Craze_2_S_1.jpg",
            "product_name": "Intex Aqua Craze II"
        },
        {
            "price": "\nRs 5,976\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Juice_A177/Micromax_Canvas_Juice_A177_S_1.jpg",
            "product_name": "Micromax Canvas Juice A177"
        },
        {
            "price": "\nRs 6,000\n - ",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Nokia_X/Nokia_X_S_1.jpg",
            "product_name": "Nokia X+ Dual SIM"
        },
        {
            "price": "\nRs 6,200\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.7 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S660/Lenovo_S660_S_1.jpg",
            "product_name": "Lenovo S660"
        },
        {
            "price": "\nRs 6,300\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A859/Lenovo_A859_S_1.jpg",
            "product_name": "Lenovo A859"
        },
        {
            "price": "\nRs 6,400\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Slice/Intex_Aqua_Slice_S_1.jpg",
            "product_name": "Intex Aqua Slice"
        },
        {
            "price": "\nRs 6,985\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_XL2_A109/Micromax_Canvas_XL2_A109_S_1.jpg",
            "product_name": "Micromax Canvas XL2 A109"
        },
        {
            "price": "\nRs 6,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.7 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S650/Lenovo_S650_S_1.jpg",
            "product_name": "Lenovo S650"
        },
        {
            "price": "\nRs 7,500\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_310/HTC_Desire_310_S_1.jpg",
            "product_name": "HTC Desire 310"
        },
        {
            "price": "\nRs 7,999\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Juice_A77/Micromax_Canvas_Juice_A77_S_1.jpg",
            "product_name": "Micromax Canvas Juice A77"
        },
        {
            "price": "\nRs 8,365\n - ",
            "desc": ["Smartphone, Android 4.4.2 (KitKat)", "4.5 inches, 480 x 854 Pixels", "2G, 3G, 4G (LTE), 4GB, 0.5GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Alcatel_Pixi_3_45/Alcatel_Pixi_3_45_S_1.jpg",
            "product_name": "Alcatel Pixi 3 (4.5)"
        },
        {
            "price": "\nRs 13,500\n",
            "desc": ["Smartphone, Android 4.0.3 Ice Cream San...", "3.7 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_V/HTC_One_V_S_1.jpg",
            "product_name": "HTC One V"
        },
        {
            "price": "\nRs 19,500\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.3 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_Mini/HTC_One_Mini_S_1.jpg",
            "product_name": "HTC One mini"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "6.3 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Mega_63_I9200/Samsung_Galaxy_Mega_63_I9200_S_1.jpg",
            "product_name": "Samsung Galaxy Mega 6.3 I9200 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A60/Lenovo_A60_S_1.jpg",
            "product_name": "Lenovo A60+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.2 inches, 768 x 1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Infocus_M2/Infocus_M2_S_1.jpg",
            "product_name": "InFocus M2"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4.3 inches, 960 x 540", "2G, 3G, 1GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Sensation/HTC_Sensation_S_1.jpg",
            "product_name": "HTC Sensation"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2 inches, 220 x 176", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_QT_58/Spice_QT_58_S_1.jpg",
            "product_name": "Spice QT-58"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 2GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_P935/LG_Optimus_P935_S_1.jpg",
            "product_name": "LG Optimus 4G LTE P935"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "4.7 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_Xperia_E4g/SONY_Xperia_E4g_S_1.jpg",
            "product_name": "Sony Xperia E4g"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.2 inches, 320 x 240", "2G, 3G, 1GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L3_E400/LG_Optimus_L3_E400_S_1.jpg",
            "product_name": "LG Optimus L3 E400"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_X4/Intex_Cloud_X4_S_1.jpg",
            "product_name": "Intex Cloud X4"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.8 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_TV_M_5400/Spice_Boss_TV_M_5400_S_1.jpg",
            "product_name": "Spice Boss TV M-5400"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q500/Xolo_Q500_S_1.jpg",
            "product_name": "Xolo Q500"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "3 inches, 320 x 240", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_GalaxyPocketNeo_S5312/Samsung_GalaxyPocketNeo_S5312_S_1.jpg",
            "product_name": "Samsung Galaxy Pocket Neo S5312"
        },
        {
            "price": "\nRs 1,147\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/M_Tech_L2/M_Tech_L2_S_1.jpg",
            "product_name": "M-Tech L2"
        },
        {
            "price": "\nRs 1,226\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_M_5355/Spice_Boss_M_5355_S_1.jpg",
            "product_name": "Spice Boss M-5355"
        },
        {
            "price": "\nRs 1,330\n - ",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_CG666/Micromax_CG666_S_1.jpg",
            "product_name": "Micromax CG666"
        },
        {
            "price": "\nRs 1,569\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K61/Karbonn_K61_S_1.jpg",
            "product_name": "Karbonn K61"
        },
        {
            "price": "\nRs 1,726\n",
            "desc": ["Feature Phone", "2.6 inches, 320 x 240", "Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Slimzz/Intex_Slimzz_S_1.jpg",
            "product_name": "Intex Slimzz"
        },
        {
            "price": "\nRs 1,999\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_QT_68/Spice_QT_68_S_1.jpg",
            "product_name": "Spice QT-68"
        },
        {
            "price": "\nRs 2,149\n",
            "desc": ["Feature Phone", "2.8 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X335C/Micromax_X335C_S_1.jpg",
            "product_name": "Micromax X335C"
        },
        {
            "price": "\nRs 2,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "800 x 480", "4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xccess_Blaze_A110/Xccess_Blaze_A110_S_1.jpg",
            "product_name": "Xccess Blaze A110"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, 4.4.2 Android KitKat operat...", "4.0 inches, 480x800 pixel resolution", "2G, 3G, 0.5GB, 4GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_3G_Strong/Intex_Aqua_3G_Strong_S_1.jpg",
            "product_name": "Intex Aqua 3G Strong"
        },
        {
            "price": "\nRs 3,450\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A26/Micromax_Bolt_A26_S_1.jpg",
            "product_name": "Micromax Bolt A26"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Win_400/Celkon_Win_400_S_1.jpg",
            "product_name": "Celkon Win 400"
        },
        {
            "price": "\nRs 4,099\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4.5 inches, 854 x 480", "2G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_KonnectME/Swipe_KonnectME_S_1.jpg",
            "product_name": "Swipe KonnectME"
        },
        {
            "price": "\nRs 5,499\n - ",
            "desc": ["Phablet, Smartphone, Android OS, v6.0 (...", "5.5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_x28/Lava_x28_S_1.jpg",
            "product_name": "Lava X28"
        },
        {
            "price": "\nRs 5,500\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q520s/Xolo_Q520s_S_1.jpg",
            "product_name": "Xolo Q520s"
        },
        {
            "price": "\nRs 6,155\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Philips_S388/Philips_S388_S_1.jpg",
            "product_name": "Philips S388"
        },
        {
            "price": "\nRs 6,500\n",
            "desc": ["Smartphone", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_518/Spice_Stellar_Mi_518_S_1.jpg",
            "product_name": "Spice Stellar Mi-518"
        },
        {
            "price": "\nRs 8,160\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Xtreme_V/Intex_Aqua_Xtreme_V_S_1.jpg",
            "product_name": "Intex Aqua Xtreme V"
        },
        {
            "price": "\nRs 8,285\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Elanza2_A121/Micromax_Canvas_Elanza2_A121_S_1.jpg",
            "product_name": "Micromax Canvas Elanza2 A121"
        },
        {
            "price": "\nRs 8,699\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5 inches, 720 x 1280", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_P11/Panasonic_P11_S_1.jpg",
            "product_name": "Panasonic P11"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_45D_Quadro/iBall_Andi_45D_Quadro_S_1.jpg",
            "product_name": "iBall Andi 4.5D Quadro"
        },
        {
            "price": "\nRs 13,449\n - ",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "6 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S930/Lenovo_S930_S_1.jpg",
            "product_name": "Lenovo S930"
        },
        {
            "price": "\nRs 14,500\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4.7 inches, 800 x 480", "2G, 3G, 16GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Sensation_XL/HTC_Sensation_XL_S_1.jpg",
            "product_name": "HTC Sensation XL"
        },
        {
            "price": "\nRs 16,799\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.3 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_SV/HTC_Desire_SV_S_1.jpg",
            "product_name": "HTC Desire SV"
        },
        {
            "price": "\nRs 18,800\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "4.3 inches, 960 x 540", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Sensation_XE/HTC_Sensation_XE_S_1.jpg",
            "product_name": "HTC Sensation XE"
        },
        {
            "price": "\nRs 48,919\n - ",
            "desc": ["Phablet, Android 4.3 Jelly Bean", "5.9 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_ONE_Max/HTC_ONE_Max_S_1.jpg",
            "product_name": "HTC One Max 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_700/HTC_Desire_700_S_1.jpg",
            "product_name": "HTC Desire 700 dual sim"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_Hexa/Karbonn_Titanium_Hexa_S_1.jpg",
            "product_name": "Karbonn Titanium Hexa"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.1.2 Jelly Bean", "5.5 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_G_Pro_E985/LG_Optimus_G_Pro_E985_S_1.jpg",
            "product_name": "LG Optimus G Pro E985 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "2.8 inches, 320 x 240", "2G, 3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Y_Plus_S5303/Samsung_Galaxy_Y_Plus_S5303_S_1.jpg",
            "product_name": "Samsung Galaxy Y Plus S5303"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.3 inches, 960 x 540", "2G, 3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_C1/Acer_Liquid_C1_S_1.jpg",
            "product_name": "Acer Liquid C1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 2GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_354e/Lava_Iris_354e_S_1.jpg",
            "product_name": "Lava Iris 354e"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Flo_M_5455/Spice_Flo_M_5455_S_1.jpg",
            "product_name": "Spice Flo M-5455"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Glamour_436/Spice_Stellar_Glamour_436_S_1.jpg",
            "product_name": "Spice Stellar Glamour 436"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "3.5 inches, 480 x 320", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_CTRL_V2/Gionee_CTRL_V2_S_1.jpg",
            "product_name": "Gionee CTRL V2"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "5 inches, 1024 x 768", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_Vu_II/LG_Optimus_Vu_II_S_1.jpg",
            "product_name": "LG Optimus Vu II"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "800 x 480", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A81/Karbonn_A81_S_1.jpg",
            "product_name": "Karbonn A81"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_C340/Celkon_C340_S_1.jpg",
            "product_name": "Celkon C340"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_X/Karbonn_Titanium_X_S_1.jpg",
            "product_name": "Karbonn Titanium X"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.3 Ice Cream San...", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_A100_Superfone/Micromax_Canvas_A100_Superfone_S_1.jpg",
            "product_name": "Micromax Canvas A100 Superfone"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "320 x 240"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X505_Psych/Micromax_X505_Psych_S_1.jpg",
            "product_name": "Micromax X505 Psych"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.97 inches, 800 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Bolt_A082/Micromax_Bolt_A082_S_1.jpg",
            "product_name": "Micromax Bolt A082"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "480 x 320", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A8_Plus/Karbonn_A8_Plus_S_1.jpg",
            "product_name": "Karbonn A8 Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, Android 7.0", "5.7 inches, 1440 x 2880 pixels", "2G, 3G, 4G (LTE), 128GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G6_Plus_Concept/LG_G6_Plus_Concept_S_1.jpg",
            "product_name": "LG G6+"
        },
        {
            "price": "\nRs 1,226\n",
            "desc": ["Feature Phone", "220 x 176", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_M_5209/Spice_Boss_M_5209_S_1.jpg",
            "product_name": "Spice Boss M-5209"
        },
        {
            "price": "\nRs 1,320\n - ",
            "desc": ["Feature Phone", "2.4 inches, 240 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Mega_510/Intex_Mega_510_S_1.jpg",
            "product_name": "Intex Mega 510"
        },
        {
            "price": "\nRs 1,349\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zync_C21/Zync_C21_S_1.jpg",
            "product_name": "Zync C21"
        },
        {
            "price": "\nRs 1,599\n - ",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X328/Micromax_X328_S_1.jpg",
            "product_name": "Micromax X328"
        },
        {
            "price": "\nRs 1,699\n",
            "desc": ["Feature Phone", "2.6 inches (6.6 cm), 240 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X282/Micromax_X282_S_1.jpg",
            "product_name": "Micromax X282"
        },
        {
            "price": "\nRs 3,309\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_Ultrafone_308/Zen_Ultrafone_308_S_1.jpg",
            "product_name": "Zen Ultrafone 308 3G"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 854 x 480", "2G, 3G, 4GB, 1GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_i14/Intex_Aqua_i14_S_1.jpg",
            "product_name": "Intex Aqua i14"
        },
        {
            "price": "\nRs 4,799\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Philips_Xenium_W3500/Philips_Xenium_W3500_S_1.jpg",
            "product_name": "Philips Xenium W3500"
        },
        {
            "price": "\nRs 4,990\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "5 inches, 800 x 480", "2G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Swipe_Fablet_F2/Swipe_Fablet_F2_S_1.jpg",
            "product_name": "Swipe Fablet F2"
        },
        {
            "price": "\nRs 5,000\n - ",
            "desc": ["Smartphone, Android 5.1 Lollipop, Guara...", "5.0 inches, 720 x 1280", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A72/Lava_A72_S_1.jpg",
            "product_name": "Lava A72"
        },
        {
            "price": "\nRs 5,020\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_Crown_Q40/Celkon_Campus_Crown_Q40_S_1.jpg",
            "product_name": "Celkon Campus Crown Q40"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Sailfish 2.0", "5.0 inches, HD 720x1280", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Fish/Intex_Aqua_Fish_S_1.jpg",
            "product_name": "Intex Aqua Fish"
        },
        {
            "price": "\nRs 6,399\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5.3 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_DUET_II_EG111/Micromax_Canvas_DUET_II_EG111_S_1.jpg",
            "product_name": "Micromax Canvas DUET II EG111"
        },
        {
            "price": "\nRs 6,419\n - ",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S720/Lenovo_S720_S_1.jpg",
            "product_name": "Lenovo S720"
        },
        {
            "price": "\nRs 7,863\n",
            "desc": ["Smartphone, Windows Phone 7", "4 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Focus/Samsung_Focus_S_1.jpg",
            "product_name": "Samsung Focus"
        },
        {
            "price": "\nRs 7,949\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_HD_50/Intex_Aqua_HD_50_S_1.jpg",
            "product_name": "Intex Aqua HD 5.0"
        },
        {
            "price": "\nRs 9,500\n - ",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_X/HTC_Desire_X_S_1.jpg",
            "product_name": "HTC Desire X"
        },
        {
            "price": "\nRs 9,530\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "3.3 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Fit_S5670/Samsung_Galaxy_Fit_S5670_S_1.jpg",
            "product_name": "Samsung Galaxy Fit S5670"
        },
        {
            "price": "\nRs 10,290\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q2000L/Xolo_Q2000L_S_1.jpg",
            "product_name": "Xolo Q2000L"
        },
        {
            "price": "\nRs 11,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 (KitKat)", "5 inches, HD (1280 X 720P)", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G3_Beat/LG_G3_Beat_S_1.jpg",
            "product_name": "LG G3 Beat"
        },
        {
            "price": "\nRs 13,500\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_III_mini_i8190/Samsung_Galaxy_S_III_mini_i8190_S_1.jpg",
            "product_name": "Samsung Galaxy S III mini I8190 16GB"
        },
        {
            "price": "\nRs 18,979\n",
            "desc": ["Feature Phone", "1.6 inches Transflective Display, 320 x...", "4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/SONY_SmartWatch3_SWR50/SONY_SmartWatch3_SWR50_S_1.jpg",
            "product_name": "Sony SmartWatch 3 SWR50"
        },
        {
            "price": "\nRs 26,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S5_mini/Samsung_Galaxy_S5_mini_S_1.jpg",
            "product_name": "Samsung Galaxy S5 mini"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Fly_Primo_DS240/Fly_Primo_DS240_S_1.jpg",
            "product_name": "Fly Primo DS240 PLUS"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2 inches, 160 x 128", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_C3010/Samsung_C3010_S_1.jpg",
            "product_name": "Samsung C3010"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Wiio_WI_Star/Wiio_WI_Star_S_1.jpg",
            "product_name": "Wiio WI Star"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Smart_Flo_Mettle_35X_Mi_356/Spice_Smart_Flo_Mettle_35X_Mi_356_S_1.jpg",
            "product_name": "Spice Smart Flo Mettle 3.5X Mi-356"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Y12/Intex_Cloud_Y12_S_1.jpg",
            "product_name": "Intex Cloud Y12"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_35Kke_Genius/iBall_Andi_35Kke_Genius_S_1.jpg",
            "product_name": "iBall Andi 3.5Kke Genius"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Q1/Intex_Aqua_Q1_S_1.jpg",
            "product_name": "Intex Aqua Q1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Fun_A74/Micromax_Canvas_Fun_A74_S_1.jpg",
            "product_name": "Micromax Canvas Fun A74"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_2_A110/Micromax_Canvas_2_A110_S_1.jpg",
            "product_name": "Micromax Canvas 2 A110"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.3 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_501/HTC_Desire_501_S_1.jpg",
            "product_name": "HTC Desire 501 dual sim"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Win_1/Lava_Iris_Win_1_S_1.jpg",
            "product_name": "Lava Iris Win 1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S2/Karbonn_Titanium_S2_S_1.jpg",
            "product_name": "Karbonn Titanium S2"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Millennia_Me_Q54/Celkon_Millennia_Me_Q54_S_1.jpg",
            "product_name": "Celkon Millennia Me Q54"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G, 0.5GB, 0.5GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_A101/Celkon_A101_S_1.jpg",
            "product_name": "Celkon A101"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 8.1", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Win_W092/Micromax_Canvas_Win_W092_S_1.jpg",
            "product_name": "Micromax Canvas Win W092"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 540 x 960", "2G, 3G, 16GB, 2GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_N12/Intex_Cloud_N12_S_1.jpg",
            "product_name": "Intex Cloud N12"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_497/Spice_Stellar_Mi_497_S_1.jpg",
            "product_name": "Spice Stellar Mi-497"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_I5/Intex_Aqua_I5_S_1.jpg",
            "product_name": "Intex Aqua I5"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_A78/Micromax_A78_S_1.jpg",
            "product_name": "Micromax A78"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q700_Club/Xolo_Q700_Club_S_1.jpg",
            "product_name": "Xolo Q700 Club"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_402/Lava_Iris_402_S_1.jpg",
            "product_name": "Lava Iris 402"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4.2 KitKat", "6 inches, 960 x 540", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/AOC_M601/AOC_M601_S_1.jpg",
            "product_name": "AOC M601"
        },
        {
            "price": "\nRs 1,025\n",
            "desc": ["Feature Phone", "160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X098/Micromax_X098_S_1.jpg",
            "product_name": "Micromax X098"
        },
        {
            "price": "\nRs 1,189\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Killer/Intex_Killer_S_1.jpg",
            "product_name": "Intex Killer"
        },
        {
            "price": "\nRs 1,335\n - ",
            "desc": ["Feature Phone", "2.4 inches, 240 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Ultra_3000/Intex_Ultra_3000_S_1.jpg",
            "product_name": "Intex Ultra 3000"
        },
        {
            "price": "\nRs 1,439\n - ",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K595_Spy/Karbonn_K595_Spy_S_1.jpg",
            "product_name": "Karbonn K595 Spy"
        },
        {
            "price": "\nRs 1,699\n",
            "desc": ["Feature Phone", "2.79 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K73/Karbonn_K73_S_1.jpg",
            "product_name": "Karbonn K73"
        },
        {
            "price": "\nRs 1,749\n - ",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X2401/Micromax_X2401_S_1.jpg",
            "product_name": "Micromax X2401"
        },
        {
            "price": "\nRs 1,749\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_Entertainer_3_M_5406/Spice_Boss_Entertainer_3_M_5406_S_1.jpg",
            "product_name": "Spice Boss Entertainer 3 M-5406"
        },
        {
            "price": "\nRs 2,599\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_One_A354C/Celkon_Campus_One_A354C_S_1.jpg",
            "product_name": "Celkon Campus One A354C"
        },
        {
            "price": "\nRs 2,767\n",
            "desc": ["Feature Phone", "3.5 inches, 480 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X456/Micromax_X456_S_1.jpg",
            "product_name": "Micromax X456"
        },
        {
            "price": "\nRs 3,219\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.5 inches, 480 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Active/Intex_Aqua_Active_S_1.jpg",
            "product_name": "Intex Aqua Active"
        },
        {
            "price": "\nRs 4,559\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Superfone_Ninja_A54/Micromax_Superfone_Ninja_A54_S_1.jpg",
            "product_name": "Micromax Superfone Ninja A54"
        },
        {
            "price": "\nRs 4,589\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "480 x 320", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A4/Karbonn_A4_S_1.jpg",
            "product_name": "Karbonn A4"
        },
        {
            "price": "\nRs 4,750\n - ",
            "desc": ["Smartphone, Android v5.1 Lollipop", "5.0 inches, FWVGA 854 x 480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A89/Lava_A89_S_1.jpg",
            "product_name": "Lava A89"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "4 inches, 800 x 480", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A690/Lenovo_A690_S_1.jpg",
            "product_name": "Lenovo A690"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 6.0", "5.0 inches, 854x480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Strong_5_1/Intex_Aqua_Strong_5_1_S_1.jpg",
            "product_name": "Intex Aqua Strong 5.1"
        },
        {
            "price": "\nRs 5,790\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Engage_A091/Micromax_Canvas_Engage_A091_S_1.jpg",
            "product_name": "Micromax Canvas Engage A091"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q710s/Xolo_Q710s_S_1.jpg",
            "product_name": "Xolo Q710s"
        },
        {
            "price": "\nRs 6,060\n - ",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "3.5 inches, 480 x 320", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_C/HTC_Desire_C_S_1.jpg",
            "product_name": "HTC Desire C"
        },
        {
            "price": "\nRs 6,499\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A18/Karbonn_A18_S_1.jpg",
            "product_name": "Karbonn A18+"
        },
        {
            "price": "\nRs 6,549\n",
            "desc": ["Smartphone, Android Lollipop 5.1 with G...", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X11/Lava_X11_S_1.jpg",
            "product_name": "Lava X11"
        },
        {
            "price": "\nRs 7,299\n",
            "desc": ["Phablet, Smartphone, Android 5.1 Lollip...", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X50/Lava_X50_S_1.jpg",
            "product_name": "Lava X50"
        },
        {
            "price": "\nRs 7,499\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_45Z/iBall_Andi_45Z_S_1.jpg",
            "product_name": "iBall Andi 4.5Z"
        },
        {
            "price": "\nRs 7,899\n",
            "desc": ["Smartphone, Star OS based on Android Lo...", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_V2s/Lava_V2s_S_1.jpg",
            "product_name": "Lava V2s"
        },
        {
            "price": "\nRs 8,619\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Salora_PowerMaxx_Z1/Salora_PowerMaxx_Z1_S_1.jpg",
            "product_name": "Salora PowerMaxx Z1"
        },
        {
            "price": "\nRs 9,700\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "3.7 inches, 800 x 480", "2G, 3G, 1.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_Z/HTC_Desire_Z_S_1.jpg",
            "product_name": "HTC Desire Z"
        },
        {
            "price": "\nRs 11,499\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5.3 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S860/Lenovo_S860_S_1.jpg",
            "product_name": "Lenovo S860"
        },
        {
            "price": "\nRs 14,500\n - ",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.3 inches, 960 x 540", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_S/HTC_One_S_S_1.jpg",
            "product_name": "HTC One S"
        },
        {
            "price": "\nRs 15,500\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "1024 x 600", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_X900/Xolo_X900_S_1.jpg",
            "product_name": "Xolo X900"
        },
        {
            "price": "\nRs 16,790\n",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "5.7 inches, 1920 x 1080", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q3000/Xolo_Q3000_S_1.jpg",
            "product_name": "Xolo Q3000"
        },
        {
            "price": "\nRs 28,439\n - ",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "6 inches, 1280 x 720", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G_Flex/LG_G_Flex_S_1.jpg",
            "product_name": "LG G Flex"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_35KKe/iBall_Andi_35KKe_S_1.jpg",
            "product_name": "iBall Andi 3.5KKe+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Windows Phone 7.5 Mango", "4 inches, 800 x 480", "2G, 3G, 4G (LTE), 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Focus_2_I667/Samsung_Focus_2_I667_S_1.jpg",
            "product_name": "Samsung Focus 2 I667"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.7 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L9_P765/LG_Optimus_L9_P765_S_1.jpg",
            "product_name": "LG Optimus L9 P765"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_700/HTC_Desire_700_S_1.jpg",
            "product_name": "HTC Desire 700"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Fuel_10/Lava_Iris_Fuel_10_S_1.jpg",
            "product_name": "Lava Iris Fuel 10"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "3.8 inches, 800 x 480", "2G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Superfone_A85/Micromax_Superfone_A85_S_1.jpg",
            "product_name": "Micromax Superfone A85"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "2.8 inches, 320 x 240", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_5_I5500/Samsung_Galaxy_5_I5500_S_1.jpg",
            "product_name": "Samsung Galaxy 5 I5500"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "3.14 inches, 320 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Pop_Plus_S5570i/Samsung_Galaxy_Pop_Plus_S5570i_S_1.jpg",
            "product_name": "Samsung Galaxy Pop Plus S5570i"
        },
        {
            "price": "\nRs 1,376\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_Classic_M_5353/Spice_Boss_Classic_M_5353_S_1.jpg",
            "product_name": "Spice Boss Classic M-5353"
        },
        {
            "price": "\nRs 1,449\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X258/Micromax_X258_S_1.jpg",
            "product_name": "Micromax X258"
        },
        {
            "price": "\nRs 2,149\n - ",
            "desc": ["Feature Phone", "160 x 128", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_GC222/Micromax_GC222_S_1.jpg",
            "product_name": "Micromax GC222"
        },
        {
            "price": "\nRs 2,299\n",
            "desc": ["Smartphone, Android OS v4.4.2 (Kitkat)", "3.5 inches, 320 x 480", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_A355/Celkon_Campus_A355_S_1.jpg",
            "product_name": "Celkon Campus A355"
        },
        {
            "price": "\nRs 2,699\n",
            "desc": ["Smartphone, Android OS v4.4.2 (Kitkat)", "4.5 inches, 480 x 854", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_Prime/Celkon_Campus_Prime_S_1.jpg",
            "product_name": "Celkon Campus Prime"
        },
        {
            "price": "\nRs 3,399\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "3.5 inches, 480 x 320", "2G, 2GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_352_Flair/Lava_Iris_352_Flair_S_1.jpg",
            "product_name": "Lava Iris 352 Flair"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5T_Cobalt2/iBall_Andi_5T_Cobalt2_S_1.jpg",
            "product_name": "iBall Andi 5T Cobalt2"
        },
        {
            "price": "\nRs 6,499\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "5 inches, 800 x 480", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Viva_A72/Micromax_Canvas_Viva_A72_S_1.jpg",
            "product_name": "Micromax Canvas Viva A72"
        },
        {
            "price": "\nRs 9,990\n",
            "desc": ["Smartphone, Android 2.3.4 Gingerbread", "3.7 inches, 800 x 480", "2G, 3G, 4GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Rhyme/HTC_Rhyme_S_1.jpg",
            "product_name": "HTC Rhyme"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Windows Phone 8.1", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Win_Q900s/Xolo_Win_Q900s_S_1.jpg",
            "product_name": "Xolo Win Q900s"
        },
        {
            "price": "\nRs 11,999\n - ",
            "desc": ["Phablet, Smartphone, OS: Android 6.0\r\nS...", "5.5 inches, FHD 1080 x 1920", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/InFocus_EPIC_1/InFocus_EPIC_1_S_1.jpg",
            "product_name": "InFocus EPIC 1"
        },
        {
            "price": "\nRs 12,000\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4.3 inches, 960 x 540", "2G, 3G, 1GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_EVO_3D/HTC_EVO_3D_S_1.jpg",
            "product_name": "HTC EVO 3D"
        },
        {
            "price": "\nRs 12,500\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "3.7 inches, 800 x 480", "2G, 3G, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Droid_Incredible/HTC_Droid_Incredible_S_1.jpg",
            "product_name": "HTC Droid Incredible"
        },
        {
            "price": "\nRs 17,500\n - ",
            "desc": ["Phablet, Android 4.2.2 Jelly Bean", "5.8 inches, 960 x 540", "2G, 3G, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Mega_58_I9150/Samsung_Galaxy_Mega_58_I9150_S_1.jpg",
            "product_name": "Samsung Galaxy Mega 5.8 I9150"
        },
        {
            "price": "\nRs 18,000\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.7 inches, 1280 x 768", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_optimus_G_E975/LG_optimus_G_E975_S_1.jpg",
            "product_name": "LG Optimus G E975"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_Trendy_4_M_5004/Spice_Boss_Trendy_4_M_5004_S_1.jpg",
            "product_name": "Spice Boss Trendy 4 M-5004"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X243/Micromax_X243_S_1.jpg",
            "product_name": "Micromax X243"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.2 inches, 320 x 240", "2G, Less than 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_32/Intex_Aqua_32_S_1.jpg",
            "product_name": "Intex Aqua 3.2"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Millennia_Glory_Q5/Celkon_Millennia_Glory_Q5_S_1.jpg",
            "product_name": "Celkon Millennia Glory Q5"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_516/Spice_Stellar_Mi_516_S_1.jpg",
            "product_name": "Spice Stellar Mi-516"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_405/Lava_Iris_405_S_1.jpg",
            "product_name": "Lava Iris 405"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "4.7 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Ego_A113/Micromax_Canvas_Ego_A113_S_1.jpg",
            "product_name": "Micromax Canvas Ego A113"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Coolpad_Mi_515/Spice_Coolpad_Mi_515_S_1.jpg",
            "product_name": "Spice Coolpad Mi-515"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_2_Plus_A110Q/Micromax_Canvas_2_Plus_A110Q_S_1.jpg",
            "product_name": "Micromax Canvas 2 Plus A110Q"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A1/Karbonn_A1_S_1.jpg",
            "product_name": "Karbonn A1+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_HLIE_AQ5000/Micromax_Canvas_HLIE_AQ5000_S_1.jpg",
            "product_name": "Micromax Canvas HUE AQ5000"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "2.8 inches, 320 x 240", "2G, 3G, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A1/Karbonn_A1_S_1.jpg",
            "product_name": "Karbonn A1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0.3 Ice Cream San...", "4.3 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Superfone_Pixel_A90/Micromax_Superfone_Pixel_A90_S_1.jpg",
            "product_name": "Micromax Superfone Pixel A90"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_A60/Lenovo_A60_S_1.jpg",
            "product_name": "Lenovo A60"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Y2_Remote/Intex_Aqua_Y2_Remote_S_1.jpg",
            "product_name": "Intex Aqua Y2 Remote"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.7 inches, 128 x 160  pixel", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Philips_E130/Philips_E130_S_1.jpg",
            "product_name": "Philips E130"
        },
        {
            "price": "\nRs 999\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_C604/Celkon_C604_S_1.jpg",
            "product_name": "Celkon C604"
        },
        {
            "price": "\nRs 1,049\n",
            "desc": ["Feature Phone", "220 x 176", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X086/Micromax_X086_S_1.jpg",
            "product_name": "Micromax X086"
        },
        {
            "price": "\nRs 1,199\n",
            "desc": ["Feature Phone", "160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K44_Plus/Karbonn_K44_Plus_S_1.jpg",
            "product_name": "Karbonn K44 Plus"
        },
        {
            "price": "\nRs 1,250\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_LEO/Intex_LEO_S_1.jpg",
            "product_name": "Intex LEO"
        },
        {
            "price": "\nRs 1,300\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K275/Karbonn_K275_S_1.jpg",
            "product_name": "Karbonn K275"
        },
        {
            "price": "\nRs 1,499\n",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X2410/Micromax_X2410_S_1.jpg",
            "product_name": "Micromax X2410"
        },
        {
            "price": "\nRs 2,199\n - ",
            "desc": ["Smartphone, Android 4.4, Kitkat", "4 inches, 480 x 800 pixels", "3G, 2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iball_Andi4_B20/iball_Andi4_B20_S_1.jpg",
            "product_name": "iBall Andi4 B20"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 480 x 800", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_Q405/Celkon_Campus_Q405_S_1.jpg",
            "product_name": "Celkon Campus Q405"
        },
        {
            "price": "\nRs 3,100\n - ",
            "desc": ["Smartphone, Android 6.0", "4 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_T44_LITE/Panasonic_T44_LITE_S_1.jpg",
            "product_name": "Panasonic T44 Lite"
        },
        {
            "price": "\nRs 3,773\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Eco/Intex_Aqua_Eco_S_1.jpg",
            "product_name": "Intex Aqua Eco"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5K_Panther/iBall_Andi_5K_Panther_S_1.jpg",
            "product_name": "iBall Andi 5K Panther"
        },
        {
            "price": "\nRs 4,499\n",
            "desc": ["Smartphone, Android OS, v6.0 (Lollipop)", "4.0 inches, 480 x 800 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_vDeo_1/Micromax_vDeo_1_S_1.jpg",
            "product_name": "Micromax Vdeo1"
        },
        {
            "price": "\nRs 4,599\n",
            "desc": ["Feature Phone", "2.8 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_T515_Cookie_Duo/LG_T515_Cookie_Duo_S_1.jpg",
            "product_name": "LG T515 Cookie Duo"
        },
        {
            "price": "\nRs 4,799\n",
            "desc": ["Smartphone, Android 5.1 Lolloipop", "4.5 inches, 480 * 854 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Quattro_L45_IPS/Karbonn_Quattro_L45_IPS_S_1.jpg",
            "product_name": "Karbonn Quattro L45 IPS"
        },
        {
            "price": "\nRs 4,899\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "5.0 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X3/Lava_X3_S_1.jpg",
            "product_name": "Lava X3"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 6.0", "5.0 inches, 1280x720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Ring/Intex_Aqua_Ring_S_1.jpg",
            "product_name": "Intex Aqua Ring"
        },
        {
            "price": "\nRs 5,250\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 480 x 800", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_T31/Panasonic_T31_S_1.jpg",
            "product_name": "Panasonic T31"
        },
        {
            "price": "\nRs 5,323\n",
            "desc": ["Smartphone", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A9_S/Karbonn_A9_S_S_1.jpg",
            "product_name": "Karbonn A9 S"
        },
        {
            "price": "\nRs 5,899\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q1000s/Xolo_Q1000s_S_1.jpg",
            "product_name": "Xolo Q1000s"
        },
        {
            "price": "\nRs 6,499\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Smart_Flo_Pace3_Mi_502n/Spice_Smart_Flo_Pace3_Mi_502n_S_1.jpg",
            "product_name": "Spice Smart Flo Pace3 Mi-502n"
        },
        {
            "price": "\nRs 6,500\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G, 4G (LTE)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_LT900/Xolo_LT900_S_1.jpg",
            "product_name": "Xolo LT900"
        },
        {
            "price": "\nRs 7,349\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X46/Lava_X46_S_1.jpg",
            "product_name": "Lava X46"
        },
        {
            "price": "\nRs 7,350\n - ",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S890/Lenovo_S890_S_1.jpg",
            "product_name": "Lenovo S890"
        },
        {
            "price": "\nRs 7,499\n - ",
            "desc": ["Smartphone, Android Lollipop 5.1", "5 inches, HD 1280x720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_View/Intex_Aqua_View_S_1.jpg",
            "product_name": "Intex Aqua View"
        },
        {
            "price": "\nRs 9,000\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Blaze_HD_EG116/Micromax_Canvas_Blaze_HD_EG116_S_1.jpg",
            "product_name": "Micromax Canvas Blaze HD EG116"
        },
        {
            "price": "\nRs 9,950\n - ",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "5.3 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S920/Lenovo_S920_S_1.jpg",
            "product_name": "Lenovo S920"
        },
        {
            "price": "\nRs 9,999\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5Q_Cobalt_Solus/iBall_Andi_5Q_Cobalt_Solus_S_1.jpg",
            "product_name": "iBall Andi 5Q Cobalt Solus"
        },
        {
            "price": "\nRs 10,580\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 800 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_L_Fino/LG_L_Fino_S_1.jpg",
            "product_name": "LG L Fino"
        },
        {
            "price": "\nRs 14,443\n - ",
            "desc": ["Phablet, Android 4.4.3 KitKat", "6 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Mega_2/Samsung_Galaxy_Mega_2_S_1.jpg",
            "product_name": "Samsung Galaxy Mega 2"
        },
        {
            "price": "\nRs 16,990\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.2 inches, 480 x 320", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Wildfire_S/HTC_Wildfire_S_S_1.jpg",
            "product_name": "HTC Wildfire S"
        },
        {
            "price": "\nRs 18,800\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.8 inches, 1280 x 720", "2G, 3G, 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_III_I9300_32GB/Samsung_Galaxy_S_III_I9300_32GB_S_1.jpg",
            "product_name": "Samsung Galaxy S III I9300 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Philips_S308/Philips_S308_S_1.jpg",
            "product_name": "Philips S308"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_Express_E320/Acer_Liquid_Express_E320_S_1.jpg",
            "product_name": "Acer Liquid Express E320"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A16/Karbonn_A16_S_1.jpg",
            "product_name": "Karbonn A16"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_Fuel_20/Lava_Iris_Fuel_20_S_1.jpg",
            "product_name": "Lava Iris Fuel 20"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q500s_IPS/Xolo_Q500s_IPS_S_1.jpg",
            "product_name": "Xolo Q500s IPS"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A1_Plus_Duple/Karbonn_A1_Plus_Duple_S_1.jpg",
            "product_name": "Karbonn A1+ Duple"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.1 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_E1/Acer_Liquid_E1_S_1.jpg",
            "product_name": "Acer Liquid E1"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.4 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Shaan_Fab_24U/iBall_Shaan_Fab_24U_S_1.jpg",
            "product_name": "iBall Shaan Fab 2.4U"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "4 inches, 800 x 480", "2G, 3G, 16GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_I9000_8GB/Samsung_Galaxy_S_I9000_8GB_S_1.jpg",
            "product_name": "Samsung Galaxy S I9000 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Coolpad_2_Mi_496/Spice_Coolpad_2_Mi_496_S_1.jpg",
            "product_name": "Spice Coolpad 2 Mi-496"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A90/Karbonn_A90_S_1.jpg",
            "product_name": "Karbonn A90"
        },
        {
            "price": "\nRs 1,199\n - ",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_M72/Zen_M72_S_1.jpg",
            "product_name": "Zen M72"
        },
        {
            "price": "\nRs 1,440\n - ",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K451_Plus/Karbonn_K451_Plus_S_1.jpg",
            "product_name": "Karbonn K451 Plus"
        },
        {
            "price": "\nRs 1,630\n",
            "desc": ["Feature Phone", "2.3 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X267/Micromax_X267_S_1.jpg",
            "product_name": "Micromax X267"
        },
        {
            "price": "\nRs 1,899\n",
            "desc": ["Feature Phone", "2.8 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Discover_128/Lava_Discover_128_S_1.jpg",
            "product_name": "Lava Discover 128"
        },
        {
            "price": "\nRs 2,448\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 480 x 854", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_SENSE_5_1/Intex_Aqua_SENSE_5_1_S_1.jpg",
            "product_name": "Intex Aqua Sense 5.1"
        },
        {
            "price": "\nRs 2,499\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Champion_My_Phone_35/Champion_My_Phone_35_S_1.jpg",
            "product_name": "Champion My Phone 35"
        },
        {
            "price": "\nRs 3,499\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "4 inches, 854x480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_X_Life_425/Spice_X_Life_425_S_1.jpg",
            "product_name": "Spice X-Life 425"
        },
        {
            "price": "\nRs 3,810\n",
            "desc": ["Smartphone, Android 4.4 Kitkat", "4 inches", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_X_Life_431Q/Spice_X_Life_431Q_S_1.jpg",
            "product_name": "Spice X-Life 431Q"
        },
        {
            "price": "\nRs 4,148\n",
            "desc": ["Smartphone, Android OS v5.1 (Lollipop)", "4 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Millennia_Hero/Celkon_Millennia_Hero_S_1.jpg",
            "product_name": "Celkon Millennia Hero"
        },
        {
            "price": "\nRs 4,444\n - ",
            "desc": ["Smartphone, Android 6.0", "5.0 inches, 720x1280 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_era_2/Xolo_era_2_S_1.jpg",
            "product_name": "Xolo Era 2"
        },
        {
            "price": "\nRs 4,599\n",
            "desc": ["Smartphone, Windows Phone 8.1", "800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Wind_W4/Karbonn_Wind_W4_S_1.jpg",
            "product_name": "Karbonn Wind W4"
        },
        {
            "price": "\nRs 4,749\n",
            "desc": ["Smartphone, 4.4.2 kitkat operating system", "4 inches, 800 x 480 WVGA", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Y2_Power/Intex_Aqua_Y2_Power_S_1.jpg",
            "product_name": "Intex Aqua Y2 Power"
        },
        {
            "price": "\nRs 5,380\n - ",
            "desc": ["Smartphone, Android 4.4, KitKat", "5.0 inches, 480 x 854", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_Avonte5/iBall_Andi_Avonte5_S_1.jpg",
            "product_name": "iBall Andi Avonte5"
        },
        {
            "price": "\nRs 5,599\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X38_1/Lava_X38_1_S_1.jpg",
            "product_name": "Lava X38"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5S_Cobalt3/iBall_Andi_5S_Cobalt3_S_1.jpg",
            "product_name": "iBall Andi 5S Cobalt3"
        },
        {
            "price": "\nRs 7,000\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Star_Power/Intex_Aqua_Star_Power_S_1.jpg",
            "product_name": "Intex Aqua Star Power"
        },
        {
            "price": "\nRs 7,699\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S19/Karbonn_Titanium_S19_S_1.jpg",
            "product_name": "Karbonn Titanium S19"
        },
        {
            "price": "\nRs 8,000\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q800/Xolo_Q800_S_1.jpg",
            "product_name": "Xolo Q800"
        },
        {
            "price": "\nRs 8,329\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.98 inches, 800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_A84/Micromax_A84_S_1.jpg",
            "product_name": "Micromax A84"
        },
        {
            "price": "\nRs 8,900\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_VC/HTC_Desire_VC_S_1.jpg",
            "product_name": "HTC Desire VC"
        },
        {
            "price": "\nRs 9,499\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Opus_HD/Xolo_Opus_HD_S_1.jpg",
            "product_name": "Xolo Opus HD"
        },
        {
            "price": "\nRs 11,400\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "3.5 inches, 480 x 320", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_S5830I/Samsung_Galaxy_Ace_S5830I_S_1.jpg",
            "product_name": "Samsung Galaxy Ace S5830I"
        },
        {
            "price": "\nRs 14,999\n - ",
            "desc": ["Smartphone", "4.3 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_501/HTC_Desire_501_S_1.jpg",
            "product_name": "HTC Desire 501"
        },
        {
            "price": "\nRs 22,000\n",
            "desc": ["Phablet, Android 4.1.2 Jelly Bean", "5.5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_G_Pro_Lite_Dual/LG_G_Pro_Lite_Dual_S_1.jpg",
            "product_name": "LG G Pro Lite Dual"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 854 x 480", "2G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Style_Pro/Intex_Aqua_Style_Pro_S_1.jpg",
            "product_name": "Intex Aqua Style Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A1_Plus_Duple/Karbonn_A1_Plus_Duple_S_1.jpg",
            "product_name": "Karbonn A1 Plus Duple"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A5s/Karbonn_A5s_S_1.jpg",
            "product_name": "Karbonn A5s"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "4 inches, 800 x 480", "2G, 3G, 4GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_SL_i9003/Samsung_Galaxy_SL_i9003_S_1.jpg",
            "product_name": "Samsung Galaxy SL I9003 4GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.7 inches, 1280 x 720", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_One_X/HTC_One_X_S_1.jpg",
            "product_name": "HTC One X 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4", "4 inches, 480x800 pixel resolution", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_3G_NS/Intex_Aqua_3G_NS_S_1.jpg",
            "product_name": "Intex Aqua 3G NS"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A99/Karbonn_A99_S_1.jpg",
            "product_name": "Karbonn A99"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Entice_A105/Micromax_Canvas_Entice_A105_S_1.jpg",
            "product_name": "Micromax Canvas Entice A105"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_349/Lava_Iris_349_S_1.jpg",
            "product_name": "Lava Iris 349"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_4_ARC/iBall_Andi_4_ARC_S_1.jpg",
            "product_name": "iBall Andi 4 ARC"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q2000/Xolo_Q2000_S_1.jpg",
            "product_name": "Xolo Q2000"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 800 x 480", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/DOMO_nTice_A10/DOMO_nTice_A10_S_1.jpg",
            "product_name": "DOMO nTice A10"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5.3 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Gpad_G2/Gionee_Gpad_G2_S_1.jpg",
            "product_name": "Gionee Gpad G2"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Smartphone, nubia UI 5.0(Based...", "5.5 inches, 1280x720", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/nubia_M2_Play_Concept/nubia_M2_Play_Concept_S_1.jpg",
            "product_name": "nubia M2 Play"
        },
        {
            "price": "\nRs 999\n",
            "desc": ["Feature Phone", "2.4 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Josh_A999/Josh_A999_S_1.jpg",
            "product_name": "Josh A999"
        },
        {
            "price": "\nRs 1,049\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/M_Tech_V2/M_Tech_V2_S_1.jpg",
            "product_name": "M-Tech V2"
        },
        {
            "price": "\nRs 1,340\n",
            "desc": ["Feature Phone", "160 x 128", "Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K334/Karbonn_K334_S_1.jpg",
            "product_name": "Karbonn K334"
        },
        {
            "price": "\nRs 1,449\n - ",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K695_Plus/Karbonn_K695_Plus_S_1.jpg",
            "product_name": "Karbonn K695 Plus"
        },
        {
            "price": "\nRs 1,449\n",
            "desc": ["Feature Phone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_M3/Zen_M3_S_1.jpg",
            "product_name": "Zen M3"
        },
        {
            "price": "\nRs 1,690\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X281/Micromax_X281_S_1.jpg",
            "product_name": "Micromax X281"
        },
        {
            "price": "\nRs 1,759\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K900/Karbonn_K900_S_1.jpg",
            "product_name": "Karbonn K900"
        },
        {
            "price": "\nRs 1,799\n",
            "desc": ["Feature Phone", "4.0 inches, 320 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_FEEL/Intex_FEEL_S_1.jpg",
            "product_name": "Intex FEEL"
        },
        {
            "price": "\nRs 1,999\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_The_Legend/Karbonn_The_Legend_S_1.jpg",
            "product_name": "Karbonn The Legend"
        },
        {
            "price": "\nRs 2,549\n",
            "desc": ["Feature Phone", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Buddy_300/Spice_Buddy_300_S_1.jpg",
            "product_name": "Spice Buddy 300"
        },
        {
            "price": "\nRs 3,219\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "3.5 inches, 480 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_X2/Intex_Cloud_X2_S_1.jpg",
            "product_name": "Intex Cloud X2"
        },
        {
            "price": "\nRs 3,299\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_A400/Celkon_Campus_A400_S_1.jpg",
            "product_name": "Celkon Campus A400"
        },
        {
            "price": "\nRs 3,599\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_4U_Frisbee/iBall_Andi_4U_Frisbee_S_1.jpg",
            "product_name": "iBall Andi 4U Frisbee"
        },
        {
            "price": "\nRs 3,719\n",
            "desc": ["Feature Phone", "3.5 inches, 480 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X660/Micromax_X660_S_1.jpg",
            "product_name": "Micromax X660"
        },
        {
            "price": "\nRs 4,290\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.5 inches", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_35i/iBall_Andi_35i_S_1.jpg",
            "product_name": "iBall Andi 3.5i"
        },
        {
            "price": "\nRs 4,980\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_Whizz_Q42/Celkon_Campus_Whizz_Q42_S_1.jpg",
            "product_name": "Celkon Campus Whizz Q42"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A19/Karbonn_A19_S_1.jpg",
            "product_name": "Karbonn A19"
        },
        {
            "price": "\nRs 5,030\n",
            "desc": ["Feature Phone", "3 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Rex_80_S5222R/Samsung_Rex_80_S5222R_S_1.jpg",
            "product_name": "Samsung Rex 80 S5222R"
        },
        {
            "price": "\nRs 5,799\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "4.5 inches, 854 x 480 pixels", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Diamond_Q4G/Celkon_Diamond_Q4G_S_1.jpg",
            "product_name": "Celkon Diamond Q4G"
        },
        {
            "price": "\nRs 5,990\n",
            "desc": ["Feature Phone", "3.5 inches, 480 x 320", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Rex_90_S5292/Samsung_Rex_90_S5292_S_1.jpg",
            "product_name": "Samsung Rex 90 S5292"
        },
        {
            "price": "\nRs 6,990\n - ",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.7 inches, 800 x 480", "2G, 3G, 1GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_S/HTC_Desire_S_S_1.jpg",
            "product_name": "HTC Desire S"
        },
        {
            "price": "\nRs 7,190\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_I2/Intex_Aqua_I2_S_1.jpg",
            "product_name": "Intex Aqua I2"
        },
        {
            "price": "\nRs 8,500\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.65 inches, 480 x 320", "2G, 3G, 3GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_Plus_S7500/Samsung_Galaxy_Ace_Plus_S7500_S_1.jpg",
            "product_name": "Samsung Galaxy Ace Plus S7500"
        },
        {
            "price": "\nRs 8,666\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S880/Lenovo_S880_S_1.jpg",
            "product_name": "Lenovo S880"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4.3 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_X910/Xolo_X910_S_1.jpg",
            "product_name": "Xolo X910"
        },
        {
            "price": "\nRs 13,750\n - ",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_K860/Lenovo_K860_S_1.jpg",
            "product_name": "Lenovo K860"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "5 inches, 960 x 540", "4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5H_Quadro/iBall_Andi_5H_Quadro_S_1.jpg",
            "product_name": "iBall Andi 5H Quadro"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S5/Karbonn_Titanium_S5_S_1.jpg",
            "product_name": "Karbonn Titanium S5"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "3.2 inches, 400 x 240", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_B7722/Samsung_B7722_S_1.jpg",
            "product_name": "Samsung B7722"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "2.8 inches, 320 x 240", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_C3510_Genoa/Samsung_C3510_Genoa_S_1.jpg",
            "product_name": "Samsung C3510 Genoa"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_A500/Xolo_A500_S_1.jpg",
            "product_name": "Xolo A500"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_Crown_Q40/Celkon_Campus_Crown_Q40_S_1.jpg",
            "product_name": "Celkon Campus Crown Q40+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.2 Froyo", "3.2 inches, 400 x 240", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_551/Samsung_Galaxy_551_S_1.jpg",
            "product_name": "Samsung Galaxy 551"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "3.5 inches, 480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_X1/Intex_Cloud_X1_S_1.jpg",
            "product_name": "Intex Cloud X1"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.5 inches, 320 x 240", "2G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Superfone_Punk_A44/Micromax_Superfone_Punk_A44_S_1.jpg",
            "product_name": "Micromax Superfone Punk A44"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_N8/Intex_Aqua_N8_S_1.jpg",
            "product_name": "Intex Aqua N8"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q800_X_Edition/Xolo_Q800_X_Edition_S_1.jpg",
            "product_name": "Xolo Q800 X-Edition"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_348/Lava_Iris_348_S_1.jpg",
            "product_name": "Lava Iris 348"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 800 x 480", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_425/Spice_Stellar_Mi_425_S_1.jpg",
            "product_name": "Spice Stellar Mi-425"
        },
        {
            "price": "\nRs 1,147\n",
            "desc": ["Feature Phone", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Champion_X1_Star/Champion_X1_Star_S_1.jpg",
            "product_name": "Champion X1 Star"
        },
        {
            "price": "\nRs 1,199\n - ",
            "desc": ["Feature Phone", "320 x 240", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xccess_Bold_X200/Xccess_Bold_X200_S_1.jpg",
            "product_name": "Xccess Bold X200"
        },
        {
            "price": "\nRs 1,449\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zync_C24/Zync_C24_S_1.jpg",
            "product_name": "Zync C24"
        },
        {
            "price": "\nRs 1,495\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K54/Karbonn_K54_S_1.jpg",
            "product_name": "Karbonn K54+"
        },
        {
            "price": "\nRs 1,500\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_Chocolate_M_5373/Spice_Boss_Chocolate_M_5373_S_1.jpg",
            "product_name": "Spice Boss Chocolate M-5373"
        },
        {
            "price": "\nRs 1,689\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Alpha/Intex_Alpha_S_1.jpg",
            "product_name": "Intex Alpha"
        },
        {
            "price": "\nRs 1,999\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_ARR35/Celkon_ARR35_S_1.jpg",
            "product_name": "Celkon ARR35"
        },
        {
            "price": "\nRs 3,199\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_A64/Celkon_A64_S_1.jpg",
            "product_name": "Celkon A64"
        },
        {
            "price": "\nRs 3,419\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_4H_Tiger/iBall_Andi_4H_Tiger_S_1.jpg",
            "product_name": "iBall Andi 4H Tiger+"
        },
        {
            "price": "\nRs 3,650\n - ",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_445/Spice_Stellar_Mi_445_S_1.jpg",
            "product_name": "Spice Stellar Mi-445"
        },
        {
            "price": "\nRs 4,773\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_S11/Karbonn_Titanium_S11_S_1.jpg",
            "product_name": "Karbonn Titanium S11"
        },
        {
            "price": "\nRs 5,349\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_X17/Lava_X17_S_1.jpg",
            "product_name": "Lava X17"
        },
        {
            "price": "\nRs 6,999\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Hue/Micromax_Canvas_Hue_S_1.jpg",
            "product_name": "Micromax Canvas Hue"
        },
        {
            "price": "\nRs 7,579\n",
            "desc": ["Phablet, Android 4.0.4 Ice Cream Sandwich", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A30/Karbonn_A30_S_1.jpg",
            "product_name": "Karbonn A30"
        },
        {
            "price": "\nRs 7,990\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q1000_Opus/Xolo_Q1000_Opus_S_1.jpg",
            "product_name": "Xolo Q1000 Opus"
        },
        {
            "price": "\nRs 7,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_517/Spice_Stellar_Mi_517_S_1.jpg",
            "product_name": "Spice Stellar Mi-517"
        },
        {
            "price": "\nRs 8,900\n - ",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_V/HTC_Desire_V_S_1.jpg",
            "product_name": "HTC Desire V"
        },
        {
            "price": "\nRs 9,000\n - ",
            "desc": ["Phablet, Android 4.4.2 KitKat", "5.5 inches, 960 x 540", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_L_A108/Micromax_Canvas_L_A108_S_1.jpg",
            "product_name": "Micromax Canvas L A108"
        },
        {
            "price": "\nRs 9,499\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_L_Bello/LG_L_Bello_S_1.jpg",
            "product_name": "LG L Bello"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 1920 x 1080", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Pinnacle_FHD_Mi_525/Spice_Pinnacle_FHD_Mi_525_S_1.jpg",
            "product_name": "Spice Pinnacle FHD Mi-525"
        },
        {
            "price": "\nRs 10,409\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Amaze/Intex_Aqua_Amaze_S_1.jpg",
            "product_name": "Intex Aqua Amaze"
        },
        {
            "price": "\nRs 11,527\n",
            "desc": ["Feature Phone", "1.76 inches, 220 x 176", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_E500/Samsung_E500_S_1.jpg",
            "product_name": "Samsung E500"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5 inches, 854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_2_A110_Superfone/Micromax_Canvas_2_A110_Superfone_S_1.jpg",
            "product_name": "Micromax Canvas 2 A110 Superfone"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_3X/Intex_Aqua_3X_S_1.jpg",
            "product_name": "Intex Aqua 3X"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_M5/Intex_Aqua_M5_S_1.jpg",
            "product_name": "Intex Aqua M5"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_349/Lava_Iris_349_S_1.jpg",
            "product_name": "Lava Iris 349+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "4.5 inches, 480 x 854 pixels (~218 ppi ...", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_xolo_one/Lava_xolo_one_S_1.jpg",
            "product_name": "Lava Xolo One"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.1 Eclair", "3.5 inches, 800 x 480", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Acer_Liquid_E/Acer_Liquid_E_S_1.jpg",
            "product_name": "Acer Liquid E"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q700/Xolo_Q700_S_1.jpg",
            "product_name": "Xolo Q700"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5 inches, 800 x 480", "2G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_A107/Celkon_A107_S_1.jpg",
            "product_name": "Celkon A107"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_i5_Mini/Intex_Aqua_i5_Mini_S_1.jpg",
            "product_name": "Intex Aqua i5 Mini"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4.5 inches, 854 x 480", "2G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Android_One_Sparkle_V/Karbonn_Android_One_Sparkle_V_S_1.jpg",
            "product_name": "Karbonn Android One Sparkle V"
        },
        {
            "price": "\n-\n",
            "desc": ["Phablet, Android 4.4 KitKat", "1280 x 720", "2G, 3G, 4G (LTE)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_LT2000/Xolo_LT2000_S_1.jpg",
            "product_name": "Xolo LT2000"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.73 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_M_5100/Spice_M_5100_S_1.jpg",
            "product_name": "Spice M-5100"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_402/Lava_Iris_402_S_1.jpg",
            "product_name": "Lava Iris 402+"
        },
        {
            "price": "\nRs 999\n - ",
            "desc": ["Feature Phone", "160 x 128", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xccess_Gem_S_X104/Xccess_Gem_S_X104_S_1.jpg",
            "product_name": "Xccess Gem S X104"
        },
        {
            "price": "\nRs 1,299\n - ",
            "desc": ["Feature Phone", "2.4 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Rockstar/Celkon_Rockstar_S_1.jpg",
            "product_name": "Celkon Rockstar"
        },
        {
            "price": "\nRs 1,390\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K52_Groovster/Karbonn_K52_Groovster_S_1.jpg",
            "product_name": "Karbonn K52 Groovster"
        },
        {
            "price": "\nRs 1,435\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K451_Sound_Wave/Karbonn_K451_Sound_Wave_S_1.jpg",
            "product_name": "Karbonn K451+ Sound Wave"
        },
        {
            "price": "\nRs 1,619\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_X269/Micromax_X269_S_1.jpg",
            "product_name": "Micromax X269"
        },
        {
            "price": "\nRs 2,399\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_Nova_A352E/Celkon_Campus_Nova_A352E_S_1.jpg",
            "product_name": "Celkon Campus Nova A352E"
        },
        {
            "price": "\nRs 2,499\n - ",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "800 x 480", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xccess_Pulse_A01/Xccess_Pulse_A01_S_1.jpg",
            "product_name": "Xccess Pulse A01"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A6/Karbonn_A6_S_1.jpg",
            "product_name": "Karbonn A6"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android 5.1", "5 inches, 480*854", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Cloud_Matte/Intex_Cloud_Matte_S_1.jpg",
            "product_name": "Intex Cloud Matte"
        },
        {
            "price": "\nRs 3,699\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A80/Karbonn_A80_S_1.jpg",
            "product_name": "Karbonn A80"
        },
        {
            "price": "\nRs 4,499\n - ",
            "desc": ["Smartphone, Android4.4.2", "5 inches, 854 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_era/Xolo_era_S_1.jpg",
            "product_name": "Xolo era"
        },
        {
            "price": "\nRs 4,648\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "854 x 480", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A40_Plus/Karbonn_A40_Plus_S_1.jpg",
            "product_name": "Karbonn A40 Plus"
        },
        {
            "price": "\nRs 4,690\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "4.5 inches, 854 x 480 pixels", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_S30_TITANIUM_DESIRE/Karbonn_S30_TITANIUM_DESIRE_S_1.jpg",
            "product_name": "Karbonn S30 Titanium Desire"
        },
        {
            "price": "\nRs 4,699\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "4.5 inches, 960 x 540", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Vogue_Q455/Celkon_Vogue_Q455_S_1.jpg",
            "product_name": "Celkon Vogue Q455"
        },
        {
            "price": "\nRs 4,790\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "4.3 inches, 800 x 480", "2G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Smarty_43_A65/Micromax_Smarty_43_A65_S_1.jpg",
            "product_name": "Micromax Smarty 4.3 A65"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Millennia_Octa_510/Celkon_Millennia_Octa_510_S_1.jpg",
            "product_name": "Celkon Millennia Octa 510"
        },
        {
            "price": "\nRs 5,212\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A15/Karbonn_A15_S_1.jpg",
            "product_name": "Karbonn A15+"
        },
        {
            "price": "\nRs 5,500\n - ",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q700s/Xolo_Q700s_S_1.jpg",
            "product_name": "Xolo Q700s"
        },
        {
            "price": "\nRs 5,598\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A25/Karbonn_A25_S_1.jpg",
            "product_name": "Karbonn A25"
        },
        {
            "price": "\nRs 6,195\n - ",
            "desc": ["Smartphone, Android 5.1", "5.0 inches, 720x1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Quattro_L52_VR/Karbonn_Quattro_L52_VR_S_1.jpg",
            "product_name": "Karbonn Quattro L52 VR"
        },
        {
            "price": "\nRs 6,662\n",
            "desc": ["Smartphone, Windows Phone 8.1", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Win_Q1000/Xolo_Win_Q1000_S_1.jpg",
            "product_name": "Xolo Win Q1000"
        },
        {
            "price": "\nRs 6,700\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_22_A114/Micromax_Canvas_22_A114_S_1.jpg",
            "product_name": "Micromax Canvas 2.2 A114"
        },
        {
            "price": "\nRs 7,000\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q900/Xolo_Q900_S_1.jpg",
            "product_name": "Xolo Q900"
        },
        {
            "price": "\nRs 7,400\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zync_Cloud_Z5/Zync_Cloud_Z5_S_1.jpg",
            "product_name": "Zync Cloud Z5"
        },
        {
            "price": "\nRs 8,631\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A27/Karbonn_A27_S_1.jpg",
            "product_name": "Karbonn A27 Retina"
        },
        {
            "price": "\nRs 9,290\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Ace_S5830/Samsung_Galaxy_Ace_S5830_S_1.jpg",
            "product_name": "Samsung Galaxy Ace S5830"
        },
        {
            "price": "\nRs 9,699\n",
            "desc": ["Smartphone, Android 4.1.2 Jelly Bean", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_3D_A115/Micromax_Canvas_3D_A115_S_1.jpg",
            "product_name": "Micromax Canvas 3D A115"
        },
        {
            "price": "\nRs 10,000\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Pinnacle_Stylus_Mi_550/Spice_Pinnacle_Stylus_Mi_550_S_1.jpg",
            "product_name": "Spice Pinnacle Stylus Mi-550"
        },
        {
            "price": "\nRs 10,360\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lenovo_S820/Lenovo_S820_S_1.jpg",
            "product_name": "Lenovo S820 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4 inches, 800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_A97i/Celkon_A97i_S_1.jpg",
            "product_name": "Celkon A97i"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A12/Karbonn_A12_S_1.jpg",
            "product_name": "Karbonn A12+"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "3.5 inches, 480 x 320", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Desire_200/HTC_Desire_200_S_1.jpg",
            "product_name": "HTC Desire 200"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "4 inches, 800 x 480", "2G, 3G, 8GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_Advance_I9070/Samsung_Galaxy_S_Advance_I9070_S_1.jpg",
            "product_name": "Samsung Galaxy S Advance I9070 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.5 Gingerbread", "3.5 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_351/Lava_Iris_351_S_1.jpg",
            "product_name": "Lava Iris 351"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.5 inches, 800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Smart_Flo_Ivory_Mi_450/Spice_Smart_Flo_Ivory_Mi_450_S_1.jpg",
            "product_name": "Spice Smart Flo Ivory Mi-450"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3 inches, 320 x 240 pixels", "2G, 3G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Y_CDMA_i509/Samsung_Galaxy_Y_CDMA_i509_S_1.jpg",
            "product_name": "Samsung Galaxy Y CDMA i509"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.1.1 Jelly Bean", "4.5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Music_A88/Micromax_Canvas_Music_A88_S_1.jpg",
            "product_name": "Micromax Canvas Music A88"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "3.5 inches, 480 x 320", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Discover_136/Lava_Discover_136_S_1.jpg",
            "product_name": "Lava Discover 136"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 960 x 540", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Core/Samsung_Galaxy_Core_S_1.jpg",
            "product_name": "Samsung Galaxy Core LTE"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "4 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_400s/Lava_Iris_400s_S_1.jpg",
            "product_name": "Lava Iris 400s"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_349i/Lava_Iris_349i_S_1.jpg",
            "product_name": "Lava Iris 349i"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone", "480 x 320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A1_Plus_Champ/Karbonn_A1_Plus_Champ_S_1.jpg",
            "product_name": "Karbonn A1 Plus Champ"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3.6 Gingerbread", "3.8 inches, 800 x 480", "2G, 3G, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A9/Karbonn_A9_S_1.jpg",
            "product_name": "Karbonn A9"
        },
        {
            "price": "\nRs 1,119\n",
            "desc": ["Feature Phone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Zen_X20/Zen_X20_S_1.jpg",
            "product_name": "Zen X20"
        },
        {
            "price": "\nRs 1,229\n",
            "desc": ["Feature Phone", "1.8 inches", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_ARC_2/Lava_ARC_2_S_1.jpg",
            "product_name": "Lava ARC 2"
        },
        {
            "price": "\nRs 1,520\n",
            "desc": ["Feature Phone", "2.4 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Dura_2_M_5398/Spice_Dura_2_M_5398_S_1.jpg",
            "product_name": "Spice Dura 2 M-5398"
        },
        {
            "price": "\nRs 1,749\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Boss_Marathon_2_M_5388/Spice_Boss_Marathon_2_M_5388_S_1.jpg",
            "product_name": "Spice Boss Marathon 2 M-5388"
        },
        {
            "price": "\nRs 1,970\n",
            "desc": ["Feature Phone", "2 inches, 220 x 176", "2G, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_M_5161n/Spice_M_5161n_S_1.jpg",
            "product_name": "Spice M-5161n"
        },
        {
            "price": "\nRs 2,549\n",
            "desc": ["Feature Phone", "3.5 inches, 480 x 320", "2G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K75/Karbonn_K75_S_1.jpg",
            "product_name": "Karbonn K75"
        },
        {
            "price": "\nRs 2,999\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Xtacy_Mi_352/Spice_Stellar_Xtacy_Mi_352_S_1.jpg",
            "product_name": "Spice Stellar Xtacy Mi-352"
        },
        {
            "price": "\nRs 3,799\n",
            "desc": ["Smartphone, Android 5.1 Lollipop", "4.5 inches, 854 x 480", "2G, 3G, 8GB, 0.5GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_X_Life_451Q/Spice_X_Life_451Q_S_1.jpg",
            "product_name": "Spice X Life 451Q"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Smartphone, Android 5.1", "5.00 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_FASHIONEYE/Karbonn_FASHIONEYE_S_1.jpg",
            "product_name": "Karbonn Fashion Eye"
        },
        {
            "price": "\nRs 4,500\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "4.5 inches, 960 x 854", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_A125/Celkon_A125_S_1.jpg",
            "product_name": "Celkon A125"
        },
        {
            "price": "\nRs 5,199\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "5 inches, 854\u00d7480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Q5K_Transformer/Celkon_Q5K_Transformer_S_1.jpg",
            "product_name": "Celkon Q5K Transformer"
        },
        {
            "price": "\nRs 5,846\n",
            "desc": ["Smartphone, Android 4.4.2 (KitKat)", "5.0 inches, 1080 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Star_1/ZTE_Star_1_S_1.jpg",
            "product_name": "ZTE Star 1"
        },
        {
            "price": "\nRs 6,090\n",
            "desc": ["Smartphone, Android 4.0.4 Ice Cream San...", "4 inches, 800 x 480", "2GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Smarty_40_A68/Micromax_Smarty_40_A68_S_1.jpg",
            "product_name": "Micromax Smarty 4.0 A68"
        },
        {
            "price": "\nRs 6,500\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Elanza_A93/Micromax_Canvas_Elanza_A93_S_1.jpg",
            "product_name": "Micromax Canvas Elanza A93"
        },
        {
            "price": "\nRs 6,990\n - ",
            "desc": ["Smartphone, Android 2.2 Froyo", "4 inches, 800 x 480", "2G, 3G, 1GB, 0.75GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Incredible_S/HTC_Incredible_S_S_1.jpg",
            "product_name": "HTC Incredible S"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_520n/Spice_Stellar_Mi_520n_S_1.jpg",
            "product_name": "Spice Stellar Mi-520n"
        },
        {
            "price": "\nRs 7,000\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Spice_Stellar_Mi_509/Spice_Stellar_Mi_509_S_1.jpg",
            "product_name": "Spice Stellar Mi-509"
        },
        {
            "price": "\nRs 7,114\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A21/Karbonn_A21_S_1.jpg",
            "product_name": "Karbonn A21+"
        },
        {
            "price": "\nRs 8,099\n - ",
            "desc": ["Smartphone, Android 6.0 (Marshmallow) +...", "5 inches, 720 x 1280 pixels", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Coolpad_Note_5_Lite/Coolpad_Note_5_Lite_S_1.jpg",
            "product_name": "Coolpad Note 5 Lite"
        },
        {
            "price": "\nRs 11,999\n",
            "desc": ["Smartphone, Android OS, V6.0 Marshmallo...", "5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Gionee_Fashion_F103_Pro/Gionee_Fashion_F103_Pro_S_1.jpg",
            "product_name": "Gionee Fashion F103 Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_C250/Celkon_C250_S_1.jpg",
            "product_name": "Celkon C250"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Play_8x_1100/Xolo_Play_8x_1100_S_1.jpg",
            "product_name": "Xolo Play 8x 1100"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.4 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Sparkle_V/Karbonn_Sparkle_V_S_1.jpg",
            "product_name": "Karbonn Sparkle V"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_Canvas_Fun_A76/Micromax_Canvas_Fun_A76_S_1.jpg",
            "product_name": "Micromax Canvas Fun A76"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.1 Jelly Bean", "4.7 inches, 1280 x 720", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_HD/Intex_Aqua_HD_S_1.jpg",
            "product_name": "Intex Aqua HD"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Play_6X_1000/Xolo_Play_6X_1000_S_1.jpg",
            "product_name": "Xolo Play 6X 1000"
        },
        {
            "price": "\nRs 1,349\n",
            "desc": ["Feature Phone", "2.2 inches, 320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_C225/Celkon_C225_S_1.jpg",
            "product_name": "Celkon C225"
        },
        {
            "price": "\nRs 1,419\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K725/Karbonn_K725_S_1.jpg",
            "product_name": "Karbonn K725"
        },
        {
            "price": "\nRs 1,999\n",
            "desc": ["Feature Phone", "320 x 240", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_K63_Plus/Karbonn_K63_Plus_S_1.jpg",
            "product_name": "Karbonn K63 Plus"
        },
        {
            "price": "\nRs 2,699\n",
            "desc": ["Smartphone", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A51_Lite/Karbonn_A51_Lite_S_1.jpg",
            "product_name": "Karbonn A51 Lite"
        },
        {
            "price": "\nRs 3,140\n",
            "desc": ["Smartphone, Android 5.1", "4.0 inches, 800 X 480 pixels resolution", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Alfa_A93_POP/Karbonn_Alfa_A93_POP_S_1.jpg",
            "product_name": "Karbonn Alfa A93 POP"
        },
        {
            "price": "\nRs 3,400\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Kestrel_KM_401/Kestrel_KM_401_S_1.jpg",
            "product_name": "Kestrel KM 401"
        },
        {
            "price": "\nRs 3,599\n",
            "desc": ["Smartphone", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Opium_N7/Karbonn_Opium_N7_S_1.jpg",
            "product_name": "Karbonn Opium N7"
        },
        {
            "price": "\nRs 3,869\n",
            "desc": ["Smartphone", "800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A91/Karbonn_A91_S_1.jpg",
            "product_name": "Karbonn A91"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_35KKe/iBall_Andi_35KKe_S_1.jpg",
            "product_name": "iBall Andi 3.5KKe"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, Android 4.1 Jelly Bean", "4.7 inches, 960 x 540", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A29/Karbonn_A29_S_1.jpg",
            "product_name": "Karbonn A29"
        },
        {
            "price": "\nRs 4,469\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "800 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_S12_Delite/Karbonn_S12_Delite_S_1.jpg",
            "product_name": "Karbonn S12 Delite"
        },
        {
            "price": "\nRs 4,999\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1920 x 1080", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q1000s_Plus/Xolo_Q1000s_Plus_S_1.jpg",
            "product_name": "Xolo Q1000s Plus"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone", "960 x 540", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_S5_Plus/Karbonn_S5_Plus_S_1.jpg",
            "product_name": "Karbonn S5 Plus"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 854 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Millennia_Q5K_Power/Celkon_Millennia_Q5K_Power_S_1.jpg",
            "product_name": "Celkon Millennia Q5K Power"
        },
        {
            "price": "\nRs 6,000\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q900T/Xolo_Q900T_S_1.jpg",
            "product_name": "Xolo Q900T"
        },
        {
            "price": "\nRs 7,495\n - ",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q600/Xolo_Q600_S_1.jpg",
            "product_name": "Xolo Q600"
        },
        {
            "price": "\nRs 9,399\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Star_HD/Intex_Aqua_Star_HD_S_1.jpg",
            "product_name": "Intex Aqua Star HD"
        },
        {
            "price": "\nRs 9,399\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5.0 inches, 720*1280", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_S7/Intex_Aqua_S7_S_1.jpg",
            "product_name": "Intex Aqua S7"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.2 inches", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_A52/Micromax_A52_S_1.jpg",
            "product_name": "Micromax A52"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "4 inches, 800 x 480", "2G, 3G, 8GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S_Plus_i9001/Samsung_Galaxy_S_Plus_i9001_S_1.jpg",
            "product_name": "Samsung Galaxy S Plus I9001 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "4.7 inches, 854 x 480", "2G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A11/Karbonn_A11_S_1.jpg",
            "product_name": "Karbonn A11+"
        },
        {
            "price": "\nRs 1,299\n",
            "desc": ["Feature Phone", "2.4 inches, 240x320", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Turbo_Xtreme/Intex_Turbo_Xtreme_S_1.jpg",
            "product_name": "Intex Turbo Xtreme"
        },
        {
            "price": "\nRs 2,499\n - ",
            "desc": ["Smartphone, Android KitKat 4.4.2", "4.0 inches, 800 x 480", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_A32/Lava_A32_S_1.jpg",
            "product_name": "Lava A32"
        },
        {
            "price": "\nRs 2,739\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.5 inches, 480 x 320", "2G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A5i/Karbonn_A5i_S_1.jpg",
            "product_name": "Karbonn A5i"
        },
        {
            "price": "\nRs 4,459\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "854 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A25_Plus/Karbonn_A25_Plus_S_1.jpg",
            "product_name": "Karbonn A25 Plus"
        },
        {
            "price": "\nRs 4,490\n",
            "desc": ["Smartphone, Android 4.4 kitkat", "4.5 inches, 854 x 480 pixels", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_Delight/Karbonn_Titanium_Delight_S_1.jpg",
            "product_name": "Karbonn Titanium Delight"
        },
        {
            "price": "\nRs 4,500\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_A1000s/Xolo_A1000s_S_1.jpg",
            "product_name": "Xolo A1000s"
        },
        {
            "price": "\nRs 4,699\n",
            "desc": ["Smartphone", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_S4_Plus/Karbonn_S4_Plus_S_1.jpg",
            "product_name": "Karbonn S4 Plus"
        },
        {
            "price": "\nRs 8,000\n",
            "desc": ["Smartphone, Android 4.3 Jelly Bean", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q1100/Xolo_Q1100_S_1.jpg",
            "product_name": "Xolo Q1100"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q700s_Plus/Xolo_Q700s_Plus_S_1.jpg",
            "product_name": "Xolo Q700s Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.4 KitKat", "3.5 inches, 480 x 320", "2G, 2GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Lava_Iris_310_Style/Lava_Iris_310_Style_S_1.jpg",
            "product_name": "Lava Iris 310 Style"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Phablet, Android 7.0 (Nougat)", "5.8 inches, 1440 x 2960 pixels", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_S8_Active_concept1/Samsung_Galaxy_S8_Active_concept1_S_1.jpg",
            "product_name": "Samsung Galaxy S8 Active"
        },
        {
            "price": "\nRs 1,589\n",
            "desc": ["Feature Phone", "1.8 inches, 160 x 128", "Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Neo_SX/Intex_Neo_SX_S_1.jpg",
            "product_name": "Intex Neo SX"
        },
        {
            "price": "\nRs 1,849\n",
            "desc": ["Feature Phone", "220 x 176", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Micromax_C260/Micromax_C260_S_1.jpg",
            "product_name": "Micromax C260"
        },
        {
            "price": "\nRs 2,399\n",
            "desc": ["Smartphone, Android OS v4.4.2 (Kitkat)", "3.5 inches, 320\u00d7480", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_A35K_Remote/Celkon_A35K_Remote_S_1.jpg",
            "product_name": "Celkon A35K Remote"
        },
        {
            "price": "\nRs 2,599\n",
            "desc": ["Smartphone, Android Lollipop 5.1", "4.0 inches, 800x480 Pixel", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_Campus_Pride/Celkon_Campus_Pride_S_1.jpg",
            "product_name": "Celkon Campus Pride"
        },
        {
            "price": "\nRs 4,499\n",
            "desc": ["Smartphone, Android 4.4.2 KitKat", "854 x 480", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q610s/Xolo_Q610s_S_1.jpg",
            "product_name": "Xolo Q610s"
        },
        {
            "price": "\nRs 4,590\n",
            "desc": ["Smartphone, Android v4.4 (KitKat)", "5 inches, 960 x 540 pixels resolution", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Titanium_Moghul/Karbonn_Titanium_Moghul_S_1.jpg",
            "product_name": "Karbonn Titanium Moghul"
        },
        {
            "price": "\nRs 4,789\n - ",
            "desc": ["Smartphone, Android 4.4 KitKat", "1280 x 720", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_S10/Karbonn_S10_S_1.jpg",
            "product_name": "Karbonn S10"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Smartphone, Android 7.0 Nougat", "5 inches (12.7cm), 720x1280 pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Crystal_Plus/Intex_Aqua_Crystal_Plus_S_1.jpg",
            "product_name": "Intex Aqua Crystal+"
        },
        {
            "price": "\nRs 9,490\n - ",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "5 inches, 960 x 540", "2G, 3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Curve/Intex_Aqua_Curve_S_1.jpg",
            "product_name": "Intex Aqua Curve"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2 Jelly Bean", "960 x 540", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q700i/Xolo_Q700i_S_1.jpg",
            "product_name": "Xolo Q700i"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "480 x 320", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A52_Plus/Karbonn_A52_Plus_S_1.jpg",
            "product_name": "Karbonn A52 Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "800 x 480", "2G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_A2_plus/Karbonn_A2_plus_S_1.jpg",
            "product_name": "Karbonn A2+"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Smartphone, KitKat 4.4.2", "5 inches, 1280 x 720", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Salora_Arya_Z3/Salora_Arya_Z3_S_1.jpg",
            "product_name": "Salora Arya Z3"
        },
        {
            "price": "\nRs 5,490\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.4 inches, 480 x 320", "2G, 3G, 0.5GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/HTC_Salsa/HTC_Salsa_S_1.jpg",
            "product_name": "HTC Salsa"
        },
        {
            "price": "\nRs 6,499\n",
            "desc": ["Smartphone, Android OS, v4.4.2 (KitKat)", "4 inches, 480 x 640 pixels (~200 ppi pi...", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Xolo_Q510s/Xolo_Q510s_S_1.jpg",
            "product_name": "Xolo Q510s"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 4.0 Ice Cream Sandwich", "5 inches, 800 x 480", "2G, 3G, 4GB, 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_5L/iBall_Andi_5L_S_1.jpg",
            "product_name": "iBall Andi 5L"
        },
        {
            "price": "\n-\n",
            "desc": ["Smartphone, Android 2.3 Gingerbread", "3.2 inches, 400 x 240", "2G, 3G, Less than 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/iBall_Andi_3e/iBall_Andi_3e_S_1.jpg",
            "product_name": "iBall Andi 3e"
        },
        {
            "price": "\nRs 5,775\n - ",
            "desc": ["Smartphone, Android 5.1", "5 inches, 1280 x 720 pixels resolution", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_QUATTRO_L50/Karbonn_QUATTRO_L50_S_1.jpg",
            "product_name": "Karbonn Quattro L50"
        },
        {
            "price": "\nRs 7,999\n - ",
            "desc": ["Smartphone, Android 4.4", "5.0 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ASUS_Zenfone_Go_5_0_LTE_T500/ASUS_Zenfone_Go_5_0_LTE_T500_S_1.jpg",
            "product_name": "ASUS ZenFone Go 5.0 LTE T500"
        },
        {
            "price": "\nRs 9,790\n",
            "desc": ["Phablet, Smartphone, TouchWiz UI,\r\nAndr...", "5.5 inches, 1280 x 720", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Samsung_Galaxy_Note2_N7100/Samsung_Galaxy_Note2_N7100_S_1.jpg",
            "product_name": "Samsung Galaxy Note 2 N7100 16GB"
        },
        {
            "price": "\nRs 4,499\n",
            "desc": ["Smartphone, Android 4.2.2 Jelly Bean", "3.5 inches, 480 x 320", "2G, 3G, 0.5GB, Less than 0.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Celkon_A10/Celkon_A10_S_1.jpg",
            "product_name": "Celkon A10"
        },
        {
            "price": "\nRs 12,791\n - ",
            "desc": ["Smartphone, Android OS, Ice Cream Sandwich", "4.3 inches", "2G, 3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_Optimus_L7_P705/LG_Optimus_L7_P705_S_1.jpg",
            "product_name": "LG Optimus L7"
        },
        {
            "price": "\nRs 4,699\n - ",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5 inches (12.7cm), 480X854", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Lions_4G/Intex_Aqua_Lions_4G_S_1.jpg",
            "product_name": "Intex Aqua Lions 4G"
        },
        {
            "price": "\nRs 7,749\n - ",
            "desc": ["Smartphone, Android 6.0 (Marshmallow)", "5 inches (12.7cm), HD(1280*720)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_Tapp/Panasonic_Eluga_Tapp_S_1.jpg",
            "product_name": "Panasonic Eluga Tapp"
        },
        {
            "price": "\nRs 7,904\n",
            "desc": ["Smartphone, Android 6.0 (Marshmallow), ...", "5.0 inches, 1280 x 720 pixels", "2G, 3G, 4G (LTE), 16GB, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/LG_K8/LG_K8_S_1.jpg",
            "product_name": "LG K8"
        },
        {
            "price": "\nRs 7,999\n",
            "desc": ["Smartphone, Android 7.0 Nougat", "5.2 inches (13.2 cm), 1280 x 720 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Elyt_e7/Intex_Elyt_e7_S_1.jpg",
            "product_name": "Intex Elyt-e7"
        },
        {
            "price": "\nRs 5,499\n",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5 inches (12.70 cm), 720 x 1280", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Crystal/Intex_Aqua_Crystal_S_1.jpg",
            "product_name": "Intex Aqua Crystal"
        },
        {
            "price": "\nRs 19,590\n",
            "desc": ["Phablet, Smartphone, Android 5.1 (Lolli...", "5.5 inches, 720 x 1280 Pixels", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/ZTE_Zmax_2/ZTE_Zmax_2_S_1.jpg",
            "product_name": "ZTE Zmax 2"
        },
        {
            "price": "\nRs 6,375\n - ",
            "desc": ["Phablet, Smartphone, Android 6.0", "5.5 inches (13.97 cm), 1280 x 720 pixel...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Karbonn_Aura_Note_4G/Karbonn_Aura_Note_4G_S_1.jpg",
            "product_name": "Karbonn Aura Note 4G"
        },
        {
            "price": "\nRs 4,444\n",
            "desc": ["Smartphone, Android 7.0 Nougat", "5 inches (12.7cm), 854x480", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Zenith/Intex_Aqua_Zenith_S_1.jpg",
            "product_name": "Intex Aqua Zenith"
        },
        {
            "price": "\nRs 4,599\n",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "4.7 inches (11.94cm), 1280x720", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Amaze_Plus/Intex_Aqua_Amaze_Plus_S_1.jpg",
            "product_name": "Intex Aqua Amaze+"
        },
        {
            "price": "\nRs 5,499\n",
            "desc": ["Smartphone, Android 6.0 Marshmallow", "5 inches (12.7 cm), 720X1280", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Intex_Aqua_Supreme_Plus/Intex_Aqua_Supreme_Plus_S_1.jpg",
            "product_name": "Intex Aqua Supreme+"
        },
        {
            "price": "\nRs 7,994\n - ",
            "desc": ["Smartphone, Android 6.0 (Marshmallow)", "5 inches (12.7cm), HD(1280*720)", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/mobilephones/Panasonic_Eluga_Prim/Panasonic_Eluga_Prim_S_1.jpg",
            "product_name": "Panasonic Eluga Prim"
        }
    ];
    console.log("Entering Data");
    var a = {
        os: '',
        product_name: '',
        ram: '',
        image: '',
        hdd: '',
        description: '',
        screen_size: '',
        price: '',
        brand_name: ''
    }
    var b = [];
    for (var i = 0; i < data_body.length; i++) {

        var price = data_body[i].price.split('\n');
        var product_name = data_body[i].product_name;
        var os = data_body[i].desc[0];
        var image = data_body[i].image;
        var screen_size = data_body[i].desc[1];
        var fields = data_body[i].desc[2];
        var brand_name = data_body[i].product_name.split(' ');
        console.log("brand is " + brand_name);
        var brand_name1 = brand_name[0];
        var description = fields;

        if (price[1] != "-" && product_name != "-" && os != "-" && image != "-" && screen_size != "-") {
            a.price = price[1];
            a.product_name = product_name;
            a.os = os;
            a.image = image;
            a.screen_size = screen_size;
            a.description = description;
            a.brand_name = brand_name1;

            b[i] = {
                price: a.price,
                product_name: a.product_name,
                os: a.os,
                image: a.image,
                screen_size: a.screen_size,
                description: a.description,
                brand_name: a.brand_name
            };
            mobiles.create({
                price: b[i].price,
                product_name: b[i].product_name,
                os: b[i].os,
                description: b[i].description,
                image: b[i].image,
                screen_size: b[i].screen_size,
                brand_name: b[i].brand_name
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

router.get('/all_mobiles', (request, response) => {
    mobiles.findAll()
        .then((mobil) => {
            console.log("ok");
            response.send(mobil);

        });
});
/***  Route for getting all brands available ***/
router.get('/get_mobile_brands', (request, response) => {
    mobiles.findAll()
        .then(function (mobiles) {
            var brands = []
            for (var i = 0; i < mobiles.length; i++){
                var already_present=false;
                if(i==0){
                    brands[i] = mobiles[i].brand_name
                    console.log("first stored");
                }
                
                for(var j=0;j<i;j++){
                    console.log("value of j "+ j)
                    if(brands[j]==mobiles[i].brand_name){
                        console.log("matched brand name");
                        already_present=true;
                    }else{
                        if(j==i-1 && already_present==false){
                            brands[brands.length]=mobiles[i].brand_name
                            console.log(brands[brands.length-1]+" phone stored")
                        }else{
                            console.log("passed to next j value")
                        }
                    }
                }
            }
            response.send(brands);
        });
});
module.exports = router;