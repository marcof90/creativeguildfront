<template>
  <b-navbar toggleable="lg" type="light" fixed="top">
    <b-navbar-brand>
      <img
        src="../assets/cg-logo.png"
        width="40"
        height="40"
        class="d-inline-block align-top"
        alt="CGT"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" right>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item href="#" right v-if="!store.logged">
          <router-link to="/login" >Login</router-link>
        </b-nav-item>
        <b-nav-item href="#" right v-else @click="logout()" >
          <router-link to="" >Logout</router-link>
        </b-nav-item>
        <b-nav-item href="#" right v-if="!store.logged">
          <router-link to="/register">Register</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { store } from "@/global/store.js"
export default {
  data(){
    return {
      store
    }
  },
  methods:{
    logout(){
      localStorage.removeItem("token")
      store.logged = false
      if(this.$router.history.current.path !== '/'){
        this.$router.push('/')
      }
    }
  },
  mounted(){
    store.logged = localStorage.getItem("token") ? true : false
  }
};
</script>

<style>
.navbar {
  /* background-color: #254361; */
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(17.5px);
}
.nav-item a {
  color: #ccc;
}
</style>