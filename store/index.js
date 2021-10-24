import user from '@/store/modules/user.js'

import createPersistedState from 'vuex-persistedstate'
import {
	localStorage
} from '@/js_sdk/mp-storage/mp-storage/index.js'

// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules: {
		user
	},
	strict: true,
	plugins: [
		createPersistedState({
			storage: localStorage,
			key: 'im-uni'
		})
	]
})
// #endif







// #ifdef VUE3
import {
	createStore
} from 'vuex'
const store = createStore({
	modules: {
		user
	}
})
// #endif

export default store
