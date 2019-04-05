import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import global from './modules/global'
import user from './modules/user'

Vue.use(Vuex)

const state = {
    chartDataList: [],
    adjustList: [],
}

export default new Vuex.Store({
    modules: {
        global, user,
    },
    state,
    actions,
    mutations,
})