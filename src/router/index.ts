import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from "../pages/Homepage.vue";
import ProfilePage from "../pages/ProfilePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import PostPage from "../pages/PostPage.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Homepage },
  { path: "/profile", component: ProfilePage },
  { path: "/contact", component: ContactPage },
  { path: "/post", component: PostPage },
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
export default router
