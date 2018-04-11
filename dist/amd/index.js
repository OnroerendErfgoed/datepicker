define(["require", "exports", "./aurelia-pikaday-datepicker", "aurelia-framework"], function (require, exports, aurelia_pikaday_datepicker_1, aurelia_framework_1) {
    "use strict";
    exports.__esModule = true;
    exports.AureliaPikadayDatepicker = aurelia_pikaday_datepicker_1.AureliaPikadayDatepicker;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./aurelia-pikaday-datepicker')
        ]);
    }
    exports.configure = configure;
});
