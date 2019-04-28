<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-custom">
    <router-link class="navbar-brand" to="/">
      HHanse Grill <span class="arabic">حلال</span>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <router-link tag="li" to="/" class="nav-item" active-class="active" exact>
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" to="/karte" class="nav-item" active-class="active" exact>
          <a class="nav-link">Karte</a>
        </router-link>
        <router-link tag="li" to="/mittagstisch" class="nav-item" active-class="active" exact>
          <a class="nav-link">Mittagstisch</a>
        </router-link>
        <router-link tag="li" to="/week-plan" class="nav-item" active-class="active" exact>
          <a class="nav-link">Wöchentlich Speise-Plan</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
/* *{
   font-family: 'Berkshire Swash', cursive;
} */
a{
 cursor: pointer;
 font-size: 18px !important;
}
.bg-custom{
   background-color: rgb(242, 255, 0);
}
.navbar-brand::first-letter{
  color: rgb(243, 20, 20);
}
.navbar-brand{
  padding-left: 1rem;
  font-size: 28px !important;
}
.arabic{
  font-family: 'Amiri', serif;
  font-size: 28px;
}
li.nav-item{
   padding: 10px;
}
li.nav-item a{
   color: black !important;
}
li.active{
  background-color: rgb(255, 60, 60) !important;
  /* background-color: rgb(255, 31, 31) !important; */
}
li.active a{
  color: rgb(242, 255, 0) !important;
}
.nav-item:hover{
  background-color: rgb(246, 255, 151);
}
.navbar{
   padding: 0;
}
button.navbar-toggler{
   margin: 15px;
}
</style>