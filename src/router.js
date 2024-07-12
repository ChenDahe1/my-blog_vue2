import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import AboutMe from './components/AboutMe.vue';
import ContactMe from './components/ContactMe.vue';
import ArticleDetail from './components/ArticleDetail.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutMe },
  { path: '/contact', component: ContactMe },
  { path: '/article/:id', component: ArticleDetail },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
];

const router = new Router({ routes });

export default router;
