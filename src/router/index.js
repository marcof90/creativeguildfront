import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Login.vue"),
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/auth/Register.vue"),
      meta: {
        isAuth: true,
      },
  },
  {
    path: "/requestcode",
    name: "Request",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "request" */ "../views/auth/PasswordRequest.vue"
      ),
  },
  {
    path: "/passwordreset",
    name: "reset",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "reset" */ "../views/auth/PasswordReset.vue"),
  },
  {
    path: "/users/:id",
    name: "album",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "album" */ "../views/Album.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "*",
    name: "404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/errors/Error404.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!localStorage.getItem("token")) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }

  if (to.meta.isAuth) {
    if (localStorage.getItem("token")) {
      next({
        name: "home",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
