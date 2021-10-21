<template>
	<view class="basic-container">
		<view class="basic-container__content">
			<slot></slot>
		</view>

	</view>
</template>

<script>
	export default {
		name: "basic-container",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.basic-container {
		padding: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		&__content {
			flex: 1
		}
	}
</style>
