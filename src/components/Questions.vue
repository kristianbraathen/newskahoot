<template>
 <div>
    <h1 class="headLine">{{ msg }}</h1>
   
      <div class="cardQ">{{ questions.question }}</div>
     
    
   </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name:'Questions',
    computed: mapState(['questionsList']),
    computed: mapState(['questions']),
   
  
    
    props: {
        msg: String,
  
    },
   
   

}
</script>

<style>
.cardQ{
   display:inline-flex;
   justify-content:center;
   text-align:inherit;
   align-items: center;
   font-size:x-large;
   width: 1000px;
   height: 100px;
   box-shadow: 5px 10px#888888;
   background-color:rgb(187, 84, 207);
   color:white;
   border-radius: 20px;
   margin-top: 60px;
   place-self: center;
  
  
}
.headLine{
   font-family:cursive;
   font-size: xx-large ;
   font-weight: 100;
   text-shadow: 2px 2px#888888;
}
</style>