<template>
  <div class="col-md-6 mb-4" v-if="picture">
    <div class="picture-card text-left">
      <img :src="url + picture.img" alt="" />
      <h3>
        {{ picture.title }} <br />
        <b-icon-heart-fill v-if="picture.featured == 1"></b-icon-heart-fill>
        <b-icon-heart v-else></b-icon-heart>
        <small>{{ picture.created_at }} </small>
      </h3>

      <p>{{ picture.description }}</p>
    </div>
  </div>
</template>

<script>
import env from "@/environment/env";
export default {
  props: {
    picture: { type: Object, default: null },
  },
  data() {
    return {
      url: "",
    };
  },
  mounted() {
    this.url = env.back;
  },
};
</script>

<style>
.picture-card {
  overflow: hidden;
  position: relative;
  border-radius: 15px;
}
.picture-card img {
  width: 100%;
  border-radius: 15px;
  transition: 0.5s;
}

.picture-card h3,
.picture-card p {
  left: 20px;
  text-shadow: 0px 0px 4px #33333370;
  position: absolute;
}

.picture-card h3 {
  color: #eee;
  top: 220px;
  transition: 0.6s;
  line-height: 1.4;
}

.picture-card small {
  color: #ddd;
  top: 220px;
  transition: 0.4s;
  font-size: 0.5em;
}

.picture-card p {
  height: 0;
  bottom: 0;
  margin: 0;
  transition: 0.5s;
  color: #ccc;
  text-shadow: 1px 1px 4px black;
}

.picture-card svg {
  fill: #ff6c61;
  position: absolute;
  right: -30px;
  top: 0;
  font-size: 0.8em;
  opacity: 0;
  transition: .4s;
  transition-delay: .5s;
  filter: drop-shadow(1px 1px 3px rgb(0 0 0 / 0.2))
}

.picture-card:hover img {
  scale: 1.1;
}
.picture-card:hover h3 {
  top: 20px;
  line-height: 0.8;
}
.picture-card:hover p {
  height: 40px;
  bottom: 20px;
}
.picture-card:hover svg {
  opacity: 1;
}
</style>