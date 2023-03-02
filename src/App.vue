<template>
  <nav>
    <router-link to="/">Quiz</router-link> &nbsp;&nbsp;
    <router-link to="/about">Settings</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  color: #a9dbc5;
  background-color: azure;
  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  
}

nav a.router-link-exact-active {
  color: #579b7c;
 
}
</style>
