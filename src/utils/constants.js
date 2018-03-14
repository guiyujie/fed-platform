export const PRODUCT_TYPE = {
	 0:{
	 	type: 'agent',
	 	desc: '标准授权卡'
	 },
	 1:{
	 	type: 'service',
	 	desc: '增值授权卡'
	 }
}

export const AUTHKEY_STATUS = {
	1:{
		type: 'error',
		desc: '待激活'
	},
	2:{
		type: 'success',
		desc: '授权中'
	},
	3:{
		type: 'error',
		desc: '授权结束'
	},
	4:{
		type: 'default',
		desc: '密钥失效（未激活）'
	}
}