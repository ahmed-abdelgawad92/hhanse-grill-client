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
  img{
    height: 80vh;
  }
</style>