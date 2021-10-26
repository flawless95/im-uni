import {
	mapMutations
} from 'vuex';

const loginSuccess = (result) => {
	uni.showToast({
		title: '登录成功',
		icon: 'none'
	});
	console.log('登录成功', result);

	// console.log('判断需要返回几层',delta);
	// uni.navigateBack({delta})
	uni.switchTab({
		url: '/pages/homePage/news/news'
	})
}


let mixin = {
	methods: {
		...mapMutations({
			setUserInfo: 'user/login'
		}),
		loginSuccess(result) {
			loginSuccess(result)
			delete result.userInfo.token
			this.setUserInfo(result.userInfo)
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.$refs.uForm.setRules(this.rules);
		})
	}
}
export default mixin
