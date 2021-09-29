import Vue from 'vue'
import App from './App.vue'
// 按需引入组件
import {Container, Header, Aside, Footer, Main, Button, Input, Checkbox, Table, TableColumn, Row, Col, Select, Option, Dialog, Form, FormItem} from 'element-ui'
// 引入下载的阿里巴巴图标
import './assets/icons/iconfont.css'

Vue.config.productionTip = false

Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Aside.name, Aside)
Vue.component(Footer.name, Footer)
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
Vue.component(Dialog.name, Dialog)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
