import Vue from 'vue'
import App from './App.vue'
// 按需引入组件
import {Container, Header, Aside, Main, Button, Input, Checkbox, Table, TableColumn, Row, Col, Select, Option} from 'element-ui'
// 引入下载的阿里巴巴图标
import './assets/icons/iconfont.css'

Vue.config.productionTip = false

Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Checkbox.name,Checkbox)
Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)

new Vue({
  render: h => h(App),
}).$mount('#app')
