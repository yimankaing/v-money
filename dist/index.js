"use strict";
exports.__esModule = true;
var directive_1 = require("./directive");
exports.VMoney = directive_1["default"];
var options_1 = require("./options");
exports.options = options_1["default"];
// https://github.com/luizhenriquerdias/v-money
// https://github.com/vuejs-tips/v-money/tree/master/src
function install(Vue, globalOptions) {
    if (globalOptions) {
        Object.keys(globalOptions).map(function (key) {
            options_1["default"][key] = globalOptions[key];
        });
    }
    Vue.directive('money', directive_1["default"]);
}
exports["default"] = install;