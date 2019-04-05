<template>
    <div>
        <p>这是login</p>

        <button @click="doLogin">点击登录</button>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "Login",
        data() {
            return {}
        },
        computed: {
            ...mapState('user', [
                'user',
            ]),
        },
        methods: {
            ...mapActions('user', [
                'login',
            ]),
            async doLogin() {
                let option = {
                    name: 'yangyang',
                    password: '1234'
                }
                await this.login(option);
                this.$router.push('/')
            },
        }
    }
</script>

<style scoped lang="scss">

</style>