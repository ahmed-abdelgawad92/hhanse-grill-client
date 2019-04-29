<template>
  <div class="carousel-item" :class="{'active': index == 0}">
    <div class="w-100 img" :style="{'background-image': 'url('+$domain+path(item.photo)+')'}"></div>
  </div>
</template>

<script>
  export default {
    props: ['item', 'index'],
    methods: {
      path: function(path){
        return 'storage/' + path.split('/')[1];        
      }
    }
  }
</script>

<style scoped>
  .img{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media screen and (max-width: 900px){
    .img{
      height: 50vh;
    }
  }
  @media screen and (min-width: 901px){
    .img{
      height: 90vh;
    }
  }
</style>