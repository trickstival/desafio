import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' é um alias para src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: load('Main') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
