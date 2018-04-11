"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pikaday_datepicker_1 = require("../../src/aurelia-pikaday-datepicker");
describe("configure()", function () {
    it("should set fxconfig.foo to 'bar'", function () {
        var fxconfig = {};
        aurelia_pikaday_datepicker_1.configure(fxconfig);
        expect(fxconfig.foo).toBe("bar");
    });
});
