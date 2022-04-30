
/*************************** [bundle] ****************************/
// Original file:./src/pages/index.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('26');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('33');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-48e12a3e":""},[createElement('header',{"data-quickpaper-48e12a3e":""},[createElement('h2',{"data-quickpaper-48e12a3e":""},["Puly"]),createElement('ul',{"data-quickpaper-48e12a3e":""},[createElement('li',{":active":"flag=='home'?'yes':'no'","@click":"loadpage('home')","data-quickpaper-48e12a3e":""},["首页"]),createElement('li',{":active":"flag=='api'?'yes':'no'","@click":"loadpage('api')","data-quickpaper-48e12a3e":""},["文档"]),createElement('li',{":active":"flag=='example'?'yes':'no'","@click":"loadpage('example')","data-quickpaper-48e12a3e":""},["例子"])]),createElement('div',{"data-quickpaper-48e12a3e":""},[createElement('a',{"class":"normal","href":"https://github.com/clunch-contrib","target":"_blank","data-quickpaper-48e12a3e":""},["开源社区"]),createElement('ui-search',{"data-quickpaper-48e12a3e":""},[]),createElement('a',{"class":"github","href":"https://github.com/hai2007/puly","target":"_blank","data-quickpaper-48e12a3e":""},["github"])])]),createElement('component',{":is":"page","data-quickpaper-48e12a3e":""},[])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/index.paper?QuickPaper&type=script&lang=js&hash=48e12a3e
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('27');
var uiSearch =__etcpack__scope_args__.default;



    let pages = {
        home: () => window.__etcpack__getLazyBundle('./build/main@v0.1.0-bundle2.js','30'),
        api: () => window.__etcpack__getLazyBundle('./build/main@v0.1.0-bundle3.js','31'),
        example: () => window.__etcpack__getLazyBundle('./build/main@v0.1.0-bundle4.js','32')
    };

    __etcpack__scope_bundle__.default= {
        data() {
            return {
                page: null,
                flag: ""
            };
        },
        mounted() {
            let routers = this.$urlFormat(window.location.href).router;
            this.loadpage(routers[1] in pages ? routers[1] : "home");

        },
        methods: {
            loadpage(url) {
                pages[url]().then(data => {
                    this.page = data.default;
                    this.flag = url;
                });
            }
        },
        component: {
            uiSearch
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/components/ui-search.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('28');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('29');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-04c380ac":""},[createElement('input',{"placeholder":"输入内容后回车查询","@keydown":"goSearch","q-model":"wd","data-quickpaper-04c380ac":""},[])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/components/ui-search.paper?QuickPaper&type=script&lang=js&hash=04c380ac
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
        data() {
            return {
                wd: ""
            };
        },
        methods: {
            goSearch(event) {

                // 如果是回车就带着数据跳转到查询界面
                if (event.keyCode == 13) this.loadPage("https://hai2007.gitee.io/sweethome/#/search?wd=" + encodeURIComponent(this.wd));

            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/components/ui-search.paper?QuickPaper&type=style&lang=css&hash=04c380ac
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper][data-quickpaper-04c380ac]{\n\ndisplay: inline-block;\n\n}\n\n input[data-quickpaper-04c380ac]{\n\nheight: 30px;\n\nborder: none;\n\noutline: none;\n\npadding: 0 10px;\n\npadding-right: 35px;\n\nbackground-image: url('../src/assets/search.svg');\n\nbackground-position: center right;\n\nbackground-repeat: no-repeat;\n\nborder-radius: 3px;\n\nbackground-color: rgb(243 240 240);\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/index.paper?QuickPaper&type=style&lang=css&hash=48e12a3e
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper] header[data-quickpaper-48e12a3e]{\n\ncolor: #74b1be;\n\nbackground-color: #2f3241;\n\nborder-bottom: 1px solid #e8e8e8;\n\nborder-bottom-color: #1a1b23;\n\nline-height: 70px;\n\npadding: 0 20px;\n\n}\n\n [quickpaper] header h2[data-quickpaper-48e12a3e]{\n\ndisplay: inline-block;\n\npadding-left: 50px;\n\nbackground-image: url('./src/assets/logo.png');\n\nbackground-size: auto 70%;\n\nbackground-repeat: no-repeat;\n\nbackground-position: left center;\n\n}\n\n [quickpaper] header>ul[data-quickpaper-48e12a3e]{\n\ndisplay: inline-block;\n\n}\n\n [quickpaper] header>ul>li[data-quickpaper-48e12a3e]{\n\ndisplay: inline-block;\n\nmargin-left: 30px;\n\npadding: 0 5px;\n\nline-height: 30px;\n\ncursor: pointer;\n\n}\n\n [quickpaper] header>ul>li[active='yes'][data-quickpaper-48e12a3e]{\n\nborder-bottom: 2px solid #74b1be;\n\nfont-weight: 800;\n\n}\n\n [quickpaper] header>ul>li[active='no'][data-quickpaper-48e12a3e]:hover{\n\noutline: 1px solid gray;\n\n}\n\n [quickpaper] header>div[data-quickpaper-48e12a3e]{\n\nfloat: right;\n\n}\n\n [quickpaper] header>div>a[data-quickpaper-48e12a3e]{\n\ndisplay: inline-block;\n\nvertical-align: top;\n\n}\n\n [quickpaper] header>div>a.normal[data-quickpaper-48e12a3e]{\n\ncolor: #74b1be;\n\npadding: 0 20px;\n\n}\n\n [quickpaper] header>div>a.normal[data-quickpaper-48e12a3e]:hover{\n\ntext-decoration: underline;\n\n}\n\n [quickpaper] header>div>a.github[data-quickpaper-48e12a3e]{\n\nbackground-image: url('./src/assets/github.png');\n\nbackground-size: auto 70%;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center center;\n\nwidth: 70px;\n\nfont-size: 0;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
