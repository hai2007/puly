
/*************************** [bundle] ****************************/
// Original file:./src/pages/example/index.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('43');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('53');


    script.render=function(createElement){

        return createElement('div',{"class":"example-view","quickpaper":"","data-quickpaper-8405ee88":""},[createElement('div',{"class":"nav","data-quickpaper-8405ee88":""},[createElement('h2',{"@click":"doScroll(\"bar\")","class":"bar","data-quickpaper-8405ee88":""},["柱状图"]),createElement('h2',{"@click":"doScroll(\"candlestick\")","class":"candlestick","data-quickpaper-8405ee88":""},["K线图"]),createElement('h2',{"@click":"doScroll(\"line\")","class":"line","data-quickpaper-8405ee88":""},["折线图"]),createElement('h2',{"@click":"doScroll(\"custom\")","class":"custom","data-quickpaper-8405ee88":""},["自定义"])]),createElement('div',{"id":"root-view","class":"view","data-quickpaper-8405ee88":""},[createElement('h2',{"id":"fixed-bar","data-quickpaper-8405ee88":""},["柱状图",createElement('span',{"data-quickpaper-8405ee88":""},["bar"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[createElement('li',{"class":"bar_simple","@click":"openExample(\"bar_simple\")","data-quickpaper-8405ee88":""},["简单柱状图"]),createElement('li',{"class":"bar_colors","@click":"openExample(\"bar_colors\")","data-quickpaper-8405ee88":""},["多色柱状图"]),createElement('li',{"class":"bar_mult","@click":"openExample(\"bar_mult\")","data-quickpaper-8405ee88":""},["多维柱状图"])]),createElement('h2',{"id":"fixed-candlestick","data-quickpaper-8405ee88":""},["K线图",createElement('span',{"data-quickpaper-8405ee88":""},["candlestick"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[createElement('li',{"class":"k_simple","@click":"openExample(\"k_simple\")","data-quickpaper-8405ee88":""},["简单K线图"])]),createElement('h2',{"id":"fixed-line","data-quickpaper-8405ee88":""},["折线图",createElement('span',{"data-quickpaper-8405ee88":""},["line"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[createElement('li',{"class":"line_bar","@click":"openExample(\"line_bar\")","data-quickpaper-8405ee88":""},["柱折图"]),createElement('li',{"class":"line_bar_middle","@click":"openExample(\"line_bar_middle\")","data-quickpaper-8405ee88":""},["居中柱折图"])]),createElement('h2',{"id":"fixed-custom","data-quickpaper-8405ee88":""},["自定义",createElement('span',{"data-quickpaper-8405ee88":""},["custom"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[createElement('li',{"class":"custom_logo","@click":"openExample(\"custom_logo\")","data-quickpaper-8405ee88":""},["3D图标"]),createElement('li',{"class":"custom_geometry","@click":"openExample(\"custom_geometry\")","data-quickpaper-8405ee88":""},["几何体"])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/example/index.paper?QuickPaper&type=script&lang=js&hash=8405ee88
/*****************************************************************/
window.__etcpack__bundleSrc__['43']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');
var fixedScroll =__etcpack__scope_args__.default;

    __etcpack__scope_args__=window.__etcpack__getBundle('44');
var lazyLoad =__etcpack__scope_args__.default;

    __etcpack__scope_args__=window.__etcpack__getBundle('19');
var xhtml =__etcpack__scope_args__.default;


    __etcpack__scope_bundle__.default= {
        mounted() {
            fixedScroll(this.$urlFormat(window.location.href).params.fixed || "bar", 100);
        },
        methods: {
            openExample(pagename) {
                lazyLoad[pagename]().then(data => {
                    localStorage.setItem('hai2007-sweethome-editor-html-code', data.default);
                    this.$loadPage("/SweetHome/#/editor");
                })
            },
            doScroll(fixedName) {
                window.location.href = "#/main/example?fixed=" + fixedName;
                fixedScroll(fixedName, 100);
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./examples/lazy-load.js
/*****************************************************************/
window.__etcpack__bundleSrc__['44']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
  bar_simple: function bar_simple() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle8.js','45');
  },
  bar_colors: function bar_colors() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle9.js','46');
  },
  custom_logo: function custom_logo() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle10.js','47');
  },
  line_bar: function line_bar() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle11.js','48');
  },
  k_simple: function k_simple() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle12.js','49');
  },
  bar_mult: function bar_mult() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle13.js','50');
  },
  line_bar_middle: function line_bar_middle() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle14.js','51');
  },
  custom_geometry: function custom_geometry() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.2-bundle15.js','52');
  }
};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/example/index.paper?QuickPaper&type=style&lang=css&hash=8405ee88
/*****************************************************************/
window.__etcpack__bundleSrc__['53']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper].example-view[data-quickpaper-8405ee88]{\n\nwhite-space: nowrap;\n\noverflow: hidden;\n\n}\n\n [quickpaper].example-view>div[data-quickpaper-8405ee88]{\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nwhite-space: normal;\n\nheight: calc(100vh - 74px);\n\noverflow: auto;\n\n}\n\n [quickpaper].example-view>div.nav[data-quickpaper-8405ee88]{\n\nwidth: 190px;\n\npadding: 10px 0;\n\n}\n\n [quickpaper].example-view>div.nav>h2[data-quickpaper-8405ee88]{\n\npadding: 10px 0 10px 50px;\n\ndisplay: block;\n\ntext-decoration: none;\n\ncolor: white;\n\nfont-size: 14px;\n\nline-height: 20px;\n\nbackground-size: 20px auto;\n\nbackground-position: 20px center;\n\nbackground-repeat: no-repeat;\n\ncursor: pointer;\n\n}\n\n [quickpaper].example-view>div.nav>h2[data-quickpaper-8405ee88]:hover{\n\nborder-right: 4px solid #5067a2;\n\n}\n\n [quickpaper].example-view>div.nav>h2.line[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/line.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.bar[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/bar.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.pie[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/pie.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.scatter[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/scatter.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.map[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/map.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.candlestick[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/candlestick.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.radar[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/radar.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.tree[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/tree.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.sankey[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/sankey.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.gauge[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/gauge.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.zoom[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/zoom.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.drag[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/drag.svg');\n\n}\n\n [quickpaper].example-view>div.nav>h2.custom[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/custom.svg');\n\n}\n\n [quickpaper].example-view>div.view[data-quickpaper-8405ee88]{\n\npadding: 10px 50px;\n\nbackground-color: #f3f4fa;\n\nwidth: calc(100vw - 190px);\n\n}\n\n [quickpaper].example-view>div.view>h2[data-quickpaper-8405ee88]{\n\nmargin-top: 40px;\n\nmargin-bottom: 20px;\n\npadding-bottom: 10px;\n\nborder-bottom: 1px solid #e1e5f2;\n\nfont-weight: normal;\n\ncolor: #464646;\n\nfont-size: 20px;\n\n}\n\n [quickpaper].example-view>div.view>h2>span[data-quickpaper-8405ee88]{\n\nfont-size: 16px;\n\npadding-left: 5px;\n\ncolor: #949cb1;\n\nfont-weight: 200;\n\n}\n\n [quickpaper].example-view>div.view>ul>li[data-quickpaper-8405ee88]{\n\ndisplay: inline-block;\n\nfont-size: 14px;\n\npadding-top: 150px;\n\nwidth: 200px;\n\nmargin: 10px;\n\ntext-align: center;\n\nbackground-size: 90% auto;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center top;\n\ncursor: pointer;\n\n}\n\n [quickpaper].example-view>div.view>ul>li.bar_simple[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/bar_simple.png');\n\n}\n\n [quickpaper].example-view>div.view>ul>li.bar_colors[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/bar_colors.png');\n\n}\n\n [quickpaper].example-view>div.view>ul>li.custom_logo[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/custom_logo.png');\n\n}\n\n [quickpaper].example-view>div.view>ul>li.line_bar[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/line_bar.png');\n\n}\n\n [quickpaper].example-view>div.view>ul>li.k_simple[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/k_simple.png');\n\n}\n\n [quickpaper].example-view>div.view>ul>li.bar_mult[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/bar_mult.png');\n\n}\n\n [quickpaper].example-view>div.view>ul>li.line_bar_middle[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/line_bar_middle.png');\n\n}\n\n [quickpaper].example-view>div.view>ul>li.custom_geometry[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/custom_geometry.png');\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
