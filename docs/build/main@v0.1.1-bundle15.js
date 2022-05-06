
/*************************** [bundle] ****************************/
// Original file:./examples/custom_geometry.html
/*****************************************************************/
window.__etcpack__bundleSrc__['52']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>自定义 / 几何体</title>\n    <script src=\"https://cdn.jsdelivr.net/npm/puly@1\"></script>\n    <style>\n        body {\n            margin: 0;\n            background-color: black;\n        }\n\n        #root {\n            width: 100vw;\n            height: 100vh;\n        }\n    </style>\n</head>\n\n<body>\n\n    <div id=\"root\"></div>\n    <script>\n\n        Puly.registerChart('geometry', function (params, api) {\n\n            return {\n                geometry: [{\n                    type: \"geometry\",\n                    name: \"sphere\",\n                    params: [0, 0, 0, 0.5],\n                    color: api.color(0)\n                }, {\n                    type: \"geometry\",\n                    name: \"prism\",\n                    params: [0.75, 0, 0, 0.2, 0.3, 7],\n                    color: api.color(1)\n                }, {\n                    type: \"geometry\",\n                    name: \"cylinder\",\n                    params: [-0.75, 0, 0, 0.2, 0.3],\n                    color:api.color(2)\n                }]\n\n            }\n\n        });\n\n        // 创建3d对象\n        var puly = new Puly(document.getElementById('root'));\n\n        // 设置意图\n        puly.setOption({\n            series: [{\n                type: \"geometry\"\n            }]\n        });\n\n    </script>\n\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}
