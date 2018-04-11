"use strict";
exports.__esModule = true;
var aurelia_pikaday_datepicker_1 = require("./aurelia-pikaday-datepicker");
exports.AureliaPikadayDatepicker = aurelia_pikaday_datepicker_1.AureliaPikadayDatepicker;
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./aurelia-pikaday-datepicker')
    ]);
}
exports.configure = configure;
