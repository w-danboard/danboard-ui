import WlButton from './src/button'

WlButton.install = function (Vue) {
  Vue.component(WlButton.name, WlButton)
}

export default WlButton