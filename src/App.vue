<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/Nav";

export default {
  components:{
    NavBar
  }
}
</script>

<style>
body{
  background-image: url('./assets/background.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* background-image: linear-gradient(to right,
    #00D0FF,
    #25FFBF
    ); */
    overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-enter-active, .slide-leave-active{
  transition: opacity 1s, transform .7s;
}
.slide-enter{
  opacity: 0;
  transform: translateX(-25%);
}
.slide-leave-to{
  opacity: 0;
  transform: translateX(25%);
}
#app input{
  background-color: transparent;
  border: 1px solid #fff;
}
#app input:focus{
  box-shadow: none;
}
</style>
