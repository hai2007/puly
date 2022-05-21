
/*************************** [bundle] ****************************/
// Original file:./examples/bar_mult.html
/*****************************************************************/
window.__etcpack__bundleSrc__['50']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <title>柱状图 / 多维柱状图</title>\r\n    <script src=\"https://unpkg.com/puly@1\"></script>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background-color: black;\r\n        }\r\n\r\n        #root {\r\n            width: 100vw;\r\n            height: 100vh;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n\r\n    <div id=\"root\"></div>\r\n    <script>\r\n\r\n        // 创建3d对象\r\n        var puly = new Puly(document.getElementById('root'));\r\n\r\n        // 设置意图\r\n        puly.setOption({\r\n            series: [{\r\n                data: [[120, 89, 200], [200, 99, 73], [150, -100, -109], [80, 70, 110]],\r\n                type: \"bar\"\r\n            }]\r\n        });\r\n\r\n    </script>\r\n\r\n</body>\r\n\r\n</html>\r\n"
  
    return __etcpack__scope_bundle__;
}
