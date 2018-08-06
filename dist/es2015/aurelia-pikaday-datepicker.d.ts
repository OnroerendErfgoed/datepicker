/// <reference types="pikaday" />
import * as Pikaday from 'pikaday';
export declare class AureliaPikadayDatepicker {
    private element;
    value: string;
    placeholder: string;
    config: Pikaday.PikadayOptions;
    disabled: boolean;
    private picker;
    private i18n;
    constructor(element: Element);
    detached(): void;
    keydown(e: KeyboardEvent): boolean;
    private setConfig();
}
