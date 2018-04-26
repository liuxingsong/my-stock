<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'my-content',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style scoped lang='less'>
    @import '../../style/mixin.less';
    .content{
        .wh(100%,1150px);
        .sc(55px,#fff);
        background: #e6e6e6;
        color: #fff
    }
</style>
