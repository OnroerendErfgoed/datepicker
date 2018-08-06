var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "pikaday"], function (require, exports, aurelia_framework_1, Pikaday) {
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
        }
        AureliaPikadayDatepicker.prototype.attached = function () {
            this.setConfig();
            this.picker = new Pikaday(this.config);
            if (this.config.defaultDate) {
                this.picker.setDate(this.config.defaultDate);
            }
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
            this.config.field = this.element.querySelector('input');
            if (!this.config.i18n) {
                this.config.i18n = this.i18n;
            }
            if (!this.config.firstDay) {
                this.config.firstDay = 1;
            }
            this.config.format = 'DD/MM/YYYY';
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
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], AureliaPikadayDatepicker);
        return AureliaPikadayDatepicker;
    }());
    exports.AureliaPikadayDatepicker = AureliaPikadayDatepicker;
});
