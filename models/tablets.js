var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),

    tablets = connection.seq.define('tablets', {
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


tablets.sync();
/*****  Route for storing AC Information *****/

router.get('/submit_tablets', (request, response) => {
    var data_body = [{
            "price": "\n-\n",
            "desc": ["Android 5.0.2 Lollipop", "8.0 Inches, 1536 x 2048 pixels", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_GalaxyTab_S2/Samsung_GalaxyTab_S2_S_1.jpg",
            "product_name": "Samsung Galaxy Tab S2 8.0 SM-T715 - LTE 64GB"
        },
        {
            "price": "\nRs 11,250\n - ",
            "desc": ["Android 4.4.2 KitKat", "10.1 inches (~68.9% screen-to-body rati...", "2G, 3G, 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_4_101/Samsung_Galaxy_Tab_4_101_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 4 10.1 3G"
        },
        {
            "price": "\nRs 8,499\n - ",
            "desc": ["Android 4.4 KitKat", "7.0 inches (~61.3% screen-to-body ratio...", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_3_V/Samsung_Galaxy_Tab_3_V_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 3 V"
        },
        {
            "price": "\nRs 15,500\n - ",
            "desc": ["Android 4.4 KitKat", "24.38 cm (9.6), 1280 x 800 (WXGA)", "2G, 3G, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_E_561/Samsung_Galaxy_Tab_E_561_S_1.jpg",
            "product_name": "Samsung Galaxy TAB E-T561"
        },
        {
            "price": "\nRs 7,999\n - ",
            "desc": ["7 inches , 1024 x 600", "2G, 3G, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_3_Neo/Samsung_Galaxy_Tab_3_Neo_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 3 Neo"
        },
        {
            "price": "\nRs 11,800\n - ",
            "desc": ["Android 5.1", "7.0 inches, 800 x 1280 pixels", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_J_Max/Samsung_Galaxy_J_Max_S_1.jpg",
            "product_name": "Samsung Galaxy J Max"
        },
        {
            "price": "\n-\n",
            "desc": ["Lolipop 5.1", "18.4 inches (~74.9% screen-to-body rati...", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_View/Samsung_Galaxy_View_S_1.jpg",
            "product_name": "Samsung Galaxy View SM-T670 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 5.0 Lollipop", "8.0 inches, 768 x 1024 pixels (~160 ppi...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_A_80/Samsung_Galaxy_Tab_A_80_S_1.jpg",
            "product_name": "Samsung Galaxy Tab A 8.0 SM-T350 16GB LTE"
        },
        {
            "price": "\nRs 37,500\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "10.1 inches (~62.7% screen-to-body rati...", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Note_101/Samsung_Galaxy_Note_101_S_1.jpg",
            "product_name": "Samsung Galaxy Note 10.1 N8000 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows 10 Pro", "12.30 inches, 2736 x 1824 (267 PPI)\r\n10...", "4G (LTE), 128GB, 1TB, 256GB, 512GB, 16G...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Microsoft_Surface_Pro_2017/Microsoft_Surface_Pro_2017_S_1.jpg",
            "product_name": "Microsoft Surface Pro (2017)"
        },
        {
            "price": "\nRs 17,590\n - ",
            "desc": ["Android 4.2.2 Jelly Bean", "8.0 inches (~71.4% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_3_80/Samsung_Galaxy_Tab_3_80_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 3 8.0 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.4 KitKat", "7 inches, 1280 x 800", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Dell_Venue_7_3740/Dell_Venue_7_3740_S_1.jpg",
            "product_name": "Dell Venue 7 3740"
        },
        {
            "price": "\nRs 9,334\n - ",
            "desc": ["Android 4.3 Jelly Bean", "10.1 inches (~63.0% screen-to-body rati...", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_Yoga_Tablet_10_HD/Lenovo_Yoga_Tablet_10_HD_S_1.jpg",
            "product_name": "Lenovo Yoga Tablet 10 HD+ 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android OS, v6.0 (Marshmallow)", "10.1 inches, 1200 x 1920 pixels", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_A_2016_/Samsung_Galaxy_Tab_A_2016__S_1.jpg",
            "product_name": "Samsung Galaxy Tab A 10.1 (2016)"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows RT 8.1", "10.6 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Microsoft_Surface_2/Microsoft_Surface_2_S_1.jpg",
            "product_name": "Microsoft Surface 2 32GB Wi-Fi + 4G LTE"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 6.0", "9.7 inches, QXGA (1536 x 2048)", "2G, 3G, 4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_ZenPad_3S_10_Z500KL/ASUS_ZenPad_3S_10_Z500KL_S_1.jpg",
            "product_name": "ASUS ZenPad 3S 10 Z500KL"
        },
        {
            "price": "\nRs 51,900\n",
            "desc": ["iOS 6", "9.7 inches (~65.1% screen-to-body ratio...", "2G, 3G, 4G (LTE), 64GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_4/Apple_iPad_4_S_1.jpg",
            "product_name": "Apple iPad 4 Wi-Fi + Cellular 64GB"
        },
        {
            "price": "\nRs 15,455\n - ",
            "desc": ["Android 5.0 Lollipop", "8.4 inch, 1600 x 2560 pixels (~359 ppi ...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Dell_Venue_8_7000/Dell_Venue_8_7000_S_1.jpg",
            "product_name": "Dell Venue 8 7000 16GB"
        },
        {
            "price": "\nRs 36,000\n",
            "desc": ["Android 4.4 KitKat", "12.2 inches (~71.6% screen-to-body rati...", "2G, 3G, 4G (LTE), 64GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Note_Pro_122/Samsung_Galaxy_Note_Pro_122_S_1.jpg",
            "product_name": "Samsung Galaxy Note Pro 12.2 LTE 64GB"
        },
        {
            "price": "\nRs 47,990\n",
            "desc": ["Android N", "9.7 inches, QXGA (2048 x 1536) \r\nsAMOLED", "4G (LTE), 32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_S3/Samsung_Galaxy_Tab_S3_S_1.jpg",
            "product_name": "Samsung Galaxy Tab S3"
        },
        {
            "price": "\nRs 13,490\n - ",
            "desc": ["Android 4.2 Jelly Bean", "7.0 inches (~61.3% screen-to-body ratio...", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_3_Lite_70/Samsung_Galaxy_Tab_3_Lite_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 3 Lite 7.0 3G"
        },
        {
            "price": "\nRs 12,620\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "7.0 inches (~58.2% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_2_70/Samsung_Galaxy_Tab_2_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 2 7.0 P3110 16GB"
        },
        {
            "price": "\nRs 3,150\n - ",
            "desc": ["Android 4.4.2 KitKat", "7 inches, 800 x 480", "2G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/DataWind_UbiSlate_7Cz/DataWind_UbiSlate_7Cz_S_1.jpg",
            "product_name": "DataWind UbiSlate 7Cz"
        },
        {
            "price": "\nRs 27,900\n - ",
            "desc": ["iOS 6", "7.9 inches (~71.7% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini/Apple_iPad_mini_S_1.jpg",
            "product_name": "Apple iPad mini Wi-Fi + Cellular 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["12.6 inches, 2880 x 1920", "1TB, 16GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Transformer3_Pro/ASUS_Transformer3_Pro_S_1.jpg",
            "product_name": "ASUS Transformer 3 Pro"
        },
        {
            "price": "\nRs 80,900\n - ",
            "desc": ["iOS 9", "12.9 inches, 2732-by-2048 resolution at...", "2G, 3G, 4G (LTE), 128GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Pro/Apple_iPad_Pro_S_1.jpg",
            "product_name": "Apple iPad Pro 12.9 WiFi+Cellular 128GB (Late 2015)"
        },
        {
            "price": "\nRs 62,290\n - ",
            "desc": ["Windows 10 Pro", "12.3inches, 2736 x 1824 (267 PPI)", "128GB, 4GB, 8GB, 16GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Microsoft_Surface_Pro4/Microsoft_Surface_Pro4_S_1.jpg",
            "product_name": "Microsoft Surface Pro 4 128GB"
        },
        {
            "price": "\nRs 23,275\n",
            "desc": ["iOS 4", "9.7 inches (~65.1% screen-to-body ratio...", "16GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_2/Apple_iPad_2_S_1.jpg",
            "product_name": "Apple iPad 2 Wi-Fi 16GB"
        },
        {
            "price": "\nRs 40,823\n",
            "desc": ["Android 4.2.2 Jelly Bean", "10.1 inches (~69.1% screen-to-body rati...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_3_101/Samsung_Galaxy_Tab_3_101_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 3 10.1 P5200 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.4 KitKat", "12.2 inches (~71.6% screen-to-body rati...", "32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Note_Pro_122/Samsung_Galaxy_Note_Pro_122_S_1.jpg",
            "product_name": "Samsung Galaxy Note Pro 12.2 32GB"
        },
        {
            "price": "\nRs 33,900\n",
            "desc": ["Android 4.4.2 KitKat", "10.5 inches (~72.9% screen-to-body rati...", "16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_S_105/Samsung_Galaxy_Tab_S_105_S_1.jpg",
            "product_name": "Samsung Galaxy Tab S 10.5 16GB"
        },
        {
            "price": "\nRs 16,018\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "7.0 inches (~58.2% screen-to-body ratio...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_2_70/Samsung_Galaxy_Tab_2_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 2 7.0 P3100 16GB"
        },
        {
            "price": "\nRs 45,876\n - ",
            "desc": ["iOS 10", "7.9 inches, 2048-by-1536 resolution at ...", "2G, 3G, 4G (LTE), 128GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_4/Apple_iPad_mini_4_S_1.jpg",
            "product_name": "Apple iPad mini 4 WiFi+Cellular 128GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android with MIUI8", "7.90 inches, 1536 x 2048 pixels\r\nIPS LC...", "64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Xiaomi_Mi_Pad_3/Xiaomi_Mi_Pad_3_S_1.jpg",
            "product_name": "Xiaomi Mi Pad 3"
        },
        {
            "price": "\nRs 38,400\n - ",
            "desc": ["Android 5.0.2 Lollipop", "9.7 Inches, 1536 x 2048 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_S2_9_7/Samsung_Galaxy_Tab_S2_9_7_S_1.jpg",
            "product_name": "Samsung Galaxy Tab S2 9.7 LTE 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 7.1 with ZenUI 3.5", "7.9 inches, 2048 x 1536 Pixels \r\n2K wit...", "2G, 3G, 4G (LTE), 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_ZenPad_3S_10_Z500KL/ASUS_ZenPad_3S_10_Z500KL_S_1.jpg",
            "product_name": "ASUS ZenPad 3S 8.0 Z582KL"
        },
        {
            "price": "\nRs 29,399\n - ",
            "desc": ["iOS 4", "9.7 inches (~65.1% screen-to-body ratio...", "2G, 3G, 32GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_2/Apple_iPad_2_S_1.jpg",
            "product_name": "Apple iPad 2 Wi-Fi + 3G 32GB"
        },
        {
            "price": "\nRs 12,744\n - ",
            "desc": ["Android v5.1 Lollipop", "8.0 inches, 1280 x 800", "16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_Yoga_Tab_3_8/Lenovo_Yoga_Tab_3_8_S_1.jpg",
            "product_name": "Lenovo Yoga Tab 3 8"
        },
        {
            "price": "\nRs 41,190\n - ",
            "desc": ["Windows 8.1", "10.8 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 64GB, 2GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Microsoft_Surface_3/Microsoft_Surface_3_S_1.jpg",
            "product_name": "Microsoft Surface 3 64GB Wi-Fi + 4G LTE"
        },
        {
            "price": "\n-\n",
            "desc": ["7.9 inches (~70.7% screen-to-body ratio...", "16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Xiaomi_Mi_Pad_79/Xiaomi_Mi_Pad_79_S_1.jpg",
            "product_name": "Xiaomi Mi Pad 7.9 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows 8.1", "8 inches, 1280 x 800", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Dell_Venue_8_Pro/Dell_Venue_8_Pro_S_1.jpg",
            "product_name": "Dell Venue 8 Pro 32GB"
        },
        {
            "price": "\nRs 39,990\n",
            "desc": ["Android OS v5.1", "10.10 inches, 10.1\" QHD (2560 x 1600), ...", "2G, 3G, 4G (LTE), 16GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/LENOVO_YOGA_TAB_3_PRO/LENOVO_YOGA_TAB_3_PRO_S_1.jpg",
            "product_name": "Lenovo Yoga Tab 3 Pro 10"
        },
        {
            "price": "\nRs 22,690\n - ",
            "desc": ["Windows 8.1", "10.8 inches, 1920 x 1080", "64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Dell_Venue_11_Pro/Dell_Venue_11_Pro_S_1.jpg",
            "product_name": "Dell Venue 11 Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 7.0 with EMUI5.1", "10 inches, 1920 x 1200 IPS", "4G (LTE), 16GB, 32GB, 64GB, 3GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Huawei_MediaPad_M3_Lite_10/Huawei_MediaPad_M3_Lite_10_S_1.jpg",
            "product_name": "Huawei MediaPad M3 Lite 10"
        },
        {
            "price": "\nRs 16,500\n",
            "desc": ["Android OS, v5.0 (Lollipop)", "8.0 inches, HD (1280 x 720 Pixel)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_A_T355/Samsung_Galaxy_Tab_A_T355_S_1.jpg",
            "product_name": "Samsung Galaxy Tab A 8.0 SM-T355"
        },
        {
            "price": "\nRs 48,000\n",
            "desc": ["Android 5.0 Lollipop", "10.1inches, 2560 x 1600 pixels", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/SONY_Xperia_Z4_tablet/SONY_Xperia_Z4_tablet_S_1.jpg",
            "product_name": "Sony Xperia Z4 Tablet"
        },
        {
            "price": "\nRs 31,900\n",
            "desc": ["iOS 10", "7.9 inches, 2048x1536 resolution at 326...", "32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_4/Apple_iPad_mini_4_S_1.jpg",
            "product_name": "Apple iPad mini 4 WiFi 32GB"
        },
        {
            "price": "\nRs 4,000\n",
            "desc": ["Android Lollipop 5.0", "7 inches, 1024 X 600", "2G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P290/Micromax_Canvas_Tab_P290_S_1.jpg",
            "product_name": "Micromax Canvas Tab P290"
        },
        {
            "price": "\n-\n",
            "desc": ["12.6 inches, 2880 x 1920", "512GB, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Transformer_3/ASUS_Transformer_3_S_1.jpg",
            "product_name": "ASUS Transformer 3"
        },
        {
            "price": "\nRs 7,501\n",
            "desc": ["BlackBerry Tablet OS", "7.0 inches (~54.7% screen-to-body ratio...", "2G, 3G, 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/BlackBerry_PlayBook/BlackBerry_PlayBook_S_1.jpg",
            "product_name": "BlackBerry 4G PlayBook HSPA+ 32GB"
        },
        {
            "price": "\nRs 29,900\n - ",
            "desc": ["9.7 inches (~71.6% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air_2/Apple_iPad_Air_2_S_1.jpg",
            "product_name": "Apple iPad Air 2 WiFi+Cellular 16GB"
        },
        {
            "price": "\nRs 45,900\n",
            "desc": ["iOS 10", "7.9 inches, 2048-by-1536 resolution at ...", "2G, 3G, 4G (LTE), 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_4/Apple_iPad_mini_4_S_1.jpg",
            "product_name": "Apple iPad mini 4 WiFi+Cellular 64GB"
        },
        {
            "price": "\nRs 5,190\n",
            "desc": ["Windows 8.1", "7 inches, 1024 x 600", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_i701/iBall_Slide_i701_S_1.jpg",
            "product_name": "iBall Slide i701"
        },
        {
            "price": "\nRs 28,000\n",
            "desc": ["iOS 4", "9.7 inches (~65.1% screen-to-body ratio...", "64GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_2/Apple_iPad_2_S_1.jpg",
            "product_name": "Apple iPad 2 Wi-Fi 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.2 Jelly Bean", "7.0 inches (~60.2% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Fonepad_7/ASUS_Fonepad_7_S_1.jpg",
            "product_name": "ASUS Fonepad 7 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows 10 Home", "10.10 inches, WQXGA (2560 x 1600)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_Yoga_Tab_3_Plus/Lenovo_Yoga_Tab_3_Plus_S_1.jpg",
            "product_name": "Lenovo Yoga Tab 3 Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows 10 64-bit Home", "12 inches, 2160 x 1440 piksel, IPS", "128GB, 256GB, 512GB, 4GB, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HUAWEI_Matebook_E/HUAWEI_Matebook_E_S_1.jpg",
            "product_name": "Huawei MateBook E"
        },
        {
            "price": "\nRs 17,890\n",
            "desc": ["BlackBerry Tablet OS 2.0", "7.0 inches (~54.7% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/BlackBerry_PlayBook/BlackBerry_PlayBook_S_1.jpg",
            "product_name": "BlackBerry 4G LTE PlayBook"
        },
        {
            "price": "\nRs 6,999\n - ",
            "desc": ["Android Lollipop 5.1", "7 inches, 1024 x 600", "2G, 3G, 4G (LTE), 8GB, 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P701/Micromax_Canvas_Tab_P701_S_1.jpg",
            "product_name": "Micromax Canvas Tab P701"
        },
        {
            "price": "\nRs 4,699\n",
            "desc": ["Android 4.4.2 KitKat", "9 inches, 800 x 480", "4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/DataWind_Ubislate_9Ci/DataWind_Ubislate_9Ci_S_1.jpg",
            "product_name": "DataWind Ubislate 9Ci"
        },
        {
            "price": "\nRs 4,690\n - ",
            "desc": ["Android KitKat 4.4", "7 inches, 1024 x 600", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P70221/Micromax_Canvas_Tab_P70221_S_1.jpg",
            "product_name": "Micromax Canvas Tab P70221"
        },
        {
            "price": "\nRs 34,900\n - ",
            "desc": ["iOS 10", "7.9 inches, 2048-by-1536 resolution at ...", "128GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_4/Apple_iPad_mini_4_S_1.jpg",
            "product_name": "Apple iPad mini 4 WiFi 128GB"
        },
        {
            "price": "\nRs 44,900\n - ",
            "desc": ["iOS 9", "12.9 inches, 2732-by-2048 resolution at...", "32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Pro/Apple_iPad_Pro_S_1.jpg",
            "product_name": "Apple iPad Pro 12.9 WiFi 32GB (Late 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["iOS 6", "9.7 inches (~65.1% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_4/Apple_iPad_4_S_1.jpg",
            "product_name": "Apple iPad 4 Wi-Fi 16GB"
        },
        {
            "price": "\nRs 28,999\n",
            "desc": ["Android 4.1.2 Jelly Bean", "10.1 inches (~64.7% screen-to-body rati...", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Sony_Xperia_Tablet_Z/Sony_Xperia_Tablet_Z_S_1.jpg",
            "product_name": "Sony Xperia Tablet Z LTE"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows 10 Home 64-bit", "27.00 inches, 1920 x 1080", "1TB, 500GB, 1.8GB, 4GB, 8GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_Yoga_Home_900/Lenovo_Yoga_Home_900_S_1.jpg",
            "product_name": "Lenovo YOGA Home 900"
        },
        {
            "price": "\n-\n",
            "desc": ["iOS 7", "7.9 inches (~71.7% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_2/Apple_iPad_mini_2_S_1.jpg",
            "product_name": "Apple iPad mini 2 Wi-Fi 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.4 KitKat", "8 inches, 1920 x 1200", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Dell_Venue_8_3840/Dell_Venue_8_3840_S_1.jpg",
            "product_name": "Dell Venue 8 3840"
        },
        {
            "price": "\nRs 17,900\n - ",
            "desc": ["iOS 6", "7.9 inches (~71.7% screen-to-body ratio...", "16GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini/Apple_iPad_mini_S_1.jpg",
            "product_name": "Apple iPad mini Wi-Fi 16GB"
        },
        {
            "price": "\nRs 41,900\n - ",
            "desc": ["9.7 inches (~71.6% screen-to-body ratio...", "2G, 3G, 4G (LTE), 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air_2/Apple_iPad_Air_2_S_1.jpg",
            "product_name": "Apple iPad Air 2 WiFi+Cellular 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows 10 Home", "12 inches, Super AMOLED FHD (2160x1440)", "4G (LTE), 256GB, 128GB, 8GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Book_12_/Samsung_Galaxy_Book_12__S_1.jpg",
            "product_name": "Samsung Galaxy Book 12\u201d"
        },
        {
            "price": "\nRs 12,000\n - ",
            "desc": ["Android 3.0 Honeycomb", "10.1 inches (~64.3% screen-to-body rati...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Iconia_A500/Acer_Iconia_A500_S_1.jpg",
            "product_name": "Acer Iconia A500 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 6.0(Zen UI)", "10.1 inches, 1280x800", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_ZenPad_10/ASUS_ZenPad_10_S_1.jpg",
            "product_name": "ASUS ZenPad 10 \u200fZ300CNL"
        },
        {
            "price": "\nRs 44,900\n - ",
            "desc": ["iOS 9.3", "9.70 inches, 1536 x 2048 pixels", "2G, 3G, 4G (LTE), 128GB, 256GB, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Pro_2016/Apple_iPad_Pro_2016_S_1.jpg",
            "product_name": "Apple iPad Pro 9.7 (Early 2016)"
        },
        {
            "price": "\nRs 55,690\n",
            "desc": ["Windows 8.1", "10.8 inches, 1920 x 1080", "2G, 3G, 4G (LTE), 128GB, 4GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Microsoft_Surface_3/Microsoft_Surface_3_S_1.jpg",
            "product_name": "Microsoft Surface 3 128GB Wi-Fi + 4G LTE"
        },
        {
            "price": "\n-\n",
            "desc": ["iOS 10", "7.9 inches, 2048-by-1536 resolution at ...", "64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_4/Apple_iPad_mini_4_S_1.jpg",
            "product_name": "Apple iPad mini 4 WiFi 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 5.0 Lollipop", "8 inch, 1536 x 2048", "16GB, 2GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_ZenPad_S_8_Z580CA/ASUS_ZenPad_S_8_Z580CA_S_1.jpg",
            "product_name": "ASUS ZenPad S 8.0 Z580CA 16GB"
        },
        {
            "price": "\nRs 19,690\n - ",
            "desc": ["Android 4.4.2 KitKat", "8.0 inches (~71.3% screen-to-body ratio...", "16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_4_80/Samsung_Galaxy_Tab_4_80_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 4 8.0"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 7.0", "10.1 inches, Full HD (1920 x 1200)", "3G, 4G (LTE), 16GB, 32GB, 64GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_ZenPad_10_Z301ML/ASUS_ZenPad_10_Z301ML_S_1.jpg",
            "product_name": "ASUS ZenPad 10 Z301MFL"
        },
        {
            "price": "\nRs 25,900\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "10.1 inches (~65.8% screen-to-body rati...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_2_101/Samsung_Galaxy_Tab_2_101_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 2 10.1 P5100 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Jelly Bean 4.2", "7.0 inches (~61.3% screen-to-body ratio...", "8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_3_Lite_70/Samsung_Galaxy_Tab_3_Lite_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 3 Lite 7.0"
        },
        {
            "price": "\nRs 26,790\n - ",
            "desc": ["iOS 8.1, upgradable to iOS 10.3", "9.70 inches, 2048 x 1536-pixel resoluti...", "32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air_2/Apple_iPad_Air_2_S_1.jpg",
            "product_name": "Apple iPad Air 2 WiFi 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 2.3 Gingerbread", "7.0 inches (~60.5% screen-to-body ratio...", "8GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Amazon_Kindle_Fire/Amazon_Kindle_Fire_S_1.jpg",
            "product_name": "Amazon Kindle Fire"
        },
        {
            "price": "\nRs 6,199\n",
            "desc": ["Android 4.4.2 KitKat", "7 inches, 1024 x 600", "2G, 3G, 4GB, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/DataWind_Ubislate_3G7/DataWind_Ubislate_3G7_S_1.jpg",
            "product_name": "DataWind Ubislate 3G7"
        },
        {
            "price": "\nRs 36,000\n",
            "desc": ["Android 5.0.2 Lollipop", "8.4 inch, 2560 x 1600", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Dell_Venue_8_7000/Dell_Venue_8_7000_S_1.jpg",
            "product_name": "Dell Venue 8 7000 32GB"
        },
        {
            "price": "\nRs 77,990\n - ",
            "desc": ["Windows 10 Pro", "12.3inches, 2736 x 1824 (267 PPI)", "256GB, 4GB, 8GB, 16GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Microsoft_Surface_Pro4/Microsoft_Surface_Pro4_S_1.jpg",
            "product_name": "Microsoft Surface Pro 4 256GB"
        },
        {
            "price": "\nRs 9,150\n",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches (~57.3% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_IdeaTab_A1000/Lenovo_IdeaTab_A1000_S_1.jpg",
            "product_name": "Lenovo IdeaTab A1000 16GB"
        },
        {
            "price": "\nRs 51,900\n - ",
            "desc": ["iOS 9", "12.9 inches, 2732-by-2048 resolution at...", "128GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Pro/Apple_iPad_Pro_S_1.jpg",
            "product_name": "Apple iPad Pro 12.9 WiFi 128GB (Late 2015)"
        },
        {
            "price": "\nRs 3,599\n - ",
            "desc": ["Android 4.4 KitKat", "7 inches, 1024 x 600", "8GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_6351_Q40i/iBall_Slide_6351_Q40i_S_1.jpg",
            "product_name": "iBall Slide 6351-Q40i"
        },
        {
            "price": "\nRs 42,655\n - ",
            "desc": ["iOS 4", "9.7 inches (~65.1% screen-to-body ratio...", "2G, 3G, 64GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_2/Apple_iPad_2_S_1.jpg",
            "product_name": "Apple iPad 2 Wi-Fi + 3G 64GB"
        },
        {
            "price": "\nRs 59,890\n",
            "desc": ["Android 4.4.2 KitKat", "10.1 inches (~68.9% screen-to-body rati...", "16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_4_101/Samsung_Galaxy_Tab_4_101_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 4 10.1"
        },
        {
            "price": "\nRs 16,878\n - ",
            "desc": ["Android 4.1 Jelly Bean", "7 Inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_GalaxyTab3_7_0_T2110_8GB/Samsung_GalaxyTab3_7_0_T2110_8GB_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 3 7.0 T2110 8GB"
        },
        {
            "price": "\nRs 34,999\n - ",
            "desc": ["iOS 5.1", "9.7 inches (~65.1% screen-to-body ratio...", "64GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_3/Apple_iPad_3_S_1.jpg",
            "product_name": "Apple iPad 3 Wi-Fi 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.0 Ice Cream Sandwich", "7.0 inches (~53.7% screen-to-body ratio...", "32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Amazon_Kindle_Fire_HD/Amazon_Kindle_Fire_HD_S_1.jpg",
            "product_name": "Amazon Kindle Fire HD 32GB"
        },
        {
            "price": "\nRs 4,132\n - ",
            "desc": ["Android 4.4.2 KitKat", "10.1 inches, 1024 x 600", "4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/DataWind_Ubislate_10Ci/DataWind_Ubislate_10Ci_S_1.jpg",
            "product_name": "DataWind Ubislate 10Ci"
        },
        {
            "price": "\nRs 4,499\n - ",
            "desc": ["Android 4.4 KitKat", "7 inches, WSVGA 1024*600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P480/Micromax_Canvas_Tab_P480_S_1.jpg",
            "product_name": "Micromax Canvas Tab P480"
        },
        {
            "price": "\nRs 45,900\n",
            "desc": ["iOS 6", "9.7 inches (~65.1% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_4/Apple_iPad_4_S_1.jpg",
            "product_name": "Apple iPad 4 Wi-Fi + Cellular 32GB"
        },
        {
            "price": "\nRs 4,990\n - ",
            "desc": ["Android 4.2.2 Jelly Bean", "7 inches, 800 x 480", "4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_7236_2G/iBall_Slide_7236_2G_S_1.jpg",
            "product_name": "iBall Slide 7236 2G"
        },
        {
            "price": "\nRs 10,499\n",
            "desc": ["Android 4.3 Jelly Bean", "7 Inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Fonepad_7_FE170CG/ASUS_Fonepad_7_FE170CG_S_1.jpg",
            "product_name": "ASUS Fonepad 7 (FE170CG) 8GB"
        },
        {
            "price": "\nRs 13,999\n",
            "desc": ["Android 4.2.2 Jelly Bean", "7.0 Inches, 800 x 1280 pixels", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HP_Slate_7_VoiceTab_In/HP_Slate_7_VoiceTab_In_S_1.jpg",
            "product_name": "HP Slate 7 VoiceTab"
        },
        {
            "price": "\nRs 31,699\n - ",
            "desc": ["iOS 4", "9.7 inches (~65.1% screen-to-body ratio...", "2G, 3G, 16GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_2/Apple_iPad_2_S_1.jpg",
            "product_name": "Apple iPad 2 Wi-Fi + 3G 16GB"
        },
        {
            "price": "\nRs 3,044\n - ",
            "desc": ["Android 4.2.2 Jelly Bean", "7 inches, 800 x 480", "2G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/DataWind_Ubislate_7C_Edge/DataWind_Ubislate_7C_Edge_S_1.jpg",
            "product_name": "DataWind Ubislate 7C+ Edge"
        },
        {
            "price": "\nRs 51,990\n",
            "desc": ["iOS 6", "7.9 inches (~71.7% screen-to-body ratio...", "2G, 3G, 4G (LTE), 64GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini/Apple_iPad_mini_S_1.jpg",
            "product_name": "Apple iPad mini Wi-Fi + Cellular 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 7.0 Nougat", "8 inches, HD (800 x 1280)", "2G, 3G, 4G (LTE), 32GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Huawei_MediaPad_T3_concept/Huawei_MediaPad_T3_concept_S_1.jpg",
            "product_name": "Huawei MediaPad T3 8.0"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "9.4 inches (~61.3% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Sony_Xperia_Tablet_S/Sony_Xperia_Tablet_S_S_1.jpg",
            "product_name": "Sony Xperia Tablet S 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 5.0 Lollipop", "10.1 inches, 1920 x 1200", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Dell_Venue_10_5050/Dell_Venue_10_5050_S_1.jpg",
            "product_name": "Dell Venue 10 5050 16GB"
        },
        {
            "price": "\nRs 30,500\n - ",
            "desc": ["iOS 5.1", "9.7 inches (~65.1% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_3/Apple_iPad_3_S_1.jpg",
            "product_name": "Apple iPad 3 Wi-Fi 16GB"
        },
        {
            "price": "\nRs 49,490\n",
            "desc": ["Windows RT", "10.6 inches, 1366 x 768", "32GB, 2GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Microsoft_Surface_RT/Microsoft_Surface_RT_S_1.jpg",
            "product_name": "Microsoft Surface RT 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 5.1 (Lollipop)", "18.4 inches (~74.9% screen-to-body rati...", "2G, 3G, 4G (LTE), 64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_View/Samsung_Galaxy_View_S_1.jpg",
            "product_name": "Samsung Galaxy View SM-T670 64GB"
        },
        {
            "price": "\nRs 7,799\n - ",
            "desc": ["Android 5.0", "8 inches, 800 x 1280", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P680/Micromax_Canvas_Tab_P680_S_1.jpg",
            "product_name": "Micromax Canvas Tab P680"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7.0 inches, 480 x 800 pixels (~133 ppi ...", "4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Funbook_Infinity_P275/Micromax_Funbook_Infinity_P275_S_1.jpg",
            "product_name": "Micromax Funbook Infinity P275"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows 10 Home,\r\nAndroid 6.0", "10.1 inches, FHD IPS (1920 x 1200)", "2G, 3G, 4G (LTE), 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_Yoga_Book/Lenovo_Yoga_Book_S_1.jpg",
            "product_name": "Lenovo Yoga Book"
        },
        {
            "price": "\nRs 17,999\n",
            "desc": ["Android 4.4.2 KitKat", "7.0 inches (~70.5% screen-to-body ratio...", "2G, 3G, 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_4_70/Samsung_Galaxy_Tab_4_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 4 7.0 3G 8GB"
        },
        {
            "price": "\nRs 38,900\n",
            "desc": ["iOS 10", "7.9 inches, 2048-by-1536 resolution at ...", "16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_4/Apple_iPad_mini_4_S_1.jpg",
            "product_name": "Apple iPad mini 4 WiFi 16GB"
        },
        {
            "price": "\nRs 30,862\n - ",
            "desc": ["iOS 10", "7.9 inches, 2048-by-1536 resolution at ...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_4/Apple_iPad_mini_4_S_1.jpg",
            "product_name": "Apple iPad mini 4 WiFi+Cellular 16GB"
        },
        {
            "price": "\nRs 3,699\n - ",
            "desc": ["Android 4.2.2 Jelly Bean", "7 inches, 1024 x 600", "2G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_ST72/Karbonn_ST72_S_1.jpg",
            "product_name": "Karbonn ST72"
        },
        {
            "price": "\nRs 31,550\n - ",
            "desc": ["iOS 7", "7.9 inches (~71.7% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_2/Apple_iPad_mini_2_S_1.jpg",
            "product_name": "Apple iPad mini 2 Wi-Fi + Cellular 32GB"
        },
        {
            "price": "\nRs 3,769\n - ",
            "desc": ["Android 4.0 Ice Cream Sandwich", "8 inches, 800 x 480", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Zen_Ultratab_A900/Zen_Ultratab_A900_S_1.jpg",
            "product_name": "Zen Ultratab A900"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "10.1 inches (~62.7% screen-to-body rati...", "2G, 3G, 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Note_101/Samsung_Galaxy_Note_101_S_1.jpg",
            "product_name": "Samsung Galaxy Note 10.1 N8000 32GB"
        },
        {
            "price": "\nRs 3,799\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7 inches, 800 x 480", "2G, Less than 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/DataWind_Ubislate_7Cx/DataWind_Ubislate_7Cx_S_1.jpg",
            "product_name": "DataWind Ubislate 7Cx"
        },
        {
            "price": "\nRs 27,900\n",
            "desc": ["Android 4.4.2 KitKat", "8.4 inches (~76.5% screen-to-body ratio...", "16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_S_84/Samsung_Galaxy_Tab_S_84_S_1.jpg",
            "product_name": "Samsung Galaxy Tab S 8.4 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 5.0 Lollipop", "8 inch, 1536 x 2048", "64GB, 2GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_ZenPad_S_8_Z580CA/ASUS_ZenPad_S_8_Z580CA_S_1.jpg",
            "product_name": "ASUS ZenPad S 8.0 Z580CA 64GB"
        },
        {
            "price": "\nRs 27,990\n - ",
            "desc": ["iOS 8.1", "9.7 inches (~71.6% screen-to-body ratio...", "16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air_2/Apple_iPad_Air_2_S_1.jpg",
            "product_name": "Apple iPad Air 2 WiFi 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1 Jelly Bean", "10.1 inches (~62.7% screen-to-body rati...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Note_101/Samsung_Galaxy_Note_101_S_1.jpg",
            "product_name": "Samsung Galaxy Note LTE 10.1 N8020 16GB"
        },
        {
            "price": "\nRs 56,900\n",
            "desc": ["iOS 7", "9.7 inches (~71.6% screen-to-body ratio...", "2G, 3G, 4G (LTE), 128GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air/Apple_iPad_Air_S_1.jpg",
            "product_name": "Apple iPad Air Wi-Fi + Cellular 128GB"
        },
        {
            "price": "\nRs 41,900\n - ",
            "desc": ["9.7 inches (~71.6% screen-to-body ratio...", "2G, 3G, 4G (LTE), 128GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air_2/Apple_iPad_Air_2_S_1.jpg",
            "product_name": "Apple iPad Air 2 WiFi+Cellular 128GB"
        },
        {
            "price": "\nRs 10,499\n",
            "desc": ["Android 4.4 KitKat", "7.0 inches (~63.6% screen-to-body ratio...", "2G, 3G, 16GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Fonepad_7_FE171CG/ASUS_Fonepad_7_FE171CG_S_1.jpg",
            "product_name": "ASUS Fonepad 7 (FE171CG) 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 5.0 Lollipop", "8 inch, 1536 x 2048", "32GB, 2GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_ZenPad_S_8_Z580CA/ASUS_ZenPad_S_8_Z580CA_S_1.jpg",
            "product_name": "ASUS ZenPad S 8.0 Z580CA 32GB"
        },
        {
            "price": "\nRs 9,000\n",
            "desc": ["Android 4.2 Jelly Bean", "7 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_3G_7271_HD70/iBall_Slide_3G_7271_HD70_S_1.jpg",
            "product_name": "iBall Slide 3G 7271 HD70"
        },
        {
            "price": "\nRs 31,830\n",
            "desc": ["Honeycomb 3.0", "8.9 inches (~63.0% screen-to-body ratio...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_89/Samsung_Galaxy_Tab_89_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 8.9 P7300 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.3 Jelly Bean", "7.0 inches (~62.3% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Google_Nexus_7_2013/ASUS_Google_Nexus_7_2013_S_1.jpg",
            "product_name": "ASUS Google Nexus 7 2013 32GB"
        },
        {
            "price": "\nRs 11,999\n - ",
            "desc": ["Windows 8.1 32Bit", "8.0 inches, 1280 x 800 Pixels", "2G, 3G, 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HP_Stream_8/HP_Stream_8_S_1.jpg",
            "product_name": "HP Stream 8"
        },
        {
            "price": "\nRs 58,000\n",
            "desc": ["Android 5.0.2 Lollipop", "10.5 inches, 2560 x 1600", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Dell_Venue_10_7000/Dell_Venue_10_7000_S_1.jpg",
            "product_name": "Dell Venue 10 7000 32GB"
        },
        {
            "price": "\nRs 72,990\n",
            "desc": ["Windows RT", "10.6 inches, 1366 x 768", "64GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Microsoft_Surface_RT/Microsoft_Surface_RT_S_1.jpg",
            "product_name": "Microsoft Surface RT 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 3.1 Honeycomb", "10.1 inches (~59.3% screen-to-body rati...", "2G, 3G, 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_Ideapad_K1/Lenovo_Ideapad_K1_S_1.jpg",
            "product_name": "Lenovo IdeaPad K1 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1.2 Jelly Bean", "8.0 inches (~64.8% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Note_80/Samsung_Galaxy_Note_80_S_1.jpg",
            "product_name": "Samsung Galaxy Note 8.0 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 7.0", "10.1 inches, WXGA (1280 x 800)", "3G, 4G (LTE), 16GB, 32GB, 64GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_ZenPad_10_Z301ML/ASUS_ZenPad_10_Z301ML_S_1.jpg",
            "product_name": "ASUS ZenPad 10 Z301ML"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows 10 Home", "10.6 inches, 1920 x 1280", "128GB, 64GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Book_10_6_/Samsung_Galaxy_Book_10_6__S_1.jpg",
            "product_name": "Samsung Galaxy Book 10.6\u201d"
        },
        {
            "price": "\nRs 13,490\n",
            "desc": ["Jelly Bean 4.1", "7.0 inches (~56.5% screen-to-body ratio...", "8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Iconia_A110/Acer_Iconia_A110_S_1.jpg",
            "product_name": "Acer Iconia A110"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.2 Jelly Bean", "10.1 inches (~63.0% screen-to-body rati...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_Yoga_Tablet_10/Lenovo_Yoga_Tablet_10_S_1.jpg",
            "product_name": "Lenovo Yoga Tablet 10 16GB"
        },
        {
            "price": "\nRs 11,499\n",
            "desc": ["Android 4.2.2 Jelly Bean", "8.0 inches (~62.9% screen-to-body ratio...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_A8_50/Lenovo_A8_50_S_1.jpg",
            "product_name": "Lenovo A8-50 16GB"
        },
        {
            "price": "\nRs 4,419\n - ",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "7.0 inches (~59.5% screen-to-body ratio...", "4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Funbook_P300/Micromax_Funbook_P300_S_1.jpg",
            "product_name": "Micromax Funbook P300"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1.2 Jelly Bean", "7.0 inches (~66.0% screen-to-body ratio...", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_3_70/Samsung_Galaxy_Tab_3_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 3 7.0 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Emotion UI, Android OS, v5.1.1 (Lollipop)", "7 inches, 1200 x 1920 pixels", "2G, 3G, 4G (LTE), 160GB, 320GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Huawei_MediaPad_M2_7_0/Huawei_MediaPad_M2_7_0_S_1.jpg",
            "product_name": "Huawei Mediapad M2 7.0"
        },
        {
            "price": "\nRs 40,755\n",
            "desc": ["iOS 5.1", "9.7 inches (~65.1% screen-to-body ratio...", "32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_3/Apple_iPad_3_S_1.jpg",
            "product_name": "Apple iPad 3 Wi-Fi 32GB"
        },
        {
            "price": "\nRs 35,500\n",
            "desc": ["Android 5.0 Lollipop", "7.9 inches (~69.5% screen-to-body ratio...", "32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Nokia_N1/Nokia_N1_S_1.jpg",
            "product_name": "Nokia N1"
        },
        {
            "price": "\n-\n",
            "desc": ["EMUI 4.1 with Android M (Marshmallow)", "7.00 inches, HD (1024 x 600 pixel)", "16GB, 8GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Huawei_MediaPad_T3_7/Huawei_MediaPad_T3_7_S_1.jpg",
            "product_name": "Huawei MediaPad T3 7"
        },
        {
            "price": "\nRs 9,599\n",
            "desc": ["Android 4.4.2 KitKat", "8 inches, 1280 x 800", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P666/Micromax_Canvas_Tab_P666_S_1.jpg",
            "product_name": "Micromax Canvas Tab P666"
        },
        {
            "price": "\nRs 35,390\n - ",
            "desc": ["iOS 8.1", "9.7 inches (~71.6% screen-to-body ratio...", "128GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air_2/Apple_iPad_Air_2_S_1.jpg",
            "product_name": "Apple iPad Air 2 WiFi 128GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.3 Jelly Bean", "7 Inches, 1024 x 600", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Fonepad_7_FE170CG/ASUS_Fonepad_7_FE170CG_S_1.jpg",
            "product_name": "ASUS Fonepad 7 (FE170CG) 4GB"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Android 4.4 KitKat", "6.95 inches, 1024 x 600", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_3G_6095_Q700/iBall_Slide_3G_6095_Q700_S_1.jpg",
            "product_name": "iBall Slide 3G 6095-Q700"
        },
        {
            "price": "\nRs 21,690\n",
            "desc": ["Android 4.4.2 KitKat", "8.0 inches (~70.2% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Memo_Pad_8_ME181C/ASUS_Memo_Pad_8_ME181C_S_1.jpg",
            "product_name": "ASUS Memo Pad 8 (ME181C)"
        },
        {
            "price": "\nRs 40,800\n",
            "desc": ["iOS 7", "7.9 inches (~71.7% screen-to-body ratio...", "2G, 3G, 4G (LTE), 64GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_2/Apple_iPad_mini_2_S_1.jpg",
            "product_name": "Apple iPad mini 2 Wi-Fi + Cellular 64GB"
        },
        {
            "price": "\nRs 21,490\n - ",
            "desc": ["Windows 8.1 Pro 32Bit / Windows 8.1 32Bit", "10.1 inches, 1280 x 800", "32GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HP_Pro_Tablet_10_EE_G1/HP_Pro_Tablet_10_EE_G1_S_1.jpg",
            "product_name": "HP Pro Tablet 10 EE G1"
        },
        {
            "price": "\n-\n",
            "desc": ["KitKat 4.4.2", "7.0 inches (~70.5% screen-to-body ratio...", "8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_4_70/Samsung_Galaxy_Tab_4_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 4 7.0 8GB"
        },
        {
            "price": "\nRs 7,599\n - ",
            "desc": ["Android 4.4.4 (Upgradable to Lollipop)", "8 inches, 1280 x 800", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P690/Micromax_Canvas_Tab_P690_S_1.jpg",
            "product_name": "Micromax Canvas Tab P690"
        },
        {
            "price": "\nRs 3,999\n - ",
            "desc": ["Android 4.4 KitKat", "7 inches, 800 x 480", "2G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Swipe_Slice/Swipe_Slice_S_1.jpg",
            "product_name": "Swipe Slice"
        },
        {
            "price": "\nRs 8,299\n - ",
            "desc": ["Android 5.1", "7 inches, 1024 x 600", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P702/Micromax_Canvas_Tab_P702_S_1.jpg",
            "product_name": "Micromax Canvas Tab P702"
        },
        {
            "price": "\nRs 15,750\n",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches (~59.2% screen-to-body ratio...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_IdeaTab_A3000/Lenovo_IdeaTab_A3000_S_1.jpg",
            "product_name": "Lenovo IdeaTab A3000"
        },
        {
            "price": "\nRs 19,000\n",
            "desc": ["Android 4.1.2 Jelly Bean", "7.0 inches (~66.0% screen-to-body ratio...", "8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_3_70/Samsung_Galaxy_Tab_3_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 3 7.0 WiFi 8GB"
        },
        {
            "price": "\nRs 33,690\n",
            "desc": ["Windows RT", "10.1 inches (~62.7% screen-to-body rati...", "32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_VivoTab_RT_TF600T/ASUS_VivoTab_RT_TF600T_S_1.jpg",
            "product_name": "ASUS VivoTab RT (TF600T) 32GB"
        },
        {
            "price": "\nRs 48,592\n",
            "desc": ["iOS 4", "9.7 inches (~63.3% screen-to-body ratio...", "16GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad/Apple_iPad_S_1.jpg",
            "product_name": "Apple iPad Wi-Fi 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.0 (Ice Cream Sandwich)", "7 inches, 800 x 480", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_Connect_plus/Lava_Connect_plus_S_1.jpg",
            "product_name": "Lava Connect+"
        },
        {
            "price": "\nRs 4,599\n - ",
            "desc": ["Android 4.0 Ice Cream Sandwich", "7 inches, 800 x 480", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HCL_ME_Tablet_U1/HCL_ME_Tablet_U1_S_1.jpg",
            "product_name": "HCL ME Tablet U1"
        },
        {
            "price": "\nRs 5,399\n - ",
            "desc": ["Android 4.0 Ice Cream Sandwich", "7 inches, 1024 x 600", "2G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_TA_FONE_A34/Karbonn_TA_FONE_A34_S_1.jpg",
            "product_name": "Karbonn TA-FONE A34"
        },
        {
            "price": "\n-\n",
            "desc": ["iOS 7", "7.9 inches (~71.7% screen-to-body ratio...", "32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_2/Apple_iPad_mini_2_S_1.jpg",
            "product_name": "Apple iPad mini 2 Wi-Fi 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.4 KitKat", "8.0 inches, 1280", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Alcatel_Onetouch_Pop_8S/Alcatel_Onetouch_Pop_8S_S_1.jpg",
            "product_name": "Alcatel Onetouch Pop 8S"
        },
        {
            "price": "\nRs 15,399\n",
            "desc": ["Android 4.2.1 Jelly Bean", "8.0 inches (~63.1% screen-to-body ratio...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P650/Micromax_Canvas_Tab_P650_S_1.jpg",
            "product_name": "Micromax Canvas Tab P650"
        },
        {
            "price": "\nRs 48,000\n",
            "desc": ["Android 5.0.2 Lollipop", "10.5 inches, 2560 x 1600", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Dell_Venue_10_7000/Dell_Venue_10_7000_S_1.jpg",
            "product_name": "Dell Venue 10 7000 16GB"
        },
        {
            "price": "\nRs 16,500\n",
            "desc": ["Android 4.4.2 KitKat", "7.0 inches (~70.5% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_4_70/Samsung_Galaxy_Tab_4_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 4 7.0 LTE 16GB"
        },
        {
            "price": "\nRs 37,990\n - ",
            "desc": ["iOS 10", "9.70 inches, 2048x1536-pixel resolution...", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air_2/Apple_iPad_Air_2_S_1.jpg",
            "product_name": "Apple iPad Air 2 WiFi+Cellular 32GB"
        },
        {
            "price": "\nRs 45,290\n",
            "desc": ["Android 5.1 Lollipop", "8 inch, 1920 x 1200 pixels", "32GB, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Predator_8/Acer_Predator_8_S_1.jpg",
            "product_name": "Acer Predator 8"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1 Jelly Bean", "7 inches, 800 x 480", "2G, 4GB, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HCL_ME_CONNECT_V3/HCL_ME_CONNECT_V3_S_1.jpg",
            "product_name": "HCL ME Connect V3"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches (~54.4% screen-to-body ratio...", "8GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Iconia_B/Acer_Iconia_B_S_1.jpg",
            "product_name": "Acer Iconia B1-A71 8GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.2 Jelly Bean", "7.9 inches (~63.6% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Iconia_A1/Acer_Iconia_A1_S_1.jpg",
            "product_name": "Acer Iconia A1-810"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.2 Jelly Bean", "7.0 inches (~60.2% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Fonepad_7/ASUS_Fonepad_7_S_1.jpg",
            "product_name": "ASUS Fonepad 7 32GB"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "7.0 inches, 480 x 800 pixels (~133 ppi ...", "4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Funbook_Alpha_P250/Micromax_Funbook_Alpha_P250_S_1.jpg",
            "product_name": "Micromax Funbook Alpha P250"
        },
        {
            "price": "\nRs 9,999\n",
            "desc": ["Android 4.4 KitKat", "7 inches, 1280 x 800", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_3G_7345Q_800/iBall_Slide_3G_7345Q_800_S_1.jpg",
            "product_name": "iBall Slide 3G 7345Q-800"
        },
        {
            "price": "\nRs 27,900\n",
            "desc": ["iOS 6", "7.9 inches (~71.7% screen-to-body ratio...", "32GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini/Apple_iPad_mini_S_1.jpg",
            "product_name": "Apple iPad mini Wi-Fi 32GB"
        },
        {
            "price": "\nRs 49,900\n",
            "desc": ["iOS 7", "9.7 inches (~71.6% screen-to-body ratio...", "128GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air/Apple_iPad_Air_S_1.jpg",
            "product_name": "Apple iPad Air Wi-Fi 128GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches (~57.3% screen-to-body ratio...", "4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lenovo_IdeaTab_A1000/Lenovo_IdeaTab_A1000_S_1.jpg",
            "product_name": "Lenovo IdeaTab A1000 4GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches (~59.6% screen-to-body ratio...", "32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Google_NEXUS_7/ASUS_Google_NEXUS_7_S_1.jpg",
            "product_name": "ASUS Google Nexus 7 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.3 Jelly Bean", "7.0 inches (~62.3% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Google_Nexus_7_2013/ASUS_Google_Nexus_7_2013_S_1.jpg",
            "product_name": "ASUS Google Nexus 7 2013 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.4.2 KitKat", "7.0 inches (~70.5% screen-to-body ratio...", "2G, 3G, 4G (LTE), 8GB, 1.5GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_4_70/Samsung_Galaxy_Tab_4_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 4 7.0 LTE 8GB"
        },
        {
            "price": "\nRs 30,990\n - ",
            "desc": ["iOS 6", "7.9 inches (~71.7% screen-to-body ratio...", "2G, 3G, 4G (LTE), 32GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini/Apple_iPad_mini_S_1.jpg",
            "product_name": "Apple iPad mini Wi-Fi + Cellular 32GB"
        },
        {
            "price": "\nRs 7,003\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7.0 inches (~60.3% screen-to-body ratio...", "2G, 3G, Less than 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Funbook_3G_P600/Micromax_Funbook_3G_P600_S_1.jpg",
            "product_name": "Micromax Funbook 3G P600"
        },
        {
            "price": "\n-\n",
            "desc": ["Windows 8", "8.1 inches, 1280 x 800", "32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Iconia_W3/Acer_Iconia_W3_S_1.jpg",
            "product_name": "Acer Iconia W3-810"
        },
        {
            "price": "\nRs 4,490\n - ",
            "desc": ["Android 4.4 KitKat", "7 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_3G_Q45/iBall_Slide_3G_Q45_S_1.jpg",
            "product_name": "iBall Slide 3G Q45"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches, 480 x 800 pixels (~133 ppi ...", "Less than 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_Smart_Tab2/Karbonn_Smart_Tab2_S_1.jpg",
            "product_name": "Karbonn Smart Tab2"
        },
        {
            "price": "\nRs 5,325\n",
            "desc": ["Android 4.0 Ice Cream Sandwich", "8 inches, 1024 x 768", "Less than 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_Smart_Tab_7/Karbonn_Smart_Tab_7_S_1.jpg",
            "product_name": "Karbonn Smart Tab 7"
        },
        {
            "price": "\nRs 7,618\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7.0 inches, 480 x 800 pixels (~133 ppi ...", "2G, 3G, Less than 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Funbook_3G_P560/Micromax_Funbook_3G_P560_S_1.jpg",
            "product_name": "Micromax Funbook 3G P560"
        },
        {
            "price": "\nRs 8,450\n - ",
            "desc": ["Android 6.0, Marshmallow", "7.0 inches, 1024 x 600", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Brisk_4G2/iBall_Brisk_4G2_S_1.jpg",
            "product_name": "iBall Brisk 4G2"
        },
        {
            "price": "\nRs 61,390\n",
            "desc": ["Jelly Bean 4.3", "10.1 inches (~71.0% screen-to-body rati...", "2G, 3G, 4G (LTE), 16GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Note_101_2014/Samsung_Galaxy_Note_101_2014_S_1.jpg",
            "product_name": "Samsung Galaxy Note 10.1 2014 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["iOS 8.1", "7.9 inches (~71.7% screen-to-body ratio...", "2G, 3G, 4G (LTE), 128GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_3/Apple_iPad_mini_3_S_1.jpg",
            "product_name": "Apple iPad mini 3 Wi-Fi + Cellular 128GB"
        },
        {
            "price": "\nRs 4,141\n - ",
            "desc": ["Android 4.0 Ice Cream Sandwich", "7 inches, 800 x 480", "2G, 3G, 8GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Zebronics_Zebronics_Zebpad_7T100/Zebronics_Zebronics_Zebpad_7T100_S_1.jpg",
            "product_name": "Zebronics Zebronics Zebpad 7T100"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Android 4.4.2 KitKat", "7.85 inches, 1280 x 768", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/D_Link_D100/D_Link_D100_S_1.jpg",
            "product_name": "D-Link D100"
        },
        {
            "price": "\nRs 12,490\n",
            "desc": ["Android 5.0 Lollipop", "7.00 inches, 1280 x 800", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Zenpad_Z370CG/ASUS_Zenpad_Z370CG_S_1.jpg",
            "product_name": "ASUS ZenPad 7.0 Z370CG"
        },
        {
            "price": "\nRs 4,469\n",
            "desc": ["Android 4.1 Jelly Bean", "7 inches, 800 x 480", "2G, 3G, 4GB, Less than 1GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_Smart_Tab_3_Blade/Karbonn_Smart_Tab_3_Blade_S_1.jpg",
            "product_name": "Karbonn Smart Tab 3 Blade"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Android Lollipop 5.1", "7.0 inches, 1024 x 600", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Celkon_Diamond_4G_Tab_7/Celkon_Diamond_4G_Tab_7_S_1.jpg",
            "product_name": "Celkon Diamond 4G Tab 7"
        },
        {
            "price": "\nRs 6,460\n",
            "desc": ["Android 4.4.2 KitKat", "7 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Canvas_Tab_P470/Micromax_Canvas_Tab_P470_S_1.jpg",
            "product_name": "Micromax Canvas Tab P470"
        },
        {
            "price": "\nRs 5,000\n - ",
            "desc": ["Android 4.1 Jelly Bean", "7 inches, 800 x 480", "2G, 3G, Less than 4GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_Smart_Tab_1/Karbonn_Smart_Tab_1_S_1.jpg",
            "product_name": "Karbonn Smart Tab 1"
        },
        {
            "price": "\nRs 14,990\n - ",
            "desc": ["Android 4.4 KitKat", "10.1 inches, 1280 x 800", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_Brace_X1/iBall_Slide_Brace_X1_S_1.jpg",
            "product_name": "iBall Slide Brace X1"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches (~60.2% screen-to-body ratio...", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Fonepad/ASUS_Fonepad_S_1.jpg",
            "product_name": "ASUS Fonepad 8GB"
        },
        {
            "price": "\nRs 4,585\n - ",
            "desc": ["4.4, Kit Kat", "7 inches, HD Display (1024*600)", "8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Q400i/iBall_Q400i_S_1.jpg",
            "product_name": "iBall Q400i"
        },
        {
            "price": "\nRs 4,799\n - ",
            "desc": ["Android 4.2.2 Jelly Bean", "7 Inches, 800 x 480 pixels", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_ETAB_Velo_plus/Lava_ETAB_Velo_plus_S_1.jpg",
            "product_name": "Lava ETAB Velo+"
        },
        {
            "price": "\nRs 42,900\n",
            "desc": ["iOS 8.1", "7.9 inches (~71.7% screen-to-body ratio...", "128GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_3/Apple_iPad_mini_3_S_1.jpg",
            "product_name": "Apple iPad mini 3 Wi-Fi 128GB"
        },
        {
            "price": "\nRs 6,499\n",
            "desc": ["Android 4.1.1 Jelly Bean", "7 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_ETAB_Xtron/Lava_ETAB_Xtron_S_1.jpg",
            "product_name": "Lava ETAB Xtron"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.2 Jelly Bean", "7.9 inches (~63.6% screen-to-body ratio...", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Iconia_A1/Acer_Iconia_A1_S_1.jpg",
            "product_name": "Acer Iconia A1-811"
        },
        {
            "price": "\nRs 6,666\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7.0 inches, 480 x 800 pixels (~133 ppi ...", "2G, Less than 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Funbook_Talk_P360/Micromax_Funbook_Talk_P360_S_1.jpg",
            "product_name": "Micromax Funbook Talk P360"
        },
        {
            "price": "\nRs 6,666\n - ",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches (~57.5% screen-to-body ratio...", "2G, Less than 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Micromax_Funbook_Talk_P362/Micromax_Funbook_Talk_P362_S_1.jpg",
            "product_name": "Micromax Funbook Talk P362"
        },
        {
            "price": "\nRs 13,790\n",
            "desc": ["Windows 8.1", "8 inches, 1280 x 800", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_WQ32/iBall_Slide_WQ32_S_1.jpg",
            "product_name": "iBall Slide WQ32"
        },
        {
            "price": "\nRs 33,990\n",
            "desc": ["Android 3.0 Honeycomb", "10.1 inches (~64.3% screen-to-body rati...", "32GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Iconia_A500/Acer_Iconia_A500_S_1.jpg",
            "product_name": "Acer Iconia A500 32GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1 Jelly Bean", "7 inches, 1024 x 600", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Swipe_MTV_Slash/Swipe_MTV_Slash_S_1.jpg",
            "product_name": "Swipe MTV Slash"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "7.0 inches (~58.1% screen-to-body ratio...", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_2_70/Samsung_Galaxy_Tab_2_70_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 2 7.0 I705"
        },
        {
            "price": "\nRs 4,490\n",
            "desc": ["Android 4.4.2 KitKat", "7 Inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/DOMO_Slate_X15/DOMO_Slate_X15_S_1.jpg",
            "product_name": "DOMO Slate X15 8GB"
        },
        {
            "price": "\nRs 9,690\n",
            "desc": ["Android 4.1 Jelly Bean", "8 inches, 1024 x 768", "4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Archos_80_ChildPad/Archos_80_ChildPad_S_1.jpg",
            "product_name": "ARCHOS 80 ChildPad"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 3.0 Honeycomb", "7.0 inches (~60.4% screen-to-body ratio...", "8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Iconia_A100/Acer_Iconia_A100_S_1.jpg",
            "product_name": "Acer Iconia A100 8GB"
        },
        {
            "price": "\nRs 5,890\n",
            "desc": ["Android 4.1 Jelly Bean", "7 inches, 1024 x 600", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_Ivory/Lava_Ivory_S_1.jpg",
            "product_name": "Lava Ivory"
        },
        {
            "price": "\nRs 35,600\n",
            "desc": ["Honeycomb 3.2", "7.7 inches (~65.7% screen-to-body ratio...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Samsung_Galaxy_Tab_77/Samsung_Galaxy_Tab_77_S_1.jpg",
            "product_name": "Samsung Galaxy Tab 7.7 P6800 16GB"
        },
        {
            "price": "\nRs 35,900\n - ",
            "desc": ["iOS 8.1", "7.9 inches (~71.7% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_3/Apple_iPad_mini_3_S_1.jpg",
            "product_name": "Apple iPad mini 3 Wi-Fi + Cellular 16GB"
        },
        {
            "price": "\nRs 42,990\n",
            "desc": ["KitKat 4.4.2", "10.1 inches (~63.8% screen-to-body rati...", "16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HP_10_Plus/HP_10_Plus_S_1.jpg",
            "product_name": "HP 10 Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1 Jelly Bean", "7 inches, 1024 x 600", "8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Ematic_EGD170/Ematic_EGD170_S_1.jpg",
            "product_name": "Ematic EGD170"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 7.0 Nougat with EMUI 5.1", "8.00 inches, 1280 \u00d7 800 Pixel\r\nIPS LCD ...", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Honor_Play_Tab_2/Honor_Play_Tab_2_S_1.jpg",
            "product_name": "Honor Play Tab 2 (8\")"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["KitKat 4.4.2", "7 inches, 1024 x 600", "2G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Celkon_Xion_S1_CT710/Celkon_Xion_S1_CT710_S_1.jpg",
            "product_name": "Celkon Xion S1 CT710"
        },
        {
            "price": "\nRs 7,299\n",
            "desc": ["Android Lollipop 5.1", "8.00 inches, 800 x 1280", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Celkon_Diamond_4G_Tab_8/Celkon_Diamond_4G_Tab_8_S_1.jpg",
            "product_name": "Celkon Diamond 4G Tab 8"
        },
        {
            "price": "\nRs 8,499\n",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches (~57.0% screen-to-body ratio...", "2G, 3G", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Spice_Mi_725_Stellar_Slatepad/Spice_Mi_725_Stellar_Slatepad_S_1.jpg",
            "product_name": "Spice Mi-725 Stellar Slatepad"
        },
        {
            "price": "\nRs 32,190\n",
            "desc": ["KitKat 4.4.4", "10.1 inches (~58.0% screen-to-body rati...", "32GB, 1GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HP_Pro_Slate_10_EE_G1/HP_Pro_Slate_10_EE_G1_S_1.jpg",
            "product_name": "HP Pro Slate 10 EE G1 32GB"
        },
        {
            "price": "\nRs 33,900\n",
            "desc": ["iOS 6", "7.9 inches (~71.7% screen-to-body ratio...", "64GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini/Apple_iPad_mini_S_1.jpg",
            "product_name": "Apple iPad mini Wi-Fi 64GB"
        },
        {
            "price": "\n-\n",
            "desc": ["6 inches, 300ppi", "3G, 4GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Amazon_Kindle_Oasis/Amazon_Kindle_Oasis_S_1.jpg",
            "product_name": "Amazon Kindle Oasis"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.2 Jelly Bean", "7.0 inches (~60.2% screen-to-body ratio...", "2G, 3G, 4G (LTE), 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ASUS_Fonepad_7/ASUS_Fonepad_7_S_1.jpg",
            "product_name": "ASUS Fonepad 7 8GB"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Android 4.0 Ice Cream Sandwich", "7 inches, 800 x 480", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Intex_iBuddy/Intex_iBuddy_S_1.jpg",
            "product_name": "Intex iBuddy"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Android 4.2 Jelly Bean", "7 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_ETAB_Xtron_plus/Lava_ETAB_Xtron_plus_S_1.jpg",
            "product_name": "Lava ETAB Xtron+"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 7.0 Nougat", "10.10 inches, 1280 x 800 pixels\r\n\r\nCapa...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/ARCHOS_101_Saphir/ARCHOS_101_Saphir_S_1.jpg",
            "product_name": "ARCHOS 101 Saphir"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 7.0 Nougat with EMUI 5.1", "9.6 inches, 1280 \u00d7 800 Pixel\r\nIPS LCD c...", "2G, 3G, 4G (LTE), 16GB, 32GB, 2GB, 3GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Honor_Play_Tab_2_96/Honor_Play_Tab_2_96_S_1.jpg",
            "product_name": "Honor Play Tab 2 (9.6\")"
        },
        {
            "price": "\nRs 3,999\n",
            "desc": ["Android 4.0 Ice Cream Sandwich", "7 inches, 800 x 480", "4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Simmtronics_XPad_X720/Simmtronics_XPad_X720_S_1.jpg",
            "product_name": "Simmtronics XPad X720"
        },
        {
            "price": "\nRs 8,349\n",
            "desc": ["Android 4.2.2 Jelly Bean", "7 inches, 1024 x 600", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_IvoryS/Lava_IvoryS_S_1.jpg",
            "product_name": "Lava IvoryS"
        },
        {
            "price": "\nRs 8,799\n",
            "desc": ["Android 4.1.1 Jelly Bean", "9.7 inches, 1024 x 768 pixels (~132 ppi...", "Less than 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_Smart_Tab_10/Karbonn_Smart_Tab_10_S_1.jpg",
            "product_name": "Karbonn Smart Tab 10"
        },
        {
            "price": "\nRs 11,298\n",
            "desc": ["Android 4.4.2 KitKat", "7 Inches, 1280 x 720", "8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HP_7_G2/HP_7_G2_S_1.jpg",
            "product_name": "HP 7 G2"
        },
        {
            "price": "\nRs 35,900\n",
            "desc": ["iOS 7", "9.7 inches (~71.6% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air/Apple_iPad_Air_S_1.jpg",
            "product_name": "Apple iPad Air Wi-Fi 16GB"
        },
        {
            "price": "\nRs 35,900\n",
            "desc": ["iOS 8.1", "7.9 inches (~71.7% screen-to-body ratio...", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_3/Apple_iPad_mini_3_S_1.jpg",
            "product_name": "Apple iPad mini 3 Wi-Fi 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.4 KitKat", "7.85 inches, 1024 x 768", "2G, 3G, 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_O900_C/iBall_Slide_O900_C_S_1.jpg",
            "product_name": "iBall Slide O900-C"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7 inches, 1024 x 600", "2G, 3G, Less than 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Intex_I_Buddy_Connect/Intex_I_Buddy_Connect_S_1.jpg",
            "product_name": "Intex I Buddy Connect 3G"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["KitKat 4.4.2", "6.95 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Celkon_Xion_S_CT695/Celkon_Xion_S_CT695_S_1.jpg",
            "product_name": "Celkon Xion S CT695"
        },
        {
            "price": "\nRs 17,999\n",
            "desc": ["7 inches, 1280 x 800", "16GB, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Xolo_Play_Tegra_Note/Xolo_Play_Tegra_Note_S_1.jpg",
            "product_name": "Xolo Play Tegra Note"
        },
        {
            "price": "\nRs 39,000\n",
            "desc": ["iOS 7", "9.7 inches (~71.6% screen-to-body ratio...", "2G, 3G, 4G (LTE), 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_Air/Apple_iPad_Air_S_1.jpg",
            "product_name": "Apple iPad Air Wi-Fi + Cellular 16GB"
        },
        {
            "price": "\nRs 7,399\n",
            "desc": ["Android 4.1 Jelly Bean", "7 inches, 1024 x 600", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_TA_FONE_A39_HD/Karbonn_TA_FONE_A39_HD_S_1.jpg",
            "product_name": "Karbonn TA-FONE A39 HD"
        },
        {
            "price": "\nRs 7,599\n",
            "desc": ["Android 4.0 Ice Cream Sandwich", "7 inches, 800 x 400", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/HCL_ME_Tablet_Connect/HCL_ME_Tablet_Connect_S_1.jpg",
            "product_name": "HCL ME Tablet Connect 2G V1"
        },
        {
            "price": "\nRs 8,745\n - ",
            "desc": ["Android 4.4 KitKat", "10.1 inches, 1024 x 600", "2G, 3G, 8GB, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_3G_1026_Q18/iBall_Slide_3G_1026_Q18_S_1.jpg",
            "product_name": "iBall Slide 3G 1026-Q18"
        },
        {
            "price": "\nRs 41,900\n",
            "desc": ["iOS 10", "7.9 inches, 2048-by-1536 resolution at ...", "2G, 3G, 4G (LTE), 32GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Apple_iPad_mini_4/Apple_iPad_mini_4_S_1.jpg",
            "product_name": "Apple iPad mini 4 WiFi+Cellular 32GB"
        },
        {
            "price": "\nRs 54,990\n",
            "desc": ["Windows 7 Professional", "10.1 inches, 1366 x 768", "2G, 3G, 64GB, 2GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Milagrow_Kupa_X11/Milagrow_Kupa_X11_S_1.jpg",
            "product_name": "Milagrow Kupa X11 64GB"
        },
        {
            "price": "\nRs 7,199\n - ",
            "desc": ["Android 4.2 Jelly Bean", "7.85 inches, 1024 x 768", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_3G_7803Q_900/iBall_Slide_3G_7803Q_900_S_1.jpg",
            "product_name": "iBall Slide 3G 7803Q-900"
        },
        {
            "price": "\nRs 34,790\n",
            "desc": ["Android 3.0 Honeycomb", "10.1 inches (~64.3% screen-to-body rati...", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Acer_Iconia_A501/Acer_Iconia_A501_S_1.jpg",
            "product_name": "Acer Iconia A501 16GB"
        },
        {
            "price": "\nRs 8,199\n",
            "desc": ["Android 4.1 Jelly Bean", "7 inches, 800 x 480", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_TA_FONE_A37/Karbonn_TA_FONE_A37_S_1.jpg",
            "product_name": "Karbonn TA-FONE A37"
        },
        {
            "price": "\nRs 4,699\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7 inches, 800 x 480", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Salora_Protab_SPT071/Salora_Protab_SPT071_S_1.jpg",
            "product_name": "Salora Protab SPT071"
        },
        {
            "price": "\nRs 8,990\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7 inches, 800 x 600", "2G, 3G, 16GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Milagrow_TabTop_74/Milagrow_TabTop_74_S_1.jpg",
            "product_name": "Milagrow TabTop 7.4 16GB"
        },
        {
            "price": "\nRs 9,990\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7 inches, 800 x 480", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Milagrow_TabTop_716C_MGPT09/Milagrow_TabTop_716C_MGPT09_S_1.jpg",
            "product_name": "Milagrow TabTop 7.16C MGPT09 8GB"
        },
        {
            "price": "\nRs 4,899\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "7 inches", "4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Champion_Wtab_72/Champion_Wtab_72_S_1.jpg",
            "product_name": "Champion Wtab 7.2"
        },
        {
            "price": "\nRs 4,999\n",
            "desc": ["Android Lollipop 5.1", "7.0 inches, 1024x600 pixels", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Celkon_CT722/Celkon_CT722_S_1.jpg",
            "product_name": "Celkon CT722"
        },
        {
            "price": "\nRs 7,704\n",
            "desc": ["Android 4.0 Ice Cream Sandwich", "7 inches", "4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Champion_Wtab_705_2G_Talk/Champion_Wtab_705_2G_Talk_S_1.jpg",
            "product_name": "Champion Wtab 705 2G Talk"
        },
        {
            "price": "\nRs 15,999\n",
            "desc": ["Android 6.0, Marshmallow", "10.1 inches, IPS HD(1280 x 800)", "2G, 3G, 4G (LTE), 16GB, 2GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Brace_X1_4G/iBall_Brace_X1_4G_S_1.jpg",
            "product_name": "iBall Brace-X1 4G"
        },
        {
            "price": "\nRs 17,990\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "9.7 inches, 1024 x 780", "2G, 3G, 16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Milagrow_TabTop_104_MGPT05/Milagrow_TabTop_104_MGPT05_S_1.jpg",
            "product_name": "Milagrow TabTop 10.4 MGPT05 16GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.1.2 Jelly Bean", "8 inches, 1024 x 768", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Fly_F8s/Fly_F8s_S_1.jpg",
            "product_name": "Fly F8s"
        },
        {
            "price": "\nRs 6,499\n",
            "desc": ["Android 4.4 KitKat", "7 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Zebronics_ZebPad_7T500/Zebronics_ZebPad_7T500_S_1.jpg",
            "product_name": "Zebronics ZebPad 7T500 3G"
        },
        {
            "price": "\nRs 8,499\n",
            "desc": ["Android 4.0 Ice Cream Sandwich", "8 inches, 800 x 600", "8GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Simmtronics_XPad_X802/Simmtronics_XPad_X802_S_1.jpg",
            "product_name": "Simmtronics XPad X802"
        },
        {
            "price": "\nRs 66,990\n",
            "desc": ["Windows 7 Professional", "10.1 inches, 1366 x 768", "128GB, 2GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Milagrow_Kupa_X11/Milagrow_Kupa_X11_S_1.jpg",
            "product_name": "Milagrow Kupa X11 128GB"
        },
        {
            "price": "\nRs 4,899\n",
            "desc": ["Android 4.4 KitKat", "7 inches, 800 x 480", "2G, 3G, 4GB, 8GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_6351_Q40/iBall_Slide_6351_Q40_S_1.jpg",
            "product_name": "iBall Slide 6351-Q40"
        },
        {
            "price": "\nRs 6,499\n",
            "desc": ["Android 4.4.2 KitKat", "7 inches, 1024 x 600", "2G, 3G, 4GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_Ivory_plus/Lava_Ivory_plus_S_1.jpg",
            "product_name": "Lava Ivory+"
        },
        {
            "price": "\nRs 6,990\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7 inches, 800 x 600", "2G, 3G, 4GB, Less than 1GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Milagrow_TabTop_74/Milagrow_TabTop_74_S_1.jpg",
            "product_name": "Milagrow TabTop 7.4 4GB"
        },
        {
            "price": "\nRs 8,449\n",
            "desc": ["Android 4.0 Ice Cream Sandwich", "10.1 inches, 1024 x 600", "8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Simmtronics_XPad_1010/Simmtronics_XPad_1010_S_1.jpg",
            "product_name": "Simmtronics XPad 1010"
        },
        {
            "price": "\nRs 8,499\n",
            "desc": ["Android 4.1 Jelly Bean", "10.0 inches, 1280 x 800 pixels (~151 pp...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Spice_Mi_1010_Stellar_Pad/Spice_Mi_1010_Stellar_Pad_S_1.jpg",
            "product_name": "Spice Mi-1010 Stellar Pad"
        },
        {
            "price": "\nRs 11,349\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "9.7 inches", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Champion_Wtab_971/Champion_Wtab_971_S_1.jpg",
            "product_name": "Champion Wtab 971"
        },
        {
            "price": "\nRs 13,190\n - ",
            "desc": ["Android 4.1 Jelly Bean", "7 inches, 800 x 480", "8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Ematic_FunTab_Pro/Ematic_FunTab_Pro_S_1.jpg",
            "product_name": "Ematic FunTab Pro"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7 inches, 800 x 480", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/DOMO_Slate_X3G_3RD/DOMO_Slate_X3G_3RD_S_1.jpg",
            "product_name": "DOMO Slate X3G 3RD"
        },
        {
            "price": "\n-\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "7 inches", "4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Pantel_T_Pad_WS704C/Pantel_T_Pad_WS704C_S_1.jpg",
            "product_name": "Pantel T-Pad WS704C"
        },
        {
            "price": "\nRs 5,490\n - ",
            "desc": ["Android 4.0.4 Ice Cream Sandwich", "7 inches, 800 x 480", "2G, 3G, 8GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Milagrow_TabTop_716_DX_MGPT07/Milagrow_TabTop_716_DX_MGPT07_S_1.jpg",
            "product_name": "Milagrow TabTop 7.16 DX MGPT07 8GB"
        },
        {
            "price": "\nRs 7,199\n",
            "desc": ["Android 4.0.3 Ice Cream Sandwich", "9 inches, 800 x 480", "2G, 3G, 8GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Mitashi_BE_200/Mitashi_BE_200_S_1.jpg",
            "product_name": "Mitashi BE 200"
        },
        {
            "price": "\nRs 8,959\n",
            "desc": ["Ice Cream Sandwich 4.0.3", "7 inches, 800 x 480", "2G, 3G, 4GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_ETAB_Z7H_plus/Lava_ETAB_Z7H_plus_S_1.jpg",
            "product_name": "Lava ETAB Z7H+"
        },
        {
            "price": "\nRs 4,499\n",
            "desc": ["Android 4.4 (Kitkat)", "7 inches", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Zync_Z99_Dual_Core/Zync_Z99_Dual_Core_S_1.jpg",
            "product_name": "Zync Z99 Dual Core"
        },
        {
            "price": "\nRs 5,779\n",
            "desc": ["Android 4.1 Jelly Bean", "7.0 inches (~57.1% screen-to-body ratio...", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Karbonn_A37/Karbonn_A37_S_1.jpg",
            "product_name": "Karbonn A37"
        },
        {
            "price": "\nRs 5,999\n",
            "desc": ["Android 4.3 Jelly Bean", "7 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_QPAD_R704/Lava_QPAD_R704_S_1.jpg",
            "product_name": "Lava QPAD R704"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Android 4.0 Ice Cream Sandwich", "7 inches, 800 x 480", "2G, 3G, 4GB, Less than 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Lava_Connect/Lava_Connect_S_1.jpg",
            "product_name": "Lava Connect"
        },
        {
            "price": "\nRs 6,450\n - ",
            "desc": ["Android\u2122 4.4Kit Kat", "6.95 inches, HD Screen (1024*600)", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_3G_6095_D20/iBall_Slide_3G_6095_D20_S_1.jpg",
            "product_name": "iBall Slide 3G 6095-D20"
        },
        {
            "price": "\nRs 6,999\n",
            "desc": ["Android 4.4 KitKat", "7 inches, 1024 x 600", "2G, 3G, 8GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/iBall_Slide_3G_Q7271_IPS20/iBall_Slide_3G_Q7271_IPS20_S_1.jpg",
            "product_name": "iBall Slide 3G Q7271-IPS20"
        },
        {
            "price": "\nRs 27,690\n",
            "desc": ["Windows 8.1", "8 inches, 1280 x 800", "16GB, 1GB", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/tablets/Ematic_EWT816/Ematic_EWT816_S_1.jpg",
            "product_name": "Ematic EWT816"
        }
    ]
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
            tablets.create({
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

/*****  Route for fetching all tablets info at once ******/

router.get('/all_tablets', (request, response) => {
    tablets.findAll()
        .then((mobil) => {
            console.log("ok");
            response.send(mobil);

        });
});
/*****  Route for fetching all tablets of one brand ******/

router.post('/get_tablets_from_brand', (request, response) => {
    tablets.findAll({
            where: {
                brand_name: request.body.brand_name
            }
        })
        .then((tablets_data) => {
            console.log("ok");
            response.send(tablets_data);

        });
});
/*** Route for fetching single tablets by id */
router.post('/get_single_tablets', (request, response) => {
    tablets.findAll({
        where: {
            id: request.body.id
        }
    }).then((tablets) => {
        console.log(tablets);
        response.send(tablets);
    }).catch((error) => {
        alert(error)
    })
})
/***  Route for getting all brands available ***/
router.get('/get_tablets_brands', (request, response) => {
    tablets.findAll()
        .then(function (tablets) {
            var brands = []
            for (var i = 0; i < tablets.length; i++) {
                var already_present = false;
                if (i == 0) {
                    brands[i] = tablets[i].brand_name
                }
                for (var j = 0; j < i; j++) {
                    if (brands[j] == tablets[i].brand_name) {
                        already_present = true;
                    } else {
                        if (j == i - 1 && already_present == false) {
                            brands[brands.length] = tablets[i].brand_name
                        } else {

                        }
                    }
                }
            }
            response.send(brands);
        });
});
//route for getting number of devices in each brand
router.get('/get_count', (request, response) => {
    var brands = [
    "Samsung",
    "Dell",
    "Lenovo",
    "Apple",
    "DataWind",
    "Microsoft",
    "Sony",
    "Micromax",
    "BlackBerry",
    "iBall",
    "Acer",
    "ASUS",
    "HP",
    "Karbonn",
    "Zen",
    "Nokia",
    "Swipe",
    "HCL",
    "Zebronics",
    "D-Link",
    "Celkon",
    "Lava",
    "DOMO",
    "ARCHOS",
    "Spice",
    "Intex",
    "Simmtronics",
    "Xolo",
    "Milagrow",
    "Salora",
    "Champion",
    "Ematic",
    "Mitashi",
    "Zync"
]
    var a = []
    var k = 0
    var check = false;
    for (var i = 0; i < brands.length; i++) {
        tablets.findAll({
                where: {
                    brand_name: brands[i]
                }
            }).then((tablets) => {
                a[k] = tablets.length + "," + tablets[0].brand_name

                k = k + 1;
            })
            .then(() => {
                console.log("length of a " + a.length)
                if (a.length == 34 && check == false) {
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