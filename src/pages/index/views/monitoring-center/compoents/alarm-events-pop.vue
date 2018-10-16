<template>
    <el-dialog title="告警事件" :visible.sync="alarmEvents" :before-close='closeDialog'>
        <el-form ref="form" :model="listQuery" label-width="80px" size="mini" class="alarmEvents">
            <el-form-item label="等级 :">
                <el-select v-model="listQuery.grade" placeholder="所有">
                    <el-option v-for="item in gradeOptions" :key="item.id" :label="item.label" :value="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item label="状态 :">
                <el-select v-model="listQuery.state" placeholder="所有">
                    <el-option v-for="item in stateOptions" :key="item.id" :label="item.label" :value="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item label="客户 :">
                <el-input placeholder="请输入" v-model="listQuery.client" @keyup.enter.native="handleFilter"></el-input>
            </el-form-item>
            <el-form-item label="起止时间 :">
                <el-date-picker v-model="listQuery.startTime" type="datetimerange" align="right" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00', '08:00:00']">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="handleFilter"  size="small">查询</el-button>
                <el-button type="success" @click="exportExcel" :loading="downloadLoading"  size="small">导出报表</el-button>
                <el-button type="success"  size="small">批量处理</el-button>
            </el-form-item>
        </el-form>
        <el-table id="rebateSetTable" :data="tableInfoList" ref="multipleTable" v-loading='loading' @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="35"></el-table-column>
            <el-table-column property="number" label="编号" align="center" width="80"></el-table-column>
            <el-table-column property="CTname" label="客户名称" align="center"></el-table-column>
            <el-table-column property="grade" label="等级" align="center"></el-table-column>
            <el-table-column property="describe" label="描述" align="center"></el-table-column>
            <el-table-column property="occurrenceTime" label="发生时间" align="center"></el-table-column>
            <el-table-column property="equipment" label="设备" align="center"></el-table-column>
            <el-table-column property="state" label="状态" align="center"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                                                                        <el-button type="text" size="small">处理</el-button>
</template>
            </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration">共{{total}}条数据</span>
      <el-pagination v-show="total>0"  background layout="prev, pager, next"   
      @current-change="handleCurrentChange"
      :page-size="listQuery.limit"
      :current-page="listQuery.page"
      :total="total"> </el-pagination>
    </div>
  </el-dialog>
</template>

<script>
    export default {
        name: 'AlarmEvents',
        created() {},
        props: ['alarmEvents'],
        data() {
            return {
                //请求和查询参数分页
                listQuery: {
                    page: 1, //请求哪一页
                    limit: 3, //请求每页条数
                    state: undefined,
                    grade: undefined,
                    client: undefined,
                    startTime: undefined
                },
                gradeOptions: [{ label: '所有', id: '0' },{ label: '未处理', id: '1' }, { label: '已解决', id: '2' }, { label: '已忽略', id: '3' }],
                stateOptions: [{ label: '所有', id: '0' },{ label: '严重', id: '1' }, { label: '紧急', id: '2' }, { label: '普通', id: '3' }],
                total: null,
                tableInfoList: [],
                loading: true, //列表loding
                timeNum: '', //清除定时器
                multipleSelection: [], //表单全选
                downloadLoading: false, //导出按钮loding
                filename: '告警列表', //导出excel名
            }
        },
        watch: {},
        methods: {
            //导出
            exportExcel() {
                if (this.multipleSelection.length) {
                    this.downloadLoading = true
                    import ('@/vendor/Export2Excel.js').then(excel => {
                        console.log('HV', excel);
                        const tHeader = ['编号', '客户名称', '等级', '描述', '发生时间', '设备', '状态']
                        const filterVal = ['number', 'CTname', 'grade', 'describe', 'occurrenceTime', 'equipment', 'state']
                        const list = this.multipleSelection
                        const data = this.formatJson(filterVal, list)
                        excel.export_json_to_excel({
                            header: tHeader,
                            data,
                            filename: this.filename
                        })
                        this.$refs.multipleTable.clearSelection();
                        this.downloadLoading = false
                    }).catch(err => {
                        this.downloadLoading = false
                        this.$message({
                            message: '导出失败，请确认！',
                            type: 'warning'
                        })
                    })
                } else {
                    this.$message({
                        message: '请最少选择一条数据',
                        type: 'warning'
                    })
                }
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
            //关闭清除数据
            closeDialog(done) {
                this.$emit('update:alarmEvents', false)
                this.total = null;
                clearTimeout(this.timeNum)
            },
            //全选
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            //全选获取的值
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //分页请求数据数据
            getHotMovieList() {
                //请求获取数据列表
                this.loading = true
                //后台数据
                this.tableInfoList = [{
                    number: '01',
                    CTname: '深鹏达电网科技有限公司',
                    grade: '紧急',
                    describe: '专用综合房电压异常',
                    occurrenceTime: '2018.08.03 18:32:12',
                    equipment: '专用综合房门禁',
                    state: '未处理'
                }, {
                    number: '02',
                    CTname: '深鹏达电网科技有限公司',
                    grade: '紧急',
                    describe: '专用综合房电压异常',
                    occurrenceTime: '2018.08.03 18:32:12',
                    equipment: '专用综合房门禁',
                    state: '未处理'
                }, {
                    number: '03',
                    CTname: '深鹏达电网科技有限公司',
                    grade: '紧急',
                    describe: '专用综合房电压异常',
                    occurrenceTime: '2018.08.03 18:32:12',
                    equipment: '专用综合房门禁',
                    state: '未处理'
                }, {
                    number: '01',
                    CTname: '深鹏达电网科技有限公司',
                    grade: '紧急',
                    describe: '专用综合房电压异常',
                    occurrenceTime: '2018.08.03 18:32:12',
                    equipment: '专用综合房门禁',
                    state: '未处理'
                }, ]
                //后台数据
                this.total = 20;
                //后台请求时间
                this.timeNum = setTimeout(() => {
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
