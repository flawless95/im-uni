import {
	loginWhiteList
} from "config/router.config.js"

const addRouterInterceptor = () => {
	let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
	list.forEach((item) => {
		uni.addInterceptor(item, {
			invoke: (e) => {
				//获取用户的token
				const token = uni.getStorageSync('uni_id_token'),
					//token是否已失效
					tokenExpired = uni.getStorageSync('uni_id_token_expired') < Date.now(),
					//获取要跳转的页面路径（url去掉"?"和"?"后的参数）
					url = e.url.split('?')[0];
				const pages = getCurrentPages();
				if (!pages.length) {
					console.log("首页启动调用了");
					return e
				}
				if (url.indexOf('loginPage') < 0) {
					const pass = loginWhiteList.some((whitePage) => url === whitePage)
					if (!pass) {
						uni.showToast({
							title: '请先登录',
							icon: 'none'
						})
						uni.navigateTo({
							url: "/pages/loginPage/index/index"
						})
					}
					return false
				}
				return e
			}
		})
	})
}

export default function() {
	addRouterInterceptor()
}
