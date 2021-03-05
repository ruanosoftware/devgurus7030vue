<template>
  <nav>
    <router-link to="/">Main Page</router-link> |
    <router-link to="/instructions">instructions</router-link>
  </nav>
  <h1>Devgurus 70/30 - Vuejs 3</h1>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 1.4rem;
}
</style>
