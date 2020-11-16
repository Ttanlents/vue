/*let vm=new Vue({
    el:'#div',
    data:{

    },
    methods:{

    }*//*,
    components:{
        /!**
         * 命名xxx-xxx
         * 组件可以多复用
         *!/
        'my-click':{
            props:['count']
            data:function () {
                //采用回调形式，避免组件复用时共用数据，这样不会共用data数据
             return {count:0}
            },
            methods:{
                clickCount:function () {
                    console.log(this)
                    this.count++
                }
            },
            template:`<button @click="clickCount">{{count}}</button>`
        }
    }*/

/*});*/

Vue.component('my-click',{

})