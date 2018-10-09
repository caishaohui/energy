<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div><!--初始不显示-->
    <!--侧边栏模块-->
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
        <!--头部模块-->
      <navbar></navbar>
        <!--主体模块 渲染子路由-->
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import Cookies from 'js-cookie'
export default {
    name: "layout",
    components: {
        Navbar,
        Sidebar,
        AppMain
    },
    mixins: [ResizeMixin],//混入根据页面尺寸设置侧边栏收缩
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar;//true
        },
        device() {
            return this.$store.state.app.device;
        },
        classObj() {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
                mobile: this.device === "mobile"
            };

        }
    },
    methods: {
        handleClickOutside() {
            this.$store.dispatch("CloseSideBar", { withoutAnimation: false });
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/pages/index/styles/mixin.scss";
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
}
.drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
}
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    height: 64px;
    line-height: 64px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
