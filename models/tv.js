var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),
    tv = connection.seq.define('tv', {
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
tv.sync();
/*****  Route for storing tv Information *****/
router.get('/submit_tv', (request, response) => {
    var data_body = [{
            "price": "\nRs 18,850\n - ",
            "desc": ["LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LH512A/LG_32LH512A_S_1.jpg",
            "product_name": "LG 32LH512A"
        },
        {
            "price": "\nRs 11,100\n",
            "desc": ["LCD, LED", "20 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_20LF460A/LG_20LF460A_S_1.jpg",
            "product_name": "LG 20LF460A"
        },
        {
            "price": "\nRs 74,909\n - ",
            "desc": ["LED, Smart TV", "49.0 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49_in_49UJ632T/LG_49_in_49UJ632T_S_1.jpg",
            "product_name": "LG 49 in. 49UJ632T"
        },
        {
            "price": "\nRs 25,400\n",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_32R412C/Sony_KLV_32R412C_S_1.jpg",
            "product_name": "Sony KLV-32R412C"
        },
        {
            "price": "\nRs 19,700\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF550A/LG_32LF550A_S_1.jpg",
            "product_name": "LG 32LF550A"
        },
        {
            "price": "\nRs 24,950\n - ",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF554A/LG_32LF554A_S_1.jpg",
            "product_name": "LG 32LF554A"
        },
        {
            "price": "\nRs 13,750\n - ",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_24P413D/Sony_KLV_24P413D_S_1.jpg",
            "product_name": "Sony KLV-24P413D"
        },
        {
            "price": "\nRs 8,989\n - ",
            "desc": ["LCD, Smart TV", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Weston_SMART_TV/Weston_SMART_TV_S_1.jpg",
            "product_name": "Weston SMART TV"
        },
        {
            "price": "\nRs 12,000\n - ",
            "desc": ["LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_24LH454A/LG_24LH454A_S_1.jpg",
            "product_name": "LG 24LH454A"
        },
        {
            "price": "\n-\n",
            "desc": ["LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_32in_UA32J4100AK/Samsung_32in_UA32J4100AK_S_1.jpg",
            "product_name": "Samsung 32 in. UA32J4100AK"
        },
        {
            "price": "\nRs 8,999\n - ",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_2412/Intex_LED_2412_S_1.jpg",
            "product_name": "Intex LED 2412"
        },
        {
            "price": "\nRs 13,182\n - ",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_24LF454A/LG_24LF454A_S_1.jpg",
            "product_name": "LG 24LF454A"
        },
        {
            "price": "\nRs 234,900\n",
            "desc": ["OLED, Smart TV", "55.0 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_OLED55B6T/LG_OLED55B6T_S_1.jpg",
            "product_name": "LG 55 in. OLED55B6T"
        },
        {
            "price": "\nRs 20,899\n",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF553A/LG_32LF553A_S_1.jpg",
            "product_name": "LG 32LF553A"
        },
        {
            "price": "\nRs 17,900\n",
            "desc": ["\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Apple_TheNew_Apple_TV/Apple_TheNew_Apple_TV_S_1.jpg",
            "product_name": "Apple TV 2015 64GB"
        },
        {
            "price": "\nRs 13,000\n",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_24LF452A/LG_24LF452A_S_1.jpg",
            "product_name": "LG 24LF452A"
        },
        {
            "price": "\nRs 207,465\n - ",
            "desc": ["LCD, LED, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KD_55X9300D/Sony_KD_55X9300D_S_1.jpg",
            "product_name": "Sony Bravia 55 in. KD-55X9300D"
        },
        {
            "price": "\nRs 34,099\n - ",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_32R562C/Sony_KLV_32R562C_S_1.jpg",
            "product_name": "Sony KLV-32R562C"
        },
        {
            "price": "\nRs 31,400\n - ",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF560T/LG_32LF560T_S_1.jpg",
            "product_name": "LG 32LF560T"
        },
        {
            "price": "\nRs 22,990\n - ",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF565B/LG_32LF565B_S_1.jpg",
            "product_name": "LG 32LF565B"
        },
        {
            "price": "\nRs 13,700\n - ",
            "desc": ["LCD, LED", "22 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_22LF480A/LG_22LF480A_S_1.jpg",
            "product_name": "LG 22LF480A"
        },
        {
            "price": "\nRs 50,299\n - ",
            "desc": ["LCD, Smart TV", "42 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_42LF6500/LG_42LF6500_S_1.jpg",
            "product_name": "LG 42LF6500"
        },
        {
            "price": "\nRs 47,000\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_40R562C/Sony_KLV_40R562C_S_1.jpg",
            "product_name": "Sony KLV-40R562C"
        },
        {
            "price": "\nRs 82,990\n",
            "desc": ["LCD, Smart TV", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KDL_50W800C/Sony_KDL_50W800C_S_1.jpg",
            "product_name": "Sony KDL-50W800C"
        },
        {
            "price": "\nRs 67,000\n - ",
            "desc": ["LCD, Smart TV", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KDL_43W950C/Sony_KDL_43W950C_S_1.jpg",
            "product_name": "Sony KDL-43W950C"
        },
        {
            "price": "\nRs 36,300\n",
            "desc": ["LCD, LED", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_43LF513A/LG_43LF513A_S_1.jpg",
            "product_name": "LG 43LF513A"
        },
        {
            "price": "\nRs 94,000\n",
            "desc": ["LCD, Smart TV", "55 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55LF6300/LG_55LF6300_S_1.jpg",
            "product_name": "LG 55LF6300"
        },
        {
            "price": "\nRs 59,500\n",
            "desc": ["LED, Smart TV", "43.0 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_43_in_43UJ632T/LG_43_in_43UJ632T_S_1.jpg",
            "product_name": "LG 43 in. 43UJ632T"
        },
        {
            "price": "\nRs 11,790\n",
            "desc": ["LCD, LED", "22 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_22LF454A/LG_22LF454A_S_1.jpg",
            "product_name": "LG 22LF454A"
        },
        {
            "price": "\nRs 20,100\n - ",
            "desc": ["LCD, Smart TV", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L32S/Lloyd_L32S_S_1.jpg",
            "product_name": "Lloyd L32S"
        },
        {
            "price": "\nRs 21,000\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF513A/LG_32LF513A_S_1.jpg",
            "product_name": "LG 32LF513A"
        },
        {
            "price": "\nRs 51,390\n - ",
            "desc": ["LCD, LED", "49 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49LF540A/LG_49LF540A_S_1.jpg",
            "product_name": "LG 49LF540A"
        },
        {
            "price": "\nRs 16,700\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SJX32HB02CAF/Sansui_SJX32HB02CAF_S_1.jpg",
            "product_name": "SANSUI SJX32HB02CAF"
        },
        {
            "price": "\nRs 33,500\n - ",
            "desc": ["LCD, LED", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_43D350DX/Panasonic_TH_43D350DX_S_1.jpg",
            "product_name": "Panasonic TH-43D350DX"
        },
        {
            "price": "\nRs 18,490\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32C350DX/Panasonic_TH_32C350DX_S_1.jpg",
            "product_name": "Panasonic TH-32C350DX"
        },
        {
            "price": "\nRs 5,489\n",
            "desc": ["LCD, LED", "17 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Weston_WEL_1700/Weston_WEL_1700_S_1.jpg",
            "product_name": "Weston WEL-1700"
        },
        {
            "price": "\nRs 33,749\n - ",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KDL_32W700C/Sony_KDL_32W700C_S_1.jpg",
            "product_name": "Sony KDL-32W700C"
        },
        {
            "price": "\nRs 15,150\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE32B9000/Haier_LE32B9000_S_1.jpg",
            "product_name": "Haier LE32B9000"
        },
        {
            "price": "\nRs 17,000\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_UA32FH4003R/Samsung_UA32FH4003R_S_1.jpg",
            "product_name": "Samsung UA32FH4003R"
        },
        {
            "price": "\nRs 18,490\n",
            "desc": ["LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L32HD/Lloyd_L32HD_S_1.jpg",
            "product_name": "Lloyd L32HD"
        },
        {
            "price": "\nRs 252,264\n",
            "desc": ["LCD, OLED", "55 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55EC930T/LG_55EC930T_S_1.jpg",
            "product_name": "LG 55EC930T"
        },
        {
            "price": "\nRs 39,990\n - ",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L50FLS/Lloyd_L50FLS_S_1.jpg",
            "product_name": "Lloyd L50FLS"
        },
        {
            "price": "\nRs 55,900\n - ",
            "desc": ["LCD, LED", "58 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L58FJQ_L58B01FK220/Lloyd_L58FJQ_L58B01FK220_S_1.jpg",
            "product_name": "Lloyd L58FJQ / L58B01FK220"
        },
        {
            "price": "\nRs 34,350\n - ",
            "desc": ["LCD, LED", "49 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE49B7000/Haier_LE49B7000_S_1.jpg",
            "product_name": "Haier LE49B7000"
        },
        {
            "price": "\nRs 12,500\n - ",
            "desc": ["LCD, LED", "22 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_22P413D/Sony_KLV_22P413D_S_1.jpg",
            "product_name": "Sony KLV-22P413D"
        },
        {
            "price": "\nRs 34,200\n - ",
            "desc": ["LCD, Smart TV", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF6300/LG_32LF6300_S_1.jpg",
            "product_name": "LG 32LF6300"
        },
        {
            "price": "\nRs 13,500\n",
            "desc": ["\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Apple_TheNew_Apple_TV/Apple_TheNew_Apple_TV_S_1.jpg",
            "product_name": "Apple TV 2015 32GB"
        },
        {
            "price": "\nRs 14,490\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_3210/Intex_LED_3210_S_1.jpg",
            "product_name": "Intex LED 3210"
        },
        {
            "price": "\nRs 35,000\n - ",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_5010_FHD/Intex_LED_5010_FHD_S_1.jpg",
            "product_name": "Intex LED 5010 FHD"
        },
        {
            "price": "\nRs 39,550\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_40SV70D/Panasonic_TH_40SV70D_S_1.jpg",
            "product_name": "Panasonic TH-40SV70D"
        },
        {
            "price": "\nRs 118,136\n - ",
            "desc": ["LCD, LED", "65 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_65C300DX/Panasonic_TH_65C300DX_S_1.jpg",
            "product_name": "Panasonic TH-65C300DX"
        },
        {
            "price": "\nRs 12,499\n - ",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_24C400DX/Panasonic_TH_24C400DX_S_1.jpg",
            "product_name": "Panasonic TH-24C400DX"
        },
        {
            "price": "\nRs 16,320\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE32B7000/Haier_LE32B7000_S_1.jpg",
            "product_name": "Haier LE32B7000"
        },
        {
            "price": "\nRs 29,590\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_40T2810FHD/Micromax_40T2810FHD_S_1.jpg",
            "product_name": "Micromax 40T2810FHD"
        },
        {
            "price": "\nRs 30,190\n - ",
            "desc": ["LCD, LED", "42 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_4200_FHD/Intex_LED_4200_FHD_S_1.jpg",
            "product_name": "Intex LED 4200 FHD"
        },
        {
            "price": "\nRs 28,990\n - ",
            "desc": ["LCD, Smart TV", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L40S/Lloyd_L40S_S_1.jpg",
            "product_name": "Lloyd L40S"
        },
        {
            "price": "\nRs 14,890\n",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_24P422C/Sony_KLV_24P422C_S_1.jpg",
            "product_name": "Sony KLV-24P422C"
        },
        {
            "price": "\nRs 28,390\n - ",
            "desc": ["LCD, Smart TV", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF595B/LG_32LF595B_S_1.jpg",
            "product_name": "LG 32LF595B"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, Smart TV", "65 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KD_65X9000C/Sony_KD_65X9000C_S_1.jpg",
            "product_name": "Sony KD-65X9000C"
        },
        {
            "price": "\nRs 48,500\n - ",
            "desc": ["LCD, LED", "49 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49LF513A/LG_49LF513A_S_1.jpg",
            "product_name": "LG 49LF513A"
        },
        {
            "price": "\nRs 49,900\n - ",
            "desc": ["LCD, LED", "43 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_43UF640T/LG_43UF640T_S_1.jpg",
            "product_name": "LG 43UF640T"
        },
        {
            "price": "\nRs 16,990\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L32HV/Lloyd_L32HV_S_1.jpg",
            "product_name": "Lloyd L32HV"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VMA32HH02CAH/Videocon_VMA32HH02CAH_S_1.jpg",
            "product_name": "Videocon VMA32HH02CAH"
        },
        {
            "price": "\nRs 30,000\n",
            "desc": ["LCD, Smart TV", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_UA32J5300AR/Samsung_UA32J5300AR_S_1.jpg",
            "product_name": "Samsung UA32J5300AR"
        },
        {
            "price": "\nRs 101,062\n",
            "desc": ["LCD, Smart TV", "55 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KDL_55W800C/Sony_KDL_55W800C_S_1.jpg",
            "product_name": "Sony KDL-55W800C"
        },
        {
            "price": "\nRs 10,190\n - ",
            "desc": ["LCD, LED", "21 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_2111_FHD/Intex_LED_2111_FHD_S_1.jpg",
            "product_name": "Intex LED 2111 FHD"
        },
        {
            "price": "\nRs 20,000\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32C401D/Panasonic_TH_32C401D_S_1.jpg",
            "product_name": "Panasonic TH-32C401D"
        },
        {
            "price": "\nRs 59,800\n",
            "desc": ["LCD, Smart TV", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KDL_43W800C/Sony_KDL_43W800C_S_1.jpg",
            "product_name": "Sony KDL-43W800C"
        },
        {
            "price": "\nRs 9,545\n",
            "desc": ["LCD, LED", "20 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L20AM/Lloyd_L20AM_S_1.jpg",
            "product_name": "Lloyd L20AM"
        },
        {
            "price": "\nRs 18,980\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VJU32HH02CAH/Videocon_VJU32HH02CAH_S_1.jpg",
            "product_name": "Videocon VJU32HH02CAH"
        },
        {
            "price": "\nRs 37,390\n - ",
            "desc": ["LCD, LED", "42 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_42LF553A/LG_42LF553A_S_1.jpg",
            "product_name": "LG 42LF553A"
        },
        {
            "price": "\nRs 31,500\n - ",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_32R512C/Sony_KLV_32R512C_S_1.jpg",
            "product_name": "Sony KLV-32R512C"
        },
        {
            "price": "\nRs 46,999\n",
            "desc": ["LCD, LED", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_UA43J5100AR/Samsung_UA43J5100AR_S_1.jpg",
            "product_name": "Samsung UA43J5100AR"
        },
        {
            "price": "\nRs 50,000\n",
            "desc": ["LCD, LED", "40.00 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KDL_W60D_W65D_TV_SERIES/Sony_KDL_W60D_W65D_TV_SERIES_S_1.jpg",
            "product_name": "Sony Bravia 40 in. KDL-40W657D"
        },
        {
            "price": "\nRs 56,900\n - ",
            "desc": ["LCD, LED", "48 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_48R562C/Sony_KLV_48R562C_S_1.jpg",
            "product_name": "Sony KLV-48R562C"
        },
        {
            "price": "\nRs 9,190\n - ",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Weston_WEL_2400/Weston_WEL_2400_S_1.jpg",
            "product_name": "Weston WEL-2400"
        },
        {
            "price": "\nRs 45,000\n - ",
            "desc": ["LCD, LED", "42 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_42CS510D/Panasonic_TH_42CS510D_S_1.jpg",
            "product_name": "Panasonic TH-42CS510D"
        },
        {
            "price": "\nRs 284,900\n",
            "desc": ["LCD, LED, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KD_55X9350D/Sony_KD_55X9350D_S_1.jpg",
            "product_name": "Sony Bravia 55 in. KD-55X9350D"
        },
        {
            "price": "\nRs 35,750\n - ",
            "desc": ["LCD, LED", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SKY43FH11FA/Sansui_SKY43FH11FA_S_1.jpg",
            "product_name": "SANSUI SKY43FH11FA"
        },
        {
            "price": "\nRs 152,500\n - ",
            "desc": ["LCD, LED", "60 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_60CX700D/Panasonic_TH_60CX700D_S_1.jpg",
            "product_name": "Panasonic TH-60CX700D"
        },
        {
            "price": "\nRs 11,780\n - ",
            "desc": ["LCD, LED", "24 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_24PFL3159_V7/Philips_24PFL3159_V7_S_1.jpg",
            "product_name": "Philips 24PFL3159/V7"
        },
        {
            "price": "\nRs 27,999\n - ",
            "desc": ["LCD, LED", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE43B7000/Haier_LE43B7000_S_1.jpg",
            "product_name": "Haier LE43B7000"
        },
        {
            "price": "\nRs 43,000\n - ",
            "desc": ["LCD, Smart TV", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_43LF5900/LG_43LF5900_S_1.jpg",
            "product_name": "LG 43LF5900"
        },
        {
            "price": "\nRs 66,398\n",
            "desc": ["LCD, Smart TV", "49 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49LF6300/LG_49LF6300_S_1.jpg",
            "product_name": "LG 49LF6300"
        },
        {
            "price": "\nRs 47,890\n - ",
            "desc": ["LCD, LED", "40 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_40UF670T/LG_40UF670T_S_1.jpg",
            "product_name": "LG 40UF670T"
        },
        {
            "price": "\nRs 49,900\n - ",
            "desc": ["LCD, LED", "55 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE55M600/Haier_LE55M600_S_1.jpg",
            "product_name": "Haier LE55M600"
        },
        {
            "price": "\nRs 204,990\n",
            "desc": ["LED, Smart TV", "65.0 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_65_in_65UJ632T/LG_65_in_65UJ632T_S_1.jpg",
            "product_name": "LG 65 in. 65UJ632T"
        },
        {
            "price": "\nRs 272,600\n",
            "desc": ["QLED, Smart TV", "55.00 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_55_in_QA55Q7FAMKXXT/Samsung_55_in_QA55Q7FAMKXXT_S_1.jpg",
            "product_name": "Samsung 55 in. QA55Q7F"
        },
        {
            "price": "\nRs 26,100\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_40C7550FHD/Micromax_40C7550FHD_S_1.jpg",
            "product_name": "Micromax 40C7550FHD"
        },
        {
            "price": "\nRs 26,500\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SKY40FB11FA/Sansui_SKY40FB11FA_S_1.jpg",
            "product_name": "SANSUI SKY40FB11FA"
        },
        {
            "price": "\nRs 13,200\n",
            "desc": ["LCD, LED", "22 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_UA22F5100AR/Samsung_UA22F5100AR_S_1.jpg",
            "product_name": "Samsung UA22F5100AR"
        },
        {
            "price": "\nRs 13,290\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Weston_WEL_3200/Weston_WEL_3200_S_1.jpg",
            "product_name": "Weston WEL-3200"
        },
        {
            "price": "\nRs 149,900\n - ",
            "desc": ["LCD, LED, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/SONY_Bravia_65in_KD_65X8500D/SONY_Bravia_65in_KD_65X8500D_S_1.jpg",
            "product_name": "Sony Bravia 55 in. KD-55X8500D"
        },
        {
            "price": "\nRs 15,900\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SMC32HB12XAF/Sansui_SMC32HB12XAF_S_1.jpg",
            "product_name": "SANSUI SMC32HB12XAF"
        },
        {
            "price": "\nRs 26,900\n - ",
            "desc": ["LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L40FIK/Lloyd_L40FIK_S_1.jpg",
            "product_name": "Lloyd L40FIK"
        },
        {
            "price": "\nRs 132,900\n",
            "desc": ["LCD, Smart TV", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KDL_50W950C/Sony_KDL_50W950C_S_1.jpg",
            "product_name": "Sony KDL-50W950C"
        },
        {
            "price": "\nRs 56,990\n - ",
            "desc": ["LCD, LED", "55 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_55PFL5059_V7/Philips_55PFL5059_V7_S_1.jpg",
            "product_name": "Philips 55PFL5059/V7"
        },
        {
            "price": "\nRs 60,000\n - ",
            "desc": ["LCD, Smart TV", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_43LF6310/LG_43LF6310_S_1.jpg",
            "product_name": "LG 43LF6310"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KDL_40W700C/Sony_KDL_40W700C_S_1.jpg",
            "product_name": "Sony KDL-40W700C"
        },
        {
            "price": "\nRs 8,990\n - ",
            "desc": ["LCD, LED", "19 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_19C400DX/Panasonic_TH_19C400DX_S_1.jpg",
            "product_name": "Panasonic TH-19C400DX"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_UA32J4100AR/Samsung_UA32J4100AR_S_1.jpg",
            "product_name": "Samsung UA32J4100AR"
        },
        {
            "price": "\nRs 12,000\n - ",
            "desc": ["LCD, LED", "22 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_22C400DX/Panasonic_TH_22C400DX_S_1.jpg",
            "product_name": "Panasonic TH-22C400DX"
        },
        {
            "price": "\nRs 74,990\n - ",
            "desc": ["LCD, Smart TV", "43 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KD_43X8500C/Sony_KD_43X8500C_S_1.jpg",
            "product_name": "Sony KD-43X8500C"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "28 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_28A400DX/Panasonic_TH_28A400DX_S_1.jpg",
            "product_name": "Panasonic TH-28A400DX"
        },
        {
            "price": "\nRs 10,990\n - ",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L24ND/Lloyd_L24ND_S_1.jpg",
            "product_name": "Lloyd L24ND"
        },
        {
            "price": "\nRs 12,000\n - ",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_UA24H4003AR/Samsung_UA24H4003AR_S_1.jpg",
            "product_name": "Samsung UA24H4003AR"
        },
        {
            "price": "\nRs 14,100\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_3213/Intex_LED_3213_S_1.jpg",
            "product_name": "Intex LED 3213"
        },
        {
            "price": "\nRs 20,800\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32C410D/Panasonic_TH_32C410D_S_1.jpg",
            "product_name": "Panasonic TH-32C410D"
        },
        {
            "price": "\nRs 25,490\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32A401D/Panasonic_TH_32A401D_S_1.jpg",
            "product_name": "Panasonic TH-32A401D"
        },
        {
            "price": "\nRs 44,999\n - ",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_50C300DX/Panasonic_TH_50C300DX_S_1.jpg",
            "product_name": "Panasonic TH-50C300DX"
        },
        {
            "price": "\nRs 67,000\n - ",
            "desc": ["LCD, LED", "55 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_55C300DX/Panasonic_TH_55C300DX_S_1.jpg",
            "product_name": "Panasonic TH-55C300DX"
        },
        {
            "price": "\nRs 132,000\n - ",
            "desc": ["LED, Smart TV", "55.0 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55_in_55UJ652T/LG_55_in_55UJ652T_S_1.jpg",
            "product_name": "LG 55 in. 55UJ652T"
        },
        {
            "price": "\nRs 8,600\n",
            "desc": ["LCD, LED", "20 inches", "1600x900", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SKJ20HH07F/Sansui_SKJ20HH07F_S_1.jpg",
            "product_name": "SANSUI SKJ20HH07F"
        },
        {
            "price": "\nRs 16,190\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_IVC32F02A/Videocon_IVC32F02A_S_1.jpg",
            "product_name": "Videocon IVC32F02A"
        },
        {
            "price": "\nRs 16,500\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_32T2820HD/Micromax_32T2820HD_S_1.jpg",
            "product_name": "Micromax 32T2820HD"
        },
        {
            "price": "\nRs 17,499\n - ",
            "desc": ["LCD, Smart TV", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE032v02_HS/Mitashi_MiDE032v02_HS_S_1.jpg",
            "product_name": "Mitashi MiDE032v02 HS"
        },
        {
            "price": "\nRs 20,990\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Weston_WEL_4000/Weston_WEL_4000_S_1.jpg",
            "product_name": "Weston WEL-4000"
        },
        {
            "price": "\nRs 21,490\n - ",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32C460DX/Panasonic_TH_32C460DX_S_1.jpg",
            "product_name": "Panasonic TH-32C460DX"
        },
        {
            "price": "\nRs 63,400\n - ",
            "desc": ["LCD, Smart TV", "43 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_43UF770T/LG_43UF770T_S_1.jpg",
            "product_name": "LG 43UF770T"
        },
        {
            "price": "\nRs 110,890\n",
            "desc": ["LED, Smart TV", "55.0 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_UA49M6300AK/Samsung_UA49M6300AK_S_1.jpg",
            "product_name": "Samsung 55 in. UA55M6300"
        },
        {
            "price": "\nRs 9,800\n - ",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_24B600HD/Micromax_24B600HD_S_1.jpg",
            "product_name": "Micromax 24B600HD"
        },
        {
            "price": "\nRs 19,990\n",
            "desc": ["LCD, LED", "31 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE031v18/Mitashi_MiDE031v18_S_1.jpg",
            "product_name": "Mitashi MiDE031v18"
        },
        {
            "price": "\nRs 9,400\n - ",
            "desc": ["LCD, LED", "20 inches", "1600x900", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_20B22HD-A/Micromax_20B22HD-A_S_1.jpg",
            "product_name": "Micromax 20B22HD-A"
        },
        {
            "price": "\nRs 10,200\n - ",
            "desc": ["LCD, LED", "22 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_IVC22F02A/Videocon_IVC22F02A_S_1.jpg",
            "product_name": "Videocon IVC22F02A"
        },
        {
            "price": "\nRs 18,990\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32C400D/Panasonic_TH_32C400D_S_1.jpg",
            "product_name": "Panasonic TH-32C400D"
        },
        {
            "price": "\nRs 73,000\n - ",
            "desc": ["LCD, LED", "40 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_40CX600D/Panasonic_TH_40CX600D_S_1.jpg",
            "product_name": "Panasonic TH-40CX600D"
        },
        {
            "price": "\nRs 140,000\n - ",
            "desc": ["LED, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55_in_55UH850T/LG_55_in_55UH850T_S_1.jpg",
            "product_name": "LG 55 in. 55UH850T"
        },
        {
            "price": "\nRs 299,000\n",
            "desc": ["LCD, Smart TV", "65 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_65UF950T/LG_65UF950T_S_1.jpg",
            "product_name": "LG 65UF950T"
        },
        {
            "price": "\nRs 17,100\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE32B8000/Haier_LE32B8000_S_1.jpg",
            "product_name": "Haier LE32B8000"
        },
        {
            "price": "\nRs 23,900\n - ",
            "desc": ["LCD, LED", "39 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_39B600HD/Micromax_39B600HD_S_1.jpg",
            "product_name": "Micromax 39B600HD"
        },
        {
            "price": "\nRs 64,400\n",
            "desc": ["LCD, Smart TV", "50 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L50UHDN/Lloyd_L50UHDN_S_1.jpg",
            "product_name": "Lloyd L50UHDN"
        },
        {
            "price": "\nRs 114,999\n - ",
            "desc": ["LED, Smart TV", "55.00 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_55_UA55K6300AK/Samsung_55_UA55K6300AK_S_1.jpg",
            "product_name": "Samsung 55 in. UA55K6300AK"
        },
        {
            "price": "\nRs 125,757\n - ",
            "desc": ["LED, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55UH770T/LG_55UH770T_S_1.jpg",
            "product_name": "LG 55 in. 55UH770T"
        },
        {
            "price": "\nRs 10,000\n",
            "desc": ["LCD, LED", "20 inches", "1600x900", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_20B22HD_TP/Micromax_20B22HD_TP_S_1.jpg",
            "product_name": "Micromax 20B22HD-TP"
        },
        {
            "price": "\nRs 11,992\n",
            "desc": ["LCD, LED", "20 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_20PFL3439_V7/Philips_20PFL3439_V7_S_1.jpg",
            "product_name": "Philips 20PFL3439/V7"
        },
        {
            "price": "\nRs 21,990\n - ",
            "desc": ["LCD, LED", "39 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE039v11_FHD/Mitashi_MiDE039v11_FHD_S_1.jpg",
            "product_name": "Mitashi MiDE039v11 FHD"
        },
        {
            "price": "\nRs 24,990\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L40FGOW_L40E01FD51/Lloyd_L40FGOW_L40E01FD51_S_1.jpg",
            "product_name": "Lloyd L40FGOW / L40E01FD51"
        },
        {
            "price": "\nRs 39,900\n - ",
            "desc": ["LCD, Smart TV", "40 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L40UJR/Lloyd_L40UJR_S_1.jpg",
            "product_name": "Lloyd L40UJR"
        },
        {
            "price": "\nRs 47,500\n",
            "desc": ["LCD, Smart TV", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_40LF6300/LG_40LF6300_S_1.jpg",
            "product_name": "LG 40LF6300"
        },
        {
            "price": "\nRs 7,990\n",
            "desc": ["LCD, LED", "17 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiE017v05/Mitashi_MiE017v05_S_1.jpg",
            "product_name": "Mitashi MiE017v05"
        },
        {
            "price": "\nRs 15,890\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_32B200HDI/Micromax_32B200HDI_S_1.jpg",
            "product_name": "Micromax 32B200HDI"
        },
        {
            "price": "\nRs 16,499\n - ",
            "desc": ["LCD, LED", "28 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_28C400DX/Panasonic_TH_28C400DX_S_1.jpg",
            "product_name": "Panasonic TH-28C400DX"
        },
        {
            "price": "\nRs 21,000\n",
            "desc": ["LCD, LED", "28 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_28LF452A/LG_28LF452A_S_1.jpg",
            "product_name": "LG 28LF452A"
        },
        {
            "price": "\nRs 28,743\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE40B7500/Haier_LE40B7500_S_1.jpg",
            "product_name": "Haier LE40B7500"
        },
        {
            "price": "\nRs 48,650\n - ",
            "desc": ["LCD, LED", "55 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VMD55FH0Z/Videocon_VMD55FH0Z_S_1.jpg",
            "product_name": "Videocon VMD55FH0Z"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sharp_LC_32LE341M/Sharp_LC_32LE341M_S_1.jpg",
            "product_name": "Sharp LC-32LE341M"
        },
        {
            "price": "\nRs 10,100\n",
            "desc": ["LCD, LED", "22 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE22B600/Haier_LE22B600_S_1.jpg",
            "product_name": "Haier LE22B600"
        },
        {
            "price": "\nRs 10,866\n",
            "desc": ["LCD, LED", "22 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_22PFL3758_V7/Philips_22PFL3758_V7_S_1.jpg",
            "product_name": "Philips 22PFL3758/V7"
        },
        {
            "price": "\nRs 14,621\n - ",
            "desc": ["LCD, LED", "28 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L28ND/Lloyd_L28ND_S_1.jpg",
            "product_name": "Lloyd L28ND"
        },
        {
            "price": "\nRs 15,000\n",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_24LF458A/LG_24LF458A_S_1.jpg",
            "product_name": "LG 24LF458A"
        },
        {
            "price": "\nRs 15,500\n",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_24P412C/Sony_KLV_24P412C_S_1.jpg",
            "product_name": "Sony KLV-24P412C"
        },
        {
            "price": "\nRs 21,500\n",
            "desc": ["LCD, LED", "28 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_28R412B/Sony_KLV_28R412B_S_1.jpg",
            "product_name": "Sony KLV-28R412B"
        },
        {
            "price": "\nRs 30,999\n - ",
            "desc": ["LCD, Smart TV", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE040v02_FS/Mitashi_MiDE040v02_FS_S_1.jpg",
            "product_name": "Mitashi MiDE040v02 FS"
        },
        {
            "price": "\nRs 31,490\n - ",
            "desc": ["LCD, LED", "42 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_42C0050UHD/Micromax_42C0050UHD_S_1.jpg",
            "product_name": "Micromax 42C0050UHD"
        },
        {
            "price": "\nRs 35,974\n - ",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE050v05_FHD/Mitashi_MiDE050v05_FHD_S_1.jpg",
            "product_name": "Mitashi MiDE050v05 FHD"
        },
        {
            "price": "\nRs 45,800\n - ",
            "desc": ["LCD, Smart TV", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_43LF6300/LG_43LF6300_S_1.jpg",
            "product_name": "LG 43LF6300"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "19 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L19ND/Lloyd_L19ND_S_1.jpg",
            "product_name": "Lloyd L19ND"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L50N/Lloyd_L50N_S_1.jpg",
            "product_name": "Lloyd L50N"
        },
        {
            "price": "\nRs 10,140\n",
            "desc": ["LCD, LED", "22 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_2205_FHD/Intex_LED_2205_FHD_S_1.jpg",
            "product_name": "Intex LED 2205 FHD"
        },
        {
            "price": "\nRs 13,390\n",
            "desc": ["LCD, LED", "22 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_22P422C/Sony_KLV_22P422C_S_1.jpg",
            "product_name": "Sony KLV-22P422C"
        },
        {
            "price": "\nRs 21,900\n",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF561D/LG_32LF561D_S_1.jpg",
            "product_name": "LG 32LF561D"
        },
        {
            "price": "\nRs 25,990\n - ",
            "desc": ["LCD, Smart TV", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE043v05/Mitashi_MiDE043v05_S_1.jpg",
            "product_name": "Mitashi MiDE043v05"
        },
        {
            "price": "\nRs 27,890\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VKV40FH11CAH/Videocon_VKV40FH11CAH_S_1.jpg",
            "product_name": "Videocon VKV40FH11CAH"
        },
        {
            "price": "\nRs 30,190\n",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_50B5000FHD/Micromax_50B5000FHD_S_1.jpg",
            "product_name": "Micromax 50B5000FHD"
        },
        {
            "price": "\nRs 34,050\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_40PFL5059_V7/Philips_40PFL5059_V7_S_1.jpg",
            "product_name": "Philips 40PFL5059/V7"
        },
        {
            "price": "\nRs 76,100\n",
            "desc": ["LCD, Smart TV", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LD50U7000/Haier_LD50U7000_S_1.jpg",
            "product_name": "Haier LD50U7000"
        },
        {
            "price": "\nRs 80,324\n",
            "desc": ["LCD, LED", "43 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_43UF690T/LG_43UF690T_S_1.jpg",
            "product_name": "LG 43UF690T"
        },
        {
            "price": "\nRs 99,398\n - ",
            "desc": ["LCD, Smart TV", "49 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49UF850T/LG_49UF850T_S_1.jpg",
            "product_name": "LG 49UF850T"
        },
        {
            "price": "\nRs 15,950\n - ",
            "desc": ["LCD, LED", "31 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_3108/Intex_LED_3108_S_1.jpg",
            "product_name": "Intex LED 3108"
        },
        {
            "price": "\nRs 21,390\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VMA32HH12XAH/Videocon_VMA32HH12XAH_S_1.jpg",
            "product_name": "Videocon VMA32HH12XAH"
        },
        {
            "price": "\nRs 25,440\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VMR32HH02CAH/Videocon_VMR32HH02CAH_S_1.jpg",
            "product_name": "Videocon VMR32HH02CAH"
        },
        {
            "price": "\nRs 27,100\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE40B7000/Haier_LE40B7000_S_1.jpg",
            "product_name": "Haier LE40B7000"
        },
        {
            "price": "\nRs 27,990\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VMD40FH0Z/Videocon_VMD40FH0Z_S_1.jpg",
            "product_name": "Videocon VMD40FH0Z"
        },
        {
            "price": "\nRs 28,500\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L40N/Lloyd_L40N_S_1.jpg",
            "product_name": "Lloyd L40N"
        },
        {
            "price": "\nRs 32,990\n",
            "desc": ["LCD, Smart TV", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VKV40FH18XAH/Videocon_VKV40FH18XAH_S_1.jpg",
            "product_name": "Videocon VKV40FH18XAH"
        },
        {
            "price": "\nRs 41,400\n - ",
            "desc": ["LCD, Smart TV", "43 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SME43QX0ZSA/Sansui_SME43QX0ZSA_S_1.jpg",
            "product_name": "SANSUI SME43QX0ZSA"
        },
        {
            "price": "\nRs 89,399\n - ",
            "desc": ["LED, Smart TV", "49.0 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_65_65UH650T/LG_65_65UH650T_S_1.jpg",
            "product_name": "LG 49 in. 49UH650T"
        },
        {
            "price": "\nRs 104,500\n - ",
            "desc": ["LCD, Smart TV", "49 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KD_49X8500C/Sony_KD_49X8500C_S_1.jpg",
            "product_name": "Sony KD-49X8500C"
        },
        {
            "price": "\nRs 225,990\n - ",
            "desc": ["LCD, OLED, Smart TV", "55.00 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55_in_OLED55C7T/LG_55_in_OLED55C7T_S_1.jpg",
            "product_name": "LG 55 in. OLED55C7T"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "48 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KDL_48W700C/Sony_KDL_48W700C_S_1.jpg",
            "product_name": "Sony KDL-48W700C"
        },
        {
            "price": "\nRs 14,000\n",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_24LF515A/LG_24LF515A_S_1.jpg",
            "product_name": "LG 24LF515A"
        },
        {
            "price": "\nRs 14,490\n",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_24A403DX/Panasonic_TH_24A403DX_S_1.jpg",
            "product_name": "Panasonic TH-24A403DX"
        },
        {
            "price": "\nRs 16,200\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_32PFL3738_V7/Philips_32PFL3738_V7_S_1.jpg",
            "product_name": "Philips 32PFL3738/V7"
        },
        {
            "price": "\nRs 23,990\n - ",
            "desc": ["LED, Smart TV", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LH576D/LG_32LH576D_S_1.jpg",
            "product_name": "LG 32LH576D"
        },
        {
            "price": "\nRs 24,990\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SJX40FB11XAF/Sansui_SJX40FB11XAF_S_1.jpg",
            "product_name": "SANSUI SJX40FB11XAF"
        },
        {
            "price": "\nRs 40,500\n - ",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VKV50FH16XAH/Videocon_VKV50FH16XAH_S_1.jpg",
            "product_name": "Videocon VKV50FH16XAH"
        },
        {
            "price": "\nRs 44,500\n",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VMD50FH0Z/Videocon_VMD50FH0Z_S_1.jpg",
            "product_name": "Videocon VMD50FH0Z"
        },
        {
            "price": "\nRs 88,257\n - ",
            "desc": ["LCD, LED", "60 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_60C300DX/Panasonic_TH_60C300DX_S_1.jpg",
            "product_name": "Panasonic TH-60C300DX"
        },
        {
            "price": "\nRs 165,000\n",
            "desc": ["LCD, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55UF850T/LG_55UF850T_S_1.jpg",
            "product_name": "LG 55UF850T"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "24 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L24FNT/Lloyd_L24FNT_S_1.jpg",
            "product_name": "Lloyd L24FNT"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55UF950T/LG_55UF950T_S_1.jpg",
            "product_name": "LG 55UF950T"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE24F6500/Haier_LE24F6500_S_1.jpg",
            "product_name": "Haier LE24F6500"
        },
        {
            "price": "\nRs 18,990\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_UA32J4003AR/Samsung_UA32J4003AR_S_1.jpg",
            "product_name": "Samsung UA32J4003AR"
        },
        {
            "price": "\nRs 21,500\n - ",
            "desc": ["LCD, LED", "39 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE039v10_Fine_HD/Mitashi_MiDE039v10_Fine_HD_S_1.jpg",
            "product_name": "Mitashi MiDE039v10 Fine HD"
        },
        {
            "price": "\nRs 25,200\n - ",
            "desc": ["LCD, LED", "40 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_IVE40F21A/Videocon_IVE40F21A_S_1.jpg",
            "product_name": "Videocon IVE40F21A"
        },
        {
            "price": "\nRs 27,999\n",
            "desc": ["LCD, LED", "39 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_3900_FHD/Intex_LED_3900_FHD_S_1.jpg",
            "product_name": "Intex LED 3900 FHD"
        },
        {
            "price": "\nRs 29,981\n - ",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF581B/LG_32LF581B_S_1.jpg",
            "product_name": "LG 32LF581B"
        },
        {
            "price": "\nRs 42,930\n",
            "desc": ["LCD, Smart TV", "42 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L42UHD/Lloyd_L42UHD_S_1.jpg",
            "product_name": "Lloyd L42UHD"
        },
        {
            "price": "\nRs 59,950\n - ",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_50C410D/Panasonic_TH_50C410D_S_1.jpg",
            "product_name": "Panasonic TH-50C410D"
        },
        {
            "price": "\nRs 104,000\n - ",
            "desc": ["LCD, Smart TV", "49 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49UF770T/LG_49UF770T_S_1.jpg",
            "product_name": "LG 49UF770T"
        },
        {
            "price": "\nRs 124,000\n - ",
            "desc": ["LCD, LED", "49 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_49CX700D/Panasonic_TH_49CX700D_S_1.jpg",
            "product_name": "Panasonic TH-49CX700D"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_32C6150FHD/Micromax_32C6150FHD_S_1.jpg",
            "product_name": "Micromax 32C6150FHD"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, Smart TV", "50 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Vu_LEDN50K310X3D/Vu_LEDN50K310X3D_S_1.jpg",
            "product_name": "Vu LEDN50K310X3D"
        },
        {
            "price": "\nRs 11,050\n - ",
            "desc": ["LCD, LED", "24 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_IVC24F02A/Videocon_IVC24F02A_S_1.jpg",
            "product_name": "Videocon IVC24F02A"
        },
        {
            "price": "\nRs 11,550\n",
            "desc": ["LCD, LED", "24 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SKJ24FH07F/Sansui_SKJ24FH07F_S_1.jpg",
            "product_name": "SANSUI SKJ24FH07F"
        },
        {
            "price": "\nRs 12,490\n - ",
            "desc": ["LCD, LED", "24 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiE024v10/Mitashi_MiE024v10_S_1.jpg",
            "product_name": "Mitashi MiE024v10"
        },
        {
            "price": "\nRs 12,925\n - ",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE24B8000/Haier_LE24B8000_S_1.jpg",
            "product_name": "Haier LE24B8000"
        },
        {
            "price": "\nRs 16,799\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE32B7500/Haier_LE32B7500_S_1.jpg",
            "product_name": "Haier LE32B7500"
        },
        {
            "price": "\nRs 23,190\n",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF515A/LG_32LF515A_S_1.jpg",
            "product_name": "LG 32LF515A"
        },
        {
            "price": "\nRs 30,000\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_40PFL3750_V7/Philips_40PFL3750_V7_S_1.jpg",
            "product_name": "Philips 40PFL3750/V7"
        },
        {
            "price": "\nRs 36,500\n",
            "desc": ["LCD, LED", "39 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_39C2000HD/Micromax_39C2000HD_S_1.jpg",
            "product_name": "Micromax 39C2000HD"
        },
        {
            "price": "\nRs 49,890\n - ",
            "desc": ["LCD, LED", "40 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_40UF672T/LG_40UF672T_S_1.jpg",
            "product_name": "LG 40UF672T"
        },
        {
            "price": "\nRs 63,399\n",
            "desc": ["LCD, LED", "49 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49LF5530/LG_49LF5530_S_1.jpg",
            "product_name": "LG 49LF5530"
        },
        {
            "price": "\nRs 122,900\n - ",
            "desc": ["LED, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55UH650T/LG_55UH650T_S_1.jpg",
            "product_name": "LG 55 in. 55UH650T"
        },
        {
            "price": "\nRs 14,990\n",
            "desc": ["LCD, LED", "28 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE028v12/Mitashi_MiDE028v12_S_1.jpg",
            "product_name": "Mitashi MiDE028v12"
        },
        {
            "price": "\nRs 18,900\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32C200DX/Panasonic_TH_32C200DX_S_1.jpg",
            "product_name": "Panasonic TH-32C200DX"
        },
        {
            "price": "\nRs 23,900\n - ",
            "desc": ["LCD, LED", "40 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SMC40HB21C/Sansui_SMC40HB21C_S_1.jpg",
            "product_name": "SANSUI SMC40HB21C"
        },
        {
            "price": "\nRs 23,990\n",
            "desc": ["LCD, Smart TV", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VMA32HH18XAH/Videocon_VMA32HH18XAH_S_1.jpg",
            "product_name": "Videocon VMA32HH18XAH"
        },
        {
            "price": "\nRs 26,999\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE40B8000/Haier_LE40B8000_S_1.jpg",
            "product_name": "Haier LE40B8000"
        },
        {
            "price": "\nRs 28,990\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE040v10_FHD/Mitashi_MiDE040v10_FHD_S_1.jpg",
            "product_name": "Mitashi MiDE040v10 FHD"
        },
        {
            "price": "\nRs 29,900\n",
            "desc": ["LCD, LED", "40 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SJX40HB21CAF/Sansui_SJX40HB21CAF_S_1.jpg",
            "product_name": "SANSUI SJX40HB21CAF"
        },
        {
            "price": "\nRs 32,300\n",
            "desc": ["LCD, Plasma", "42 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_42PN4500/LG_42PN4500_S_1.jpg",
            "product_name": "LG 42PN4500"
        },
        {
            "price": "\nRs 36,890\n",
            "desc": ["LCD, LED", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_43LF540A/LG_43LF540A_S_1.jpg",
            "product_name": "LG 43LF540A"
        },
        {
            "price": "\nRs 38,490\n",
            "desc": ["LCD, LED", "48 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L48N/Lloyd_L48N_S_1.jpg",
            "product_name": "Lloyd L48N"
        },
        {
            "price": "\nRs 40,490\n - ",
            "desc": ["LCD, LED", "48 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Lloyd_L48UKT/Lloyd_L48UKT_S_1.jpg",
            "product_name": "Lloyd L48UKT"
        },
        {
            "price": "\nRs 41,399\n",
            "desc": ["LCD, LED", "42 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_42LF5530/LG_42LF5530_S_1.jpg",
            "product_name": "LG 42LF5530"
        },
        {
            "price": "\nRs 42,200\n - ",
            "desc": ["LCD, LED", "42 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_42LF560T/LG_42LF560T_S_1.jpg",
            "product_name": "LG 42LF560T"
        },
        {
            "price": "\nRs 45,400\n - ",
            "desc": ["LED", "43.0 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_43_in_UA43J5100/Samsung_43_in_UA43J5100_S_1.jpg",
            "product_name": "Samsung 43 in. UA43J5100"
        },
        {
            "price": "\nRs 47,157\n - ",
            "desc": ["LCD, LED", "40 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_UA40H4250AR/Samsung_UA40H4250AR_S_1.jpg",
            "product_name": "Samsung UA40H4250AR"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_50C1200FHD/Micromax_50C1200FHD_S_1.jpg",
            "product_name": "Micromax 50C1200FHD"
        },
        {
            "price": "\nRs 14,400\n",
            "desc": ["LCD, LED", "22 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KLV_22P402C/Sony_KLV_22P402C_S_1.jpg",
            "product_name": "Sony KLV-22P402C"
        },
        {
            "price": "\nRs 18,299\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SJV32HH02FA/Sansui_SJV32HH02FA_S_1.jpg",
            "product_name": "SANSUI SJV32HH02FA"
        },
        {
            "price": "\nRs 19,900\n",
            "desc": ["LCD, LED", "28 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_28LF515A/LG_28LF515A_S_1.jpg",
            "product_name": "LG 28LF515A"
        },
        {
            "price": "\nRs 19,990\n - ",
            "desc": ["LCD, LED", "40 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_4001/Intex_LED_4001_S_1.jpg",
            "product_name": "Intex LED 4001"
        },
        {
            "price": "\nRs 32,990\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VKV40FH17XAH/Videocon_VKV40FH17XAH_S_1.jpg",
            "product_name": "Videocon VKV40FH17XAH"
        },
        {
            "price": "\nRs 33,690\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VMA40FH17XAH/Videocon_VMA40FH17XAH_S_1.jpg",
            "product_name": "Videocon VMA40FH17XAH"
        },
        {
            "price": "\nRs 169,900\n",
            "desc": ["LCD, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55UF680T/LG_55UF680T_S_1.jpg",
            "product_name": "LG 55UF680T"
        },
        {
            "price": "\nRs 215,300\n",
            "desc": ["LCD, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KD_55X9000C/Sony_KD_55X9000C_S_1.jpg",
            "product_name": "Sony KD-55X9000C"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "19 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE19P620/Haier_LE19P620_S_1.jpg",
            "product_name": "Haier LE19P620"
        },
        {
            "price": "\nRs 23,900\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32C300DX/Panasonic_TH_32C300DX_S_1.jpg",
            "product_name": "Panasonic TH-32C300DX"
        },
        {
            "price": "\nRs 26,900\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32A405D/Panasonic_TH_32A405D_S_1.jpg",
            "product_name": "Panasonic TH-32A405D"
        },
        {
            "price": "\nRs 29,999\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_40C200DX/Panasonic_TH_40C200DX_S_1.jpg",
            "product_name": "Panasonic TH-40C200DX"
        },
        {
            "price": "\nRs 30,490\n",
            "desc": ["LCD, LED", "39 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_39PFL3850_V7/Philips_39PFL3850_V7_S_1.jpg",
            "product_name": "Philips 39PFL3850/V7"
        },
        {
            "price": "\nRs 67,899\n - ",
            "desc": ["LCD, LED", "49 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_49CS580D/Panasonic_TH_49CS580D_S_1.jpg",
            "product_name": "Panasonic TH-49CS580D"
        },
        {
            "price": "\nRs 199,900\n",
            "desc": ["LCD, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KD_55X8500C/Sony_KD_55X8500C_S_1.jpg",
            "product_name": "Sony KD-55X8500C"
        },
        {
            "price": "\nRs 259,900\n",
            "desc": ["LCD, Smart TV", "60 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_60UF850T/LG_60UF850T_S_1.jpg",
            "product_name": "LG 60UF850T"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LN5650/LG_32LN5650_S_1.jpg",
            "product_name": "LG 32LN5650"
        },
        {
            "price": "\nRs 11,590\n",
            "desc": ["LCD, LED", "22 inches", "1600x900", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SJX22FB02CAF/Sansui_SJX22FB02CAF_S_1.jpg",
            "product_name": "SANSUI SJX22FB02CAF"
        },
        {
            "price": "\nRs 15,990\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE032v12/Mitashi_MiDE032v12_S_1.jpg",
            "product_name": "Mitashi MiDE032v12"
        },
        {
            "price": "\nRs 22,200\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VJU32HH12XAH/Videocon_VJU32HH12XAH_S_1.jpg",
            "product_name": "Videocon VJU32HH12XAH"
        },
        {
            "price": "\nRs 39,100\n",
            "desc": ["LCD, LED", "48 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SKY48FB11FA/Sansui_SKY48FB11FA_S_1.jpg",
            "product_name": "SANSUI SKY48FB11FA"
        },
        {
            "price": "\nRs 79,000\n",
            "desc": ["LCD, LED", "50 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Micromax_50K2330UHD/Micromax_50K2330UHD_S_1.jpg",
            "product_name": "Micromax 50K2330UHD"
        },
        {
            "price": "\nRs 844,354\n",
            "desc": ["LED, Smart TV", "86.00 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_86in_86UH955T/LG_86in_86UH955T_S_1.jpg",
            "product_name": "LG 86 in. 86UH955T"
        },
        {
            "price": "\nRs 2,222,100\n",
            "desc": ["LCD, Smart TV", "98 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_98UB980T/LG_98UB980T_S_1.jpg",
            "product_name": "LG 98UB980T"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32A403DX/Panasonic_TH_32A403DX_S_1.jpg",
            "product_name": "Panasonic TH-32A403DX"
        },
        {
            "price": "\nRs 18,490\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SJX32HB02CAW/Sansui_SJX32HB02CAW_S_1.jpg",
            "product_name": "SANSUI SJX32HB02CAW"
        },
        {
            "price": "\nRs 23,500\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32C403DX/Panasonic_TH_32C403DX_S_1.jpg",
            "product_name": "Panasonic TH-32C403DX"
        },
        {
            "price": "\nRs 24,036\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_32LF505A/LG_32LF505A_S_1.jpg",
            "product_name": "LG 32LF505A"
        },
        {
            "price": "\nRs 26,200\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_4010_FHD/Intex_LED_4010_FHD_S_1.jpg",
            "product_name": "Intex LED 4010 FHD"
        },
        {
            "price": "\nRs 27,600\n - ",
            "desc": ["LCD, LED", "43 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_4300_FHD/Intex_LED_4300_FHD_S_1.jpg",
            "product_name": "Intex LED 4300 FHD"
        },
        {
            "price": "\nRs 49,490\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Haier_LE50B7500/Haier_LE50B7500_S_1.jpg",
            "product_name": "Haier LE50B7500"
        },
        {
            "price": "\nRs 53,990\n",
            "desc": ["LCD, Smart TV", "55 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE055V02/Mitashi_MiDE055V02_S_1.jpg",
            "product_name": "Mitashi MiDE055V02"
        },
        {
            "price": "\nRs 61,500\n - ",
            "desc": ["LCD, Smart TV", "49 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49LF5900/LG_49LF5900_S_1.jpg",
            "product_name": "LG 49LF5900"
        },
        {
            "price": "\nRs 71,000\n",
            "desc": ["LCD, Smart TV", "49 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49LF6310/LG_49LF6310_S_1.jpg",
            "product_name": "LG 49LF6310"
        },
        {
            "price": "\nRs 82,995\n - ",
            "desc": ["LED, Smart TV, LCD", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_Bravia_KDL_50W800D/Sony_Bravia_KDL_50W800D_S_1.jpg",
            "product_name": "Sony Bravia 50 in. KDL-50W800D"
        },
        {
            "price": "\nRs 222,990\n",
            "desc": ["Smart TV, LED", "55.00 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55_in_55SJ850T/LG_55_in_55SJ850T_S_1.jpg",
            "product_name": "LG 55 in. 55SJ850T"
        },
        {
            "price": "\nRs 299,290\n - ",
            "desc": ["QLED, Smart TV", "55.00 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Samsung_QA55Q8CAMK/Samsung_QA55Q8CAMK_S_1.jpg",
            "product_name": "Samsung 55 in. QA55Q8CAMK"
        },
        {
            "price": "\nRs 11,490\n",
            "desc": ["LCD, LED", "20 inches", "1600x900", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SKN20HH07F/Sansui_SKN20HH07F_S_1.jpg",
            "product_name": "SANSUI SKN20HH07F"
        },
        {
            "price": "\nRs 11,870\n",
            "desc": ["LCD, LED", "22 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VMA22FH02CAW/Videocon_VMA22FH02CAW_S_1.jpg",
            "product_name": "Videocon VMA22FH02CAW"
        },
        {
            "price": "\nRs 21,999\n",
            "desc": ["LCD, LED", "31 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Intex_LED_3110/Intex_LED_3110_S_1.jpg",
            "product_name": "Intex LED 3110"
        },
        {
            "price": "\nRs 30,100\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_32PFL5039_V7/Philips_32PFL5039_V7_S_1.jpg",
            "product_name": "Philips 32PFL5039/V7"
        },
        {
            "price": "\nRs 39,900\n - ",
            "desc": ["LCD, LED", "42 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_42C410D/Panasonic_TH_42C410D_S_1.jpg",
            "product_name": "Panasonic TH-42C410D"
        },
        {
            "price": "\nRs 62,000\n - ",
            "desc": ["LED, Smart TV", "43.00 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_65_65UH650T/LG_65_65UH650T_S_1.jpg",
            "product_name": "LG 43 in. 43UH650T"
        },
        {
            "price": "\nRs 97,897\n - ",
            "desc": ["LED, Smart TV", "49.00 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_49_in_49UH770T/LG_49_in_49UH770T_S_1.jpg",
            "product_name": "LG 49 in. 49UH770T"
        },
        {
            "price": "\nRs 284,900\n",
            "desc": ["LCD, LED, Smart TV", "65 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KD_55X9300D/Sony_KD_55X9300D_S_1.jpg",
            "product_name": "Sony Bravia 65 in. KD-65X9300D"
        },
        {
            "price": "\nRs 9,990\n",
            "desc": ["LCD, LED", "20 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiE020v10/Mitashi_MiE020v10_S_1.jpg",
            "product_name": "Mitashi MiE020v10"
        },
        {
            "price": "\nRs 12,500\n",
            "desc": ["LCD, LED", "23 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_23A403DX/Panasonic_TH_23A403DX_S_1.jpg",
            "product_name": "Panasonic TH-23A403DX"
        },
        {
            "price": "\nRs 31,900\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32AS610D/Panasonic_TH_32AS610D_S_1.jpg",
            "product_name": "Panasonic TH-32AS610D"
        },
        {
            "price": "\nRs 39,100\n",
            "desc": ["LCD, LED", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SMC50FH16X/Sansui_SMC50FH16X_S_1.jpg",
            "product_name": "SANSUI SMC50FH16X"
        },
        {
            "price": "\nRs 46,000\n",
            "desc": ["LCD, Smart TV", "50 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SMC50FH18X/Sansui_SMC50FH18X_S_1.jpg",
            "product_name": "SANSUI SMC50FH18X"
        },
        {
            "price": "\n-\n",
            "desc": ["LCD, Smart TV", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sony_KD_55X9300C/Sony_KD_55X9300C_S_1.jpg",
            "product_name": "Sony KD-55X9300C"
        },
        {
            "price": "\nRs 11,990\n",
            "desc": ["LCD, LED", "22 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE022v16/Mitashi_MiDE022v16_S_1.jpg",
            "product_name": "Mitashi MiDE022v16"
        },
        {
            "price": "\nRs 18,500\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE032v10/Mitashi_MiDE032v10_S_1.jpg",
            "product_name": "Mitashi MiDE032v10"
        },
        {
            "price": "\nRs 25,150\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32CS510D/Panasonic_TH_32CS510D_S_1.jpg",
            "product_name": "Panasonic TH-32CS510D"
        },
        {
            "price": "\nRs 26,400\n",
            "desc": ["LCD, LED", "39 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_39PFL3830_V7/Philips_39PFL3830_V7_S_1.jpg",
            "product_name": "Philips 39PFL3830/V7"
        },
        {
            "price": "\nRs 47,900\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_40SV7D/Panasonic_TH_40SV7D_S_1.jpg",
            "product_name": "Panasonic TH-40SV7D"
        },
        {
            "price": "\nRs 13,790\n",
            "desc": ["LCD, LED", "24 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_VJY24FH07F/Videocon_VJY24FH07F_S_1.jpg",
            "product_name": "Videocon VJY24FH07F"
        },
        {
            "price": "\nRs 17,500\n",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_32PFL3230_V7/Philips_32PFL3230_V7_S_1.jpg",
            "product_name": "Philips 32PFL3230/V7"
        },
        {
            "price": "\nRs 32,000\n - ",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_40C400D/Panasonic_TH_40C400D_S_1.jpg",
            "product_name": "Panasonic TH-40C400D"
        },
        {
            "price": "\nRs 189,990\n",
            "desc": ["LED, Smart TV", "60.00 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_60_in_60UH770T/LG_60_in_60UH770T_S_1.jpg",
            "product_name": "LG 60 in. 60UH770T"
        },
        {
            "price": "\nRs 11,900\n",
            "desc": ["LCD, LED", "20 inches", "1600x900", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Videocon_IVC20F02A/Videocon_IVC20F02A_S_1.jpg",
            "product_name": "Videocon IVC20F02A"
        },
        {
            "price": "\nRs 13,990\n",
            "desc": ["LCD, LED", "24 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Mitashi_MiDE024v16/Mitashi_MiDE024v16_S_1.jpg",
            "product_name": "Mitashi MiDE024v16"
        },
        {
            "price": "\nRs 18,999\n",
            "desc": ["LCD, LED", "20 inches", "1600x900", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Sansui_SJX20HB02F/Sansui_SJX20HB02F_S_1.jpg",
            "product_name": "SANSUI SJX20HB02F"
        },
        {
            "price": "\nRs 27,300\n - ",
            "desc": ["LCD, LED", "32 inches", "1366x768", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_L32SV7D/Panasonic_TH_L32SV7D_S_1.jpg",
            "product_name": "Panasonic TH-L32SV7D"
        },
        {
            "price": "\nRs 30,500\n",
            "desc": ["LCD, LED", "40 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Philips_40PFL4650_V7/Philips_40PFL4650_V7_S_1.jpg",
            "product_name": "Philips 40PFL4650/V7"
        },
        {
            "price": "\nRs 154,900\n",
            "desc": ["LCD, LED", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/LG_55UF670T/LG_55UF670T_S_1.jpg",
            "product_name": "LG 55UF670T"
        },
        {
            "price": "\nRs 175,000\n - ",
            "desc": ["LCD, LED", "55 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_55CX700D/Panasonic_TH_55CX700D_S_1.jpg",
            "product_name": "Panasonic TH-55CX700D"
        },
        {
            "price": "\nRs 299,000\n",
            "desc": ["LCD, LED", "65 inches", "3840x2160", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_65AX800D/Panasonic_TH_65AX800D_S_1.jpg",
            "product_name": "Panasonic TH-65AX800D"
        },
        {
            "price": "\nRs 28,400\n - ",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32C470DX/Panasonic_TH_32C470DX_S_1.jpg",
            "product_name": "Panasonic TH-32C470DX"
        },
        {
            "price": "\nRs 41,500\n",
            "desc": ["LCD, LED", "32 inches", "1920x1080", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tvs/Panasonic_TH_32AS630D/Panasonic_TH_32AS630D_S_1.jpg",
            "product_name": "Panasonic TH-32AS630D"
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
        var description = data_body[i].desc[0] + data_body[i].desc[1] + data_body[i].desc[2];

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
            tv.create({
                price: b[i].price,
                product_name: b[i].product_name,
                description: b[i].description,
                image: b[i].image,
                brand_name: b[i].brand_name
            }).then(function (tv) {
                if (tv) {
                    console.log("Data Stored")
                } else {
                    console.log("Error");
                }
            })
        }

    }
    response.send("tv Submission Done")

});

/*****  Route for fetching all tv info at once ******/

router.get('/all_tv', (request, response) => {
    tv.findAll()
        .then((mobil) => {
            console.log("ok");
            response.send(mobil);

        });
});
/*****  Route for fetching all tv of one brand ******/

router.post('/get_tv_from_brand', (request, response) => {
    tv.findAll({
            where: {
                brand_name: request.body.brand_name
            }
        })
        .then((tv_data) => {
            console.log("ok");
            response.send(tv_data);

        });
});
/*** Route for fetching single tv by id */
router.post('/get_single_tv', (request, response) => {
    tv.findAll({
        where: {
            id: request.body.id
        }
    }).then((tv) => {
        console.log(tv);
        response.send(tv);
    }).catch((error) => {
        alert(error)
    })
})
/***  Route for getting all brands available ***/
router.get('/get_tv_brands', (request, response) => {
    tv.findAll()
        .then(function (tv) {
            var brands = []
            for (var i = 0; i < tv.length; i++) {
                var already_present = false;
                if (i == 0) {
                    brands[i] = tv[i].brand_name
                }
                for (var j = 0; j < i; j++) {
                    if (brands[j] == tv[i].brand_name) {
                        already_present = true;
                    } else {
                        if (j == i - 1 && already_present == false) {
                            brands[brands.length] = tv[i].brand_name
                        } else {

                        }
                    }
                }
            }
            response.send(brands);
        });
});
//route for getting number of devices in etvh brand
router.get('/get_count', (request, response) => {
    var brands = [
    "LG",
    "Apple",
    "Sony",
    "Weston",
    "Intex",
    "Lloyd",
    "SANSUI",
    "Panasonic",
    "Haier",
    "Samsung",
    "Micromax",
    "Videocon",
    "Philips",
    "Mitashi"
]
    var a = []
    var k = 0
    var check = false;
    for (var i = 0; i < brands.length; i++) {
        tv.findAll({
                where: {
                    brand_name: brands[i]
                }
            }).then((tv) => {
                a[k] = tv.length + "," + tv[0].brand_name

                k = k + 1;
            })
            .then(() => {
                console.log("length of a " + a.length)
                if (a.length == 14 && check == false) {
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