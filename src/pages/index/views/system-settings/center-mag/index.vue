<template>
  <div class="center-mag">
    <div class="center-title ">
      <el-button type="primary" icon="el-icon-plus" size="small">新增</el-button>
    </div>
    <el-table :data="centertableList" v-loading='loading'>
      <el-table-column property="CTnumber" label="序号" align="center" width="80"></el-table-column>
      <el-table-column property="CTname" label="中心名称" align="center" width="220"></el-table-column>
      <el-table-column property="CTaddress" label="中心地址" align="center" width="170"></el-table-column>
      <el-table-column property="CTphoner" label="中心电话" align="center" width="120"></el-table-column>
      <el-table-column property="CTpeople" label="中心负责人" align="center" width="320"></el-table-column>
      <el-table-column property="PeoplePhone" label="负责人电话" align="center"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
                                          <el-button type="text" size="small">编辑</el-button>
</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    created() {},
    data() {
      return {
        loading: true,
        centertableList: [],
        timeNum: '' //清除定时器
      }
    },
    watch: {},
    created() {
      this.getList()
    },
    destroyed() {
      clearTimeout(this.timeNum)
    },
    methods: {
      getList() {
        this.loading = true,
          this.centertableList = [{
            CTnumber: '01',
            CTname: '智慧运维罗湖调度服务中心',
            CTaddress: '广东省深圳市罗湖区翠竹路1155-1159罗湖供电综合楼601室',
            CTphoner: '0755-28372910',
            CTpeople: '黎明',
            PeoplePhone: '17502031230',
          }, {
            CTnumber: '01',
            CTname: '智慧运维罗湖调度服务中心',
            CTaddress: '广东省深圳市罗湖区翠竹路1155-1159罗湖供电综合楼601室',
            CTphoner: '0755-28372910',
            CTpeople: '黎明',
            PeoplePhone: '17502031230',
          }, {
            CTnumber: '01',
            CTname: '智慧运维罗湖调度服务中心',
            CTaddress: '广东省深圳市罗湖区翠竹路1155-1159罗湖供电综合楼601室',
            CTphoner: '0755-28372910',
            CTpeople: '黎明',
            PeoplePhone: '17502031230',
          }]
        this.timeNum = setTimeout(_ => {
          this.loading = false;
        }, 500)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
