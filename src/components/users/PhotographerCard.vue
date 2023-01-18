<template>
  <div class="row profile-row align-items-center pb-3 mb-4" v-if="user" @click="openUser()">
    <div class="col-lg-3">
      <div class="profile-img">
        <div class="back-img"></div>
        <img :src="url + user.profile_picture" alt="" class="mx-auto" />
      </div>
    </div>
    <div class="col-lg-9 text-left">
      <h2 class="profile-name mt-5">{{ user.name }}</h2>
      <div class="profile-description p-4">
        <p>
          {{ user.bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import env from "@/environment/env";
export default {
  props: {
    user: { type: Object, default: null },
  },
  data() {
    return {
      url: '',
    };
  },
  methods:{
    openUser(){
      if(localStorage.getItem('token')){
        this.$router.push('/users/'+this.user.id)
      }else{
        this.$router.push('/login')
      }
    }
  },
  mounted() {
    this.url = env.back;
  },
};
</script>

<style>
.profile-row {
  /* background-color: #ffffff90; */
  border-radius: 15px;
  color: #2e2e35;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 12px 0 rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: .2s;
  cursor: pointer;
}
.profile-img {
  height: 290px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  clip-path: path("m0 0 h255 v141 c5 189-255 200-255 0z");
}
.profile-img img {
  max-width: 95%;
  max-height: 95%;
  transition: 0.3s;
  z-index: 1;
}
.back-img {
  transition: 0.25s;
  position: absolute;
  bottom: 0;
  width: 95%;
  left: 2.5%;
  aspect-ratio: 1 / 1;
  border-radius: 200px;
  background-color: #ff6c61;
}
.profile-row:hover img {
  scale: 1.2;
  rotate: -3deg;
  transform-origin: bottom;
}
.profile-row:hover .back-img {
  width: 98%;
  left: 1%;
}
.profile-row:hover {
  box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.37);
}
</style>