<template>
  <el-dialog title="客户列表" :visible.sync="dialogTableVisible" :before-close='closeDialog'>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="客户类型 :">
        <el-select v-model="sizeForm.region" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属中心 :">
        <el-select v-model="sizeForm.region" placeholder="所有">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入关键字" clearable></el-input>
        <el-button type="success">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableInfoList" v-loading='loading'>
      <el-table-column property="number" label="编号" align="center" width="80"></el-table-column>
      <el-table-column property="CTname" label="客户名称" align="center" width="220"></el-table-column>
      <el-table-column property="CTtype" label="客户类型" align="center" width="170"></el-table-column>
      <el-table-column property="CTcenter" label="所属中心" align="center" width="120"></el-table-column>
      <el-table-column property="CTaddress" label="客户地址" align="center" width="320"></el-table-column>
      <el-table-column property="CTpeople" label="联系人" align="center"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
                      <el-button type="text" size="small">地图</el-button>
                      <el-button type="text" size="small">更多</el-button>
</template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration">共{{total}}条数据</span>
      <el-pagination background layout="prev, pager, next"   :current-page="currentPage"
      :page-size="pageSize" 
      @current-change="handleCurrentChange"
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
        sizeForm: {
          region: '',
        },
        gridData: [
        ],
        //分页
        total: 0,//总数据
        currentPage: 1,//当前页
        tableInfoList: [],
        pageSize: 3, //每页显示的数量
        loading: true,
        timeNum: ''//清除定时器
      }
    },
    watch: {},
    methods: {
      //关闭清除数据
      closeDialog(done) {
        this.$emit('update:dialogTableVisible', false)
        this.total=0;
        this.loading=true;
        clearTimeout(this.timeNum)
      },
      //分页请求数据数据
      getHotMovieList() {
        //请求获取数据列表
        this.timeNum = setTimeout(_ => {
          this.gridData = [{
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
          this.total = this.gridData.length;
          this.computeArr();
        }, 500)




        
      },
      //分页计算
      computeArr() {
        // 页数，如果有小数，只取整数部分
        let pageNum = Number(String(this.total / this.pageSize).split(".")[0]);
        // 定义一个空数组
        let newArr = [];
        // // 遍历获取的数据，每次遍历都把数组的0位置开始截取，截取数量为每页显示的数量
        for (let i = 0; i < pageNum; i++) {
          newArr.push(this.gridData.splice(0, this.pageSize));
        }
        // // 判断剩余的数据有没有小于每一页的数量，如果小于，就把剩余的数据放进newArr数组
        if (this.gridData.length < this.pageSize) {
          newArr.push(this.gridData.splice(0, this.gridData.length));
        }
        // // 将新的数组赋给gridData[],用来渲染页面
        this.gridData = newArr;
        // // 第一次进入页面显示this.gridData[]数组的第一个元素
        this.tableInfoList = this.gridData[0]
        this.loading = false;

      },
      //点击分页
      handleCurrentChange(currentPage) {
        this.tableInfoList = this.gridData[currentPage - 1];
      }
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
