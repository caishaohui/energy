<template>
  <div>
    <div class='top-logo'>
      &nbsp;&nbsp;<img class="logo left" :src="logo" alt="logo">&nbsp;&nbsp;智慧能源云平台
    </div>
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu mode="vertical" :show-timeout="200" :default-active="$route.path" :collapse="isCollapse" background-color="#393D49" text-color="#b9bbbf" active-text-color="#FFFFFF">
        <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import SidebarItem from './SidebarItem'
  import logo from '@/assets/icon/logo.png'
  export default {
    data() {
      return {
        logo,
      }
    },
    components: {
      SidebarItem
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      routes() {
        console.log('555', this.$router.options.routes);
        return this.$router.options.routes
      },
      isCollapse() {
        //加了这个点击收缩有卡顿
        return !this.sidebar.opened

      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .top-logo {
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 0.24rem;
    color: #FFFFFF;
    background-color: #23262E;
    img{
      width: 0.32rem;
      height: 0.24rem;
    }
    .logo {
      vertical-align: sub;
    }
  }
  .el-scrollbar {
    height: 100%;
  }
</style>