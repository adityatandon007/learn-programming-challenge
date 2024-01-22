import { createRouter, createWebHistory } from "vue-router";
import ChallengesView from "../views/ChallengesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ChallengesView,
  },
  {
    path: "/problem/:id",
    name: "problem",
    component: () =>
      import(/* webpackChunkName: "problem" */ "../views/ProblemView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
