<template>
    <div class="error-module" id="error_module" style="height: 50%">

         <div class="box_error">
             <div  class="box_error_title">
                 <span class="box_error_title_sign"></span>
                 <p>告警事件</p>
                 <img :src="rightArrowsIcon" alt="" @click="openAlarmEventsPop" style="cursor: pointer">
             </div>
             <div class="box_error_content">
                 <ul>
                     <li></li>
                 </ul>

                 <ul>
                     <li v-for="(item ,index) in errorData">
                       <div @click="errorBtn(item)">{{item.id}}</div>
                     </li>
                 </ul>
             </div>
         </div>

        <!--处理弹窗-->
        <el-dialog title="收货地址" :visible.sync="disposeVisible" width="300px">
            <span>需要注意的是内容是默认不居中的</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="disposeVisible = false">取 消</el-button>
    <el-button type="primary" @click="disposeVisible = false">确 定</el-button>
  </span>
        </el-dialog>

           <!--告警列表弹窗组件-->
        <alarm-events-pop :alarmEvents.sync="alarmEvents" class="common " ref='alarmeventspop'></alarm-events-pop>
    </div>
</template>
<script>
    import rightArrowsIcon from  '@/assets/icon/rightArrows.png'
    import AlarmEventsPop from '@/pages/index/views/monitoring-center/compoents/alarm-events-pop'
    // import disposePop from '@/pages/index/views/monitoring-center/compoents/dispose-pop'
    export default {
        props:['mapSign','markerSign','markerSite','tests'],
        name: "error-modele",
        data(){
            return{
                markerError:'',
                errorData : [{         //告警事件列表数据
                    id: '配电房门禁异常',
                    position: [114.039864, 22.551399],
                    desc: '0',
                    company: '深鹏达电网科技有限公司',
                    person: '蔡少辉',
                    phone: '12345678912',
                }, {
                    id: '总功率因素低',
                    position: [114.039498, 22.552612],
                    company: '深鹏达电网科技有限公司',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                }, {
                    id: '配电房门禁异常',
                    position: [114.237209, 22.722198],
                    company: '深鹏达电网科技有限公司',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                },
                    {
                        id: '配电房门禁异常(龙岗中心城)',
                        position: [114.237209,22.722198],
                        company: 'XXX公司',
                        phone: '13556885862',
                        desc: '1',
                        person: '黄东文',
                    }],
                disposeVisible:false,
                alarmEvents: false,  //告警列表弹窗
                rightArrowsIcon,  //
            }
        },
        methods:{
            openAlarmEventsPop() {   //告警列表弹窗
                this.alarmEvents = true;
                this.$refs.alarmeventspop.getHotMovieList()
            },
            disposeVisiblebtn(){
                // this.disposeVisible = true
            },
            errorBtn(data){
                    var _this = this;
                    var map = this.mapSign;
                    map.setCenter([114.039864, 22.551399]);
                    var markers = this.markerSign;
                    var markerSite = this.markerSite;
                    markers.push(markerSite);
                    markers.push(this.markerError);
                    map.remove(markers);
                    // map.remove(markerSite);
                    // console.log(map,'af');
                    var marker = '';
                    function addMarker() {
                        marker = new AMap.Marker({
                            position: data.position,
                            offset: new AMap.Pixel(-13, -30),
                        });
                        marker.setMap(map);
                    }
                    addMarker();
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
                    "<span class='publishBtn'>发布任务</span>"+
                    "<span id='disposeBtn' class='disposeBtn'>处理</span>"+
                    "</div>"+
                    "</div>";
                    var infoWindow = new AMap.InfoWindow({
                        // isCustom: true,  //使用自定义窗体
                        content: errorContent,
                        offset: new AMap.Pixel(-20, -30)
                    });
                    AMap.event.addListener(marker, 'click', function () {
                        infoWindow.open(map, marker.getPosition());
                    });
                // AMap.setPointToCenter(400,400)
                    infoWindow.open(map, marker.getPosition());
                    map.setFitView();
                    map.setZoom(15); //设置地图层级
                    console.log(infoWindow);
                    // 向父组件传值--点击的marker
                    this.$emit('markerErrorValue',this.markerError);
                    setTimeout(function (){
                        var chuli = document.getElementById("disposeBtn");
                        chuli.onclick = function () {
                          _this.disposeVisible = true
                        }
                    },1000)

            }
        },
        created(){
        },
        mounted(){
        },
        components: {
            AlarmEventsPop,
        }
    }
</script>
<style class="AMap.style" lang="scss">
    .amap-info-content {
        .errorInfowindow{
            padding: 10px 20px;
            height: 300px;
            .errorTitle{
                font-size: 18px;
                /*border-bottom: 1px solid white;*/
                padding-bottom: 10px;
            }
            .errorState{
                height: 30px;
                line-height: 30px;
            }
            .publishBox{
                float: right;
                margin-top: 15px;
                .publishBtn{
                    background:#009688;
                    padding: 10px;
                    color: white;
                    border-radius: 4px;
                    margin-right: 10px;
                }
                .disposeBtn{
                    background:#D9D9D9 ;
                    padding: 10px;
                    color: #666666;
                    border-radius: 4px;
                }
            }
        }
    }
.amap-info-sharp{

    border-top: 15px solid #152F5C;
    border-left: 15px  solid transparent;
    border-right: 15px  solid transparent;
}
</style>
<style rel="stylesheet/scss" lang="scss"  scoped>
    @import "../../../styles/monitoring.scss";
    html{
        font-size: 100px;
    }

</style>
