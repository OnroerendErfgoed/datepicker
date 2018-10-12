var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode } from 'aurelia-framework';
import * as Pikaday from 'pikaday';
import * as moment from 'moment';
let AureliaPikadayDatepicker = class AureliaPikadayDatepicker {
    constructor(element) {
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
    attached() {
        this.setConfig();
        this.picker = new Pikaday(this.config);
        if (this.config.defaultDate) {
            this.picker.setDate(this.config.defaultDate);
        }
    }
    detached() {
        this.picker.destroy();
    }
    keydown(e) {
        if (this.picker.isVisible()) {
            this.picker.hide();
        }
        return true;
    }
    setConfig() {
        this.config.field = this.input;
        if (!this.config.i18n) {
            this.config.i18n = this.i18n;
        }
        if (!this.config.firstDay) {
            this.config.firstDay = 1;
        }
        this.config.format = 'DD/MM/YYYY';
        this.config.toString = (date, format) => {
            return moment(date).format(format);
        };
        this.config.parse = (dateString, format) => {
            return moment(dateString, format).toDate();
        };
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", String)
], AureliaPikadayDatepicker.prototype, "value", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], AureliaPikadayDatepicker.prototype, "placeholder", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], AureliaPikadayDatepicker.prototype, "config", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], AureliaPikadayDatepicker.prototype, "disabled", void 0);
AureliaPikadayDatepicker = __decorate([
    inject(Element),
    __metadata("design:paramtypes", [Element])
], AureliaPikadayDatepicker);
export { AureliaPikadayDatepicker };
