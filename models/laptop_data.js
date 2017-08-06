var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),
    laptop = connection.seq.define('laptop', {
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
laptop.sync();
/*****  Route for storing laptop Information *****/
router.get('/submit_laptop', (request, response) => {
    var data_body = [{
            "price": "\nRs 24,499\n - ",
            "desc": ["Celeron Dual Core, Core i3, Core i5, Co...", "DDR3L, 2GB, 4GB, 8GB, HDD, 500GB, 1TB", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_3542_In/Dell_Inspiron_15_3542_In_S_1.jpg",
            "product_name": "Dell Inspiron 15-3542"
        },
        {
            "price": "\nRs 23,990\n",
            "desc": ["Pentium Quad Core, 2.16 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R078TU_K5B35PA/HP_15_R078TU_K5B35PA_S_1.jpg",
            "product_name": "HP 15-R078TU K5B35PA"
        },
        {
            "price": "\nRs 21,620\n - ",
            "desc": ["Core i3, Core i5, Celeron Dual Core", "DDR4, 4GB, HDD, SSD, 500GB, 128GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_15_3568/Dell_Vostro_15_3568_S_1.jpg",
            "product_name": "Dell Vostro 15-3568"
        },
        {
            "price": "\nRs 31,899\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 2GB, HDD, 500GB", "14 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_SVE14123CNB/Sony_VAIO_SVE14123CNB_S_1.jpg",
            "product_name": "Sony Vaio SVE14123CNB"
        },
        {
            "price": "\nRs 30,145\n - ",
            "desc": ["Core i5, Core i3, Pentium Dual Core, Co...", "4GB, 8GB, HDD, 1TB, 500GB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_3543/Dell_Inspiron_15_3543_S_1.jpg",
            "product_name": "Dell Inspiron 15-3543"
        },
        {
            "price": "\nRs 34,600\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3L SDRAM, 4GB, HDD, 1TB", "15.6 inches, FreeDOS 2.0", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_AC024TX/HP_15_AC024TX_S_1.jpg",
            "product_name": "HP 15-ac024tx"
        },
        {
            "price": "\nRs 24,790\n",
            "desc": ["Celeron Dual Core", "DDR3L, 4GB, 2GB, HDD, 500GB", "15.6 inches, Ubuntu Linux 14.04 SP1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_3551/Dell_Inspiron_15_3551_S_1.jpg",
            "product_name": "Dell Inspiron 15-3551"
        },
        {
            "price": "\nRs 36,990\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 2GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_Fit_14E_SVF14212SNB/Sony_VAIO_Fit_14E_SVF14212SNB_S_1.jpg",
            "product_name": "Sony Vaio Fit 14E-SVF14212SNB"
        },
        {
            "price": "\nRs 17,990\n",
            "desc": ["Pentium Quad Core", "DDR3L, 4GB, HDD, 500GB", "11.6 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_11_3162/Dell_Inspiron_11_3162_S_1.jpg",
            "product_name": "Dell Inspiron 11-3162"
        },
        {
            "price": "\nRs 29,000\n",
            "desc": ["AMD, 1.35 GHz", "DDR3L, 2GB, HDD, 500GB", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_45_80E3003QIN/Lenovo_G50_45_80E3003QIN_S_1.jpg",
            "product_name": "Lenovo G50-45 80E3003QIN"
        },
        {
            "price": "\nRs 28,990\n",
            "desc": ["AMD, 2.2 GHz", "DDR3L, 4GB, HDD, 1TB", "15.6 inches, Windows 10 64-bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_AF103AX/HP_15_AF103AX_S_1.jpg",
            "product_name": "HP 15-af103ax"
        },
        {
            "price": "\nRs 29,352\n - ",
            "desc": ["Core i3, Core i5, Core i7, 2.00 GHz", "DDR4, 4GB, 8GB, HDD, 1TB", "15.6 inches, Ubuntu Linux 16.04\r\nWindow...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_3567/Dell_Inspiron_15_3567_S_1.jpg",
            "product_name": "Dell Inspiron 15-3567"
        },
        {
            "price": "\nRs 21,999\n",
            "desc": ["Pentium Dual Core, 2.4 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Toshiba_Satellite_C50_A_P0011/Toshiba_Satellite_C50_A_P0011_S_1.jpg",
            "product_name": "TOSHIBA Satellite C50-A-P0011"
        },
        {
            "price": "\nRs 32,900\n",
            "desc": ["Core i7, Core i3, 1.6 GHz/1.7 GHz/1.8 GHz", "DDR3, DDR3L, 2GB, 4GB, 6GB, 8GB, HDD, 5...", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_3537/Dell_Inspiron_3537_S_1.jpg",
            "product_name": "Dell Inspiron 15-3537"
        },
        {
            "price": "\nRs 37,990\n - ",
            "desc": ["Core i3, 1.9 GHz", "DDR3L, 4GB, HDD, 500GB", "11.6 Inches, Windows 8.1 Single Languag...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_11_3148_In/Dell_Inspiron_11_3148_In_S_1.jpg",
            "product_name": "Dell Inspiron 11-3148"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.5 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_E002AU_E4X37PA/HP_Pavilion_15_E002AU_E4X37PA_S_1.jpg",
            "product_name": "HP Pavilion 15-E002AU E4X37PA"
        },
        {
            "price": "\nRs 42,241\n",
            "desc": ["Core i5, Core i7, 2.6 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8 Professional", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_14_SVE1413XPNB/Sony_VAIO_14_SVE1413XPNB_S_1.jpg",
            "product_name": "Sony Vaio 14-SVE1413XPNB"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.2 GHz", "DDR3L SDRAM, 8GB, HDD, 1TB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_ab220TX/HP_Pavilion_15_ab220TX_S_1.jpg",
            "product_name": "HP Pavilion 15-ab220tx"
        },
        {
            "price": "\nRs 29,092\n - ",
            "desc": ["Core i3, 2 GHz", "DDR3L, 4GB, HDD, 1TB", "15.6 inches, WIN 10", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_80_80E502Q6IH/Lenovo_G50_80_80E502Q6IH_S_1.jpg",
            "product_name": "Lenovo G50-80 80E502Q6IH"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i7", "LPDDR3, 4GB, 8GB, SSD, 256GB, 512GB", "13 inches, Windows 10 64-bit Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Huawei_MateBook_X_1/Huawei_MateBook_X_1_S_1.jpg",
            "product_name": "Huawei MateBook X"
        },
        {
            "price": "\nRs 26,000\n - ",
            "desc": ["AMD, 1.3 GHz/2.4 GHz", "DDR3L, 2GB, 4GB, 8GB, HDD, 500GB, 1TB", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_3541/Dell_Inspiron_15_3541_S_1.jpg",
            "product_name": "Dell Inspiron 15-3541"
        },
        {
            "price": "\nRs 44,990\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P036TU_G8D91PA/HP_Pavilion_15_P036TU_G8D91PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P036TU G8D91PA"
        },
        {
            "price": "\nRs 24,632\n - ",
            "desc": ["Pentium Dual Core, 2.2 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_E1_531_NXM12SI023/Acer_Aspire_E1_531_NXM12SI023_S_1.jpg",
            "product_name": "Acer Aspire E1-531"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7", "DDR4, 32GB, HDD+SSD/eMMC, 1TB, 256GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Samsung_Odyssey/Samsung_Odyssey_S_1.jpg",
            "product_name": "Samsung Odyssey (15.6inch)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.3 GHz", "DDR3, 2GB, HDD, 320GB", "15.5 inches, Windows 7 Home Basic 64Bit..."],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_VPCEH35EN_W/Sony_VAIO_VPCEH35EN_W_S_1.jpg",
            "product_name": "Sony Vaio VPCEH35EN/W"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3 SDRAM, 4GB, HDD, 500GB", "15.6 inches, Window 8 64-bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_3521_In/Dell_Inspiron_15_3521_In_S_1.jpg",
            "product_name": "Dell Inspiron 15-3521"
        },
        {
            "price": "\nRs 34,999\n",
            "desc": ["Core i3, 2 GHz", "DDR3L SDRAM, 4GB, HDD, 1TB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_AC116TX/HP_15_AC116TX_S_1.jpg",
            "product_name": "HP 15-ac116tx"
        },
        {
            "price": "\nRs 36,000\n",
            "desc": ["Core i3, Core i5, Core i7, 1.7 GHz/1.9 ...", "DDR3L, 4GB, 8GB, HDD, 500GB, 1TB", "15.6 Inches, Windows 8.1 Single Languag...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_5547_In/Dell_Inspiron_15_5547_In_S_1.jpg",
            "product_name": "Dell Inspiron 15-5547"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7", "DDR4, 16GB, HDD, SSD, HDD+SSD/eMMC, 1TB...", "14.0 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Yoga_520/Lenovo_Yoga_520_S_1.jpg",
            "product_name": "Lenovo Yoga 520 (14\")"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_B40_70_59430741/Lenovo_B40_70_59430741_S_1.jpg",
            "product_name": "Lenovo B40 70 59430741"
        },
        {
            "price": "\nRs 30,790\n - ",
            "desc": ["Core i5, Core i3, 2.7 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_80_80E501LRIN/Lenovo_G50_80_80E501LRIN_S_1.jpg",
            "product_name": "Lenovo G50 80 80E501LRIN"
        },
        {
            "price": "\nRs 19,303\n",
            "desc": ["Celeron Dual Core, 1.5 GHz", "DDR3, 2GB, HDD, 500GB", "11.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_AO756_NUSGYSI014/Acer_AO756_NUSGYSI014_S_1.jpg",
            "product_name": "Acer AO756"
        },
        {
            "price": "\nRs 49,384\n",
            "desc": ["Core i3, Core i5, Core i7, Pentium Dual...", "DDR3L, 4GB, 8GB, HDD, SSD, 1TB, 128GB, ...", "14 inches, Windows 10 Home 64-bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Yoga_510/Lenovo_Yoga_510_S_1.jpg",
            "product_name": "Lenovo Yoga 510 (14\")"
        },
        {
            "price": "\nRs 37,999\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 750GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Toshiba_Satellite_L40_A_I0110/Toshiba_Satellite_L40_A_I0110_S_1.jpg",
            "product_name": "TOSHIBA Satellite L40-A-I0110"
        },
        {
            "price": "\nRs 83,990\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, SSD, 128GB", "13.3 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_Pro_13_SVP1321WSNB/Sony_VAIO_Pro_13_SVP1321WSNB_S_1.jpg",
            "product_name": "Sony Vaio Pro 13-SVP1321WSNB"
        },
        {
            "price": "\nRs 37,990\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 2GB, HDD, 500GB", "15.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_Fit_15E_SVF15212SNB/Sony_VAIO_Fit_15E_SVF15212SNB_S_1.jpg",
            "product_name": "Sony Vaio Fit 15E-SVF15212SNB"
        },
        {
            "price": "\nRs 47,990\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_N209TX_F6C49PA/HP_Pavilion_15_N209TX_F6C49PA_S_1.jpg",
            "product_name": "HP Pavilion 15-N209TX F6C49PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7", "DDR4, SSD", "15.6 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Yoga_720_15/Lenovo_Yoga_720_15_S_1.jpg",
            "product_name": "Lenovo Yoga 720 (15\")"
        },
        {
            "price": "\nRs 39,990\n",
            "desc": ["Pentium Quad Core, 2.17 GHz", "DDR3, 4GB, HDD, 500GB", "11.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_11_N016TU_X360_G4W74PA/HP_Pavilion_11_N016TU_X360_G4W74PA_S_1.jpg",
            "product_name": "HP Pavilion 11-N016TU-X360 G4W74PA"
        },
        {
            "price": "\nRs 51,990\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P077TX_J6M42PA/HP_Pavilion_15_P077TX_J6M42PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P077TX J6M42PA"
        },
        {
            "price": "\nRs 36,205\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Essential_G580_59_358263/Lenovo_Essential_G580_59_358263_S_1.jpg",
            "product_name": "Lenovo Essential G580 59-358263"
        },
        {
            "price": "\nRs 33,599\n",
            "desc": ["Core i3", "HDD, 320GB", "14 inches, Windows 7 Professional"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_1450_U520602IN8/Dell_Vostro_1450_U520602IN8_S_1.jpg",
            "product_name": "Dell Vostro 1450 U520602IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "4GB, HDD, 320GB, 500GB", "14 inches, Windows 7 Professional", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_3450_U520624IN8/Dell_Vostro_3450_U520624IN8_S_1.jpg",
            "product_name": "Dell Vostro 3450 U520624IN8"
        },
        {
            "price": "\nRs 25,399\n - ",
            "desc": ["Pentium Quad Core, 1.6 GHz", "DDR3L, 4GB, HDD, 500GB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_ay525tu/HP_15_ay525tu_S_1.jpg",
            "product_name": "HP 15-ay525tu"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7", "DDR4, SSD", "13.3 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Yoga_720/Lenovo_Yoga_720_S_1.jpg",
            "product_name": "Lenovo Yoga 720 (13\")"
        },
        {
            "price": "\nRs 26,498\n",
            "desc": ["Core i3, Core i5, 1.7 GHz/1.9 GHz", "DDR3L, 4GB, HDD, 500GB, 1TB", "14 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_14_3446/Dell_Vostro_14_3446_S_1.jpg",
            "product_name": "Dell Vostro 14-3446"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_N015TX_F2C13PA/HP_Pavilion_15_N015TX_F2C13PA_S_1.jpg",
            "product_name": "HP Pavilion 15-N015TX F2C13PA"
        },
        {
            "price": "\nRs 30,179\n",
            "desc": ["Core i3, 2.5 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Toshiba_Satellite_C50_A_I0012/Toshiba_Satellite_C50_A_I0012_S_1.jpg",
            "product_name": "TOSHIBA Satellite C50-A-I0012"
        },
        {
            "price": "\nRs 27,990\n - ",
            "desc": ["Core i3, 2 GHz", "DDR4 SDRAM, 4GB, HDD, 1TB", "15.6 inches, FreeDOS 2.0", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_ay542tu/HP_15_ay542tu_S_1.jpg",
            "product_name": "HP 15-ay542tu"
        },
        {
            "price": "\nRs 12,990\n",
            "desc": ["Atom Quad Core, 1.44 GHz", "LPDDR3, 2GB, HDD, 500GB", "10.10 inches, Windows 10 Home 64Bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_Switch_10_E/Acer_Aspire_Switch_10_E_S_1.jpg",
            "product_name": "Acer Aspire Switch 10 E SW3-016"
        },
        {
            "price": "\nRs 84,900\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3L, 4GB, HDD+SSD/eMMC, 500GB", "13.3 inches, X 10.7.3 (11D2515)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_13_2012/Apple_MacBook_Pro_13_2012_S_1.jpg",
            "product_name": "Apple MacBook Pro MD101HN/A (Mid 2012)"
        },
        {
            "price": "\nRs 45,998\n - ",
            "desc": ["Core i5, 2.2 GHz dual core", "DDR3L, 4GB, HDD, 1TB", "15.6 inches, Windows 10 Home (64-bit)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_AC123TX/HP_15_AC123TX_S_1.jpg",
            "product_name": "HP 15-ac123tx"
        },
        {
            "price": "\nRs 56,798\n",
            "desc": ["Core i5, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "13.3 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_SVT13135PNS/Sony_VAIO_SVT13135PNS_S_1.jpg",
            "product_name": "Sony Vaio SVT13135PNS"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD+SSD/eMMC, 500GB, 32GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_14z_W540782IN8/Dell_Inspiron_14z_W540782IN8_S_1.jpg",
            "product_name": "Dell Inspiron 14z W540782IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 320GB", "15.6 inches, Windows 7 Home Premium"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15R_N5110/Dell_Inspiron_15R_N5110_S_1.jpg",
            "product_name": "Dell Inspiron 15R N5110"
        },
        {
            "price": "\nRs 34,190\n - ",
            "desc": ["Core i3, Core i7, Celeron Dual Core, Co...", "DDR3L, 16GB, 4GB, 6GB, 8GB, HDD, 2TB", "15.60 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_5559/Dell_Inspiron_15_5559_S_1.jpg",
            "product_name": "Dell Inspiron 15-5559"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.5 GHz", "DDR3L, 8GB, HDD, 1TB", "15.6 Inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_ab214TX/HP_Pavilion_15_ab214TX_S_1.jpg",
            "product_name": "HP Pavilion 15-ab214tx"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.7 GHz", "DDR4, 16GB, SSD, 1TB", "13.90 inches, Windows 10 Home\r\nWindows ...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Yoga_910/Lenovo_Yoga_910_S_1.jpg",
            "product_name": "Lenovo Yoga 910"
        },
        {
            "price": "\nRs 69,040\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, SSD, 128GB", "11.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_Pro_11_SVP11213SNBI/Sony_VAIO_Pro_11_SVP11213SNBI_S_1.jpg",
            "product_name": "Sony Vaio Pro 11-SVP11213SNBI"
        },
        {
            "price": "\nRs 34,399\n - ",
            "desc": ["Core i3, 2.2 GHz", "DDR3, 4GB, 8GB, HDD, 500GB, 1TB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_E1_571G_NXM0DSI011/Acer_Aspire_E1_571G_NXM0DSI011_S_1.jpg",
            "product_name": "Acer Aspire E1-571G"
        },
        {
            "price": "\nRs 76,990\n - ",
            "desc": ["Core i5, Core i7", "8GB, 16GB, SSD, 128GB, 256GB, 512GB, 1TB", "13.5 inches, Windows 10 Pro", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Microsoft_Surface_Book/Microsoft_Surface_Book_S_1.jpg",
            "product_name": "Microsoft Surface Book"
        },
        {
            "price": "\nRs 29,000\n - ",
            "desc": ["Core i3, 2.3 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_E1_571_NXM09SI030/Acer_Aspire_E1_571_NXM09SI030_S_1.jpg",
            "product_name": "Acer Aspire E1-571"
        },
        {
            "price": "\nRs 183,720\n",
            "desc": ["Core i7, 3.4 GHz", "DDR3, 8GB, 16GB, HDD+SSD/eMMC, HDD, 750...", "17.3 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Alienware_17_W540903IN8/Dell_Alienware_17_W540903IN8_S_1.jpg",
            "product_name": "Dell Alienware 17 W540903IN8"
        },
        {
            "price": "\nRs 57,290\n - ",
            "desc": ["Core i5, 2.5 GHz", "DDR4 SDRAM, 8GB, HDD, 1TB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_au620tx/HP_Pavilion_15_au620tx_S_1.jpg",
            "product_name": "HP Pavilion 15-au620tx"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i7, 1.2 GHz", "DDR3, 8GB, SSD, 512GB, 256GB", "13.3 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Yoga_3_Pro_80HE00PCIN/Lenovo_Yoga_3_Pro_80HE00PCIN_S_1.jpg",
            "product_name": "Lenovo Yoga 3 Pro 80HE00PCIN"
        },
        {
            "price": "\n-\n",
            "desc": ["ARM, 1.6 GHz", "DDR3L, 1GB, 2GB, SSD, 16GB, 32GB", "10.1 Inches, Lenovo\u00ae customized Android...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Ideapad_A10/Lenovo_Ideapad_A10_S_1.jpg",
            "product_name": "Lenovo IdeaPad A10"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7", "DDR4, 64GB, HDD+SSD/eMMC, 1TB", "17.3 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Samsung_Odyssey/Samsung_Odyssey_S_1.jpg",
            "product_name": "Samsung Odyssey (17.3inch)"
        },
        {
            "price": "\nRs 19,984\n",
            "desc": ["AMD, 1 GHz", "DDR3, 2GB, HDD, 500GB", "11.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V5_121_NXM82SI004/Acer_Aspire_V5_121_NXM82SI004_S_1.jpg",
            "product_name": "Acer Aspire V5-121"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i7", "LPDDR3, 16GB, SSD, 512GB", "12.5 inches, Windows 10 Home\r\nWindows 1..."],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ZenBook_3/ASUS_ZenBook_3_S_1.jpg",
            "product_name": "ASUS ZenBook 3 UX390UA"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Quad Core, Celeron Dual Core, 2...", "DDR3L SDRAM, 2GB, 4GB, HDD, 500GB", "15.6 Inches, Linpus\u2122 Linux\u00ae", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Aspire_ES1_512_P65T/Aspire_ES1_512_P65T_S_1.jpg",
            "product_name": "Acer Aspire ES1-512-P65T"
        },
        {
            "price": "\nRs 28,232\n",
            "desc": ["Pentium Dual Core, 2.2 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_G580_59_356382/Lenovo_IdeaPad_G580_59_356382_S_1.jpg",
            "product_name": "Lenovo IdeaPad G580 59-356382"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.8 GHz", "DDR3, 4GB, HDD, 750GB", "15.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_Fit_15E_SVF1521KSNB/Sony_VAIO_Fit_15E_SVF1521KSNB_S_1.jpg",
            "product_name": "Sony Vaio Fit 15E-SVF1521KSNB"
        },
        {
            "price": "\nRs 34,999\n - ",
            "desc": ["Core i3, 2.00 GHz", "DDR4, 4GB, HDD, 1TB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_ay543tu/HP_15_ay543tu_S_1.jpg",
            "product_name": "HP 15-ay543tu"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, Core i3, Core i5, 1....", "DDR3L, 2GB, 4GB, HDD, 500GB, 1TB", "15.6 Inches, Ubuntu Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Latitude_15_3540/Dell_Latitude_15_3540_S_1.jpg",
            "product_name": "Dell Latitude 15-3540"
        },
        {
            "price": "\nRs 89,900\n - ",
            "desc": ["Core i5, 2.7 GHz", "LPDDR3 SDRAM, 8GB, SSD, 128GB", "13.3 inches, X 10.10.2 (14C2507)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_13_2013/Apple_MacBook_Pro_13_2013_S_1.jpg",
            "product_name": "Apple MacBook Pro MF839HN/A (Early 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["2 GHz", "LPDDR3, 4GB, eMMC, 32GB", "12.30 inches, Chrome OS", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Samsung_Chromebook_Plus/Samsung_Chromebook_Plus_S_1.jpg",
            "product_name": "Samsung Chromebook Plus"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8 SL Linux 64-bit ...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_15_3560/Dell_Vostro_15_3560_S_1.jpg",
            "product_name": "Dell Vostro 15-3560"
        },
        {
            "price": "\nRs 22,650\n",
            "desc": ["Atom Quad Core, 1.44 GHz", "LPDDR3 SDRAM, 2GB, eMMC, 32GB", "10.1 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_x2_210_10_T6T50PA/HP_x2_210_10_T6T50PA_S_1.jpg",
            "product_name": "HP x2 210 T6T50PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD+SSD/eMMC, 500GB, 32GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_14_B003TX_C0P30PA/HP_Pavilion_14_B003TX_C0P30PA_S_1.jpg",
            "product_name": "HP Pavilion 14-B003TX C0P30PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i7, 2.7 GHz(7500U) / 2.5 ...", "LPDDR3, 16GB, 8GB, SSD, 1TB, 256GB, 512GB", "13.3 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ZenBook_Flip_S_UX370UA/ASUS_ZenBook_Flip_S_UX370UA_S_1.jpg",
            "product_name": "ASUS ZenBook Flip S UX370UA"
        },
        {
            "price": "\nRs 19,240\n",
            "desc": ["Celeron Dual Core, 1.5 GHz", "DDR3, 2GB, HDD, 500GB", "11.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X200CA_KX072D/ASUS_X200CA_KX072D_S_1.jpg",
            "product_name": "ASUS X200CA-KX072D"
        },
        {
            "price": "\nRs 19,303\n - ",
            "desc": ["Celeron Dual Core, 1.5 GHz", "DDR3, 2GB, HDD, 500GB", "11.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V5_131_NXM87SI001/Acer_Aspire_V5_131_NXM87SI001_S_1.jpg",
            "product_name": "Acer Aspire V5-131"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i7, up to 2.7 GHz", "DDR3L, 8GB, HDD, 1TB", "15.6 Inches, Windows 8.1 (64Bit) English", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_5548/Dell_Inspiron_15_5548_S_1.jpg",
            "product_name": "Dell Inspiron 15-5548"
        },
        {
            "price": "\n-\n",
            "desc": ["Atom Quad Core", "LPDDR3, 2GB, 32GB", "12.20 inches, Android 6.0.1 Marshmallow", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Yoga_A12/Lenovo_Yoga_A12_S_1.jpg",
            "product_name": "Lenovo Yoga A12"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2226TU_C9L65PA/HP_Pavilion_G6_2226TU_C9L65PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2226TU C9L65PA"
        },
        {
            "price": "\nRs 70,990\n - ",
            "desc": ["Core i5, Core i7, 3.1 GHz", "DDR4, 8GB, HDD, 1TB", "15.6 inches, Windows 10 Home Single Lan...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_7560/Dell_Inspiron_15_7560_S_1.jpg",
            "product_name": "Dell Inspiron 15-7560"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, HDD, 1TB", "15.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_Fit_15E_SVF15319SNB/Sony_VAIO_Fit_15E_SVF15319SNB_S_1.jpg",
            "product_name": "Sony Vaio Fit 15E-SVF15319SNB"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i7, 2.8 GHz (Intel Core i...", "DDR4, 16GB, 8GB, SSD, 1TB, 256GB, 512GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ZenBook_Pro_UX550/ASUS_ZenBook_Pro_UX550_S_1.jpg",
            "product_name": "ASUS ZenBook Pro UX550"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, HDD, 500GB", "13.3 inches, Windows 7 Home Premium 64Bit"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Samsung_NP530U3B_A02IN/Samsung_NP530U3B_A02IN_S_1.jpg",
            "product_name": "Samsung NP530U3B-A02IN"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i3, 2.5 GHz", "DDR3, 8GB, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_J120TX_F7P49PA/HP_Envy_15_J120TX_F7P49PA_S_1.jpg",
            "product_name": "HP Envy 15-J120TX F7P49PA"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, Core i5, Core i7", "DDR4, 32GB, HDD, SSD, 2TB, 512GB", "15.60 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Nitro_5/Acer_Nitro_5_S_1.jpg",
            "product_name": "Acer Nitro 5"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3L, 4GB, HDD, 1TB", "15.6 inches, FreeDOS 2.0", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_AC042TU/HP_15_AC042TU_S_1.jpg",
            "product_name": "HP 15-ac042yu"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.2 GHz", "DDR3L SDRAM, 8GB, 16GB, HDD, 1TB", "15.6 inches, Windows 8.1 64-bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V3_574G/Acer_Aspire_V3_574G_S_1.jpg",
            "product_name": "Acer Aspire V3-574G"
        },
        {
            "price": "\nRs 42,500\n",
            "desc": ["Core i5, 2.2 GHz", "DDR3L, 4GB, HDD, 1TB", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_30_80E5021XIN/Lenovo_G50_30_80E5021XIN_S_1.jpg",
            "product_name": "Lenovo G50-80 80E5021XIN"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Toshiba_Satellite_P50_AX3111/Toshiba_Satellite_P50_AX3111_S_1.jpg",
            "product_name": "TOSHIBA Satellite P50-AX3111"
        },
        {
            "price": "\nRs 48,620\n - ",
            "desc": ["Core i3, Core i5, Core i7", "DDR4, 4GB, 8GB, 16GB, HDD, 1TB", "13.3 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_13_5378/Dell_Inspiron_13_5378_S_1.jpg",
            "product_name": "Dell Inspiron 13-5378"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_E024TU_F0C25PA/HP_Pavilion_15_E024TU_F0C25PA_S_1.jpg",
            "product_name": "HP Pavilion 15-E024TU F0C25PA"
        },
        {
            "price": "\n-\n",
            "desc": ["0.8 GHz", "DDR2, 1GB, HDD, 40GB, 60GB", "7 inches, Windows Vista Business", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HTC_Shift_X9000/HTC_Shift_X9000_S_1.jpg",
            "product_name": "HTC Shift X9000"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 2 GHz", "DDR3, 4GB, HDD, 320GB", "15.6 inches, Windows 7 Home Basic 64Bit"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Essential_G580_59_349730/Lenovo_Essential_G580_59_349730_S_1.jpg",
            "product_name": "Lenovo Essential G580 59-349730"
        },
        {
            "price": "\nRs 80,290\n - ",
            "desc": ["Core i7", "16GB, 8GB, SSD, 1TB, 256GB, 512GB", "13.30 inches, Windows 10 Home 64\r\nWindo...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_ENVY_13t/HP_ENVY_13t_S_1.jpg",
            "product_name": "HP ENVY 13"
        },
        {
            "price": "\nRs 30,499\n",
            "desc": ["Core i3, Pentium Quad Core", "2GB, 4GB, HDD, 160GB, 500GB, 1TB", "Windows 7", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_DM3_Series/HP_Pavilion_DM3_Series_S_1.jpg",
            "product_name": "HP Pavilion DM3-Series"
        },
        {
            "price": "\nRs 57,990\n - ",
            "desc": ["Core i3, Core i5, Core i7", "DDR4, 16GB, 4GB, 8GB, HDD, 1TB, 2TB", "15.6 inches, Windows 10 Home Single Lan...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_5567/Dell_Inspiron_15_5567_S_1.jpg",
            "product_name": "Dell Inspiron 15-5567"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i3, 1.6 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 7 Professional 64Bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Latitude_14_3000_W720784IN8/Dell_Latitude_14_3000_W720784IN8_S_1.jpg",
            "product_name": "Dell Latitude 14 3000 W720784IN8"
        },
        {
            "price": "\nRs 30,179\n",
            "desc": ["Core i3, 2.5 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Toshiba_Satellite_C50_A_I0011/Toshiba_Satellite_C50_A_I0011_S_1.jpg",
            "product_name": "TOSHIBA Satellite C50-A-I0011"
        },
        {
            "price": "\nRs 65,750\n",
            "desc": ["Core i3", "DDR3, 2GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_ThinkPad_Edge_E431_62771F1/Lenovo_ThinkPad_Edge_E431_62771F1_S_1.jpg",
            "product_name": "Lenovo ThinkPad Edge E431-62771F1"
        },
        {
            "price": "\n-\n",
            "desc": ["Atom, 1.8 GHz", "LPDDR2, 2GB, SSD, 64GB", "11.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Samsung_ATIV_Smart_PC_500T1C_XE500T1C_A01IN/Samsung_ATIV_Smart_PC_500T1C_XE500T1C_A01IN_S_1.jpg",
            "product_name": "Samsung ATIV Smart PC 500T1C XE500T1C A01IN"
        },
        {
            "price": "\nRs 22,670\n - ",
            "desc": ["HDD, 320GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Probook_4410_Black/HP_Probook_4410_Black_S_1.jpg",
            "product_name": "HP ProBook 4410 Black"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.65 GHz", "DDR3, 2GB, HDD, 320GB", "11.6 inches, Windows 7 Starter 32Bit Se...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_VPCYB35AN_B/Sony_VAIO_VPCYB35AN_B_S_1.jpg",
            "product_name": "Sony Vaio VPCYB35AN/B"
        },
        {
            "price": "\nRs 19,900\n",
            "desc": ["AMD, 1.7 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X55U_SX048D/ASUS_X55U_SX048D_S_1.jpg",
            "product_name": "ASUS X55U-SX048D"
        },
        {
            "price": "\nRs 30,179\n",
            "desc": ["Core i3, 2.5 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Toshiba_Satellite_C50_A_I0010/Toshiba_Satellite_C50_A_I0010_S_1.jpg",
            "product_name": "TOSHIBA Satellite C50-A-I0010"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.8 GHz", "DDR3 SDRAM, 6GB, HDD, 500GB", "14 inches, Windows 8 (64-Bit)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V7_481P/Acer_Aspire_V7_481P_S_1.jpg",
            "product_name": "Acer Aspire V7-481P"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5", "13.1 inches, Windows 7 Professional"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_VPCZ136GG_B/Sony_VAIO_VPCZ136GG_B_S_1.jpg",
            "product_name": "Sony Vaio VPCZ136GG/B"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 3.1 GHz", "DDR3, 4GB, HDD+SSD/eMMC, 500GB, 24GB", "14 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_VivoBook_S400CA_CA165H/ASUS_VivoBook_S400CA_CA165H_S_1.jpg",
            "product_name": "ASUS VivoBook S400CA-CA165H"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 1.8 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Samsung_NP300E5V_A03IN/Samsung_NP300E5V_A03IN_S_1.jpg",
            "product_name": "Samsung NP300E5V-A03IN"
        },
        {
            "price": "\nRs 34,890\n - ",
            "desc": ["Core i3, 2.00 GHz", "DDR4 SDRAM, 8GB, HDD, 1TB", "15.6 inches, FreeDOS 2.0", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_ay513tx/HP_15_ay513tx_S_1.jpg",
            "product_name": "HP 15-ay513tx"
        },
        {
            "price": "\nRs 93,622\n - ",
            "desc": ["Core i7", "DDR4, 8GB, SSD, 256GB", "14.00 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_YOGA_710/Lenovo_YOGA_710_S_1.jpg",
            "product_name": "Lenovo YOGA 710 (14\")"
        },
        {
            "price": "\nRs 32,140\n",
            "desc": ["Pentium Dual Core, 1.5 GHz", "DDR3, 2GB, HDD, 500GB", "14 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V5_431/Acer_Aspire_V5_431_S_1.jpg",
            "product_name": "Acer Aspire V5-431"
        },
        {
            "price": "\nRs 58,245\n",
            "desc": ["Core i5, Core i3, 1.6 GHz", "DDR3, 4GB, HDD, 500GB, 1TB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_E1_572_NXM8ESI002/Acer_Aspire_E1_572_NXM8ESI002_S_1.jpg",
            "product_name": "Acer Aspire E1-572"
        },
        {
            "price": "\nRs 31,990\n",
            "desc": ["Celeron Dual Core, Core i3, Core i5, 1....", "DDR3, DDR3L, 4GB, HDD, 500GB, 1TB", "15.6 Inches, Windows 8.1 Ubuntu", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_15_3546/Dell_Vostro_15_3546_S_1.jpg",
            "product_name": "Dell Vostro 15-3546"
        },
        {
            "price": "\nRs 39,990\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P017TU_J2C44PA/HP_Pavilion_15_P017TU_J2C44PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P017TU J2C44PA"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.5 GHz", "DDR3, 2GB, 4GB, HDD, 500GB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_E1_522_NXM81SI008/Acer_Aspire_E1_522_NXM81SI008_S_1.jpg",
            "product_name": "Acer Aspire E1-522"
        },
        {
            "price": "\nRs 30,990\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R074TU_J8B82PA/HP_15_R074TU_J8B82PA_S_1.jpg",
            "product_name": "HP 15-R074TU J8B82PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core M, 0.9 GHz", "LPDDR3 SDRAM, 4GB, HDD, 1TB", "11.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_11_K106TU/HP_Pavilion_11_K106TU_S_1.jpg",
            "product_name": "HP Pavilion 11-K106TU"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.5 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Toshiba_Satellite_C50D_A_40010/Toshiba_Satellite_C50D_A_40010_S_1.jpg",
            "product_name": "TOSHIBA Satellite C50D-A-40010"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 2.4 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Toshiba_Satellite_C50_A_P0013/Toshiba_Satellite_C50_A_P0013_S_1.jpg",
            "product_name": "TOSHIBA Satellite C50-A-P0013"
        },
        {
            "price": "\nRs 59,990\n",
            "desc": ["Core i7, 2 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P045TX_J2C71PA/HP_Pavilion_15_P045TX_J2C71PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P045TX J2C71PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, Core i5, 2.4 GHz", "DDR3L, 8GB, 4GB, HDD, HDD+SSD/eMMC, 1TB...", "15.6 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Z51_70_80K600VVIN/Lenovo_Z51_70_80K600VVIN_S_1.jpg",
            "product_name": "Lenovo Z51 70 80K600VVIN"
        },
        {
            "price": "\nRs 48,990\n - ",
            "desc": ["Core i5, 2.3 GHz", "DDR4 SDRAM, 8GB, HDD, 1TB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_ay507tx/HP_15_ay507tx_S_1.jpg",
            "product_name": "HP 15-ay507tx"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Quad Core, 2.16 GHz", "DDR3L SDRAM, 2GB, HDD, 500GB", "15.6 inches, Windows 8.1 64-bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Aspire_E5_511_P25J/Aspire_E5_511_P25J_S_1.jpg",
            "product_name": "Acer Aspire E5-511-P25J"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.4 GHz", "DDR3L SDRAM, 4GB, SSD, 128GB", "13.3 inches, X 10.9 (13A2093)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_13_2013/Apple_MacBook_Pro_13_2013_S_1.jpg",
            "product_name": "Apple MacBook Pro ME864HN/A (Late 2013)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core M, m3(1.1GHz), m5(1.2GHz), m7(1.3GHz)", "LPDDR3, 8GB, SSD, 256GB, 512GB", "12 inches, OS X El Capitan", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_2016/Apple_MacBook_2016_S_1.jpg",
            "product_name": "Apple MacBook (Early 2016)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5", "HDD, 320GB", "15.5 inches, Windows 7 Professional"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_VPCEB3AGG_BI/Sony_VAIO_VPCEB3AGG_BI_S_1.jpg",
            "product_name": "Sony Vaio VPCEB3AGG/BI"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, 1.46 GHz", "DDR3, 2GB, HDD, 500GB", "10.1 Inches, Windows 8.1 64 bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Flex_10/Lenovo_IdeaPad_Flex_10_S_1.jpg",
            "product_name": "Lenovo IdeaPad Flex 10"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i3", "4GB, HDD, 500GB", "14 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G4_1010TX_LN402PA/HP_Pavilion_G4_1010TX_LN402PA_S_1.jpg",
            "product_name": "HP Pavilion G4-1010TX LN402PA"
        },
        {
            "price": "\nRs 30,990\n",
            "desc": ["Core i3, 2.00 GHz", "DDR3L, 4GB, HDD, 1TB", "15.6 inches, Free-DOS", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_80_80E502Q3IH/Lenovo_G50_80_80E502Q3IH_S_1.jpg",
            "product_name": "Lenovo G50-80 80E502Q3IH"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i7", "DDR4, 16GB, 4GB, 8GB, HDD, SSD, 1TB, 500GB", "15.6 inches, Windows 10 64-bit Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Huawei_MateBook_D/Huawei_MateBook_D_S_1.jpg",
            "product_name": "Huawei MateBook D"
        },
        {
            "price": "\nRs 27,925\n",
            "desc": ["Pentium Dual Core, Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V5_572_NXM9YSI011/Acer_Aspire_V5_572_NXM9YSI011_S_1.jpg",
            "product_name": "Acer Aspire V5-572"
        },
        {
            "price": "\nRs 23,599\n - ",
            "desc": ["Pentium Dual Core, 1.8 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X551CA_SX043D/ASUS_X551CA_SX043D_S_1.jpg",
            "product_name": "ASUS X551CA-SX043D"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_5750_Corei3_2310M/Acer_Aspire_5750_Corei3_2310M_S_1.jpg",
            "product_name": "Acer Aspire 5750 Core i3 2310M"
        },
        {
            "price": "\nRs 114,990\n",
            "desc": ["Core i7, 2.2 GHz", "DDR3, 8GB, HDD, 1TB", "17.3 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_17_J102TX_F2D12PA/HP_Envy_17_J102TX_F2D12PA_S_1.jpg",
            "product_name": "HP Envy 17-J102TX F2D12PA"
        },
        {
            "price": "\nRs 49,990\n",
            "desc": ["Core i5, Core i7, 2.2 GHz", "DDR3L, 8GB, HDD, 1TB", "15.6 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Z51_70_80K600VWIN/Lenovo_Z51_70_80K600VWIN_S_1.jpg",
            "product_name": "Lenovo Z51 70 80K600VWIN"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7", "HDD, 750GB", "14 inches, Windows 7 Home Premium"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Alienware_M14x_Corei7_2820QM/Dell_Alienware_M14x_Corei7_2820QM_S_1.jpg",
            "product_name": "Dell Alienware M14x Core i7 2820QM"
        },
        {
            "price": "\nRs 35,687\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X550CC/ASUS_X550CC_S_1.jpg",
            "product_name": "ASUS X550CC-XX922D"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "LPDDR3 SDRAM, 4GB, SSD, 128GB", "11.6 inches, X 10.10.2 (14C2507)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Air_11_2015/Apple_MacBook_Air_11_2015_S_1.jpg",
            "product_name": "Apple MacBook Air MJVM2HN/A (Early 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, 2.1 GHz", "2GB, HDD, 500GB", "11.6 Inches, Windows 8.1 64-bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_E3_112_In/Acer_Aspire_E3_112_In_S_1.jpg",
            "product_name": "Acer Aspire E3-112"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.2 GHz", "DDR3L, 4GB, HDD, 1TB", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_80_80E501FUIN/Lenovo_G50_80_80E501FUIN_S_1.jpg",
            "product_name": "Lenovo G50-80 80E501FUIN"
        },
        {
            "price": "\nRs 25,200\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "11.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X200LA_KX034D/ASUS_X200LA_KX034D_S_1.jpg",
            "product_name": "ASUS X200LA-KX034D"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Samsung_NP_RV509_S01IN/Samsung_NP_RV509_S01IN_S_1.jpg",
            "product_name": "Samsung NP-RV509-S01IN"
        },
        {
            "price": "\n-\n",
            "desc": ["HDD, 250GB", "Windows Vista Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_14_DualCore_T4200/Dell_Inspiron_14_DualCore_T4200_S_1.jpg",
            "product_name": "Dell Inspiron 14 Dual Core T4200"
        },
        {
            "price": "\nRs 21,889\n",
            "desc": ["AMD, 1.3 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_45_80E3005RIN/Lenovo_G50_45_80E3005RIN_S_1.jpg",
            "product_name": "Lenovo G50 45 80E3005RIN"
        },
        {
            "price": "\nRs 40,886\n",
            "desc": ["Core i3, 2.00 GHz", "DDR4 SDRAM, 8GB, HDD, 1TB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_ay511tx/HP_15_ay511tx_S_1.jpg",
            "product_name": "HP 15-ay511tx"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, Pentium Quad Core, 2...", "DDR3L SDRAM, 2GB, 4GB, HDD, 500GB", "15.6 Inches, Windows 8.1 64-bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Aspire_ES1_512_C3X9/Aspire_ES1_512_C3X9_S_1.jpg",
            "product_name": "Acer Aspire ES1-512-C3X9"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.1 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P202TX_K8U14PA/HP_Pavilion_15_P202TX_K8U14PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P202TX K8U14PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "13.3 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_VivoBook_S300CA_C1033H/ASUS_VivoBook_S300CA_C1033H_S_1.jpg",
            "product_name": "ASUS VivoBook S300CA-C1033H"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Linux Ubuntu"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_N011TU_F0C30PA/HP_Pavilion_15_N011TU_F0C30PA_S_1.jpg",
            "product_name": "HP Pavilion 15-N011TU F0C30PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.8 GHz", "DDR3, 4GB, SSD, 256GB", "13.3 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_S7/Acer_Aspire_S7_S_1.jpg",
            "product_name": "Acer Aspire S7-391"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 750GB", "14 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_14_SVE14137CNB/Sony_VAIO_14_SVE14137CNB_S_1.jpg",
            "product_name": "Sony Vaio 14-SVE14137CNB"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.7 GHz", "DDR3, 2GB, HDD, 500GB", "15.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_Fit_15E_SVF15413SNB/Sony_VAIO_Fit_15E_SVF15413SNB_S_1.jpg",
            "product_name": "Sony Vaio Fit 15E-SVF15413SNB"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 2GB, HDD, 500GB", "15.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_Fit_15E_SVF1521ASNB/Sony_VAIO_Fit_15E_SVF1521ASNB_S_1.jpg",
            "product_name": "Sony Vaio Fit 15E-SVF1521ASNB"
        },
        {
            "price": "\nRs 21,613\n - ",
            "desc": ["Celeron Dual Core, 1.5 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X551CA_SX021D/ASUS_X551CA_SX021D_S_1.jpg",
            "product_name": "ASUS X551CA-SX021D"
        },
        {
            "price": "\nRs 44,990\n",
            "desc": ["Atom Dual Core, 1.8 GHz", "LPDDR2, 2GB, SSD, 64GB", "11.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_X2_11_G004TU_C8C95PA/HP_Envy_X2_11_G004TU_C8C95PA_S_1.jpg",
            "product_name": "HP Envy X2-11-G004TU C8C95PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 320GB", "15.6 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_5742G_Corei3/Acer_Aspire_5742G_Corei3_S_1.jpg",
            "product_name": "Acer Aspire 5742G Core i3"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.5 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_14_SVE14135CNB/Sony_VAIO_14_SVE14135CNB_S_1.jpg",
            "product_name": "Sony Vaio 14-SVE14135CNB"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 3.1 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 7 Home Premium 64Bit"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_14R_Special_Edition_V540442IN8/Dell_Inspiron_14R_Special_Edition_V540442IN8_S_1.jpg",
            "product_name": "Dell Inspiron 14R Special Edition V540442IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 2GB, HDD, 500GB", "15.5 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_SVE15123CNB/Sony_VAIO_SVE15123CNB_S_1.jpg",
            "product_name": "Sony Vaio SVE15123CNB"
        },
        {
            "price": "\nRs 115,190\n",
            "desc": ["Core i7", "DDR4, 8GB, 16GB, HDD, SSD, SSHD, 1TB, 2...", "15.6 inches, Windows 10 Home Single Lan...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_15_7567/Dell_Inspiron_15_7567_S_1.jpg",
            "product_name": "Dell Inspiron 15-7567"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 7 Professional 64Bit"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_SVE14116GNB/Sony_VAIO_SVE14116GNB_S_1.jpg",
            "product_name": "Sony Vaio SVE14116GNB"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.5 GHz", "DDR3, 2GB, HDD, 500GB", "15.5 inches, Linux Red Flag in Wise V8....", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Sony_VAIO_SVE1513BYNB/Sony_VAIO_SVE1513BYNB_S_1.jpg",
            "product_name": "Sony Vaio SVE1513BYNB"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 250GB", "14 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Samsung_NP_R439_DT02IN/Samsung_NP_R439_DT02IN_S_1.jpg",
            "product_name": "Samsung NP-R439-DT02IN"
        },
        {
            "price": "\nRs 31,150\n",
            "desc": ["Core i3", "DDR3, 2GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_G500S_59_383037/Lenovo_IdeaPad_G500S_59_383037_S_1.jpg",
            "product_name": "Lenovo IdeaPad G500S 59-383037"
        },
        {
            "price": "\nRs 30,189\n",
            "desc": ["Core i3, 2.00 GHz", "DDR4 SDRAM, 4GB, HDD, 1TB", "15.6 inches, FreeDOS 2.0", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_ay564tu/HP_15_ay564tu_S_1.jpg",
            "product_name": "HP 15-ay564tu"
        },
        {
            "price": "\nRs 28,799\n - ",
            "desc": ["AMD, 2.2 GHz", "DDR3L SDRAM, 4GB, HDD, 1TB", "15.6 inches, FreeDOS 2.0", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_ba017ax/HP_15_ba017ax_S_1.jpg",
            "product_name": "HP 15-ba017ax"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, Core i5, Pentium Dual Core, 1....", "DDR3L, 4GB, HDD, 500GB, 1TB", "14 Inches, Windows 8.1 Single Language ...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_14_3442_In/Dell_Inspiron_14_3442_In_S_1.jpg",
            "product_name": "Dell Inspiron 14-3442"
        },
        {
            "price": "\nRs 34,777\n",
            "desc": ["AMD, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z585/Lenovo_IdeaPad_Z585_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z585 59-347937"
        },
        {
            "price": "\nRs 29,171\n",
            "desc": ["Core i3, 2.3 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Essential_G580_59_361898/Lenovo_Essential_G580_59_361898_S_1.jpg",
            "product_name": "Lenovo Essential G580 59-361898"
        },
        {
            "price": "\nRs 154,755\n",
            "desc": ["Core i7, 2.2 GHz", "DDR3L SDRAM, 16GB, SSD, 256GB", "15.4 inches, X 10.10.3 (14D2134)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_15_2013/Apple_MacBook_Pro_15_2013_S_1.jpg",
            "product_name": "Apple MacBook Pro MJLQ2HN/A (Mid 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.9 GHz", "DDR3L, 8GB, HDD+SSD/eMMC, 750GB", "13.3 inches, X 10.7.3 (11D2515)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_13_2012/Apple_MacBook_Pro_13_2012_S_1.jpg",
            "product_name": "Apple MacBook Pro 13-inch MD102HN/A Mid 2012"
        },
        {
            "price": "\nRs 88,768\n - ",
            "desc": ["Core i5", "DDR3L, 8GB, SSHD, 1TB", "15.6 inches, Windows 10 Home Single Lan...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_7559/Dell_Inspiron_7559_S_1.jpg",
            "product_name": "Dell Inspiron 15-7559"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 500GB", "15.6 inches, Windows 7 Home Premium"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Studio_XPS_15_T541101IN8/Dell_Studio_XPS_15_T541101IN8_S_1.jpg",
            "product_name": "Dell Studio XPS 15 T541101IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_N261TX_G2H03PA/HP_Pavilion_15_N261TX_G2H03PA_S_1.jpg",
            "product_name": "HP Pavilion 15-N261TX G2H03PA"
        },
        {
            "price": "\nRs 82,999\n",
            "desc": ["Core i7, 2.4 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_CN135H_G56JR/ASUS_CN135H_G56JR_S_1.jpg",
            "product_name": "ASUS CN135H-G56JR"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 7 Professional"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_ThinkPad_T430_2349O92/Lenovo_ThinkPad_T430_2349O92_S_1.jpg",
            "product_name": "Lenovo ThinkPad T430 2349O92"
        },
        {
            "price": "\nRs 62,990\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_K004TX_J2C49PA/HP_Envy_15_K004TX_J2C49PA_S_1.jpg",
            "product_name": "HP Envy 15-K004TX J2C49PA"
        },
        {
            "price": "\nRs 39,990\n - ",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P018TU_J2C45PA/HP_Pavilion_15_P018TU_J2C45PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P018TU J2C45PA"
        },
        {
            "price": "\nRs 47,990\n - ",
            "desc": ["Core i3, 2.4 GHz", "DDR4 SDRAM, 4GB, HDD, 1TB", "13.3 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_13_u131tu/HP_Pavilion_13_u131tu_S_1.jpg",
            "product_name": "HP Pavilion x360 13-u131tu"
        },
        {
            "price": "\nRs 88,900\n",
            "desc": ["Core i7, 2.5 GHz", "DDR3L, 8GB, HDD+SSD/eMMC, 1TB, 8GB", "15.6 Inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Y50_70_59_441908/Lenovo_Y50_70_59_441908_S_1.jpg",
            "product_name": "Lenovo Y50 70 59-441908"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Quad Core, 2.16 GHz", "DDR3, 2GB, HDD, 500GB", "11.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X200MA/ASUS_X200MA_S_1.jpg",
            "product_name": "ASUS X200MA-KX495B"
        },
        {
            "price": "\nRs 22,370\n",
            "desc": ["AMD, 1 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X552EA/ASUS_X552EA_S_1.jpg",
            "product_name": "ASUS X552EA-SX009D"
        },
        {
            "price": "\nRs 27,237\n",
            "desc": ["AMD, 1.5 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X552EA/ASUS_X552EA_S_1.jpg",
            "product_name": "ASUS X552EA-SX006D"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 2.2 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Gateway_NE56R_Pentium_Dual_CoreLnx/Acer_Gateway_NE56R_Pentium_Dual_CoreLnx_S_1.jpg",
            "product_name": "Acer Gateway NE56R Pentium Dual Core Lnx"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 2.1 GHz", "DDR3, 4GB, HDD, 500GB", "11.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_VivoBook_S200E_CT162H/ASUS_VivoBook_S200E_CT162H_S_1.jpg",
            "product_name": "ASUS VivoBook S200E-CT162H"
        },
        {
            "price": "\nRs 22,393\n - ",
            "desc": ["Celeron Dual Core, ARM, 1.4 GHz", "DDR3, 2GB, 4GB, SSD, 16GB, 32GB", "11.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Chromebook_C720_29552G01aii/Acer_Chromebook_C720_29552G01aii_S_1.jpg",
            "product_name": "Acer Chromebook C720 29552G01aii"
        },
        {
            "price": "\nRs 71,442\n",
            "desc": ["Core i5, 1.6 GHz", "LPDDR3 SDRAM, 4GB, SSD, 128GB", "13.3 inches, X 10.10.2 (14C2507)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Air_13_2015/Apple_MacBook_Air_13_2015_S_1.jpg",
            "product_name": "Apple MacBook Air MJVE2HN/A (Early 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.8 GHz", "DDR3L SDRAM, 8GB, SSD, 512GB", "13.3 inches, X 10.9.4 (13E28)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_13_2013/Apple_MacBook_Pro_13_2013_S_1.jpg",
            "product_name": "Apple MacBook Pro 13-inch Retina MGX92HN/A Mid 2014"
        },
        {
            "price": "\nRs 44,847\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X550LD_XX064D/ASUS_X550LD_XX064D_S_1.jpg",
            "product_name": "ASUS X550LD-XX064D"
        },
        {
            "price": "\nRs 72,999\n - ",
            "desc": ["Core i7, 2.8 GHz", "DDR4 SDRAM, 16GB, HDD, SSD, 1TB, 128GB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Omen_15_ax250tx/HP_Omen_15_ax250tx_S_1.jpg",
            "product_name": "HP 15-ax250tx Omen"
        },
        {
            "price": "\nRs 85,490\n - ",
            "desc": ["Core i5, Core i7", "DDR4 SDRAM, 16GB, 8GB, HDD+SSD/eMMC, 1T...", "15.60 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ROG_GL552VW/ASUS_ROG_GL552VW_S_1.jpg",
            "product_name": "ASUS ROG GL552VW"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, 2.16 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_30_80G000D4IN/Lenovo_G50_30_80G000D4IN_S_1.jpg",
            "product_name": "Lenovo G50-30 80G000D4IN"
        },
        {
            "price": "\nRs 32,490\n - ",
            "desc": ["Core i3, Core i5", "DDR3 SDRAM, 4GB, 2GB, HDD, 500GB", "15.9 inches, Windows 10 Home\r\nDOS", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Asus_A555LF/Asus_A555LF_S_1.jpg",
            "product_name": "ASUS A555LF"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5", "4GB, HDD, 640GB, 500GB", "15.6 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_1004TX_LN388PA/HP_Pavilion_G6_1004TX_LN388PA_S_1.jpg",
            "product_name": "HP Pavilion G6-1004TX LN388PA"
        },
        {
            "price": "\nRs 58,199\n",
            "desc": ["Core i7, 2.1 GHz", "DDR3, 8GB, 6GB, HDD, 1TB", "15.6 inches, Windows 7 Home Premium 64Bit"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z580_59_339356/Lenovo_IdeaPad_Z580_59_339356_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z580 59-339356"
        },
        {
            "price": "\nRs 82,990\n",
            "desc": ["Core i7, 2 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_K006TX_J2C51PA/HP_Envy_15_K006TX_J2C51PA_S_1.jpg",
            "product_name": "HP Envy 15-K006TX J2C51PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3L SDRAM, 8GB, SSD, 128GB", "13.3 inches, X 10.8.2 (12C2034)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_13_Retina/Apple_MacBook_Pro_13_Retina_S_1.jpg",
            "product_name": "Apple MacBook Pro MD212HN/A Retina 128GB Late 2012"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.4 GHz", "DDR3, 4GB, HDD, 500GB, 1TB", "13.3 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_U310_59_341069/Lenovo_IdeaPad_U310_59_341069_S_1.jpg",
            "product_name": "Lenovo IdeaPad U310 59 341069"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X550CA/ASUS_X550CA_S_1.jpg",
            "product_name": "ASUS X550CA-XO096H"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, 1.4 GHz", "DDR3, 2GB, 4GB, HDD, 500GB", "11.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_11_3000_W540359IN8/Dell_Inspiron_11_3000_W540359IN8_S_1.jpg",
            "product_name": "Dell Inspiron 11 3000 W540359IN8"
        },
        {
            "price": "\nRs 35,390\n - ",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, SSD, 128GB", "13.3 inches, Windows 7 Home Premium", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_U300s_Corei5/Lenovo_U300s_Corei5_S_1.jpg",
            "product_name": "Lenovo U300s Core i5"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5", "HDD, 320GB", "13.3 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_13z_U540803IN8/Dell_Inspiron_13z_U540803IN8_S_1.jpg",
            "product_name": "Dell Inspiron 13z U540803IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.7 GHz", "64GB", "17 Inches, Windows 10 Pro", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Asus_ROG_GX700/Asus_ROG_GX700_S_1.jpg",
            "product_name": "ASUS ROG GX700"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3, 6GB, HDD, 750GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_M6_1102TX_C0N92PA/HP_Envy_M6_1102TX_C0N92PA_S_1.jpg",
            "product_name": "HP Envy M6-1102TX C0N92PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.4 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Essential_G580_59_324061/Lenovo_Essential_G580_59_324061_S_1.jpg",
            "product_name": "Lenovo Essential G580 59-324061"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 500GB", "14 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HCL_ME_AE1V2660_I/HCL_ME_AE1V2660_I_S_1.jpg",
            "product_name": "HCL ME AE1V2660-I"
        },
        {
            "price": "\nRs 37,033\n",
            "desc": ["Pentium Dual Core, 1.6 GHz", "DDR3, 2GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V5_431P_NXM7LSI001/Acer_Aspire_V5_431P_NXM7LSI001_S_1.jpg",
            "product_name": "Acer Aspire V5-431P"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, SSD, 128GB", "13.3 inches, Windows 7 Home Premium 64Bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_Spectre_XT_13_2001TU_B6U56PA/HP_Envy_Spectre_XT_13_2001TU_B6U56PA_S_1.jpg",
            "product_name": "HP Envy Spectre XT-13-2001TU B6U56PA"
        },
        {
            "price": "\nRs 107,702\n",
            "desc": ["Core i5, 2.7 GHz", "LPDDR3 SDRAM, 8GB, SSD, 256GB", "13.3 inches, X 10.10.2 (14C2507)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_13_2013/Apple_MacBook_Pro_13_2013_S_1.jpg",
            "product_name": "Apple MacBook Pro MF840HN/A (Early 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 320GB", "14 inches, Windows 7 Professional", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_ThinkPad_Edge_E420_11412PQ/Lenovo_ThinkPad_Edge_E420_11412PQ_S_1.jpg",
            "product_name": "Lenovo ThinkPad Edge E420-11412PQ"
        },
        {
            "price": "\nRs 55,299\n",
            "desc": ["Core M", "LPDDR3 SDRAM, 4GB, 8GB, SSD, 128GB, 256...", "13.3 inches, Windows 10 Home\r\nWindows 1...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ZenBook_UX305CA/ASUS_ZenBook_UX305CA_S_1.jpg",
            "product_name": "ASUS ZenBook UX305CA"
        },
        {
            "price": "\nRs 34,990\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_D002TX_F7Q71PA/HP_15_D002TX_F7Q71PA_S_1.jpg",
            "product_name": "HP 15-D002TX F7Q71PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 320GB", "14 inches, Windows 7 Professional"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_1440_U520717IN8/Dell_Vostro_1440_U520717IN8_S_1.jpg",
            "product_name": "Dell Vostro 1440 U520717IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 4GB, HDD, 320GB", "15.6 inches, Windows 7 Home Basic 64Bit"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Essential_G580_IMR_59_347375/Lenovo_Essential_G580_IMR_59_347375_S_1.jpg",
            "product_name": "Lenovo Essential G580 IMR 59-347375"
        },
        {
            "price": "\nRs 142,002\n",
            "desc": ["Core i7, 2.2 GHz", "DDR3L SDRAM, 16GB, SSD, 256GB", "15.4 inches, X 10.9.4 (13E28)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_15_2013/Apple_MacBook_Pro_15_2013_S_1.jpg",
            "product_name": "Apple MacBook Pro 15-inch Retina MGXA2HN/A Mid 2014"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, 2.16 GHz", "DDR3, 2GB, HDD, 500GB", "14 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_14_R113TU_K8T87PA/HP_14_R113TU_K8T87PA_S_1.jpg",
            "product_name": "HP 14-R113TU K8T87PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5", "HDD, 500GB", "15.6 inches, Windows 7 Home Premium"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z560_59_52668/Lenovo_IdeaPad_Z560_59_52668_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z560 59-52668"
        },
        {
            "price": "\nRs 59,990\n",
            "desc": ["Core i7, 2 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P073TX_J6L90PA/HP_Pavilion_15_P073TX_J6L90PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P073TX J6L90PA"
        },
        {
            "price": "\nRs 189,900\n",
            "desc": ["Core i7, 2.6 GHz", "DDR3L SDRAM, 8GB, SSD, 512GB", "15.4 inches, X 10.7.4 (11E2068)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_Retina/Apple_MacBook_Pro_Retina_S_1.jpg",
            "product_name": "Apple MacBook Pro MC976HN/A Retina Mid 2012"
        },
        {
            "price": "\nRs 33,399\n - ",
            "desc": ["AMD, 2.2 GHz", "DDR3L SDRAM, 4GB, HDD, 1TB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_ba001ax/HP_15_ba001ax_S_1.jpg",
            "product_name": "HP 15-ba001ax"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2 GHz", "DDR3L, 8GB, HDD, 1TB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_AC119TX/HP_15_AC119TX_S_1.jpg",
            "product_name": "HP 15-ac119tx"
        },
        {
            "price": "\nRs 33,990\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R033TX_J8B79PA/HP_15_R033TX_J8B79PA_S_1.jpg",
            "product_name": "HP 15-R033TX J8B79PA"
        },
        {
            "price": "\nRs 39,990\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "13.3 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_13_B102TU_J8C29PA/HP_Pavilion_13_B102TU_J8C29PA_S_1.jpg",
            "product_name": "HP Pavilion 13-B102TU J8C29PA"
        },
        {
            "price": "\nRs 40,173\n - ",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V5_471P_Corei5_Win8/Acer_Aspire_V5_471P_Corei5_Win8_S_1.jpg",
            "product_name": "Acer Aspire V5-471P Core i5 Win 8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.3 GHz", "LPDDR3 SDRAM, 4GB, SSD, 128GB", "11.6 inches, X 10.8.4 (12E3067)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Air_11_2011/Apple_MacBook_Air_11_2011_S_1.jpg",
            "product_name": "Apple MacBook Air 128GB MD711HN/A Mid 2013"
        },
        {
            "price": "\nRs 50,990\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_ThinkPad_Edge_E431_62771L7/Lenovo_ThinkPad_Edge_E431_62771L7_S_1.jpg",
            "product_name": "Lenovo ThinkPad Edge E431-62771L7"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD+SSD/eMMC", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_VivoBook_S550CM/ASUS_VivoBook_S550CM_S_1.jpg",
            "product_name": "ASUS VivoBook S550CM"
        },
        {
            "price": "\n-\n",
            "desc": ["ARM, 2.1 GHz", "LPDDR3, 4GB, eMMC, 32GB", "11.60 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Flex_11_Chromebook/Lenovo_Flex_11_Chromebook_S_1.jpg",
            "product_name": "Lenovo Flex 11 Chromebook"
        },
        {
            "price": "\nRs 176,302\n",
            "desc": ["Core i7, 2.5 GHz", "DDR3L SDRAM, 16GB, SSD, 512GB", "15.4 inches, X 10.9.4 (13E28)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_15_2013/Apple_MacBook_Pro_15_2013_S_1.jpg",
            "product_name": "Apple MacBook Pro MGXC2HN/A (Mid 2014)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, Core i3, 2.2 GHz", "DDR3L, 4GB, HDD, 1TB", "15.6 inches, Windows 10", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_80_80E502UKIN/Lenovo_G50_80_80E502UKIN_S_1.jpg",
            "product_name": "Lenovo G50-80 80E502UKIN"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "11.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_VivoBook_F202E_CT148H/ASUS_VivoBook_F202E_CT148H_S_1.jpg",
            "product_name": "ASUS VivoBook F202E-CT148H"
        },
        {
            "price": "\nRs 39,990\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "14 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_14_V015TU_J3Z65PA/HP_Pavilion_14_V015TU_J3Z65PA_S_1.jpg",
            "product_name": "HP Pavilion 14-V015TU J3Z65PA"
        },
        {
            "price": "\n-\n",
            "desc": ["HDD, 250GB", "Windows 7 Home Basic 64Bit"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_14_Core2Duo_T4300/Dell_Inspiron_14_Core2Duo_T4300_S_1.jpg",
            "product_name": "Dell Inspiron 14 Core2 Duo T4300"
        },
        {
            "price": "\nRs 78,302\n - ",
            "desc": ["Core i5, 1.6 GHz", "LPDDR3 SDRAM, 4GB, SSD, 256GB", "11.6 inches, X 10.10.2 (14C2507)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Air_11_2015/Apple_MacBook_Air_11_2015_S_1.jpg",
            "product_name": "Apple MacBook Air MJVP2HN/A (Early 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 1.5 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_14_B171TU_D9H68PA/HP_Pavilion_14_B171TU_D9H68PA_S_1.jpg",
            "product_name": "HP Pavilion 14-B171TU D9H68PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 320GB", "15.6 inches, Windows 7 Professional"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_1540_U520734IN8/Dell_Vostro_1540_U520734IN8_S_1.jpg",
            "product_name": "Dell Vostro 1540 U520734IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, Core i5, 2.4 GHz", "DDR3, 2GB, 4GB, HDD, 500GB, 1TB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2230TX_C9L64PA/HP_Pavilion_G6_2230TX_C9L64PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2230TX C9L64PA"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD", "HDD, 320GB", "15.6 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_M501R_T540901IN8/Dell_Inspiron_M501R_T540901IN8_S_1.jpg",
            "product_name": "Dell Inspiron M501R T540901IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.80 GHz", "DDR4, 16GB, HDD+SSD/eMMC, 2TB, 256GB", "15.6 inches, Windows 10 Home 64", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Legion_Y720_15IKB_80VR00ESIN/Lenovo_Legion_Y720_15IKB_80VR00ESIN_S_1.jpg",
            "product_name": "Lenovo Legion Y720-15IKB 80VR00ESIN"
        },
        {
            "price": "\nRs 49,990\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, HDD, 1TB", "14 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_14_N296TX_J8B57PA/HP_Pavilion_14_N296TX_J8B57PA_S_1.jpg",
            "product_name": "HP Pavilion 14-N296TX J8B57PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.5 GHz", "DDR3L SDRAM, 16GB, SSD, 512GB", "15.4 inches, X 10.10.3 (14D2134)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_15_2013/Apple_MacBook_Pro_15_2013_S_1.jpg",
            "product_name": "Apple MacBook Pro MJLT2HN/A (Mid 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.9 GHz", "LPDDR3 SDRAM, 8GB, SSD, 512GB", "13.3 inches, X 10.10.2 (14C2507)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Pro_13_2013/Apple_MacBook_Pro_13_2013_S_1.jpg",
            "product_name": "Apple MacBook Pro MF841HN/A (Early 2015)"
        },
        {
            "price": "\nRs 49,990\n - ",
            "desc": ["Core M, 2.0 GHz", "4GB, SSD, 256GB", "13.3 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_UX305FA/ASUS_UX305FA_S_1.jpg",
            "product_name": "ASUS ZenBook UX305FA"
        },
        {
            "price": "\nRs 80,999\n - ",
            "desc": ["Core i5, Core i7", "DDR4 SDRAM, 32GB, HDD, SSD, 1TB, 2TB, 1...", "15.60 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ROG_GL552VX/ASUS_ROG_GL552VX_S_1.jpg",
            "product_name": "ASUS ROG GL552VX"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3L SDRAM, 4GB, SSD, 64GB", "11.6 inches, X 10.7.4 (11E2520)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Air_11_2011/Apple_MacBook_Air_11_2011_S_1.jpg",
            "product_name": "Apple MacBook Air 64GB MD223HN/A Mid 2012"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 2.2 GHz", "DDR3, 2GB, HDD, 500GB", "14 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G4_1303AU_D7Z60PC/HP_Pavilion_G4_1303AU_D7Z60PC_S_1.jpg",
            "product_name": "HP Pavilion G4-1303AU D7Z60PC"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 320GB", "15.6 inches, Windows 7 Professional"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_1550_U520737IN8/Dell_Vostro_1550_U520737IN8_S_1.jpg",
            "product_name": "Dell Vostro 1550 U520737IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5", "HDD, 500GB", "15.6 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HCL_ME_ICON_1015_C/HCL_ME_ICON_1015_C_S_1.jpg",
            "product_name": "HCL ME ICON 1015 C"
        },
        {
            "price": "\nRs 40,990\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R007TX_G8D31PA/HP_15_R007TX_G8D31PA_S_1.jpg",
            "product_name": "HP 15-R007TX G8D31PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 2GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_2420_V520811IN8/Dell_Vostro_2420_V520811IN8_S_1.jpg",
            "product_name": "Dell Vostro 2420 V520811IN8"
        },
        {
            "price": "\nRs 72,990\n",
            "desc": ["Core i7, 2 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_K005TX_J2C50PA/HP_Envy_15_K005TX_J2C50PA_S_1.jpg",
            "product_name": "HP Envy 15-K005TX J2C50PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 1.5 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_B003TU_C7D81PA/HP_Pavilion_15_B003TU_C7D81PA_S_1.jpg",
            "product_name": "HP Pavilion 15-B003TU C7D81PA"
        },
        {
            "price": "\n-\n",
            "desc": ["HDD, 500GB", "14 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Inspiron_14R_T540508IN8/Dell_Inspiron_14R_T540508IN8_S_1.jpg",
            "product_name": "Dell Inspiron 14R T540508IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Essential_G580_59_324064/Lenovo_Essential_G580_59_324064_S_1.jpg",
            "product_name": "Lenovo Essential G580 59-324064"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.4 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_J048TX_F2C52PA/HP_Envy_15_J048TX_F2C52PA_S_1.jpg",
            "product_name": "HP Envy 15-J048TX F2C52PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 320GB", "15.6 inches, Windows 7 Professional"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Dell_Vostro_3550_U520653IN8/Dell_Vostro_3550_U520653IN8_S_1.jpg",
            "product_name": "Dell Vostro 3550 U520653IN8"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.4 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P208TX_K8U20PA/HP_Pavilion_15_P208TX_K8U20PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P208TX K8U20PA"
        },
        {
            "price": "\nRs 22,370\n",
            "desc": ["AMD, 1 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X552EA/ASUS_X552EA_S_1.jpg",
            "product_name": "ASUS X552EA-XX212D"
        },
        {
            "price": "\nRs 72,990\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_K007TX_J2C52PA/HP_Envy_15_K007TX_J2C52PA_S_1.jpg",
            "product_name": "HP Envy 15-K007TX J2C52PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 1.8 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V5_531_NXM1HSI008/Acer_Aspire_V5_531_NXM1HSI008_S_1.jpg",
            "product_name": "Acer Aspire V5-531"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3L SDRAM, 4GB, HDD, 1TB", "15.6 inches, FreeDOS 2.0", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_AC043TU/HP_15_AC043TU_S_1.jpg",
            "product_name": "HP 15-ac043tu"
        },
        {
            "price": "\nRs 32,500\n",
            "desc": ["AMD", "2GB, HDD, 500GB", "Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_10_E007AU_F4A68PA/HP_Pavilion_10_E007AU_F4A68PA_S_1.jpg",
            "product_name": "HP Pavilion 10-E007AU F4A68PA"
        },
        {
            "price": "\nRs 26,500\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "11.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X200CA_KX219D/ASUS_X200CA_KX219D_S_1.jpg",
            "product_name": "ASUS X200CA-KX219D"
        },
        {
            "price": "\nRs 34,990\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_14_R053TU_J8B87PA/HP_14_R053TU_J8B87PA_S_1.jpg",
            "product_name": "HP 14-R053TU J8B87PA"
        },
        {
            "price": "\nRs 48,990\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P001TX_G8D90PA/HP_Pavilion_15_P001TX_G8D90PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P001TX G8D90PA"
        },
        {
            "price": "\nRs 57,399\n - ",
            "desc": ["Core i7, 2.2 GHz", "DDR3, 8GB, HDD, 750GB", "15.6 inches, Windows 7 Home Premium"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_N55SL_S1050V/ASUS_N55SL_S1050V_S_1.jpg",
            "product_name": "ASUS N55SL-S1050V"
        },
        {
            "price": "\nRs 80,672\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD+SSD/eMMC, 500GB", "14 inches, Windows 7 Home Basic", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_Timeline_Ultra_M5_481T_W7HB/Acer_Aspire_Timeline_Ultra_M5_481T_W7HB_S_1.jpg",
            "product_name": "Acer Aspire Timeline Ultra M5-481T W7HB"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_K102TX_K2N88PA/HP_Envy_15_K102TX_K2N88PA_S_1.jpg",
            "product_name": "HP Envy 15-K102TX K2N88PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HCL_Mainstream_AE2V0026_I/HCL_Mainstream_AE2V0026_I_S_1.jpg",
            "product_name": "HCL Mainstream AE2V0026-I"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.5 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_G505_59_379534/Lenovo_IdeaPad_G505_59_379534_S_1.jpg",
            "product_name": "Lenovo IdeaPad G505 59-379534"
        },
        {
            "price": "\nRs 41,990\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P028TX_J2C47PA/HP_Pavilion_15_P028TX_J2C47PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P028TX J2C47PA"
        },
        {
            "price": "\nRs 49,999\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD+SSD/eMMC, 1TB, 24GB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_U510_59_349348/Lenovo_IdeaPad_U510_59_349348_S_1.jpg",
            "product_name": "Lenovo IdeaPad U510 59-349348"
        },
        {
            "price": "\nRs 85,162\n",
            "desc": ["Core i5, 1.6 GHz", "LPDDR3 SDRAM, 4GB, SSD, 256GB", "13.3 inches, X 10.10.2 (14C2507)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Air_13_2015/Apple_MacBook_Air_13_2015_S_1.jpg",
            "product_name": "Apple MacBook Air MJVG2HN/A (Early 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2231TX_C9L68PA/HP_Pavilion_G6_2231TX_C9L68PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2231TX C9L68PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, Celeron Quad Core, 2...", "DDR3, 2GB, HDD, 500GB", "11.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X200MA/ASUS_X200MA_S_1.jpg",
            "product_name": "ASUS X200MA-KX238D"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 500GB", "15.6 inches, Windows 7 Home Basic", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_5755_2312G50Mnks/Acer_Aspire_5755_2312G50Mnks_S_1.jpg",
            "product_name": "Acer Aspire 5755 2312G50Mnks"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "DDR3, 2GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_ThinkPad_Edge_E430_32541C0/Lenovo_ThinkPad_Edge_E430_32541C0_S_1.jpg",
            "product_name": "Lenovo ThinkPad Edge E430-32541C0"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.2 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2236TX_D4B09PA/HP_Pavilion_G6_2236TX_D4B09PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2236TX D4B09PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 500GB", "14 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_ThinkPad_T420_41786BQ/Lenovo_ThinkPad_T420_41786BQ_S_1.jpg",
            "product_name": "Lenovo ThinkPad T420 41786BQ"
        },
        {
            "price": "\nRs 39,990\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "14 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_14_V021TU_J6M18PA/HP_Pavilion_14_V021TU_J6M18PA_S_1.jpg",
            "product_name": "HP Pavilion 14-V021TU J6M18PA"
        },
        {
            "price": "\nRs 53,990\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P003TX_G8D93PA/HP_Pavilion_15_P003TX_G8D93PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P003TX G8D93PA"
        },
        {
            "price": "\nRs 57,911\n - ",
            "desc": ["Core i5, 2.3 GHz", "DDR3L, 4GB, SSD, 128GB", "14 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/LG_14Z960_G/LG_14Z960_G_S_1.jpg",
            "product_name": "LG Gram 14 (14Z960-G)"
        },
        {
            "price": "\nRs 50,400\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3, 4GB, HDD+SSD/eMMC, 1TB, 8GB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z510_59_405848/Lenovo_IdeaPad_Z510_59_405848_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z510 59-405848"
        },
        {
            "price": "\nRs 51,400\n",
            "desc": ["Core i5", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z510_59_387061/Lenovo_IdeaPad_Z510_59_387061_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z510 59-387061"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.4 GHz", "DDR3, 2GB, HDD, 320GB", "14 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_1000_1B02AU_D4A66PA/HP_1000_1B02AU_D4A66PA_S_1.jpg",
            "product_name": "HP 1000-1B02AU D4A66PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Quad Core, 2.58 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R036TU_J6L69PA/HP_15_R036TU_J6L69PA_S_1.jpg",
            "product_name": "HP 15-R036TU J6L69PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_E015TX_E3B55PA/HP_Pavilion_15_E015TX_E3B55PA_S_1.jpg",
            "product_name": "HP Pavilion 15-E015TX E3B55PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z500_59_380480/Lenovo_IdeaPad_Z500_59_380480_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z500 59-380480"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.4 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_70_59_443034/Lenovo_G50_70_59_443034_S_1.jpg",
            "product_name": "Lenovo G50 70 59-443034"
        },
        {
            "price": "\nRs 41,990\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P029TX_J2C48PA/HP_Pavilion_15_P029TX_J2C48PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P029TX J2C48PA"
        },
        {
            "price": "\nRs 52,031\n - ",
            "desc": ["Core i5, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_V5_571P_NXM49SI003/Acer_Aspire_V5_571P_NXM49SI003_S_1.jpg",
            "product_name": "Acer Aspire V5-571P"
        },
        {
            "price": "\nRs 54,390\n - ",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD+SSD/eMMC, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_M3_581TG_NXRYKSI007/Acer_Aspire_M3_581TG_NXRYKSI007_S_1.jpg",
            "product_name": "Acer Aspire M3-581TG"
        },
        {
            "price": "\nRs 202,290\n - ",
            "desc": ["Core i7", "DDR4 SDRAM, 16GB, 32GB, HDD, SSD, 1TB, ...", "15.60 inches, Windows 10 Home\r\nWindows ...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ROG_GL502VS/ASUS_ROG_GL502VS_S_1.jpg",
            "product_name": "ASUS ROG GL502VS"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3L SDRAM, 4GB, HDD, 1TB", "15.6 Inches, Linux 64 bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Aspire_E5_571_33YS/Aspire_E5_571_33YS_S_1.jpg",
            "product_name": "Acer Aspire E5-571-33YS"
        },
        {
            "price": "\n-\n",
            "desc": ["Core M, 1.2 GHz", "LPDDR3 SDRAM, 8GB, SSD, 512GB", "12 inches, X 10.10.2 (14C2061)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Retina/Apple_MacBook_Retina_S_1.jpg",
            "product_name": "Apple MacBook MF865HN/A (Early 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P097TX_K2P46PA/HP_Pavilion_15_P097TX_K2P46PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P097TX K2P46PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, Pentium Dual Core, 1.8 GHz", "DDR3, 4GB, 2GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_14_B004TU_C0P31PA/HP_Pavilion_14_B004TU_C0P31PA_S_1.jpg",
            "product_name": "HP Pavilion 14-B004TU C0P31PA"
        },
        {
            "price": "\nRs 28,000\n - ",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X552CL_XX220D/ASUS_X552CL_XX220D_S_1.jpg",
            "product_name": "ASUS X552CL-XX220D"
        },
        {
            "price": "\nRs 33,330\n",
            "desc": ["Core i3, 2.1 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R205TU_K8U05PA/HP_15_R205TU_K8U05PA_S_1.jpg",
            "product_name": "HP 15-R205TU K8U05PA"
        },
        {
            "price": "\nRs 361,949\n - ",
            "desc": ["Core i7", "DDR4 SDRAM, 64GB, SSD, 256GB, 512GB", "17.30 inches, Windows 10 Home \r\nWindows...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ROG_G701VI/ASUS_ROG_G701VI_S_1.jpg",
            "product_name": "ASUS ROG G701VI"
        },
        {
            "price": "\nRs 45,990\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "13.3 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_13_B103TU_J8C30PA/HP_Pavilion_13_B103TU_J8C30PA_S_1.jpg",
            "product_name": "HP Pavilion 13-B103TU J8C30PA"
        },
        {
            "price": "\nRs 220,529\n",
            "desc": ["Core i7", "DDR4, 16GB, HDD, SSD, SSHD, 1TB, 512GB", "15.6 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Ideapad_Y700_15/Lenovo_Ideapad_Y700_15_S_1.jpg",
            "product_name": "Lenovo Ideapad Y700 (15\")"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Z50_70_59_429601/Lenovo_Z50_70_59_429601_S_1.jpg",
            "product_name": "Lenovo Z50 70 59-429601"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Quad Core, 2.16 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 Inches, Linux 64 bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_E5_111/Acer_Aspire_E5_111_S_1.jpg",
            "product_name": "Acer Aspire E5-511"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Quad Core, 2.16 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_30_80G001NTIN/Lenovo_G50_30_80G001NTIN_S_1.jpg",
            "product_name": "Lenovo G50 30 80G001NTIN"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_J049TX_F2C59PA/HP_Envy_15_J049TX_F2C59PA_S_1.jpg",
            "product_name": "HP Envy 15-J049TX F2C59PA"
        },
        {
            "price": "\nRs 79,114\n",
            "desc": ["Core i5, 1.8 GHz", "DDR3L SDRAM, 4GB, SSD, 128GB", "13.3 inches, X 10.7.4 (11E2520)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Air_13_2011/Apple_MacBook_Air_13_2011_S_1.jpg",
            "product_name": "Apple MacBook Air 128GB MD231HN/A Mid 2012"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 500GB", "15.6 inches, Windows 7 Home Basic"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z560_59_51358/Lenovo_IdeaPad_Z560_59_51358_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z560 59-51358"
        },
        {
            "price": "\n-\n",
            "desc": ["HDD, 500GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_5740_Linux_500GB/Acer_Aspire_5740_Linux_500GB_S_1.jpg",
            "product_name": "Acer Aspire 5740 Linux 500GB"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 8GB, HDD, 1TB", "14 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_14_K102TX_F7P50PA/HP_Envy_14_K102TX_F7P50PA_S_1.jpg",
            "product_name": "HP Envy 14-K102TX F7P50PA"
        },
        {
            "price": "\nRs 32,521\n - ",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X551CA_SX014H/ASUS_X551CA_SX014H_S_1.jpg",
            "product_name": "ASUS X551CA-SX014H"
        },
        {
            "price": "\nRs 72,990\n",
            "desc": ["Core i5, 3 GHz", "DDR3, 4GB, HDD, 500GB", "12.5 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_ThinkPad_X240_20AMA0JXIG/Lenovo_ThinkPad_X240_20AMA0JXIG_S_1.jpg",
            "product_name": "Lenovo ThinkPad X240 20AMA0JXIG"
        },
        {
            "price": "\nRs 87,850\n - ",
            "desc": ["Core i7", "DDR4 SDRAM, 32GB, 8GB, HDD, SSD, 1TB, 1...", "15.60 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ROG_GL553VD/ASUS_ROG_GL553VD_S_1.jpg",
            "product_name": "ASUS ROG GL553VD"
        },
        {
            "price": "\nRs 151,690\n",
            "desc": ["Core i7", "DDR4 SDRAM, 16GB, HDD, SSD, 1TB, 2TB, 5...", "17.30 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ROG_G752VY/ASUS_ROG_G752VY_S_1.jpg",
            "product_name": "ASUS ROG G752VY"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z580_59_347591/Lenovo_IdeaPad_Z580_59_347591_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z580 59-347591"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.4 GHz", "LPDDR3 SDRAM, 4GB, SSD, 128GB", "11.6 inches, X 10.9.2 (13C1021)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Air_11_2014/Apple_MacBook_Air_11_2014_S_1.jpg",
            "product_name": "Apple MacBook Air Core MD711HN/B (Early 2014)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.2 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_2000_2202TU_C0P22PA/HP_2000_2202TU_C0P22PA_S_1.jpg",
            "product_name": "HP 2000-2202TU C0P22PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, HDD, 1TB", "14 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_14_K011TU_E3B60PA/HP_Envy_14_K011TU_E3B60PA_S_1.jpg",
            "product_name": "HP Envy 14-K011TU E3B60PA"
        },
        {
            "price": "\nRs 53,500\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Z50_70_59_429607/Lenovo_Z50_70_59_429607_S_1.jpg",
            "product_name": "Lenovo Z50 70 59-429607"
        },
        {
            "price": "\nRs 104,000\n - ",
            "desc": ["Core i7, 2.8 GHz", "32GB, 8GB, HDD+SSD/eMMC, 1TB, 128GB, 256GB", "15.60 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ROG_GL553VE/ASUS_ROG_GL553VE_S_1.jpg",
            "product_name": "ASUS ROG GL553VE"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.4 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P209TX_K8U21PA/HP_Pavilion_15_P209TX_K8U21PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P209TX K8U21PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_N013TX/HP_Pavilion_15_N013TX_S_1.jpg",
            "product_name": "HP Pavilion 15-N013TX"
        },
        {
            "price": "\nRs 78,409\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, SSD, 128GB", "13.3 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Yoga_13_59_341124/Lenovo_IdeaPad_Yoga_13_59_341124_S_1.jpg",
            "product_name": "Lenovo IdeaPad Yoga 13 59-341124"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.2 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R204TU_K8U02PA/HP_15_R204TU_K8U02PA_S_1.jpg",
            "product_name": "HP 15-R204TU K8U02PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.2 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P210TX_K8U33PA/HP_Pavilion_15_P210TX_K8U33PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P210TX K8U33PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Essential_G580_59_355396/Lenovo_Essential_G580_59_355396_S_1.jpg",
            "product_name": "Lenovo Essential G580 59-355396"
        },
        {
            "price": "\nRs 39,999\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 750GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X550CC/ASUS_X550CC_S_1.jpg",
            "product_name": "ASUS X550CC-XX876H"
        },
        {
            "price": "\nRs 46,500\n",
            "desc": ["Core i7, 1.9 GHz", "DDR3, 4GB, HDD, 750GB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X550LC_XX015H/ASUS_X550LC_XX015H_S_1.jpg",
            "product_name": "ASUS X550LC-XX015H"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.5 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_G400S_59_383679/Lenovo_IdeaPad_G400S_59_383679_S_1.jpg",
            "product_name": "Lenovo IdeaPad G400S 59-383679"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Quad Core, Core i3, 2.16 GHz", "DDR3, 4GB, HDD, 500GB, 1TB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R249TU_L2Z88PA/HP_15_R249TU_L2Z88PA_S_1.jpg",
            "product_name": "HP 15-R249TU L2Z88PA"
        },
        {
            "price": "\nRs 31,499\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X552CL_SX019H/ASUS_X552CL_SX019H_S_1.jpg",
            "product_name": "ASUS X552CL-SX019H"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, 1.8 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Essential_G580_59_362301/Lenovo_Essential_G580_59_362301_S_1.jpg",
            "product_name": "Lenovo Essential G580 59-362301"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_E008TU_E3B72PA/HP_Pavilion_15_E008TU_E3B72PA_S_1.jpg",
            "product_name": "HP Pavilion 15-E008TU E3B72PA"
        },
        {
            "price": "\nRs 157,900\n - ",
            "desc": ["Core i7", "DDR4 SDRAM, 16GB, 8GB, HDD, SSD, 1TB, 2...", "15.60 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ROG_STRIX_GL502VM/ASUS_ROG_STRIX_GL502VM_S_1.jpg",
            "product_name": "ASUS ROG GL502VM"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "HDD, 500GB", "15.6 inches, Windows 7 Home Premium", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Acer_Aspire_AS5830T/Acer_Aspire_AS5830T_S_1.jpg",
            "product_name": "Acer Aspire AS5830T"
        },
        {
            "price": "\nRs 60,130\n",
            "desc": ["Core i7, 2 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Z50_70_59_429602/Lenovo_Z50_70_59_429602_S_1.jpg",
            "product_name": "Lenovo Z50 70 59-429602"
        },
        {
            "price": "\n-\n",
            "desc": ["Core M, 1.1 GHz", "LPDDR3 SDRAM, 8GB, SSD, 256GB", "12 inches, X 10.10.2 (14C2061)", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Apple_MacBook_Retina/Apple_MacBook_Retina_S_1.jpg",
            "product_name": "Apple MacBook MF855HN/A (Early 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.4 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_J001TX_D9H44PA/HP_Envy_15_J001TX_D9H44PA_S_1.jpg",
            "product_name": "HP Envy 15-J001TX D9H44PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 Inches, Windows 8.1 64 bit", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_k111tx/HP_Envy_15_k111tx_S_1.jpg",
            "product_name": "HP Envy 15-k111tx"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3L, 4GB, HDD, 1TB", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_70_59_422418/Lenovo_G50_70_59_422418_S_1.jpg",
            "product_name": "Lenovo G50-70 59-422418"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD", "DDR3, 4GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_45_80E300GYIN/Lenovo_G50_45_80E300GYIN_S_1.jpg",
            "product_name": "Lenovo G50 45 80E300GYIN"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.9 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2201AX_C0P13PA/HP_Pavilion_G6_2201AX_C0P13PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2201AX C0P13PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 4GB, HDD, 320GB", "15.6 inches, Windows 7"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Essential_G580_59_348291/Lenovo_Essential_G580_59_348291_S_1.jpg",
            "product_name": "Lenovo Essential G580 59-348291"
        },
        {
            "price": "\nRs 36,990\n - ",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R032TX_J8B78PA/HP_15_R032TX_J8B78PA_S_1.jpg",
            "product_name": "HP 15-R032TX J8B78PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 8GB, 4GB, HDD, 1TB, 500GB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_70_59_422410/Lenovo_G50_70_59_422410_S_1.jpg",
            "product_name": "Lenovo G50 70 59 422410"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.2 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X55C_SX026D/ASUS_X55C_SX026D_S_1.jpg",
            "product_name": "ASUS X55C-SX026D"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.2 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Envy_15_J133TX/HP_Envy_15_J133TX_S_1.jpg",
            "product_name": "HP Envy 15-J133TX F7Q70PA"
        },
        {
            "price": "\nRs 44,990\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R014TX_J2C54PA/HP_15_R014TX_J2C54PA_S_1.jpg",
            "product_name": "HP 15-R014TX J2C54PA"
        },
        {
            "price": "\nRs 49,990\n",
            "desc": ["Core i5, Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Flex_2_14/Lenovo_Flex_2_14_S_1.jpg",
            "product_name": "Lenovo Flex 2 14 59-429729"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 6GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z500_59_370611/Lenovo_IdeaPad_Z500_59_370611_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z500 59-370611"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.8 GHz", "DDR3, 4GB, HDD, 500GB", "14.1 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_ThinkPad_T430_U_627326Q/Lenovo_ThinkPad_T430_U_627326Q_S_1.jpg",
            "product_name": "Lenovo ThinkPad T430 U 627326Q"
        },
        {
            "price": "\nRs 90,197\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 500GB, 1TB", "12.5 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_ThinkPad_X240_20ALA0KWIG/Lenovo_ThinkPad_X240_20ALA0KWIG_S_1.jpg",
            "product_name": "Lenovo ThinkPad X240 20ALA0KWIG"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_D103TX_G2G48PA/HP_15_D103TX_G2G48PA_S_1.jpg",
            "product_name": "HP 15-D103TX G2G48PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2229TU_C9M03PA/HP_Pavilion_G6_2229TU_C9M03PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2229TU C9M03PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2202TX_C0P15PA/HP_Pavilion_G6_2202TX_C0P15PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2202TX C0P15PA"
        },
        {
            "price": "\nRs 28,426\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 2GB, HDD, 500GB", "14 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X450CA_WX214D/ASUS_X450CA_WX214D_S_1.jpg",
            "product_name": "ASUS X450CA-WX214D"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_70_59_436421/Lenovo_G50_70_59_436421_S_1.jpg",
            "product_name": "Lenovo G50 70 59 436421"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.2 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P277TX_L2Z59PA/HP_Pavilion_15_P277TX_L2Z59PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P277TX L2Z59PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_N205TX_F6C44PA/HP_Pavilion_15_N205TX_F6C44PA_S_1.jpg",
            "product_name": "HP Pavilion 15-N205TX F6C44PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2207TX_C0P20PA/HP_Pavilion_G6_2207TX_C0P20PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2207TX C0P20PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_14_N009TU_F0C29PA/HP_Pavilion_14_N009TU_F0C29PA_S_1.jpg",
            "product_name": "HP Pavilion 14-N009TU F0C29PA"
        },
        {
            "price": "\nRs 41,990\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_P027TX_J2C46PA/HP_Pavilion_15_P027TX_J2C46PA_S_1.jpg",
            "product_name": "HP Pavilion 15-P027TX J2C46PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 2GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_B002TX_C7D80PA/HP_Pavilion_15_B002TX_C7D80PA_S_1.jpg",
            "product_name": "HP Pavilion 15-B002TX C7D80PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "14 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_14_B172TX_D9H69PA/HP_Pavilion_14_B172TX_D9H69PA_S_1.jpg",
            "product_name": "HP Pavilion 14-B172TX D9H69PA"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.9 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2302AX_C9M35PA/HP_Pavilion_G6_2302AX_C9M35PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2302AX C9M35PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2309TU_C9M33PA/HP_Pavilion_G6_2309TU_C9M33PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2309TU C9M33PA"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 2 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_G207AX_L2Y69PA/HP_15_G207AX_L2Y69PA_S_1.jpg",
            "product_name": "HP 15-G207AX L2Y69PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.1 GHz", "DDR3, 4GB, HDD, 1TB", "13.3 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_13_B201TU_K8U24PA/HP_Pavilion_13_B201TU_K8U24PA_S_1.jpg",
            "product_name": "HP Pavilion 13-B201TU K8U24PA"
        },
        {
            "price": "\nRs 70,990\n",
            "desc": ["Core i7, 2.6 GHz", "DDR3L SDRAM, 4GB, HDD, 1TB", "15.6 inches, Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_R510JX/ASUS_R510JX_S_1.jpg",
            "product_name": "ASUS R510JX"
        },
        {
            "price": "\nRs 271,790\n - ",
            "desc": ["Core i7", "DDR4 SDRAM, 64GB, HDD+SSD/eMMC, 1TB, 2T...", "17.30 inches, Windows 10 Home\r\nWindows ...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_ROG_G752VS/ASUS_ROG_G752VS_S_1.jpg",
            "product_name": "ASUS ROG G752VS"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.9 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 Inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_G50_70_59_442243/Lenovo_G50_70_59_442243_S_1.jpg",
            "product_name": "Lenovo G50-70 59-442243"
        },
        {
            "price": "\nRs 56,700\n",
            "desc": ["Core i5", "DDR3, 4GB, HDD, 500GB", "13.3 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Yoga_2_13_59_428504/Lenovo_Yoga_2_13_59_428504_S_1.jpg",
            "product_name": "Lenovo Yoga 2 13 59-428504"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_D002TU_F6D22PA/HP_15_D002TU_F6D22PA_S_1.jpg",
            "product_name": "HP 15-D002TU F6D22PA"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.9 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2301AX_C9M34PA/HP_Pavilion_G6_2301AX_C9M34PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2301AX C9M34PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_E009TU_E3B73PA/HP_Pavilion_15_E009TU_E3B73PA_S_1.jpg",
            "product_name": "HP Pavilion 15-E009TU E3B73PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_N019TU_F2C05PA/HP_Pavilion_15_N019TU_F2C05PA_S_1.jpg",
            "product_name": "HP Pavilion 15-N019TU F2C05PA"
        },
        {
            "price": "\nRs 34,990\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_R063TU_J8B77PA/HP_15_R063TU_J8B77PA_S_1.jpg",
            "product_name": "HP 15-r063tu"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.7 GHz", "DDR3, 4GB, HDD, 750GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_B001TU_C7D78PA/HP_Pavilion_15_B001TU_C7D78PA_S_1.jpg",
            "product_name": "HP Pavilion 15-B001TU C7D78PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.6 GHz", "DDR3, 4GB, SSD, 128GB", "11.6 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_11_H115TU_X2_G2G44PA/HP_Pavilion_11_H115TU_X2_G2G44PA_S_1.jpg",
            "product_name": "HP Pavilion 11-H115TU-X2 G2G44PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_15_N208TU_F6C93PA/HP_Pavilion_15_N208TU_F6C93PA_S_1.jpg",
            "product_name": "HP Pavilion 15-N208TU F6C93PA"
        },
        {
            "price": "\nRs 79,500\n",
            "desc": ["Core i7, 3.5 GHz", "DDR3, 8GB, HDD, 1TB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_G551JK_DM053H/ASUS_G551JK_DM053H_S_1.jpg",
            "product_name": "ASUS G551JK-DM053H"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 2 GHz", "DDR3, 4GB, HDD, 1TB", "15.6 inches, Windows 8.1"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_15_G002AX_G8D84PA/HP_15_G002AX_G8D84PA_S_1.jpg",
            "product_name": "HP 15-G002AX G8D84PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.1 GHz", "DDR3 SDRAM, HDD, 500GB", "15.6 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_630_QA103PA/HP_630_QA103PA_S_1.jpg",
            "product_name": "HP 630 QA103PA"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1 GHz", "DDR3, 4GB, HDD, 500GB", "11.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_11_E006AU_E4X91PA/HP_Pavilion_11_E006AU_E4X91PA_S_1.jpg",
            "product_name": "HP Pavilion 11-E006AU E4X91PA"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.6 GHz", "DDR3, 6GB, HDD, 1TB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_IdeaPad_Z500_59_380463/Lenovo_IdeaPad_Z500_59_380463_S_1.jpg",
            "product_name": "Lenovo IdeaPad Z500 59-380463"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.4 GHz", "DDR3, 4GB, HDD, 500GB", "15.6 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/HP_Pavilion_G6_2232TX_C9L69PA/HP_Pavilion_G6_2232TX_C9L69PA_S_1.jpg",
            "product_name": "HP Pavilion G6-2232TX C9L69PA"
        },
        {
            "price": "\nRs 28,090\n - ",
            "desc": ["Atom Quad Core, 1.83 GHz", "DDR3 SDRAM, 2GB, eMMC, 32GB", "11.60 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_X205TA/ASUS_X205TA_S_1.jpg",
            "product_name": "ASUS EeeBook X205TA"
        },
        {
            "price": "\nRs 67,500\n",
            "desc": ["Core i5", "DDR3, 4GB, HDD, 500GB", "13.3 inches, Windows 8.1", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/Lenovo_Yoga_2_13_59_442014/Lenovo_Yoga_2_13_59_442014_S_1.jpg",
            "product_name": "Lenovo Yoga 2 13 59-442014"
        },
        {
            "price": "\nRs 38,199\n",
            "desc": ["Core i3, 1.8 GHz", "DDR3, 2GB, HDD, 500GB", "14 inches, Windows 8 Professional"],
            "image": "http://image.priceprice.k-img.com/global/images/product/laptops/ASUS_F451CA_WX287P/ASUS_F451CA_WX287P_S_1.jpg",
            "product_name": "ASUS F451CA-WX287P"
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
            laptop.create({
                price: b[i].price,
                product_name: b[i].product_name,
                description: b[i].description,
                image: b[i].image,
                brand_name: b[i].brand_name
            }).then(function (laptop) {
                if (laptop) {
                    console.log("Data Stored")
                } else {
                    console.log("Error");
                }
            })
        }

    }
    response.send("laptop Submission Done")

});

/*****  Route for fetching all laptop info at once ******/

router.get('/all_laptop', (request, response) => {
    laptop.findAll()
        .then((mobil) => {
            console.log("ok");
            response.send(mobil);

        });
});
/*****  Route for fetching all laptop of one brand ******/

router.post('/get_laptop_from_brand', (request, response) => {
    laptop.findAll({
            where: {
                brand_name: request.body.brand_name
            }
        })
        .then((laptop_data) => {
            console.log("ok");
            response.send(laptop_data);

        });
});
/*** Route for fetching single laptop by id */
router.post('/get_single_laptop', (request, response) => {
    laptop.findAll({
        where: {
            id: request.body.id
        }
    }).then((laptop) => {
        console.log(laptop);
        response.send(laptop);
    }).catch((error) => {
        alert(error)
    })
})
/***  Route for getting all brands available ***/
router.get('/get_laptop_brands', (request, response) => {
    laptop.findAll()
        .then(function (laptop) {
            var brands = []
            for (var i = 0; i < laptop.length; i++) {
                var already_present = false;
                if (i == 0) {
                    brands[i] = laptop[i].brand_name
                }
                for (var j = 0; j < i; j++) {
                    if (brands[j] == laptop[i].brand_name) {
                        already_present = true;
                    } else {
                        if (j == i - 1 && already_present == false) {
                            brands[brands.length] = laptop[i].brand_name
                        } else {

                        }
                    }
                }
            }
            response.send(brands);
        });
});
//route for getting number of devices in elaptoph brand
router.get('/get_count', (request, response) => {
    var brands = [
    "HP",
    "Dell",
    "Sony",
    "Lenovo",
    "TOSHIBA",
    "Acer",
    "Apple",
    "Microsoft",
    "ASUS",
    "LG"
]
    var a = []
    var k = 0
    var check = false;
    for (var i = 0; i < brands.length; i++) {
        laptop.findAll({
                where: {
                    brand_name: brands[i]
                }
            }).then((laptop) => {
                a[k] = laptop.length + "," + laptop[0].brand_name

                k = k + 1;
            })
            .then(() => {
                console.log("length of a " + a.length)
                if (a.length == 10 && check == false) {
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