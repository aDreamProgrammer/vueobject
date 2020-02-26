<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
      <router-link :to="'/home/newsInfo/'+item.id">
        <img
          class="mui-media-object mui-pull-left"
          :src="item.url"
        />
        <div class="mui-media-body">
          <h1>{{item.name}}</h1> 
          <p class="mui-ellipsis">
            <span>发表时间:2020-2-26 14:50:05</span>
            <span>点击:{{item.click}}次</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      news: []
    };
  },
  created() {
      this.getNews();
  },
  methods: {
    getNews() {
      this.$http.get("http://localhost:3002/newslist").then(result => {
        this.news = result.body;
      });
    }
  }
};
</script>

<style scoped>
.mui-ellipsis {
    display: flex;
    font-size: 12px;
    color: #226aff;
    justify-content: space-between;
    
}
.mui-media-body h1 {
    font-size: 14px
}
</style>