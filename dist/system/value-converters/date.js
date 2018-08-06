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
                        var date = moment(value, 'DD/MM/YYYY').toDate();
                        return !isNaN(date.getTime()) ? date : false;
                    }
                };
                return DateValueConverter;
            }());
            exports_1("DateValueConverter", DateValueConverter);
        }
    };
});
