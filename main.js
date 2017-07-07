var express = require('express')
var bodyparser = require('body-parser')
var app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

app.get('/', (request, response) => {
    var ac = [
{"price": "\nRs 34,791\n - ", "desc": ["Split", "5187 W (Cooling)", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_JS_Q18NPXA/LG_JS_Q18NPXA_S_1.jpg", "product_name": "LG JS-Q18NPXA"},
{"price": "\nRs 21,380\n - ", "desc": ["Split", "16660  kj/h", "1666 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Voltas_182CY/Voltas_182CY_S_1.jpg", "product_name": "Voltas 182CY"},
{"price": "\nRs 39,699\n - ", "desc": ["Split", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_JS_Q18AFXD/LG_JS_Q18AFXD_S_1.jpg", "product_name": "LG JS-Q18AFXD"},
{"price": "\n-\n", "desc": ["Window", "24000  kj/h", "2400 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LWA2CP1F/LG_LWA2CP1F_S_1.jpg", "product_name": "LG LWA2CP1F"},
{"price": "\nRs 46,607\n - ", "desc": ["Split", "1540 W(Power Input)", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_BSA18MAYD/LG_BSA18MAYD_S_1.jpg", "product_name": "LG BSA18MAYD"},
{"price": "\nRs 44,153\n - ", "desc": ["Split", "1540 W(Power Input)", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_BSA18BEYD/LG_BSA18BEYD_S_1.jpg", "product_name": "LG BSA18BEYD"},
{"price": "\nRs 24,990\n - ", "desc": ["Split", "16510  kj/h", "1651 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Whirlpool_3D_Cool_Deluxe_III/Whirlpool_3D_Cool_Deluxe_III_S_1.jpg", "product_name": "Whirlpool 3D Cool Deluxe III"},
{"price": "\nRs 23,876\n - ", "desc": ["Split", "10700  kj/h", "1070 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA3NP3A/LG_LSA3NP3A_S_1.jpg", "product_name": "LG LSA3NP3A"},
{"price": "\nRs 31,698\n", "desc": ["Split", "5353.4 kj/h", "1489.7 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LS19A5LK/Lloyd_LS19A5LK_S_1.jpg", "product_name": "Lloyd LS19A5LK"},
{"price": "\nRs 21,190\n - ", "desc": ["Split", "3351 kj/h", "1068 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LS13A3LX/Lloyd_LS13A3LX_S_1.jpg", "product_name": "Lloyd LS13A3LX"},
{"price": "\n-\n", "desc": ["Split", "11450  kj/h", "930 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Daikin_FTF35QRV16_Split_AC_1_Ton_5_Star_Rating_White/Daikin_FTF35QRV16_Split_AC_1_Ton_5_Star_Rating_White_S_1.jpg", "product_name": "Daikin FTF35QRV16 Split AC (1 Ton  5 Star Rating  White)"},
{"price": "\nRs 28,559\n - ", "desc": ["Window", "18000  kj/h", "1575 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_RAW518KUD_Kaze_Plus/Hitachi_RAW518KUD_Kaze_Plus_S_1.jpg", "product_name": "Hitachi RAW518KUD Kaze Plus"},
{"price": "\nRs 27,700\n", "desc": ["Split", "11320  kj/h", "1132 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR12JC2JAMV/Samsung_AR12JC2JAMV_S_1.jpg", "product_name": "Samsung AR12JC2JAMV"},
{"price": "\nRs 29,500\n - ", "desc": ["Split", "19700  kj/h", "1970 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Daikin_FTC60PRV16_Split_AC_1_8_Ton_3_Star_Rating_White/Daikin_FTC60PRV16_Split_AC_1_8_Ton_3_Star_Rating_White_S_1.jpg", "product_name": "Daikin FTC60PRV16 Split AC (1.8 Ton  3 Star Rating  White)"},
{"price": "\nRs 34,900\n - ", "desc": ["Split", "15950  kj/h", "1595 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Blue_Star_3HW18VC1/Blue_Star_3HW18VC1_S_1.jpg", "product_name": "Blue Star 3HW18VC1"},
{"price": "\nRs 41,382\n", "desc": ["Split", "1460  kj/h", "1460 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_BSA18IMA/LG_BSA18IMA_S_1.jpg", "product_name": "LG BSA18IMA"},
{"price": "\nRs 23,480\n - ", "desc": ["Stand", "3250 kj/h", "1350 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LP12TN/Lloyd_LP12TN_S_1.jpg", "product_name": "Lloyd LP12TN"},
{"price": "\nRs 23,742\n - ", "desc": ["Window", "11942  kj/h", "1030 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_RAW511KUD_Kaze_Plus/Hitachi_RAW511KUD_Kaze_Plus_S_1.jpg", "product_name": "Hitachi RAW511KUD Kaze Plus"},
{"price": "\nRs 27,500\n", "desc": ["Split", "16000  kj/h", "1576 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Godrej_GSC_18_TSZ_3_RWPT/Godrej_GSC_18_TSZ_3_RWPT_S_1.jpg", "product_name": "Godrej GSC 18 TSZ 3 RWPT"},
{"price": "\nRs 38,280\n - ", "desc": ["Split", "1060 W(power input)", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_BSA12MAYD/LG_BSA12MAYD_S_1.jpg", "product_name": "LG BSA12MAYD"},
{"price": "\nRs 23,457\n", "desc": ["Split", "9500  kj/h", "940 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Godrej_GSC_12_TSZ_3_RWPT/Godrej_GSC_12_TSZ_3_RWPT_S_1.jpg", "product_name": "Godrej GSC 12 TSZ 3 RWPT"},
{"price": "\nRs 37,300\n - ", "desc": ["Split", "910 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR12JV5HATQNNA/Samsung_AR12JV5HATQNNA_S_1.jpg", "product_name": "Samsung AR12JV5HATQNNA"},
{"price": "\nRs 42,990\n", "desc": ["Split", "19100  kj/h", "1910 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Blue_Star_3HW24VC1/Blue_Star_3HW24VC1_S_1.jpg", "product_name": "Blue Star 3HW24VC1"},
{"price": "\nRs 27,400\n - ", "desc": ["Split", "16000  kj/h", "1480 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Carrier_Superia_365_MS11D12_11HRDN1_QC2/Carrier_Superia_365_MS11D12_11HRDN1_QC2_S_1.jpg", "product_name": "Carrier Superia 365 MS11D12-11HRDN1-QC2"},
{"price": "\nRs 27,200\n - ", "desc": ["Split", "1460 W(Power Input)", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA5PW3A/LG_LSA5PW3A_S_1.jpg", "product_name": "LG LSA5PW3A"},
{"price": "\nRs 51,100\n", "desc": ["Split", "13500  kj/h", "1380 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Carrier_Superia_Plus_K_MS11D12_12CRDN2_QC2/Carrier_Superia_Plus_K_MS11D12_12CRDN2_QC2_S_1.jpg", "product_name": "Carrier Superia Plus K+ MS11D12-12CRDN2-QC2"},
{"price": "\nRs 32,500\n - ", "desc": ["Split", "10900  kj/h", "1090 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR12JC3ESLW/Samsung_AR12JC3ESLW_S_1.jpg", "product_name": "Samsung AR12JC3ESLW"},
{"price": "\nRs 35,870\n - ", "desc": ["Split", "1060 W(Power Input)", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_BSA12BEYD/LG_BSA12BEYD_S_1.jpg", "product_name": "LG BSA12BEYD"},
{"price": "\nRs 34,847\n - ", "desc": ["Split", "18800  kj/h", "1485 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_RAU518AVD/Hitachi_RAU518AVD_S_1.jpg", "product_name": "Hitachi RAU518AVD"},
{"price": "\nRs 22,500\n - ", "desc": ["Window", "11600  kj/h", "1160 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LWA3BP3F/LG_LWA3BP3F_S_1.jpg", "product_name": "LG LWA3BP3F"},
{"price": "\nRs 24,490\n - ", "desc": ["Split", "3569 kj/h", "984 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LS13A5LX/Lloyd_LS13A5LX_S_1.jpg", "product_name": "Lloyd LS13A5LX"},
{"price": "\nRs 44,599\n", "desc": ["Split", "21150  kj/h", "1520 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR18JV5HBTQ/Samsung_AR18JV5HBTQ_S_1.jpg", "product_name": "Samsung AR18JV5HBTQ"},
{"price": "\n-\n", "desc": ["Split", "14600  kj/h", "1460 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_BS_Q186C8A4/LG_BS_Q186C8A4_S_1.jpg", "product_name": "LG BS-Q186C8A4"},
{"price": "\nRs 23,999\n - ", "desc": ["Split", "10920  kj/h", "1088 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Whirlpool_3D_Cool_Platinum_V/Whirlpool_3D_Cool_Platinum_V_S_1.jpg", "product_name": "Whirlpool 3D Cool Platinum V"},
{"price": "\nRs 29,700\n - ", "desc": ["Split", "10110  kj/h", "1011 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Voltas_125EY/Voltas_125EY_S_1.jpg", "product_name": "Voltas 125EY"},
{"price": "\nRs 30,300\n - ", "desc": ["Split", "15500  kj/h", "1500 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Blue_Star_3HW18FA1/Blue_Star_3HW18FA1_S_1.jpg", "product_name": "Blue Star 3HW18FA1"},
{"price": "\nRs 24,012\n - ", "desc": ["Split", "9600  kj/h", "960 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_Kampa_RAU512HUDD/Hitachi_Kampa_RAU512HUDD_S_1.jpg", "product_name": "Hitachi Kampa RAU512HUDD"},
{"price": "\nRs 24,590\n", "desc": ["Window", "9960  kj/h", "996 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Voltas_125DY/Voltas_125DY_S_1.jpg", "product_name": "Voltas 125DY"},
{"price": "\nRs 33,989\n", "desc": ["Split", "17000  kj/h", "1530 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Carrier_Duraedge_Plus_K_42KGE_018M/Carrier_Duraedge_Plus_K_42KGE_018M_S_1.jpg", "product_name": "Carrier Duraedge Plus K + 42KGE-018M"},
{"price": "\n-\n", "desc": ["Split", "13100  kj/h", "1310 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR18JV5DAWK/Samsung_AR18JV5DAWK_S_1.jpg", "product_name": "Samsung AR18JV5DAWK"},
{"price": "\n-\n", "desc": ["Split", "16000  kj/h", "1610 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Electrolux_S18P3W/Electrolux_S18P3W_S_1.jpg", "product_name": "Electrolux S18P3W"},
{"price": "\nRs 15,690\n", "desc": ["Window", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Godrej_GWC_10_TGZ_2_RWPT/Godrej_GWC_10_TGZ_2_RWPT_S_1.jpg", "product_name": "Godrej GWC 10 TGZ 2 RWPT"},
{"price": "\nRs 29,695\n - ", "desc": ["Split", "11300  kj/h", "983 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Carrier_Duraedge_Plus_K_42KGE_012M/Carrier_Duraedge_Plus_K_42KGE_012M_S_1.jpg", "product_name": "Carrier Duraedge Plus K + 42KGE-012M"},
{"price": "\nRs 46,990\n", "desc": ["Split", "22200  kj/h", "2170 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Panasonic_CS_YC24QKY_2/Panasonic_CS_YC24QKY_2_S_1.jpg", "product_name": "Panasonic CS-YC24QKY-2"},
{"price": "\n-\n", "desc": ["Split", "12000  kj/h", "1092 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_Curvella_LS13A3P/Lloyd_Curvella_LS13A3P_S_1.jpg", "product_name": "Lloyd Curvella LS13A3P"},
{"price": "\nRs 26,977\n - ", "desc": ["Split", "5042 kj/h", "1609 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LS19A3LX/Lloyd_LS19A3LX_S_1.jpg", "product_name": "Lloyd LS19A3LX"},
{"price": "\nRs 36,559\n", "desc": ["Split", "21200  kj/h", "1860 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Carrier_Novello_Plus_42KGN_024P/Carrier_Novello_Plus_42KGN_024P_S_1.jpg", "product_name": "Carrier Novello Plus 42KGN-024P"},
{"price": "\n-\n", "desc": ["Split", "15000  kj/h", "1455 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Haier_HSU_19CXBW5N_NHNA/Haier_HSU_19CXBW5N_NHNA_S_1.jpg", "product_name": "Haier HSU-19CXBW5N-NHNA"},
{"price": "\n-\n", "desc": ["Split", "15000  kj/h", "1451 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Videocon_VSA55_WW1_MAA/Videocon_VSA55_WW1_MAA_S_1.jpg", "product_name": "Videocon VSA55.WW1-MAA"},
{"price": "\nRs 29,999\n - ", "desc": ["Split", "14240  kj/h", "1424 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Voltas_185CY/Voltas_185CY_S_1.jpg", "product_name": "Voltas 185CY"},
{"price": "\nRs 33,311\n - ", "desc": ["Split", "3420 kj/h", "1070 W(Power Input)", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA3WT3D/LG_LSA3WT3D_S_1.jpg", "product_name": "LG LSA3WT3D"},
{"price": "\nRs 56,592\n - ", "desc": ["Split", "20500  kj/h", "1820 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Panasonic_CS_S24RKY/Panasonic_CS_S24RKY_S_1.jpg", "product_name": "Panasonic CS-S24RKY"},
{"price": "\n-\n", "desc": ["Split", "20100  kj/h", "1900 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Panasonic_CS_TS24PKYP/Panasonic_CS_TS24PKYP_S_1.jpg", "product_name": "Panasonic CS-TS24PKYP"},
{"price": "\nRs 38,600\n", "desc": ["Split", "1560 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR18KC3HFWKNNA/Samsung_AR18KC3HFWKNNA_S_1.jpg", "product_name": "Samsung AR18KC3HFWKNNA"},
{"price": "\nRs 51,600\n - ", "desc": ["Split", "14100  kj/h", "1410 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR18JV5NBWK/Samsung_AR18JV5NBWK_S_1.jpg", "product_name": "Samsung AR18JV5NBWK"},
{"price": "\n-\n", "desc": ["Split", "15000  kj/h", "1482 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Electrolux_S18E5W/Electrolux_S18E5W_S_1.jpg", "product_name": "Electrolux S18E5W"},
{"price": "\nRs 30,500\n", "desc": ["Split", "9760  kj/h", "976 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA3NP5F/LG_LSA3NP5F_S_1.jpg", "product_name": "LG LSA3NP5F"},
{"price": "\n-\n", "desc": ["Split", "14950  kj/h", "1495 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR18JC5JAMV/Samsung_AR18JC5JAMV_S_1.jpg", "product_name": "Samsung AR18JC5JAMV"},
{"price": "\n-\n", "desc": ["Split", "10000  kj/h", "998 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Videocon_VSA35_RW1_MAA/Videocon_VSA35_RW1_MAA_S_1.jpg", "product_name": "Videocon VSA35.RW1-MAA"},
{"price": "\nRs 21,000\n", "desc": ["Window", "11942  kj/h", "1132 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_RAW311KUD_Kaze_Plus/Hitachi_RAW311KUD_Kaze_Plus_S_1.jpg", "product_name": "Hitachi RAW311KUD Kaze Plus"},
{"price": "\nRs 38,490\n - ", "desc": ["Split", "16150  kj/h", "1615 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA5WT3D1_L_Energia/LG_LSA5WT3D1_L_Energia_S_1.jpg", "product_name": "LG LSA5WT3D1 L-Energia"},
{"price": "\nRs 24,900\n", "desc": ["Split", "10990  kj/h", "1099 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Voltas_122DYE/Voltas_122DYE_S_1.jpg", "product_name": "Voltas 122DYE"},
{"price": "\nRs 27,250\n", "desc": ["Split", "17000  kj/h", "1680 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Videocon_VSZ53_WV1_MDA/Videocon_VSZ53_WV1_MDA_S_1.jpg", "product_name": "Videocon VSZ53.WV1-MDA"},
{"price": "\n-\n", "desc": ["Split", "10000  kj/h", "998 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Videocon_VSA35_WW1_MAA/Videocon_VSA35_WW1_MAA_S_1.jpg", "product_name": "Videocon VSA35.WW1-MAA"},
{"price": "\n-\n", "desc": ["Split", "16000  kj/h", "1625 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Videocon_VSB53_WV1_MDA/Videocon_VSB53_WV1_MDA_S_1.jpg", "product_name": "Videocon VSB53.WV1-MDA"},
{"price": "\nRs 53,230\n - ", "desc": ["Split", "18080  kj/h", "1510 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/O_General_ASGA18FTTA_1_5/O_General_ASGA18FTTA_1_5_S_1.jpg", "product_name": "O General ASGA18FTTA-1.5"},
{"price": "\n-\n", "desc": ["Split", "14440  kj/h", "1444 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Whirlpool_3D_Cool_Xtreme_PLT_V/Whirlpool_3D_Cool_Xtreme_PLT_V_S_1.jpg", "product_name": "Whirlpool 3D Cool Xtreme PLT V"},
{"price": "\nRs 25,500\n", "desc": ["Split", "10000  kj/h", "998 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Videocon_VSN35_WV1_MDA/Videocon_VSN35_WV1_MDA_S_1.jpg", "product_name": "Videocon VSN35.WV1-MDA"},
{"price": "\nRs 27,900\n", "desc": ["Split", "12000  kj/h", "945 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LS13A5LN/Lloyd_LS13A5LN_S_1.jpg", "product_name": "Lloyd LS13A5LN"},
{"price": "\nRs 30,000\n", "desc": ["Split", "10000  kj/h", "912 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Godrej_GSC_12_FG_6_BNG/Godrej_GSC_12_FG_6_BNG_S_1.jpg", "product_name": "Godrej GSC 12 FG 6 BNG"},
{"price": "\nRs 88,790\n", "desc": ["Split", "27300  kj/h", "2660 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/O_General_ASGA30JCC_2_5/O_General_ASGA30JCC_2_5_S_1.jpg", "product_name": "O General ASGA30JCC-2.5"},
{"price": "\nRs 29,500\n", "desc": ["Split", "15000  kj/h", "1480 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Videocon_VSF55_WV1_MAA/Videocon_VSF55_WV1_MAA_S_1.jpg", "product_name": "Videocon VSF55.WV1-MAA"},
{"price": "\nRs 30,800\n", "desc": ["Split", "11100  kj/h", "1110 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA3NP2F/LG_LSA3NP2F_S_1.jpg", "product_name": "LG LSA3NP2F"},
{"price": "\nRs 31,900\n", "desc": ["Split", "16000  kj/h", "1576 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Godrej_GSC_18_TPX_3_RWPT/Godrej_GSC_18_TPX_3_RWPT_S_1.jpg", "product_name": "Godrej GSC 18 TPX 3 RWPT"},
{"price": "\nRs 33,442\n", "desc": ["Split", "10250  kj/h", "1025 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/IFB_IACS12KD5TC/IFB_IACS12KD5TC_S_1.jpg", "product_name": "IFB IACS12KD5TC"},
{"price": "\nRs 34,859\n", "desc": ["Window", "18300  kj/h", "1530 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_Summer_QC_RAV518HTD/Hitachi_Summer_QC_RAV518HTD_S_1.jpg", "product_name": "Hitachi Summer QC-RAV518HTD"},
{"price": "\nRs 36,990\n", "desc": ["Split", "18000  kj/h", "1405 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LS19A5LN_Dimensional/Lloyd_LS19A5LN_Dimensional_S_1.jpg", "product_name": "Lloyd LS19A5LN Dimensional"},
{"price": "\nRs 42,700\n", "desc": ["Split", "15000  kj/h"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR18HC5TFUR/Samsung_AR18HC5TFUR_S_1.jpg", "product_name": "Samsung AR18HC5TFUR"},
{"price": "\nRs 42,900\n", "desc": ["Split", "1480 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR18KC5HDWK/Samsung_AR18KC5HDWK_S_1.jpg", "product_name": "Samsung AR18KC5HDWK"},
{"price": "\nRs 66,200\n", "desc": ["Split", "22170  kj/h", "1850 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/O_General_ASGA24FTTA_2_0/O_General_ASGA24FTTA_2_0_S_1.jpg", "product_name": "O General ASGA24FTTA-2.0"},
{"price": "\n-\n", "desc": ["Split", "17350  kj/h", "1735 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_KAZE_RAU318KSD/Hitachi_KAZE_RAU318KSD_S_1.jpg", "product_name": "Hitachi KAZE-RAU318KSD"},
{"price": "\nRs 27,406\n", "desc": ["Split", "9500  kj/h", "940 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Godrej_GSC_12_TSZ_5_RWPT/Godrej_GSC_12_TSZ_5_RWPT_S_1.jpg", "product_name": "Godrej GSC 12 TSZ 5 RWPT"},
{"price": "\nRs 37,359\n - ", "desc": ["Split", "10800  kj/h", "1080 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Voltas_12V_DY/Voltas_12V_DY_S_1.jpg", "product_name": "Voltas 12V DY"},
{"price": "\nRs 40,850\n", "desc": ["Split", "17400  kj/h", "1530 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Carrier_Octra_42KGE_018Mm/Carrier_Octra_42KGE_018Mm_S_1.jpg", "product_name": "Carrier Octra 42KGE-018Mm"},
{"price": "\nRs 29,999\n - ", "desc": ["Split", "15710  kj/h", "1571 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Voltas_183CYE/Voltas_183CYE_S_1.jpg", "product_name": "Voltas 183CYE"},
{"price": "\nRs 30,221\n", "desc": ["Split", "1450 W(Power Input)", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA5SU3A/LG_LSA5SU3A_S_1.jpg", "product_name": "LG LSA5SU3A"},
{"price": "\nRs 33,590\n", "desc": ["Split", "12100  kj/h", "1125 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Panasonic_CS_YC12RKYT3/Panasonic_CS_YC12RKYT3_S_1.jpg", "product_name": "Panasonic CS-YC12RKYT3"},
{"price": "\nRs 37,490\n", "desc": ["Split", "1980 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LS24A3FX/Lloyd_LS24A3FX_S_1.jpg", "product_name": "Lloyd LS24A3FX"},
{"price": "\nRs 38,990\n", "desc": ["Split", "9760  kj/h", "976 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA3MP5M/LG_LSA3MP5M_S_1.jpg", "product_name": "LG LSA3MP5M"},
{"price": "\nRs 43,200\n", "desc": ["Split", "11520 kj/h(3.2kW)", "910 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR12JV5NBWKNNA/Samsung_AR12JV5NBWKNNA_S_1.jpg", "product_name": "Samsung AR12JV5NBWKNNA"},
{"price": "\nRs 54,290\n", "desc": ["Split", "24400  kj/h", "2460 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/O_General_ASGA24FMTA_2/O_General_ASGA24FMTA_2_S_1.jpg", "product_name": "O General ASGA24FMTA-2"},
{"price": "\n-\n", "desc": ["Split", "10050  kj/h", "1005 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Blue_Star_5HW12ZCG1/Blue_Star_5HW12ZCG1_S_1.jpg", "product_name": "Blue Star 5HW12ZCG1"},
{"price": "\n-\n", "desc": ["Split", "10000  kj/h", "1214 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Godrej_GSC_12_MINV_WOM/Godrej_GSC_12_MINV_WOM_S_1.jpg", "product_name": "Godrej GSC 12 MINV WOM"},
{"price": "\n-\n", "desc": ["Window", "13400  kj/h", "1340 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_312KSDP/Hitachi_312KSDP_S_1.jpg", "product_name": "Hitachi 312KSDP"},
{"price": "\n-\n", "desc": ["Window", "22400  kj/h", "2240 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_PR_322ESD/Hitachi_PR_322ESD_S_1.jpg", "product_name": "Hitachi PR-322ESD"},
{"price": "\n-\n", "desc": ["Split", "11000  kj/h", "1070 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Videocon_VSD33_WV1_MDA/Videocon_VSD33_WV1_MDA_S_1.jpg", "product_name": "Videocon VSD33.WV1-MDA"},
{"price": "\n-\n", "desc": ["Window", "17850  kj/h", "1785 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_KAZE_318KRD/Hitachi_KAZE_318KRD_S_1.jpg", "product_name": "Hitachi KAZE-318KRD"},
{"price": "\n-\n", "desc": ["Split", "15000  kj/h", "1661 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Godrej_GSC_18_MINV_WOM/Godrej_GSC_18_MINV_WOM_S_1.jpg", "product_name": "Godrej GSC 18 MINV WOM"},
{"price": "\nRs 29,610\n", "desc": ["Split", "7400  kj/h", "740 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Blue_Star_5HW09SA/Blue_Star_5HW09SA_S_1.jpg", "product_name": "Blue Star 5HW09SA"},
{"price": "\nRs 51,597\n", "desc": ["Split", "18200  kj/h", "1820 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Blue_Star_5HW24MA1/Blue_Star_5HW24MA1_S_1.jpg", "product_name": "Blue Star 5HW24MA1"},
{"price": "\n-\n", "desc": ["Split", "16150  kj/h", "1615 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA5EG3M/LG_LSA5EG3M_S_1.jpg", "product_name": "LG LSA5EG3M"},
{"price": "\n-\n", "desc": ["Split", "16150  kj/h", "1615 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA5TM3M/LG_LSA5TM3M_S_1.jpg", "product_name": "LG LSA5TM3M"},
{"price": "\nRs 25,895\n - ", "desc": ["Split", "6500 kj/h", "2060 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Panasonic_CS_CU_YC24QKYT3/Panasonic_CS_CU_YC24QKYT3_S_1.jpg", "product_name": "Panasonic CS/CU-YC24QKYT3"},
{"price": "\nRs 29,272\n - ", "desc": ["Split", "12000  kj/h", "1200 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Voltas_12HY/Voltas_12HY_S_1.jpg", "product_name": "Voltas 12HY"},
{"price": "\nRs 32,800\n - ", "desc": ["Window", "18000  kj/h", "1775 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Hitachi_RAW018KTH_Kaze_Reidan/Hitachi_RAW018KTH_Kaze_Reidan_S_1.jpg", "product_name": "Hitachi RAW018KTH Kaze Reidan"},
{"price": "\nRs 37,800\n", "desc": ["Split", "9100  kj/h", "910 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR12HV5NBWK/Samsung_AR12HV5NBWK_S_1.jpg", "product_name": "Samsung AR12HV5NBWK"},
{"price": "\nRs 38,990\n - ", "desc": ["Split", "11942  kj/h", "1095 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/O_General_ASGG12JLCA_1_0/O_General_ASGG12JLCA_1_0_S_1.jpg", "product_name": "O General ASGG12JLCA-1.0"},
{"price": "\nRs 25,490\n - ", "desc": ["Split", "8300  kj/h", "830 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/O_General_ASGA09BMTA_0_75/O_General_ASGA09BMTA_0_75_S_1.jpg", "product_name": "O General ASGA09BMTA-0.75"},
{"price": "\nRs 25,500\n - ", "desc": ["Split", "12000  kj/h", "1030 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Carrier_Flair_MS12F3_12CR_QC2/Carrier_Flair_MS12F3_12CR_QC2_S_1.jpg", "product_name": "Carrier Flair MS12F3-12CR-QC2"},
{"price": "\nRs 30,500\n", "desc": ["Split", "17300  kj/h", "1730 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR18HC3USUQ/Samsung_AR18HC3USUQ_S_1.jpg", "product_name": "Samsung AR18HC3USUQ"},
{"price": "\nRs 33,490\n", "desc": ["Split", "12000  kj/h", "1115 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Carrier_MS11D1_12CR_QC2/Carrier_MS11D1_12CR_QC2_S_1.jpg", "product_name": "Carrier MS11D1-12CR-QC2"},
{"price": "\nRs 33,490\n", "desc": ["Split", "10700  kj/h", "1070 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/LG_LSA3MP3M/LG_LSA3MP3M_S_1.jpg", "product_name": "LG LSA3MP3M"},
{"price": "\n-\n", "desc": ["Split", "20000  kj/h", "2000 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Blue_Star_3HW24FA1/Blue_Star_3HW24FA1_S_1.jpg", "product_name": "Blue Star 3HW24FA1"},
{"price": "\nRs 31,500\n", "desc": ["Split", "10110  kj/h", "1011 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Voltas_125CYA/Voltas_125CYA_S_1.jpg", "product_name": "Voltas 125CYA"},
{"price": "\nRs 31,749\n", "desc": ["Split", "11500  kj/h", "1060 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Panasonic_CS_YC12QKY_3/Panasonic_CS_YC12QKY_3_S_1.jpg", "product_name": "Panasonic CS-YC12QKY-3"},
{"price": "\nRs 28,211\n", "desc": ["Split", "12500  kj/h", "1420 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Sharp_AH_X15RET/Sharp_AH_X15RET_S_1.jpg", "product_name": "Sharp AH-X15RET"},
{"price": "\nRs 27,900\n", "desc": ["Split", "12000  kj/h", "966 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LS13A5X/Lloyd_LS13A5X_S_1.jpg", "product_name": "Lloyd LS13A5X"},
{"price": "\nRs 33,990\n", "desc": ["Split", "6500 kj/h", "2200 W", "\n", "\n"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Lloyd_LS24A2P/Lloyd_LS24A2P_S_1.jpg", "product_name": "Lloyd LS24A2P"},
{"price": "\nRs 43,600\n", "desc": ["Split", "15300  kj/h", "1530 W"], "image": "http://image.priceprice.k-img.com/global/images/product/airconditioners/Samsung_AR18HC5ESLZ/Samsung_AR18HC5ESLZ_S_1.jpg", "product_name": "Samsung AR18HC5ESLZ"}
]

 console.log('\n');
for (var i = 0;i<ac.length;i++){
   var price =  ac[i].price.split('\n')
   if(price[1]!="-"){
    console.log(price[1]);
    console.log(ac[i].desc[0]);
    console.log(ac[i].product_name);
    console.log('\n');
   }
}
response.send("ok");
})

app.use('/register', require('./models/user.js'));
app.use('/laptop', require('./models/laptop.js'));
app.use('/zone_data', require('./models/zones.js'));
app.use('/ac', require('./models/ac.js'));

app.listen(8886, function () {
    console.log('Server Running');
})