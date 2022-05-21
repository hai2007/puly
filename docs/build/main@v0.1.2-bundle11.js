
/*************************** [bundle] ****************************/
// Original file:./examples/line_bar.html
/*****************************************************************/
window.__etcpack__bundleSrc__['48']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <title>柱状图 / 柱折图</title>\r\n    <script src=\"https://unpkg.com/puly@1\"></script>\r\n    <style>\r\n        body {\r\n            margin: 0;\r\n            background-color: black;\r\n        }\r\n\r\n        #root {\r\n            width: 100vw;\r\n            height: 100vh;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n\r\n    <div id=\"root\"></div>\r\n    <script>\r\n\r\n        // 创建3d对象\r\n        var puly = new Puly(document.getElementById('root'));\r\n\r\n        // 设置意图\r\n        puly.setOption({\r\n            data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130],\r\n            series: [{\r\n                type: \"line\"\r\n            }, {\r\n                type: \"bar\",\r\n                itemStyle: {\r\n                    colors: true\r\n                }\r\n            }]\r\n        });\r\n\r\n    </script>\r\n\r\n</body>\r\n\r\n</html>\r\n"
  
    return __etcpack__scope_bundle__;
}
