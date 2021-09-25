import Vue from 'vue'
import App from './App.vue'
// 按需引入组件
import {Button, Input, Checkbox, Table, TableColumn} from 'element-ui'
// 引入下载的阿里巴巴图标
import './assets/icons/iconfont.css'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Checkbox.name,Checkbox)
Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)

new Vue({
  render: h => h(App),
}).$mount('#app')
