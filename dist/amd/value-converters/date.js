define(["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    exports.__esModule = true;
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
                var date = moment(value, 'DD/MM/YYYY').toDate();
                return !isNaN(date.getTime()) ? date : false;
            }
        };
        return DateValueConverter;
    }());
    exports.DateValueConverter = DateValueConverter;
});
