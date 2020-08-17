import Button from '../packages/button/index.js';

const components = [
  Button
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.vue)
}

export default {
  install
}