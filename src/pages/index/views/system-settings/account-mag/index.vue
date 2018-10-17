<template>
  <div class="app-container" style="height:100%">
    <div class="common container-body">
      <div class="center-title account-mag">
        <el-form ref="form" :model="listQuery" label-width="80px" >
          <el-form-item label="类型选择 :">
            <el-select v-model="listQuery.type" placeholder="中心/客户">
              <el-option v-for="item in typeOptions" :key="item.id" :label="item.label" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item label="客户名称 :">
            <el-select v-model="listQuery.client" placeholder="所有">
              <el-option v-for="item in clientOptions" :key="item.id" :label="item.label" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item class="clearMargin">
            <el-input placeholder="请输入关键字" clearable v-model="listQuery.keyword" @keyup.enter.native="handleFilter"></el-input>
            <el-button type="success" size="small">搜索</el-button>
          </el-form-item>
          <el-form-item class="clearMargin" style="float:right;">
            <el-button type="success" icon="el-icon-plus" size="small">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="centertableList" v-loading='loading'  element-loading-text="加载中">
        <el-table-column property="number" label="序号" align="center" width='100'></el-table-column>
        <el-table-column property="userName" label="用户名" align="center"></el-table-column>
        <el-table-column property="loginAccounts" label="登录账号" align="center"></el-table-column>
        <el-table-column property="subordinateRole" label="所属角色" align="center"></el-table-column>
        <el-table-column property="state" label="状态" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
                          <el-button type="text" size="small">编辑</el-button>
                          <el-button type="text" size="small">刪除</el-button>
</template>
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    created() {},
    data() {
      return {
        loading: true,
        centertableList: [],
        timeNum: '', //清除定时器
        listQuery: {
          page: 1, //请求哪一页
          limit: 3, //请求每页条数
          type: undefined,
          client: undefined,
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
        clientOptions: [{
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
            number: '01',
            userName: '深圳金丰城科技发展中心有限公司',
            loginAccounts: 'kjqoah123',
            subordinateRole: '值班员',
            state: '启用',
          }, {
            number: '02',
            userName: '深圳金丰城科技发展中心有限公司',
            loginAccounts: 'kjqoah123',
            subordinateRole: '值班员',
            state: '启用',
          }, {
            number: '03',
            userName: '深圳金丰城科技发展中心有限公司',
            loginAccounts: 'kjqoah123',
            subordinateRole: '值班员',
            state: '启用',
          }, ]
        this.timeNum = setTimeout(_ => {
          this.loading = false;
        }, 500)
      }
    }
  }
</script>

