import React, { Component } from "react";
import { getMapData } from "actions/map";
import { connect } from "react-redux";
import "./index.less";

class MapLearn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { userInfo } = this.props.userInfo;
    // console.log(1222, this.props)
    // this.props.getMapData({partyid: 1235})
    return (
      <div>
        <div id="allmap" className="map" />
        {/* <div id="map2" className="map" /> */}
      </div>
    );
  }
  componentDidMount() {
    // var map = new BMap.Map("allmap"); // 创建Map实例
    // map.centerAndZoom(new BMap.Point(120.191014, 30.28929), 11); // 初始化地图,设置中心点坐标和地图级别
    // map.enableScrollWheelZoom(true);
    // //添加地图类型控件
    // // map.addControl(
    // //   new BMap.MapTypeControl({
    // //     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    // //   })
    // // );
    // // map.setCurrentCity("杭州市"); // 设置地图显示的城市 此项是必须设置的
    // var map2 = new BMap.Map("map2"); // 创建Map实例
    // map2.centerAndZoom(new BMap.Point(116.404, 39.915), 12)
    // map2.enableScrollWheelZoom(true);
    var map = new BMap.Map("allmap"); // 创建Map实例
    // map.centerAndZoom('北京', 11); // 初始化地图,用城市名设置地图中心点
    var a = map.centerAndZoom('北京', 11)
    var b = map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
    // console.log(11, a) 
    // console.log(22, b) 
    
    // setTimeout(function(){
    //   map.panTo(new BMap.Point(113.262232,23.154345));   //两秒后移动到广州
    // }, 2000);
    // map.disableDragging();
    //   var BMapLib = new BMap.Bounds(new BMap.Point(116.027143, 39.772348),new BMap.Point(116.832025, 40.126349));
    // try {
    // 	BMapLib.AreaRestriction.setBounds(map, b);
    // } catch (e) {
    // 	alert(e);
    // }
    // var bs = map.getBounds(); //获取可视区域
    // var bssw = bs.getSouthWest(); //可视区域左下角
    // var bsne = bs.getNorthEast(); //可视区域右上角
    // console.log(bs)
    // alert(
    //   "当前地图可视范围是：" +
    //     bssw.lng +
    //     "," +
    //     bssw.lat +
    //     "到" +
    //     bsne.lng +
    //     "," +
    //     bsne.lat
    // );
    var map = new BMap.Map("allmap");
  map.centerAndZoom("重庆",12);  //初始化地图,设置城市和地图级别。
  map.enableScrollWheelZoom(true);
	var pointA = new BMap.Point(106.486654,29.490295);  // 创建点坐标A--大渡口区
	var pointB = new BMap.Point(106.581515,29.615467);  // 创建点坐标B--江北区
	alert('从大渡口区到江北区的距离是：'+(map.getDistance(pointA,pointB)).toFixed(2)+' 米。');  //获取两点距离,保留小数点后两位
	var polyline = new BMap.Polyline([pointA,pointB], {strokeColor:"red", strokeWeight:9, strokeOpacity:0.5});  //定义折线
	map.addOverlay(polyline);     //添加折线到地图上
  }
}

// export default connect(state => ({ mapData: state.mapData }), { getMapData })(
//   MapLearn
// );

export default connect(state => ({ mapData: state.mapData }))(MapLearn);
