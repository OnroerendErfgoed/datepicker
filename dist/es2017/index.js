export { AureliaPikadayDatepicker } from './aurelia-pikaday-datepicker';
import { PLATFORM } from 'aurelia-framework';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./aurelia-pikaday-datepicker'),
        PLATFORM.moduleName('./value-converters/date')
    ]);
}
