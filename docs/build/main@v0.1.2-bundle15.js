
/*************************** [bundle] ****************************/
// Original file:./examples/custom_geometry.html
/*****************************************************************/
window.__etcpack__bundleSrc__['52']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <title>自定义 / 几何体</title>\r\n    <script src=\"https://unpkg.com/puly@1\"></script>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background-color: black;\r\n        }\r\n\r\n        #root {\r\n            width: 100vw;\r\n            height: 100vh;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n\r\n    <div id=\"root\"></div>\r\n    <script>\r\n\r\n        Puly.registerChart('geometry', function (params, api) {\r\n\r\n            return {\r\n                geometry: [{\r\n                    type: \"geometry\",\r\n                    name: \"sphere\",\r\n                    params: [0, 0, 0, 0.5],\r\n                    color: api.color(0)\r\n                }, {\r\n                    type: \"geometry\",\r\n                    name: \"prism\",\r\n                    params: [0.75, 0, 0, 0.2, 0.3, 7],\r\n                    color: api.color(1)\r\n                }, {\r\n                    type: \"geometry\",\r\n                    name: \"cylinder\",\r\n                    params: [-0.75, 0, 0, 0.2, 0.3],\r\n                    color:api.color(2)\r\n                }]\r\n\r\n            }\r\n\r\n        });\r\n\r\n        // 创建3d对象\r\n        var puly = new Puly(document.getElementById('root'));\r\n\r\n        // 设置意图\r\n        puly.setOption({\r\n            series: [{\r\n                type: \"geometry\"\r\n            }]\r\n        });\r\n\r\n    </script>\r\n\r\n</body>\r\n\r\n</html>\r\n"
  
    return __etcpack__scope_bundle__;
}
