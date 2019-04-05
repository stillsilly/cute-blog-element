const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

import * as User from './../../model/user'

const state = {
    user:User.getUserInfo(),
}

// actions
const actions = {
    async login({commit, state}, option) {
        option = option || {
            username: 'yangyang',
            password: '1234',
        }
        let user = await User.login(option);
        commit(LOGIN, user)
    },
    async logout({commit, state}) {
        await User.logout();
        commit(LOGOUT)
    },
}


// mutations
const mutations = {
    [LOGIN](state, user) {
        state.user = user
    },
    [LOGOUT](state) {
        state.user = null
    },
}



export default {
    namespaced: true,
    state,
    actions,
    mutations
}