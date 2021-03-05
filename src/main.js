import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import SortableList from "./components/SortableList.vue";
import Instructions from "./components/Instructions.vue";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: SortableList
  },
  {
    path: "/instructions",
    name: "instructions",
    component: Instructions
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount("#app");
