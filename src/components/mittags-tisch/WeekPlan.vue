<template>
   <div class="speiseplan">
      <h1 class="my-3 text-center">Speiseplan</h1>
      <h1 class="big-header"><span>HH</span>anse Grill</h1>
      <h5 class="my-3 text-center">Das tägliche frische Program vom {{startDate}} bis {{endDate}}</h5>
      <h5 class="my-3 text-center" style="margin-bottom:50px !important;">Immer ab 11:00 Uhr, solange der Vorrat reicht.</h5>
      <div class="container">
         <div class="row border-btm" v-for="(plan, index) in weekPlan" :key='index'>
            <div class="col-12 col-sm-3">
               <p>{{plan.day}}</p>
            </div>
            <div class="col-12 col-sm-9">
               <ol v-if="plan.meals.length > 0">
                  <li v-for="(item, index) in plan.meals" :key="index">
                  <div class="row">
                     <div class="col-10">
                        <strong>{{item.meal.name | capitalize}}</strong>
                        <template v-if="item.ingredients.length > 0">
                        , {{getIngredient(item.ingredients)}}
                        </template>
                     </div>
                     <div class="col-2 text-right">
                        <span>{{showPrice(item.price)}}</span>
                     </div>
                  </div>
                  </li>
               </ol>
               <div v-else class="alert alert-warning">
                  Kein Angebot ist an diesem Tag hinzugefügt worden
               </div>
            </div>
         </div>
      </div>
    </div>
</template>

<script>
   export default {
      data: () => {
         return {
            weekPlan: [],
            startDate: '',
            endDate: ''
         }
      },
      methods: {
         fetchWeekPlan: function(){
            this.$http.get('weekplan/0').then(
               response => {
                  this.weekPlan= response.data.weekPlan;
                  this.startDate= new Date(response.data.startDate).toLocaleString('de-DE',{year: 'numeric', month:'numeric', day: 'numeric'});
                  this.endDate= new Date(response.data.endDate).toLocaleString('de-DE',{year: 'numeric', month:'numeric', day: 'numeric'});
               },
               error => {console.log(error)}
            );
         },
         getIngredient: function(ing){
            let ingredient = ing.map(a => a.ingredient).join(', ');
            return ingredient;
         },
            showPrice: function(price){
            return (1 * price).toLocaleString('de-DE',{ style: 'currency', currency: 'EUR' });
         },
      },
      created(){
         this.fetchWeekPlan();
      }
   }
</script>

<style scoped>
.border-btm{
  border-bottom: 1px solid #e7e7e7;
  padding-top: 15px;
}
ol{
  list-style-type: upper-roman;
}
.big-header{
  font-size: 4.5rem;
  text-align: center;
  margin-bottom: 70px;
}
.big-header span{
  font-size: 6rem !important;
  font-weight: bolder;
  color: red;
}
</style>