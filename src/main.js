import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import danboardUi  from './index'

Vue.use(danboardUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
