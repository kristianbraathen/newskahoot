<template>
    <form >
    <div class="input"  >
     <label>Enter Player Name: </label><br><br>
     <input type="text" id="Id" v-model="this.PlayerName" placeholder="Enter name">&nbsp;
     <button @click="setPlayerName()">Submit</button><br><br>
     <label>Difficulty:</label><br><br>
     <button @click="setDifficultyE()">Easy</button>
     <button @click="setDifficultyM()">Medium</button>
     <button @click="setDifficultyH()">Hard</button><br><br>
     <button @click="allCats()">All</button><br><br>
     <label>Categories:</label><br><br>
    <div  v-for=" ( value,category) in categories"  :key="category.id">
          <button @click="setCategory($event)" >{{category}}</button> <br><br>
    </div>
   

</div></form>
    
</template>
<script>
import { mapState } from 'vuex';


export default{
    name:'Players',
    data() {
        return{
            PlayerName:''
        }
       

    },
     created(){
       this.$store.dispatch('getCategories')
     },
    computed:mapState(['categories','score','players','questionsList']),

    methods:{
        setPlayerName(){
            this.$store.commit('newPlayer',this.PlayerName)
            console.log(this.PlayerName)
            document.getElementById('Id').value='';
        },
        setCategory: function(event){
            var checked = event.target.innerHTML
            if(checked){
                this.$store.dispatch('setCategoryM',checked)
            }
               
                console.log(checked)

            

        },
        setDifficultyE(){
            this.$store.dispatch('setDifficultyE')
        },
        setDifficultyM(){
            this.$store.dispatch('setDifficultyM')
        },
        setDifficultyH(){
            this.$store.dispatch('setDifficultyH')
        },
        allCats(){
            this.$store.dispatch('getQuestionsList','getCategories')
        }

    }
}

</script> 
<style scoped>
</style>