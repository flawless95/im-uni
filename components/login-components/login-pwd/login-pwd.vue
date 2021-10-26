<template>
	<view class="lgoin-pwd">
		<uni-title title="账号密码登录" align="center"></uni-title>
		<u-form :model="form" ref="uForm" label-width="130">
			<u-form-item label="用户名" prop="username" required>
				<u-input v-model="form.username" :adjustPosition="false" placeholder="请输入账号" />
			</u-form-item>
			<!-- <u-form-item label="用户名" prop="username">
				<u-input v-model="form.username" placeholder="请输入账号" :adjustPosition="false"/>
			</u-form-item> -->
			<u-form-item label="密码" prop="password" required>
				<u-input v-model="form.password" type="password" :adjustPosition="false" placeholder="请输入密码" />
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
				},
				rules: {
					username: [{
						required: true,
						message: '请输入账号',
						trigger: ['change', 'blur'],
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur'],
					}],
				}
			};
		},
		mixins: [mixin],
		methods: {
			submit() {
				this.callLogin()
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.callLogin()
					} else {
						console.log('请检查输入数据');
					}
				});
			},
			callLogin() {
				uniCloud.callFunction({
					name: "user-center",
					data: {
						action: 'login-pwd',
						params: this.form
					},
					success: ({
						result
					}) => {
						if (result.code == 0) {
							this.loginSuccess(result)
						}
					},
					fail: (err) => {
						console.error(err)
					}
				})
			}
		}
	}
</script>

<style>
</style>
