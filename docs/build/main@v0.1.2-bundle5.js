
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/install.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('54');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('55');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-1a07c616":""},[createElement('header',{"id":"fixed-top","data-quickpaper-1a07c616":""},["安装&使用"]),createElement('h2',{"id":"fixed-install","data-quickpaper-1a07c616":""},["安装并引入"]),createElement('p',{"data-quickpaper-1a07c616":""},["首先你需要通过命令行安装，就像这样："]),createElement('pre',{"q-code":"","data-quickpaper-1a07c616":""},["npm install --save puly"]),createElement('p',{"data-quickpaper-1a07c616":""},["安装好了以后，直接引入即可："]),createElement('pre',{"q-code":"","data-quickpaper-1a07c616":""},["import Puly from 'puly';"]),createElement('p',{"data-quickpaper-1a07c616":""},["或"]),createElement('pre',{"q-code":"","data-quickpaper-1a07c616":""},["let Puly = require('puly');"]),createElement('h2',{"id":"fixed-use","data-quickpaper-1a07c616":""},["使用"]),createElement('p',{"data-quickpaper-1a07c616":""},["你需要准备好一个绘图的区域，比如："]),createElement('pre',{"q-code":"html","data-quickpaper-1a07c616":""},["<div id=\"root\" style=\"width:400px;height:400px;\"></div>"]),createElement('p',{"data-quickpaper-1a07c616":""},["然后我们拿绘制一个柱状图为例："]),createElement('pre',{"q-code":"","data-quickpaper-1a07c616":""},["// 创建3d对象↵var puly = new Puly(document.getElementById('root'));↵↵// 设置意图↵puly.setOption({↵    series: [{↵        data: [120, 200, 150, 80, 70, 110, 130],↵        type: \"bar\"↵    }]↵});"]),createElement('p',{"data-quickpaper-1a07c616":""},["下面是运行的截图："]),createElement('div',{"class":"img-bar","data-quickpaper-1a07c616":""},[]),createElement('p',{"data-quickpaper-1a07c616":""},["当然，一方面",createElement('span',{"class":"warn","data-quickpaper-1a07c616":""},["Puly"]),"在创建前可以设置一些内容，比如主题、自定义图表等，具体的请去",createElement('a',{"href":"#/main/api/api?fixed=top","target":"_blank","class":"link","data-quickpaper-1a07c616":""},["接口"]),"一节中查看。"]),createElement('p',{"data-quickpaper-1a07c616":""},["另一方面，",createElement('span',{"class":"warn","data-quickpaper-1a07c616":""},["setOption"]),"可配置的内容比较多，请去",createElement('a',{"href":"#/main/api/option?fixed=top","target":"_blank","class":"link","data-quickpaper-1a07c616":""},["配置项"]),"一节中查看。"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/install.paper?QuickPaper&type=script&lang=js&hash=1a07c616
/*****************************************************************/
window.__etcpack__bundleSrc__['54']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/install.paper?QuickPaper&type=style&lang=css&hash=1a07c616
/*****************************************************************/
window.__etcpack__bundleSrc__['55']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n .img-bar[data-quickpaper-1a07c616]{\n\nbackground-image: url('./image/bar_simple.png');\n\nheight: 150px;\n\nwidth: 200px;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
