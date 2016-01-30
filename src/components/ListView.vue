<template>
  <div class="news-view row">

    <!-- Modal compnent -->
    <!-- <modal :show.sync="showModalFull" :item="item"></modal> -->

    <!-- <div class="listContainer"> -->

      <!-- Fetch Data button -->
      <!-- <button @click="fetchData()" class="button button-general">Fetch Data</button> -->
    

      <h1>Survey List</h1>
      <h4>(click on one)</h4>
      <!-- List of items from Parse.com -->
      <div v-for="item in surveys.features">
        <!-- Trigger the Modal compnent -->
        <span @click="clickedItem(item)" :class="[item.properties.active ? 'activeItem' : '']">{{item.properties.id}}</span>
        <div>
          <img width="200" style="padding: 10px 0px"
               class="dialogImages" src="{{ item.properties.attributes.photo._url }}">
        </div>
      </div>
    <!-- </div> -->
    
  </div>
</template>

<script>
// import store from '../store'
import Modal from './ModalView.vue'
import Button from './ui/Button.vue'
import FormInput from './ui/FormInput.vue'
import store from '../store' 

export default {

  name: 'ListView',

  props:{
    surveys: {},
    item: {}
  },

  components: {
    Modal
  },
  
  created () {

  },
  ready (){
    

  },

  destroyed () {
    
  },

  methods: {
  
      clickedItem: function(item){
        
        var self = this;
        self.item = item;

      }
    
  }
}
</script>

<style lang="stylus">


.listContainer {
    height: 400px;
    padding-top: 101px;
}
.padTop10{
  padding-top:10px;
}

.activeItem{
  font-size: 14px;
  color: red;
}


</style>
