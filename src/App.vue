<template>
  <div >
    <mt-header fixed title="vue 项目" class="head"></mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: #fff;
}
.mint-swipe-items-wrap {
  height: 200px;
  background-color: #f00;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none
}
</style>
