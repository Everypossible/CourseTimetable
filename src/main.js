import Vue from 'vue'
import App from './App.vue'
// 按需引入组件
import {Button} from 'element-ui'
// 引入下载的阿里巴巴图标
import './assets/icons/iconfont.css'

Vue.config.productionTip = false

Vue.component(Button.name, Button)

new Vue({
  render: h => h(App),
}).$mount('#app')
