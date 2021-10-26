<template>
	<view class="login-register">
		<uni-title title="注册" align="center"></uni-title>
		<u-form :model="form" ref="uForm" label-width="130">
			<u-form-item label="用户名" prop="username" required>
				<u-input v-model="form.username" placeholder="请输入账号" :adjustPosition="false" />
			</u-form-item>
			<u-form-item label="密码" prop="password" required>
				<u-input v-model="form.password" type="password" placeholder="请输入密码" :password-icon="true"
					:adjustPosition="false" />
			</u-form-item>
			<u-form-item label="确认密码" label-width="150" prop="rePassword" required>
				<u-input type="password" v-model="form.rePassword" placeholder="请确认密码" :adjustPosition="false">
				</u-input>
			</u-form-item>
		</u-form>
		<u-gap height="40"></u-gap>
		<u-button type="primary" @click.native="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		name: "login-register",
		data() {
			return {
				form: {
					username: '',
					password: '',
					rePassword: ''
				},
				rules: {
					rePassword: [{
							required: true,
							message: '请重新输入密码',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return value === this.form.password;
							},
							message: '两次输入的密码不相等',
							trigger: ['change', 'blur'],
						}
					],
				}
			};
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						uniCloud.callFunction({
							name: "user-center",
							data: {
								action: 'register',
								params: this.form
							},
							success: (res) => {
								console.log(res)
							}
						})
					} else {
						console.log('请检查输入数据');
					}
				});

			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-register {}
</style>
