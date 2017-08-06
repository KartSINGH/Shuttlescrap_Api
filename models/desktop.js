var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),
    desktop = connection.seq.define('desktop', {
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
desktop.sync();
/*****  Route for storing desktop Information *****/
router.get('/submit_desktop', (request, response) => {
    var data_body = [{
            "price": "\nRs 25,990\n - ",
            "desc": ["Pentium Quad Core, 2.16GHz", "DDR3L, 4GB, HDD, 500GB", "19.5 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Dell_Inspiron_20_3043/Dell_Inspiron_20_3043_S_1.jpg",
            "product_name": "Dell Inspiron 20 3043"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.35 GHz", "DDR3, 4GB, HDD, 500GB", "18.5 inches, DOS", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_18_5201IX_J1F07AA/HP_18_5201IX_J1F07AA_S_1.jpg",
            "product_name": "HP 18-5201IX (J1F07AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, Core i5, Core i7", "DDR4, 8GB, 16GB, 32GB, HDD, HDD+SSD/eMM...", "23.8 Inches, Windows 10", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Asus_Zen_AiO_S_Z240IC/Asus_Zen_AiO_S_Z240IC_S_1.jpg",
            "product_name": "ASUS Zen AiO S Z240IC"
        },
        {
            "price": "\n-\n",
            "desc": ["1.8 GHz + 1.4 GHz", "LPDDR3 SDRAM, 3GB, eMMC, 32GB", "23 inches (Expand projection up to 80 i...", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Sony_Xperia_Touch/Sony_Xperia_Touch_S_1.jpg",
            "product_name": "Sony Xperia Touch"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.9 GHz", "DDR3, 8GB, HDD, 1TB", "23.8 Inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_B50_30_F0AU0020IN/Lenovo_B50_30_F0AU0020IN_S_1.jpg",
            "product_name": "Lenovo B50-30 F0AU0020IN"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Quad Core, 2.41 GHz", "DDR3, 2GB, HDD, 500GB", "DOS"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_110_400IL_J1F04AA/HP_110_400IL_J1F04AA_S_1.jpg",
            "product_name": "HP 110-400IL (J1F04AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.9 GHz", "DDR3, 4GB, HDD, 1TB", "20 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Dell_Inspiron_One_2020_Touch/Dell_Inspiron_One_2020_Touch_S_1.jpg",
            "product_name": "Dell Inspiron One 2020 (Touch)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 3.4 GHz", "DDR3, 4GB, HDD, 1TB", "18.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Pavilion_P6_2361IN_H5X28AA/HP_Pavilion_P6_2361IN_H5X28AA_S_1.jpg",
            "product_name": "HP Pavilion P6-2361IN (H5X28AA)"
        },
        {
            "price": "\nRs 179,455\n",
            "desc": ["Core i5, Core i7, 3.3GHz Turbo Boost up...", "LPDDR3 SDRAM, 8GB, HDD+SSD/eMMC, 2TB, 3...", "27 inches, Mac OS X 10.11", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_27_Late_2015/Apple_iMac_27_Late_2015_S_1.jpg",
            "product_name": "Apple iMac MK482HN/A (Late 2015)"
        },
        {
            "price": "\nRs 73,606\n",
            "desc": ["Core i5, 1.9GHz, 2.7GHz max turbo boost", "DDR3L, 8GB, HDD, 1TB", "23 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_23_Q010IN/HP_23_Q010IN_S_1.jpg",
            "product_name": "HP Pavilion 23-q010in"
        },
        {
            "price": "\nRs 87,305\n",
            "desc": ["Core i5, 1.6GHz Turbo Boost up to 2.7GHz", "LPDDR3 SDRAM, 8GB, HDD+SSD/eMMC, 1TB, 2...", "21.5 inches, Mac OS X 10.11", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_21_late_2015/Apple_iMac_21_late_2015_S_1.jpg",
            "product_name": "Apple iMac MK142HN/A (Late 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 3.4 GHz", "DDR3, 4GB, HDD, 500GB", "18.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Pavilion_P6_2357IN_H3W40AA/HP_Pavilion_P6_2357IN_H3W40AA_S_1.jpg",
            "product_name": "HP Pavilion P6-2357IN (H3W40AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 2.9 GHz", "DDR3, 2GB, HDD, 500GB", "20 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_Essential_C340_57316159/Lenovo_Essential_C340_57316159_S_1.jpg",
            "product_name": "Lenovo Essential C340 57316159"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2 GHz", "DDR3, 4GB, HDD, 500GB", "23 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Pavilion_23_P010IN_J1E38AA/HP_Pavilion_23_P010IN_J1E38AA_S_1.jpg",
            "product_name": "HP Pavilion 23-P010IN (J1E38AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, Core i5, Core i7", "DDR4, 4GB, 8GB, 16GB, HDD+SSD/eMMC, 500...", "21.5 Inches, Windows 10", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Asus_Zen_AiO_S_Z220IC/Asus_Zen_AiO_S_Z220IC_S_1.jpg",
            "product_name": "ASUS Zen AiO S Z220IC"
        },
        {
            "price": "\nRs 48,990\n - ",
            "desc": ["Core i5, 2.6 GHz", "LPDDR3 SDRAM, 8GB, HDD, 1TB", "Dual Displays, Mac OS X 10.10", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_Mac_Mini_2011/Apple_Mac_Mini_2011_S_1.jpg",
            "product_name": "Apple Mac Mini MGEN2HN/A (Late 2014)"
        },
        {
            "price": "\nRs 35,600\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 2GB, HDD, 1TB", "19.5 Inches, DOS", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_C20_30_F0B2002HIN/Lenovo_C20_30_F0B2002HIN_S_1.jpg",
            "product_name": "Lenovo C20-30 F0B2002HIN"
        },
        {
            "price": "\nRs 141,455\n",
            "desc": ["Core i5, 3.2GHz Turbo Boost up to 3.6GHz", "LPDDR3 SDRAM, 8GB, HDD+SSD/eMMC, 1TB, 3...", "27 inches, Mac OS X 10.11", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_27_Late_2015/Apple_iMac_27_Late_2015_S_1.jpg",
            "product_name": "Apple iMac MK462HN/A (Late 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 1.90 GHz", "DDR3, 2GB, HDD, 500GB", "Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Pavilion_Mini_300_010IN/HP_Pavilion_Mini_300_010IN_S_1.jpg",
            "product_name": "HP Pavilion Mini 300-010in"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.9 GHz", "DDR3, 4GB, HDD, 500GB", "DOS"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_120_013IL_J1G63AA/HP_120_013IL_J1G63AA_S_1.jpg",
            "product_name": "HP 120-013IL (J1G63AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.48 GHz", "DDR3, 2GB, HDD, 500GB", "18.5 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_18_1310IN_E9T76AA/HP_18_1310IN_E9T76AA_S_1.jpg",
            "product_name": "HP 18-1310IN (E9T76AA)"
        },
        {
            "price": "\nRs 117,705\n",
            "desc": ["Core i5, Core i7, 3.1GHz Turbo Boost up...", "LPDDR3 SDRAM, 8GB, HDD+SSD/eMMC, 1TB, 2...", "21.5 inches, Mac OS X 10.11", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_21_late_2015/Apple_iMac_21_late_2015_S_1.jpg",
            "product_name": "Apple iMac MK452HN/A (Late 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["AMD, 1.4 GHz", "DDR3, 4GB, HDD, 500GB", "20 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Pavilion_20_F201IN_H5Y55AA/HP_Pavilion_20_F201IN_H5Y55AA_S_1.jpg",
            "product_name": "HP Pavilion 20-F201IN (H5Y55AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 2.8 GHz", "DDR3, 8GB, HDD+SSD/eMMC, 1TB, 8GB", "27 Inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_A740_F0AM004MIN/Lenovo_A740_F0AM004MIN_S_1.jpg",
            "product_name": "Lenovo A740 F0AM004MIN"
        },
        {
            "price": "\nRs 29,999\n",
            "desc": ["Pentium Quad Core, 2.41 GHz", "DDR3, 2GB, HDD, 500GB", "19.45 inches, DOS"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_20_2115IL_J1E86AA/HP_20_2115IL_J1E86AA_S_1.jpg",
            "product_name": "HP 20-2115IL (J1E86AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, 2.41 GHz", "DDR3, 2GB, HDD, 500GB", "19.5 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_C260_57328206/Lenovo_C260_57328206_S_1.jpg",
            "product_name": "Lenovo C260 57328206"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 3.4 GHz", "DDR3, 8GB, HDD, 2TB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Envy_Phoenix_810_101IN_E9T31AA/HP_Envy_Phoenix_810_101IN_E9T31AA_S_1.jpg",
            "product_name": "HP Envy Phoenix 810-101IN (E9T31AA)"
        },
        {
            "price": "\nRs 36,250\n - ",
            "desc": ["Core i5, 1.4 GHz", "LPDDR3 SDRAM, 4GB, HDD, 500GB", "Dual Displays, Mac OS X 10.10", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_Mac_Mini_2011/Apple_Mac_Mini_2011_S_1.jpg",
            "product_name": "Apple Mac Mini MGEM2HN/A (Late 2014)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 3.4 GHz", "DDR3, 4GB, HDD, 500GB", "20 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Pavilion_20_A240IN_H6M55AA/HP_Pavilion_20_A240IN_H6M55AA_S_1.jpg",
            "product_name": "HP Pavilion 20-A240IN (H6M55AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 3.4 GHz", "DDR3, 2GB, HDD, 500GB", "18.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Pavilion_P6_2358IN_H3W41AA/HP_Pavilion_P6_2358IN_H3W41AA_S_1.jpg",
            "product_name": "HP Pavilion P6-2358IN (H3W41AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Quad Core, 1.6 GHz up to 2.4 GHz", "DDR3L, 2GB, HDD, 500GB", "19.45 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_20_R010IN/HP_20_R010IN_S_1.jpg",
            "product_name": "HP 20-R010IN"
        },
        {
            "price": "\nRs 102,505\n",
            "desc": ["Core i5, 2.8GHz Turbo Boost up to 3.3GHz", "LPDDR3 SDRAM, 8GB, HDD+SSD/eMMC, 1TB, 2...", "21.5 inches, Mac OS X 10.11", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_21_late_2015/Apple_iMac_21_late_2015_S_1.jpg",
            "product_name": "Apple iMac MK442HN/A (Late 2015)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 3.2 GHz", "DDR3, 8GB, HDD, 1TB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Envy_Phoenix_810_100IN_E9T30AA/HP_Envy_Phoenix_810_100IN_E9T30AA_S_1.jpg",
            "product_name": "HP Envy Phoenix 810-100IN (E9T30AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 3.1 GHz", "DDR3, 4GB, HDD, 1TB", "21.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_ThinkCentre_EDGE_92z_3417FVQ/Lenovo_ThinkCentre_EDGE_92z_3417FVQ_S_1.jpg",
            "product_name": "Lenovo ThinkCentre EDGE 92z 3417FVQ"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 3 GHz", "DDR3, 4GB, HDD, 500GB", "18.5 inches, DOS"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Pavilion_P6_2355IL_H3W38AA/HP_Pavilion_P6_2355IL_H3W38AA_S_1.jpg",
            "product_name": "HP Pavilion P6-2355IL (H3W38AA)"
        },
        {
            "price": "\nRs 149,000\n - ",
            "desc": ["Core i5, Core i7, 3.2GHz Turbo Boost up...", "LPDDR3 SDRAM, 8GB, HDD+SSD/eMMC, 1TB, 3...", "27 inches, Mac OS X 10.11", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_27_Late_2015/Apple_iMac_27_Late_2015_S_1.jpg",
            "product_name": "Apple iMac MK472HN/A (Late 2015)"
        },
        {
            "price": "\nRs 293,902\n - ",
            "desc": ["Xeon, 3.5 GHz", "DDR3, 16GB, SSD, 256GB", "Up to 6 Displays, Mac OS X 10.9", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_Mac_Pro_2013/Apple_Mac_Pro_2013_S_1.jpg",
            "product_name": "Apple Mac Pro MD878HN/A Late 2013"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 1.9 GHz", "DDR3L, 4GB, HDD, 1TB", "23 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_23_R011IN/HP_23_R011IN_S_1.jpg",
            "product_name": "HP 23-r011in"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "21.5 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_IdeaCentre_B310_57126340/Lenovo_IdeaCentre_B310_57126340_S_1.jpg",
            "product_name": "Lenovo IdeaCentre B310 57126340"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 3.2 GHz", "DDR3, 8GB, HDD, 1TB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_Pavilion_500_220IN_F7H55AA/HP_Pavilion_500_220IN_F7H55AA_S_1.jpg",
            "product_name": "HP Pavilion 500-220IN (F7H55AA)"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 2.6 GHz", "DDR3, 2GB, HDD, 500GB", "Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_110_105IN_E9T56AA/HP_110_105IN_E9T56AA_S_1.jpg",
            "product_name": "HP 110-105IN (E9T56AA)"
        },
        {
            "price": "\nRs 45,000\n",
            "desc": ["Pentium Quad Core, Celeron Dual Core, 2...", "DDR3, 2GB, HDD, 500GB", "19.5 inches", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_C260_57328204/Lenovo_C260_57328204_S_1.jpg",
            "product_name": "Lenovo C260 57328204"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i7, 3.1 GHz", "DDR3, 4GB, HDD, 1TB", "21.5 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_ThinkCentre_EDGE_92z_3426EJQ/Lenovo_ThinkCentre_EDGE_92z_3426EJQ_S_1.jpg",
            "product_name": "Lenovo ThinkCentre EDGE 92z 3426EJQ"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.5 GHz", "DDR3, 4GB, HDD, 500GB", "21.5 inches 16:9 Widescreen, Mac OS X 10.6", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_21_2010/Apple_iMac_21_2010_S_1.jpg",
            "product_name": "Apple iMac MC309HN/A Mid 2011"
        },
        {
            "price": "\nRs 75,990\n",
            "desc": ["Core i5, 2.8 GHz", "LPDDR3 SDRAM, 8GB, HDD, 1TB", "Dual Displays, Mac OS X 10.10", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_Mac_Mini_2011/Apple_Mac_Mini_2011_S_1.jpg",
            "product_name": "Apple Mac Mini MGEQ2HN/A (Late 2014)"
        },
        {
            "price": "\n-\n",
            "desc": ["Xeon, 3.2 GHz", "DDR3, 6GB, HDD, 1TB", "Up to 6 Displays, Mac OS X 10.7", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_Mac_Pro/Apple_Mac_Pro_S_1.jpg",
            "product_name": "Apple Mac Pro MD770HN/A Mid 2012"
        },
        {
            "price": "\n-\n",
            "desc": ["Core 2 Duo, 3.33 GHz", "DDR3, 4GB, HDD, 1TB", "27 inches 16:9 Widescreen, Mac OS X 10.6", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_27_2009/Apple_iMac_27_2009_S_1.jpg",
            "product_name": "Apple iMac Core 2 Duo 3.33 27-inch Late 2009"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 2.9 GHz", "DDR3, 2GB, HDD, 500GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_110_217IN_F7H54AA/HP_110_217IN_F7H54AA_S_1.jpg",
            "product_name": "HP 110-217IN (F7H54AA)"
        },
        {
            "price": "\nRs 78,302\n",
            "desc": ["Core i5, 1.4 GHz", "LPDDR3 SDRAM, 8GB, HDD, 500GB", "21.5 inches 16:9 Widescreen, Mac OS X 10.9", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_21_2014/Apple_iMac_21_2014_S_1.jpg",
            "product_name": "Apple iMac MF883HN/A Mid 2014"
        },
        {
            "price": "\nRs 225,302\n - ",
            "desc": ["Xeon, 3.7 GHz", "DDR3, 12GB, SSD, 256GB", "Up to 6 Displays, Mac OS X 10.9", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_Mac_Pro_2013/Apple_Mac_Pro_2013_S_1.jpg",
            "product_name": "Apple Mac Pro ME253HN/A Late 2013"
        },
        {
            "price": "\nRs 104,762\n",
            "desc": ["Core i5, 2.9 GHz", "DDR3, 8GB, HDD, 1TB", "21.5 inches 16:9 Widescreen, Mac OS X 10.8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_21_2012/Apple_iMac_21_2012_S_1.jpg",
            "product_name": "Apple iMac ME087HN/A (Late 2013)"
        },
        {
            "price": "\nRs 42,261\n",
            "desc": ["Core i3, 1.7 GHz", "DDR3, 4GB, HDD, 1TB", "19.5 Inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_C20_30_F0B2002MIN/Lenovo_C20_30_F0B2002MIN_S_1.jpg",
            "product_name": "Lenovo C20-30 F0B2002MIN"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 3.3 GHz", "DDR3, 4GB, HDD, 1TB", "18.4 inches, Windows 8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/ASUS_Transformer_AiO_P1801/ASUS_Transformer_AiO_P1801_S_1.jpg",
            "product_name": "ASUS Transformer AiO P1801 (Core i3)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "DDR3, 4GB, SSD, 128GB"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/ASUS_VivoMini_UN62/ASUS_VivoMini_UN62_S_1.jpg",
            "product_name": "ASUS VivoMini UN62"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 3 GHz", "DDR3, 2GB, 500GB", "20 inches, Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_Essential_C340_57314047/Lenovo_Essential_C340_57314047_S_1.jpg",
            "product_name": "Lenovo Essential C340 57314047"
        },
        {
            "price": "\nRs 148,270\n",
            "desc": ["Core i7", "DDR4, 16GB, 64GB, HDD, SSD, 3TB, 256GB", "Windows 10 Home", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/ASUS_ROG_G20CB/ASUS_ROG_G20CB_S_1.jpg",
            "product_name": "ASUS ROG G20CB"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3, 3.06 GHz", "DDR3, 4GB, HDD, 500GB", "21.5 inches 16:9 Widescreen, Mac OS X 10.6", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_21_2010/Apple_iMac_21_2010_S_1.jpg",
            "product_name": "Apple iMac MC508HN/A Mid 2010"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 2.6 GHz", "DDR3, 4GB, HDD, 500GB", "Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_110_021IN_H6M02AA/HP_110_021IN_H6M02AA_S_1.jpg",
            "product_name": "HP 110-021IN (H6M02AA)"
        },
        {
            "price": "\nRs 91,042\n",
            "desc": ["Core i5, 2.7 GHz", "DDR3, 8GB, HDD, 1TB", "21.5 inches 16:9 Widescreen, Mac OS X 10.8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_21_2012/Apple_iMac_21_2012_S_1.jpg",
            "product_name": "Apple iMac ME086HN/A (Late 2013)"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.7 GHz", "DDR3, 4GB, HDD, 1TB", "27 inches 16:9 Widescreen, Mac OS X 10.6", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_27_2010/Apple_iMac_27_2010_S_1.jpg",
            "product_name": "Apple iMac MC813HN/A Mid 2011"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, 2.41 GHz", "DDR3, 2GB, HDD, 500GB", "19.5 inches"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Lenovo_C260_57328207/Lenovo_C260_57328207_S_1.jpg",
            "product_name": "Lenovo C260 57328207"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i3", "DDR3, 4GB, HDD, 500GB", "Windows 8"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/ASUS_VivoPC_VC60/ASUS_VivoPC_VC60_S_1.jpg",
            "product_name": "ASUS VivoPC VC60 (Core i3)"
        },
        {
            "price": "\nRs 140,042\n",
            "desc": ["Core i5, 3.4 GHz", "DDR3, 8GB, HDD, 1TB", "27 inches 16:9 Widescreen, Mac OS X 10.8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_27_2012/Apple_iMac_27_2012_S_1.jpg",
            "product_name": "Apple iMac ME089HN/A Late 2013"
        },
        {
            "price": "\n-\n",
            "desc": ["Core i5, 2.7 GHz", "DDR3, 4GB, HDD, 1TB", "21.5 inches 16:9 Widescreen, Mac OS X 10.6", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_21_2010/Apple_iMac_21_2010_S_1.jpg",
            "product_name": "Apple iMac MC812HN/A Mid 2011"
        },
        {
            "price": "\n-\n",
            "desc": ["Pentium Dual Core, 2.6 GHz", "DDR3, 2GB, HDD, 500GB", "DOS"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/HP_110_020IL_H6M01AA/HP_110_020IL_H6M01AA_S_1.jpg",
            "product_name": "HP 110-020IL (H6M01AA)"
        },
        {
            "price": "\nRs 125,342\n",
            "desc": ["Core i5, 3.2 GHz", "DDR3, 8GB, HDD, 1TB", "27 inches 16:9 Widescreen, Mac OS X 10.8", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_27_2012/Apple_iMac_27_2012_S_1.jpg",
            "product_name": "Apple iMac ME088HN/A Late 2013"
        },
        {
            "price": "\nRs 176,302\n",
            "desc": ["Core i5, 3.5 GHz", "DDR3, 8GB, HDD, 1TB", "27 inches 16:9 Widescreen, Mac OS X 10.10", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/Apple_iMac_27_Retina_2014/Apple_iMac_27_Retina_2014_S_1.jpg",
            "product_name": "Apple iMac MF886HN/A (Late 2014)"
        },
        {
            "price": "\n-\n",
            "desc": ["Celeron Dual Core, 1.4 GHz", "DDR3, 2GB, SSD, 16GB", "21.5 inches, Google Chrome", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/desktops/LG_22CV241/LG_22CV241_S_1.jpg",
            "product_name": "LG 22CV241"
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
            desktop.create({
                price: b[i].price,
                product_name: b[i].product_name,
                description: b[i].description,
                image: b[i].image,
                brand_name: b[i].brand_name
            }).then(function (desktop) {
                if (desktop) {
                    console.log("Data Stored")
                } else {
                    console.log("Error");
                }
            })
        }

    }
    response.send("desktop Submission Done")

});

/*****  Route for fetching all desktop info at once ******/

router.get('/all_desktop', (request, response) => {
    desktop.findAll()
        .then((desktop) => {
            console.log("ok");
            response.send(desktop);

        });
});
/*****  Route for fetching all desktop of one brand ******/

router.post('/get_desktop_from_brand', (request, response) => {
    desktop.findAll({
            where: {
                brand_name: request.body.brand_name
            }
        })
        .then((desktop_data) => {
            console.log("ok");
            response.send(desktop_data);

        });
});
/*** Route for fetching single desktop by id */
router.post('/get_single_desktop', (request, response) => {
    desktop.findAll({
        where: {
            id: request.body.id
        }
    }).then((desktop) => {
        console.log(desktop);
        response.send(desktop);
    }).catch((error) => {
        alert(error)
    })
})
/***  Route for getting all brands available ***/
router.get('/get_desktop_brands', (request, response) => {
    desktop.findAll()
        .then(function (desktop) {
            var brands = []
            for (var i = 0; i < desktop.length; i++) {
                var already_present = false;
                if (i == 0) {
                    brands[i] = desktop[i].brand_name
                }
                for (var j = 0; j < i; j++) {
                    if (brands[j] == desktop[i].brand_name) {
                        already_present = true;
                    } else {
                        if (j == i - 1 && already_present == false) {
                            brands[brands.length] = desktop[i].brand_name
                        } else {

                        }
                    }
                }
            }
            response.send(brands);
        });
});
//route for getting number of devices in edesktoph brand
router.get('/get_count', (request, response) => {
    var brands = [
    "Dell",
    "Apple",
    "HP",
    "Lenovo",
    "ASUS"
]
    var a = []
    var k = 0
    var check = false;
    for (var i = 0; i < brands.length; i++) {
        desktop.findAll({
                where: {
                    brand_name: brands[i]
                }
            }).then((desktop) => {
                a[k] = desktop.length + "," + desktop[0].brand_name

                k = k + 1;
            })
            .then(() => {
                console.log("length of a " + a.length)
                if (a.length == 5 && check == false) {
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