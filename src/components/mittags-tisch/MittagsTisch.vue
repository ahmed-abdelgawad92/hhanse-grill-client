<template>
   <div class="container">
      <h1 class="text-muted text-center my-4">Der heutige Mittagstisch</h1>
      <div v-for="item in menuItems" :key="item.id" class="menu-item" :class="{'not-available' : !item.available}">
         <div class="p-4">
            <div class="row">
            <div class="col-9">
               <h2>
                  <span>{{romanNumbers[item.row_order]}} -</span>
                  {{item.meal.name | capitalize}}
                  <span v-if="!item.available" class="withoutLine">&lt;Ausverkauft&gt;</span>
               </h2>
               <div class="ingredients">{{getIngredient(item)}}</div>
            </div>
            <div class="col-3">
               <h2 class="price">{{item.price | currency}}</h2>
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
            menuItems: [],
            romanNumbers: ['0','I','II','III','IV','V','VI','VII','VIII','IX','X']
         }
      },
      methods: {
         fetchMeals: function(){
            this.$http.get('menu_items').then(
            response => { 
               this.menuItems = response.data;
            },
            error => {console.log(error);}
            );
         },
         getIngredient: function(item){
            let ingredient = item.ingredients.map(a => a.ingredient.charAt(0).toUpperCase() + a.ingredient.slice(1)).join(', ');
            return ingredient;
         },
      },
      created() {
         this.fetchMeals();
      }
   }
</script>

<style scoped>
.menu-item:nth-child(even){
   background-color: rgb(242, 255, 0);
}
.menu-item:nth-child(odd){
   background-color: rgb(244, 249, 173);
}
.price{
   text-align: right;
}
.not-available div{
  text-decoration: line-through;
}
span.withoutLine{
  text-decoration: none !important;
  display: inline-block;
  padding: 0 0 0 5px;
}
</style>