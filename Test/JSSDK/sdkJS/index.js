(function (para) {
    var p = para.sdk_url,
        n = para.name,
        w = window,
        d = document,
        s = 'script',
        x = null,
        y = null;
    if (typeof (w['sensorsDataAnalytic201505']) !== 'undefined') {
        return false;
    }
    w['sensorsDataAnalytic201505'] = n; //'sensors'
    w[n] = w[n] || function (a) {
        return function () {
            (w[n]._q = w[n]._q || []).push([a, arguments]);
        }
    };
    var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout', 'trackLink', 'clearAllRegister', 'getAppStatus'];
    for (var i = 0; i < ifs.length; i++) {
        w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    // var obtn = document.getElementById('test');
    // console.log(obtn);
    // obtn.onclick = function(){
    //     x = d.createElement(s), y = d.getElementsByTagName(s)[0];
    //     x.async = 1;
    //     x.src = p;
    //     x.setAttribute('charset','UTF-8');
    //     w[n].para = para;
    //     y.parentNode.insertBefore(x, y);
    // };
    if (!w[n]._t) {
        x = d.createElement(s), y = d.getElementsByTagName(s)[0];
        x.async = 1;
        x.src = p;
        x.setAttribute('charset', 'UTF-8');
        w[n].para = para;
        y.parentNode.insertBefore(x, y);
    }
})({
    // sdk_url:'./code/sensorsdata.js',
    sdk_url: 'https://static.sensorsdata.cn/sdk/1.15.16/sensorsdata.min.js',
    heatmap:{scroll_notice_map:'not_collect'},
    name: 'sensors', 
    // http://10.120.46.163:8106/sa?project=default
    // https://newsdktest.datasink.sensorsdata.cn/sa?project=chuqiangsheng&token=5a394d2405c147ca
    server_url: 'https://newsdktest.datasink.sensorsdata.cn/sa?project=chuqiangsheng&token=5a394d2405c147ca',
    heatmap:{
        scroll_notice_map:'not_collect'
    },
    preset_properties: {
        latest_wx_ad_click_id: true,
        latest_referrer_host: true,
        latest_traffic_source_type:false,
        latest_landing_page:true
    },
    // heatmap:{
    //     useCapture : true
    // },
    is_track_device_id: true,
    // source_channel: ['bd'],
    // source_type: {
    //     search: ['.baidu.com', '.google.', 'ecosia.org'],
    //     social: ['.kaixin001.com']
    // },
    // is_debug:{
    //     apph5:true
    // },
    // is_track_single_page:true,
    // show_log:false,
    // server_url:'',
    // server_url: ['https://test-syg.datasink.sensorsdata.cn/sa?project=liangshuang&token=27f1e21b78daf376','https://test-syg.datasink.sensorsdata.cn/sa?project=lixiang&token=27f1e21b78daf376'],

    // send_type:'ajax',
    // use_app_track: true,
    // use_app_track_config:{
    //     use_app_track:true,
    //     white_list:['https://test-syg.datasink.sensorsdata.cn/sa?project=liangshuang&token=27f1e21b78daf376','https://testtest-syg.datasink.sensorsdata.cn/sa?project=liangshuang&token=27f1e21b78daf376']
    // },
    app_js_bridge:{
       white_list:['https://newsdktest.datasink.sensorsdata.cn/sa?project=chuqiangsheng&token=5a394d2405c147ca','http://10.120.12.0:8106/sa?project=default&token=schemaLimited-dacagu4d', 'http://10.120.149.211:8106/sa?project=default', 'http://10.120.153.157:8106/sa?project=default', 'http://10.120.46.62:8106/sa?project=default', 'http://10.120.166.105:8106/sa?project=default', 'http://10.120.46.163:8106/sa?project=default', 'http://10.120.148.27:8106/sa/sa?project=default', 'http://apimapping.debugbox.sensorsdata.cn/10-120-46-62/8106/sa?project=default&token=schemaLimited-g8gZIuzx']

    },
    // batch_send:true,
    // use_client_time: true,
    // cross_subdomain: false,

    // heatmap: {
    //     // clickmap:'not_collect',
    //     // scroll_notice_map:'not_collect',
    //     loadTimeout: 3000,
    //     // collect_url: function(){
    //     //     //如果只采集首页
    //     //     if(location.href === 'http://www.ls.com:8080/index.html'){
    //     //         return false;
    //     //     }else{
    //     //         return true;
    //     //     }
    //     // },
    //     collect_element: function (element_target) {
    //         // 如果这个元素有属性sensors-disable=true时候，不采集
    //         if (element_target.getAttribute('sensors-disable') === 'true') {
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     },
    //     custom_property: function (element_target) {
    //         return {
    //             timepppp: new Date()
    //         }
    //     },
    //     collect_input: function (element_target) {
    //         //例如如果元素的 id 是a，就采集这个元素里的内容
    //         // if(element_target.id === 'loginid'){
    //         //     return true;
    //         // }
    //         return true;
    //     },
    //     // element_selector:'not_use_id',
    //     renderRefreshTime: 1000,
    //     scroll_delay_time: 4000,
    //     useCapture: false
    // },
    // preset_properties:{
    //     title:false,
    //     latest_referrer:true
    // }
});
sensors.quick('autoTrack');

sensors.login('cqs_lgoin_h5_test_0930')

sensors.track('webTrackTest', {
    name:"cqs 测试 H5 track 事件"
});


 
function sdkfunc(arr){
    function func(nameArr){
        nameArr.forEach(function(item,index){
            if(window[item]){
                switch (item){
                    case 'pageurl':
                        pageurl.onclick = function(){
                            alert('url:'+location.href+'\n'+ 'referrer:'+document.referrer);
                        };
                        break;
                    case 'loginbtn':
                        loginbtn.onclick = function(){
                            if(logininput.value){
                                sensors.login(logininput.value);
                        
                            }else{
                                console.log('请输入登录 id');
                            }
                        };
                        break;
                    case 'clearbtn':
                        clearbtn.onclick = function(){
                            var arr = document.cookie.split(';');
                            arr.forEach(function(item,index){
                                var key = item.split('=')[0];
                                if(sensorsDataAnalytic201505._.cookie.remove){
                                    sensorsDataAnalytic201505._.cookie.remove(key);
                                }
                            });
                            alert('cookie 已清除');
                        };
                        break;
                    case 'readcookiebtn':
                        readcookiebtn.onclick = function(){
                            var arr = document.cookie.split(';');
                            var key = 'sensorsdata2015jssdkcross' ;
                            var flag = false;
                            for(var i = 0;i<arr.length;i++){
                                var k_v = arr[i].split('=');
                                if(k_v[0].trim() == key){
                                    alert('key 为 ' + key + '\n\n'  + decodeURIComponent(k_v[1]));
                                    flag = true;
                                }
                            }
                            if(!flag){alert('没有神策 cookie')};
                        };
                        break;
                    case 'backbtn':
                        backbtn.onclick = function(){
                            location.href = document.referrer;
                        };
                        break;
                    case 'datalist':
                        datalist.onclick = function(){
                            
                        };
                        break;
                }
            }
        });
    }
    var flag = false;
    window.onload = function(){
        func(arr);
        flag = true;
    };
    setTimeout(function(){
        if(!flag){
            func(arr);
        }
    },500);
}
sdkfunc(['loginbtn','clearbtn','readcookiebtn','backbtn','pageurl']);