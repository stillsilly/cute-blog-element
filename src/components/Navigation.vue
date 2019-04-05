<template>
    <div class="navigation">
        <router-link v-for="(item) in navigatorList"
                     :class="['navigation-item']" :title="item.title" :to="item.path"> {{item.name}}
        </router-link>
        <div v-if="user" class="user-name"
             style="width:300px;float: right;margin-top: 20px;margin-right: 50px;color: #fff;">
            <span>用户名：{{user.name}}</span>
            <button @click="doLogout" style="margin-left: 15px;">退出登录</button>
        </div>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        menu: '2222',
        name: 'Navigation',
        data() {
            return {}
        },
        computed: {
            ...mapState({
                navigatorList: state => state.global.navigatorList,
                user: state => state.user.user,
            })
        },
        methods: {
            ...mapActions('user', [
                'logout',
            ]),
            async doLogout() {
                await this.logout()
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped lang="scss">
    .navigation {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        height: 60px;
        background: #2b5689;
        padding-left: 100px;

        .navigation-item {
            display: inline-block;
            height: 60px;
            line-height: 60px;
            padding-left: 20px;
            padding-right: 20px;
            background: #2b5689e6;
            text-align: center;
            color: #fff;
            cursor: pointer;
            font-size: 18px;
        }

        .router-link-exact-active {
            background: #ffcc33;
        }
    }


</style>