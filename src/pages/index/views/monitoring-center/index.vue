<template>
    <div class="app-container">

        <!--客户列表侧边栏-->
        <div class="customer-box">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <!--客户-->
                <el-tab-pane label="客户" name="first">
                    <!--客户搜索-->
                    <el-input
                            placeholder="请输入关键字搜索"
                            v-model="input23">
                        <i slot="suffix" class="el-input__icon el-icon-search "></i>
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

        <!--地图-->
        <div class="box_map">
            <div id="my-list" style="display: none"></div>
            <div id="container">
                <!--客户按钮-->
                <div class="box_map_customer_list" @click="openCustomerPop">客户列表 > ></div>
                <customer-pop :dialogTableVisible.sync="dialogTableVisible" class="common"
                              ref='customerpop'></customer-pop>
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
                <!--总计-->
                <div class="total_box">
                    <div class="total_box_customer">
                        <div>
                            <span>客户总计</span>
                            <span class="total_box_number">107</span>
                        </div>

                        <img :src="mapCustomerIcon" alt="">

                    </div>
                    <div class="total_box_center">
                        <div>
                            <span>中心总计</span>
                            <span class="total_box_number">154</span>
                        </div>

                        <img :src="mapCenterIcon" alt="">

                    </div>
                    <div class="total_box_electric">
                        <div>
                            <span>电工总计</span>
                            <span class="total_box_number">014</span>
                        </div>
                        <img :src="mapElectricianIcon" alt="">
                    </div>
                </div>
            </div>
            <div id="panel" >
                <div id="intro">
                </div>
            </div>
        </div>

        <!--右侧侧边告警-->
        <div class="box_taskError">
            <taskModule></taskModule>
            <errorModule
                    :mapSign = "mapSign"
                    :markerSign = "markerSign"
                    :markerSite = "markerSite"
                    :tests = "tests"
                    @markerErrorValue="markerErrorValue"
            ></errorModule>


            <ul>
                <li style="cursor: pointer;" v-for="(item,index) in errorData">{{item.id}}</li>
            </ul>
            <!--<p @click="testMap">点击移动地图香景</p>-->
            <!--告警事件-->
        </div>
    </div>
</template>
<script>
    import mapIcon from '@/assets/icon/mapSite.svg'
    import errorIcon from '@/assets/icon/mapError.svg'
    import recordIcon from '@/assets/icon/mapRecord.svg'
    import facilityIcon from '@/assets/icon/mapFacility.svg'
    import loadIcon from '@/assets/icon/mapLoad.png'
    import electricIcon from '@/assets/icon/mapElectric.png'
    import mapCenterIcon from '@/assets/icon/mapCenterIcon.png'
    import mapElectricianIcon from '@/assets/icon/mapElectricianIcon.png'
    import mapCustomerIcon from '@/assets/icon/mapCustomerIcon.png'
    import CustomerPop from './compoents/customer-pop.vue'
    import taskModule from '@/pages/index/views/monitoring-center/compoents/task-module'
    import errorModule from '@/pages/index/views/monitoring-center/compoents/error-module'
    export default {
        data() {
            return {
                tests:'213',
                activeName: 'first',// 客户，电工分页
                input23: '',//客户搜索
                data: [],//客户，树形结构数据
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                mapData: '', //客户数据
                errorData: '', //警告列表数据
                //以下地图图标
                mapIcon,
                errorIcon,
                recordIcon,
                facilityIcon,
                loadIcon,
                electricIcon,
                mapCenterIcon,
                mapElectricianIcon,
                mapCustomerIcon,
                dialogTableVisible: false,

                markerSign: '',   //初始化标记
                mapSign: '',      //初始化地图
                markerSite: '',   // 点击地址位置查找到客户的标记
                markerError: '',  // 点击警告的标记
            }
        },
        methods: {
            // jump(){
            //   location.assign('./customer.html');
            // }
            handleClick(tab, event) {  //分页
            },
            markerErrorValue:function (data) {
                // console.log(data)
                this.markerError = data
            },
            handleNodeClick(data) {
                var _this = this;
                // 点击添加客户信息
                if (data.label == '福田区') {
                    var key = 'children';
                    data[key] = [{
                        id: '香丽大厦',
                        position: [114.039864, 22.551399],
                        desc: 'tb0',
                        label: '香丽大厦',
                        person: '蔡少辉',
                    },
                        {
                            id: '乡景大厦',
                            position: [114.039498, 22.552612],
                            label: '乡景大厦',
                            desc: 'tb1',
                            person: '康赞',
                        }
                    ];
                }
                // 点击客户信息显示地图窗口
                if (data.position) {
                    var map = this.mapSign;
                    var markers = this.markerSign;   // 获取默认地图标记marker
                    markers.push(this.markerError);  // 添加其他地图标价marker例如警告，任务动态
                    markers.push(this.markerSite);
                    map.remove(markers);             //清除其他地图标记
                    var marker;
                    console.log(marker);

                    function addMarker() {
                        marker = new AMap.Marker({
                            position: data.position,
                            offset: new AMap.Pixel(-13, -30),
                        });
                        marker.setMap(map);
                    }

                    addMarker();
                    this.markerSite = marker;
                    AMap.event.addListener(marker, 'click', function () {
                        infoWindow.open(map, marker.getPosition());
                    });
                    var infoWindow = new AMap.InfoWindow({
                        // isCustom: true,  //使用自定义窗体
                        content: "<div id='mapInfowindow'>" +
                        "<div>" +
                        "<p>" + data.label + "</p>" +
                        "<p>联系人</p><p>联系电话</p></div>" +
                        "<span class='striping'></span>" +
                        "<div class='infowindowload'><img src='" + _this.loadIcon + "' style='width: 20px;height: 20px'><span>123</span></div>" +
                        "<div class='infowindowload'><img src='" + _this.electricIcon + "' style='width: 20px;height: 20px'><span>456</span></div>" +
                        "<div class='infowindowfour'>" +
                        "<div><img src='" + _this.recordIcon + "' style='width: 50px;height: 50px'><div>运维记录</div></div>" +
                        "<div><img src='" + _this.errorIcon + "' style='width: 50px;height: 50px'><div>告警事件</div></div>" +
                        "<div><img src='" + _this.facilityIcon + "' style='width: 50px;height: 50px'><div>设备列表</div></div>" +
                        "<div><div>更多闲情</div></div>" +
                        "</div>" +
                        "</div>",
                        offset: new AMap.Pixel(-20, -30)
                    });
                    AMap.event.addListener(marker, 'click', function () {
                        infoWindow.open(map, marker.getPosition());
                    });

                    infoWindow.open(map, marker.getPosition());
                    map.setFitView();
                    // console.log(zoom);
                    map.setZoom(15); //设置地图层级
                    console.log(marker)
                }
            },
            getCustomerData() {
                var _this = this;
                //所有的数据，，页面进来渲染所有
                var data = [{
                    id: '香丽大厦',
                    position: [114.039864, 22.551399],
                    desc: '0',
                    label: '香丽大厦',
                    company: '深鹏达电网科技有限公司',
                    person: '蔡少辉',
                    phone: '12345678912',
                }, {
                    id: '乡景大厦',
                    position: [114.039498, 22.552612],
                    label: '乡景大厦',
                    company: '乡景大厦',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                }, {
                    id: '龙岗中心城',
                    position: [114.237209, 22.722198],
                    label: '龙岗中心城',
                    company: '广东峭函堔鑫建设工程有限公司',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                }];
                //侧边栏控件数据（位置信息）
                var CustomerData = [{
                    id: '深圳',
                    label: '深圳',
                    person: '深圳',
                    children: [{
                        label: '宝安区',
                    }, {
                        label: '罗湖区',
                    }, {
                        label: '福田区',
                        children: [{
                            label: 'test'
                        }]
                    }, {
                        label: '龙岗区',
                        children: [{
                            label: 'test'
                        }]
                    }, {
                        label: '南山区'
                    }, {
                        label: '盐田区'
                    }, {
                        label: '坪山区'
                    }
                    ]
                }];
                _this.data = CustomerData;
                _this.mapData = data;
                //初始化地图对象，加载地图
                var map = new AMap.Map("container", {
                    resizeEnable: true, //是否监控地图容器尺寸变化
                    zoom: 12, //初始地图级别
                    center: [121.498586, 31.239637], //初始地图中心点
                    showIndoorMap: false //关闭室内地图
                });
                _this.mapSign = map;
                var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(-20, -30)});
                var markers = [];
                for (var i = 0, marker; i < data.length; i++) {
                    marker = new AMap.Marker({
                        position: data[i].position,
                        map: map
                    });
                    marker.content = "<div id='mapInfowindow'>" +
                        "<div>" +
                        "<p>" + data[i].company + "</p>" +
                        "<p>联系人</p><p>联系电话</p></div>" +
                        "<span class='striping'></span>" +
                        "<div class='infowindowload'><img src='" + _this.loadIcon + "' style='width: 20px;height: 20px'><span>123</span></div>" +
                        "<div class='infowindowload'><img src='" + _this.electricIcon + "' style='width: 20px;height: 20px'><span>456</span></div>" +
                        "<div class='infowindowfour'>" +
                        "<div><img src='" + _this.recordIcon + "' style='width: 50px;height: 50px'><div>运维记录</div></div>" +
                        "<div><img src='" + _this.errorIcon + "' style='width: 50px;height: 50px'><div>告警事件</div></div>" +
                        "<div><img src='" + _this.facilityIcon + "' style='width: 50px;height: 50px'><div>设备列表</div></div>" +
                        "<div><div>更多闲情</div></div>" +
                        "</div>" +
                        "</div>";
                    marker.on('click', markerClick);
                    markers.push(marker);
                }
                function markerClick(e) {
                    infoWindow.setContent(e.target.content);
                    infoWindow.open(map, e.target.getPosition());
                }
                map.setFitView();
                function clearMarker() {
                    map.remove(markers);
                }
                _this.markerSign = markers;
            },
            openCustomerPop() {
                this.dialogTableVisible = true;
                this.$refs.customerpop.getHotMovieList()
            },
            openAlarmEventsPop() {
                this.alarmEvents = true;
                this.$refs.alarmeventspop.getHotMovieList()
            },
        },
        created() {
        },
        mounted() {
            this.getCustomerData();
        },
        components: {
            CustomerPop,
            taskModule,
            errorModule
        }
    }
</script>
<style class="AMap.style" lang="scss">
    .box_map {
        .amap-info-content {
            width: 400px;
            background: rgba(12, 27, 53, 0.75);
            box-shadow: none;
            border-radius: 4px;
            color: white;
            padding: 0 10px;
            #mapInfowindow {
                > div {
                    > p {
                        line-height: 10px;
                    }
                }
                .striping {
                    display: block;
                    opacity: 0.8;
                    width: 100%;
                    height: 1px;
                    background: white;
                }
                .infowindowload {
                    display: inline-block;
                }
                .infowindowfour > div {
                    width: 50%;
                    float: left;
                    text-align: center;
                }
            }
        }
        .amap-info-content:hover {
            box-shadow: none;
            cursor: pointer;
        }
        .amap-info-close {
            top: 12px;
        }
    }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../styles/monitoring.scss";
    html {
        font-size: 100px;
    }
    @font-face {
        font-family: 'NeuesBauenDemo';
        src: url('../../../../assets/font/DS-DIGIB.TTF');
        font-weight: normal;
        font-style: normal;
    }
    .total_box_number {
        font-family: 'NeuesBauenDemo';
        font-size: 0.48rem;
    }
</style>

