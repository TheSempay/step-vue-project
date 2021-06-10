import Vue from 'vue'
import VueRouter from 'vue-router' // run in terminal 'npm i vue-router'
import vueResource from 'vue-resource' // run in terminal 'npm i vue-resource'
import Customers from './components/Customers.vue'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/customers', component: Customers}
    ]
});

Vue.config.productionTip = false;

new Vue({
    router,
    template: `
      <div id="app">
        <ul>
          <li><router-link to="/customers">Customers</router-link></li>
        </ul>
      </div>
    `
}).$mount('#app')

