<template>
  <div class="photoinfo">
    <h3>{{message.title}}</h3>
    <p class="subtitle">
      <span>发表时间: {{message.add_time | dataFormat}}</span>
      <span>点击: {{message.click}}数</span>
    </p>
    <hr />
    <div class="view">
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <div class="content" v-html="message.content">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {},
      id: this.$route.params.id,
      slide1: [
          {
            src: 'http://img3.imgtn.bdimg.com/it/u=3987717451,3188576076&fm=26&gp=0.jpg',
            msrc: 'http://img3.imgtn.bdimg.com/it/u=3987717451,3188576076&fm=26&gp=0.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 320,
            h: 320
          },
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=2360812465,1374576929&fm=26&gp=0.jpg',
            msrc: 'http://img0.imgtn.bdimg.com/it/u=2360812465,1374576929&fm=26&gp=0.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 320,
            h: 320
          },
          {
            src: 'http://img2.imgtn.bdimg.com/it/u=2915766673,1270836139&fm=26&gp=0.jpg',
            msrc: 'http://img2.imgtn.bdimg.com/it/u=2915766673,1270836139&fm=26&gp=0.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 320,
            h: 320
          },
          {
            src: 'http://img5.imgtn.bdimg.com/it/u=1245009326,2127584331&fm=26&gp=0.jpg',
            msrc: 'http://img5.imgtn.bdimg.com/it/u=1245009326,2127584331&fm=26&gp=0.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 320,
            h: 320
          }
        ]
    };
  },
  created() {
      this.getPhoto();
  },
  methods: {
    getPhoto() {
      this.$http.get("http://localhost:3002/message/"+this.id).then(result => {
        this.message = result.body[this.id-1];
      });
    },
    handleClose () {
        console.log('close event')
    }
  }
};
</script>

<style >
.photoinfo {
    padding: 5px;
}
.photoinfo h3 {
    color: #26A2FF;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
}
.subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
.content {
    font-size: 13px;
    line-height: 30px;
}
p {
     color: black;
}
.view img {
    width: 100px;
    height: 100px;
    box-shadow: 0 0 6px #999;
}
.view {
    margin-left:16px;
}
figure {
     display: inline-block;
     margin:10px 15px 0 0;
}
</style>