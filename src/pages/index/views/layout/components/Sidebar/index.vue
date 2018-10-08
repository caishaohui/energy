<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
  
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#393D49"
      text-color="#b9bbbf"
      active-text-color="#FFFFFF"
    >
        <img  class="pic-404__child left" :src="img_404_cloud" alt="404">
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import img_404_cloud from '@/assets/404_images/404.png'
export default {
    data() {
    return {
      img_404_cloud,
    }
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      console.log('555',this.$router.options.routes);
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
.pic-404__child{
  width: 180px;
  height: 50px;
}
</style>