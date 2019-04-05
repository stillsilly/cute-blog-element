import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils/utils'
import './validator/index'

Vue.prototype.$utils = utils
Vue.$utils = utils

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
