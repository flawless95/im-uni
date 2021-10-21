<template>
	<view class="login-register">
		<uni-title title="注册" align="center"></uni-title>
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
	export default {
		name: "login-register",
		data() {
			return {
				resData: '',
				form: {
					username: '',
					password: '',
				}
			};
		},
		methods: {
			submit() {
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-register {}
</style>
