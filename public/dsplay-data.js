var dsplay_config = {
    // config parameters
    locale: 'pt_br',
    orientation: window.innerHeight < window.innerWidth ? 'landscape' : 'portrait',
    // Android SDK version
    osVersion: 19,
    // DSPLAY App version code
    appVersion: 99,
};

var dsplay_media = {
    moedas: [{
        flag: "../test-assets/FlagBrazil.png",
        currency: "BRL",
        weSell: "1.1",
        weBuy: "1.2", 
    },{
        flag: "../test-assets/FlagCanada.png",
        currency: "CAD",
        weSell: "11.5",
        weBuy: "12.2", 
    },{
        flag: "../test-assets/FlagJapan.png",
        currency: "JPY",
        weSell: "22.1",
        weBuy: "20.4", 
    },{
        flag: "../test-assets/FlagNewZealand.png",
        currency: "NZD",
        weSell: "30.1",
        weBuy: "32.4", 
    }]

    /*     { currency: 'USD', weBuy: 1.2, weSell: 1.1 },
    { currency: 'EUR', weBuy: 1.5, weSell: 1.4 },*/
};

var dsplay_template = {
    // template parameter
    template_var: "My Template Var",
    logo: '../test-assets/dsplay-logo.png',
    title: "My Super Template",
    expanded: "false",
};