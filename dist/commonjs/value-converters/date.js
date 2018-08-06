"use strict";
exports.__esModule = true;
var moment = require("moment");
var DateValueConverter = (function () {
    function DateValueConverter() {
    }
    DateValueConverter.prototype.toView = function (value) {
        if (value) {
            return moment(value).format('DD/MM/YYYY');
        }
    };
    DateValueConverter.prototype.fromView = function (value) {
        if (value) {
            return moment(value, 'DD/MM/YYYY').toDate();
        }
    };
    return DateValueConverter;
}());
exports.DateValueConverter = DateValueConverter;
