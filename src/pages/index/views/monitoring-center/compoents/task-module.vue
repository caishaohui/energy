<template>
    <div id="task_module" >
        <div class="box_task" >
            <div class="box_task_title">
                <span class="box_task_title_sign"></span>
                <p>任务动态</p>
                <img :src="rightArrowsIcon" alt="">
            </div>
            <div class="box_task_content">
                <div>
               <ul>
                  <li>
                      <img :src="taskCustomerIcon" alt="">
                      <div class="box_task_content_site">
                          <div >巡检</div>
                          <div>福田</div>
                      </div>
                      <div class="box_task_content_achieve">待审批</div>
                      <div class="clear"></div>
                  </li>
                   <li>
                       <img :src="taskCustomerIcon" alt="">
                       <div class="box_task_content_site">
                           <div >巡检</div>
                           <div>福田</div>
                       </div>
                       <div class="box_task_content_achieve">待审批</div>
                       <div class="clear"></div>
                   </li>
                   <li>
                       <img :src="taskCustomerIcon" alt="">
                       <div class="box_task_content_site">
                           <div >巡检</div>
                           <div>福田</div>
                       </div>
                       <div class="box_task_content_achieve">待审批</div>
                       <div class="clear"></div>
                   </li>
                   <li>
                       <img :src="taskCustomerIcon" alt="">
                       <div class="box_task_content_site">
                           <div >巡检</div>
                           <div>福田</div>
                       </div>
                       <div class="box_task_content_achieve">待审批</div>
                       <div class="clear"></div>
                   </li>
                   <li>
                       <img :src="taskCustomerIcon" alt="">
                       <div class="box_task_content_site">
                           <div >巡检</div>
                           <div>福田</div>
                       </div>
                       <div class="box_task_content_achieve">待审批</div>
                       <div class="clear"></div>
                   </li>
                   <li>
                       <img :src="taskCustomerIcon" alt="">
                       <div class="box_task_content_site">
                           <div >巡检</div>
                           <div>福田</div>
                       </div>
                       <div class="box_task_content_achieve">待审批</div>
                       <div class="clear"></div>
                   </li>
                   <li>
                       <img :src="taskCustomerIcon" alt="">
                       <div class="box_task_content_site">
                           <div >巡检</div>
                           <div>福田</div>
                       </div>
                       <div class="box_task_content_achieve">待审批</div>
                       <div class="clear"></div>
                   </li>
               </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import rightArrowsIcon from  '@/assets/icon/rightArrows.png'
    import taskCustomerIcon from  '@/assets/icon/taskCustomer.png'
    export default {
        name: "task-module",
        data(){
            return{
                rightArrowsIcon,
                taskCustomerIcon
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
    @import "../../../styles/monitoring.scss";
    html{
        font-size: 100px;
    }

</style>
