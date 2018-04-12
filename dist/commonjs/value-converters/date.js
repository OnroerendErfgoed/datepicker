"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.DateValueConverter = DateValueConverter;
//# sourceMappingURL=date.js.map