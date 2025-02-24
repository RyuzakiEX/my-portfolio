<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  color: white;
}

html {
  scroll-behavior: smooth;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Ensure the body takes full height */
body {
  min-height: 100vh;
  background-image: url('@/assets/background/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #333;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Optional: Ensure no margin between sections */
section {
  margin: 0;
}
</style>
