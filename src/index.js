import $ from 'jquery'

window.$ = window.jQuery = $

// JS
import './assets/sections/header/header'
import './assets/sections/main/main'
import './assets/sections/intro/intro'
import './assets/sections/tutorial/tutorial'
import './assets/sections/reviews/reviews'
import './assets/sections/projects/projects'
import './assets/sections/tasks/tasks'
import './assets/sections/filter-content/filter-content'
import './assets/sections/task-block/task-block'
import './assets/sections/footer/footer'

// VUE
import './components/Example.sass'
import './assets/sass/main.sass'

// Vue.js
window.Vue = require('vue')
import store from './store/index'

import { compile } from "vue-template-compiler"
// import './store/index'

// Vue components (for use in html)

Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
  data() {
    return {
      component: false
    }
  },
  store,
  el: ''
})