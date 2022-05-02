/*!
 * puly - 一个简单易用的3D图表，像ECharts一样可以快速上手，配置化生成，并支持个性化自定义扩展。
 * git+https://github.com/hai2007/puly.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 1.0.0-alpha.4
 *
 * Copyright (c) 2021-2022 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Mon May 02 2022 21:17:58 GMT+0800 (GMT+08:00)
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

          var _color = formatColor(color);

          _theme.colors.push([_color[0] / 255, _color[1] / 255, _color[2] / 255, _color[3]]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return _theme;
  });

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
  var isString = _isString;
  var isArray = function (input) { return Array.isArray(input) };

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

  var calc = (function (geometrys, option) {
    // 坐标值分量最大
    var MaxValue = {
      xAxis: 0,
      yAxis: 0,
      zAxis: 0
    }; // 坐标刻度分量最大

    var MaxLabel = {
      xAxis: 0,
      yAxis: 0,
      zAxis: 0
    };

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

            for (var _i = 0, _arr = ['xAxis', 'yAxis', 'zAxis']; _i < _arr.length; _i++) {
              var axisName = _arr[_i];

              if (axisName in option) {
                // 值
                if (option[axisName].type == 'value') {
                  MaxValue[axisName] = Math.max(MaxValue[axisName], value);
                } // 刻度
                else if (option[axisName].type == 'category') {
                  MaxLabel[axisName] = Math.max(MaxLabel[axisName], label);
                }
              }
            }
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    console.log(geometrys, option, MaxValue, MaxLabel);
  });

  var Puly = /*#__PURE__*/function () {
    // 主题
    function Puly(el) {
      var _this = this;

      _classCallCheck(this, Puly);

      _defineProperty(this, "size", void 0);

      _defineProperty(this, "canvas", void 0);

      _defineProperty(this, "option", {});

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
        this.option = merge(this.option, option);
        var geometrys = [];

        if ('series' in this.option) {
          var _iterator = _createForOfIteratorHelper(this.option.series),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var series = _step.value;
              var result = Puly.charts[series.type]({
                data: series.data || this.option.data || []
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
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        console.log(calc(geometrys, this.option));
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
  }(); // 对外暴露调用接口


  _defineProperty(Puly, "charts", {});

  _defineProperty(Puly, "theme", void 0);

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Puly;
  } else {
    window['Puly'] = Puly;
  }

}());
