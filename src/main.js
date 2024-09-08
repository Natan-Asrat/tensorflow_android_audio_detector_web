import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrivacyPolicy from './components/PrivacyPolicy.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import {createRouter, createWebHistory} from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const routes = [
    {path: '/privacypolicy', component: PrivacyPolicy},
    {path: '/contact', component: Contact},
    {path: '/', component: Home}
  ]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

const app = createApp(App)
app.use(router)
app.mount('#app')
