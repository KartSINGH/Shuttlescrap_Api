var router = require('express').Router(),
    connection = require('../connection'),
    nodemailer = require('nodemailer'),
    sequelize = connection.sequelize,
    wellknown = require('nodemailer-wellknown'),
    fridge = connection.seq.define('fridge', {
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
fridge.sync();
/*****  Route for storing fridge Information *****/
router.get('/submit_fridge', (request, response) => {
    var data_body = [{
            "price": "\nRs 13,700\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B205KVHP/LG_GL_B205KVHP_S_1.jpg",
            "product_name": "LG GL-B205KVHP"
        },
        {
            "price": "\nRs 68,391\n - ",
            "desc": ["Side By Side", "687 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_B247SLUV/LG_GC_B247SLUV_S_1.jpg",
            "product_name": "LG GC-B247SLUV"
        },
        {
            "price": "\nRs 6,899\n",
            "desc": ["Chest Freezer", "52 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Haier_HR_62HP/Haier_HR_62HP_S_1.jpg",
            "product_name": "Haier HR-62HP"
        },
        {
            "price": "\nRs 15,900\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1834VL/Samsung_RR19H1834VL_S_1.jpg",
            "product_name": "Samsung RR19H1834VL"
        },
        {
            "price": "\nRs 14,700\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D201ASHL/LG_GL_D201ASHL_S_1.jpg",
            "product_name": "LG GL-D201ASHL"
        },
        {
            "price": "\nRs 9,290\n",
            "desc": ["Single Door", "150 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Videocon_VA163B/Videocon_VA163B_S_1.jpg",
            "product_name": "Videocon VA163B"
        },
        {
            "price": "\nRs 24,400\n - ",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M292RPZL/LG_GL_M292RPZL_S_1.jpg",
            "product_name": "LG GL-M292RPZL"
        },
        {
            "price": "\nRs 15,400\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B201ASAN/LG_GL_B201ASAN_S_1.jpg",
            "product_name": "LG GL-B201ASAN"
        },
        {
            "price": "\nRs 23,700\n - ",
            "desc": ["Top Freezer", "234 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT27JARYESA/Samsung_RT27JARYESA_S_1.jpg",
            "product_name": "Samsung RT27JARYESA"
        },
        {
            "price": "\nRs 19,900\n - ",
            "desc": ["Top Freezer", "255 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B282SGSM/LG_GL_B282SGSM_S_1.jpg",
            "product_name": "LG GL-B282SGSM"
        },
        {
            "price": "\nRs 12,750\n - ",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_205_GENIUS_ROY_4S_FIESTA/Whirlpool_205_GENIUS_ROY_4S_FIESTA_S_1.jpg",
            "product_name": "Whirlpool 205 GENIUS ROY 4S FIESTA"
        },
        {
            "price": "\nRs 124,990\n",
            "desc": ["French Door", "659 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_J237JSNV/LG_GC_J237JSNV_S_1.jpg",
            "product_name": "LG GC-J237JSNV"
        },
        {
            "price": "\nRs 23,400\n",
            "desc": ["Top Freezer", "234 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT27JARMABX/Samsung_RT27JARMABX_S_1.jpg",
            "product_name": "Samsung RT27JARMABX"
        },
        {
            "price": "\nRs 12,450\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19J2104SE/Samsung_RR19J2104SE_S_1.jpg",
            "product_name": "Samsung RR19J2104SE"
        },
        {
            "price": "\nRs 49,229\n - ",
            "desc": ["Top Freezer", "426 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_D432HLAM/LG_GC_D432HLAM_S_1.jpg",
            "product_name": "LG GC-D432HLAM"
        },
        {
            "price": "\nRs 23,000\n - ",
            "desc": ["Top Freezer", "255 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B282SSPM/LG_GL_B282SSPM_S_1.jpg",
            "product_name": "LG GL-B282SSPM"
        },
        {
            "price": "\nRs 14,380\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B205KSLN/LG_GL_B205KSLN_S_1.jpg",
            "product_name": "LG GL-B205KSLN"
        },
        {
            "price": "\nRs 28,890\n - ",
            "desc": ["Top Freezer", "255 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_F282RSOL/LG_GL_F282RSOL_S_1.jpg",
            "product_name": "LG GL-F282RSOL"
        },
        {
            "price": "\nRs 14,900\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1724RY/Samsung_RR19H1724RY_S_1.jpg",
            "product_name": "Samsung RR19H1724RY"
        },
        {
            "price": "\nRs 91,000\n - ",
            "desc": ["Side By Side", "585 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RS21HUTPN1_SBS/Samsung_RS21HUTPN1_SBS_S_1.jpg",
            "product_name": "Samsung RS21HUTPN1 SBS"
        },
        {
            "price": "\nRs 12,100\n - ",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19J20A3RH/Samsung_RR19J20A3RH_S_1.jpg",
            "product_name": "Samsung RR19J20A3RH"
        },
        {
            "price": "\nRs 14,700\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D201AMHL/LG_GL_D201AMHL_S_1.jpg",
            "product_name": "LG GL-D201AMHL"
        },
        {
            "price": "\nRs 22,090\n",
            "desc": ["Single Door", "235 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D241AHAN/LG_GL_D241AHAN_S_1.jpg",
            "product_name": "LG GL-D241AHAN"
        },
        {
            "price": "\nRs 29,400\n - ",
            "desc": ["Top Freezer", "330 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_FP_343D_Royal_Protton/Whirlpool_FP_343D_Royal_Protton_S_1.jpg",
            "product_name": "Whirlpool FP 343D Royal Protton"
        },
        {
            "price": "\nRs 255,200\n",
            "desc": ["Side By Side", "690 L Net", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RF28K9380SG/Samsung_RF28K9380SG_S_1.jpg",
            "product_name": "Samsung RF28K9380SG"
        },
        {
            "price": "\nRs 15,900\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D201AMLN/LG_GL_D201AMLN_S_1.jpg",
            "product_name": "LG GL-D201AMLN"
        },
        {
            "price": "\nRs 12,400\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1104RH/Samsung_RR19H1104RH_S_1.jpg",
            "product_name": "Samsung RR19H1104RH"
        },
        {
            "price": "\nRs 14,199\n - ",
            "desc": ["Single Door", "195 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EDGEZX_195_CTS_5_2/Godrej_RD_EDGEZX_195_CTS_5_2_S_1.jpg",
            "product_name": "Godrej RD EDGEZX 195 CTS 5.2"
        },
        {
            "price": "\nRs 14,100\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19J2724RY/Samsung_RR19J2724RY_S_1.jpg",
            "product_name": "Samsung RR19J2724RY"
        },
        {
            "price": "\nRs 13,500\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1784NT/Samsung_RR19H1784NT_S_1.jpg",
            "product_name": "Samsung RR19H1784NT"
        },
        {
            "price": "\nRs 36,090\n - ",
            "desc": ["Top Freezer", "308 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I322RGFL/LG_GL_I322RGFL_S_1.jpg",
            "product_name": "LG GL-I322RGFL"
        },
        {
            "price": "\nRs 15,400\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D205KGHN/LG_GL_D205KGHN_S_1.jpg",
            "product_name": "LG GL-D205KGHN"
        },
        {
            "price": "\nRs 12,199\n",
            "desc": ["Single Door", "185 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EDGE_185_CH_4_2/Godrej_RD_EDGE_185_CH_4_2_S_1.jpg",
            "product_name": "Godrej RD EDGE 185 CH 4.2"
        },
        {
            "price": "\nRs 11,998\n - ",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_205_ICEMAGIC_POWERCOOL_PRM_5S_EXOTICA/Whirlpool_205_ICEMAGIC_POWERCOOL_PRM_5S_EXOTICA_S_1.jpg",
            "product_name": "Whirlpool 205 ICEMAGIC POWERCOOL PRM 5S EXOTICA"
        },
        {
            "price": "\nRs 18,999\n - ",
            "desc": ["Single Door", "212 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR21J2835PX/Samsung_RR21J2835PX_S_1.jpg",
            "product_name": "Samsung RR21J2835PX"
        },
        {
            "price": "\nRs 201,990\n",
            "desc": ["French Door", "725 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GR_M24FWAHL/LG_GR_M24FWAHL_S_1.jpg",
            "product_name": "LG GR-M24FWAHL"
        },
        {
            "price": "\nRs 32,807\n - ",
            "desc": ["Top Freezer", "335 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U372JPZL/LG_GL_U372JPZL_S_1.jpg",
            "product_name": "LG GL-U372JPZL"
        },
        {
            "price": "\nRs 51,113\n",
            "desc": ["Top Freezer", "440 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT47K6358SL/Samsung_RT47K6358SL_S_1.jpg",
            "product_name": "Samsung RT47K6358SL"
        },
        {
            "price": "\nRs 11,785\n",
            "desc": ["Single Door", "185 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EDGE_185_CW_4_2/Godrej_RD_EDGE_185_CW_4_2_S_1.jpg",
            "product_name": "Godrej RD EDGE 185 CW 4.2"
        },
        {
            "price": "\nRs 28,595\n - ",
            "desc": ["Top Freezer", "300 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_FP_313D_Royal_Protton/Whirlpool_FP_313D_Royal_Protton_S_1.jpg",
            "product_name": "Whirlpool FP 313D Royal Protton"
        },
        {
            "price": "\nRs 99,999\n",
            "desc": ["Side By Side", "687 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_M247CLBV/LG_GC_M247CLBV_S_1.jpg",
            "product_name": "LG GC-M247CLBV"
        },
        {
            "price": "\nRs 17,990\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D221APAN/LG_GL_D221APAN_S_1.jpg",
            "product_name": "LG GL-D221APAN"
        },
        {
            "price": "\nRs 20,200\n - ",
            "desc": ["Top Freezer", "245 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_Neo_FR258_Royal_3S/Whirlpool_Neo_FR258_Royal_3S_S_1.jpg",
            "product_name": "Whirlpool Neo FR258 Royal 3S"
        },
        {
            "price": "\nRs 55,499\n",
            "desc": ["Top Freezer", "385 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT42HDAGESL/Samsung_RT42HDAGESL_S_1.jpg",
            "product_name": "Samsung RT42HDAGESL"
        },
        {
            "price": "\nRs 302,490\n",
            "desc": ["Side By Side", "1001 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GR_D35FBGHL/LG_GR_D35FBGHL_S_1.jpg",
            "product_name": "LG GR-D35FBGHL"
        },
        {
            "price": "\n-\n",
            "desc": ["Single Door", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Electrolux_ECP063/Electrolux_ECP063_S_1.jpg",
            "product_name": "Electrolux ECP063"
        },
        {
            "price": "\nRs 14,580\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B205KMLN/LG_GL_B205KMLN_S_1.jpg",
            "product_name": "LG GL-B205KMLN"
        },
        {
            "price": "\nRs 21,060\n - ",
            "desc": ["Top Freezer", "240 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_FP_263D_Royal_Protton/Whirlpool_FP_263D_Royal_Protton_S_1.jpg",
            "product_name": "Whirlpool FP 263D Royal Protton"
        },
        {
            "price": "\nRs 70,141\n - ",
            "desc": ["Side By Side", "581 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_B207GPQV/LG_GC_B207GPQV_S_1.jpg",
            "product_name": "LG GC-B207GPQV"
        },
        {
            "price": "\nRs 13,200\n - ",
            "desc": ["Single Door", "185 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EDGE_185_CHTM_4_2/Godrej_RD_EDGE_185_CHTM_4_2_S_1.jpg",
            "product_name": "Godrej RD EDGE 185 CHTM 4.2"
        },
        {
            "price": "\nRs 21,700\n",
            "desc": ["Single Door", "235 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D241AMLN/LG_GL_D241AMLN_S_1.jpg",
            "product_name": "LG GL-D241AMLN"
        },
        {
            "price": "\nRs 16,360\n - ",
            "desc": ["Single Door", "212 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RH_EdgeDigi_212_PDS_6_2/Godrej_RH_EdgeDigi_212_PDS_6_2_S_1.jpg",
            "product_name": "Godrej RH EdgeDigi 212 PDS 6.2"
        },
        {
            "price": "\nRs 46,250\n",
            "desc": ["Top Freezer", "362 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT39K5458SL/Samsung_RT39K5458SL_S_1.jpg",
            "product_name": "Samsung RT39K5458SL"
        },
        {
            "price": "\nRs 177,300\n - ",
            "desc": ["Side By Side", "838 L Gross Total", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RH77J90407H/Samsung_RH77J90407H_S_1.jpg",
            "product_name": "Samsung RH77J90407H"
        },
        {
            "price": "\nRs 30,190\n - ",
            "desc": ["Top Freezer", "284 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U302JGOL/LG_GL_U302JGOL_S_1.jpg",
            "product_name": "LG GL-U302JGOL"
        },
        {
            "price": "\nRs 30,500\n - ",
            "desc": ["Top Freezer", "284 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_T302RPZM/LG_GL_T302RPZM_S_1.jpg",
            "product_name": "LG GL-T302RPZM"
        },
        {
            "price": "\nRs 154,850\n - ",
            "desc": ["Side By Side", "596 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RF60J9090SL/Samsung_RF60J9090SL_S_1.jpg",
            "product_name": "Samsung RF60J9090SL"
        },
        {
            "price": "\nRs 29,800\n - ",
            "desc": ["Top Freezer", "284 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I302RSFL/LG_GL_I302RSFL_S_1.jpg",
            "product_name": "LG GL-I302RSFL"
        },
        {
            "price": "\nRs 52,690\n - ",
            "desc": ["Side By Side", "521 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Haier_HRF_618SS/Haier_HRF_618SS_S_1.jpg",
            "product_name": "Haier HRF-618SS"
        },
        {
            "price": "\nRs 13,600\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1414SA/Samsung_RR19H1414SA_S_1.jpg",
            "product_name": "Samsung RR19H1414SA"
        },
        {
            "price": "\nRs 94,999\n - ",
            "desc": ["Side By Side", "538 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RS554NRUA1J_SBS/Samsung_RS554NRUA1J_SBS_S_1.jpg",
            "product_name": "Samsung RS554NRUA1J SBS"
        },
        {
            "price": "\nRs 19,690\n",
            "desc": ["Single Door", "240 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EdgePro_240_PDS_5_2/Godrej_RD_EdgePro_240_PDS_5_2_S_1.jpg",
            "product_name": "Godrej RD EdgePro 240 PDS 5.2"
        },
        {
            "price": "\nRs 14,300\n",
            "desc": ["Single Door", "188 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Haier_HRD_2156BS_H/Haier_HRD_2156BS_H_S_1.jpg",
            "product_name": "Haier HRD-2156BS-H"
        },
        {
            "price": "\n-\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B201APAI/LG_GL_B201APAI_S_1.jpg",
            "product_name": "LG GL-B201APAI"
        },
        {
            "price": "\n-\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EdgePro_190_CT_6_2/Godrej_RD_EdgePro_190_CT_6_2_S_1.jpg",
            "product_name": "Godrej RD EdgePro 190 CT 6.2"
        },
        {
            "price": "\nRs 11,900\n",
            "desc": ["Single Door", "170 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Haier_HRD_1905CS_H/Haier_HRD_1905CS_H_S_1.jpg",
            "product_name": "Haier HRD-1905CS-H"
        },
        {
            "price": "\nRs 16,500\n - ",
            "desc": ["Single Door", "221 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_Godrej_Edge_SX_MuziPlay/Godrej_Godrej_Edge_SX_MuziPlay_S_1.jpg",
            "product_name": "Godrej Godrej Edge SX MuziPlay"
        },
        {
            "price": "\nRs 18,499\n",
            "desc": ["Single Door", "230 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR23J2415SA/Samsung_RR23J2415SA_S_1.jpg",
            "product_name": "Samsung RR23J2415SA"
        },
        {
            "price": "\nRs 19,099\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D221ASAN/LG_GL_D221ASAN_S_1.jpg",
            "product_name": "LG GL-D221ASAN"
        },
        {
            "price": "\nRs 59,999\n - ",
            "desc": ["French Door", "465 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_WB480PND2/Hitachi_R_WB480PND2_S_1.jpg",
            "product_name": "Hitachi R-WB480PND2"
        },
        {
            "price": "\nRs 75,300\n - ",
            "desc": ["Side By Side", "581 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_B207GSQV/LG_GC_B207GSQV_S_1.jpg",
            "product_name": "LG GC-B207GSQV"
        },
        {
            "price": "\nRs 30,790\n",
            "desc": ["Top Freezer", "260 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U292JGOL/LG_GL_U292JGOL_S_1.jpg",
            "product_name": "LG GL-U292JGOL"
        },
        {
            "price": "\nRs 9,099\n",
            "desc": ["Single Door", "80 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Videocon_VC091P/Videocon_VC091P_S_1.jpg",
            "product_name": "Videocon VC091P"
        },
        {
            "price": "\nRs 25,920\n - ",
            "desc": ["Top Freezer", "285 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M302RPZL/LG_GL_M302RPZL_S_1.jpg",
            "product_name": "LG GL-M302RPZL"
        },
        {
            "price": "\nRs 53,990\n - ",
            "desc": ["Side By Side", "618 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Videocon_VPP60ZPS_FSC/Videocon_VPP60ZPS_FSC_S_1.jpg",
            "product_name": "Videocon VPP60ZPS-FSC"
        },
        {
            "price": "\nRs 31,790\n",
            "desc": ["Top Freezer", "310 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M322RPZL/LG_GL_M322RPZL_S_1.jpg",
            "product_name": "LG GL-M322RPZL"
        },
        {
            "price": "\nRs 41,500\n - ",
            "desc": ["Top Freezer", "360 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I402RTNL/LG_GL_I402RTNL_S_1.jpg",
            "product_name": "LG GL-I402RTNL"
        },
        {
            "price": "\nRs 17,100\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1835LX/Samsung_RR19H1835LX_S_1.jpg",
            "product_name": "Samsung RR19H1835LX"
        },
        {
            "price": "\nRs 17,313\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_205_ICEMAGIC_POWERCOOL_ROY_5S_ADONIS/Whirlpool_205_ICEMAGIC_POWERCOOL_ROY_5S_ADONIS_S_1.jpg",
            "product_name": "Whirlpool 205 ICEMAGIC POWERCOOL ROY 5S ADONIS"
        },
        {
            "price": "\nRs 103,000\n",
            "desc": ["Side By Side", "567 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_L207GPQV/LG_GC_L207GPQV_S_1.jpg",
            "product_name": "LG GC-L207GPQV"
        },
        {
            "price": "\nRs 26,890\n - ",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D292JPFL/LG_GL_D292JPFL_S_1.jpg",
            "product_name": "LG GL-D292JPFL"
        },
        {
            "price": "\nRs 84,000\n",
            "desc": ["Side By Side", "581 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_B207GAQV/LG_GC_B207GAQV_S_1.jpg",
            "product_name": "LG GC-B207GAQV"
        },
        {
            "price": "\n-\n",
            "desc": ["Single Door", "230 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR23J2835RX/Samsung_RR23J2835RX_S_1.jpg",
            "product_name": "Samsung RR23J2835RX"
        },
        {
            "price": "\n-\n",
            "desc": ["Single Door", "200 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_215_ICEMAGIC_FRESH_PRM_5S_EXOTICA/Whirlpool_215_ICEMAGIC_FRESH_PRM_5S_EXOTICA_S_1.jpg",
            "product_name": "Whirlpool 215 ICEMAGIC FRESH PRM 5S EXOTICA"
        },
        {
            "price": "\nRs 86,500\n - ",
            "desc": ["Side By Side", "545 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RS552NRUA7E_SBS/Samsung_RS552NRUA7E_SBS_S_1.jpg",
            "product_name": "Samsung RS552NRUA7E SBS"
        },
        {
            "price": "\nRs 117,440\n",
            "desc": ["Side By Side", "554 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RS21HZLMR1_SBS/Samsung_RS21HZLMR1_SBS_S_1.jpg",
            "product_name": "Samsung RS21HZLMR1 SBS"
        },
        {
            "price": "\nRs 12,400\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1104SE/Samsung_RR19H1104SE_S_1.jpg",
            "product_name": "Samsung RR19H1104SE"
        },
        {
            "price": "\nRs 27,400\n - ",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D292JSFL/LG_GL_D292JSFL_S_1.jpg",
            "product_name": "LG GL-D292JSFL"
        },
        {
            "price": "\nRs 97,000\n - ",
            "desc": ["French Door", "679 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_M237JSNV/LG_GC_M237JSNV_S_1.jpg",
            "product_name": "LG GC-M237JSNV"
        },
        {
            "price": "\nRs 101,000\n - ",
            "desc": ["French Door", "586 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_W660PND3/Hitachi_R_W660PND3_S_1.jpg",
            "product_name": "Hitachi R-W660PND3"
        },
        {
            "price": "\nRs 28,390\n - ",
            "desc": ["Top Freezer", "260 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U292JSOL/LG_GL_U292JSOL_S_1.jpg",
            "product_name": "LG GL-U292JSOL"
        },
        {
            "price": "\nRs 31,200\n",
            "desc": ["Top Freezer", "255 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT29JARYESA/Samsung_RT29JARYESA_S_1.jpg",
            "product_name": "Samsung RT29JARYESA"
        },
        {
            "price": "\nRs 32,300\n - ",
            "desc": ["Top Freezer", "308 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I322RPZL/LG_GL_I322RPZL_S_1.jpg",
            "product_name": "LG GL-I322RPZL"
        },
        {
            "price": "\nRs 56,899\n - ",
            "desc": ["Top Freezer", "511 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GN_M602HLHM/LG_GN_M602HLHM_S_1.jpg",
            "product_name": "LG GN-M602HLHM"
        },
        {
            "price": "\nRs 14,999\n - ",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B201APAN/LG_GL_B201APAN_S_1.jpg",
            "product_name": "LG GL-B201APAN"
        },
        {
            "price": "\nRs 15,790\n",
            "desc": ["Single Door", "185 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EDGESX_185_CTS_4_2/Godrej_RD_EDGESX_185_CTS_4_2_S_1.jpg",
            "product_name": "Godrej RD EDGESX 185 CTS 4.2"
        },
        {
            "price": "\nRs 20,350\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D221AHAI/LG_GL_D221AHAI_S_1.jpg",
            "product_name": "LG GL-D221AHAI"
        },
        {
            "price": "\nRs 25,990\n - ",
            "desc": ["Top Freezer", "265 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_Neo_FR278_Royal_Plus_3S/Whirlpool_Neo_FR278_Royal_Plus_3S_S_1.jpg",
            "product_name": "Whirlpool Neo FR278 Royal Plus 3S"
        },
        {
            "price": "\nRs 29,990\n",
            "desc": ["Top Freezer", "284 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I302RTNL/LG_GL_I302RTNL_S_1.jpg",
            "product_name": "LG GL-I302RTNL"
        },
        {
            "price": "\nRs 26,900\n - ",
            "desc": ["Top Freezer", "260 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I292RSFL/LG_GL_I292RSFL_S_1.jpg",
            "product_name": "LG GL-I292RSFL"
        },
        {
            "price": "\nRs 13,600\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19J2414SA/Samsung_RR19J2414SA_S_1.jpg",
            "product_name": "Samsung RR19J2414SA"
        },
        {
            "price": "\nRs 16,790\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EdgePro_190_PD_6_2/Godrej_RD_EdgePro_190_PD_6_2_S_1.jpg",
            "product_name": "Godrej RD EdgePro 190 PD 6.2"
        },
        {
            "price": "\nRs 18,250\n",
            "desc": ["Single Door", "212 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR21J2725VL/Samsung_RR21J2725VL_S_1.jpg",
            "product_name": "Samsung RR21J2725VL"
        },
        {
            "price": "\nRs 31,700\n",
            "desc": ["Top Freezer", "292 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_Neo_FR305_Royal_Plus_4S/Whirlpool_Neo_FR305_Royal_Plus_4S_S_1.jpg",
            "product_name": "Whirlpool Neo FR305 Royal Plus 4S"
        },
        {
            "price": "\nRs 69,200\n - ",
            "desc": ["Side By Side", "581 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_B207GLQV/LG_GC_B207GLQV_S_1.jpg",
            "product_name": "LG GC-B207GLQV"
        },
        {
            "price": "\nRs 91,399\n - ",
            "desc": ["Side By Side", "567 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_L207GLQV/LG_GC_L207GLQV_S_1.jpg",
            "product_name": "LG GC-L207GLQV"
        },
        {
            "price": "\nRs 92,500\n - ",
            "desc": ["Side By Side", "675 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_C247UGUV/LG_GC_C247UGUV_S_1.jpg",
            "product_name": "LG GC-C247UGUV"
        },
        {
            "price": "\nRs 15,100\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1784UT/Samsung_RR19H1784UT_S_1.jpg",
            "product_name": "Samsung RR19H1784UT"
        },
        {
            "price": "\nRs 21,000\n",
            "desc": ["Single Door", "230 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR23J2835PX/Samsung_RR23J2835PX_S_1.jpg",
            "product_name": "Samsung RR23J2835PX"
        },
        {
            "price": "\nRs 60,500\n",
            "desc": ["Top Freezer", "439 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT47H567ESL/Samsung_RT47H567ESL_S_1.jpg",
            "product_name": "Samsung RT47H567ESL"
        },
        {
            "price": "\nRs 99,090\n",
            "desc": ["Side By Side", "511 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RS51K56H02A/Samsung_RS51K56H02A_S_1.jpg",
            "product_name": "Samsung RS51K56H02A"
        },
        {
            "price": "\nRs 299,990\n",
            "desc": ["French Door", "1001 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GR_D34FBGHL/LG_GR_D34FBGHL_S_1.jpg",
            "product_name": "LG GR-D34FBGHL"
        },
        {
            "price": "\nRs 16,300\n",
            "desc": ["Single Door", "215 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B225BSLL/LG_GL_B225BSLL_S_1.jpg",
            "product_name": "LG GL-B225BSLL"
        },
        {
            "price": "\nRs 18,500\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_230_IMFRESH_ROY_5S_EXOTICA/Whirlpool_230_IMFRESH_ROY_5S_EXOTICA_S_1.jpg",
            "product_name": "Whirlpool 230 IMFRESH ROY 5S EXOTICA"
        },
        {
            "price": "\nRs 61,990\n - ",
            "desc": ["Top Freezer", "495 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M542GNSL/LG_GL_M542GNSL_S_1.jpg",
            "product_name": "LG GL-M542GNSL"
        },
        {
            "price": "\nRs 79,000\n",
            "desc": ["Top Freezer", "602 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Panasonic_NR_BY602XS/Panasonic_NR_BY602XS_S_1.jpg",
            "product_name": "Panasonic NR-BY602XS"
        },
        {
            "price": "\nRs 17,100\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1835RX/Samsung_RR19H1835RX_S_1.jpg",
            "product_name": "Samsung RR19H1835RX"
        },
        {
            "price": "\nRs 19,110\n - ",
            "desc": ["Single Door", "235 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B241ASLT/LG_GL_B241ASLT_S_1.jpg",
            "product_name": "LG GL-B241ASLT"
        },
        {
            "price": "\nRs 19,268\n",
            "desc": ["Single Door", "251 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EDGESX_251_CT_5_2/Godrej_RD_EDGESX_251_CT_5_2_S_1.jpg",
            "product_name": "Godrej RD EDGESX 251 CT 5.2"
        },
        {
            "price": "\nRs 23,490\n",
            "desc": ["Single Door", "270 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B281BSAN/LG_GL_B281BSAN_S_1.jpg",
            "product_name": "LG GL-B281BSAN"
        },
        {
            "price": "\nRs 27,390\n - ",
            "desc": ["Top Freezer", "284 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I302RPZL/LG_GL_I302RPZL_S_1.jpg",
            "product_name": "LG GL-I302RPZL"
        },
        {
            "price": "\nRs 28,890\n - ",
            "desc": ["Top Freezer", "255 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_F282RGOL/LG_GL_F282RGOL_S_1.jpg",
            "product_name": "LG GL-F282RGOL"
        },
        {
            "price": "\nRs 37,090\n",
            "desc": ["Top Freezer", "308 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U322JGOL/LG_GL_U322JGOL_S_1.jpg",
            "product_name": "LG GL-U322JGOL"
        },
        {
            "price": "\nRs 37,158\n - ",
            "desc": ["Top Freezer", "335 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U372JHSL/LG_GL_U372JHSL_S_1.jpg",
            "product_name": "LG GL-U372JHSL"
        },
        {
            "price": "\nRs 39,150\n - ",
            "desc": ["Top Freezer", "362 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT39K5538S9/Samsung_RT39K5538S9_S_1.jpg",
            "product_name": "Samsung RT39K5538S9"
        },
        {
            "price": "\nRs 70,590\n - ",
            "desc": ["Top Freezer", "585 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_VG610PND3/Hitachi_R_VG610PND3_S_1.jpg",
            "product_name": "Hitachi R-VG610PND3"
        },
        {
            "price": "\nRs 99,000\n",
            "desc": ["Side By Side", "675 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_C237JGGV/LG_GC_C237JGGV_S_1.jpg",
            "product_name": "LG GC-C237JGGV"
        },
        {
            "price": "\nRs 14,190\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B201AMLN/LG_GL_B201AMLN_S_1.jpg",
            "product_name": "LG GL-B201AMLN"
        },
        {
            "price": "\nRs 21,900\n",
            "desc": ["Single Door", "235 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D241AHAI/LG_GL_D241AHAI_S_1.jpg",
            "product_name": "LG GL-D241AHAI"
        },
        {
            "price": "\nRs 44,500\n",
            "desc": ["Top Freezer", "362 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT39K5518S8/Samsung_RT39K5518S8_S_1.jpg",
            "product_name": "Samsung RT39K5518S8"
        },
        {
            "price": "\nRs 56,690\n",
            "desc": ["Top Freezer", "407 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I442TKRM/LG_GL_I442TKRM_S_1.jpg",
            "product_name": "LG GL-I442TKRM"
        },
        {
            "price": "\nRs 17,000\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EdgePro_190_PDS_6_2/Godrej_RD_EdgePro_190_PDS_6_2_S_1.jpg",
            "product_name": "Godrej RD EdgePro 190 PDS 6.2"
        },
        {
            "price": "\nRs 17,150\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19J2835PX/Samsung_RR19J2835PX_S_1.jpg",
            "product_name": "Samsung RR19J2835PX"
        },
        {
            "price": "\nRs 31,300\n",
            "desc": ["Top Freezer", "255 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT29JSMSASZ/Samsung_RT29JSMSASZ_S_1.jpg",
            "product_name": "Samsung RT29JSMSASZ"
        },
        {
            "price": "\nRs 34,700\n",
            "desc": ["Top Freezer", "302 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT33JSMFERZ/Samsung_RT33JSMFERZ_S_1.jpg",
            "product_name": "Samsung RT33JSMFERZ"
        },
        {
            "price": "\nRs 47,090\n",
            "desc": ["Top Freezer", "360 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U402HDWL/LG_GL_U402HDWL_S_1.jpg",
            "product_name": "LG GL-U402HDWL"
        },
        {
            "price": "\nRs 51,840\n - ",
            "desc": ["Top Freezer", "470 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M522GDWL/LG_GL_M522GDWL_S_1.jpg",
            "product_name": "LG GL-M522GDWL"
        },
        {
            "price": "\nRs 62,990\n",
            "desc": ["Top Freezer", "470 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_T522GDWL/LG_GL_T522GDWL_S_1.jpg",
            "product_name": "LG GL-T522GDWL"
        },
        {
            "price": "\nRs 18,899\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D221ASLN/LG_GL_D221ASLN_S_1.jpg",
            "product_name": "LG GL-D221ASLN"
        },
        {
            "price": "\nRs 26,999\n - ",
            "desc": ["Top Freezer", "284 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_T302RHSM/LG_GL_T302RHSM_S_1.jpg",
            "product_name": "LG GL-T302RHSM"
        },
        {
            "price": "\nRs 29,490\n",
            "desc": ["Top Freezer", "255 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_F282RPOL/LG_GL_F282RPOL_S_1.jpg",
            "product_name": "LG GL-F282RPOL"
        },
        {
            "price": "\nRs 29,500\n - ",
            "desc": ["Top Freezer", "260 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U292JPOL/LG_GL_U292JPOL_S_1.jpg",
            "product_name": "LG GL-U292JPOL"
        },
        {
            "price": "\nRs 29,790\n - ",
            "desc": ["Top Freezer", "284 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I302RGFL/LG_GL_I302RGFL_S_1.jpg",
            "product_name": "LG GL-I302RGFL"
        },
        {
            "price": "\nRs 29,800\n",
            "desc": ["Top Freezer", "305 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RT_EON_305_P_2_3/Godrej_RT_EON_305_P_2_3_S_1.jpg",
            "product_name": "Godrej RT EON 305 P 2.3"
        },
        {
            "price": "\nRs 34,450\n - ",
            "desc": ["Top Freezer", "233 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RT_EON_343_P_3_3/Godrej_RT_EON_343_P_3_3_S_1.jpg",
            "product_name": "Godrej RT EON 343 P 3.3"
        },
        {
            "price": "\nRs 36,090\n",
            "desc": ["Top Freezer", "308 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I322RSFL/LG_GL_I322RSFL_S_1.jpg",
            "product_name": "LG GL-I322RSFL"
        },
        {
            "price": "\nRs 38,290\n",
            "desc": ["Top Freezer", "335 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I372RTNL/LG_GL_I372RTNL_S_1.jpg",
            "product_name": "LG GL-I372RTNL"
        },
        {
            "price": "\nRs 43,190\n - ",
            "desc": ["Top Freezer", "335 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D372HNSL/LG_GL_D372HNSL_S_1.jpg",
            "product_name": "LG GL-D372HNSL"
        },
        {
            "price": "\nRs 54,999\n - ",
            "desc": ["Top Freezer", "336 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_SG31BPND/Hitachi_R_SG31BPND_S_1.jpg",
            "product_name": "Hitachi R-SG31BPND"
        },
        {
            "price": "\nRs 70,990\n",
            "desc": ["Top Freezer", "450 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_B519ESQZ/LG_GC_B519ESQZ_S_1.jpg",
            "product_name": "LG GC-B519ESQZ"
        },
        {
            "price": "\n-\n",
            "desc": ["Single Door", "185 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RD_EDGE_185_CTM_4_2/Godrej_RD_EDGE_185_CTM_4_2_S_1.jpg",
            "product_name": "Godrej RD EDGE 185 CTM 4.2"
        },
        {
            "price": "\nRs 13,990\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Kelvinator_KWP205T/Kelvinator_KWP205T_S_1.jpg",
            "product_name": "Kelvinator KWP205T"
        },
        {
            "price": "\nRs 17,400\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B221APAN/LG_GL_B221APAN_S_1.jpg",
            "product_name": "LG GL-B221APAN"
        },
        {
            "price": "\nRs 19,500\n",
            "desc": ["Single Door", "235 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B241AMLT/LG_GL_B241AMLT_S_1.jpg",
            "product_name": "LG GL-B241AMLT"
        },
        {
            "price": "\nRs 22,500\n",
            "desc": ["Top Freezer", "220 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Haier_HRF_2673BS_H/Haier_HRF_2673BS_H_S_1.jpg",
            "product_name": "Haier HRF- 2673BS-H"
        },
        {
            "price": "\nRs 24,000\n - ",
            "desc": ["Top Freezer", "255 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_A282SPZL/LG_GL_A282SPZL_S_1.jpg",
            "product_name": "LG GL-A282SPZL"
        },
        {
            "price": "\nRs 29,050\n",
            "desc": ["Top Freezer", "255 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT29JARZESP/Samsung_RT29JARZESP_S_1.jpg",
            "product_name": "Samsung RT29JARZESP"
        },
        {
            "price": "\nRs 32,990\n",
            "desc": ["Top Freezer", "284 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I302RPOL/LG_GL_I302RPOL_S_1.jpg",
            "product_name": "LG GL-I302RPOL"
        },
        {
            "price": "\nRs 42,190\n - ",
            "desc": ["Top Freezer", "335 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D372HDWL/LG_GL_D372HDWL_S_1.jpg",
            "product_name": "LG GL-D372HDWL"
        },
        {
            "price": "\nRs 43,690\n - ",
            "desc": ["Top Freezer", "360 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D402JPZL/LG_GL_D402JPZL_S_1.jpg",
            "product_name": "LG GL-D402JPZL"
        },
        {
            "price": "\nRs 49,417\n - ",
            "desc": ["Top Freezer", "470 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_T522GNSL/LG_GL_T522GNSL_S_1.jpg",
            "product_name": "LG GL-T522GNSL"
        },
        {
            "price": "\nRs 65,499\n - ",
            "desc": ["Top Freezer", "606 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GR_M772HLHM/LG_GR_M772HLHM_S_1.jpg",
            "product_name": "LG GR-M772HLHM"
        },
        {
            "price": "\nRs 73,490\n",
            "desc": ["Side By Side", "581 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_B207GLQS/LG_GC_B207GLQS_S_1.jpg",
            "product_name": "LG GC-B207GLQS"
        },
        {
            "price": "\nRs 15,500\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_205_ICEMAGIC_POWERCOOL_ROY_5S_EXOTICA/Whirlpool_205_ICEMAGIC_POWERCOOL_ROY_5S_EXOTICA_S_1.jpg",
            "product_name": "Whirlpool 205 ICEMAGIC POWERCOOL ROY 5S EXOTICA"
        },
        {
            "price": "\nRs 20,350\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D221ASAI/LG_GL_D221ASAI_S_1.jpg",
            "product_name": "LG GL-D221ASAI"
        },
        {
            "price": "\nRs 23,799\n",
            "desc": ["Top Freezer", "270 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Haier_HRF_2903BS_H/Haier_HRF_2903BS_H_S_1.jpg",
            "product_name": "Haier HRF-2903BS-H"
        },
        {
            "price": "\nRs 23,980\n",
            "desc": ["Top Freezer", "231 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Godrej_RT_EON_231_PS_3_3/Godrej_RT_EON_231_PS_3_3_S_1.jpg",
            "product_name": "Godrej RT EON 231 PS 3.3"
        },
        {
            "price": "\nRs 28,403\n - ",
            "desc": ["Top Freezer", "260 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_FP_283D_Royal_Protton/Whirlpool_FP_283D_Royal_Protton_S_1.jpg",
            "product_name": "Whirlpool FP 283D Royal Protton"
        },
        {
            "price": "\nRs 33,599\n - ",
            "desc": ["Top Freezer", "302 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT33JSRFESL/Samsung_RT33JSRFESL_S_1.jpg",
            "product_name": "Samsung RT33JSRFESL"
        },
        {
            "price": "\nRs 34,290\n",
            "desc": ["Top Freezer", "284 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U302JSOL/LG_GL_U302JSOL_S_1.jpg",
            "product_name": "LG GL-U302JSOL"
        },
        {
            "price": "\nRs 38,450\n",
            "desc": ["Top Freezer", "322 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT36JSRZESP/Samsung_RT36JSRZESP_S_1.jpg",
            "product_name": "Samsung RT36JSRZESP"
        },
        {
            "price": "\nRs 39,290\n - ",
            "desc": ["Top Freezer", "335 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D372JPZL/LG_GL_D372JPZL_S_1.jpg",
            "product_name": "LG GL-D372JPZL"
        },
        {
            "price": "\nRs 43,300\n - ",
            "desc": ["Top Freezer", "360 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D402HDWL/LG_GL_D402HDWL_S_1.jpg",
            "product_name": "LG GL-D402HDWL"
        },
        {
            "price": "\nRs 14,300\n",
            "desc": ["Single Door", "188 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Haier_HRD_2156BR_H/Haier_HRD_2156BR_H_S_1.jpg",
            "product_name": "Haier HRD-2156BR-H"
        },
        {
            "price": "\nRs 20,550\n",
            "desc": ["Single Door", "235 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B241AGLT/LG_GL_B241AGLT_S_1.jpg",
            "product_name": "LG GL-B241AGLT"
        },
        {
            "price": "\nRs 21,290\n",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B292SMPM/LG_GL_B292SMPM_S_1.jpg",
            "product_name": "LG GL-B292SMPM"
        },
        {
            "price": "\nRs 22,940\n",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B292SSPM/LG_GL_B292SSPM_S_1.jpg",
            "product_name": "LG GL-B292SSPM"
        },
        {
            "price": "\nRs 34,900\n - ",
            "desc": ["Top Freezer", "308 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_T322RPZM/LG_GL_T322RPZM_S_1.jpg",
            "product_name": "LG GL-T322RPZM"
        },
        {
            "price": "\nRs 39,400\n",
            "desc": ["Top Freezer", "360 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_PRO_375_Elite_4S/Whirlpool_PRO_375_Elite_4S_S_1.jpg",
            "product_name": "Whirlpool PRO 375 Elite 4S"
        },
        {
            "price": "\nRs 42,725\n - ",
            "desc": ["Top Freezer", "360 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D402HNSL/LG_GL_D402HNSL_S_1.jpg",
            "product_name": "LG GL-D402HNSL"
        },
        {
            "price": "\nRs 43,380\n",
            "desc": ["Top Freezer", "420 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M472QPZL/LG_GL_M472QPZL_S_1.jpg",
            "product_name": "LG GL-M472QPZL"
        },
        {
            "price": "\nRs 45,200\n - ",
            "desc": ["Top Freezer", "382 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_VG400PND3/Hitachi_R_VG400PND3_S_1.jpg",
            "product_name": "Hitachi R-VG400PND3"
        },
        {
            "price": "\nRs 48,690\n - ",
            "desc": ["Top Freezer", "420 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M472GDWL/LG_GL_M472GDWL_S_1.jpg",
            "product_name": "LG GL-M472GDWL"
        },
        {
            "price": "\nRs 51,900\n",
            "desc": ["Top Freezer", "451 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_VG470PND3/Hitachi_R_VG470PND3_S_1.jpg",
            "product_name": "Hitachi R-VG470PND3"
        },
        {
            "price": "\nRs 52,750\n",
            "desc": ["Top Freezer", "385 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT42HAUDEGL/Samsung_RT42HAUDEGL_S_1.jpg",
            "product_name": "Samsung RT42HAUDEGL"
        },
        {
            "price": "\nRs 60,999\n - ",
            "desc": ["Top Freezer", "546 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GN_M702HLHM/LG_GN_M702HLHM_S_1.jpg",
            "product_name": "LG GN-M702HLHM"
        },
        {
            "price": "\nRs 64,990\n",
            "desc": ["Top Freezer", "495 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_T542GDWL/LG_GL_T542GDWL_S_1.jpg",
            "product_name": "LG GL-T542GDWL"
        },
        {
            "price": "\nRs 14,650\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19J2724VL/Samsung_RR19J2724VL_S_1.jpg",
            "product_name": "Samsung RR19J2724VL"
        },
        {
            "price": "\nRs 15,150\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19J2784NT/Samsung_RR19J2784NT_S_1.jpg",
            "product_name": "Samsung RR19J2784NT"
        },
        {
            "price": "\nRs 16,200\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1824RX/Samsung_RR19H1824RX_S_1.jpg",
            "product_name": "Samsung RR19H1824RX"
        },
        {
            "price": "\nRs 17,000\n",
            "desc": ["Single Door", "213 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Haier_HRD_2406BS_R/Haier_HRD_2406BS_R_S_1.jpg",
            "product_name": "Haier HRD-2406BS-R"
        },
        {
            "price": "\nRs 17,390\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D221AMLL/LG_GL_D221AMLL_S_1.jpg",
            "product_name": "LG GL-D221AMLL"
        },
        {
            "price": "\nRs 18,899\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D221AMLN/LG_GL_D221AMLN_S_1.jpg",
            "product_name": "LG GL-D221AMLN"
        },
        {
            "price": "\nRs 19,400\n",
            "desc": ["Single Door", "235 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B245BPZN/LG_GL_B245BPZN_S_1.jpg",
            "product_name": "LG GL-B245BPZN"
        },
        {
            "price": "\nRs 19,550\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D221AGLN/LG_GL_D221AGLN_S_1.jpg",
            "product_name": "LG GL-D221AGLN"
        },
        {
            "price": "\nRs 22,100\n",
            "desc": ["Top Freezer", "234 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT27JARMESE/Samsung_RT27JARMESE_S_1.jpg",
            "product_name": "Samsung RT27JARMESE"
        },
        {
            "price": "\nRs 32,990\n",
            "desc": ["Top Freezer", "310 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M322RSPL/LG_GL_M322RSPL_S_1.jpg",
            "product_name": "LG GL-M322RSPL"
        },
        {
            "price": "\nRs 33,990\n",
            "desc": ["Top Freezer", "308 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I322RTNL/LG_GL_I322RTNL_S_1.jpg",
            "product_name": "LG GL-I322RTNL"
        },
        {
            "price": "\nRs 34,700\n",
            "desc": ["Top Freezer", "302 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT33JSMFESZ/Samsung_RT33JSMFESZ_S_1.jpg",
            "product_name": "Samsung RT33JSMFESZ"
        },
        {
            "price": "\nRs 36,490\n",
            "desc": ["Top Freezer", "308 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I322RPOL/LG_GL_I322RPOL_S_1.jpg",
            "product_name": "LG GL-I322RPOL"
        },
        {
            "price": "\nRs 37,850\n",
            "desc": ["Top Freezer", "321 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT37K3993UZ/Samsung_RT37K3993UZ_S_1.jpg",
            "product_name": "Samsung RT37K3993UZ"
        },
        {
            "price": "\nRs 43,300\n - ",
            "desc": ["Top Freezer", "360 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D402JHSL/LG_GL_D402JHSL_S_1.jpg",
            "product_name": "LG GL-D402JHSL"
        },
        {
            "price": "\nRs 49,890\n - ",
            "desc": ["Top Freezer", "420 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I472QPZL/LG_GL_I472QPZL_S_1.jpg",
            "product_name": "LG GL-I472QPZL"
        },
        {
            "price": "\nRs 63,000\n - ",
            "desc": ["Top Freezer", "495 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_T542GNSL/LG_GL_T542GNSL_S_1.jpg",
            "product_name": "LG GL-T542GNSL"
        },
        {
            "price": "\nRs 63,990\n - ",
            "desc": ["Top Freezer", "495 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M542GDWL/LG_GL_M542GDWL_S_1.jpg",
            "product_name": "LG GL-M542GDWL"
        },
        {
            "price": "\nRs 68,490\n - ",
            "desc": ["French Door", "510 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_WB550PND2/Hitachi_R_WB550PND2_S_1.jpg",
            "product_name": "Hitachi R-WB550PND2"
        },
        {
            "price": "\nRs 136,650\n - ",
            "desc": ["French Door", "679 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_M237JGNN/LG_GC_M237JGNN_S_1.jpg",
            "product_name": "LG GC-M237JGNN"
        },
        {
            "price": "\nRs 249,000\n - ",
            "desc": ["French Door", "889 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GR_J31FWCHL/LG_GR_J31FWCHL_S_1.jpg",
            "product_name": "LG GR-J31FWCHL"
        },
        {
            "price": "\nRs 14,900\n - ",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B201AHAN/LG_GL_B201AHAN_S_1.jpg",
            "product_name": "LG GL-B201AHAN"
        },
        {
            "price": "\nRs 15,900\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_205XFDE5/LG_GL_205XFDE5_S_1.jpg",
            "product_name": "LG GL-205XFDE5"
        },
        {
            "price": "\nRs 17,790\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D205XGLZ/LG_GL_D205XGLZ_S_1.jpg",
            "product_name": "LG GL-D205XGLZ"
        },
        {
            "price": "\nRs 20,699\n",
            "desc": ["Single Door", "235 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D241ASLN/LG_GL_D241ASLN_S_1.jpg",
            "product_name": "LG GL-D241ASLN"
        },
        {
            "price": "\nRs 21,490\n",
            "desc": ["Top Freezer", "245 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Whirlpool_Neo_FR258_Classic_Plus_3S/Whirlpool_Neo_FR258_Classic_Plus_3S_S_1.jpg",
            "product_name": "Whirlpool Neo FR258 Classic Plus 3S"
        },
        {
            "price": "\nRs 22,500\n - ",
            "desc": ["Top Freezer", "234 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT27JARMAVL/Samsung_RT27JARMAVL_S_1.jpg",
            "product_name": "Samsung RT27JARMAVL"
        },
        {
            "price": "\nRs 27,720\n - ",
            "desc": ["Top Freezer", "285 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M302RSPL/LG_GL_M302RSPL_S_1.jpg",
            "product_name": "LG GL-M302RSPL"
        },
        {
            "price": "\nRs 28,000\n",
            "desc": ["Top Freezer", "260 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_I292RGFL/LG_GL_I292RGFL_S_1.jpg",
            "product_name": "LG GL-I292RGFL"
        },
        {
            "price": "\nRs 43,315\n - ",
            "desc": ["Top Freezer", "384 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT42K5468SL/Samsung_RT42K5468SL_S_1.jpg",
            "product_name": "Samsung RT42K5468SL"
        },
        {
            "price": "\nRs 50,990\n - ",
            "desc": ["Top Freezer", "407 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M442TKRL/LG_GL_M442TKRL_S_1.jpg",
            "product_name": "LG GL-M442TKRL"
        },
        {
            "price": "\nRs 53,955\n - ",
            "desc": ["Top Freezer", "440 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT47K6238UT/Samsung_RT47K6238UT_S_1.jpg",
            "product_name": "Samsung RT47K6238UT"
        },
        {
            "price": "\nRs 70,190\n",
            "desc": ["Top Freezer", "546 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GN_M702HPHM/LG_GN_M702HPHM_S_1.jpg",
            "product_name": "LG GN-M702HPHM"
        },
        {
            "price": "\nRs 119,790\n",
            "desc": ["Side By Side", "668 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_J247CKAV/LG_GC_J247CKAV_S_1.jpg",
            "product_name": "LG GC-J247CKAV"
        },
        {
            "price": "\nRs 15,800\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D205KSHN/LG_GL_D205KSHN_S_1.jpg",
            "product_name": "LG GL-D205KSHN"
        },
        {
            "price": "\nRs 19,400\n",
            "desc": ["Single Door", "235 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B245BMLN/LG_GL_B245BMLN_S_1.jpg",
            "product_name": "LG GL-B245BMLN"
        },
        {
            "price": "\nRs 21,600\n",
            "desc": ["Single Door", "235 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D245BGLN/LG_GL_D245BGLN_S_1.jpg",
            "product_name": "LG GL-D245BGLN"
        },
        {
            "price": "\nRs 24,100\n - ",
            "desc": ["Top Freezer", "255 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B282SMPM/LG_GL_B282SMPM_S_1.jpg",
            "product_name": "LG GL-B282SMPM"
        },
        {
            "price": "\nRs 26,500\n",
            "desc": ["Top Freezer", "234 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT28K3922RZ/Samsung_RT28K3922RZ_S_1.jpg",
            "product_name": "Samsung RT28K3922RZ"
        },
        {
            "price": "\nRs 27,199\n - ",
            "desc": ["Top Freezer", "255 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_C282RSPL/LG_GL_C282RSPL_S_1.jpg",
            "product_name": "LG GL-C282RSPL"
        },
        {
            "price": "\nRs 27,590\n - ",
            "desc": ["Top Freezer", "255 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_C282RMPL/LG_GL_C282RMPL_S_1.jpg",
            "product_name": "LG GL-C282RMPL"
        },
        {
            "price": "\nRs 28,503\n - ",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D292JMFL/LG_GL_D292JMFL_S_1.jpg",
            "product_name": "LG GL-D292JMFL"
        },
        {
            "price": "\nRs 31,900\n",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D292JNSZ/LG_GL_D292JNSZ_S_1.jpg",
            "product_name": "LG GL-D292JNSZ"
        },
        {
            "price": "\nRs 33,799\n",
            "desc": ["Top Freezer", "310 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_U322JSOL/LG_GL_U322JSOL_S_1.jpg",
            "product_name": "LG GL-U322JSOL"
        },
        {
            "price": "\nRs 48,255\n - ",
            "desc": ["Top Freezer", "415 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_VG440PND3/Hitachi_R_VG440PND3_S_1.jpg",
            "product_name": "Hitachi R-VG440PND3"
        },
        {
            "price": "\nRs 55,590\n - ",
            "desc": ["Top Freezer", "420 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M472GNSL/LG_GL_M472GNSL_S_1.jpg",
            "product_name": "LG GL-M472GNSL"
        },
        {
            "price": "\nRs 60,299\n",
            "desc": ["Top Freezer", "390 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_SG37BPND/Hitachi_R_SG37BPND_S_1.jpg",
            "product_name": "Hitachi R-SG37BPND"
        },
        {
            "price": "\nRs 68,090\n",
            "desc": ["Top Freezer", "489 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_V540PND3KX/Hitachi_R_V540PND3KX_S_1.jpg",
            "product_name": "Hitachi R-V540PND3KX"
        },
        {
            "price": "\nRs 101,990\n - ",
            "desc": ["Side By Side", "567 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_L207GAQV/LG_GC_L207GAQV_S_1.jpg",
            "product_name": "LG GC-L207GAQV"
        },
        {
            "price": "\nRs 14,396\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B201ASLN/LG_GL_B201ASLN_S_1.jpg",
            "product_name": "LG GL-B201ASLN"
        },
        {
            "price": "\nRs 15,600\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B205XSHZ/LG_GL_B205XSHZ_S_1.jpg",
            "product_name": "LG GL-B205XSHZ"
        },
        {
            "price": "\nRs 15,900\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_205XADE5/LG_GL_205XADE5_S_1.jpg",
            "product_name": "LG GL-205XADE5"
        },
        {
            "price": "\nRs 16,300\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D205KVHN/LG_GL_D205KVHN_S_1.jpg",
            "product_name": "LG GL-D205KVHN"
        },
        {
            "price": "\nRs 17,300\n",
            "desc": ["Single Door", "212 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR21J2415SA/Samsung_RR21J2415SA_S_1.jpg",
            "product_name": "Samsung RR21J2415SA"
        },
        {
            "price": "\nRs 17,600\n",
            "desc": ["Single Door", "215 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D225BMLL/LG_GL_D225BMLL_S_1.jpg",
            "product_name": "LG GL-D225BMLL"
        },
        {
            "price": "\nRs 19,800\n",
            "desc": ["Single Door", "215 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D225BMPZ/LG_GL_D225BMPZ_S_1.jpg",
            "product_name": "LG GL-D225BMPZ"
        },
        {
            "price": "\nRs 20,400\n",
            "desc": ["Single Door", "235 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B245BSLN/LG_GL_B245BSLN_S_1.jpg",
            "product_name": "LG GL-B245BSLN"
        },
        {
            "price": "\nRs 21,790\n",
            "desc": ["Single Door", "235 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D241ASAN/LG_GL_D241ASAN_S_1.jpg",
            "product_name": "LG GL-D241ASAN"
        },
        {
            "price": "\nRs 22,200\n - ",
            "desc": ["Single Door", "270 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B285BGSN/LG_GL_B285BGSN_S_1.jpg",
            "product_name": "LG GL-B285BGSN"
        },
        {
            "price": "\nRs 22,778\n - ",
            "desc": ["Top Freezer", "255 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B282SWCM/LG_GL_B282SWCM_S_1.jpg",
            "product_name": "LG GL-B282SWCM"
        },
        {
            "price": "\nRs 23,990\n",
            "desc": ["Top Freezer", "234 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT28K3722UT/Samsung_RT28K3722UT_S_1.jpg",
            "product_name": "Samsung RT28K3722UT"
        },
        {
            "price": "\nRs 32,500\n - ",
            "desc": ["Top Freezer", "285 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M302RMPL/LG_GL_M302RMPL_S_1.jpg",
            "product_name": "LG GL-M302RMPL"
        },
        {
            "price": "\nRs 33,100\n",
            "desc": ["Top Freezer", "302 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT33JSRYESA/Samsung_RT33JSRYESA_S_1.jpg",
            "product_name": "Samsung RT33JSRYESA"
        },
        {
            "price": "\nRs 33,600\n",
            "desc": ["Top Freezer", "310 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D322JSFL/LG_GL_D322JSFL_S_1.jpg",
            "product_name": "LG GL-D322JSFL"
        },
        {
            "price": "\nRs 39,499\n - ",
            "desc": ["Top Freezer", "335 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D372JHSL/LG_GL_D372JHSL_S_1.jpg",
            "product_name": "LG GL-D372JHSL"
        },
        {
            "price": "\nRs 52,599\n - ",
            "desc": ["Top Freezer", "384 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT42K5068GL/Samsung_RT42K5068GL_S_1.jpg",
            "product_name": "Samsung RT42K5068GL"
        },
        {
            "price": "\nRs 130,050\n - ",
            "desc": ["French Door", "842 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GR_J297WSBN/LG_GR_J297WSBN_S_1.jpg",
            "product_name": "LG GR-J297WSBN"
        },
        {
            "price": "\nRs 16,700\n",
            "desc": ["Single Door", "245 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Videocon_VZ255LTC/Videocon_VZ255LTC_S_1.jpg",
            "product_name": "Videocon VZ255LTC"
        },
        {
            "price": "\nRs 17,000\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B221ATNN/LG_GL_B221ATNN_S_1.jpg",
            "product_name": "LG GL-B221ATNN"
        },
        {
            "price": "\nRs 17,800\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19J2835RX/Samsung_RR19J2835RX_S_1.jpg",
            "product_name": "Samsung RR19J2835RX"
        },
        {
            "price": "\nRs 19,190\n",
            "desc": ["Single Door", "215 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D221AHAN/LG_GL_D221AHAN_S_1.jpg",
            "product_name": "LG GL-D221AHAN"
        },
        {
            "price": "\nRs 23,500\n",
            "desc": ["Single Door", "270 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B281BHAN/LG_GL_B281BHAN_S_1.jpg",
            "product_name": "LG GL-B281BHAN"
        },
        {
            "price": "\nRs 24,600\n",
            "desc": ["Top Freezer", "234 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT27JARMAPX/Samsung_RT27JARMAPX_S_1.jpg",
            "product_name": "Samsung RT27JARMAPX"
        },
        {
            "price": "\nRs 26,010\n - ",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D292JGFL/LG_GL_D292JGFL_S_1.jpg",
            "product_name": "LG GL-D292JGFL"
        },
        {
            "price": "\nRs 32,300\n",
            "desc": ["Top Freezer", "285 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D302JPFL/LG_GL_D302JPFL_S_1.jpg",
            "product_name": "LG GL-D302JPFL"
        },
        {
            "price": "\nRs 33,900\n",
            "desc": ["Top Freezer", "310 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D322JPFL/LG_GL_D322JPFL_S_1.jpg",
            "product_name": "LG GL-D322JPFL"
        },
        {
            "price": "\nRs 35,590\n",
            "desc": ["Top Freezer", "310 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M322RMPL/LG_GL_M322RMPL_S_1.jpg",
            "product_name": "LG GL-M322RMPL"
        },
        {
            "price": "\nRs 35,990\n",
            "desc": ["Top Freezer", "285 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D302JSFL/LG_GL_D302JSFL_S_1.jpg",
            "product_name": "LG GL-D302JSFL"
        },
        {
            "price": "\nRs 45,890\n",
            "desc": ["Top Freezer", "382 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Hitachi_R_V400PND3K/Hitachi_R_V400PND3K_S_1.jpg",
            "product_name": "Hitachi R-V400PND3K"
        },
        {
            "price": "\nRs 84,500\n",
            "desc": ["Side By Side", "554 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RS21HSTWA1_SBS/Samsung_RS21HSTWA1_SBS_S_1.jpg",
            "product_name": "Samsung RS21HSTWA1 SBS"
        },
        {
            "price": "\nRs 14,600\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19J2784UT/Samsung_RR19J2784UT_S_1.jpg",
            "product_name": "Samsung RR19J2784UT"
        },
        {
            "price": "\nRs 16,350\n",
            "desc": ["Single Door", "215 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B225BGLL/LG_GL_B225BGLL_S_1.jpg",
            "product_name": "LG GL-B225BGLL"
        },
        {
            "price": "\nRs 21,600\n - ",
            "desc": ["Single Door", "235 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D245BMPZ/LG_GL_D245BMPZ_S_1.jpg",
            "product_name": "LG GL-D245BMPZ"
        },
        {
            "price": "\nRs 24,940\n",
            "desc": ["Single Door", "270 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B285BGPN/LG_GL_B285BGPN_S_1.jpg",
            "product_name": "LG GL-B285BGPN"
        },
        {
            "price": "\nRs 25,500\n",
            "desc": ["Top Freezer", "234 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT27JARZEPX/Samsung_RT27JARZEPX_S_1.jpg",
            "product_name": "Samsung RT27JARZEPX"
        },
        {
            "price": "\nRs 27,500\n - ",
            "desc": ["Top Freezer", "234 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT27JARZERY/Samsung_RT27JARZERY_S_1.jpg",
            "product_name": "Samsung RT27JARZERY"
        },
        {
            "price": "\nRs 32,390\n",
            "desc": ["Top Freezer", "310 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D322JMFL/LG_GL_D322JMFL_S_1.jpg",
            "product_name": "LG GL-D322JMFL"
        },
        {
            "price": "\nRs 36,799\n - ",
            "desc": ["Top Freezer", "322 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT36JSRYESA/Samsung_RT36JSRYESA_S_1.jpg",
            "product_name": "Samsung RT36JSRYESA"
        },
        {
            "price": "\nRs 44,200\n - ",
            "desc": ["Top Freezer", "335 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_P372JDWL/LG_GL_P372JDWL_S_1.jpg",
            "product_name": "LG GL-P372JDWL"
        },
        {
            "price": "\nRs 61,500\n",
            "desc": ["Top Freezer", "470 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_M522GNSL/LG_GL_M522GNSL_S_1.jpg",
            "product_name": "LG GL-M522GNSL"
        },
        {
            "price": "\nRs 103,990\n",
            "desc": ["Side By Side", "668 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GC_L247SLUV/LG_GC_L247SLUV_S_1.jpg",
            "product_name": "LG GC-L247SLUV"
        },
        {
            "price": "\nRs 129,000\n - ",
            "desc": ["Side By Side", "805 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RH80J81323M/Samsung_RH80J81323M_S_1.jpg",
            "product_name": "Samsung Samsung RH80J81323M"
        },
        {
            "price": "\nRs 13,600\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1414RH/Samsung_RR19H1414RH_S_1.jpg",
            "product_name": "Samsung RR19H1414RH"
        },
        {
            "price": "\nRs 15,900\n",
            "desc": ["Single Door", "190 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D201AGLN/LG_GL_D201AGLN_S_1.jpg",
            "product_name": "LG GL-D201AGLN"
        },
        {
            "price": "\nRs 17,100\n",
            "desc": ["Single Door", "192 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RR19H1835PX/Samsung_RR19H1835PX_S_1.jpg",
            "product_name": "Samsung RR19H1835PX"
        },
        {
            "price": "\nRs 17,990\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D205XSLZ/LG_GL_D205XSLZ_S_1.jpg",
            "product_name": "LG GL-D205XSLZ"
        },
        {
            "price": "\nRs 34,850\n",
            "desc": ["Top Freezer", "300 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/SAMSUNG_RT34K3983RZ/SAMSUNG_RT34K3983RZ_S_1.jpg",
            "product_name": "Samsung RT34K3983RZ"
        },
        {
            "price": "\nRs 45,750\n - ",
            "desc": ["Top Freezer", "363 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT39HDAGESL/Samsung_RT39HDAGESL_S_1.jpg",
            "product_name": "Samsung RT39HDAGESL"
        },
        {
            "price": "\nRs 16,900\n",
            "desc": ["Single Door", "190 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D205XMLZ/LG_GL_D205XMLZ_S_1.jpg",
            "product_name": "LG GL-D205XMLZ"
        },
        {
            "price": "\nRs 23,000\n",
            "desc": ["Single Door", "270 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B285BSPN/LG_GL_B285BSPN_S_1.jpg",
            "product_name": "LG GL-B285BSPN"
        },
        {
            "price": "\nRs 31,150\n",
            "desc": ["Top Freezer", "255 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT29JAMSESZ/Samsung_RT29JAMSESZ_S_1.jpg",
            "product_name": "Samsung RT29JAMSESZ"
        },
        {
            "price": "\nRs 52,200\n",
            "desc": ["Top Freezer", "363 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT39HDJTESP/Samsung_RT39HDJTESP_S_1.jpg",
            "product_name": "Samsung RT39HDJTESP"
        },
        {
            "price": "\nRs 17,100\n",
            "desc": ["Single Door", "215 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B225BMLL/LG_GL_B225BMLL_S_1.jpg",
            "product_name": "LG GL-B225BMLL"
        },
        {
            "price": "\nRs 22,000\n",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B292SGSM/LG_GL_B292SGSM_S_1.jpg",
            "product_name": "LG GL-B292SGSM"
        },
        {
            "price": "\nRs 24,680\n",
            "desc": ["Top Freezer", "258 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B292SWCM/LG_GL_B292SWCM_S_1.jpg",
            "product_name": "LG GL-B292SWCM"
        },
        {
            "price": "\nRs 31,950\n",
            "desc": ["Top Freezer", "285 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D302JMFL/LG_GL_D302JMFL_S_1.jpg",
            "product_name": "LG GL-D302JMFL"
        },
        {
            "price": "\nRs 53,250\n",
            "desc": ["Top Freezer", "385 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT42HAUDE1J/Samsung_RT42HAUDE1J_S_1.jpg",
            "product_name": "Samsung RT42HAUDE1J"
        },
        {
            "price": "\nRs 32,890\n",
            "desc": ["Top Freezer", "285 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_D302JGFL/LG_GL_D302JGFL_S_1.jpg",
            "product_name": "LG GL-D302JGFL"
        },
        {
            "price": "\nRs 42,700\n",
            "desc": ["Top Freezer", "322 L", "\n", "\n"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/Samsung_RT36JSMFEBZ/Samsung_RT36JSMFEBZ_S_1.jpg",
            "product_name": "Samsung RT36JSMFEBZ"
        },
        {
            "price": "\nRs 17,200\n",
            "desc": ["Single Door", "215 L"],
            "image": "http://image.priceprice.k-img.com/global/images/product/refrigerators-freezers/LG_GL_B225BPZL/LG_GL_B225BPZL_S_1.jpg",
            "product_name": "LG GL-B225BPZL"
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
        var description = data_body[i].desc[0] + data_body[i].desc[1];

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
            fridge.create({
                price: b[i].price,
                product_name: b[i].product_name,
                description: b[i].description,
                image: b[i].image,
                brand_name: b[i].brand_name
            }).then(function (fridge) {
                if (fridge) {
                    console.log("Data Stored")
                } else {
                    console.log("Error");
                }
            })
        }

    }
    response.send("fridge Submission Done")

});

/*****  Route for fetching all fridge info at once ******/

router.get('/all_fridge', (request, response) => {
    fridge.findAll()
        .then((mobil) => {
            console.log("ok");
            response.send(mobil);

        });
});
/*****  Route for fetching all fridge of one brand ******/

router.post('/get_fridge_from_brand', (request, response) => {
    fridge.findAll({
            where: {
                brand_name: request.body.brand_name
            }
        })
        .then((fridge_data) => {
            console.log("ok");
            response.send(fridge_data);

        });
});
/*** Route for fetching single fridge by id */
router.post('/get_single_fridge', (request, response) => {
    fridge.findAll({
        where: {
            id: request.body.id
        }
    }).then((fridge) => {
        console.log(fridge);
        response.send(fridge);
    }).catch((error) => {
        alert(error)
    })
})
/***  Route for getting all brands available ***/
router.get('/get_fridge_brands', (request, response) => {
    fridge.findAll()
        .then(function (fridge) {
            var brands = []
            for (var i = 0; i < fridge.length; i++) {
                var already_present = false;
                if (i == 0) {
                    brands[i] = fridge[i].brand_name
                }
                for (var j = 0; j < i; j++) {
                    if (brands[j] == fridge[i].brand_name) {
                        already_present = true;
                    } else {
                        if (j == i - 1 && already_present == false) {
                            brands[brands.length] = fridge[i].brand_name
                        } else {

                        }
                    }
                }
            }
            response.send(brands);
        });
});
//route for getting number of devices in efridgeh brand
router.get('/get_count', (request, response) => {
    var brands = [
    "LG",
    "Haier",
    "Samsung",
    "Videocon",
    "Whirlpool",
    "Godrej",
    "Hitachi",
    "Panasonic",
    "Kelvinator"
]
    var a = []
    var k = 0
    var check = false;
    for (var i = 0; i < brands.length; i++) {
        fridge.findAll({
                where: {
                    brand_name: brands[i]
                }
            }).then((fridge) => {
                a[k] = fridge.length + "," + fridge[0].brand_name

                k = k + 1;
            })
            .then(() => {
                console.log("length of a " + a.length)
                if (a.length == 9 && check == false) {
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