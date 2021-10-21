<template>
	<view class="login-selection">
		<view v-for="(item) in usefulTypes" :key="item.value" class="login-selection__item" @click="changeType(item)">
			<span>{{item.label}}</span>
		</view>
	</view>
</template>

<script>
	import {
		loginTypes
	} from '@/config/login.config.js'
	export default {
		props: {
			currentLoginValue: {
				type: String,
				default: 'login-pwd'
			}
		},
		data() {
			return {
				loginTypes
			}
		},
		computed: {
			usefulTypes() {
				return this.loginTypes.filter(type => type.value !== this.currentLoginValue)
			}
		},
		methods: {
			changeType(type) {
				this.$emit('type-change', type.value)
				// this.currentLoginValue = type.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-selection {
		display: flex;
		flex-direction: row;
		justify-content: center;
		color: #2B85E4;

		&__item {
			margin: 10rpx;
		}
	}
</style>
