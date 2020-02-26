<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dataFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr />
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论子组件区域 -->
    <!-- <comment-box></comment-box> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      this.$http
        .get("http://127.0.0.1:3002/everynews/" + this.id)
        .then(result => {
          this.newsinfo = result.body[this.id-1];
        })
    }
  }
};
</script>

<style  scoped>
.newsinfo-container {
  padding: 0 4px;
}
.title {
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.content img {
  width: 100%;
}
</style>