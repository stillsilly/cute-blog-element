// 模块功能：登录登出

import request from './../utils/request'
import utils from './../utils/utils'

/*
* 登录
* option  {username,password}
* */
export const getUserInfo = () => {
    let user = localStorage.getItem('user')
    if (user) {
        return JSON.parse(user)
    } else {
        return null
    }
}

export const login = (option) => {
    return request({
        url: '/user/login',
        data: option,
    }).then((data) => {
        localStorage.setItem('user', JSON.stringify(data))

        // TODO 模拟后台设置cookie   等有了后台接口后，这个要删掉
        utils.setCookie('user', JSON.stringify(data))
        return new Promise((resolve) => {
            resolve(data)
        })
    })
}


/*
* 退出登录
* option  {username}
* */
export const logout = (option) => {
    return request({
        url: '/user/logout',
        data: option
    }).then((data) => {
        localStorage.removeItem('user')

        // TODO  这个应该是后台删，暂时模拟一下   等有了后台接口后，这个要删掉
        utils.setCookie('user', '')
        return new Promise((resolve) => {
            resolve(data)
        })
    })
}