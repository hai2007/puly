
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/api.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('56');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('57');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-43901798":""},[createElement('header',{"id":"fixed-top","data-quickpaper-43901798":""},["接口"]),createElement('h2',{"id":"fixed-registerTheme","data-quickpaper-43901798":""},["设置主题"]),createElement('p',{"data-quickpaper-43901798":""},["目前主题只包含颜色，后续会根据实际情况慢慢丰富："]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["// 设置好主题色↵Puly.registerTheme({↵    \"colors\": [\"#c12e34\", \"#e6b600\", \"#0098d9\", \"#2b821d\", \"#005eaa\", \"#339ca8\", \"#cda819\", \"#32a487\"]↵});"]),createElement('p',{"data-quickpaper-43901798":""},["上面的颜色个数可以是任意多个，值可以是任意合法的css颜色值。"]),createElement('h2',{"id":"fixed-registerChart","data-quickpaper-43901798":""},["自定义图表"]),createElement('p',{"data-quickpaper-43901798":""},["除了内置的图表，我们还支持个性化的自定义图表："]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["// 注册图表↵Puly.registerChart('图表名称', function (params, api) {↵↵    return {↵        geometry: []↵    };↵↵});"]),createElement('h3',{"id":"fixed-registerChart.params","data-quickpaper-43901798":""},["params"]),createElement('p',{"data-quickpaper-43901798":""},["包含用户设置的data、itemStyle等配置信息（经过内部一定的处理），简单的理解就是：包含了用户的意图。"]),createElement('h3',{"id":"fixed-registerChart.api","data-quickpaper-43901798":""},["api"]),createElement('p',{"data-quickpaper-43901798":""},["这是一个辅助对象，里面包含若干的方法可以供使用。"]),createElement('h4',{"id":"fixed-registerChart.api.color","data-quickpaper-43901798":""},["color"]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["api.color(index)"]),createElement('p',{"data-quickpaper-43901798":""},["从维护的主题中获取颜色，其中index表示颜色序号，需要是一个不小于0的整数。"]),createElement('h3',{"id":"fixed-registerChart.return","data-quickpaper-43901798":""},["返回值"]),createElement('p',{"data-quickpaper-43901798":""},["返回一个json，里面有一个字段",createElement('span',{"class":"warn","data-quickpaper-43901798":""},["geometry"]),"表示绘制的具体几何体坐标等信息，是一个数组，每个条目是一个json数据。"]),createElement('p',{"data-quickpaper-43901798":""},["有如下类型可选："]),createElement('h4',{"class":"item-cls","id":"fixed-registerChart.return.native","data-quickpaper-43901798":""},["原生"]),createElement('p',{"data-quickpaper-43901798":""},["也就是使用image3D的",createElement('a',{"href":"https://hai2007.gitee.io/image3d/index.html#/api?fixed=painter1","class":"link","target":"_blank","data-quickpaper-43901798":""},["普通画笔"]),"直接绘制，语法如下："]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["{↵    type: \"native\",↵    methods: \"绘制方法\",↵    points: 点集合，包含法向量,↵    color: 颜色↵}"]),createElement('p',{"data-quickpaper-43901798":""},["理论上来说，可以绘制任意的三维图形。"]),createElement('p',{"data-quickpaper-43901798":""},["比如绘制一个正方形："]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["{↵    type: \"native\",↵    methods: \"StripTriangle\",↵    points: [↵        1, 0, 1, 0, -1, 0,↵        1, 0, -1, 0, -1, 0,↵        -1, 0, 1, 0, -1, 0,↵        -1, 0, -1, 0, -1, 0↵    ],↵    color: \"pink\"↵}"]),createElement('h4',{"class":"item-cls","id":"fixed-registerChart.return.item","data-quickpaper-43901798":""},["条目"]),createElement('h4',{"id":"fixed-registerChart.return.item-cuboid","data-quickpaper-43901798":""},["立方条目"]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["{↵    type: \"item\",↵    name: \"cuboid\",↵↵    // 条目的长，一般可以和数据联系起来↵    length: number,↵↵    // 起点，可以写死0或者和数据联系起来↵    start: number,↵↵    // 底部中心，一般可以和数据中数组中的位置联系起来，比如用数组的下标↵    index: number,↵↵    // 小条目的大小，值应该是0～1之间，可以随便设置，当然，也可以和数据联系起来↵    size: number,↵↵    // 颜色，可以写死，或者从params中获取，或者像下面调用api.color方法获取↵    color: api.color(0)↵}"]),createElement('h4',{"id":"fixed-registerChart.return.item-lines","data-quickpaper-43901798":""},["线条组条目"]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["{↵    type: \"item\",↵    name: \"lines\",↵↵    // 一个二维数组，一个个点连起来就是线条↵    // 参考 ‘立方条’的index和length计算↵    points:Array,↵↵    // 颜色，可以写死，或者从params中获取，或者像下面调用api.color方法获取↵    color: api.color(0)↵}"]),createElement('h4',{"class":"item-cls","id":"fixed-registerChart.return.geometry","data-quickpaper-43901798":""},["几何体"]),createElement('p',{"data-quickpaper-43901798":""},["也就是常见的球体、长方体等几何的绘制，语法如下："]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["{↵    type: \"geometry\",↵↵    name: \"几何体名称\",↵↵    // 参数，不同的几何体参数不一样↵    params: Array,↵↵    // 颜色，可以写死，或者从params中获取，或者像下面调用api.color方法获取↵    color: api.color(0)↵}"]),createElement('h4',{"id":"fixed-registerChart.return.geometry-cylinder","data-quickpaper-43901798":""},["圆柱"]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["name:\"cylinder\",↵params:[x,y,z,radius,height]"]),createElement('h4',{"id":"fixed-registerChart.return.geometry-prism","data-quickpaper-43901798":""},["棱柱"]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["name:\"prism\",↵params:[x,y,z,radius,height,num]"]),createElement('h4',{"id":"fixed-registerChart.return.geometry-sphere","data-quickpaper-43901798":""},["球"]),createElement('pre',{"q-code":"","data-quickpaper-43901798":""},["name:\"sphere\",↵params:[cx,cy,cz,radius]"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/api.paper?QuickPaper&type=script&lang=js&hash=43901798
/*****************************************************************/
window.__etcpack__bundleSrc__['56']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/api.paper?QuickPaper&type=style&lang=css&hash=43901798
/*****************************************************************/
window.__etcpack__bundleSrc__['57']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n .item-cls[data-quickpaper-43901798]{\n\nfont-size: 16px;\n\ncolor: black;\n\nborder-bottom: 1px solid black;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
