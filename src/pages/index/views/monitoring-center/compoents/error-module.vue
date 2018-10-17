<template>
    <div class="error-module">
         <div class="error">
             <div  class="box_error_title">
                 <span class="box_error_title_sign"></span>
                 <p>任务动态</p>
                 <!--<img :src="rightArrowsIcon" alt="">-->
             </div>
             <div class="box_error_content">
                 <ul>
                     <li>
                       <div @click="errorBtn">告警</div>
                     </li>
                 </ul>
             </div>
         </div>

        <!--警告地图窗口-->
        <div id="errorMapInfoWindow" >
            <span>警告窗口</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:['mapSign','markerSign','markerSite','tests'],
        name: "error-modele",
        data(){
            return{
                // mapSign,
                markerError:'',
            }
        },
        methods:{
            errorBtn(){
                    var map = this.mapSign;
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
                            position: [114.039498, 22.552612],
                            offset: new AMap.Pixel(-13, -30),
                        });
                        marker.setMap(map);
                    }
                    addMarker();
                    this.markerError = marker;
                    AMap.event.addListener(marker, 'click', function () {
                        infoWindow.open(map, marker.getPosition());
                    });
                    var errorMapInfoWindow = document.getElementById("errorMapInfoWindow");

                    // var newdiv = document.createElement("div ");
                    // newdiv.innerHTML = '<div id="aa">123</div>';

                    var infoWindow = new AMap.InfoWindow({
                        // isCustom: true,  //使用自定义窗体
                        content: errorMapInfoWindow,
                        offset: new AMap.Pixel(16, -45)
                    });
                    AMap.event.addListener(marker, 'click', function () {
                        infoWindow.open(map, marker.getPosition());
                    });
                    infoWindow.open(map, marker.getPosition());
                    map.setFitView();
                    map.setZoom(15); //设置地图层级
                    console.log(infoWindow);

                    // 向父组件传值--点击的marker
                    this.$emit('markerErrorValue',this.markerError)
            }
        },
        mounted(){
            var _this =this;
            console.log(this.tests);
            setTimeout(function () {
                console.log(_this.mapSign,'123')
            },1000);

        }
    }
</script>

<style scoped>

</style>
