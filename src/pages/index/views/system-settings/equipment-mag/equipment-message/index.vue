<template>
  <div class="app-container" style="height:100%">
    <div class="equipment-body">
      <div class="equipment-left">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="equipment-center"></div>
      <div class="equipment-right">
        <el-form :model="ruleForm" ref="ruleForm" label-width="150px" class="demo-ruleForm">
          <el-form-item label="设备类型 :">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备子类 :">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备名称 :">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="设备地址  :">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="配电房（选填） :">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="配电柜（选填） :">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="设备详细信息 :">
            <div> <span>属姓名</span> <span>属姓值</span> </div>
            <div v-for="(item,index) in equipmentList" :key="index">
              <el-input type="textarea" v-model="item.name"></el-input>
              <el-input type="textarea" v-model="item.value"></el-input>
              <i class="el-icon-delete" @click="delEquipmentOnelist(index)"></i>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button @click='addEquipmentOnelist'>添加</el-button>
          </el-form-item>
          <el-form-item>
            <el-button>取消</el-button>
            <el-button type="success">确定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {},
    data() {
      return {
        data: [{
          label: '深鹏达电网科技有限公司',
          children: [{
            label: '电气设备',
            children: [{
              label: '变压器',
              children: [{
                  label: '变压器A'
                },
                {
                  label: '变压器B'
                },
              ]
            }, {
              label: '母线',
              children: [{
                  label: '母线A'
                },
                {
                  label: '母线B'
                },
              ]
            }, {
              label: '线路',
              children: [{
                  label: '线路A'
                },
                {
                  label: '线路B'
                },
              ]
            }]
          }, {
            label: '非电气设备',
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        ruleForm: {
          region: '',
          desc: ''
        },
        equipmentList:[] //设备详细信息
      };
    },
    watch: {},
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      addEquipmentOnelist(){
         this.equipmentList.push({
          name: '',
          value: ''
        });
      },
      delEquipmentOnelist(index){
         this.equipmentList.splice(index,1)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .equipment-body {
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    .equipment-left {
      width: 15%;
      min-width: 200px;
      height: 100%;
      padding: 27px 0 0 10px;
      margin-right: 0.2rem;
    }
    .equipment-center {
      width: 0.2rem;
      height: 100%;
      background: #e4eaf6;
    }
    .equipment-right {
      flex: 1;
      display: flex;
      justify-content: center;
      overflow-y: auto;
    }
  }
</style>
