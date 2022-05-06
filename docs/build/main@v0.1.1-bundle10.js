
/*************************** [bundle] ****************************/
// Original file:./examples/custom_logo.html
/*****************************************************************/
window.__etcpack__bundleSrc__['47']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>自定义 / 3D图标</title>\n    <script src=\"https://cdn.jsdelivr.net/npm/puly@1\"></script>\n    <style>\n        body {\n            margin: 0;\n            background-color: black;\n        }\n\n        #root {\n            width: 100vw;\n            height: 100vh;\n        }\n    </style>\n</head>\n\n<body>\n\n    <div id=\"root\"></div>\n    <script>\n\n        Puly.registerChart('logo', function (params, api) {\n\n            return {\n                geometry: [\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0, 0.6, 0, 0, 1, 0,\n                            0.9, 0.6, 0, 0, 1, 0,\n                            0, 0.6, 0.9, 0, 1, 0,\n                            0.9, 0.6, 0.9, 0, 1, 0\n                        ],\n                        color: \"#e875ed\"\n                    }, {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0, 0.3, 0, 0, 1, 0,\n                            0.9, 0.3, 0, 0, 1, 0,\n                            0, 0.3, 0.9, 0, 1, 0,\n                            0.9, 0.3, 0.9, 0, 1, 0\n                        ],\n                        color: \"white\"\n                    }, {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0, 0.6, 0.9, 0, 0, 1,\n                            0.9, 0.6, 0.9, 0, 0, 1,\n                            0, 0.3, 0.9, 0, 0, 1,\n                            0.9, 0.3, 0.9, 0, 0, 1\n                        ],\n                        color: \"#60bd65\"\n                    }, {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0, 0.6, 0, 0, 0, -1,\n                            0.9, 0.6, 0, 0, 0, -1,\n                            0, 0.3, 0, 0, 0, -1,\n                            0.9, 0.3, 0, 0, 0, -1\n                        ],\n                        color: \"white\"\n                    }, {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0, 0.3, 0, -1, 0, 0,\n                            0, 0.6, 0, -1, 0, 0,\n                            0, 0.3, 0.9, -1, 0, 0,\n                            0, 0.6, 0.9, -1, 0, 0,\n                        ],\n                        color: \"white\"\n                    }, {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.9, 0.3, 0, -1, 0, 0,\n                            0.9, 0.6, 0, -1, 0, 0,\n                            0.9, 0.3, 0.9, -1, 0, 0,\n                            0.9, 0.6, 0.9, -1, 0, 0,\n                        ],\n                        color: \"#f8c85a\"\n                    }, {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.6, 0.6, 0, -1, 0, 0,\n                            0.6, 0.9, 0, -1, 0, 0,\n                            0.6, 0.6, 0.6, -1, 0, 0,\n                            0.6, 0.9, 0.6, -1, 0, 0,\n                        ],\n                        color: \"#f8c85a\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.3, 0.6, 0, -1, 0, 0,\n                            0.3, 0.9, 0, -1, 0, 0,\n                            0.3, 0.6, 0.3, -1, 0, 0,\n                            0.3, 0.9, 0.3, -1, 0, 0,\n                        ],\n                        color: \"white\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0, 0.9, 0.6, 0, 0, 1,\n                            0.6, 0.9, 0.6, 0, 0, 1,\n                            0, 0.6, 0.6, 0, 0, 1,\n                            0.6, 0.6, 0.6, 0, 0, 1\n                        ],\n                        color: \"#60bd65\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0, 0.9, 0.3, 0, 0, -1,\n                            0.3, 0.9, 0.3, 0, 0, -1,\n                            0, 0.6, 0.3, 0, 0, -1,\n                            0.3, 0.6, 0.3, 0, 0, -1\n                        ],\n                        color: \"white\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.3, 0.9, 0, 0, 0, -1,\n                            0.6, 0.9, 0, 0, 0, -1,\n                            0.3, 0.6, 0, 0, 0, -1,\n                            0.6, 0.6, 0, 0, 0, -1\n                        ],\n                        color: \"white\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0, 0.6, 0.3, -1, 0, 0,\n                            0, 0.9, 0.3, -1, 0, 0,\n                            0, 0.6, 0.6, -1, 0, 0,\n                            0, 0.9, 0.6, -1, 0, 0,\n                        ],\n                        color: \"white\"\n                    }, {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0, 0.9, 0.6, 0, 1, 0,\n                            0, 0.9, 0.3, 0, 1, 0,\n                            0.6, 0.9, 0.6, 0, 1, 0,\n                            0.3, 0.9, 0.3, 0, 1, 0,\n                            0.6, 0.9, 0, 0, 1, 0,\n                            0.3, 0.9, 0, 0, 1, 0\n                        ],\n                        color: \"#e875ed\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.3, 0.3, 0.9, 0, 0, 1,\n                            0.6, 0.3, 0.9, 0, 0, 1,\n                            0.3, 0, 0.9, 0, 0, 1,\n                            0.6, 0, 0.9, 0, 0, 1\n                        ],\n                        color: \"#60bd65\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.6, 0.3, 0.6, 0, 0, 1,\n                            0.9, 0.3, 0.6, 0, 0, 1,\n                            0.6, 0, 0.6, 0, 0, 1,\n                            0.9, 0, 0.6, 0, 0, 1\n                        ],\n                        color: \"#60bd65\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.9, 0.3, 0.3, 1, 0, 0,\n                            0.9, 0.3, 0.6, 1, 0, 0,\n                            0.9, 0, 0.3, 0, 1, 0,\n                            0.9, 0, 0.6, 0, 1, 0\n                        ],\n                        color: \"#f8c85a\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.6, 0.3, 0.6, 1, 0, 0,\n                            0.6, 0.3, 0.9, 1, 0, 0,\n                            0.6, 0, 0.6, 0, 1, 0,\n                            0.6, 0, 0.9, 0, 1, 0\n                        ],\n                        color: \"#f8c85a\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.3, 0.3, 0.3, -1, 0, 0,\n                            0.3, 0.3, 0.9, -1, 0, 0,\n                            0.3, 0, 0.3, 0, -1, 0,\n                            0.3, 0, 0.9, 0, -1, 0\n                        ],\n                        color: \"white\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.3, 0.3, 0.3, 0, 0, -1,\n                            0.9, 0.3, 0.3, 0, 0, -1,\n                            0.3, 0, 0.3, 0, 0, -1,\n                            0.9, 0, 0.3, 0, 0, -1\n                        ],\n                        color: \"white\"\n                    },\n                    {\n                        type: \"native\",\n                        methods: \"StripTriangle\",\n                        points: [\n                            0.3, 0, 0.9, 0, -1, 0,\n                            0.6, 0, 0.9, 0, -1, 0,\n                            0.3, 0, 0.3, 0, -1, 0,\n                            0.6, 0, 0.6, 0, -1, 0,\n                            0.9, 0, 0.3, 0, -1, 0,\n                            0.9, 0, 0.6, 0, -1, 0,\n                        ],\n                        color: \"white\"\n                    },\n\n                ]\n            }\n\n        });\n\n        // 创建3d对象\n        var puly = new Puly(document.getElementById('root'));\n\n        // 设置意图\n        puly.setOption({\n            series: [{\n                type: \"logo\"\n            }]\n        });\n\n    </script>\n\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}