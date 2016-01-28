<template>
  <div class="news-view row">

    <!-- Modal compnent -->
    <modal :show.sync="showModalFull" :item="item"></modal>

    <div class="listContainer col-md-6 col-md-offset-3">

      <!-- Fetch Data button -->
      <button @click="fetchData()" class="button button-general">Fetch Data</button>
    

      <h1>Survey List</h1>
      <h4>(click on one)</h4>
      <!-- List of items from Parse.com -->
      <div v-for="item in surveys.features">
        <!-- Trigger the Modal compnent -->
        <span @click="clickedItem(item)">{{item.properties.id}}</span>
      </div>
    </div>
    
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
    showModalFull: false
  },

  components: {
    Modal
  },
  data () {
    return {
      surveys: {}
    }
  },
  route: {
    data (){

      return store.fetchDataFromParse().then(surveys => ({
         surveys
      }))

    }
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
        self.showModalFull = true;

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


</style>
