<template>
    <div class="player" v-for="player in players "  >
      <div> <label>Player: </label>{{ player.name }}</div>  
        <div class="score" v-show="player.visibleScore" v-bind="score"><label>Score: </label>{{ player.score }}</div>
       
    </div>
</template>
<script>

import { mapState } from 'vuex';


export default{
    name:'Players',
    computed:mapState(['score','players','currentPlayer','questionsList']),
    data(){
      return{
        Visiblity: false,
       

       
      }
    },
  
   
  }

</script> 
<style scoped>
.player{
    float:right;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(201, 184, 218);
    text-align: center;
    font-size:x-large;
    width: 200px;
    height: 70px;
    margin-right: 30px;
    border: 3px solid;
    border-radius: 10%;
    box-shadow: 5px 10px;
}
.score{
    display: block;
}

</style>