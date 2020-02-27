<template>
  <div>
    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div
          id="sliderSegmentedControl"
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
          <div class="mui-scroll">
            <a
              :class="['mui-control-item',item.id==0?'mui-active':'']"
              href="#item1mobile"
              v-for="item in data"
              :key="item.id"
            >{{item.title}}</a>
          </div>
        </div>
      </div>
    </div>
    <ul>
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.imgUrl"/>
        <div class="info">
            <h1 class="title">{{item.title}}</h1>
            <div class="body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
var mui = require("../../assets/mui/mui.js");
export default {
  data() {
    return {
      data: [],
      list:[],
    };
  },
  created() {
    this.getData();
    this.getImg();
  },
  methods: {
    getData() {
      this.$http.get("http://localhost:3002/datas").then(result => {
        this.data = result.body;
        this.data.unshift({ title: "全部", id: 0 });
      });
    },
    getImg() {
        this.$http.get("http://localhost:3002/img").then(result => {
        this.list = result.body;
      });
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  }
  
};
</script>

<style scoped>
* {
  touch-action: pan-x;
}
.mui-slider {
  background-color: #fff;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul {
    margin: 0;
    padding: 0 10px;
}
ul li {
    text-align: center;
    background-color: #ccc;
    list-style: none;
    margin-bottom: 10px;
    box-shadow:0 0 6px #ccc;
    position: relative;
}
ul li img {
    width: 100%;
    height: 100%;
    display: block
}
.info {
    color: white;
    text-align: left;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    max-height: 84px;
    width: 100%;
    padding: 4px 5px;
}
.info .title {
    font-size: 14px;
}
.info .body {
    font-size: 13px;
}
</style>