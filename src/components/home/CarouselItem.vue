<template>
  <div class="carousel-item" :class="{'active': index == 0}">
    <img class="d-block w-100" :src="$domain+path(item.photo)">
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
  @media screen and (max-width: 900px){
    img{
      height: 50vh;
    }
  }
  @media screen and (min-width: 901px){
    img{
      height: 90vh;
    }
  }
</style>