/// <reference types="pikaday" />
import * as Pikaday from 'pikaday';
export declare class AureliaPikadayDatepicker {
    private element;
    value: string;
    placeholder: string;
    config: Pikaday.PikadayOptions;
    private picker;
    private i18n;
    constructor(element: Element);
    attached(): void;
    keydown(e: KeyboardEvent): boolean;
    private setConfig();
}
