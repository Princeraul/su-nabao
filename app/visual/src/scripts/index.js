'use strict';
import mapStyle from 'views/mapStyle';

var map = new BMap.Map("map", {
   enableMapClick: false
});

map.centerAndZoom(new BMap.Point(105.403119, 38.028658), 5);

map.setMapStyle({styleJson: mapStyle});


//初始化
var numRun2 = $(".numberRun2").numberAnimate({
   num: '0',
   speed: 2000,
   symbol: ","
});
var nums2 = 65451;
setInterval(function () {
   nums2 += 3212;
   numRun2.resetData(nums2);
}, 3000);
