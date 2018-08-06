import * as moment from 'moment';
export class DateValueConverter {
    toView(value) {
        if (value) {
            return moment(value).format('DD/MM/YYYY');
        }
    }
    fromView(value) {
        if (value) {
            const date = moment(value, 'DD/MM/YYYY').toDate();
            return !isNaN(date.getTime()) ? date : false;
        }
    }
}
