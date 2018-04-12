System.register(["moment"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var moment, DateValueConverter;
    return {
        setters: [
            function (moment_1) {
                moment = moment_1;
            }
        ],
        execute: function () {
            DateValueConverter = (function () {
                function DateValueConverter() {
                }
                DateValueConverter.prototype.toView = function (value) {
                    if (value) {
                        return moment(value).format('DD/MM/YYYY');
                    }
                };
                DateValueConverter.prototype.fromView = function (value) {
                    if (value) {
                        var parts = value.split(/\/|-|\./);
                        var day = Math.floor(parts[0]);
                        var month = Math.floor(parts[1] - 1);
                        var year = Math.floor(parts[2]);
                        var date = new Date(year, month, day);
                        if (!isNaN(date.getTime())) {
                            return date;
                        }
                        else {
                            return false;
                        }
                    }
                };
                return DateValueConverter;
            }());
            exports_1("DateValueConverter", DateValueConverter);
        }
    };
});
//# sourceMappingURL=date.js.map