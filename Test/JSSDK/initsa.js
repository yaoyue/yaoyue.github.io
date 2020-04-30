
(function(para) {
    var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
    if(typeof(w['sensorsDataAnalytic201505']) !== 'undefined') {
        return false;
    }
    w['sensorsDataAnalytic201505'] = n;
    w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
    var ifs = ['track','quick','register','registerPage','registerOnce','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout','trackLink','clearAllRegister','getAppStatus'];
    for (var i = 0; i < ifs.length; i++) {
      w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    if (!w[n]._t) {
      x = d.createElement(s), y = d.getElementsByTagName(s)[0];
      x.async = 1;
      x.src = p;
      x.setAttribute('charset','UTF-8');
      y.parentNode.insertBefore(x, y);
      w[n].para = para;

      // m = d.createElement(s), z = d.getElementsByTagName(s)[0];
      // m.async = 1;
      // m.src = p;
      // m.setAttribute('charset','UTF-8');
      // z.parentNode.insertBefore(m, z);
      // w[n].para = para;
    }
  })({
    sdk_url: 'sensorsdata.full.js',
    heatmap_url: 'heatmap.js',
    name: 'sensors',
    server_url: 'https://newsdktest.datasink.sensorsdata.cn/sa?project=chuqiangsheng&token=5a394d2405c147ca',
    // server_url:'http://10.42.176.3:8106/sa?project=default&token=fa025b40b9c2665e',
    // debug_mode: false,
    // is_single_page: true,
    // send_type: 'beacon',
    current_domain: 'www.gz.top',
    // referrer_domain: 'http://localhost:9000',
    // is_debug: true,
    use_app_track: true,
    source_channel:['axe'],
    heatmap:{
      clickmap:'default',
      scroll_notice_map:'not-collect',
      // collect_input: function(){  
      //     //如果只采集首页
      //     return false 
      // },
      collect_element: function(element_target){
        // 如果这个元素有属性sensors-disable=true时候，不采集
        return true;
        if(element_target.tagName.toLocaleLowerCase() === 'a'){
            return false;
        } else {
          return true;
        }
      },
      custom_property:function( element_target ){
        //比如您需要给有 data=test 属性的标签的点击事件增加自定义属性 name:'aa' ，则代码如下
            return {
                customname:'aaaaa'
            }
        
      },
        collect_input:function(element_target){
          //例如如果元素的id是a，就采集这个元素里的内容
              return true;
      },
    },
    scrollmap: {
        //返回真会采集当前页面的数据，返回假表示不采集当前页面,设置这个函数后，内容为空的话，是返回假的。不设置函数默认是采集所有页面
        collect_url: function(){
            return false  
        },
    },
  
  });
  
  // sensors.register({testname:'gz'});
  // sensors.registerPage({like:'orange',like2:'apple'});
  // sensors.clearAllRegister();
  // sensors.clearAllRegister();
  // sensors.quick('autoTrack', {
  //   platForm:'h5'
  // })
  // sensors.login('44444');
  sensors.quick('autoTrack');
  // sensors.track('$webk',{name:'gz'});
  // sensors.setProfile({ip:'12.123.23.24'});

 sensors.track("testTimeRight",{
    $time:1588215802000
  });

//   sensors.track("testTimeError",{
//     $time:'cnakrvbnafzjrlfjs'
//   });

  sensors.track("testTimeErrorInt",{
    $time:1131656640000
  });

  // sensors.track('gz',{});
  

  // sensors.track("$pageview",{
  //   testname:'gzgagzga'
  // });
  // setTimeout(function(){
  //   var a = sensors.getPresetProperties();
  //   console.log(a);
  // },200);

