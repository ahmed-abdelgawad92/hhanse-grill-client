<template>
   <div class="container">
      <h1 class="text-center text-muted mt-4">Die Speisekarte</h1>
      <div class="row" v-if="karte">
         <div class="col-12 col-lg-6 col-xl-6">
            <karte-category :category="karte[categoryIndex[0]]" class="mt-5"></karte-category>
            <karte-category :category="karte[categoryIndex[6]]" class="mt-5"></karte-category>
            <karte-category :category="karte[categoryIndex[2]]" class="mt-5"></karte-category>
            <karte-category :category="karte[categoryIndex[4]]" class="mt-5"></karte-category>
         </div>
         <div class="col-12 col-lg-6 col-xl-6">
            <karte-category :category="karte[categoryIndex[1]]" class="mt-5"></karte-category>
            <karte-category :category="karte[categoryIndex[7]]" class="mt-5"></karte-category>
            <karte-category :category="karte[categoryIndex[3]]" class="mt-5"></karte-category>
            <karte-category :category="karte[categoryIndex[5]]" class="mt-5"></karte-category>
            <karte-category :category="karte[categoryIndex[8]]" class="mt-5"></karte-category>
         </div>
      </div>
   </div>
</template>

<script>
   import KarteCategory from './KarteCategory.vue';
   export default {
      data: () => {
         return {
            karte: undefined,
            categoryIndex: [
               'Super-Spar-Menüs',
               'Croque',
               'Klassiker',
               'Grillgerichte',
               'Snacks',
               'Beilagen',
               'Salate',
               'Fisch',
               'Getränke'
            ],
         }
      },
      components: {
         KarteCategory
      },
      methods: {
         fetchKarte: function(){
            this.$http.get('karte').then(response => {
               this.karte = response.data.karte;
               console.log(this.karte);
               
            }).catch(err => console.log(err.response.data));
         }
      },
      created(){
         this.fetchKarte();
      }
   }
</script>

<style scoped>

</style>