"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _yearPicker = _interopRequireDefault(require("./year-picker.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var plugins = {
  install: function install(Vue) {
    Vue.component(_yearPicker["default"].name, _yearPicker["default"]);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(_yearPicker["default"]);
}

var _default = plugins;
exports["default"] = _default;