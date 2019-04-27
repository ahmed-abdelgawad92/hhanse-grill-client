<template>
  <div id="carouselExampleIndicators" ref="modal" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" v-for="(item, index) in items" :data-slide-to="index" :key="index" :class="{'active': index == 0}"></li>
    </ol>
    <div class="carousel-inner">
      <slide-show-item v-for="(item, index) in items" :item="item" :index="index" :key="index"></slide-show-item>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  import SlideShowItem from './CarouselItem.vue';
  
  export default {
    data: () => {
      return {
        items: [],
        size: 0
      }
    },
    components: {
      SlideShowItem
    },
    methods: {
      fetchAllFotos: function(){
        this.$http.get('client/photos').then(response => {
          this.items = response.data.photos;
        }).catch(err => {console.log(err)});
      },
    },
    created(){
      this.fetchAllFotos();
      setTimeout(()=>{
        let modal = this.$refs.modal;
        $(modal).carousel({
            interval: 5000,
            pause: false
        })
      }, 3000);
    }
  }
</script>

<style scoped>

</style>