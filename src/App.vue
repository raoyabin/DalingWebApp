<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <!--  <Navbar></Navbar> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
export default {
  name: 'app',
  components:{
   /*  Navbar */
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
