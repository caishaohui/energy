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
                     <li v-for="(itemNumber,index) in errorNumber" class="box_error_content_number">
                         <div><span class="error_number">{{itemNumber.number}}</span><span>个</span></div>
                         <div></div>
                         <div><span>{{itemNumber.id}}</span></div>
                     </li>
                 </ul>

                 <ul>
                     <li v-for="(item ,index) in errorData" class="box_error_content_list">
                       <div @click="errorBtn(item)">
                           <div>{{item.id}}</div>
                           <div>严重</div>
                           <div class="clear"></div>
                       </div>
                     </li>
                 </ul>
             </div>
         </div>

        <!--处理弹窗-->
        <el-dialog title="处理" :visible.sync="disposeVisible" width="400px">
            <el-form ref="form"  label-width="80px" size="mini" class="alarmEvents">
                <el-form-item label="状态 :">
                    <!--<el-select  placeholder="所有">-->
                        <!--<el-option :value=""/></el-select>-->
                </el-form-item>
            </el-form>
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
                errorNumber : [{         //告警事件层级
                    id: '特别严重',
                    number:'0'
                },{         //告警事件列表数据
                    id: '严重',
                    number:'1'
                },{         //告警事件列表数据
                    id: '较重',
                    number:'2'
                },{         //告警事件列表数据
                    id: '一般',
                    number:'3'
                }],

                errorData : [{         //告警事件列表数据
                    id: '2AN21-4#变压器进线开关•总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [114.039864, 22.551399],
                    desc: '0',
                    company: '深鹏达电网科技有限公司',
                    person: '蔡少辉',
                    phone: '12345678912',
                }, {
                    id: '2AN21-4#变压器进线开关•总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [114.237209, 22.722198],
                    company: '深鹏达电网科技有限公司',
                    phone: '13556885862',
                    desc: '1',
                    person: '黄东文',
                }, {
                    id: '2AN21-4#变压器进线开关•总功率因素低，当前值：0.86，小于下限值：0.9\n' +
                    '南山•深大附中高中部',
                    position: [114.237209, 22.722198],
                    company: '深鹏达电网科技有限公司',
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
                    var markers = this.markerSign;
                    var markerSite = this.markerSite;
                    markers.push(markerSite);
                    markers.push(this.markerError);
                    map.remove(markers);
                    var marker = '';
                        marker = new AMap.Marker({
                            position: [data.position[0],data.position[1]],
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
                    infoWindow.open(map, marker.getPosition());
                    // map.panTo(data.position);

// 简写 var position = [116, 39];

// 获取地图中心点
//                 var currentCenter = map.getCenter();

                    map.setFitView();
                    map.setZoom(13); //设置地图层级
                    map.panBy(0, 150);
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
