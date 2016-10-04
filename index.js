import Vue from 'vue'
import App from './app/app.vue'

new Vue({
  el: 'body',
  // template: '<app></app>',
  components: {
    App
  },
})


Vue.config.devtools = process.env.NODE_ENV !== 'production'