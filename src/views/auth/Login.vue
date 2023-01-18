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
            <h1>Login to your account</h1>
            <span>Don't have an Account? </span>
            <router-link to="/register">Create an Account</router-link>
          </div>
        </div>
        <div class="row text-left">
          <div class="col-md-12 px-5 pb-4">
            <b-form @submit.stop.prevent="onSubmit" @reset="onReset" v-show="form">
              <b-form-group id="email" label="Email" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="password" label="Password" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  placeholder="********"
                  required
                ></b-form-input>
              </b-form-group>
              <router-link to="/requestcode">Forgot Password?</router-link
              ><br />
              <div class="text-center">
                <b-button class="login-btn" type="submit" variant="primary"
                  >Login</b-button
                >
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from "@/services/auth.service";

export default {
  data() {
    return {
      form: { email: "", password: "" },
    };
  },
  methods: {
    onSubmit() {
      authService
        .login(this.form)
        .then((res) => {
          localStorage.setItem("token", res.token);
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
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

.login-form a {
  color: #ff6c61;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
.login-form button {
  background-color: #ff6c61;
  border: none;
}
.login-form button:hover {
  background-color: #e9645b;
}
</style>