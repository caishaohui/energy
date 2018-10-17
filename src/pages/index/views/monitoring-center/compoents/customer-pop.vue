<template>
  <el-dialog title="客户列表" :visible.sync="dialogTableVisible" :before-close='closeDialog'>
    <el-form ref="form" :model="listQuery" label-width="80px" size="mini" class="customer-list">
      <el-form-item label="客户类型 :">
        <el-select v-model="listQuery.type" placeholder="全部">
          <el-option v-for="item in typeOptions" :key="item.id" :label="item.label" :value="item.id" />
        </el-select>
      </el-form-item> 
      <el-form-item label="所属中心 :">
        <el-select v-model="listQuery.center" placeholder="所有">
          <el-option v-for="item in centerOptions" :key="item.id" :label="item.label" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入关键字" clearable v-model="listQuery.keyword" @keyup.enter.native="handleFilter"></el-input>
        <el-button type="success" @click="handleFilter" size="small">搜索</el-button>
      </el-form-item>
    </el-form>
    <div class="container-body">
      <el-table :data="tableInfoList" v-loading='loading'  element-loading-text="加载中">
        <el-table-column property="number" label="编号" align="center" width="80"></el-table-column>
        <el-table-column property="CTname" label="客户名称" align="center" width="220"></el-table-column>
        <el-table-column property="CTtype" label="客户类型" align="center" ></el-table-column>
        <el-table-column property="CTcenter" label="所属中心" align="center"></el-table-column>
        <el-table-column property="CTaddress" label="客户地址" align="center"></el-table-column>
        <el-table-column property="CTpeople" label="联系人" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
                                  <el-button type="text" size="small">地图</el-button>
                                  <el-button type="text" size="small">更多</el-button>
</template>
      </el-table-column>
    </el-table>
       </div>
    <div class="block">
      <span class="demonstration">共{{total}}条数据</span>
      <el-pagination  v-show="total>0"  background layout="prev, pager, next"  
      @current-change="handleCurrentChange"
      :page-size="listQuery.limit"
      :current-page="listQuery.page"
      :total="total"> </el-pagination>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    created() {},
    props: ['dialogTableVisible'],
    data() {
      return {
        //请求和查询参数分页
        listQuery: {
          page: 1, //请求哪一页
          limit: 3, //请求每页条数
          type: undefined,
          center: undefined,
          keyword: '',
        },
        typeOptions: [{
          label: '所有',
          id: '0'
        }, {
          label: '未处理',
          id: '1'
        }, {
          label: '已解决',
          id: '2'
        }, {
          label: '已忽略',
          id: '3'
        }],
        centerOptions: [{
          label: '所有',
          id: '0'
        }, {
          label: '严重',
          id: '1'
        }, {
          label: '紧急',
          id: '2'
        }, {
          label: '普通',
          id: '3'
        }],
        //分页
        total: null, //总数据
        tableInfoList: [],
        loading: true,
        timeNum: '' //清除定时器
      }
    },
    watch: {},
    methods: {
      //关闭清除数据
      closeDialog(done) {
        this.$emit('update:dialogTableVisible', false)
        this.total = 0;
        clearTimeout(this.timeNum)
      },
      //分页请求数据数据
      getHotMovieList() {
        //请求获取数据列表
        this.loading = true
        this.tableInfoList = [{
          number: '01',
          CTname: '深鹏达电网科技有限公司',
          CTtype: '普通会员',
          CTcenter: '福田',
          CTaddress: '深圳市福田区莲花路2075号香丽大厦裙楼三楼',
          CTpeople: '黎明-17503091882',
        }, {
          number: '01',
          CTname: '深鹏达电网科技有限公司',
          CTtype: '普通会员',
          CTcenter: '福田',
          CTaddress: '深圳市福田区莲花路2075号香丽大厦裙楼三楼',
          CTpeople: '黎明-17503091882',
        }, {
          number: '01',
          CTname: '深鹏达电网科技有限公司',
          CTtype: '普通会员',
          CTcenter: '福田',
          CTaddress: '深圳市福田区莲花路2075号香丽大厦裙楼三楼',
          CTpeople: '黎明-17503091882',
        }, {
          number: '01',
          CTname: '深鹏达电网科技有限公司',
          CTtype: '普通会员',
          CTcenter: '福田',
          CTaddress: '深圳市福田区莲花路2075号香丽大厦裙楼三楼',
          CTpeople: '黎明-17503091882',
        }, ]
        this.total = 10
        this.timeNum = setTimeout(_ => {
          this.loading = false;
        }, 500)
      },
      //点击分页
      handleCurrentChange(currentPage) {
        this.listQuery.page = currentPage
        this.getHotMovieList()
      },
      handleFilter() {
        this.listQuery.page = 1
        this.getHotMovieList()
      },
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
