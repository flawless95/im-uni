import App from './App'
import store from './store/index.js'
import * as filters from './filters/filters'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

import uView from "uview-ui";
Vue.use(uView);

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif












// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
