<template>
	<view class="userCenter">
		<view class="userCenter__header">
			<view class="userCenter__header-title u-font-xl">
				我的
			</view>
			<view class="userCenter__info">
				<view class="userCenter__info-profile">
					<u-avatar :src="userinfo.avatar" size="136"></u-avatar>
					<view class="userCenter__info-base">
						<view class="userCenter__info-username u-font-lg">
							{{userinfo.username}}
						</view>
						<view class="userCenter__info-userid u-font-sm opacity-text">
							账号：{{userinfo.userid}}
						</view>
					</view>
				</view>

				<view class="userCenter__info-social">
					<view v-for="item in sociales" :key="item.value" class="userCenter__info-social-item">
						<view class="userCenter__info-social--number u-font-xxl">
							{{userinfo[item.value] | formatterTenThousand}}
						</view>
						<view class="opacity-text">
							{{item.label}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="userCenter__content">
			<uni-title title="我的动态" class="userCenter__content-title"></uni-title>
			<view class="userCenter__news">

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: {
					username: 'im-uni',
					userid: 'gooluer',
					fans: 1198234,
					focus: 432,
					like: 8782342
				},
				sociales: [{
						label: '粉丝',
						value: 'fans'
					},
					{
						label: '关注',
						value: 'focus'
					},
					{
						label: '获赞',
						value: 'like'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.userCenter {
		height: 100vh;
		background-image: linear-gradient(to bottom right, #7A78FF, #5EDAFF);
		display: flex;
		flex-direction: column;
		// background-size: cover;
		// background-repeat: no-repeat;

		&__header {
			padding: 45rpx 65rpx 15rpx;
			color: #FFFFFF;
			font-weight: 900;
			position: fixed;
			width: 100%;
			height: 450rpx;

			&-title {
				font-weight: 400;
				letter-spacing: 4rpx;
			}
		}

		&__info {
			display: flex;
			align-items: center;
			flex-direction: column;
			margin: 25rpx 0;

			&-profile {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
			}

			&-base {
				margin-left: 40rpx;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-around;
				padding: 25rpx 0;
			}

			&-social {
				width: 100%;
				margin-top: 35rpx;
				padding: 0 19rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				&-item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 98rpx;
					text-align: center;
					flex-direction: column;
				}
			}
		}

		&__content {
			flex: 1;
			background-color: #FFFFFF;
			border-radius: 60rpx;
			box-sizing: border-box;
			padding: 15rpx 20rpx;
			margin-top: 450rpx;
			position: sticky;

			&-title {
				margin-left: 26rpx;
			}
		}

		&__news {
			
		}
	}
</style>
