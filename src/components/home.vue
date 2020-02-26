<template>
  <div class="center">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in lubo" :key="item.id">
        <img :src="item.photo" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link  to="/home/newslist">
            <img src="../assets/image/menu1.png" alt />
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/image/menu2.png" alt />
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/image/menu3.png" alt />
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/image/menu4.png" alt />
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/image/menu5.png" alt />
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/image/menu6.png" alt />
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lubo: []
    };
  },
  created() {
    this.getLubo();
  },
  methods: {
    getLubo() {
      this.$http.get("http://localhost:3002/lubotu").then(result => {
        this.lubo = result.body;
      });
    }
  }
};
</script>

<style scoped>
.mint-swipe .mint-swipe-item img {

  width: 100%;
  height: 100%;
}

.mui-content img {
  height: 50%;
  width: 50%;
}
.mint-swipe-items-wrap {
  margin-top: 40px;
}
</style>