<template>
	<view class="lgoin-pwd">
		<uni-title title="账号密码登录" align="center"></uni-title>
		<u-form :model="form" ref="uForm" label-width="120">
			<u-form-item label="用户名">
				<u-input v-model="form.username" />
			</u-form-item>
			<u-form-item label="密码">
				<u-input v-model="form.password" />
			</u-form-item>
		</u-form>
		<u-gap height="40"></u-gap>
		<u-button type="primary" @click.native="submit">提交</u-button>
	</view>
</template>

<script>
	import mixin from '../common/loginPage.mixin.js'
	export default {
		name: "login-pwd",
		data() {
			return {
				form: {
					username: '',
					password: ''
				}
			};
		},
		mixins:[mixin],
		methods: {
			submit() {
				uniCloud.callFunction({
					name: "user-center",
					data: {
						action: 'login-pwd',
						params: this.form
					},
					success: ({result}) => {
						if (result.code == 0) {
							this.loginSuccess(result)
						}
					}
				})
			}
		}
	}
</script>

<style>
</style>
