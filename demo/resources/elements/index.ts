export { AureliaPikadayDatepicker } from './aurelia-pikaday-datepicker';

import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./aurelia-pikaday-datepicker'),
    PLATFORM.moduleName('./value-converters/date')
  ]);
}
