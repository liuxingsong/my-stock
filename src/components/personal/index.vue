<template>
  <div class="personal">
      <my-header :goBack='true'>
          <div slot="title">个人中心</div>
      </my-header>
      <my-content>
          <router-link to="/score" >88888888888888888888888888</router-link>
           <router-link to="/personal/play" >6666666666666666</router-link>
           <router-link to="/personal/account" >3333333333333</router-link>
           <router-view></router-view>
          
      </my-content>
      <div>
           
      </div>
      <my-footer></my-footer>
  </div>
</template>
<script>
    export default {
        name: 'personal',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                geohash:'555',
                shopId:'8989'
            }
        },
        mounted(){
            
            
        },
        methods: {
            showMyScore(){
                // this.$router
            }
        }
    }
</script>
<style scoped>
    /* .personal{
        width: 100%;
        height: 1000px;
        background: gold
    } */
</style>

