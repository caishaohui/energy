<template>
  <div class="app-container">
      <div class="testq"></div>
      <div class="customer-box">

      <el-tabs v-model="activeName" @tab-click="handleClick">
          <!--客户-->
          <el-tab-pane label="客户" name="first">
              <!--客户搜索-->
              <el-input
                      placeholder="请输入关键字搜索"
                      v-model="input23">
                  <i slot="suffix" class="el-input__icon el-icon-search " ></i>
              </el-input>
              <!--客户树形-->
              <div>
                  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
              </div>
          </el-tab-pane>
          <!--电工-->
          <el-tab-pane label="电工" name="second">
              电工
          </el-tab-pane>
      </el-tabs>
      </div>
     <!--<el-button @click="jump">跳转到客户页面</el-button>-->
      <div class="box_map">

          <!--客户按钮-->
          <div class="box_map_customer_list">客户列表 > ></div>

          <!--实时总负荷，实时总电量-->
          <div class="box_map_load_electric">
              <div class="box_map_load_electric_load">
                  <img :src="loadIcon" alt="">
                  <span> 实时总负荷:132456 KVA</span>
              </div>
              <div class="box_map_load_electric_electric">
                  <img :src="electricIcon" alt="">
                  <span>实时总电量:132456 KWH</span>
              </div>
          </div>
          <div id="my-list" style="display: none"></div>
              <div id="container">
                  <div class="total_box">
                     <div class="total_box_customer">
                        <div>
                            <span>客户总计</span>
                            <span class="total_box_number">107</span>
                        </div>
                         <div><img :src="mapCustomerIcon" alt=""></div>
                     </div>
                      <div class="total_box_center">
                          <div>
                              <span>中心总计</span>
                              <span class="total_box_number">154</span>
                          </div>
                          <div><img :src="mapCenterIcon" alt=""></div>
                      </div>
                      <div class="total_box_electric">
                          <div>
                              <span>电工总计</span>
                              <span class="total_box_number">014</span>
                          </div>
                          <div><img :src="mapElectricianIcon" alt=""></div>
                      </div>
                  </div>
              </div>
              <div id="panel">
                  <div id="intro">
                  </div>
              </div>
      </div>
  </div>
</template>
<script>
    import mapIcon from  '@/assets/icon/mapSite.svg'
    import errorIcon from  '@/assets/icon/mapError.svg'
    import recordIcon from  '@/assets/icon/mapRecord.svg'
    import facilityIcon from  '@/assets/icon/mapFacility.svg'
    import loadIcon from  '@/assets/icon/mapLoad.png'
    import electricIcon from  '@/assets/icon/mapElectric.png'
    import mapCenterIcon from '@/assets/icon/mapCenterIcon.png'
    import mapElectricianIcon from '@/assets/icon/mapElectricianIcon.png'
    import mapCustomerIcon from '@/assets/icon/mapCustomerIcon.png'
export default {
  data() {
    return {
        activeName: 'first',// 客户，电工分页
        input23:'',//客户搜索
        data: [],//客户，树形结构数据
        defaultProps: {
            children: 'children',
            label: 'label'
        },
        mapData:'',
        //以下地图图标
        mapIcon,
        errorIcon,
        recordIcon,
        facilityIcon,
        loadIcon,
        electricIcon,
        mapCenterIcon,
        mapElectricianIcon,
        mapCustomerIcon
    }
  },
  methods: {
    // jump(){
    //   location.assign('./customer.html');
    // }
      handleClick(tab, event) {  //分页
          console.log(tab, event);
      },
      handleNodeClick(data) {
          if (data.label == '福田区'){
              var key = 'children';
              data[key] = [{
                  id: '香丽大厦',
                  position: [114.039864,22.551399],
                  desc: 'tb0',
                  label:'香丽大厦',
                  person:'蔡少辉',
              }];
          }
          if (data.label == '龙岗区') {
              var key = 'children';
              data[key] = [{
                  id: '龙岗中心城',
                  position: [114.237209,22.722198],
                  label:'龙岗中心城',
                  desc: 'tb1',
                  person:'康赞',
              }];
          }
          $('#'+data.desc).click(function () {
          });
          $('#'+data.desc).click();
          console.log($('#'+'data.desc'))
      },

      getCustomerData(){
          var _this = this;
          //创建地图
          var map = new AMap.Map('container', {
              zoom: 9,

          });
          map.setFitView();
          //关闭信息窗体
          function closeInfoWindow() {
              map.clearInfoWindow();
          }
          AMapUI.loadUI(['misc/MarkerList','overlay/SimpleInfoWindow'], function(MarkerList,SimpleInfoWindow) {
              // <!-- 重点参数：getDataId，getPosition，getMarker，getInfoWindow，getListElement -->
              // <!-- 重点代码: markerList.render -->

              // openInfoWin();
              var markerList = new MarkerList({
                  //关联的map对象
                  map: map,
                  //列表的dom容器的id
                  listContainer: 'my-list',
                  //选中状态（通过点击列表或者marker）时在Marker和列表节点上添加的class，可以借此编写css控制选中时的展示效果
                  selectedClassNames: 'selected',
                  //返回数据项的Id
                  getDataId: function(dataItem, index) {
                      //index表示该数据项在数组中的索引位置，从0开始，如果确实没有id，可以返回index代替
                      return dataItem.id;
                  },
                  //返回数据项的位置信息，需要是AMap.LngLat实例，或者是经纬度数组，比如[116.789806, 39.904989]
                  getPosition: function(dataItem) {
                      return dataItem.position;
                  },
                  //返回数据项对应的Marker
                  getMarker: function(dataItem, context, recycledMarker) {
                      //marker的标注内容
                      var content = dataItem.markerLabel;
                      var label = {
                          offset: new AMap.Pixel(16, 18), //修改label相对于marker的位置
                          content: content
                      };
                      //存在可回收利用的marker
                      if (recycledMarker) {
                          //直接更新内容返回
                          recycledMarker.setLabel(label);
                          return recycledMarker;
                      }
                      //返回一个新的Marker
                      return new AMap.Marker({
                          label: label,
                          title:data.id,
                          icon: new AMap.Icon({
                              size: new AMap.Size(40, 60),  //图标大小
                              image: _this.mapIcon,
                          })
                      });
                  },
                  //返回数据项对应的infoWindow
                  getInfoWindow: function(dataItem, context, recycledInfoWindow) {
                      var tpl ="<div id='mapInfowindow' >" +
                          "<div><%- dataItem.company %>：<%- dataItem.infoWinContent %><p>联系人：<%- dataItem.person %><%- dataItem.infoWinContent %></p><p>联系电话:<%- dataItem.phone %></p></div>"+
                          "<img src='"+_this.loadIcon+"' style='width: 20px;height: 20px'>"+
                          "<img src='"+_this.electricIcon+"' style='width: 20px;height: 20px'>"+
                          "<img src='"+_this.recordIcon+"' style='width: 50px;height: 50px'>"+
                          "<img src='"+_this.errorIcon+"' style='width: 50px;height: 50px'>"+
                          "<img src='"+_this.facilityIcon+"' style='width: 50px;height: 50px'>"+
                          "</div>";

                      var  mapInfowindow = document.getElementById("mapInfowindow");
                      console.log(mapInfowindow);
                      // mapInfowindow.style.width = '300px';
                      // mapInfowindow.style.height = '250px';
                      //MarkerList.utils.template支持underscore语法的模板
                      var content = MarkerList.utils.template(tpl, {
                          dataItem: dataItem,
                          dataIndex: context.index
                      });
                      if (recycledInfoWindow) {
                          //存在可回收利用的infoWindow, 直接更新内容返回
                          recycledInfoWindow.setContent(content);
                          return recycledInfoWindow;
                      }
                      //返回一个新的InfoWindow
                      return new AMap.InfoWindow({
                          offset: new AMap.Pixel(0, -30),
                          content: content
                      });
                  },
                  //返回数据项对应的列表节点
                  getListElement: function(dataItem, context, recycledListElement) {
                      console.log(context.index);
                      var aa = dataItem.desc;
                      console.log(aa);
                      // var tpl = '<p class="aa+"><%- dataItem.id %>：<%- dataItem.listDesc %><p>';
                      var tpl = "<p class='aa' id='tb"+context.index+"'><%- dataItem.id %><p>";
                      var con = '<p >'+'111111'+'</p>';
                      var content = MarkerList.utils.template(tpl, {
                          dataItem: dataItem,
                          dataIndex: context.index
                      });
                      if (recycledListElement) {
                          //存在可回收利用的listElement, 直接更新内容返回
                          recycledListElement.innerHTML = content;
                          return recycledListElement;
                      }
                      //返回一段html，MarkerList将利用此html构建一个新的dom节点
                      return content;
                  },
              });
              //监听选中改变
              markerList.on('selectedChanged', function(event, info) {
                  // console.log(event, info);
                  map.setCenter([info.selected.position.lng, info.selected.position.lat+0.05]);
                  console.log(info.selected.position.lng);
                  console.log(info.selected.position.lat)
              });
              //监听Marker和ListElement上的点击
              markerList.on('markerClick listElementClick', function(event, record) {
                  // console.log(event, record);
              });

              //构建一个数据项数组，数据项本身没有格式要求，但需要支持getDataId和getPosition
              // 事件的模拟，绑定另外一个事件的方法
              //所有的数据，，页面进来渲染所有
              var data = [{
                  id: '香丽大厦',
                  position: [114.039864,22.551399],
                  desc: '0',
                  label:'香丽大厦',
                  company:'深鹏达电网科技有限公司',
                  person:'蔡少辉',
                  phone:'12345678912',
              },{
                  id: '龙岗中心城',
                  position: [114.237209,22.722198],
                  label:'龙岗中心城',
                  company:'广东峭函堔鑫建设工程有限公司',
                  phone:'13556885862',
                  desc: '1',
                  person:'黄东文',
              }];
              //侧边栏控件数据（位置信息）
              var CustomerData = [{
                  id: '深圳',
                  label:'深圳',
                  person:'深圳',
                  children:[{
                      label:'宝安区',
                  }, {
                      label:'罗湖区',
                  }, {
                      label:'福田区',
                      children:[{
                          label:'test'
                      }]
                  },{
                      label:'龙岗区',
                      children:[{
                          label:'test'
                      }]
                  },{
                      label:'南山区'
                  },{
                      label:'盐田区'
                  },{
                      label:'坪山区'
                  }
                  ]
              }];
              _this.data = CustomerData;
              _this.mapData = data;
              //展示该数据
              markerList.render(data);
          });
      }
  },
    created(){
    },
    mounted(){
        this.getCustomerData()
    }
}
</script>
<style  class="AMap.style">
    /*body{*/
    body .amap-info-content{
        background: rgba(12,27,53,0.75);
    }
    /*}*/
</style>
<style rel="stylesheet/scss" lang="scss"  scoped>
    @import "../../styles/monitoring.scss";
    html{
        font-size: 100px;
    }
    /*.testq{*/
        /*width: 3.18rem;*/
        /*height: 1.2rem;*/
        /*background: red;*/
    /*}*/
    @font-face {
        font-family: 'NeuesBauenDemo';
        src: url('../../../../assets/font/DS-DIGIB.TTF');
        font-weight: normal;
        font-style: normal;
    }


    .total_box_number{
        font-family: 'NeuesBauenDemo';
        font-size: 48px;
    }
.line{
  text-align: center;
 }
.amap-info-close{
        font: bold 30px/14px Tahoma,Verdana,sans-serif
  }
</style>

