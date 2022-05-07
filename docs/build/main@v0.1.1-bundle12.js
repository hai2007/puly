
/*************************** [bundle] ****************************/
// Original file:./examples/k_simple.html
/*****************************************************************/
window.__etcpack__bundleSrc__['49']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>柱状图 / 简单K线图</title>\n    <script src=\"https://cdn.jsdelivr.net/npm/puly@1\"></script>\n    <style>\n        body {\n            margin: 0;\n            background-color: black;\n        }\n\n        #root {\n            width: 100vw;\n            height: 100vh;\n        }\n    </style>\n</head>\n\n<body>\n\n    <div id=\"root\"></div>\n    <script>\n\n        // 创建3d对象\n        var puly = new Puly(document.getElementById('root'));\n\n        // 设置意图\n        puly.setOption({\n            series: [{\n                data: [\n                    //  开、收、最低、最高\n                    [20, 34, 10, 38],\n                    [40, 35, 30, 50],\n                    [31, 38, 33, 44],\n                    [38, 15, 5, 42]\n                ],\n                type: \"candlestick\"\n            }]\n        });\n\n    </script>\n\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}
