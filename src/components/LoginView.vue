<template>

<div class="row">
  <div class="loginContainer col-md-6 col-md-offset-3">
      <!-- <button @click="" class="button button-general">Fetch Data</button> -->
      <div class="col-xs-6">
        <label class="form-label">username</label>
        <input class="form-input" type="text" placeholder="username" value="">
      </div>
      <div class="col-xs-6">
        <label class="form-label">password</label>
        <input class="form-input" type="text" placeholder="password" value="">
      </div>
      <div class="col-xs-6 padTop10">
        <button @click="" class="button button-general">Login</button>
      </div>
      <div class="col-xs-6 padTop10">
        <!-- <button @click="" class="button button-action">Fetch Data</button> -->
      </div>
  </div>
</div>
  

</template>

<script>
// import store from '../store'
import Button from './ui/Button.vue'

export default {

  name: 'Login',

  props: {
      
  },

  components: {
  
  },

  created () {
    
  },
  ready (){
    

  },

  destroyed () {
    
  },

  methods: {
    
    
  }
}
</script>

<style lang="stylus">
.loginContainer {
    height: 400px;
    padding-top: 101px;
}
.padTop10{
  padding-top:10px;
}


</style>
