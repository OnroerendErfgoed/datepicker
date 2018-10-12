var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "pikaday", "moment"], function (require, exports, aurelia_framework_1, Pikaday, moment) {
    "use strict";
    exports.__esModule = true;
    var AureliaPikadayDatepicker = (function () {
        function AureliaPikadayDatepicker(element) {
            this.element = element;
            this.placeholder = '';
            this.config = {};
            this.i18n = {
                previousMonth: 'Vorige Maand',
                nextMonth: 'Volgende Maand',
                months: [
                    'Januari',
                    'Februari',
                    'Maart',
                    'April',
                    'Mei',
                    'Juni',
                    'Juli',
                    'Augustus',
                    'September',
                    'Oktober',
                    'November',
                    'December'
                ],
                weekdays: [
                    'Zondag',
                    'Maandag',
                    'Dinsdag',
                    'Woensdag',
                    'Donderdag',
                    'Vrijdag',
                    'Zaterdag'
                ],
                weekdaysShort: [
                    'Zo',
                    'Ma',
                    'Di',
                    'Wo',
                    'Do',
                    'Vr',
                    'Za'
                ]
            };
            this.setConfig();
            this.picker = new Pikaday(this.config);
            if (this.config.defaultDate) {
                this.picker.setDate(this.config.defaultDate);
            }
        }
        AureliaPikadayDatepicker.prototype.attached = function () {
            this.element.appendChild(this.picker.el);
            this.picker.hide();
        };
        AureliaPikadayDatepicker.prototype.detached = function () {
            this.picker.destroy();
        };
        AureliaPikadayDatepicker.prototype.keydown = function (e) {
            if (this.picker.isVisible()) {
                this.picker.hide();
            }
            return true;
        };
        AureliaPikadayDatepicker.prototype.setConfig = function () {
            var _this = this;
            if (!this.config.i18n) {
                this.config.i18n = this.i18n;
            }
            if (!this.config.firstDay) {
                this.config.firstDay = 1;
            }
            this.config.format = 'YYYY-MM-DD';
            this.config.toString = function (date, format) {
                return moment(date).format(format);
            };
            this.config.parse = function (dateString, format) {
                return moment(dateString, format).toDate();
            };
            this.config.onSelect = function (date) {
                _this.value = _this.picker.toString();
                _this.picker.hide();
            };
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], AureliaPikadayDatepicker.prototype, "value");
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], AureliaPikadayDatepicker.prototype, "placeholder");
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], AureliaPikadayDatepicker.prototype, "config");
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], AureliaPikadayDatepicker.prototype, "disabled");
        AureliaPikadayDatepicker = __decorate([
            aurelia_framework_1.customElement('aurelia-pikaday-datepicker'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], AureliaPikadayDatepicker);
        return AureliaPikadayDatepicker;
    }());
    exports.AureliaPikadayDatepicker = AureliaPikadayDatepicker;
});
