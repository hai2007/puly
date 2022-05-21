
/*************************** [bundle] ****************************/
// Original file:./examples/k_simple.html
/*****************************************************************/
window.__etcpack__bundleSrc__['49']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <title>柱状图 / 简单K线图</title>\r\n    <script src=\"https://unpkg.com/puly@1\"></script>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background-color: black;\r\n        }\r\n\r\n        #root {\r\n            width: 100vw;\r\n            height: 100vh;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n\r\n    <div id=\"root\"></div>\r\n    <script>\r\n\r\n        // 创建3d对象\r\n        var puly = new Puly(document.getElementById('root'));\r\n\r\n        // 设置意图\r\n        puly.setOption({\r\n            series: [{\r\n                data: [\r\n                    //  开、收、最低、最高\r\n                    [20, 34, 10, 38],\r\n                    [40, 35, 30, 50],\r\n                    [31, 38, 33, 44],\r\n                    [38, 15, 5, 42]\r\n                ],\r\n                type: \"candlestick\"\r\n            }]\r\n        });\r\n\r\n    </script>\r\n\r\n</body>\r\n\r\n</html>\r\n"
  
    return __etcpack__scope_bundle__;
}
