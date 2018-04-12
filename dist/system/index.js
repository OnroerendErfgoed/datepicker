System.register(["./aurelia-pikaday-datepicker", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./aurelia-pikaday-datepicker'),
            aurelia_framework_1.PLATFORM.moduleName('./value-converters/date')
        ]);
    }
    exports_1("configure", configure);
    var aurelia_framework_1;
    return {
        setters: [
            function (aurelia_pikaday_datepicker_1_1) {
                exports_1({
                    "AureliaPikadayDatepicker": aurelia_pikaday_datepicker_1_1["AureliaPikadayDatepicker"]
                });
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
        }
    };
});
