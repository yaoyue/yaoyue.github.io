<script>
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
    w[n].para = para;
    y.parentNode.insertBefore(x, y);
  }
})({
  sdk_url: 'https://static.sensorsdata.cn/sdk/1.15.14/sensorsdata.min.js',
  heatmap_url: 'https://static.sensorsdata.cn/sdk/1.15.14/heatmap.min.js',
  name: 'sensors',
  server_url: 'https://newsdktest.datasink.sensorsdata.cn/sa?token=5a394d2405c147ca&project=chuqiangsheng',
  heatmap:{scroll_notice_map:'not_collect'}
});
sensors.quick('autoTrack');
</script>

  // sensors.register({testname:'gz'});
  // sensors.registerPage({like:'orange',like2:'apple'});
  // sensors.clearAllRegister();
  // sensors.clearAllRegister();
  // sensors.quick('autoTrack', {
  //   platForm:'h5'
  // })


  // sensors.login('1234569876');


  // sensors.track('$webk',{name:'gz'});
  // sensors.setProfile({ip:'12.123.23.24'});

//  sensors.track("testTimeRight",{
//     $time:1588215802000
//   });

//   sensors.track("testTimeError",{
//     $time:'cnakrvbnafzjrlfjs'
//   });

  // sensors.track("testTimeErrorInt",{
  //   $time:1131656640000
  // });

  // sensors.track('gz',{});
  

  // sensors.track("$pageview",{
  //   testname:'gzgagzga'
  // });
  // setTimeout(function(){
  //   var a = sensors.getPresetProperties();
  //   console.log(a);
  // },200);

