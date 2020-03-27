import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => ('../views/Home.vue')
const Children = () => ('../views/children.vue')
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/children',
      name: 'Children',
      component: Children
    }
  ]
})
