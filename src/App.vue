<template>
    <div id="app">
        <Navigation v-if="!isPageLogin"></Navigation>
        <keep-alive>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
    import Navigation from './components/Navigation.vue'
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'app',
        data() {
            return {
                isPageLogin: true
            }
        },
        components: {
            Navigation
        },
        computed: {
            ...mapState([
                'user'
            ]),
        },
        created: function () {
            let vm = this
            vm.routeChange()
        },
        watch: {
            '$route': 'routeChange'
        },
        methods:{
            routeChange(){
                let vm = this
                let path = vm.$route.path
                if (path.indexOf('login') >= 0) {
                    vm.isPageLogin = true
                } else {
                    vm.isPageLogin = false
                }
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .5s
    }
    .fade-enter, .fade-leave-active {
        transform: translateY(-10%);
        opacity: 0
    }
</style>
