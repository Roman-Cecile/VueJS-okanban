<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.card {
  min-height: 100px;
  width: 100%;
  margin: 8px -2px;
  border: 2px solid rgb(167, 167, 255);
  border-radius: 4px;
}

.container-cards {
  width: 30%;
  height: 100%;
  margin: auto 4px;
  min-height: 370px;
}
</style>
