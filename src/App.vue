<template>
  <div>
    <div>
      <img src="@/assets/javierlabs logo transparent.png" alt="logo" class="logo">
      <h1>Javier Labs</h1>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<style>
#app {
  background-color:#332E3C;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #D8D4F2;
  min-height: 100vh;
}

.logo {
  width: 5%;
  height: auto;
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

router-view {
  display: block;
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
  margin: 0;
}
</style>


