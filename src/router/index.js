import Vue from 'vue'
import Router from 'vue-router'


// todo  所有的页面：
/*
登录、注册（注册登录一个页面 切换路由和tab）、
首页（关注动态和推荐的两个tab、默认关注、有登录和没登录两种情况，如果没登录，只有推荐）、
个人主页：信息展示、动态列表、文章列表
文章详情：文章、评论列表、评论文本输入框
*/

// 按需加载组件
const Login = () => import('./../page/Login.vue' /* webpackChunkName: "Login" */ )
const Home = () => import('./../page/Home.vue' /* webpackChunkName: "Home" */ )
const Article = () => import('./../page/Article.vue' /* webpackChunkName: "Article" */ )
const User = () => import('./../page/User.vue' /* webpackChunkName: "User" */ )


Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/article',
            name: 'Article',
            component: Article
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
    ],
})

// 页面的访问权限
router.beforeEach((to, from, next) => {
    // 权限判断先关掉
    next()
    return
    if (!Vue.$utils.getCookie('user') && to.name !== 'Login') {
        next({
            path: '/login',
            query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
    } else {
        next()
    }

})

export default router