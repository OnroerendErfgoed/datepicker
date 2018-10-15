System.register(["aurelia-framework", "pikaday", "moment"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, Pikaday, moment, AureliaPikadayDatepicker;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Pikaday_1) {
                Pikaday = Pikaday_1;
            },
            function (moment_1) {
                moment = moment_1;
            }
        ],
        execute: function () {
            AureliaPikadayDatepicker = (function () {
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
                    var _this = this;
                    this.config.field = this.element;
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
                    this.config.onOpen = function () {
                        if (_this.disabled) {
                            _this.picker.hide();
                        }
                        else if (_this.value) {
                            _this.picker.setDate(_this.value);
                        }
                    };
                    this.config.onClose = function () {
                        if (!_this.disabled) {
                            _this.value = _this.picker.toString();
                        }
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
                    aurelia_framework_1.inject(Element),
                    __metadata("design:paramtypes", [Element])
                ], AureliaPikadayDatepicker);
                return AureliaPikadayDatepicker;
            }());
            exports_1("AureliaPikadayDatepicker", AureliaPikadayDatepicker);
        }
    };
});
