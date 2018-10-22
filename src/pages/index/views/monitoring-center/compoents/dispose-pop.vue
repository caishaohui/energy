<template>
<div>
        <el-dialog
                width="400px" style="border-radius: 5px"
                title="处理"
                :visible.sync="disposePopModule"
                :before-close='closeDialog'
                append-to-body>
            <el-form ref="form" label-width="80px">
                <!--<el-form :model="form">-->
                <el-form-item label="处理类型:">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="未处理" value="shanghai" style="padding-left: 10px"></el-option>
                        <el-option label="已处理" value="beijing" style="padding-left: 10px"></el-option>
                        <el-option label="已忽略" value="beijing" style="padding-left: 10px"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="处理说明:">
                    <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea" width="200px"></el-input>
                </el-form-item>
                <!--</el-form>-->
            </el-form>
                   <span slot="footer" class="dialog-footer">
    <el-button @click="closeDisposePop">取 消</el-button>
    <el-button type="primary" @click="closeDisposePop">确 定</el-button>
  </span>
        </el-dialog>
</div>
</template>

<script>
    export default {
        props: ['disposePopModule'],
        name: "dispose-pop",
        data(){
            return{
                textarea: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
            }
        },
        methods:{
            //关闭清除数据
            closeDialog(done) {
                this.$emit('update:disposePopModule', false);
                // this.total = null;
                // clearTimeout(this.timeNum)
            },
            closeDisposePop(){
                this.$emit('update:disposePopModule', false);
            }
        }
    }
</script>

<style scoped>

</style>
