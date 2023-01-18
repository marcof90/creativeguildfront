<template>
  <div class="container">
    <div class="row justify-content-center login">
      <div class="col-lg-6 col-md-6 login-form">
        <div class="row justify-content-center mb-4">
          <div class="col-md-12">
            <img
              src="../../assets/cg-logo.png"
              width="70"
              height="70"
              class="my-2"
              alt="CGT"
            />
            <h1>404</h1>
            <span>Page Not found </span>
            <router-link to="/">Back Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { email: "", password: "" },
    };
  },
  methods: {
    onSubmit(event) {
      console.log(event);
    },
    onReset(event) {
      console.log(event);
    },
  },
};
</script>

<style>
.login {
  padding-top: 8em;
}
.login-form {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 12px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.login-form a{
    color: #ff6c61;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
.login-form button{
    background-color: #ff6c61;
    border: none;
}
.login-form button:hover{
    background-color: #e9645b;

}
</style>