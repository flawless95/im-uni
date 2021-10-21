<template>
	<view class="login">
		<basic-container>
			<view class="login__form">
				<login-pwd v-show="currentLoginValue == 'login-pwd'"></login-pwd>
				<login-register v-show="currentLoginValue == 'login-register'"></login-register>
				<u-gap height="40"></u-gap>
				<login-selection :currentLoginValue.sync="currentLoginValue" @type-change="typeChange"></login-selection>
			</view>
		</basic-container>
	</view>
</template>

<script>
	import {
		loginTypes
	} from '@/config/login.config.js'
	export default {
		data() {
			return {
				currentLoginValue: 'login-pwd',
				loginTypes
			}
		},
		computed: {
		},
		onLoad({
			loginType
		}) {
			if (loginType) {
				this.currentLoginValue = loginType
			}
		},
		methods: {
			typeChange(value) {
				this.currentLoginValue = value
			}
		}
	}
</script>

<style scoped lang="scss">
	.login {
		height: 100vh;
		box-sizing: border-box;
		padding-top: calc(15vh);
		background-image: linear-gradient(to bottom right, #7A78FF, #5EDAFF);

		&__form {
			background-color: #FFFFFF;
			padding: 30rpx;
			border-radius: 25rpx;
		}
	}
</style>
