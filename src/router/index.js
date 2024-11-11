import { createRouter, createWebHistory } from 'vue-router';
import Router from 'vue-router';
import Login from '../components/Login.vue'; // 登入頁面
import Register from '../components/Register.vue'; // 註冊頁面
import Profile from '../components/Profile.vue'; // 用戶資料頁面
import Match from '../components/Match.vue'; // 配對頁面
import Home from '../components/Home.vue'; // 首頁

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true } // 需要登入才能訪問
  },
  {
    path: '/match',
    name: 'Match',
    component: Match,
    meta: { requiresAuth: true } // 需要登入才能訪問
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由守衛：檢查用戶是否已登入，若未登入，跳轉到登入頁面
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next('/login'); // 若未登入，強制跳轉到登入頁面
  } else {
    next(); // 允許進入頁面
  }
});

export default router;
