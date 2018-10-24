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
                    <div class="block">
                        <span class="demonstration">默认 click 触发子菜单</span>
                        <el-cascader
                                :options="options"
                                v-model="selectedOptions"
                                @change="handleChange">
                        </el-cascader>
                    </div>
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
                            <span class="total_box_number">{{testNumber}}</span>
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
        <!--客户弹窗列表组件-->
        <customer-pop :dialogTableVisible.sync="dialogTableVisible" class="common"
                      ref='customerpop'
                      :mapSign = "mapSign"
                      :markerSign = "markerSign"
        ></customer-pop>
        <!--右侧边组件-->
        <div class="box_taskError">
            <!--右侧任务动态组件-->
            <taskModule></taskModule>
            <!--右侧警告组件-->
            <errorModule
                    :mapSign = "mapSign"
                    :markerSign = "markerSign"
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
    import store from '@/pages/index/store/index.js'
    import {tool} from '@/pages/index/common/common.js'
    export default {
        data() {
            return {
                testNumber: '',
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
                // markerError: '',  // 点击警告的标记


                options: [ {
                    value: '广东省',
                    label: '广东省',
                    children: [{
                        value: '深圳市',
                        label: '深圳市',
                        children: [{
                            value: '福田区',
                            label: '福田区'
                        }]
                    }]
                }],
                selectedOptions: [],
                selectedOptions2: []
            }
        },
        methods: {
            // jump(){
            //   location.assign('./customer.html');
            // }
            handleChange(value) {
                console.log(value);
                    this.$axios.get('https://restapi.amap.com/v3/geocode/geo?address=香丽大厦&city=深圳&key=eb2c8ef35d3cb0f99d01358fd72c10b1', {
                    })
                        .then(res => {
                            console.log(res)
                        })
            },
            // 搜索

            handleClick(tab, event) {  //分页
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
                }else if(data.label == '龙岗区'){
                    var key = 'children';
                    data[key] = [
                        {
                            id: '龙岗中心城',
                            position: [114.215494,22.696304],
                            label: '龙岗中心城',
                            desc: 'tb1',
                            person: '康赞',
                        }
                    ];
                }
                // 点击客户信息显示地图窗口
                if (data.position) {
                    var map = this.mapSign;
                    var markers = this.markerSign;   // 获取默认地图标记marker
                    // markers.push(this.markerError);  // 添加其他地图标价marker例如警告，任务动态
                    // markers.push(this.markerSite);   //清除本地图的marker
                    // markers.push(this.markerCustomer);  //清除客户弹窗列表的marker
                    markers.push(store.state.customerMarker); //清除客户列表地图marker
                    map.remove(markers);             //清除其他地图标记
                    var marker;
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
                        content:"<div id='mapInfowindow'>" +
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
                    map.setZoom(13); //设置地图层级
                    map.panBy(0, 150);
                    // this.testNumber = store.state.testNumber;
                    store.commit('setcustomerMarker', this.markerSite);
                    setTimeout(function (){
                        map.setFitView();
                        map.setZoom(13); //设置地图层级
                        map.panBy(0, 150);
                    },100);
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
                },{
                    id: '南山欢乐谷•总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [113.980375,22.542039],
                    company: '南山欢乐谷',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                    number:'1'
                }];
                //侧边栏控件数据（位置信息）
                var CustomerData = [{
                    id: '深圳',
                    label: '深圳',
                    person: '深圳',
                    children: [{
                        label: '宝安区',
                    },{
                        label: '罗湖区',
                    },{
                        label: '福田区',
                        children: [{
                            label: 'test'
                        }]
                    },{
                        label: '龙岗区',
                        children: [{
                            label: 'test'
                        }]
                    },{
                        label: '南山区'
                    },{
                        label: '盐田区'
                    },{
                        label: '坪山区'
                    },{
                        label: '龙华区',
                    }
                    ]
                }];
                _this.data = CustomerData;
                _this.mapData = data;
                //初始化地图对象，加载地图
                var map = new AMap.Map("container", {
                    resizeEnable: true, //是否监控地图容器尺寸变化
                    zoom: 12, //初始地图级别
                    // center: [114.237209, 22.722198], //初始地图中心点
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
            this.testNumber = store.state.testNumber;
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
            background: #152F5C;
            opacity: 0.9;
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

