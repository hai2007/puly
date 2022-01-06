/*!
 * puly - 基于Image3D.js开发，底层依赖webgl实现，通过配置和简单的方法调用，可以快速实现三维数据可视化和VR效果等。
 * git+https://github.com/hai2007/puly.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0
 *
 * Copyright (c) 2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Thu Jan 06 2022 09:18:06 GMT+0800 (中国标准时间)
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

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var image3DCore = createCommonjsModule(function (module) {

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  (function () {

      /**
       * 着色器一些公共的方法
       * --------------------------------------------
       * 主要是和生成特定着色器无关的方法
       * 着色器分为两类：顶点着色器 + 片段着色器
       * 前者用于定义一个点的特性，比如位置，大小，颜色等
       * 后者用于针对每个片段（可以理解为像素）进行处理
       *
       * 着色器采用的语言是：GLSL ES语言
       */

      // 把着色器字符串加载成着色器对象

      var loadShader = function loadShader(gl, type, source) {
          // 创建着色器对象
          var shader = gl.createShader(type);
          if (shader == null) throw new Error('Unable to create shader!');
          // 绑定资源
          gl.shaderSource(shader, source);
          // 编译着色器
          gl.compileShader(shader);
          // 检测着色器编译是否成功
          if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error('Failed to compile shader:' + gl.getShaderInfoLog(shader));
          return shader;
      };

      // 初始化着色器
      var useShader = function useShader(gl, vshaderSource, fshaderSource) {
          // 分别加载顶点着色器对象和片段着色器对象
          var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshaderSource),
              fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshaderSource);
          // 创建一个着色器程序
          var glProgram = gl.createProgram();
          // 把前面创建的两个着色器对象添加到着色器程序中
          gl.attachShader(glProgram, vertexShader);
          gl.attachShader(glProgram, fragmentShader);
          // 把着色器程序链接成一个完整的程序
          gl.linkProgram(glProgram);
          // 检测着色器程序链接是否成功
          if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) throw new Error('Failed to link program: ' + gl.getProgramInfoLog(glProgram));
          // 使用这个完整的程序
          gl.useProgram(glProgram);
          return glProgram;
      };

      /**
       * 缓冲区核心方法
       * --------------------------------------------
       * 缓冲区分为两种：
       *  1.缓冲区中保存了包含顶点的数据
       *  2.缓冲区保存了包含顶点的索引值
       *
       */

      // 获取一个新的缓冲区
      // isElement默认false，创建第一种缓冲区，为true创建第二种
      var newBuffer = function newBuffer(gl, isElement) {
          var buffer = gl.createBuffer(),
              TYPE = isElement ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
          // 把缓冲区对象绑定到目标
          gl.bindBuffer(TYPE, buffer);
          return buffer;
      };

      // 数据写入缓冲区
      // data是一个类型化数组，表示写入的数据
      // usage表示程序如何使用存储在缓冲区的数据
      var writeBuffer = function writeBuffer(gl, data, usage, isElement) {
          var TYPE = isElement ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
          gl.bufferData(TYPE, data, usage);
      };

      // 使用缓冲区数据
      // location指定待分配的attribute变量的存储位置
      // size每个分量个数
      // type数据类型，应该是以下的某个：
      //      gl.UNSIGNED_BYTE    Uint8Array
      //      gl.SHORT            Int16Array
      //      gl.UNSIGNED_SHORT   Uint16Array
      //      gl.INT              Int32Array
      //      gl.UNSIGNED_INT     Uint32Array
      //      gl.FLOAT            Float32Array
      // stride相邻两个数据项的字节数
      // offset数据的起点字节位置
      // normalized是否把非浮点型的数据归一化到[0,1]或[-1,1]区间
      var useBuffer = function useBuffer(gl, location, size, type, stride, offset, normalized) {
          // 把缓冲区对象分配给目标变量
          gl.vertexAttribPointer(location, size, type, normalized || false, stride || 0, offset || 0);
          // 连接目标对象和缓冲区对象
          gl.enableVertexAttribArray(location);
      };

      /**
       * 纹理方法
       * --------------------------------------------
       * 在绘制的多边形上贴图
       * 丰富效果
       */

      // 初始化一个纹理对象
      // type有gl.TEXTURE_2D代表二维纹理，gl.TEXTURE_CUBE_MAP 立方体纹理等
      var initTexture = function initTexture(gl, type, unit, _type_) {
          // 创建纹理对象
          var texture = gl.createTexture();

          if (_type_ == '2d') {
              unit = unit || 0;
              // 开启纹理单元，unit表示开启的编号
              gl.activeTexture(gl['TEXTURE' + unit]);
          }

          // 绑定纹理对象到目标上
          gl.bindTexture(type, texture);
          return texture;
      };

      // 链接资源图片
      // level默认传入0即可，和金字塔纹理有关
      // format表示图像的内部格式：
      //      gl.RGB(红绿蓝)
      //      gl.RGBA(红绿蓝透明度)
      //      gl.ALPHA(0.0,0.0,0.0,透明度)
      //      gl.LUMINANCE(L、L、L、1L:流明)
      //      gl.LUMINANCE_ALPHA(L、L、L,透明度)
      // textureType表示纹理数据的格式：
      //      gl.UNSIGNED_BYTE: 表示无符号整形，每一个颜色分量占据1字节
      //      gl.UNSIGNED_SHORT_5_6_5: 表示RGB，每一个分量分别占据占据5, 6, 5比特
      //      gl.UNSIGNED_SHORT_4_4_4_4: 表示RGBA，每一个分量分别占据占据4, 4, 4, 4比特
      //      gl.UNSIGNED_SHORT_5_5_5_1: 表示RGBA，每一个分量分别占据占据5比特，A分量占据1比特
      var linkImage = function linkImage(gl, type, level, format, textureType, image) {
          format = {
              "rgb": gl.RGB,
              "rgba": gl.RGBA,
              "alpha": gl.ALPHA
          }[format] || gl.RGBA;

          gl.texImage2D(type, level || 0, format, format, {

              // 目前一律采用默认值，先不对外提供修改权限

          }[textureType] || gl.UNSIGNED_BYTE, image);
      };

      var linkCube = function linkCube(gl, type, level, format, textureType, images, width, height, texture) {
          format = {
              "rgb": gl.RGB,
              "rgba": gl.RGBA,
              "alpha": gl.ALPHA
          }[format] || gl.RGBA;

          level = level || 0;

          textureType = {

              // 目前一律采用默认值，先不对外提供修改权限

          }[textureType] || gl.UNSIGNED_BYTE;

          var types = [gl.TEXTURE_CUBE_MAP_POSITIVE_X, //右
          gl.TEXTURE_CUBE_MAP_NEGATIVE_X, //左
          gl.TEXTURE_CUBE_MAP_POSITIVE_Y, //上
          gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, //下
          gl.TEXTURE_CUBE_MAP_POSITIVE_Z, //后
          gl.TEXTURE_CUBE_MAP_NEGATIVE_Z //前
          ],
              i = void 0,
              target = void 0;

          for (i = 0; i < types.length; i++) {
              target = types[i];
              gl.texImage2D(target, level, format, width, height, 0, format, textureType, null);
              gl.bindTexture(type, texture);
              gl.texImage2D(target, level, format, format, textureType, images[i]);
          }

          gl.generateMipmap(type);
      };

      function value(gl) {
          return {

              /**
               * attribue
               * ----------------------------------------
               */

              // 浮点数
              setAttribute1f: function setAttribute1f(name, v0) {
                  // 获取存储位置
                  var location = gl.getAttribLocation(gl.program, name);
                  // 传递数据给变量
                  gl.vertexAttrib1f(location, v0);
              },
              setAttribute2f: function setAttribute2f(name, v0, v1) {
                  var location = gl.getAttribLocation(gl.program, name);
                  gl.vertexAttrib2f(location, v0, v1);
              },
              setAttribute3f: function setAttribute3f(name, v0, v1, v2) {
                  var location = gl.getAttribLocation(gl.program, name);
                  gl.vertexAttrib3f(location, v0, v1, v2);
              },
              setAttribute4f: function setAttribute4f(name, v0, v1, v2, v3) {
                  var location = gl.getAttribLocation(gl.program, name);
                  gl.vertexAttrib4f(location, v0, v1, v2, v3);
              },


              // 整数
              setAttribute1i: function setAttribute1i(name, v0) {
                  // 获取存储位置
                  var location = gl.getAttribLocation(gl.program, name);
                  // 传递数据给变量
                  gl.vertexAttrib1i(location, v0);
              },
              setAttribute2i: function setAttribute2i(name, v0, v1) {
                  var location = gl.getAttribLocation(gl.program, name);
                  gl.vertexAttrib2i(location, v0, v1);
              },
              setAttribute3i: function setAttribute3i(name, v0, v1, v2) {
                  var location = gl.getAttribLocation(gl.program, name);
                  gl.vertexAttrib3i(location, v0, v1, v2);
              },
              setAttribute4i: function setAttribute4i(name, v0, v1, v2, v3) {
                  var location = gl.getAttribLocation(gl.program, name);
                  gl.vertexAttrib4i(location, v0, v1, v2, v3);
              },


              /**
              * uniform
              * ----------------------------------------
              */

              // 浮点数
              setUniform1f: function setUniform1f(name, v0) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniform1f(location, v0);
              },
              setUniform2f: function setUniform2f(name, v0, v1) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniform2f(location, v0, v1);
              },
              setUniform3f: function setUniform3f(name, v0, v1, v2) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniform3f(location, v0, v1, v2);
              },
              setUniform4f: function setUniform4f(name, v0, v1, v2, v3) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniform4f(location, v0, v1, v2, v3);
              },


              // 整数
              setUniform1i: function setUniform1i(name, v0) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniform1i(location, v0);
              },
              setUniform2i: function setUniform2i(name, v0, v1) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniform2i(location, v0, v1);
              },
              setUniform3i: function setUniform3i(name, v0, v1, v2) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniform3i(location, v0, v1, v2);
              },
              setUniform4i: function setUniform4i(name, v0, v1, v2, v3) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniform4i(location, v0, v1, v2, v3);
              },


              // 矩阵
              setUniformMatrix2fv: function setUniformMatrix2fv(name, value) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniformMatrix2fv(location, false, value);
              },
              setUniformMatrix3fv: function setUniformMatrix3fv(name, value) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniformMatrix3fv(location, false, value);
              },
              setUniformMatrix4fv: function setUniformMatrix4fv(name, value) {
                  var location = gl.getUniformLocation(gl.program, name);
                  gl.uniformMatrix4fv(location, false, value);
              }
          };
      }

      function _painter(gl) {

          var typeMap = {
              "byte": gl.UNSIGNED_BYTE,
              "short": gl.UNSIGNED_SHORT
          };

          return {

              // 开启深度计算
              openDeep: function openDeep() {
                  gl.enable(gl.DEPTH_TEST);
                  return this;
              },


              // 绘制点
              points: function points(first, count, type) {
                  if (type) {
                      gl.drawElements(gl.POINTS, count, typeMap[type], first);
                  } else {
                      gl.drawArrays(gl.POINTS, first, count);
                  }
                  return this;
              },


              // 绘制直线
              lines: function lines(first, count, type) {
                  if (type) {
                      gl.drawElements(gl.LINES, count, typeMap[type], first);
                  } else {
                      gl.drawArrays(gl.LINES, first, count);
                  }
                  return this;
              },


              // 绘制连续直线
              stripLines: function stripLines(first, count, type) {
                  if (type) {
                      gl.drawElements(gl.LINE_STRIP, count, typeMap[type], first);
                  } else {
                      gl.drawArrays(gl.LINE_STRIP, first, count);
                  }
                  return this;
              },


              // 绘制闭合直线
              loopLines: function loopLines(first, count, type) {
                  if (type) {
                      gl.drawElements(gl.LINE_LOOP, count, typeMap[type], first);
                  } else {
                      gl.drawArrays(gl.LINE_LOOP, first, count);
                  }
                  return this;
              },


              // 绘制三角形
              triangles: function triangles(first, count, type) {
                  if (type) {
                      gl.drawElements(gl.TRIANGLES, count, typeMap[type], first);
                  } else {
                      gl.drawArrays(gl.TRIANGLES, first, count);
                  }
                  return this;
              },


              // 绘制共有边三角形
              stripTriangles: function stripTriangles(first, count, type) {
                  if (type) {
                      gl.drawElements(gl.TRIANGLE_STRIP, count, typeMap[type], first);
                  } else {
                      gl.drawArrays(gl.TRIANGLE_STRIP, first, count);
                  }
                  return this;
              },


              // 绘制旋转围绕三角形
              fanTriangles: function fanTriangles(first, count, type) {
                  if (type) {
                      gl.drawElements(gl.TRIANGLE_FAN, count, typeMap[type], first);
                  } else {
                      gl.drawArrays(gl.TRIANGLE_FAN, first, count);
                  }
                  return this;
              }
          };
      }

      // 获取webgl上下文
      var getCanvasWebgl = function getCanvasWebgl(node, opts) {
          var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"],
              context = null,
              i = void 0;
          for (i = 0; i < names.length; i++) {
              try {
                  context = node.getContext(names[i], opts);
              } catch (e) {}
              if (context) break;
          }
          if (!context) throw new Error('Non canvas or browser does not support webgl.');
          return context;
      };

      // 绘图核心对象
      function image3DCore(node, opts) {
          var gl = getCanvasWebgl(node, opts),
              glObj = {

              "_gl_": gl,

              // 画笔
              "painter": function painter() {
                  return _painter(gl);
              },

              // 启用着色器
              "shader": function shader(vshaderSource, fshaderSource) {
                  gl.program = useShader(gl, vshaderSource, fshaderSource);
                  return glObj;
              },

              // 缓冲区
              "buffer": function buffer(isElement) {
                  // 创建缓冲区
                  newBuffer(gl, isElement);
                  var bufferData = void 0,
                      bufferObj = {
                      // 写入数据
                      "write": function write(data, usage) {
                          usage = usage || gl.STATIC_DRAW;
                          writeBuffer(gl, data, usage, isElement);
                          bufferData = data;
                          return bufferObj;
                      },
                      // 分配使用
                      "use": function use(location, size, stride, offset, type, normalized) {
                          var fsize = bufferData.BYTES_PER_ELEMENT;
                          if (typeof location == 'string') location = gl.getAttribLocation(gl.program, location);
                          stride = stride || 0;
                          offset = offset || 0;
                          type = type || gl.FLOAT;
                          useBuffer(gl, location, size, type, stride * fsize, offset * fsize, normalized);
                          return bufferObj;
                      }
                  };
                  return bufferObj;
              },

              // 纹理
              "texture": function texture(_type_, unit) {
                  var type = {
                      "2d": gl.TEXTURE_2D, /*二维纹理*/
                      "cube": gl.TEXTURE_CUBE_MAP /*立方体纹理*/
                  }[_type_];

                  // 创建纹理
                  var texture = initTexture(gl, type, unit, _type_);

                  // 配置纹理（默认配置）
                  gl.texParameteri(type, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                  gl.texParameteri(type, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                  gl.texParameteri(type, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

                  var textureObj = {
                      // 链接图片资源
                      "useImage": function useImage(image, level, format, textureType) {
                          linkImage(gl, type, level, format, textureType, image);
                          return textureObj;
                      },
                      // 链接多张图片
                      "useCube": function useCube(images, width, height, level, format, textureType) {
                          linkCube(gl, type, level, format, textureType, images, width, height, texture);
                      }
                  };
                  return textureObj;
              }

          };

          // attribue和uniform数据设置
          var valueMethods = value(gl);
          for (var key in valueMethods) {
              glObj[key] = valueMethods[key];
          }

          /**
           * gl.viewport告诉WebGL如何将裁剪空间（-1 到 +1）中的点转换到像素空间
           * 当你第一次创建WebGL上下文的时候WebGL会设置视域大小和画布大小匹配
           * 但是在那之后就需要你自己设置（当你改变画布大小就需要告诉WebGL新的视域设置）
           * 为了避免麻烦，我们每次都主动调用一下
           */
          gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

          return glObj;
      }

      if (( _typeof(module)) === "object" && _typeof(module.exports) === "object") {
          module.exports = image3DCore;
      } else {
          var
          // 保存之前的image3DCore，防止直接覆盖
          _image3DCore = window.image3DCore;

          image3D.noConflict = function () {

              // 如果当前的$$是被最新的image3DCore覆盖的
              // 恢复之前的
              if (window.image3DCore === image3DCore) {
                  window.image3DCore = _image3DCore;
              }

              // 返回当前image3DCore
              // 因为调用这个方法以后
              // 全局window下的image3DCore和$$是什么
              // 已经不一定了
              return image3DCore;
          };

          // 挂载对象到根
          window.image3DCore = image3DCore;
      }
  })();
  });

  /**
   * 在(a,b,c)方向位移d
   */
  function _move (d, a, b, c) {
      c = c || 0;
      var sqrt = Math.sqrt(a * a + b * b + c * c);
      return [
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          a * d / sqrt, b * d / sqrt, c * d / sqrt, 1
      ];
  }

  /**
   * 围绕0Z轴旋转
   * 其它的旋转可以借助transform实现
   * 旋转角度单位采用弧度制
   */
  function _rotate (deg) {
      var sin = Math.sin(deg),
          cos = Math.cos(deg);
      return [
          cos, sin, 0, 0,
          -sin, cos, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
      ];
  }

  /**
   * 围绕圆心x、y和z分别缩放xTimes, yTimes和zTimes倍
   */
  function _scale (xTimes, yTimes, zTimes, cx, cy, cz) {
      cx = cx || 0; cy = cy || 0; cz = cz || 0;
      return [
          xTimes, 0, 0, 0,
          0, yTimes, 0, 0,
          0, 0, zTimes, 0,
          cx - cx * xTimes, cy - cy * yTimes, cz - cz * zTimes, 1
      ];
  }

  /**
   * 针对任意射线(a1,b1,c1)->(a2,b2,c2)
   * 计算出二个变换矩阵
   * 分别为：任意射线变成OZ轴变换矩阵 + OZ轴变回原来的射线的变换矩阵
   */
  function _transform (a1, b1, c1, a2, b2, c2) {

      if (typeof a1 === 'number' && typeof b1 === 'number') {

          // 如果设置二个点
          // 表示二维上围绕某个点旋转
          if (typeof c1 !== 'number') {
              c1 = 0; a2 = a1; b2 = b1; c2 = 1;
          }
          // 只设置三个点(设置不足六个点都认为只设置了三个点)
          // 表示围绕从原点出发的射线旋转
          else if (typeof a2 !== 'number' || typeof b2 !== 'number' || typeof c2 !== 'number') {
              a2 = a1; b2 = b1; c2 = c1; a1 = 0; b1 = 0; c1 = 0;
          }

          if (a1 == a2 && b1 == b2 && c1 == c2) throw new Error('It\'s not a legitimate ray!');

          var sqrt1 = Math.sqrt((a2 - a1) * (a2 - a1) + (b2 - b1) * (b2 - b1)),
              cos1 = sqrt1 != 0 ? (b2 - b1) / sqrt1 : 1,
              sin1 = sqrt1 != 0 ? (a2 - a1) / sqrt1 : 0,

              b = (a2 - a1) * sin1 + (b2 - b1) * cos1,
              c = c2 - c1,

              sqrt2 = Math.sqrt(b * b + c * c),
              cos2 = sqrt2 != 0 ? c / sqrt2 : 1,
              sin2 = sqrt2 != 0 ? b / sqrt2 : 0;

          return [

              // 任意射线变成OZ轴变换矩阵
              [
                  cos1, cos2 * sin1, sin1 * sin2, 0,
                  -sin1, cos1 * cos2, cos1 * sin2, 0,
                  0, -sin2, cos2, 0,
                  b1 * sin1 - a1 * cos1, c1 * sin2 - a1 * sin1 * cos2 - b1 * cos1 * cos2, -a1 * sin1 * sin2 - b1 * cos1 * sin2 - c1 * cos2, 1
              ],

              // OZ轴变回原来的射线的变换矩阵
              [
                  cos1, -sin1, 0, 0,
                  cos2 * sin1, cos2 * cos1, -sin2, 0,
                  sin1 * sin2, cos1 * sin2, cos2, 0,
                  a1, b1, c1, 1
              ]

          ];
      } else {
          throw new Error('a1 and b1 is required!');
      }
  }

  // 二个4x4矩阵相乘
  // 或矩阵和齐次坐标相乘
  var _multiply = function (matrix4, param) {
      var newParam = [];
      for (var i = 0; i < 4; i++)
          for (var j = 0; j < param.length / 4; j++)
              newParam[j * 4 + i] =
                  matrix4[i] * param[j * 4] +
                  matrix4[i + 4] * param[j * 4 + 1] +
                  matrix4[i + 8] * param[j * 4 + 2] +
                  matrix4[i + 12] * param[j * 4 + 3];
      return newParam;
  };

  /*!
   * 💡 - 列主序存储的4x4矩阵
   * https://github.com/hai2007/tool.js/blob/master/Matrix4.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */


  function Matrix4 (initMatrix4) {

      var matrix4 = initMatrix4 || [
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
      ];

      var matrix4Obj = {

          // 移动
          "move": function (dis, a, b, c) {
              matrix4 = _multiply(_move(dis, a, b, c), matrix4);
              return matrix4Obj;
          },

          // 旋转
          "rotate": function (deg, a1, b1, c1, a2, b2, c2) {
              var matrix4s = _transform(a1, b1, c1, a2, b2, c2);
              matrix4 = _multiply(_multiply(_multiply(matrix4s[1], _rotate(deg)), matrix4s[0]), matrix4);
              return matrix4Obj;
          },

          // 缩放
          "scale": function (xTimes, yTimes, zTimes, cx, cy, cz) {
              matrix4 = _multiply(_scale(xTimes, yTimes, zTimes, cx, cy, cz), matrix4);
              return matrix4Obj;
          },

          // 乘法
          // 可以传入一个矩阵(matrix4,flag)
          "multiply": function (newMatrix4, flag) {
              matrix4 = flag ? _multiply(matrix4, newMatrix4) : _multiply(newMatrix4, matrix4);
              return matrix4Obj;
          },

          // 对一个坐标应用变换
          // 齐次坐标(x,y,z,w)
          "use": function (x, y, z, w) {
              // w为0表示点位于无穷远处，忽略
              z = z || 0; w = w || 1;
              var temp = _multiply(matrix4, [x, y, z, w]);
              temp[0] = +temp[0].toFixed(7);
              temp[1] = +temp[1].toFixed(7);
              temp[2] = +temp[2].toFixed(7);
              temp[3] = +temp[3].toFixed(7);
              return temp;
          },

          // 矩阵的值
          "value": function () {
              return matrix4;
          }

      };

      return matrix4Obj;

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

  var threeGeometry_min = createCommonjsModule(function (module) {
  /*!
   *  Three-Geometry - 为image3D.js设计开发的三维几何坐标运算库
   * git+https://github.com/clunch-contrib/Three-Geometry.git
   *
   * author 你好2007 < https://hai2007.gitee.io/sweethome >
   *
   * version 1.1.3
   *
   * Copyright (c) 2021-present hai2007 走一步，再走一步。
   * Released under the MIT license
   *
   * Date:Sat Jan 01 2022 00:00:06 GMT+0800 (中国标准时间)
   */
  (function(){function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function(obj){return typeof obj};}else {_typeof=function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};}return _typeof(obj)}var toString=Object.prototype.toString;function getType(value){if(value==null){return value===undefined?"[object Undefined]":"[object Null]"}return toString.call(value)}function _isNumber(value){return typeof value==="number"||value!==null&&_typeof(value)==="object"&&getType(value)==="[object Number]"}var isNumber=_isNumber;var circle={splitNum:function splitNum(precision,radius){var num=Math.ceil(Math.PI*2/Math.asin(precision/radius)*2);return isNaN(num)||num<12?12:num}};function rotate(cx,cy,deg,x,y){var cos=Math.cos(deg),sin=Math.sin(deg);return [(x-cx)*cos-(y-cy)*sin+cx,(x-cx)*sin+(y-cy)*cos+cy]}function prismHorizontal(x,y,z,radius,num){var points=[x,y,z,x+radius,y,z],deg=Math.PI*2/num;for(var i=0;i<num;i++){var point=rotate(x,z,deg*(i+1),x+radius,z);points.push(point[0],y,point[1]);}return points}function prismVertical(x,y,z,radius,height,num){var points=[x+radius,y,z,x+radius,y+height,z],deg=Math.PI*2/num;for(var i=0;i<num;i++){var point=rotate(x,z,deg*(i+1),x+radius,z);points.push(point[0],y,point[1],point[0],y+height,point[1]);}return points}function sphereFragment(cx,cy,cz,radius,num,index){var points=[cx,cy+radius,cz],deg=Math.PI*2/num,point;for(var i=1;i<num*.5;i++){point=rotate(cx,cy,deg*i,cx,cy+radius);var point1=rotate(cx,cz,deg*index,point[0],cz);points.push(point1[0],point[1],point1[1]);var point2=rotate(cx,cz,deg*(index+1),point[0],cz);points.push(point2[0],point[1],point2[1]);}points.push(cx,cy-radius,cz);return points}var ThreeGeometry=function ThreeGeometry(options){if(!isNumber(options.precision)||options<=0){throw new Error("options.precision should be an integer greater than zero")}var threeGeometry={cylinder:function cylinder(doback,x,y,z,radius,height){var num=circle.splitNum(options.precision,radius);threeGeometry.prism(doback,x,y,z,radius,height,num);return threeGeometry},prism:function prism(doback,x,y,z,radius,height,num){doback({points:prismHorizontal(x,y,z,radius,num),length:num+2,methods:"FanTriangle"});doback({points:prismHorizontal(x,y+height,z,radius,num),length:num+2,methods:"FanTriangle"});doback({points:prismVertical(x,y,z,radius,height,num),length:2*num+2,methods:"StripTriangle"});return threeGeometry},sphere:function sphere(doback,cx,cy,cz,radius){var num=circle.splitNum(options.precision,radius);for(var i=0;i<num;i++){doback({points:sphereFragment(cx,cy,cz,radius,num,i),length:num+1,methods:"StripTriangle"});}return threeGeometry}};return threeGeometry};if((_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=ThreeGeometry;}else {window.ThreeGeometry=ThreeGeometry;}})();
  });

  var Puly = /*#__PURE__*/function () {
    // 三维画笔核心
    // 几何体
    // 光照
    // 相机
    // 几何体
    function Puly(options) {
      _classCallCheck(this, Puly);

      _defineProperty(this, "__core", void 0);

      _defineProperty(this, "__geometry", void 0);

      _defineProperty(this, "__light", void 0);

      _defineProperty(this, "__camera", void 0);

      _defineProperty(this, "__ThreeGeometry", void 0);

      // 核心画笔
      this.__core = image3DCore(options.el);

      this.__core.shader("\n    attribute vec4 a_position;\n    uniform mat4 u_matrix;\n    void main(){\n        gl_Position=u_matrix * a_position;\n    }\n    ", "\n    precision mediump float;\n    uniform vec4 u_color;\n    void main(){\n        gl_FragColor=u_color;\n    }\n    "); // 几何体


      this.__geometry = [];
      this.__ThreeGeometry = threeGeometry_min({
        precision: 0.02
      }); // 光照

      this.__light = []; // 相机

      var size = xhtml.size(options.el);
      this.__camera = Matrix4(); // 相机应用压缩空间矩阵

      this.__camera.multiply([2 / size.width, 0, 0, 0, 0, 2 / size.height, 0, 0, 0, 0, 2 / (size.width > size.height ? size.width : size.height), 0, 0, 0, 0, 1]);
    }
    /**
     * -------------------------------
     * 几何相关
     * -------------------------------
    */


    _createClass(Puly, [{
      key: "geometry",
      value: function geometry(options) {
        this.__geometry.push(options);

        var index = this.__geometry.length - 1,
            _this = this;

        return {
          // 修改值
          setValue: function setValue(attrs) {
            for (var key in attrs) {
              _this.__geometry[index][key] = attrs[key];
            }
          }
        };
      }
      /**
       * -------------------------------
       * 相机相关
       * -------------------------------
      */

    }, {
      key: "rotate",
      value: function rotate(deg, a1, b1, c1, a2, b2, c2) {
        this.__camera.rotate(-1 * deg, a1, b1, c1, a2, b2, c2);

        return this;
      }
    }, {
      key: "scale",
      value: function scale(xTimes, yTimes, zTimes, cx, cy, cz) {
        this.__camera.scale(xTimes, yTimes, zTimes, cx, cy, cz);

        return this;
      }
    }, {
      key: "move",
      value: function move(dis, a, b, c) {
        this.__camera.move(-1 * dis, a, b, c);

        return this;
      }
      /**
       * -------------------------------
       * 光照相关
       * -------------------------------
      */
      // todo
      // 绘制

    }, {
      key: "draw",
      value: function draw() {
        var painter = this.__core.painter();

        var buffer = this.__core.buffer(); // 开启深度


        painter.openDeep(); // 设置相机

        this.__core.setUniformMatrix4fv('u_matrix', this.__camera.value()); // 一个个绘制几何体


        var _iterator = _createForOfIteratorHelper(this.__geometry),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _this$__ThreeGeometry;

            var geometry = _step.value;
            // 设置几何体的颜色
            var colorArray = formatColor(geometry.color);

            this.__core.setUniform4f('u_color', colorArray[0] / 255, colorArray[1] / 255, colorArray[2] / 255, colorArray[3]); // 准备好参数


            var args = [];

            switch (geometry.type) {
              case "cylinder":
                {
                  args = [geometry.x, geometry.y, geometry.z, geometry.radius, geometry.height];
                  break;
                }

              case "prism":
                {
                  args = [geometry.x, geometry.y, geometry.z, geometry.radius, geometry.height, geometry.num];
                  break;
                }

              case "sphere":
                {
                  args = [geometry.cx, geometry.cy, geometry.cz, geometry.radius];
                  break;
                }
            } // 启动绘制


            (_this$__ThreeGeometry = this.__ThreeGeometry)[geometry.type].apply(_this$__ThreeGeometry, [function (data) {
              // 通过缓冲区把数据传递给GPU
              buffer.write(new Float32Array(data.points)).use('a_position', 3, 3, 0); // 调用具体的方法绘制

              if (data.methods == 'StripTriangle') {
                painter.stripTriangles(0, data.length);
              } else if (data.methods == 'FanTriangle') {
                painter.fanTriangles(0, data.length);
              }
            }].concat(_toConsumableArray(args)));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }]);

    return Puly;
  }(); // 对外暴露调用接口


  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Puly;
  } else {
    window['Puly'] = Puly;
  }

}());
