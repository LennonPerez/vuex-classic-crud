import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/EmployeesList"),
  },
  {
    path: "/form",
    name: "Form",
    component: () => import(/* webpackChunkName: "Form" */ "../views/Form"),
  },
  {
    path: "/:id",
    name: "Details",
    component: () =>
      import(/* webpackChunkName: "Details" */ "../views/Details"),
    props: (route) => {
      const { id } = route.params;
      return { id };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
