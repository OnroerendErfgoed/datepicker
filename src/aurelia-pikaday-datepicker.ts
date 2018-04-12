import { inject, bindable, bindingMode } from 'aurelia-framework';
import * as Pikaday from 'pikaday';
import * as moment from 'moment';

@inject(Element)
export class AureliaPikadayDatepicker {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value: string;
  @bindable public placeholder: string = '';
  @bindable public config: Pikaday.PikadayOptions = {};

  private picker: Pikaday;
  private i18n: any = {
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

  constructor(
    private element: Element
  ) {}

  public attached() {
    this.setConfig();

    this.picker = new Pikaday(this.config);
    if (this.config.defaultDate) {
      this.picker.setDate(this.config.defaultDate);
    }
  }

  public keydown(e: KeyboardEvent) {
    const key = e.which;

    if (key >= 48 && key <= 57 || key === 191 || key === 8 || key === 189) {
      if (this.picker.isVisible()) {
        this.picker.hide();
      }
      return true;
    } else {
      return false;
    }
  }

  private setConfig() {
    this.config.field = this.element.querySelector('input');

    if (!this.config.i18n) { this.config.i18n = this.i18n; }
    if (!this.config.firstDay) { this.config.firstDay = 1; }

    this.config.format = 'DD/MM/YYYY';
    (this.config.toString as any) = (date: Date, format: string) => {
      return moment(date).format(format);
    };
    this.config.parse = (dateString: string, format: string) => {
      const parts: any[] = dateString.split(/\/|-|\./);
      const day = Math.floor(parts[0]);
      const month = Math.floor(parts[1] - 1);
      const year = Math.floor(parts[2]);
      return new Date(year, month, day);
    };
  }
}
