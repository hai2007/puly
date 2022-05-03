
/*************************** [bundle] ****************************/
// Original file:./src/pages/example/index.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('38');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('40');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-8405ee88":""},[createElement('div',{"class":"nav","data-quickpaper-8405ee88":""},[createElement('h2',{"@click":"doScroll(\"bar\")","class":"bar","data-quickpaper-8405ee88":""},["柱状图"]),createElement('h2',{"@click":"doScroll(\"line\")","class":"line","data-quickpaper-8405ee88":""},["折线图"]),createElement('h2',{"@click":"doScroll(\"pie\")","class":"pie","data-quickpaper-8405ee88":""},["饼图"]),createElement('h2',{"@click":"doScroll(\"scatter\")","class":"scatter","data-quickpaper-8405ee88":""},["散点图"]),createElement('h2',{"@click":"doScroll(\"map\")","class":"map","data-quickpaper-8405ee88":""},["地图"]),createElement('h2',{"@click":"doScroll(\"candlestick\")","class":"candlestick","data-quickpaper-8405ee88":""},["K线图"]),createElement('h2',{"@click":"doScroll(\"radar\")","class":"radar","data-quickpaper-8405ee88":""},["雷达图"]),createElement('h2',{"@click":"doScroll(\"tree\")","class":"tree","data-quickpaper-8405ee88":""},["树图"]),createElement('h2',{"@click":"doScroll(\"sankey\")","class":"sankey","data-quickpaper-8405ee88":""},["桑基图"]),createElement('h2',{"@click":"doScroll(\"gauge\")","class":"gauge","data-quickpaper-8405ee88":""},["仪表盘"]),createElement('h2',{"@click":"doScroll(\"zoom\")","class":"zoom","data-quickpaper-8405ee88":""},["数据区域缩放"]),createElement('h2',{"@click":"doScroll(\"drag\")","class":"drag","data-quickpaper-8405ee88":""},["拖拽"])]),createElement('div',{"id":"root-view","class":"view","data-quickpaper-8405ee88":""},[createElement('h2',{"id":"fixed-bar","data-quickpaper-8405ee88":""},["柱状图",createElement('span',{"data-quickpaper-8405ee88":""},["bar"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[createElement('li',{"class":"bar_simple","@click":"openExample(\"bar_simple\")","data-quickpaper-8405ee88":""},["简单柱状图"])]),createElement('h2',{"id":"fixed-line","data-quickpaper-8405ee88":""},["折线图",createElement('span',{"data-quickpaper-8405ee88":""},["line"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-pie","data-quickpaper-8405ee88":""},["饼图",createElement('span',{"data-quickpaper-8405ee88":""},["pie"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-scatter","data-quickpaper-8405ee88":""},["散点图",createElement('span',{"data-quickpaper-8405ee88":""},["scatter"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-map","data-quickpaper-8405ee88":""},["地图",createElement('span',{"data-quickpaper-8405ee88":""},["map"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-candlestick","data-quickpaper-8405ee88":""},["K线图",createElement('span',{"data-quickpaper-8405ee88":""},["candlestick"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-radar","data-quickpaper-8405ee88":""},["雷达图",createElement('span',{"data-quickpaper-8405ee88":""},["radar"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-tree","data-quickpaper-8405ee88":""},["树图",createElement('span',{"data-quickpaper-8405ee88":""},["tree"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-sankey","data-quickpaper-8405ee88":""},["桑基图",createElement('span',{"data-quickpaper-8405ee88":""},["sankey"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-gauge","data-quickpaper-8405ee88":""},["仪表盘",createElement('span',{"data-quickpaper-8405ee88":""},["gauge"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-zoom","data-quickpaper-8405ee88":""},["数据区域缩放",createElement('span',{"data-quickpaper-8405ee88":""},["zoom"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[]),createElement('h2',{"id":"fixed-drag","data-quickpaper-8405ee88":""},["拖拽",createElement('span',{"data-quickpaper-8405ee88":""},["drag"])]),createElement('ul',{"data-quickpaper-8405ee88":""},[])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/example/index.paper?QuickPaper&type=script&lang=js&hash=8405ee88
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('39');
var fixedScroll =__etcpack__scope_args__.default;

    __etcpack__scope_bundle__.default= {
        mounted() {
            fixedScroll(this.$urlFormat(window.location.href).params.fixed || "bar", 100);
        },
        methods: {
            openExample(pagename) {

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
// Original file:./src/Service/fixedScroll.js
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');
var animation =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (fixed, overValue) {
  overValue = overValue || 60;
  var element = document.getElementById('root-view');

  if (fixed) {
    // 获取滚动调整结点
    var fixedDom = document.getElementById('fixed-' + fixed);

    if (fixedDom) {
      var offsetTop = fixedDom.offsetTop - overValue;
      var currentScrollTop = element.scrollTop || 0;
      animation(function (deep) {
        element.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
      }, 500, function () {
        element.scrollTop = offsetTop;
      });
    }
  } else {
    element.scrollTop = 0;
  }
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/example/index.paper?QuickPaper&type=style&lang=css&hash=8405ee88
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper][data-quickpaper-8405ee88]{\n\nwhite-space: nowrap;\n\n}\n\n [quickpaper]>div[data-quickpaper-8405ee88]{\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nwhite-space: normal;\n\nheight: calc(100vh - 74px);\n\noverflow: auto;\n\n}\n\n [quickpaper]>div.nav[data-quickpaper-8405ee88]{\n\nwidth: 190px;\n\npadding: 10px 0;\n\n}\n\n [quickpaper]>div.nav>h2[data-quickpaper-8405ee88]{\n\npadding: 10px 0 10px 50px;\n\ndisplay: block;\n\ntext-decoration: none;\n\ncolor: #6e7079;\n\nfont-size: 14px;\n\nline-height: 20px;\n\nbackground-size: 20px auto;\n\nbackground-position: 20px center;\n\nbackground-repeat: no-repeat;\n\ncursor: pointer;\n\n}\n\n [quickpaper]>div.nav>h2[data-quickpaper-8405ee88]:hover{\n\nborder-right: 4px solid #5067a2;\n\n}\n\n [quickpaper]>div.nav>h2.line[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/line.svg');\n\n}\n\n [quickpaper]>div.nav>h2.bar[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/bar.svg');\n\n}\n\n [quickpaper]>div.nav>h2.pie[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/pie.svg');\n\n}\n\n [quickpaper]>div.nav>h2.scatter[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/scatter.svg');\n\n}\n\n [quickpaper]>div.nav>h2.map[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/map.svg');\n\n}\n\n [quickpaper]>div.nav>h2.candlestick[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/candlestick.svg');\n\n}\n\n [quickpaper]>div.nav>h2.radar[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/radar.svg');\n\n}\n\n [quickpaper]>div.nav>h2.tree[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/tree.svg');\n\n}\n\n [quickpaper]>div.nav>h2.sankey[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/sankey.svg');\n\n}\n\n [quickpaper]>div.nav>h2.gauge[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/gauge.svg');\n\n}\n\n [quickpaper]>div.nav>h2.zoom[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/zoom.svg');\n\n}\n\n [quickpaper]>div.nav>h2.drag[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/drag.svg');\n\n}\n\n [quickpaper]>div.view[data-quickpaper-8405ee88]{\n\npadding: 10px 50px;\n\nbackground-color: #f3f4fa;\n\nwidth: calc(100vw - 190px);\n\n}\n\n [quickpaper]>div.view>h2[data-quickpaper-8405ee88]{\n\nmargin-top: 40px;\n\nmargin-bottom: 20px;\n\npadding-bottom: 10px;\n\nborder-bottom: 1px solid #e1e5f2;\n\nfont-weight: normal;\n\ncolor: #464646;\n\nfont-size: 20px;\n\n}\n\n [quickpaper]>div.view>h2>span[data-quickpaper-8405ee88]{\n\nfont-size: 16px;\n\npadding-left: 5px;\n\ncolor: #949cb1;\n\nfont-weight: 200;\n\n}\n\n [quickpaper]>div.view>ul>li[data-quickpaper-8405ee88]{\n\ndisplay: inline-block;\n\nfont-size: 14px;\n\npadding-top: 150px;\n\nwidth: 200px;\n\nmargin: 10px;\n\ntext-align: center;\n\nbackground-size: 90% auto;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center top;\n\ncursor: pointer;\n\n}\n\n [quickpaper]>div.view>ul>li.bar_simple[data-quickpaper-8405ee88]{\n\nbackground-image: url('./image/bar_simple.png');\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
