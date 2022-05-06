
/*************************** [bundle] ****************************/
// Original file:./examples/bar_mult.html
/*****************************************************************/
window.__etcpack__bundleSrc__['50']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>柱状图 / 多维柱状图</title>\n    <script src=\"https://cdn.jsdelivr.net/npm/puly@1\"></script>\n    <style>\n        body {\n            margin: 0;\n            background-color: black;\n        }\n\n        #root {\n            width: 100vw;\n            height: 100vh;\n        }\n    </style>\n</head>\n\n<body>\n\n    <div id=\"root\"></div>\n    <script>\n\n        // 创建3d对象\n        var puly = new Puly(document.getElementById('root'));\n\n        // 设置意图\n        puly.setOption({\n            series: [{\n                data: [[120, 89, 200], [200, 99, 73], [150, -100, -109], [80, 70, 110]],\n                type: \"bar\"\n            }]\n        });\n\n    </script>\n\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}
