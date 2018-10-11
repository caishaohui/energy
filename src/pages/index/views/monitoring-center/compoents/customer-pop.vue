<template>
<el-dialog title="收货地址" :visible.sync="dialogTableVisible" :before-close='closeDialog'>
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>

</template>

<script>
export default {
  created() {
  },
   props:['dialogTableVisible'],
  data() {
    return {
      aaa:false,
         gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
    }
  },
  watch: {
 
  },
  methods: {
  
    closeDialog(done){
     
       this.$emit('update:dialogTableVisible', false)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
