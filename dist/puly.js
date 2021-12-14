/*!
 * puly - 基于Image3D.js开发，底层依赖webgl实现，通过配置和简单的方法调用，可以快速实现三维数据可视化和VR效果等。
 * git+https://github.com/hai2007/puly.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0-alpha.0
 *
 * Copyright (c) 2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Tue Dec 14 2021 16:37:26 GMT+0800 (中国标准时间)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var Puly = /*#__PURE__*/function () {
    // 几何体
    // 光照
    // 相机
    function Puly() {
      _classCallCheck(this, Puly);

      _defineProperty(this, "geometry", void 0);

      _defineProperty(this, "light", void 0);

      _defineProperty(this, "camera", void 0);
    } // 绘制


    _createClass(Puly, [{
      key: "draw",
      value: function draw() {}
    }]);

    return Puly;
  }(); // 对外暴露调用接口


  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Puly;
  } else {
    window['Puly'] = Puly;
  }

}());
