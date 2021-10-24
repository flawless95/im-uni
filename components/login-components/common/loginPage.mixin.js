import {mapMutations} from 'vuex';

const loginSuccess = (result) => {
	uni.showToast({
		title: '登录成功',
		icon: 'none'
	});
	console.log('登录成功',result);
	
	// console.log('判断需要返回几层',delta);
	// uni.navigateBack({delta})
	uni.switchTab({
		url: '/pages/homePage/news/news'
	})
}


let mixin = {
	methods:{
		...mapMutations({
			setUserInfo: 'user/login'
		}),
		loginSuccess(result){
			loginSuccess(result)
			delete result.userInfo.token
			this.setUserInfo(result.userInfo)
		}
	}
}
export default mixin