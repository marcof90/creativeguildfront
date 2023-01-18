<template>
  <div class="container album" v-if="photographer">
    <photographer-card
      v-if="photographer"
      :user="photographer"
    ></photographer-card>
    <div class="row">
      <picture-card v-for="picture in photographer.album" :key="picture.id" :picture="picture"></picture-card>
    </div>
  </div>
</template>

<script>
import PhotographerCard from "../components/users/PhotographerCard.vue";
import PictureCard from "../components/users/PictureCard.vue";

import apiService from "@/services/api.service";
export default {
  components: {
    PhotographerCard,
    PictureCard
  },
  data() {
    return {
      photographer: null,
    };
  },
  methods: {
    getUser() {
      apiService.getUser(this.$route.params.id)
      .then((res) => {
        console.log(res);
        this.photographer = res;
      })
      .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style>
.album {
  padding-top: 6em;
}
</style>