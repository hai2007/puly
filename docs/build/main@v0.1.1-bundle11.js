
/*************************** [bundle] ****************************/
// Original file:./examples/line_bar.html
/*****************************************************************/
window.__etcpack__bundleSrc__['48']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>柱状图 / 柱折图</title>\n    <script src=\"https://cdn.jsdelivr.net/npm/puly@1\"></script>\n    <style>\n        body {\n            margin: 0;\n            background-color: black;\n        }\n\n        #root {\n            width: 100vw;\n            height: 100vh;\n        }\n    </style>\n</head>\n\n<body>\n\n    <div id=\"root\"></div>\n    <script>\n\n        // 创建3d对象\n        var puly = new Puly(document.getElementById('root'));\n\n        // 设置意图\n        puly.setOption({\n            data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130],\n            series: [{\n                type: \"line\"\n            }, {\n                type: \"bar\",\n                itemStyle: {\n                    colors: true\n                }\n            }]\n        });\n\n    </script>\n\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}
