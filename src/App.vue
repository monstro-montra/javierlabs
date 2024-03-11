<template>
  <div>
    <div class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  background-color:#332E3C;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E2E2E2;
  min-height: 100vh;
}

.navbar {
  background-color: #E2E2E2; /* your desired color */
  color: #247BA0; /* text color */
  padding: 20px 0; /* padding above and below the text */
  text-align: center; /* center the links */
  width: 100%; /* make the navbar full width */
}

.navbar a {
  color: #605F5E; /* Normal text color for links */
  text-decoration: none;
  font-size:large;
  padding: 0 5px;
  display: inline-block;
  transition: color 0.3s;
}

/* Set the color for visited links within .navbar */
.navbar a:visited {
  color: #605F5E; /* You might want to keep the visited color the same as the normal color */
}

/* Hover state for links within .navbar */
.navbar a:hover {
  color: #aaa;
}

@media (max-width: 1024px) { /* for tablets */
  .logo {
    width: 25%;
  }
}

@media (max-width: 768px) { /* for portrait tablets and large phones */
  .logo {
    width: 20%;
  }
}

@media (max-width: 480px) { /* for small phones */
  .logo {
    width: 15%;
  }
}

.logo {
  width: 5%;
  height: auto;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>


