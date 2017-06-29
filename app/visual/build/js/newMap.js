/*
 * Author: Princeraul
 * Email: suliangprinceraul@gmail.com or 398528895@qq.com
 */

var Map;
var heatmap;
var AmapClass;
var markers = [];
var datacache = [];
var time = 2000;
var $switchAdress = $('span[data-name="address-name"]');

// 人口密集度
var heatmapLayer,
    currentHour,
    tileUrl = 'http://heatmap.amap.com/api/showmap/pvheatmap?x=[x]&y=[y]&z=[z]&showmap=equal';

var color = {
    0.5: '#04ffdf',
    0.65: '#5dda02',
    0.7: '#0abaf4',
    0.9: '#fffc00',
    1.0: '#ff3c08'
};

var $loading = $('.container-main-dialog');

// 城市切换
function switchAdress(obj) {
    var addressValue = $(obj).html();
    $(obj).addClass('active').siblings().removeClass('active');
    $switchAdress.html(addressValue);
    Map.setCity(addressValue);
}

//判断浏览区是否支持canvas
function isSupportCanvas() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}
// loading hide
function loadinghide() {
    $loading.removeClass('container-main-dialog-active');
}

// loading show
function loadingshow() {
    $loading.addClass('container-main-dialog-active');
}

var AmapModule = function() {
    this.flag = false;
    this.count = 300;
};

// 将服务器data转化为字符串
AmapModule.prototype.ToString = function(serverData) {
    var resultData = '';
    for (var i in serverData) {
        resultData += serverData[i].lng + ',' + serverData[i].lat + '|';
    }
    return resultData;
};

// 生成随机刷
AmapModule.prototype.random = function(n, m) {
    var result = Math.round(Math.random() * m + 1);
    return result;
};

AmapModule.prototype.clearMarkers = function() {
   if (cluster) {
      Map.plugin(["AMap.MarkerClusterer"], function() {
           cluster.clearMarkers();
      })
   }
}

AmapModule.prototype.resetMap = function() {
    // 设置热力图为空
    heatmap.setDataSet({data: {}, max: 100});
}

//BD09转化成GCJ02生成热力图或者marker
AmapModule.prototype.convertFromInit = function(param) {
    // 如果数据为空设置热力图data：{}清除marker return false
    if (!param.serverData.length) {
        this.resetMap();
        this.clearMarkers();
        return false;
    }

    if (param.callback == 'addmarker') {
        this.addmarker(param.serverData);
    } else {
        heatmap.setDataSet({data: param.serverData, max: 100});
    }

    param.serverData = null;
};

// 热力图
AmapModule.prototype.heatmap = function(data, color) {
    var _this = this;
    var defaultcolor = {
        0.5: 'blue',
        0.65: 'rgb(117,211,248)',
        0.7: 'rgb(0, 255, 0)',
        0.9: '#ffea00',
        1.0: 'red'
    };

    if (!isSupportCanvas()) {
        alert('热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~');
    }


    Map.plugin(["AMap.Heatmap"], function() {

        //初始化heatmap对象
        heatmap = new AMap.Heatmap(Map, {
            radius: 25, //给定半径
            opacity: (function() {
                return centerAddress ? [0.8, 0.8]: [0.0, 0.8];
            })(),
            gradient: color? color: defaultcolor
        });
        //设置数据集：该数据为北京部分“公园”数据
        heatmap.setDataSet({
            data: data || {},
            max: 100
        });
    });
};

// 异步调用高德地图
function createAmap() {
    var script = document.createElement("script");
    script.src = "http://webapi.amap.com/maps?v=1.3&key=118361f14a05e057a21caf3d161eeaeb&callback=AmapInit";
    document.body.appendChild(script);
}

// fn：中心点设置
function centerPointifTrue(points) {
    var addressValue = $switchAdress.html();
    var lnglat = points.split(',');

    if (points) {
        Map.setZoomAndCenter(12, [lnglat[1], lnglat[0]]);
        return false;

    } else if (addressValue) {
        // 设置当前项目地址
        Map.setCity(addressValue);
    }
}

// 初始化
function AmapInit() {
    Map = new AMap.Map("AmapHeatMap", {
        view: new AMap.View2D({zoom: 12, rotation: 0})
    });
    console.log(mapData)
    // 设置默认 深蓝色主题
    Map.setMapStyle('normal');
    AmapClass = new AmapModule();
    // 设置中心点
    centerPointifTrue(centerAddress);
    // 先实例化heatmap
    AmapClass.heatmap();
    // 默认显示热力图
    AmapClass.convertFromInit({serverData: mapData});
    // 释放内存
    mapData = null;
}

window.onload = createAmap();
