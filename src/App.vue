<template>
  <div id="app" @click.prevent="toggleShowForm">
    <NavigationBar ref="navBar"/>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
import NavigationBar from './components/NavigationBar/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    // Home
    NavigationBar
  },
  methods: {
    //點擊空白處關閉創建表單
    toggleShowForm(event) {
        let sp = document.getElementById("travel-build-wrapper")

        if(sp) {
            if(!sp.contains(event.target)){
                this.$refs.navBar.showForm = 0
            }
        }

        let pageSp = document.getElementById("page")

        if(pageSp) {
            if(!pageSp.contains(event.target)){
                this.$refs.navBar.showPage = false
            }
        }
        console.log(123)
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&display=swap');

$primary-color: #61D2BB;
$primary-text-color: #242424;
$secondary-text-color: #AAAAAA;
$background-color: #F3F4F5;
$border-color: #E7E7E7;
$white: #FFFFFF;

#app {
    font-family: 'Noto Sans TC', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $primary-text-color;
    height: 100%;
}
</style>
