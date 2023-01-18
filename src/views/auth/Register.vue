<template>
  <div class="container">
    <div class="row justify-content-center login">
      <div class="col-lg-8 col-md-8 login-form">
        <div class="row justify-content-center mb-4">
          <div class="col-md-12">
            <img
              src="../../assets/cg-logo.png"
              width="70"
              height="70"
              class="my-2"
              alt="CGT"
            />
            <h1>Register an account</h1>
            <span>Have an Account? </span>
            <router-link to="/login">Login</router-link>
          </div>
        </div>
        <b-form @submit.stop.prevent="onSubmit" @reset="onReset" v-show="form">
          <div class="row text-left">
            <div class="col-md-6 pl-5 pb-4">
              <b-form-group id="name_label" label="Name" label-for="name">
                <b-form-input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Full Name"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="phone_label"
                label="Phone Number"
                label-for="phone"
              >
                <b-form-input
                  id="phone"
                  v-model="form.phone"
                  type="text"
                  placeholder="Phone Number"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="password_label"
                label="Password"
                label-for="password"
              >
                <b-form-input
                  id="password"
                  v-model="form.password"
                  type="password"
                  placeholder="********"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-6 pr-5 pb-4">
              <b-form-group id="email_label" label="Email" label-for="email">
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="bio_label" label="Bio" label-for="bio">
                <b-form-input
                  id="bio"
                  v-model="form.bio"
                  type="text"
                  placeholder="Bio"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="password_confirmation_label"
                label="Confirm Password"
                label-for="password_confirmation"
              >
                <b-form-input
                  id="password_confirmation"
                  v-model="form.confirm_password"
                  type="password"
                  placeholder="********"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-md-12 text-center">
              <b-button class="login-btn" type="submit" variant="primary"
                >Register</b-button
              >
            </div>
          </div>
        </b-form>
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
        .register(this.form)
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