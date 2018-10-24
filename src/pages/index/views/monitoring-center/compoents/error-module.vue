<template>
    <div class="error-module" id="error_module">
        <div class="box_error">
            <div class="box_error_title">
                <span class="box_error_title_sign"></span>
                <p>告警事件</p>
                <img :src="rightArrowsIcon" alt="" @click="openAlarmEventsPop" style="cursor: pointer">
            </div>
            <div class="box_error_content">
                <ul>
                    <li v-for="(itemNumber,index) in errorNumber" class="box_error_content_number">
                        <div><span class="error_number">{{itemNumber.number}}</span><span>个</span></div>
                        <div></div>
                        <div><span>{{itemNumber.id}}</span></div>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div>
                    <div>
                        <ul>
                            <li v-for="(item ,index) in errorData" class="box_error_content_list">
                                <div @click="errorBtn(item)">
                                    <div>{{item.id}}</div>
                                    <div :class="item.number==0?'errorOne':item.number==1?'errorTwo':item.number==2? 'errorThree':item.number==4?'errorFour':''">
                                        {{item.number==0?'特别严重':item.number==1?'严重':item.number==2?
                                        '较重':item.number==4?'一般':''}}
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!--告警列表弹窗组件-->
        <alarm-events-pop :alarmEvents.sync="alarmEvents" class="common " ref='alarmeventspop'></alarm-events-pop>

        <disposePop :disposePopModule.sync="disposePopModule" ref='disposePop'></disposePop>
    </div>
</template>
<script>
    import rightArrowsIcon from '@/assets/icon/rightArrows.png'
    import AlarmEventsPop from '@/pages/index/views/monitoring-center/compoents/alarm-events-pop'
    import store from '@/pages/index/store/index.js'
    import disposePop from '@/pages/index/views/monitoring-center/compoents/dispose-pop'
    export default {
        props: ['mapSign', 'markerSign', ],
        name: "error-modele",
        data() {
            return {
                textarea: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                // formLabelWidth: '20px',
                markerError: '',
                errorNumber: [{         //告警事件层级
                    id: '特别严重',
                    number: '0'
                }, {         //告警事件列表数据
                    id: '严重',
                    number: '1'
                }, {         //告警事件列表数据
                    id: '较重',
                    number: '2'
                }, {         //告警事件列表数据
                    id: '一般',
                    number: '3'
                }],
                errorData: [{         //告警事件列表数据
                    id: '深鹏达电网科技有限公司•香丽大厦·总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [114.039864, 22.551399],
                    desc: '0',
                    company: '深鹏达电网科技有限公司',
                    person: '蔡少辉',
                    phone: '12345678912',
                    number: '0'
                }, {
                    id: '南山欢乐谷•总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [113.980375, 22.542039],
                    company: '南山欢乐谷',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                    number: '1'
                }, {
                    id: '龙岗中心城•总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [114.237209, 22.722198],
                    company: '龙岗中心城',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                    number: '2'
                }, {
                    id: '深圳东站•总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [114.118333, 22.603072],
                    company: '深鹏达电网科技有限公司',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                    number: '2'
                }, {
                    id: '东部华侨城•总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [114.237209, 22.722198],
                    company: '深鹏达电网科技有限公司',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                    number: '2'
                }, {
                    id: '深圳大运中心体育馆•总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [114.214464, 22.695591],
                    company: '深圳大运中心体育馆',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                    number: '2'
                }],

                disposePopModule:false,
                alarmEvents: false,  //告警列表弹窗
                rightArrowsIcon,
            }
        },
        methods: {
            openAlarmEventsPop() {   //告警列表弹窗
                this.alarmEvents = true;
                this.$refs.alarmeventspop.getHotMovieList()
            },
            errorBtn(data) {
                var _this = this;
                var map = this.mapSign;
                var markers = this.markerSign;
                // var markerSite = this.markerSite;
                // markers.push(markerSite);
                // markers.push(this.markerError);
                markers.push(store.state.customerMarker); //清除客户列表地图marker
                map.remove(markers);
                var marker = '';
                marker = new AMap.Marker({
                    position: [data.position[0], data.position[1]],
                    offset: new AMap.Pixel(-13, -30),
                });
                marker.setMap(map);
                this.markerError = marker;
                AMap.event.addListener(marker, 'click', function () {
                    infoWindow.open(map, marker.getPosition());
                });
                // var errorMapInfoWindow = document.getElementById("errorMapInfoWindow");
                var errorContent = "<div class='errorInfowindow'>" +
                    "<div class='errorTitle'>告警闲情:</div>" +
                    "<div class='errorState'>客户名称:</div>" +
                    "<div class='errorState'>告警等级:</div>" +
                    "<div class='errorState'>故障设备:</div>" +
                    "<div class='errorState'>故障说明:</div>" +
                    "<div class='errorState'>客户联系人:</div>" +
                    "<div class='errorState'>中心负责人:</div>" +
                    "<div class='publishBox'>" +
                    "<span class='publishBtn'>发布任务</span>" +
                    "<span id='disposeBtn' class='disposeBtn'>处理</span>" +
                    "</div>" +
                    "</div>";
                var infoWindow = new AMap.InfoWindow({
                    // isCustom: true,  //使用自定义窗体
                    content: errorContent,
                    offset: new AMap.Pixel(-20, -30)
                });
                infoWindow.open(map, marker.getPosition());
                map.setFitView();
                map.setZoom(13); //设置地图层级
                map.panBy(0, 150);

                // 向父组件传值--点击的marker
                // this.$emit('markerErrorValue', this.markerError);
                //通过vuex，store 向同级组件传值：客户列表地图 marker
                store.commit('setcustomerMarker', this.markerError);
                setTimeout(function () {
                    console.log("123111");
                    map.setFitView();
                    map.setZoom(13); //设置地图层级
                    map.panBy(0, 150);
                },100);
                setTimeout(function () {
                    var chuli = document.getElementById("disposeBtn");
                    chuli.onclick = function () {
                        _this.disposePopModule = true;
                    }
                },1000)
            }
        },
        created() {
        },
        mounted() {
        },
        components: {
            AlarmEventsPop,
            disposePop,
        }
    }
</script>
<style class="AMap.style" lang="scss">
    .amap-info-content {
        .errorInfowindow {
            padding: 10px 20px;
            height: 300px;
            .errorTitle {
                font-size: 18px;
                padding-bottom: 10px;
            }
            .errorState {
                height: 30px;
                line-height: 30px;
            }
            .publishBox {
                float: right;
                margin-top: 15px;
                .publishBtn {
                    background: #009688;
                    padding: 10px;
                    color: white;
                    border-radius: 4px;
                    margin-right: 10px;
                }
                .disposeBtn {
                    background: #D9D9D9;
                    padding: 10px;
                    color: #666666;
                    border-radius: 4px;
                }
            }
        }
    }

    .amap-info-sharp {
        border-top: 15px solid #152F5C;
        border-left: 15px transparent dashed;
        border-right: 15px transparent dashed;
        background-image: none;
    }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../../styles/monitoring.scss";

    html {
        font-size: 100px;
    }

    @font-face {
        font-family: 'NeuesBauenDemo';
        src: url('../../../../../assets/font/DS-DIGIB.TTF');
        font-weight: normal;
        font-style: normal;
    }

    .error_number {
        font-family: 'NeuesBauenDemo';
        font-size: 30px;
    }
</style>
