'use strict';

let uniID = require('uni-id')
const uniCaptcha = require('uni-captcha')
const createConfig = require('uni-config-center')
const uniIdConfig = createConfig({
	pluginId: 'uni-id'
}).config()
const db = uniCloud.database()
const dbCmd = db.command
const usersDB = db.collection('uni-id-users')

exports.main = async (event, context) => {
	uniID = uniID.createInstance({
		context
	})

	const {
		action,
		uniIdToken,
		inviteCode,
	} = event;
	const deviceInfo = event.deviceInfo || {};
	let params = event.params

	let res = {}

	switch (action) {
		case 'register':
			let {
				username, password, nickname
			} = params

			res = await uniID.register({
				username,
				password,
				nickname,
				inviteCode
			});

			// if (res.code === 0) {
			// 	await registerSuccess(res.uid)
			// }

			break;
		case 'login-pwd':
			res = await uniID.login({
				...params,
				queryField: ['username', 'email', 'mobile']
			});
			break
		default:
			res = {
				code: 403,
				msg: '非法访问'
			}
			break;
	}

	//返回数据给客户端
	return res
};
