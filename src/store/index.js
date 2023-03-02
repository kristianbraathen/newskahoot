import { createStore } from 'vuex'
import axios from 'axios';



export default createStore({
  state: {
   
   questionsList:[{
    category:{}
   }
   ],

     questions: {
        question:'',
    
         incorrectAnswers:[],
         correctAnswer:'',
   
    },

      answersSlots:[],
      categories:[]
       
      ,

      currentPlayer:0,

  players:[{

        name:'Kristian',
        score:0,
        visibleScore: false,
    }]
    
  

  },
  getters: {
    
    
    setSlot(state){
      state.answersSlots = state.questions.incorrectAnswers 
      state.answersSlots.push(state.questions.correctAnswer);
    },
    randSlot(state){
      
       for (let i = state.answersSlots.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i)
        let temp = state.answersSlots[i]
        state.answersSlots[i] = state.answersSlots[randomIndex]
        state.answersSlots[randomIndex] = temp;
       }
       return state.answersSlots;   
   
  

    },

   
  },
  mutations: {
    getQuestionsList(state,questionsList){
      state.questionsList = questionsList;
      console.log(state.questionsList);
    },
    getCategories(state,categories){
      state.categories = categories;
    },
    
    score(state){
      state.players[state.currentPlayer].score++;

    },
   
    questions(state,results){
      state.questions = results;
      console.log(results)

    } ,
    nextQuestion(state,nextQ){
      state.questions = nextQ;
      console.log(nextQ)
    },
    setPlayerName(state,PlayerName){
      state.players[state.currentPlayer].name = PlayerName;
    },
    setCurrentPlayer(state){
       state.currentPlayer++;
    },
    newPlayer(state,PlayerName){
      state.players.push({name: PlayerName, score: 0}) ;
     
    },
    setDifficulty(state,filteredList){
      state.questionsList = filteredList;
    },
    scoreVis(state){
      state.players[state.currentPlayer].visibleScore = !state.players[state.currentPlayer].visibleScore
    },
   
   setCategory(state,category){
          state.questionsList= [];
          state.questions = '';
          state.questionsList = category;
   }
   
  

   
    
  },
  actions: {
    getQuestionsList({commit}){
      axios
      .get('https://the-trivia-api.com/api/questions')
      .then(response => { 
        let results = response.data.shift();
        commit('questions',results)
        commit('getQuestionsList',response.data)
        console.log(response.data);
       
      })
    },
    getCategories({commit}){
      axios
      .get('https://the-trivia-api.com/api/categories')
      .then(response => {
        commit('getCategories',response.data)
        console.log(response.data);
      }) 
    },
    setDifficultyE({commit}){
      axios
      .get('https://the-trivia-api.com/api/questions?limit=10&difficulty=easy')
      .then( response =>{
        let results = response.data.shift();
        commit('questions',results)
        commit('getQuestionsList',response.data)
        console.log(response.data);
      })
    },
    setDifficultyM({commit}){
      axios
      .get('https://the-trivia-api.com/api/questions?limit=10&difficulty=medium')
      .then( response =>{
        let results = response.data.shift();
        commit('questions',results)
        commit('getQuestionsList',response.data)
        console.log(response.data);
      })
    },
    setDifficultyH({commit}){
      axios
      .get('https://the-trivia-api.com/api/questions?limit=10&difficulty=hard')
      .then( response =>{
        let results = response.data.shift();
        commit('questions',results)
        commit('getQuestionsList',response.data)
        console.log(response.data);
      })
    },
    setCategory({commit}){
      axios
      .get('https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=10')
      .then(response =>{
        commit('getQuestionsList', response.data)
      })
    },
    setCategoryM({commit}){
      axios
      .get('https://the-trivia-api.com/api/questions?categories=music&limit=10')
      .then(response =>{
        let results = response.data.shift();
        commit('questions',results)
        commit('getQuestionsList', response.data)
      })
    },
    
    score({commit},score){
     commit('score',score)
    },
    nextQuestion({commit},nextQ){
      commit('nextQuestion',nextQ)
    },
    answered({commit}){
      
        commit('answered') 
    },
    scoreVis({commit},scoreVis){
      commit('scoreVis',scoreVis)
    }
    
    
  },
     modules: {
     }
  })
