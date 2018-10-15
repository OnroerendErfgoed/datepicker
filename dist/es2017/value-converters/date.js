import * as moment from 'moment';
export class DateValueConverter {
    toView(value) {
        if (value) {
            return moment(value).format('DD/MM/YYYY');
        }
    }
    fromView(value) {
        if (value) {
            return moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
        }
    }
}
