import * as moment from 'moment';

export class DateValueConverter {
  public toView(value: Date) {
    if (value) {
      return moment(value).format('DD/MM/YYYY');
    }
  }

  public fromView(value: any) {
    if (value) {
      const date = moment(value, 'DD/MM/YYYY').toDate();
      return !isNaN(date.getTime()) ? date : false;
    }
  }
}
