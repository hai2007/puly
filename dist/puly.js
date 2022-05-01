/*!
 * puly - 基于Image3D.js开发，底层依赖webgl实现，通过配置和简单的方法调用，可以快速实现三维数据可视化和VR效果等。
 * git+https://github.com/hai2007/puly.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 1.0.0-alpha.0
 *
 * Copyright (c) 2021-2022 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Sun May 01 2022 09:51:11 GMT+0800 (GMT+08:00)
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

  /*!
   * 🌐 - 提供常用的DOM操作方法
   * https://github.com/hai2007/browser.js/blob/master/xhtml.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */

  // 命名空间路径
  var namespace = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
  };

  /**
   * 结点操作补充
   */

  var xhtml = {

      // 阻止冒泡
      "stopPropagation": function (event) {
          event = event || window.event;
          if (event.stopPropagation) { //这是其他非IE浏览器
              event.stopPropagation();
          } else {
              event.cancelBubble = true;
          }
      },

      // 阻止默认事件
      "preventDefault": function (event) {
          event = event || window.event;
          if (event.preventDefault) {
              event.preventDefault();
          } else {
              event.returnValue = false;
          }
      },

      // 判断是否是结点
      "isNode": function (param) {
          return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
      },

      // 绑定事件
      "bind": function (dom, eventType, callback) {

          if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
              for (var i = 0; i < dom.length; i++) {
                  this.bind(dom[i], eventType, callback);
              }
              return;
          }

          if (window.attachEvent)
              dom.attachEvent("on" + eventType, callback);
          else
              dom.addEventListener(eventType, callback, false);
      },
      // 去掉绑定事件
      "unbind": function (dom, eventType, handler) {

          if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
              for (var i = 0; i < dom.length; i++) {
                  this.unbind(dom[i], eventType, handler);
              }
              return;
          }

          if (window.detachEvent)
              dom.detachEvent('on' + eventType, handler);
          else
              dom.removeEventListener(eventType, handler, false);

      },

      // 在当前上下文context上查找结点
      // selectFun可选，返回boolean用以判断当前面对的结点是否保留
      "find": function (context, selectFun, tagName) {
          if (!this.isNode(context)) return [];
          var nodes = context.getElementsByTagName(tagName || '*');
          var result = [];
          for (var i = 0; i < nodes.length; i++) {
              if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                  result.push(nodes[i]);
          }
          return result;
      },

      // 寻找当前结点的孩子结点
      // selectFun可选，返回boolean用以判断当前面对的结点是否保留
      "children": function (dom, selectFun) {
          var nodes = dom.childNodes;
          var result = [];
          for (var i = 0; i < nodes.length; i++) {
              if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                  result.push(nodes[i]);
          }
          return result;
      },

      // 判断结点是否有指定class
      // clazzs可以是字符串或数组字符串
      // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
      "hasClass": function (dom, clazzs, notStrict) {
          if (clazzs.constructor !== Array) clazzs = [clazzs];

          var class_str = " " + (dom.getAttribute('class') || "") + " ";
          for (var i = 0; i < clazzs.length; i++) {
              if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
                  if (notStrict) return true;
              } else {
                  if (!notStrict) return false;
              }
          }
          return true;
      },

      // 删除指定class
      "removeClass": function (dom, clazz) {
          var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
          var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
          dom.setAttribute('class', newClazz.trim());
      },

      // 添加指定class
      "addClass": function (dom, clazz) {
          if (this.hasClass(dom, clazz)) return;
          var oldClazz = dom.getAttribute('class') || "";
          dom.setAttribute('class', oldClazz + " " + clazz);
      },

      // 字符串变成结点
      // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
      "toNode": function (template, isSvg) {
          var frame;

          // html和svg上下文不一样
          if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');
          else {

              var frameTagName = 'div';

              // 大部分的标签可以直接使用div作为容器
              // 部分特殊的需要特殊的容器标签

              if (/^<tr[> ]/.test(template)) {

                  frameTagName = "tbody";

              } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                  frameTagName = "tr";

              } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                  frameTagName = "table";

              }

              frame = document.createElement(frameTagName);
          }

          // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充
          frame.innerHTML = template;

          var childNodes = frame.childNodes;
          for (var i = 0; i < childNodes.length; i++) {
              if (this.isNode(childNodes[i])) return childNodes[i];
          }
      },

      // 主动触发事件
      "trigger": function (dom, eventType) {

          //创建event的对象实例。
          if (document.createEventObject) {
              // IE浏览器支持fireEvent方法
              dom.fireEvent('on' + eventType, document.createEventObject());
          }

          // 其他标准浏览器使用dispatchEvent方法
          else {
              var _event = document.createEvent('HTMLEvents');
              // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
              _event.initEvent(eventType, true, false);
              dom.dispatchEvent(_event);
          }

      },

      // 获取样式
      "getStyle": function (dom, name) {
          // 获取结点的全部样式
          var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
              document.defaultView.getComputedStyle(dom, null) :
              dom.currentStyle;

          // 如果没有指定属性名称，返回全部样式
          return typeof name === 'string' ?
              allStyle.getPropertyValue(name) :
              allStyle;
      },

      // 获取元素位置
      "offsetPosition": function (dom) {
          var left = 0;
          var top = 0;
          top = dom.offsetTop;
          left = dom.offsetLeft;
          dom = dom.offsetParent;
          while (dom) {
              top += dom.offsetTop;
              left += dom.offsetLeft;
              dom = dom.offsetParent;
          }
          return {
              "left": left,
              "top": top
          };
      },

      // 获取鼠标相对元素位置
      "mousePosition": function (dom, event) {
          var bounding = dom.getBoundingClientRect();
          if (!event || !event.clientX)
              throw new Error('Event is necessary!');
          return {
              "x": event.clientX - bounding.left,
              "y": event.clientY - bounding.top
          };
      },

      // 删除结点
      "remove": function (dom) {
          dom.parentNode.removeChild(dom);
      },

      // 设置多个样式
      "setStyles": function (dom, styles) {
          for (var key in styles)
              dom.style[key] = styles[key];
      },

      // 获取元素大小
      "size": function (dom, type) {
          var elemHeight, elemWidth;
          if (type == 'content') { //内容
              elemWidth = dom.clientWidth - ((this.getStyle(dom, 'padding-left') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-right') + "").replace('px', ''));
              elemHeight = dom.clientHeight - ((this.getStyle(dom, 'padding-top') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-bottom') + "").replace('px', ''));
          } else if (type == 'padding') { //内容+内边距
              elemWidth = dom.clientWidth;
              elemHeight = dom.clientHeight;
          } else if (type == 'border') { //内容+内边距+边框
              elemWidth = dom.offsetWidth;
              elemHeight = dom.offsetHeight;
          } else if (type == 'scroll') { //滚动的宽（不包括border）
              elemWidth = dom.scrollWidth;
              elemHeight = dom.scrollHeight;
          } else {
              elemWidth = dom.offsetWidth;
              elemHeight = dom.offsetHeight;
          }
          return {
              width: elemWidth,
              height: elemHeight
          };
      },

      // 在被选元素内部的结尾插入内容
      "append": function (el, template) {
          var node = this.isNode(template) ? template : this.toNode(template);
          el.appendChild(node);
          return node;
      },

      // 在被选元素内部的开头插入内容
      "prepend": function (el, template) {
          var node = this.isNode(template) ? template : this.toNode(template);
          el.insertBefore(node, el.childNodes[0]);
          return node;
      },

      // 在被选元素之后插入内容
      "after": function (el, template) {
          var node = this.isNode(template) ? template : this.toNode(template);
          el.parentNode.insertBefore(node, el.nextSibling);
          return node;
      },

      // 在被选元素之前插入内容
      "before": function (el, template) {
          var node = this.isNode(template) ? template : this.toNode(template);
          el.parentNode.insertBefore(node, el);
          return node;
      }

  };

  var _support_ = true;
  function observeResize (el, doback) {
    var observer = null;
    var _hadWilldo_ = false;
    var _hadNouse_ = false;

    var doit = function doit() {
      // 如果前置任务都完成了
      if (!_hadWilldo_) {
        _hadWilldo_ = true; // 既然前置任务已经没有了，那么就可以更新了？
        // 不是的，可能非常短的时间里，后续有改变
        // 因此延迟一点点来看看后续有没有改变
        // 如果改变了，就再延迟看看

        var interval = window.setInterval(function () {
          // 判断当前是否可以立刻更新
          if (!_hadNouse_) {
            window.clearInterval(interval);
            _hadWilldo_ = false;
            doback();
          }

          _hadNouse_ = false;
        }, 100);
      } else {
        _hadNouse_ = true;
      }
    };

    try {
      observer = new ResizeObserver(doit);
      observer.observe(el);
    } catch (e) {
      // 如果浏览器不支持此接口
      if (_support_) {
        console.error('ResizeObserver undefined!'); // 不支持的话，提示一次就可以了

        _support_ = false;
      } // 使用resize进行退化支持


      doit();
      window.addEventListener('resize', doit, false);
    }

    return function () {
      if (observer) {
        // 解除对画布大小改变的监听
        observer.disconnect();
      }
    };
  }

  var Puly = /*#__PURE__*/function () {
    // 主题
    function Puly(el) {
      var _this = this;

      _classCallCheck(this, Puly);

      _defineProperty(this, "size", void 0);

      _defineProperty(this, "canvas", void 0);

      // 获取绘制区域大小
      this.size = xhtml.size(el); // 追加画布

      this.canvas = xhtml.append(el, "<canvas width='" + this.size.width + "' height='" + this.size.height + "'>非常抱歉，您的浏览器不支持canvas!</canvas>"); // 监听绘制区域大小改变

      observeResize(el, function () {
        _this.size = xhtml.size(el);

        _this.canvas.setAttribute('width', "" + _this.size.width);

        _this.canvas.setAttribute('height', "" + _this.size.height);
      });
    } // 设置主题


    _createClass(Puly, [{
      key: "setOption",
      value: // 设置用户意图
      // 我们根据这个配置进行分析后绘制
      function setOption(option) {
        console.log(Puly.theme);
      }
    }], [{
      key: "registerTheme",
      value: function registerTheme(theme) {
        // 后续设置的时候需要预处理一下（未完成）
        Puly.theme = theme;
      }
    }]);

    return Puly;
  }(); // 对外暴露调用接口


  _defineProperty(Puly, "theme", void 0);

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Puly;
  } else {
    window['Puly'] = Puly;
  }

}());
