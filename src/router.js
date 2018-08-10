import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/Dashboard.vue")
    },
    {
      path: "/alertas",
      name: "ListarAlerta",
      component: () => import("./views/ListarAlerta.vue")
    },
    {
      path: "/cadastrarAlertas",
      name: "CadastrarAlerta",
      component: () => import("./views/CadastrarAlerta.vue")
    },
    {
      path: "/logout",
      name: "Logout",
      component: () => import("./views/Logout.vue")
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: () => import("./views/Perfil.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
