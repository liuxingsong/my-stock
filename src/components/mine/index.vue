<template>
  <div class="mine-page">
    <my-header>
         <!-- <div slot="left"><</div> -->
         <div slot="title">首页</div>
    </my-header>
    <my-content>
       
        <!-- <mt-swipe :auto="1000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe> -->

        <!-- <mt-picker :slots="slots"  ></mt-picker>   -->
        
        <span>{{pickerValue}}</span>
         <mt-datetime-picker
            ref="picker"
            type="date"
            cancelText="取消"
            v-model="pickerValue"
            @confirm="handleConfirm"
            >
        </mt-datetime-picker>
        <span @click="testToast">clickMe</span>
        <mt-button type="primary" @click="openPicker">选择时间</mt-button>
    </my-content>
    
    <my-footer></my-footer>
  </div>
</template>
<script>
    // import { Toast } from 'mint-ui';
    export default {
        name:'minePage',
        data () {
            return{
                msg:'5656556asdfdsf565',
                slots:[{values: ['年假', '事假', '病假', '婚假', '其他']}]  ,
                pickerValue:'',
            }
        },
        methods:{
            openPicker() {
                this.$refs.picker.open();
               
                
            },
            handleConfirm(){
                console.log(this.pickerValue);
            },
            testToast(){
                Toast({
                    message: "提示",
                    position: 'top',
                    duration: 5000,
                });
            }
            
        },
        created(){
            
        },
        mounted(){
            // this.openPicker()
        },
        //  components:{
        //     "my-header":Header,
        //     "my-footer":Footer,
        //     // "lh-box":IndexBox
        // },
    }
</script>
<style scoped lang='less'>
    // @import '../../style/mixin';
    .content{
    }
</style>
