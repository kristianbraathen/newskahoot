<template>
  <div>
    <Questions msg="Welcome to Skahoot Quiz" />
   
   <div  >
   <div  class="grid-container"
   
        @click="answered($event)"
      >
       <div class="cardA" >
                 
              {{ answersSlots[0] }}  
       </div><div class="cardB">
                 
              {{ answersSlots[1] }}   
       </div><div class="cardC">
                 
              {{ answersSlots[2] }}      
       </div><div class="cardD">
                 
              {{ answersSlots[3] }} 
       </div>
      </div>

  
  </div></div>
</template>

<script>
import { computed } from 'vue';
import { mapGetters, mapState } from 'vuex';
import Questions from './Questions.vue';

export default {
    name: 'Answers',
    computed: mapState(['questionsList']),
    computed: mapState(['questions','answersSlots','colors','players','currentPlayer']),
    
   
   
    methods:{

answered: function(event){ 
      var clicked = event.target.innerHTML.replaceAll('&amp;', '&')    
     
     if (clicked === this.$store.state.questions.correctAnswer)
           {
            this.$store.dispatch('score')
          
            var index = this.currentPlayer
            if(this.$store.state.players[index].score === 10){
              
               this.$store.dispatch('scoreVis')
            }
           }  
      if (this.$store.state.currentPlayer < this.players.length -1 ){
         this.$store.commit('setCurrentPlayer')
      }
      else{

         this.nextQuestion();
         this.$store.state.currentPlayer = 0;
      }
           console.log( event.target.innerHTML   )
 },

 nextQuestion(){ 
      
      this.QuestionsCounter++;
      if(this.QuestionsCounter < 10){
         let nextQ = 
       this.$store.state.questionsList.shift();
       this.$store.dispatch('nextQuestion',nextQ)
      }
      else{

         this.$store.dispatch('getQuestionsList')
         this.QuestionsCounter= 0;
      }
       
      },
    
     
   },
    components: {
    Questions,
    
     },
   
    
    
   
   
}
</script>

<style>

.grid-container{
   display: grid;
   grid-template-columns: 300px 300px; 
   grid-template-rows: 1fr 1fr;
   grid-column-gap:40px ;
   justify-content:center;

   
 
}

.cardA{
   
   display:inline-flex;
   justify-content:center;
   text-align:center;
   align-items: center;
   box-shadow: 5px 10px#888888;
   font-size:x-large;
   width: 300px;
   height: 100px;
   background-color:blue;
   margin: auto;
   color:white;
   border-radius: 20px;
   margin-top: 40px;
}
.cardB{
   
   display:inline-flex;
   justify-content:center;
   text-align:center;
   align-items: center;
   font-size:x-large;
   box-shadow: 5px 10px#888888;
   width: 300px;
   height: 100px;
   background-color:green;
   margin: auto;
   color:white;
   border-radius: 20px;
   margin-top: 40px;
}
.cardC{
   
   display:inline-flex;
   justify-content: center;
   text-align: center;
   font-size:x-large;
   align-items: center;
   box-shadow: 5px 10px#888888;
   width: 300px;
   height: 100px;
   background: rgb(236, 222, 22);
   margin-left: 20%;
   margin-bottom: 5px;
   margin-top: 30px;
   color:white;
   border-radius: 20px;
}
.cardD{
   
   display:inline-flex;
   justify-content:center;
   text-align: center;
   font-size:x-large;
   align-items: center;
   box-shadow: 5px 10px#888888;
   width: 300px;
   height: 100px;
   background: red;
   margin-left: 20%;
   margin-bottom: 5px;
   margin-top: 30px;
   color: white;
   border-radius: 20px;
}

</style>