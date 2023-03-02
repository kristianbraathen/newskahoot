<template>
  <div class="home">
   
    <Players />
    
    <Answers  />
      
    
   
    

 

</div>

</template>

<script>
// @ is an alias to /src
import Questions from '@/components/Questions.vue';
import Answers from '@/components/Answers.vue';

import { mapState } from 'vuex';

import Players from '@/components/Players.vue';

export default {
  name: 'HomeView',
 
  
  computed: mapState(['questionsList','questions','score','players']),
  data(){
    return {
      show : false
    }
  },
 
 
 
  components: {
    Questions,
    Answers,
    Players,
    
},
 
 
  
 
 
    showComponent(){
      this.show = true;
    },

    
   
   
  
}
</script>
<style scoped>
.grid-container{
   display: grid;
    height: 100px;
   grid-template-columns: 1fr 2fr 3fr 4fr;
        
         
 }
 
.cardQ{
   
   display:inline-block;
   justify-content:normal;
   text-justify: auto;
   font-size:large;
   width: 600px;
   height: 70px;
   background: rgb(207, 199, 86);
   margin-left: 20%;
   margin-bottom: 5px;
   margin-top: 30px;
   color: rgb(66, 22, 22);
   border-radius: 20px;
}
.home{
   background-color:azure;
}

 

</style>
