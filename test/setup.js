"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
require("aurelia-loader-webpack");
require("aurelia-polyfills");
var aurelia_pal_browser_1 = require("aurelia-pal-browser");
// tslint:enable
aurelia_pal_browser_1.initialize();
Error.stackTraceLimit = Infinity;
var testContext = require.context("./unit", true, /\.spec/);
testContext.keys().forEach(testContext);
