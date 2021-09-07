import yearPicker from './year-picker.vue'

const plugins = {
  install:function(Vue) {
    Vue.component(yearPicker.name, yearPicker)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(yearPicker)
}

export default plugins