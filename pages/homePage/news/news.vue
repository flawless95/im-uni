<template>
	<view class="news">
		<view class="news__header">
			<u-tabs :list="newsTabs" :is-scroll="false" active-color="#61D0FF" :active-item-style="activeTabStyle" :current="current"
				class="news__header-tabs" @change="change"></u-tabs>
			<view class="news__header-publish" @click="publishNew">
				<u-icon name="plus" color="#61D0FF" size="32"></u-icon>
			</view>
		</view>
		<publish-moment ref="publishMomentRef"></publish-moment>
	</view>
</template>

<script>
	import {
		newsTabs
	} from 'config/common.config.js'
	export default {
		data() {
			return {
				newsTabs,
				current: 0,
				activeTabStyle: {
					color: 'rgb(48, 49, 51)'
				}
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			publishNew() {
				this.$refs.publishMomentRef.openPublish()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news {
		height: 100vh;
		width: 100%;
		padding: var(--status-bar-height) 20rpx 0;

		&__header {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			&-tabs {
				width: 370rpx;
			}

			&-publish {
				margin-right: 10rpx;
			}
		}
	}
</style>
