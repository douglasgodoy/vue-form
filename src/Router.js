import Vue from "vue";
import VueRouter from "vue-router";
import Main from './views/Main.vue';
import List from './views/List.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: '/edit/:index',
    name: 'Edit',
    component: Main
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
