<template>
  <div class="footer">
     <router-link to="/"><span><img src="../../image/home.png" alt=""><span>首页</span></span></router-link>
     <router-link to="/detail"><span><img src="../../image/stock_line.png" alt=""><span>详细</span></span></router-link>
     <router-link to="/personal"><span><img src="../../image/personal.png" alt=""><span>我的</span></span></router-link>
  </div>
</template>
<script>
    export default {
        name: 'my-footer',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style scoped lang='less'>
    .footer{
        height: 88px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 2;
        background: rgba(0,0,0,.7);
        a{
            display: inline-block;
            width: 32%;
            text-align: center;
            cursor: pointer;
            
            span{
                display: flex;
                flex-direction:column;
                justify-content: center;
                align-items: center;
                color: #e6e6e6;
                margin-top: 10px;
                img{
                    width: 32px;
                }
                span{
                    margin-top: 6px;
                    &:active {
                        color: aqua;
                        font-size: 19px
                    }
                }
            }
        }
    }
</style>