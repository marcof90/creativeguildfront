<template>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="container home">
      <div class="row">
        <div class="col-md-12"><h1>Chek out our amazing photographers</h1></div>
      </div>
      <photographer
        v-for="photograp in photographers"
        :key="photograp.id"
        :user="photograp"
      ></photographer>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Photographer from "@/components/users/PhotographerCard";
import apiService from "@/services/api.service";

export default {
  name: "Home",
  data() {
    return {
      photographers: [],
    };
  },
  components: {
    Photographer,
  },
  methods: {
    getPhotographers() {
      apiService.users()
      .then((res) => {
        this.photographers = res.users;
      })
      .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getPhotographers();
  },
};
</script>

<style>
.home {
  padding-top: 5em;
}
</style>
