/*!
 * puly - 一个简单易用的3D图表，像ECharts一样可以快速上手，配置化生成，并支持个性化自定义扩展。
 * git+https://github.com/hai2007/puly.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 1.2.1
 *
 * Copyright (c) 2021-2022 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Sat May 07 2022 19:30:30 GMT+0800 (GMT+08:00)
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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
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

  var REGEXP = {

      // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
      "whitespace": "[\\x20\\t\\r\\n\\f]"

  };

  // 获取样式
  function getStyle (dom, name) {
      // 获取结点的全部样式
      var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
          document.defaultView.getComputedStyle(dom, null) :
          dom.currentStyle;

      // 如果没有指定属性名称，返回全部样式
      return typeof name === 'string' ?
          allStyle.getPropertyValue(name) :
          allStyle;
  }

  /*!
   * 🌐 - 颜色格式化
   * https://github.com/hai2007/browser.js/blob/master/formatColor.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */

  // 把颜色统一转变成rgba(x,x,x,x)格式
  // 返回数字数组[r,g,b,a]
  function formatColor (color) {
      var colorNode = document.getElementsByTagName('head')[0];
      colorNode.style['color'] = color;
      var rgba = getStyle(colorNode, 'color');
      var rgbaArray = rgba.replace(/^rgba?\(([^)]+)\)$/, '$1').split(new RegExp('\\,' + REGEXP.whitespace));
      return [+rgbaArray[0], +rgbaArray[1], +rgbaArray[2], rgbaArray[3] == undefined ? 1 : +rgbaArray[3]];
  }

  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */
  function _isObject (value) {
      var type = typeof value;
      return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;

  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */
  function getType (value) {
      if (value == null) {
          return value === undefined ? '[object Undefined]' : '[object Null]';
      }
      return toString.call(value);
  }

  /**
   * 判断一个值是不是Boolean。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Boolean返回true，否则返回false
   */
  function _isBoolean (value) {
      return value === true || value === false ||
          (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
  }

  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */
  function _isString (value) {
      var type = typeof value;
      return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
  }

  /*!
   * 💡 - 值类型判断方法
   * https://github.com/hai2007/tool.js/blob/master/type.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */

  var isObject = _isObject;
  var isBoolean = _isBoolean;
  var isString = _isString;
  var isArray = function (input) { return Array.isArray(input) };

  function formatColor$1 (color) {
    if (isArray(color)) return color;

    var _color = formatColor(color);

    return [_color[0] / 255, _color[1] / 255, _color[2] / 255, _color[3]];
  }

  var formatTheme = (function (theme) {
    var _theme = {
      colors: []
    };

    if ('colors' in theme) {
      var _iterator = _createForOfIteratorHelper(theme.colors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var color = _step.value;

          _theme.colors.push(formatColor$1(color));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return _theme;
  });

  var $RegExp = {

      // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
      blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
      blanksReg: /^[\x20\t\r\n\f]{0,}$/,

      // 标志符
      identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/,

  };

  // 把表达式按照最小单位切割
  // 后续我们的任务就是对这个数组进行归约即可(归约交付给别的地方，这里不继续处理)

  /**
   * 例如：
   *  target={
   *      a:{
   *              value:9
   *         },
   *      b:7,
   *      flag:'no'
   *  }
   *  express= "a.value>10 && b< 11 ||flag=='yes'"
   * 变成数组以后应该是：
   *
   * // 比如最后的yes@value表示这是一个最终的值，不需要再计算了
   * ['a','[@value','value@value',']@value','>@value','10@value','&&@value','b','<@value','||@value','flag','==@value','yes@value']
   *
   * 然后，进一步解析得到：
   * [{value:9},'[','value',']','>',10,'&&',7,'<','||','no','==','yes']
   *
   * (当然，我们实际运算的时候，可能和这里不完全一致，这里只是为了方便解释我们的主体思想)
   *
   * 然后我们返回上面的结果即可！
   */

  // 除了上述原因，统一前置处理还有一个好处就是：
  // 可以提前对部分语法错误进行报错，方便定位调试
  // 因为后续的操作越来越复杂，错误越提前越容易定位

  var specialCode1 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '[', ']', '(', ")", '>', '<', '='];
  var specialCode2 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '>', '<', '=', '<=', '>=', '==', '===', '!=', '!=='];

  function analyseExpress (target, express, scope) {

      // 剔除开头和结尾的空白
      express = express.trim();

      var i = -1,

          // 当前面对的字符
          currentChar = null;

      // 获取下一个字符
      var next = function () {
          currentChar = i++ < express.length - 1 ? express[i] : null;
          return currentChar;
      };

      // 获取往后n个值
      var nextNValue = function (n) {
          return express.substring(i, n + i > express.length ? express.length : n + i);
      };

      next();

      var expressArray = [];
      while (true) {

          if (i >= express.length) break;

          // 先匹配普通的符号
          // + - * / %
          // && || !
          // ? :
          // [ ] ( )
          // > < >= <= == === != !==
          // 如果是&或者|比较特殊

          if (specialCode1.indexOf(currentChar) > -1) {

              // 对于特殊的符号
              if (['&', '|', '='].indexOf(currentChar) > -1) {
                  if (['==='].indexOf(nextNValue(3)) > -1) {
                      expressArray.push(nextNValue(3));
                      i += 2; next();
                  } else if (['&&', '||', '=='].indexOf(nextNValue(2)) > -1) {
                      expressArray.push(nextNValue(2));
                      i += 1; next();
                  } else {
                      throw new Error("Illegal expression : " + express + "\nstep='analyseExpress',index=" + i);
                  }
              }


              else {

                  // 拦截部分比较特殊的
                  if (['!=='].indexOf(nextNValue(3)) > -1) {
                      expressArray.push(nextNValue(3));
                      i += 2; next();
                  } else if (['>=', '<=', '!='].indexOf(nextNValue(2)) > -1) {
                      expressArray.push(nextNValue(2));
                      i += 1; next();
                  }

                  // 普通的单一的
                  else {
                      expressArray.push(currentChar);
                      next();
                  }

              }
          }

          // 如果是字符串
          else if (['"', "'"].indexOf(currentChar) > -1) {
              var temp = "", beginTag = currentChar;
              next();

              // 如果没有遇到结束标签
              // 目前没有考虑 '\'' 这种带转义字符的情况，当然，'\"'这种是支持的
              // 后续如果希望支持，优化这里即可
              while (currentChar != beginTag) {
                  if (i >= express.length) {

                      // 如果还没有遇到结束标识就结束了，属于字符串未闭合错误
                      throw new Error("String unclosed error : " + express + "\nstep='analyseExpress',index=" + i);

                  }

                  // 继续拼接
                  temp += currentChar;
                  next();
              }
              expressArray.push(temp + "@string");
              next();
          }

          // 如果是数字
          else if (/\d/.test(currentChar)) {
              var dotFlag = 'no'; // no表示还没有匹配到.，如果已经匹配到了，标识为yes，如果匹配到了.，可是后面还没有遇到数组，标识为error
              var temp = currentChar; next();
              while (i < express.length) {
                  if (/\d/.test(currentChar)) {
                      temp += currentChar;
                      if (dotFlag == 'error') dotFlag = 'yes';
                  } else if ('.' == currentChar && dotFlag == 'no') {
                      temp += currentChar;
                      dotFlag = 'error';
                  } else {
                      break;
                  }
                  next();
              }

              // 如果小数点后面没有数字，辅助添加一个0
              if (dotFlag == 'error') temp += "0";
              expressArray.push(+temp);
          }

          // 如果是特殊符号
          // 也就是类似null、undefined等
          else if (['null', 'true'].indexOf(nextNValue(4)) > -1) {
              expressArray.push({
                  "null": null,
                  "true": true
              }[nextNValue(4)]);
              i += 3; next();
          } else if (['false'].indexOf(nextNValue(5)) > -1) {
              expressArray.push({
                  'false': false
              }[nextNValue(5)]);
              i += 4; next();
          } else if (['undefined'].indexOf(nextNValue(9)) > -1) {
              expressArray.push({
                  "undefined": undefined
              }[nextNValue(9)]);
              i += 8; next();
          }

          // 如果是空格
          else if ($RegExp.blankReg.test(currentChar)) {
              do {
                  next();
              } while ($RegExp.blankReg.test(currentChar) && i < express.length);
          }

          else {

              var dot = false;

              // 对于开头有.进行特殊捕获，因为有.意味着这个值应该可以变成['key']的形式
              // 这是为了和[key]进行区分，例如：
              // .key 等价于 ['key'] 翻译成这里就是 ['[','key',']']
              // 可是[key]就不一样了，翻译成这里以后应该是 ['[','这个值取决当前对象和scope',']']
              // 如果这里不进行特殊处理，后续区分需要额外的标记，浪费资源
              if (currentChar == '.') {
                  dot = true;
                  next();
              }

              // 如果是标志符
              /**
               *  命名一个标识符时需要遵守如下的规则：
               *  1.标识符中可以含有字母 、数字 、下划线_ 、$符号
               *  2.标识符不能以数字开头
               */
              // 当然，是不是关键字等我们就不校对了，因为没有太大的实际意义
              // 也就是类似flag等局部变量

              if ($RegExp.identifier.test(currentChar)) {

                  var len = 1;
                  while (i + len <= express.length && $RegExp.identifier.test(nextNValue(len))) len += 1;
                  if (dot) {
                      expressArray.push('[');
                      expressArray.push(nextNValue(len - 1) + '@string');
                      expressArray.push(']');
                  } else {
                      var tempKey = nextNValue(len - 1);
                      // 如果不是有前置.，那就是需要求解了
                      var tempValue = tempKey in scope ? scope[tempKey] : target[tempKey];
                      expressArray.push(isString(tempValue) ? tempValue + "@string" : tempValue);
                  }
                  i += (len - 2); next();
              }

              // 都不是，那就是错误
              else {
                  throw new Error("Illegal express : " + express + "\nstep='analyseExpress',index=" + i);
              }
          }

      }

      // 实际情况是，对于-1等特殊数字，可能存在误把1前面的-号作为运算符的错误，这里拦截校对一下
      var length = 0;
      for (var j = 0; j < expressArray.length; j++) {
          if (["+", "-"].indexOf(expressArray[j]) > -1 &&
              // 如果前面的也是运算符或开头，这个应该就不应该是运算符了
              (j == 0 || specialCode2.indexOf(expressArray[length - 1]) > -1)) {
              expressArray[length++] = +(expressArray[j] + expressArray[j + 1]);
              j += 1;
          } else {
              expressArray[length++] = expressArray[j];
          }
      }
      expressArray.length = length;

      return expressArray;
  }

  var getExpressValue = function (value) {
      // 这里是计算的内部，不需要考虑那么复杂的类型
      if (typeof value == 'string') return value.replace(/@string$/, '');
      return value;
  };

  var setExpressValue = function (value) {
      if (typeof value == 'string') return value + "@string";
      return value;
  };

  function evalValue (expressArray) {

      // 采用按照优先级顺序归约的思想进行

      // 需要明白，这里不会出现括号
      // （小括号或者中括号，当然，也不会有函数，这里只会有最简单的表达式）
      // 这也是我们可以如此归约的前提

      // + - * / %
      // && || !
      // ? :
      // > < >= <= == === != !==

      // !
      // 因为合并以后数组长度一定越来越短，我们直接复用以前的数组即可
      var length = 0, i = 0;
      for (; i < expressArray.length; i++) {
          if (expressArray[i] == '!') {
              // 由于是逻辑运算符，如果是字符串，最后的@string是否去掉已经没有意义了
              expressArray[length] = !expressArray[++i];
          } else expressArray[length] = expressArray[i];
          length += 1;
      }
      if (length == 1) return getExpressValue(expressArray[0]);
      expressArray.length = length;

      // * / %
      length = 0;
      for (i = 0; i < expressArray.length; i++) {
          if (expressArray[i] == '*') {
              // 假设不知道一定正确，主要是为了节约效率，是否提供错误提示，再议
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) * getExpressValue(expressArray[++i]);
          } else if (expressArray[i] == '/') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) / getExpressValue(expressArray[++i]);
          } else if (expressArray[i] == '%') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) % getExpressValue(expressArray[++i]);
          } else {

              // 上面不会导致数组增长
              expressArray[length++] = expressArray[i];
          }

      }
      if (length == 1) return getExpressValue(expressArray[0]);
      expressArray.length = length;

      // + -
      length = 0;
      for (i = 0; i < expressArray.length; i++) {
          if (expressArray[i] == '+') {
              expressArray[length - 1] = setExpressValue(getExpressValue(expressArray[length - 1]) + getExpressValue(expressArray[++i]));
          } else if (expressArray[i] == '-') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) - getExpressValue(expressArray[++i]);
          } else expressArray[length++] = expressArray[i];
      }
      if (length == 1) return getExpressValue(expressArray[0]);
      expressArray.length = length;

      // > < >= <=
      length = 0;
      for (i = 0; i < expressArray.length; i++) {
          if (expressArray[i] == '>') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) > getExpressValue(expressArray[++i]);
          } else if (expressArray[i] == '<') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) < getExpressValue(expressArray[++i]);
          } else if (expressArray[i] == '<=') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) <= getExpressValue(expressArray[++i]);
          } else if (expressArray[i] == '>=') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) >= getExpressValue(expressArray[++i]);
          } else expressArray[length++] = expressArray[i];
      }
      if (length == 1) return getExpressValue(expressArray[0]);
      expressArray.length = length;

      // == === != !==
      length = 0;
      for (i = 0; i < expressArray.length; i++) {
          if (expressArray[i] == '==') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) == getExpressValue(expressArray[++i]);
          } else if (expressArray[i] == '===') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) === getExpressValue(expressArray[++i]);
          } else if (expressArray[i] == '!=') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) != getExpressValue(expressArray[++i]);
          } else if (expressArray[i] == '!==') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) !== getExpressValue(expressArray[++i]);
          } else expressArray[length++] = expressArray[i];
      }
      if (length == 1) return getExpressValue(expressArray[0]);
      expressArray.length = length;

      // && ||
      length = 0;
      for (i = 0; i < expressArray.length; i++) {
          if (expressArray[i] == '&&') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) && getExpressValue(expressArray[1 + i]);
              i += 1;
          } else if (expressArray[i] == '||') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) || getExpressValue(expressArray[1 + i]);
              i += 1;
          } else expressArray[length++] = expressArray[i];
      }
      if (length == 1) return getExpressValue(expressArray[0]);
      expressArray.length = length;

      // ?:
      length = 0;
      for (i = 0; i < expressArray.length; i++) {
          if (expressArray[i] == '?') {
              expressArray[length - 1] = getExpressValue(expressArray[length - 1]) ? getExpressValue(expressArray[i + 1]) : getExpressValue(expressArray[i + 3]);
              i += 3;
          } else expressArray[length++] = expressArray[i];
      }
      if (length == 1) return getExpressValue(expressArray[0]);
      expressArray.length = length;

      throw new Error('Unrecognized expression : [' + expressArray.toString() + "]");

  }

  function calcValue (target, expressArray, scope) {
      var value = expressArray[0] in scope ? scope[expressArray[0]] : target[expressArray[0]];
      for (var i = 1; i < expressArray.length; i++) {
          try {
              value = value[expressArray[i]];
          } catch (e) {
              console.error({
                  target: target,
                  scope: scope,
                  expressArray: expressArray,
                  index: i
              });
              throw e;
          }
      }
      return value;
  }

  // 小括号去除方法

  var doit1 = function (target, expressArray, scope) {

      // 先消小括号
      // 其实也就是归约小括号
      if (expressArray.indexOf('(') > -1) {

          var newExpressArray = [], temp = [],
              // 0表示还没有遇到左边的小括号
              // 1表示遇到了一个，以此类推，遇到一个右边的会减1
              flag = 0;
          for (var i = 0; i < expressArray.length; i++) {
              if (expressArray[i] == '(') {
                  if (flag > 0) {
                      // 说明这个应该是需要计算的括号里面的括号
                      temp.push('(');
                  }
                  flag += 1;
              } else if (expressArray[i] == ')') {
                  if (flag > 1) temp.push(')');
                  flag -= 1;

                  // 为0说明主的小括号归约结束了
                  if (flag == 0) {
                      var _value = evalValue(doit1(target, temp));
                      newExpressArray.push(isString(_value) ? _value + '@string' : _value);
                      temp = [];
                  }
              } else {
                  if (flag > 0) temp.push(expressArray[i]);
                  else newExpressArray.push(expressArray[i]);
              }
          }
          expressArray = newExpressArray;
      }

      // 去掉小括号以后，调用中括号去掉方法
      return doit2(expressArray);

  };

  // 中括号嵌套去掉方法

  var doit2 = function (expressArray) {

      var hadMore = true;
      while (hadMore) {

          hadMore = false;

          var newExpressArray = [], temp = [],

              // 如果为true表示当前在试探寻找归约最小单元的结束
              flag = false;

          // 开始寻找里面需要归约的最小单元（也就是可以立刻获取值的）
          for (var i = 0; i < expressArray.length; i++) {

              // 这说明这是一个需要归约的
              // 不过不一定是最小单元
              // 遇到了，先记下了
              if (expressArray[i] == '[' && i != 0 && expressArray[i - 1] != ']') {
                  if (flag) {
                      // 如果之前已经遇到了，说明之前保存的是错误的，需要同步会主数组
                      newExpressArray.push('[');
                      for (var j = 0; j < temp.length; j++) newExpressArray.push(temp[j]);
                  } else {
                      // 如果之前没有遇到，修改标记即可
                      flag = true;
                  }
                  temp = [];
              }

              // 如果遇到了结束，这说明当前暂存的就是最小归结单元
              // 计算后放回主数组
              else if (expressArray[i] == ']' && flag) {
                  hadMore = true;

                  // 计算
                  var tempValue = evalValue(temp);
                  var _value = newExpressArray[newExpressArray.length - 1][tempValue];
                  newExpressArray[newExpressArray.length - 1] = isString(_value) ? _value + "@string" : _value;

                  // 状态恢复
                  flag = false;
              } else {

                  if (flag) {
                      temp.push(expressArray[i]);
                  } else {
                      newExpressArray.push(expressArray[i]);
                  }

              }
          }

          expressArray = newExpressArray;

      }

      return expressArray;
  };

  // 路径
  // ["[",express,"]","[",express"]","[",express,"]"]
  // 变成
  // [express][express][express]

  var doit3 = function (expressArray) {
      var newExpressArray = [], temp = [];
      for (var i = 0; i < expressArray.length; i++) {
          if (expressArray[i] == '[') {
              temp = [];
          } else if (expressArray[i] == ']') {
              newExpressArray.push(evalValue(temp));
          } else {
              temp.push(expressArray[i]);
          }
      }
      return newExpressArray;
  };

  // 获取路径数组(核心是归约的思想)

  function toPath(target, expressArray, scope) {

      var newExpressArray = doit1(target, expressArray);

      // 其实无法就三类
      // 第一类：[express][express][express]express
      // 第二类：express
      // 第三类：[express][express][express]

      var path;

      // 第二类
      if (newExpressArray[0] != '[') {
          path = [evalValue(newExpressArray)];
      }

      // 第三类
      else if (newExpressArray[newExpressArray.length - 1] == ']') {
          path = doit3(newExpressArray);
      }

      // 第一类
      else {
          var lastIndex = newExpressArray.lastIndexOf(']');
          var tempPath = doit3(newExpressArray.slice(0, lastIndex + 1));
          var tempArray = newExpressArray.slice(lastIndex + 1);
          tempArray.unshift(calcValue(target, tempPath, scope));
          path = [evalValue(tempArray)];
      }

      return path;
  }

  /*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */

  // 获取
  var getValue = function (target, express, scope) {
      if (arguments.length < 3) scope = {};

      var expressArray = analyseExpress(target, express, scope);
      var path = toPath(target, expressArray, scope);
      return calcValue(target, path, scope);
  };

  // 设置
  var setValue = function (target, express, value, scope) {
      if (arguments.length < 4) scope = {};

      var expressArray = analyseExpress(target, express, scope);
      var path = toPath(target, expressArray, scope);

      var _target = target;
      for (var i = 0; i < path.length - 1; i++) {

          // 如果需要补充
          if (!(path[i] in _target)) _target[path[i]] = isArray(_target) ? [] : {};

          // 拼接下一个
          _target = _target[path[i]];
      }

      _target[path[path.length - 1]] = value;
      return target;
  };

  /**
   * 合并配置项
   */

  function merge (option, newOption) {
    (function doMerge(express, source) {
      for (var key in source) {
        var newExpress = express + "['" + key + "']"; // 如果是对象且不说数组
        // 需要进一步深入

        if (isObject(source[key]) && !isArray(source[key])) {
          if (!getValue(option, newExpress)) {
            setValue(option, newExpress, {});
          }

          doMerge(newExpress, source[key]);
        } // 否则直接合并即可
        else {
          setValue(option, newExpress, source[key]);
        }
      }
    })("", newOption);

    return option;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var threeGeometry_min = createCommonjsModule(function (module) {
  /*!
   *  Three-Geometry - 为image3D.js设计开发的三维几何坐标运算库
   * git+https://github.com/clunch-contrib/Three-Geometry.git
   *
   * author 你好2007 < https://hai2007.gitee.io/sweethome >
   *
   * version 1.4.1
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   *
   * Date:Fri May 06 2022 22:20:16 GMT+0800 (GMT+08:00)
   */
  (function(){function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function(obj){return typeof obj};}else {_typeof=function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};}return _typeof(obj)}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var toString=Object.prototype.toString;function getType(value){if(value==null){return value===undefined?"[object Undefined]":"[object Null]"}return toString.call(value)}function _isNumber(value){return typeof value==="number"||value!==null&&_typeof(value)==="object"&&getType(value)==="[object Number]"}var isNumber=_isNumber;var circle={splitNum:function splitNum(precision,radius){var num=Math.ceil(Math.PI*2/Math.asin(precision/radius)*2);return isNaN(num)||num<12?12:num}};function rotate(cx,cy,deg,x,y){var cos=Math.cos(deg),sin=Math.sin(deg);return [(x-cx)*cos-(y-cy)*sin+cx,(x-cx)*sin+(y-cy)*cos+cy]}function prismHorizontal(normal,x,y,z,radius,num,d){var beginX,beginZ;if(num==4){var temp=radius/1.414;beginX=x+temp;beginZ=z+temp;}else {beginX=x+radius;beginZ=z;}var points=[x,y,z],deg=Math.PI*2/num;if(normal)points.push(0,d,0);points.push(beginX,y,beginZ);if(normal)points.push(0,d,0);for(var i=0;i<num;i++){var point=rotate(x,z,deg*(i+1),beginX,beginZ);points.push(point[0],y,point[1]);if(normal)points.push(0,d,0);}return points}function prismVertical(normal,x,y,z,radius,height,num){var points=[];var beginPosition;if(num==4){beginPosition=rotate(x,z,Math.PI*.25,x-radius,z);}else {beginPosition=[x+radius,z];}var deg=Math.PI*2/num,degHalf=Math.PI*2/(num*2);var endPosition,normalPosition=[];for(var i=0;i<num;i++){endPosition=rotate.apply(void 0,[x,z,deg].concat(_toConsumableArray(beginPosition)));if(normal){var halfPosition=rotate.apply(void 0,[x,z,degHalf].concat(_toConsumableArray(beginPosition)));normalPosition=[halfPosition[0],0,halfPosition[1]];}points.push.apply(points,[beginPosition[0],y,beginPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[beginPosition[0],y+height,beginPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[endPosition[0],y+height,endPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[beginPosition[0],y,beginPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[endPosition[0],y,endPosition[1]].concat(_toConsumableArray(normalPosition)));points.push.apply(points,[endPosition[0],y+height,endPosition[1]].concat(_toConsumableArray(normalPosition)));beginPosition=endPosition;}return points}function sphereFragment(normal,cx,cy,cz,radius,num,index){var points=[cx,cy+radius,cz],deg=Math.PI*2/num,point;if(normal)points.push(0,radius,0);for(var i=1;i<num*.5;i++){point=rotate(cx,cy,deg*i,cx,cy+radius);var point1=rotate(cx,cz,deg*index,point[0],cz);points.push(point1[0],point[1],point1[1]);if(normal)points.push(point1[0]-cx,point[1]-cy,point1[1]-cz);var point2=rotate(cx,cz,deg*(index+1),point[0],cz);points.push(point2[0],point[1],point2[1]);if(normal)points.push(point2[0]-cx,point2[1]-cy,point2[1]-cz);}points.push(cx,cy-radius,cz);if(normal)points.push(0,-radius,0);return points}var ThreeGeometry=function ThreeGeometry(options){if(!isNumber(options.precision)||options<=0){throw new Error("options.precision should be an integer greater than zero")}var threeGeometry={cylinder:function cylinder(doback,x,y,z,radius,height){var num=circle.splitNum(options.precision,radius);threeGeometry.prism(doback,x,y,z,radius,height,num);return threeGeometry},prism:function prism(doback,x,y,z,radius,height,num){doback({points:prismHorizontal(options.normal,x,y,z,radius,num,height>0?-1:1),length:num+2,methods:"FanTriangle"});doback({points:prismHorizontal(options.normal,x,y+height,z,radius,num,height>0?1:-1),length:num+2,methods:"FanTriangle"});doback({points:prismVertical(options.normal,x,y,z,radius,height,num),length:6*num,methods:"Triangle"});return threeGeometry},sphere:function sphere(doback,cx,cy,cz,radius){var num=circle.splitNum(options.precision,radius);for(var i=0;i<num;i++){doback({points:sphereFragment(options.normal,cx,cy,cz,radius,num,i),length:num+1,methods:"StripTriangle"});}return threeGeometry}};return threeGeometry};if((_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=ThreeGeometry;}else {window.ThreeGeometry=ThreeGeometry;}})();
  });

  var calc = (function (geometrys, option) {
    var threeGeometry = threeGeometry_min({
      // 待定，实际需要动态计算
      precision: 0.1,
      normal: true
    }); // 坐标值分量最大

    var maxValue = 0; // 坐标刻度分量最大

    var maxLabel = 0;

    var _iterator = _createForOfIteratorHelper(geometrys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var geometry = _step.value;

        // 条目
        if (geometry.type == 'item') {
          // 长方体
          if (geometry.name == 'cuboid') {
            var value = Math.abs(geometry.start + geometry.length);
            var label = Math.max(Math.abs(Math.ceil(geometry.index + geometry.size * 0.5)), Math.abs(Math.floor(geometry.index - geometry.size * 0.5)));
            maxValue = Math.max(maxValue, value);
            maxLabel = Math.max(maxLabel, label);
          } // 连线组
          else if (geometry.name == 'lines') {
            var _iterator3 = _createForOfIteratorHelper(geometry.points),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var point = _step3.value;

                var _value = Math.abs(point[1]);

                var _label = Math.ceil(Math.abs(point[0]));

                maxValue = Math.max(maxValue, _value);
                maxLabel = Math.max(maxLabel, _label);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var geometryArray = [];

    var _iterator2 = _createForOfIteratorHelper(geometrys),
        _step2;

    try {
      var _loop = function _loop() {
        var geometry = _step2.value;

        // 条目
        if (geometry.type == 'item') {
          // 长方体
          if (geometry.name == 'cuboid') {
            threeGeometry.prism(function (data) {
              geometryArray.push({
                data: data,
                color: geometry.color
              });
            }, geometry.index / maxLabel, geometry.start / maxValue, 0, 1 / maxLabel * geometry.size / 2, geometry.length / maxValue, 4);
          } // 连线组
          else if (geometry.name == 'lines') {
            var points = [];

            var _iterator4 = _createForOfIteratorHelper(geometry.points),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _point = _step4.value;
                points.push(_point[0] / maxLabel, _point[1] / maxValue, 0, 0, 0, 1);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            geometryArray.push({
              data: {
                length: geometry.points.length,
                methods: "StripLine",
                points: points
              },
              color: geometry.color
            });
          }
        } // 原生方法
        else if (geometry.type == 'native') {
          geometryArray.push({
            data: {
              length: geometry.points.length / 6,
              methods: geometry.methods,
              points: geometry.points
            },
            color: formatColor$1(geometry.color)
          });
        } // 几何
        else if (geometry.type == 'geometry') {
          threeGeometry[geometry.name].apply(threeGeometry, [function (data) {
            geometryArray.push({
              data: data,
              color: formatColor$1(geometry.color)
            });
          }].concat(_toConsumableArray(geometry.params)));
        }
      };

      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return {
      geometry: geometryArray
    };
  });

  var image3D_min = createCommonjsModule(function (module) {
  var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};(function(){var u=function r(t,n,e){var i=t.createShader(n);if(i==null)throw new Error("Unable to create shader!");t.shaderSource(i,e);t.compileShader(i);if(!t.getShaderParameter(i,t.COMPILE_STATUS))throw new Error("Failed to compile shader:"+t.getShaderInfoLog(i));return i};var o=function r(t,n,e){var i=u(t,t.VERTEX_SHADER,n),o=u(t,t.FRAGMENT_SHADER,e);var a=t.createProgram();t.attachShader(a,i);t.attachShader(a,o);t.linkProgram(a);if(!t.getProgramParameter(a,t.LINK_STATUS))throw new Error("Failed to link program: "+t.getProgramInfoLog(a));t.useProgram(a);return a};var a=function r(t,n){var e=t.createBuffer(),i=n?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER;t.bindBuffer(i,e);return e};var l=function r(t,n,e,i){var o=i?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER;t.bufferData(o,n,e);};var v=function r(t,n,e,i,o,a,u){t.vertexAttribPointer(n,e,i,u||false,o||0,a||0);t.enableVertexAttribArray(n);};var c=function r(t,n,e,i){var o=t.createTexture();if(i=="2d"){e=e||0;t.activeTexture(t["TEXTURE"+e]);}t.bindTexture(n,o);return o};var m=function r(t,n,e,i,o,a){i={rgb:t.RGB,rgba:t.RGBA,alpha:t.ALPHA}[i]||t.RGBA;t.texImage2D(n,e||0,i,i,{}[o]||t.UNSIGNED_BYTE,a);};var g=function r(t,n,e,i,o,a,u,f,c){i={rgb:t.RGB,rgba:t.RGBA,alpha:t.ALPHA}[i]||t.RGBA;e=e||0;o={}[o]||t.UNSIGNED_BYTE;var s=[t.TEXTURE_CUBE_MAP_POSITIVE_X,t.TEXTURE_CUBE_MAP_NEGATIVE_X,t.TEXTURE_CUBE_MAP_POSITIVE_Y,t.TEXTURE_CUBE_MAP_NEGATIVE_Y,t.TEXTURE_CUBE_MAP_POSITIVE_Z,t.TEXTURE_CUBE_MAP_NEGATIVE_Z],l=void 0,v=void 0;for(l=0;l<s.length;l++){v=s[l];t.texImage2D(v,e,i,u,f,0,i,o,null);t.bindTexture(n,c);t.texImage2D(v,e,i,i,o,a[l]);}t.generateMipmap(n);};function f(u){return {setAttribute1f:function r(t,n){var e=u.getAttribLocation(u.program,t);u.vertexAttrib1f(e,n);},setAttribute2f:function r(t,n,e){var i=u.getAttribLocation(u.program,t);u.vertexAttrib2f(i,n,e);},setAttribute3f:function r(t,n,e,i){var o=u.getAttribLocation(u.program,t);u.vertexAttrib3f(o,n,e,i);},setAttribute4f:function r(t,n,e,i,o){var a=u.getAttribLocation(u.program,t);u.vertexAttrib4f(a,n,e,i,o);},setAttribute1i:function r(t,n){var e=u.getAttribLocation(u.program,t);u.vertexAttrib1i(e,n);},setAttribute2i:function r(t,n,e){var i=u.getAttribLocation(u.program,t);u.vertexAttrib2i(i,n,e);},setAttribute3i:function r(t,n,e,i){var o=u.getAttribLocation(u.program,t);u.vertexAttrib3i(o,n,e,i);},setAttribute4i:function r(t,n,e,i,o){var a=u.getAttribLocation(u.program,t);u.vertexAttrib4i(a,n,e,i,o);},setUniform1f:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniform1f(e,n);},setUniform2f:function r(t,n,e){var i=u.getUniformLocation(u.program,t);u.uniform2f(i,n,e);},setUniform3f:function r(t,n,e,i){var o=u.getUniformLocation(u.program,t);u.uniform3f(o,n,e,i);},setUniform4f:function r(t,n,e,i,o){var a=u.getUniformLocation(u.program,t);u.uniform4f(a,n,e,i,o);},setUniform1i:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniform1i(e,n);},setUniform2i:function r(t,n,e){var i=u.getUniformLocation(u.program,t);u.uniform2i(i,n,e);},setUniform3i:function r(t,n,e,i){var o=u.getUniformLocation(u.program,t);u.uniform3i(o,n,e,i);},setUniform4i:function r(t,n,e,i,o){var a=u.getUniformLocation(u.program,t);u.uniform4i(a,n,e,i,o);},setUniformMatrix2fv:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniformMatrix2fv(e,false,n);},setUniformMatrix3fv:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniformMatrix3fv(e,false,n);},setUniformMatrix4fv:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniformMatrix4fv(e,false,n);}}}function E(i){var o={byte:i.UNSIGNED_BYTE,short:i.UNSIGNED_SHORT};return {openDeep:function r(){i.enable(i.DEPTH_TEST);return this},points:function r(t,n,e){if(e){i.drawElements(i.POINTS,n,o[e],t);}else {i.drawArrays(i.POINTS,t,n);}return this},lines:function r(t,n,e){if(e){i.drawElements(i.LINES,n,o[e],t);}else {i.drawArrays(i.LINES,t,n);}return this},stripLines:function r(t,n,e){if(e){i.drawElements(i.LINE_STRIP,n,o[e],t);}else {i.drawArrays(i.LINE_STRIP,t,n);}return this},loopLines:function r(t,n,e){if(e){i.drawElements(i.LINE_LOOP,n,o[e],t);}else {i.drawArrays(i.LINE_LOOP,t,n);}return this},triangles:function r(t,n,e){if(e){i.drawElements(i.TRIANGLES,n,o[e],t);}else {i.drawArrays(i.TRIANGLES,t,n);}return this},stripTriangles:function r(t,n,e){if(e){i.drawElements(i.TRIANGLE_STRIP,n,o[e],t);}else {i.drawArrays(i.TRIANGLE_STRIP,t,n);}return this},fanTriangles:function r(t,n,e){if(e){i.drawElements(i.TRIANGLE_FAN,n,o[e],t);}else {i.drawArrays(i.TRIANGLE_FAN,t,n);}return this}}}var _=function r(t,n){var e=["webgl","experimental-webgl","webkit-3d","moz-webgl"],i=null,o=void 0;for(o=0;o<e.length;o++){try{i=t.getContext(e[o],n);}catch(r){}if(i)break}if(!i)throw new Error("Non canvas or browser does not support webgl.");return i};function s(r,t){var s=_(r,t),e={_gl_:s,painter:function r(){return E(s)},shader:function r(t,n){s.program=o(s,t,n);return e},buffer:function r(e){a(s,e);var f=void 0,c={write:function r(t,n){n=n||s.STATIC_DRAW;l(s,t,n,e);f=t;return c},use:function r(t,n,e,i,o,a){var u=f.BYTES_PER_ELEMENT;if(typeof t=="string")t=s.getAttribLocation(s.program,t);e=e||0;i=i||0;o=o||s.FLOAT;v(s,t,n,o,e*u,i*u,a);return c}};return c},texture:function u(r,t){var f={"2d":s.TEXTURE_2D,cube:s.TEXTURE_CUBE_MAP}[r];var u=c(s,f,t,r);s.texParameteri(f,s.TEXTURE_MIN_FILTER,s.NEAREST);s.texParameteri(f,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE);s.texParameteri(f,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);var o={useImage:function r(t,n,e,i){m(s,f,n,e,i,t);return o},useCube:function r(t,n,e,i,o,a){g(s,f,i,o,a,t,n,e,u);}};return o}};var n=f(s);for(var i in n){e[i]=n[i];}s.viewport(0,0,s.canvas.width,s.canvas.height);s.depthFunc(s.LEQUAL);return e}function p(r,t){for(var n in t){try{r[n]=t[n];}catch(r){throw new Error("Illegal property key : "+n)}}return r}function d(n,r){return function(t){return new function r(){var i=this;var o=n.buffer(t);this.write=function(r){o.write(r);return i};if(!t){this.use=function(r,t,n,e){o.use(r,t,n,e);return i};}}}}function A(r,t,n,e){e=e||0;var i=Math.sqrt(t*t+n*n+e*e);return [1,0,0,0,0,1,0,0,0,0,1,0,t*r/i,n*r/i,e*r/i,1]}function b(r){var t=Math.sin(r),n=Math.cos(r);return [n,t,0,0,-t,n,0,0,0,0,1,0,0,0,0,1]}function h(r,t,n,e,i,o){e=e||0;i=i||0;o=o||0;return [r,0,0,0,0,t,0,0,0,0,n,0,e-e*r,i-i*t,o-o*n,1]}function T(r,t,n,e,i,o){if(typeof r==="number"&&typeof t==="number"){if(typeof n!=="number"){n=0;e=r;i=t;o=1;}else if(typeof e!=="number"||typeof i!=="number"||typeof o!=="number"){e=r;i=t;o=n;r=0;t=0;n=0;}if(r==e&&t==i&&n==o)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((e-r)*(e-r)+(i-t)*(i-t)),u=a!=0?(i-t)/a:1,f=a!=0?(e-r)/a:0,c=(e-r)*f+(i-t)*u,s=o-n,l=Math.sqrt(c*c+s*s),v=l!=0?s/l:1,m=l!=0?c/l:0;return [[u,v*f,f*m,0,-f,u*v,u*m,0,0,-m,v,0,t*f-r*u,n*m-r*f*v-t*u*v,-r*f*m-t*u*m-n*v,1],[u,-f,0,0,v*f,v*u,-m,0,f*m,u*m,v,0,r,t,n,1]]}else {throw new Error("a1 and b1 is required!")}}var y=function r(t,n){var e=[];for(var i=0;i<4;i++){for(var o=0;o<n.length/4;o++){e[o*4+i]=t[i]*n[o*4]+t[i+4]*n[o*4+1]+t[i+8]*n[o*4+2]+t[i+12]*n[o*4+3];}}return e};function w(r){var c=r||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var s={move:function r(t,n,e,i){c=y(A(t,n,e,i),c);return s},rotate:function r(t,n,e,i,o,a,u){var f=T(n,e,i,o,a,u);c=y(y(y(f[1],b(t)),f[0]),c);return s},scale:function r(t,n,e,i,o,a){c=y(h(t,n,e,i,o,a),c);return s},multiply:function r(t,n){c=n?y(c,t):y(t,c);return s},use:function r(t,n,e,i){e=e||0;i=i||1;var o=y(c,[t,n,e,i]);o[0]=+o[0].toFixed(7);o[1]=+o[1].toFixed(7);o[2]=+o[2].toFixed(7);o[3]=+o[3].toFixed(7);return o},value:function r(){return c}};return s}var L=function r(t){return Array.isArray(t)};function U(i,r){return function(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return new function r(){var u=this;var e=i._gl_.canvas.clientWidth/i._gl_.canvas.clientHeight;if(L(n.size)){n.size=n.size[0];console.warn('"options.size" should be a number. The writing of array is out of date: https://hai2007.gitee.io/image3d/index.html#/api?fixed=camera-set');}if(!("size"in n)){n.size=1;}var f=w();var t=n.proof?-1:1;f.multiply([1/n.size,0,0,0,0,1/n.size,0,0,0,0,t/n.size,0,0,0,0,1]);this.setProportion=function(r){e=r;return u};this.rotateEye=function(r,t,n,e,i,o,a){f.rotate(-r,t,n,e,i,o,a);return u};this.moveEye=function(r,t,n,e){f.move(-r,t,n,e);return u};this.rotateBody=function(r,t,n,e,i,o,a){f.rotate(r,t,n,e,i,o,a);return u};this.moveBody=function(r,t,n,e){f.move(r,t,n,e);return u};this.scaleBody=function(r,t,n,e,i,o){f.scale(r,t,n,e,i,o);return u};this.value=function(){var r=1;var t=1;if(e>1){t=e;}else {r=1/e;}var n=Math.max(r,t);return w(f.value()).multiply([r,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1]).value()};}}}function e(n,e){e.drawPoint=function(r,t){n.points(r,t);return e};e.drawLine=function(r,t){n.lines(r,t);return e};e.drawStripLine=function(r,t){n.stripLines(r,t);return e};e.drawLoopLine=function(r,t){n.loopLines(r,t);return e};e.drawTriangle=function(r,t){n.triangles(r,t);return e};e.drawStripTriangle=function(r,t){n.stripTriangles(r,t);return e};e.drawFanTriangle=function(r,t){n.fanTriangles(r,t);return e};}function i(e,i){i.elemPoint=function(r,t,n){n=n||"byte";e.points(r,t,n);return i};i.elemLine=function(r,t,n){n=n||"byte";e.lines(r,t,n);return i};i.elemStripLine=function(r,t,n){n=n||"byte";e.stripLines(r,t,n);return i};i.elemLoopLine=function(r,t,n){n=n||"byte";e.loopLines(r,t,n);return i};i.elemTriangle=function(r,t,n){n=n||"byte";e.triangles(r,t,n);return i};i.elemStripTriangle=function(r,t,n){n=n||"byte";e.stripTriangles(r,t,n);return i};i.elemFanTriangle=function(r,t,n){n=n||"byte";e.fanTriangles(r,t,n);return i};}function R(r,t){var n=r.painter();if(t.depth){n.openDeep();}return function(){return new function r(){e(n,this);i(n,this);}}}function x(i,r){return function(e){return new function r(){var t=this;var n=i.texture("2d",e);this.write=function(r){n.useImage(r);return t};}}}function I(t,r){return function(f,c){return new function r(){var a=this;var u=t.texture("cube");this.write=function(r,t,n,e,i,o){u.useCube([r,t,n,e,i,o],f,c);return a};}}}var t={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    void main(){\n        gl_Position=a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};var n={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    uniform mat4 u_matrix;\n    void main(){\n        gl_Position=u_matrix * a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};function S(r){return {type_default:t,type_camera:n}["type_"+r]}var r=function r(t,n){var e=p({depth:false},n||{});var o=s(t);var i=e["vertex-shader"],a=e["fragment-shader"];if(!i||!a){var u=S(e.shader||"default");i=u.vs;a=u.fs;}o.shader(i,a);r.fn=r.prototype;r.fn.Buffer=d(o);r.fn.Camera=U(o);r.fn.Painter=R(o,e);r.fn.Texture2D=x(o);r.fn.TextureCube=I(o);r.fn.setAttributeFloat=function(r,t,n,e,i){o["setAttribute"+(arguments.length-1)+"f"](r,t,n,e,i);return this};r.fn.setAttributeInt=function(r,t,n,e,i){o["setAttribute"+(arguments.length-1)+"i"](r,t,n,e,i);return this};r.fn.setUniformFloat=function(r,t,n,e,i){o["setUniform"+(arguments.length-1)+"f"](r,t,n,e,i);return this};r.fn.setUniformInt=function(r,t,n,e,i){o["setUniform"+(arguments.length-1)+"i"](r,t,n,e,i);return this};r.fn.setUniformMatrix=function(r,t){var n={4:2,9:3,16:4}[t.length];o["setUniformMatrix"+n+"fv"](r,t);return this};};r.core=s;if((_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=r;}else {var P=window.image3D;r.noConflict=function(){if(window.image3D===r){window.image3D=P;}return r};window.image3D=r;}})();
  });

  /*!
   * 🌐 - 获取键盘此时按下的键的组合结果
   * https://github.com/hai2007/browser.js/blob/master/getKeyString.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  // 字典表
  var dictionary = {

      // 数字
      48: [0, ')'],
      49: [1, '!'],
      50: [2, '@'],
      51: [3, '#'],
      52: [4, '$'],
      53: [5, '%'],
      54: [6, '^'],
      55: [7, '&'],
      56: [8, '*'],
      57: [9, '('],
      96: [0, 0],
      97: 1,
      98: 2,
      99: 3,
      100: 4,
      101: 5,
      102: 6,
      103: 7,
      104: 8,
      105: 9,
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",

      // 字母
      65: ["a", "A"],
      66: ["b", "B"],
      67: ["c", "C"],
      68: ["d", "D"],
      69: ["e", "E"],
      70: ["f", "F"],
      71: ["g", "G"],
      72: ["h", "H"],
      73: ["i", "I"],
      74: ["j", "J"],
      75: ["k", "K"],
      76: ["l", "L"],
      77: ["m", "M"],
      78: ["n", "N"],
      79: ["o", "O"],
      80: ["p", "P"],
      81: ["q", "Q"],
      82: ["r", "R"],
      83: ["s", "S"],
      84: ["t", "T"],
      85: ["u", "U"],
      86: ["v", "V"],
      87: ["w", "W"],
      88: ["x", "X"],
      89: ["y", "Y"],
      90: ["z", "Z"],

      // 方向
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      33: "page up",
      34: "page down",
      35: "end",
      36: "home",

      // 控制键
      16: "shift",
      17: "ctrl",
      18: "alt",
      91: "command",
      92: "command",
      93: "command",
      224: "command",
      9: "tab",
      20: "caps lock",
      32: "spacebar",
      8: "backspace",
      13: "enter",
      27: "esc",
      46: "delete",
      45: "insert",
      144: "number lock",
      145: "scroll lock",
      12: "clear",
      19: "pause",

      // 功能键
      112: "f1",
      113: "f2",
      114: "f3",
      115: "f4",
      116: "f5",
      117: "f6",
      118: "f7",
      119: "f8",
      120: "f9",
      121: "f10",
      122: "f11",
      123: "f12",

      // 余下键
      189: ["-", "_"],
      187: ["=", "+"],
      219: ["[", "{"],
      221: ["]", "}"],
      220: ["\\", "|"],
      186: [";", ":"],
      222: ["'", '"'],
      188: [",", "<"],
      190: [".", ">"],
      191: ["/", "?"],
      192: ["`", "~"]

  };

  // 非独立键字典
  var help_key = ["shift", "ctrl", "alt"];

  /**
   * 键盘按键
   * 返回键盘此时按下的键的组合结果
   */
  function getKeyString(event) {
      event = event || window.event;

      var keycode = event.keyCode || event.which;
      var key = dictionary[keycode] || keycode;
      if (!key) return;
      if (key.constructor !== Array) key = [key, key];

      var _key = key[0];

      var shift = event.shiftKey ? "shift+" : "",
          alt = event.altKey ? "alt+" : "",
          ctrl = event.ctrlKey ? "ctrl+" : "";

      var resultKey = "",
          preKey = ctrl + shift + alt;

      if (help_key.indexOf(key[0]) >= 0) {
          key[0] = key[1] = "";
      }

      // 判断是否按下了caps lock
      var lockPress = event.code == "Key" + event.key && !shift;

      // 只有字母（且没有按下功能Ctrl、shift或alt）区分大小写
      resultKey = (preKey + ((preKey == '' && lockPress) ? key[1] : key[0]));

      if (key[0] == "") {
          resultKey = resultKey.replace(/\+$/, '');
      }

      return resultKey == '' ? _key : resultKey;
  }

  /*!
   * 🌐 - 屏幕3D控制信息捕获
   * https://github.com/hai2007/browser.js/blob/master/viewHandler.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2022-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */

  function viewHandler (callback) {

      var el = document.getElementsByTagName('body')[0];

      // 键盘控制
      xhtml.bind(el, 'keydown', function (event) {
          var keyCode = getKeyString(event);

          // 视角向上
          if (keyCode == 'up') {
              callback({
                  type: "lookUp"
              });
          }

          // 视角向下
          else if (keyCode == 'down') {
              callback({
                  type: "lookDown"
              });
          }

          // 视角向左
          else if (keyCode == 'left') {
              callback({
                  type: "lookLeft"
              });
          }

          // 视角向右
          else if (keyCode == 'right') {
              callback({
                  type: "lookRight"
              });
          }

      });

      // 鼠标控制
      var mouseP = null;
      var doMove = function (event) {
          if (mouseP == null) return;

          var tempMouseP = xhtml.mousePosition(el, event);

          // 先求解出轨迹向量
          var normal = [tempMouseP.x - mouseP.x, mouseP.y - tempMouseP.y];

          // 方向向量旋转90deg得到选择向量
          var rotateNormal = [
              normal[1],
              normal[0] * -1,
              0
          ];

          // 非法射线忽略
          if (rotateNormal[0] == 0 && rotateNormal[1] == 0) return;

          callback({
              type: "rotate",
              normal: rotateNormal,
              dist: Math.abs(tempMouseP.x - mouseP.x) + Math.abs(tempMouseP.y - mouseP.y)
          });

          mouseP = tempMouseP;
      };

      xhtml.bind(el, 'mousedown', function (event) {
          mouseP = xhtml.mousePosition(el, event);
      });
      xhtml.bind(el, 'mouseup', function (event) {
          mouseP = null;
      });
      xhtml.bind(el, 'mousemove', function (event) {
          doMove(event);
      });

      // 手指控制
      xhtml.bind(el, 'touchend', function (event) {
          mouseP = null;
      });
      xhtml.bind(el, 'touchstart', function (event) {
          mouseP = xhtml.mousePosition(el, event.touches[0]);
      });
      xhtml.bind(el, 'touchmove', function (event) {
          doMove(event.touches[0]);
      });

      let doScale = function (value) {
          if (value == 0) return;

          callback({
              type: "scale",
              kind: value < 0 ? "reduce" : "enlarge",
              rate: Math.abs(value),
          });
      };

      // 滚轮控制
      xhtml.bind(el, 'mousewheel', function (event) {
          doScale(event.wheelDelta);
      });

      if (window.addEventListener) {

          // 针对火狐浏览器
          window.addEventListener('DOMMouseScroll', function (event) {
              doScale(-1 * event.detail);
          }, false);
      }

  }

  // 顶点着色器
  var shaderVertex = "\n\n    attribute vec4 a_position; // \u9876\u70B9\u5750\u6807\n    uniform mat4 u_matrix;     // \u53D8\u6362\u77E9\u9635\n    uniform vec3 u_LPosition;  // \u5149\u7684\u4F4D\u7F6E\n    attribute vec3 a_normal;\n\n    varying vec3 v_LDirection;\n    varying vec3 v_normal;\n\n    void main(){\n\n        vec4 temp = u_matrix * a_position;\n\n        // \u8868\u793A\u773C\u775B\u8DDD\u79BBvec4(0.0,0.0,1.0)\u7684\u8DDD\u79BB\n        float dist = 2.0;\n\n        // \u4F7F\u7528\u6295\u5F71\u76F4\u63A5\u8BA1\u7B97\n        // \u6B64\u5904\u8981\u6CE8\u610Fz\u8F74\u627F\u663E\u793A\u548C\u5B9E\u9645\u7684\u65B9\u5411\u662F\u76F8\u53CD\u7684\n        gl_Position = vec4((dist + 1.0) * temp.x / (dist + temp.z), (dist + 1.0) * temp.y / (dist + temp.z), temp.z, 1.0);\n\n        // \u70B9\u5149\u6E90\u65B9\u5411\n        // \u9876\u70B9\u7684\u4F4D\u7F6E\u5E94\u8BE5\u4F7F\u7528\u8BA1\u7B97\u8FC7\u7684\n        v_LDirection = vec3(gl_Position) - u_LPosition;\n\n        v_normal = vec3(u_matrix * vec4(a_normal, 1));\n\n    }\n";

  // 片段着色器
  var shaderFragment = "\n    precision mediump float;\n\n    uniform vec4 u_LColor; // \u5149\u989C\u8272\n    uniform vec4 u_color;  // \u9876\u70B9\u989C\u8272\n\n    varying vec3 v_LDirection; // \u5149\u7EBF\u65B9\u5411\n    varying vec3 v_normal;     // \u6CD5\u7EBF\u65B9\u5411\n\n    void main()\n    {\n\n        // \u5148\u5BF9\u65B9\u5411\u8FDB\u884C\u5E8F\u5217\u5316\uFF0C\u4F7F\u5F97\u5411\u91CF\u957F\u5EA6\u4E3A1\n        vec3 LDirection = normalize(v_LDirection);\n        vec3 normal = normalize(v_normal);\n\n        // \u8BA1\u7B97\u5E8F\u5217\u5316\u540E\u7684\u5149\u65B9\u5411\u548C\u6CD5\u7EBF\u65B9\u5411\u7684\u70B9\u4E58\n        float dotValue = max(abs(dot(LDirection, normal)), 0.4);\n\n        gl_FragColor = u_color * u_LColor * dotValue;\n    }\n";

  var xAxis = (function () {
    return [{
      data: {
        length: 2,
        methods: "Line",
        points: [-1.3, 0, 0, 0, 0, 1, 1.3, 0, 0, 0, 0, 1]
      },
      color: [1, 0, 0, 1]
    }, {
      data: {
        length: 6,
        methods: "FanTriangle",
        points: [1.3, 0, 0, 0, 0, 1, 1.25, 0.02, 0.02, 0, 0, 1, 1.25, -0.02, 0.02, 0, 0, 1, 1.25, -0.02, -0.02, 0, 0, 1, 1.25, 0.02, -0.02, 0, 0, 1, 1.25, 0.02, 0.02, 0, 0, 1]
      },
      color: [1, 0, 0, 1]
    }];
  });

  var yAxis = (function () {
    return [{
      data: {
        length: 2,
        methods: "Line",
        points: [0, -1.3, 0, 0, 0, 1, 0, 1.3, 0, 0, 0, 1]
      },
      color: [0, 1, 0, 1]
    }, {
      data: {
        length: 6,
        methods: "FanTriangle",
        points: [0, 1.3, 0, 0, 0, 1, 0.02, 1.25, 0.02, 0, 0, 1, -0.02, 1.25, 0.02, 0, 0, 1, -0.02, 1.25, -0.02, 0, 0, 1, 0.02, 1.25, -0.02, 0, 0, 1, 0.02, 1.25, 0.02, 0, 0, 1]
      },
      color: [0, 1, 0, 1]
    }];
  });

  var zAxis = (function () {
    return [{
      data: {
        length: 2,
        methods: "Line",
        points: [0, 0, -1.3, 0, 0, 1, 0, 0, 1.3, 0, 0, 1]
      },
      color: [0, 0, 1, 1]
    }, {
      data: {
        length: 6,
        methods: "FanTriangle",
        points: [0, 0, 1.3, 0, 0, 1, 0.02, 0.02, 1.25, 0, 0, 1, -0.02, 0.02, 1.25, 0, 0, 1, -0.02, -0.02, 1.25, 0, 0, 1, 0.02, -0.02, 1.25, 0, 0, 1, 0.02, 0.02, 1.25, 0, 0, 1]
      },
      color: [0, 0, 1, 1]
    }];
  });

  var axisFactory = {
    xAxis: xAxis,
    yAxis: yAxis,
    zAxis: zAxis
  };

  var bar = (function (params, api) {
    var data = params.data;
    params.itemStyle = params.itemStyle || {};
    var geometry = [];

    for (var i = 0; i < data.length; i++) {
      if (isArray(data[i])) {
        for (var j = 0; j < data[i].length; j++) {
          var smallWidth = 0.7 / data[i].length;
          geometry.push({
            type: "item",
            name: "cuboid",
            length: data[i][j],
            start: params.itemStyle.align == 'middle' ? data[i][j] * 0.5 : 0,
            index: i + 0.5 - data.length * 0.5 + (j - data[i].length * 0.5) * smallWidth,
            size: smallWidth,
            color: api.color(j)
          });
        }
      } else {
        geometry.push({
          type: "item",
          name: "cuboid",
          length: data[i],
          start: params.itemStyle.align == 'middle' ? data[i] * 0.5 : 0,
          index: i + 0.5 - data.length * 0.5,
          size: 0.7,
          color: params.itemStyle.colors ? api.color(i) : api.color(0)
        });
      }
    }

    return {
      geometry: geometry
    };
  });

  var line = (function (params, api) {
    var data = [];

    if (isArray(params.data[0])) {
      for (var i = 0; i < params.data[0].length; i++) {
        var _data = [];

        for (var j = 0; j < params.data.length; j++) {
          _data.push(params.data[j][i]);
        }

        data.push(_data);
      }
    } else {
      data.push(params.data);
    }

    var geometry = [];

    for (var _j = 0; _j < data.length; _j++) {
      var points = [];

      for (var _i = 0; _i < data[_j].length; _i++) {
        points.push([_i + 0.5 - data[_j].length * 0.5, data[_j][_i]]);
      }

      geometry.push({
        type: "item",
        name: "lines",
        points: points,
        color: api.color(_j)
      });
    }

    return {
      geometry: geometry
    };
  });

  var candlestick = (function (params, api) {
    var data = params.data;
    var geometry = [];

    for (var i = 0; i < data.length; i++) {
      // 红涨绿跌
      geometry.push({
        type: "item",
        name: "cuboid",
        length: data[i][1] - data[i][0],
        start: data[i][0],
        index: i + 0.5 - data.length * 0.5,
        size: 0.7,
        color: data[i][0] > data[i][1] ? [0, 1, 0, 1] : [1, 0, 0, 1]
      }); // 最值

      geometry.push({
        type: "item",
        name: "lines",
        points: [[i + 0.5 - data.length * 0.5, data[i][2]], [i + 0.5 - data.length * 0.5, data[i][3]]],
        color: data[i][0] > data[i][1] ? [0, 1, 0, 1] : [1, 0, 0, 1]
      });
    }

    return {
      geometry: geometry
    };
  });

  var charts = {
    bar: bar,
    line: line,
    candlestick: candlestick
  };

  var Puly = /*#__PURE__*/function () {
    // 主题
    function Puly(el) {
      var _this = this;

      _classCallCheck(this, Puly);

      _defineProperty(this, "size", void 0);

      _defineProperty(this, "canvas", void 0);

      _defineProperty(this, "image3d", void 0);

      _defineProperty(this, "painter", void 0);

      _defineProperty(this, "buffer", void 0);

      _defineProperty(this, "camera", void 0);

      _defineProperty(this, "doDraw", null);

      _defineProperty(this, "option", {});

      // 获取绘制区域大小
      this.size = xhtml.size(el); // 追加画布

      this.canvas = xhtml.append(el, "<canvas width='" + this.size.width + "' height='" + this.size.height + "'>非常抱歉，您的浏览器不支持canvas!</canvas>");
      this.image3d = new image3D_min(this.canvas, {
        "vertex-shader": shaderVertex,
        "fragment-shader": shaderFragment,
        "depth": true
      });
      this.painter = this.image3d.Painter();
      this.buffer = this.image3d.Buffer();
      this.camera = this.image3d.Camera({
        size: 4,
        // 默认的时候，Z轴承的方向是朝里的，这里进行了校对
        // https://hai2007.gitee.io/image3d/index.html#/api?fixed=camera-set
        proof: true
      }).rotateBody(-0.5, 1, 0, 0).rotateBody(0.2, 0, 0, 1).rotateBody(0.5, -1, 1, -1); // 设置点光源的颜色和位置

      this.image3d.setUniformFloat("u_LColor", 1, 1, 1, 1);
      this.image3d.setUniformFloat("u_LPosition", -5, 5, 5); // 监听绘制区域大小改变

      observeResize(el, function () {// todo
      }); // 鼠标键盘交互
      // 每次调整的弧度

      var deg = 0.1;
      var rateScale = 1;
      viewHandler(function (data) {
        if (_this.doDraw == null) return;
        /*
         * 修改相机
         */
        // 键盘控制

        if (data.type == 'lookUp') {
          _this.camera.rotateBody(deg, 1, 0, 0);
        } else if (data.type == 'lookDown') {
          _this.camera.rotateBody(deg, -1, 0, 0);
        } else if (data.type == 'lookLeft') {
          _this.camera.rotateBody(deg, 0, 1, 0);
        } else if (data.type == 'lookRight') {
          _this.camera.rotateBody(deg, 0, -1, 0);
        } // 鼠标拖动或手指控制
        else if (data.type == 'rotate') {
          var _this$camera;

          (_this$camera = _this.camera).rotateBody.apply(_this$camera, [deg * data.dist * 0.07].concat(_toConsumableArray(data.normal)));
        } // 滚轮控制
        else if (data.type == 'scale') {
          // 设置一个缩放上界
          if (data.kind == 'enlarge' && rateScale >= 2) {
            return;
          }

          var baseTimes = 0.899;
          var times = data.kind == 'enlarge' ? 2 - baseTimes : baseTimes;
          rateScale *= times;

          _this.camera.scaleBody(times, times, times, 0, 0, 0);
        } // 重新绘制


        _this.doDraw();
      });
    } // 设置主题


    _createClass(Puly, [{
      key: "setOption",
      value: // 设置用户意图
      // 我们根据这个配置进行分析后绘制
      function setOption(option) {
        var _this2 = this;

        this.option = merge(this.option, option);
        var geometrys = [];

        if ('series' in this.option) {
          var _iterator = _createForOfIteratorHelper(this.option.series),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var series = _step.value;

              try {
                var result = Puly.charts[series.type]({
                  data: series.data || this.option.data || [],
                  itemStyle: series.itemStyle || {}
                }, {
                  color: function color(index) {
                    return Puly.theme.colors[index % Puly.theme.colors.length];
                  }
                });

                var _iterator2 = _createForOfIteratorHelper(result.geometry),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var geometry = _step2.value;
                    geometrys.push(geometry);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              } catch (e) {
                console.warn("[puly warn]Chart '" + series.type + "' not defined");
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        var temp = calc(geometrys, this.option);

        this.doDraw = function () {
          // 传递照相机
          _this2.image3d.setUniformMatrix("u_matrix", _this2.camera.value());
          /**
           * 设计思想：
           *
           * 1.默认是直立方坐标系，当然，也可以设置球坐标系等，慢慢丰富
           *
           * 2.设置了坐标系以后，不同坐标系有不同的轴可以设置，默认都自动显示出来
           * （坐标轴也可以提供设置项）
           *
           * 3.然后，绘制具体的图形
           */


          for (var _i = 0, _arr = ["xAxis", "yAxis", "zAxis"]; _i < _arr.length; _i++) {
            var aixsName = _arr[_i];

            if (!(aixsName in _this2.option) || isBoolean(_this2.option[aixsName].show) && _this2.option[aixsName].show) {
              var _temp$geometry;

              (_temp$geometry = temp.geometry).push.apply(_temp$geometry, _toConsumableArray(axisFactory[aixsName]()));
            }
          }

          var _iterator3 = _createForOfIteratorHelper(temp.geometry),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _geometry = _step3.value;
              var data = _geometry.data;

              _this2.buffer.write(new Float32Array(data.points)).use('a_position', 3, 6, 0).use('a_normal', 3, 6, 3);

              _this2.image3d.setUniformFloat("u_color", _geometry.color[0], _geometry.color[1], _geometry.color[2], _geometry.color[3]);

              _this2.painter["draw" + data.methods](0, data.length);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        };

        this.doDraw();
      }
    }], [{
      key: "registerTheme",
      value: function registerTheme(theme) {
        Puly.theme = formatTheme(theme);
      } // 注册图表

    }, {
      key: "registerChart",
      value: function registerChart(name, calcFun) {
        if (name in Puly.charts) {
          throw new Error('This chart is already defined:' + name);
        }

        Puly.charts[name] = calcFun;
      }
    }]);

    return Puly;
  }(); // 挂载内置图表


  _defineProperty(Puly, "charts", {});

  _defineProperty(Puly, "theme", void 0);

  for (var key in charts) {
    Puly.registerChart(key, charts[key]);
  } // 设置好主题色


  Puly.registerTheme({
    "colors": ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
  }); // 对外暴露调用接口

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Puly;
  } else {
    window['Puly'] = Puly;
  }

}());
