<template>
  <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="/speaker">講者</router-link> |
    <router-link to="/a-area">A區</router-link> |
    <router-link to="/b-area">B區</router-link>
  </nav>
  <router-view />
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
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
